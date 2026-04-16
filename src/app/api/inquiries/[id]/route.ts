import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (body.password !== "1234") {
      return NextResponse.json({ error: "인증 실패" }, { status: 401 });
    }

    const updates: Record<string, string> = { updated_at: new Date().toISOString() };
    if (body.status) updates.status = body.status;
    if (body.admin_memo !== undefined) updates.admin_memo = body.admin_memo;

    const { data, error } = await supabase
      .from("inquiries")
      .update(updates)
      .eq("id", parseInt(id))
      .select()
      .single();

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ error: "수정 중 오류가 발생했습니다." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);

    if (searchParams.get("password") !== "1234") {
      return NextResponse.json({ error: "인증 실패" }, { status: 401 });
    }

    const { error } = await supabase.from("inquiries").delete().eq("id", parseInt(id));

    if (error) {
      console.error("Supabase delete error:", error);
      return NextResponse.json({ error: "삭제 중 오류가 발생했습니다." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
