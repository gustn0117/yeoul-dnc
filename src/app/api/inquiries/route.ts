import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { company_name, contact_name, phone, industry, message, channel, budget, has_website } = body;

    if (!company_name || !contact_name || !phone || !industry || !message) {
      return NextResponse.json({ error: "필수 항목을 모두 입력해주세요." }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("inquiries")
      .insert({
        company_name,
        contact_name,
        phone,
        industry,
        message,
        channel: channel || null,
        budget: budget || null,
        has_website: has_website || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "문의 접수 중 오류가 발생했습니다." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

  if (password !== "1234") {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }

  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 20;
  const offset = (page - 1) * limit;

  let query = supabase
    .from("inquiries")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (status && status !== "all") {
    query = query.eq("status", status);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error("Supabase select error:", error);
    return NextResponse.json({ error: "조회 중 오류가 발생했습니다." }, { status: 500 });
  }

  return NextResponse.json({ data, count, page, limit });
}
