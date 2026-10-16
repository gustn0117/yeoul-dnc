import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { INQUIRY_STATUSES, type InquiryStatus } from "@/lib/inquiry";
import { db } from "@/lib/supabase";

const MEMO_MAX = 2000;
const toId = (raw: string) => (/^\d+$/.test(raw) ? Number(raw) : null);

/* 상태 변경·관리자 메모 (관리자) */
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const id = toId((await params).id);
    const body = await request.json().catch(() => null);
    if (!id || !body) return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });

    const updates: Record<string, string> = { updated_at: new Date().toISOString() };
    if (body.status !== undefined) {
      if (!INQUIRY_STATUSES.includes(body.status as InquiryStatus)) return NextResponse.json({ error: "알 수 없는 상태입니다." }, { status: 400 });
      updates.status = body.status;
    }
    if (body.admin_memo !== undefined) {
      if (typeof body.admin_memo !== "string" || body.admin_memo.length > MEMO_MAX) {
        return NextResponse.json({ error: `메모는 ${MEMO_MAX}자 이내로 입력해 주세요.` }, { status: 400 });
      }
      updates.admin_memo = body.admin_memo;
    }

    const { data, error } = await db.from("inquiries").update(updates).eq("id", id).select().single();
    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ error: "수정 중 오류가 발생했습니다." }, { status: 500 });
    }
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

/* 삭제 (관리자) */
export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const id = toId((await params).id);
    if (!id) return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
    const { error } = await db.from("inquiries").delete().eq("id", id);
    if (error) {
      console.error("Supabase delete error:", error);
      return NextResponse.json({ error: "삭제 중 오류가 발생했습니다." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
