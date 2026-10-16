import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { MAX_RECIPIENTS, getRecipients, isMobileNumber, notifyStatus, sendTestNotification } from "@/lib/notify";
import { rateLimit } from "@/lib/rate-limit";
import { setSetting } from "@/lib/settings";

/* 알림 설정 상태 + 받을 번호 (관리자) */
export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    return NextResponse.json({ status: notifyStatus(), recipients: await getRecipients() });
  } catch (err) {
    console.error("notify load error:", err);
    return NextResponse.json({ error: "알림 설정을 불러오지 못했습니다." }, { status: 500 });
  }
}

/* 받을 번호 저장 (최대 3개, 휴대폰 번호만) */
export async function PUT(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const body = await request.json().catch(() => null);
  const raw: unknown[] = Array.isArray(body?.recipients) ? body.recipients : [];
  const recipients = [...new Set(raw.map((n) => (typeof n === "string" ? n.replace(/\D/g, "") : "")).filter(Boolean))];
  if (recipients.length > MAX_RECIPIENTS) return NextResponse.json({ error: `알림 받을 번호는 ${MAX_RECIPIENTS}개까지 등록할 수 있습니다.` }, { status: 400 });
  const invalid = recipients.find((n) => !isMobileNumber(n));
  if (invalid) return NextResponse.json({ error: `휴대폰 번호 형식이 아닙니다: ${invalid}` }, { status: 400 });
  try {
    await setSetting("notify", { recipients });
    return NextResponse.json({ recipients });
  } catch (err) {
    console.error("notify save error:", err);
    return NextResponse.json({ error: "저장 중 오류가 발생했습니다." }, { status: 500 });
  }
}

/* 테스트 알림 보내기 — 요금이 드는 발송이라 10분에 3번까지 */
export async function POST() {
  const denied = await requireAdmin();
  if (denied) return denied;
  if (!rateLimit("notify-test", 3, 10 * 60_000)) {
    return NextResponse.json({ ok: false, message: "테스트 알림은 10분에 3번까지 보낼 수 있습니다. 잠시 후 다시 시도해 주세요." }, { status: 429 });
  }
  try {
    return NextResponse.json(await sendTestNotification());
  } catch (err) {
    console.error("notify test error:", err);
    return NextResponse.json({ ok: false, message: "테스트 알림 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
