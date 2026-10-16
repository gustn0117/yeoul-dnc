import "server-only";
import { createHmac, randomBytes } from "node:crypto";
import type { Inquiry } from "@/lib/inquiry";
import { getSetting } from "@/lib/settings";
import { SITE_URL } from "@/lib/site";

/* 새 상담 접수 → 관리자 카카오톡 알림
   - 솔라피에 직접 보냄 (Make 같은 중간 단계 없이: 더 빠르고, 별도 요금·장애 지점이 없음)
   - 알림톡 템플릿이 승인되면 알림톡, 승인 전이면 등록된 발신번호로 문자(LMS)
   - MAKE_WEBHOOK_URL을 넣으면 Make 시나리오로도 같은 내용을 보냄
   설정값은 서버 .env.production — 비어 있으면 조용히 건너뛰고 접수는 그대로 저장된다. */

const SOLAPI_BASE = process.env.SOLAPI_BASE_URL || "https://api.solapi.com";
const ADMIN_URL = `${SITE_URL}/admin`;
export const DEFAULT_RECIPIENTS = ["01098486247"];
export const MAX_RECIPIENTS = 3;

type NotifySetting = { recipients?: string[] };
type Mode = "alimtalk" | "sms" | "off";

const env = (name: string) => process.env[name]?.trim() || null;

function solapi() {
  const apiKey = env("SOLAPI_API_KEY");
  const apiSecret = env("SOLAPI_API_SECRET");
  const pfId = env("SOLAPI_PFID");
  const templateId = env("SOLAPI_TEMPLATE_ID");
  const sender = env("SOLAPI_SENDER")?.replace(/\D/g, "") || null;
  const mode: Mode = !apiKey || !apiSecret ? "off" : pfId && templateId ? "alimtalk" : sender ? "sms" : "off";
  return { apiKey, apiSecret, pfId, templateId, sender, mode };
}

/** 관리자 화면 '알림 설정'에 보여줄 발송 방식 (설정값 자체는 내보내지 않음) */
export function notifyStatus() {
  return { mode: solapi().mode, hasMake: Boolean(env("MAKE_WEBHOOK_URL")) };
}

export const isMobileNumber = (digits: string) => /^01[016789]\d{7,8}$/.test(digits);

/** 알림 받을 번호 (관리자 화면에서 바꿈, 처음엔 010-9848-6247). 빈 목록이면 알림 끔 */
export async function getRecipients() {
  const saved = await getSetting<NotifySetting>("notify");
  const list = saved?.recipients ?? DEFAULT_RECIPIENTS;
  return list.map((n) => n.replace(/\D/g, "")).filter(isMobileNumber).slice(0, MAX_RECIPIENTS);
}

