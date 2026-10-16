import { NextRequest, NextResponse, after } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { INQUIRY_STATUSES, normalizeInquiry, validateInquiry, type Inquiry, type InquiryStatus } from "@/lib/inquiry";
import { notifyNewInquiry } from "@/lib/notify";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { db } from "@/lib/supabase";

const PAGE_SIZE = 20;

/* 상담 접수 (누구나) — 저장 후 관리자 카카오톡 알림은 응답을 보낸 뒤에 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "필수 항목을 모두 입력해주세요." }, { status: 400 });
    }

    // 공백만 입력·길이 초과·연락처 형식 오류를 서버에서도 막는다 (폼과 같은 규칙)
    const errors = validateInquiry(body);
    const firstError = Object.values(errors)[0];
    if (firstError) {
      return NextResponse.json({ error: firstError, fields: errors }, { status: 400 });
    }

    // 같은 곳에서 짧은 시간에 반복 접수 방지 (스팸·알림 요금 보호) — 10분에 5건
    if (!rateLimit(`inquiry:${clientIp(request.headers)}`, 5, 10 * 60_000)) {
      return NextResponse.json({ error: "짧은 시간에 접수가 반복되었습니다. 잠시 후 다시 시도하시거나 1668-5832로 전화 주세요." }, { status: 429 });
    }

    const { data, error } = await db.from("inquiries").insert(normalizeInquiry(body)).select().single();
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "문의 접수 중 오류가 발생했습니다." }, { status: 500 });
    }

    // 알림이 늦거나 실패해도 고객에게는 바로 접수 완료를 보여준다
    after(() => notifyNewInquiry(data as Inquiry));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

/* 접수 목록 (관리자) */
export async function GET(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const page = Math.max(1, parseInt(searchParams.get("page") || "1") || 1);
  const offset = (page - 1) * PAGE_SIZE;

  let query = db
    .from("inquiries")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);
  if (status && INQUIRY_STATUSES.includes(status as InquiryStatus)) query = query.eq("status", status);

  // 상태별 건수 (탭의 '신규 n건' 표시용)
  const [{ data, error, count }, { count: newCount }] = await Promise.all([
    query,
    db.from("inquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
  ]);
  if (error) {
    console.error("Supabase select error:", error);
    return NextResponse.json({ error: "조회 중 오류가 발생했습니다." }, { status: 500 });
  }
  return NextResponse.json({ data, count, newCount: newCount ?? 0, page, limit: PAGE_SIZE });
}
