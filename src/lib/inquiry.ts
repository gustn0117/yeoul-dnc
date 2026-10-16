/* 상담 문의 입력 규칙 — 폼(클라이언트)과 /api/inquiries(서버)가 같은 규칙을 쓴다.
   선택지 문자열은 DB에 그대로 저장되고 /admin에 그대로 표시되므로 바꾸지 말 것. */

export const CHANNEL_OPTIONS = [
  "카카오 광고",
  "네이버 광고",
  "메타 광고",
  "유튜브 광고",
  "구글 광고",
  "문자 마케팅",
  "당근 광고",
  "부동산 특화 광고",
  "잘 모르겠음",
] as const;

export const BUDGET_OPTIONS = ["100만원 미만", "100~300만원", "300~500만원", "500~1,000만원", "1,000만원 이상", "미정 / 상담 후 결정"] as const;

export const WEBSITE_OPTIONS = ["보유", "미보유", "제작 예정"] as const;

export const MESSAGE_MAX = 500;

export type InquiryInput = {
  company_name: string;
  contact_name: string;
  phone: string;
  industry: string;
  message: string;
  channel: string;
  budget: string;
  has_website: string;
};

export type InquiryField = keyof InquiryInput;

export type InquiryStatus = "new" | "in_progress" | "completed" | "cancelled";

/** DB에 저장된 상담 접수 한 건 (yeoul_dnc.inquiries) */
export type Inquiry = {
  id: number;
  company_name: string;
  contact_name: string;
  phone: string;
  industry: string;
  message: string;
  channel: string | null;
  budget: string | null;
  has_website: string | null;
  status: InquiryStatus;
  admin_memo: string | null;
  created_at: string;
  updated_at: string;
};

export const INQUIRY_STATUSES: InquiryStatus[] = ["new", "in_progress", "completed", "cancelled"];

export const EMPTY_INQUIRY: InquiryInput = {
  company_name: "",
  contact_name: "",
  phone: "",
  industry: "",
  message: "",
  channel: "",
  budget: "",
  has_website: "",
};

// 조사까지 붙인 이름 (예: "업체명을 입력해주세요")
const REQUIRED: { key: InquiryField; obj: string; topic: string; max: number }[] = [
  { key: "company_name", obj: "업체명을", topic: "업체명은", max: 100 },
  { key: "contact_name", obj: "담당자명을", topic: "담당자명은", max: 50 },
  { key: "phone", obj: "연락처를", topic: "연락처는", max: 30 },
  { key: "industry", obj: "업종을", topic: "업종은", max: 100 },
  { key: "message", obj: "문의내용을", topic: "문의내용은", max: MESSAGE_MAX },
];

/** 숫자만 8~12자리(대표번호 1668-xxxx ~ 휴대폰·지역번호)면 통과. 하이픈·공백·괄호 허용 */
export function isValidPhone(value: string) {
  if (!/^[0-9\-\s()+]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 12;
}

/** 필드별 오류 메시지. 문제가 없으면 빈 객체 */
export function validateInquiry(input: Partial<Record<InquiryField, unknown>>) {
  const errors: Partial<Record<InquiryField, string>> = {};
  for (const { key, obj, topic, max } of REQUIRED) {
    const value = typeof input[key] === "string" ? (input[key] as string).trim() : "";
    if (!value) errors[key] = `${obj} 입력해주세요.`;
    else if (value.length > max) errors[key] = `${topic} ${max}자 이내로 입력해주세요.`;
  }
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  if (phone && !errors.phone && !isValidPhone(phone)) errors.phone = "연락처를 숫자로 정확히 입력해주세요. (예: 010-1234-5678)";
  return errors;
}

const pick = <T extends readonly string[]>(options: T, value: unknown) =>
  typeof value === "string" && (options as readonly string[]).includes(value) ? value : null;

/** 서버 저장용으로 공백 정리 + 선택지 밖의 값은 null */
export function normalizeInquiry(input: Partial<Record<InquiryField, unknown>>) {
  const text = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  return {
    company_name: text(input.company_name),
    contact_name: text(input.contact_name),
    phone: text(input.phone),
    industry: text(input.industry),
    message: text(input.message),
    channel: pick(CHANNEL_OPTIONS, input.channel),
    budget: pick(BUDGET_OPTIONS, input.budget),
    has_website: pick(WEBSITE_OPTIONS, input.has_website),
  };
}