const clip = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1)}…` : text);

const seoulTime = (iso: string) =>
  new Intl.DateTimeFormat("ko-KR", { timeZone: "Asia/Seoul", month: "long", day: "numeric", weekday: "short", hour: "numeric", minute: "2-digit" }).format(new Date(iso));

type InquiryLike = Pick<Inquiry, "company_name" | "contact_name" | "phone" | "industry" | "message" | "created_at">;

/** 알림톡 템플릿 변수 — 솔라피에 등록·승인받은 템플릿의 #{변수명}과 글자 하나까지 같아야 한다 (README 참고) */
export function templateVariables(inq: InquiryLike) {
  return {
    "#{업체명}": clip(inq.company_name, 40),
    "#{담당자}": clip(inq.contact_name, 20),
    "#{연락처}": inq.phone,
    "#{업종}": clip(inq.industry, 30),
    "#{문의내용}": clip(inq.message.replace(/\s+/g, " ").trim(), 200),
    "#{접수시각}": seoulTime(inq.created_at),
  };
}

/** 문자(LMS)용 본문 — 알림톡 템플릿과 같은 내용 */
export function messageText(inq: InquiryLike) {
  const v = templateVariables(inq);
  return [
    "[여울디앤씨] 새 상담 신청이 접수되었습니다.",
    "",
    `■ 업체명: ${v["#{업체명}"]}`,
    `■ 담당자: ${v["#{담당자}"]}`,
    `■ 연락처: ${v["#{연락처}"]}`,
    `■ 업종: ${v["#{업종}"]}`,
    `■ 문의내용: ${v["#{문의내용}"]}`,
    "",
    `접수시각: ${v["#{접수시각}"]}`,
    `관리자 페이지: ${ADMIN_URL}`,
  ].join("\n");
}

// 솔라피 API 키 인증: "HMAC-SHA256 apiKey=..., date=ISO시각, salt=랜덤, signature=hex(HMAC(date+salt, secret))"
function authorization(apiKey: string, apiSecret: string) {
  const date = new Date().toISOString();
  const salt = randomBytes(16).toString("hex");
  const signature = createHmac("sha256", apiSecret).update(date + salt).digest("hex");
  return `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`;
}

type SolapiFailed = { to?: string; statusCode?: string; statusMessage?: string };

async function sendViaSolapi(inq: InquiryLike, recipients: string[]) {
  const c = solapi();
  if (c.mode === "off") return "솔라피 설정 전이라 보내지 않았습니다.";
  if (!recipients.length) return "알림 받을 번호가 없어 보내지 않았습니다.";

  const messages = recipients.map((to) =>
    c.mode === "alimtalk"
      ? {
          to,
          ...(c.sender ? { from: c.sender } : {}),
          // 발신번호가 있으면 알림톡 실패 시 문자로 대체발송
          kakaoOptions: { pfId: c.pfId, templateId: c.templateId, variables: templateVariables(inq), disableSms: !c.sender },
        }
      : { to, from: c.sender, type: "LMS", subject: "[여울디앤씨] 새 상담 접수", text: messageText(inq) },
  );

  const res = await fetch(`${SOLAPI_BASE}/messages/v4/send-many/detail`, {
    method: "POST",
    headers: { Authorization: authorization(c.apiKey!, c.apiSecret!), "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
    signal: AbortSignal.timeout(10_000),
  });
  const json = (await res.json().catch(() => null)) as { errorMessage?: string; message?: string; failedMessageList?: SolapiFailed[] } | null;
  if (!res.ok) throw new Error(`솔라피 오류: ${json?.errorMessage || json?.message || `HTTP ${res.status}`}`);
  const failed = json?.failedMessageList ?? [];
  if (failed.length) throw new Error(`솔라피 접수 실패: ${failed.map((f) => `${f.to ?? ""} ${f.statusMessage ?? f.statusCode ?? ""}`.trim()).join(", ")}`);
  return `${c.mode === "alimtalk" ? "카카오 알림톡" : "문자(LMS)"}으로 ${recipients.length}명에게 보냈습니다.`;
}

async function sendViaMake(inq: InquiryLike & Partial<Inquiry>) {
  const url = env("MAKE_WEBHOOK_URL");
  if (!url) return null;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: "inquiry.created", inquiry: inq, text: messageText(inq), admin_url: ADMIN_URL }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Make 웹훅 오류: HTTP ${res.status}`);
  return "Make 웹훅으로 보냈습니다.";
}

async function deliver(inq: InquiryLike & Partial<Inquiry>) {
  const recipients = await getRecipients();
  const results = await Promise.allSettled([sendViaSolapi(inq, recipients), sendViaMake(inq)]);
  return results.map((r) => (r.status === "fulfilled" ? { ok: true, message: r.value } : { ok: false, message: r.reason instanceof Error ? r.reason.message : String(r.reason) }));
}

/** 새 접수 알림 — 실패해도 접수는 이미 저장됐으므로 로그만 남긴다 */
export async function notifyNewInquiry(inq: Inquiry) {
  try {
    for (const r of await deliver(inq)) if (!r.ok) console.error("[notify]", r.message);
  } catch (err) {
    console.error("[notify] 알림 처리 실패:", err);
  }
}

/** 관리자 화면의 '테스트 알림 보내기' */
export async function sendTestNotification() {
  const results = await deliver({
    company_name: "테스트 업체",
    contact_name: "홍길동",
    phone: "010-0000-0000",
    industry: "테스트",
    message: "관리자 페이지에서 보낸 테스트 알림입니다. 실제 접수가 아닙니다.",
    created_at: new Date().toISOString(),
  });
  const lines = results.filter((r) => r.message).map((r) => r.message as string);
  return { ok: results.every((r) => r.ok), message: lines.join(" ") || "보낼 수 있는 알림 설정이 없습니다." };
}
