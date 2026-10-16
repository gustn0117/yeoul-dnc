import { NextResponse } from "next/server";
import { isPopupLive, normalizePopup, toPublicPopup, type PopupSetting } from "@/lib/popup";
import { getSetting } from "@/lib/settings";

// 관리자가 바꾸면 바로 반영되도록 매번 새로 읽음
export const dynamic = "force-dynamic";

/* 메인 팝업 (누구나) — 켜져 있고 노출 기간 안일 때만 내용을 준다 */
export async function GET() {
  const headers = { "Cache-Control": "no-store" };
  try {
    const popup = normalizePopup(await getSetting<PopupSetting>("popup"));
    return NextResponse.json({ popup: isPopupLive(popup) ? toPublicPopup(popup) : null }, { headers });
  } catch (err) {
    console.error("popup read error:", err);
    return NextResponse.json({ popup: null }, { headers });
  }
}
