import { NextRequest, NextResponse } from "next/server";
import { getSetting } from "@/lib/settings";

export const dynamic = "force-dynamic";

type StoredImage = { type?: string; data?: string; version?: number };

// 같은 버전은 메모리에 들고 있다가 바로 내줌 (DB를 매번 읽지 않게)
let cache: { version: number; type: string; body: Buffer } | null = null;

/* 팝업 이미지 (누구나) — 주소에 버전이 붙어 있어 브라우저가 오래 저장해도 됨 */
export async function GET(request: NextRequest) {
  const version = Number(new URL(request.url).searchParams.get("v"));
  try {
    if (!cache || cache.version !== version) {
      const img = await getSetting<StoredImage>("popup_image");
      if (!img?.data || !img.type || !img.version) return new NextResponse(null, { status: 404 });
      cache = { version: img.version, type: img.type, body: Buffer.from(img.data, "base64") };
    }
    return new NextResponse(new Uint8Array(cache.body), {
      headers: {
        "Content-Type": cache.type,
        "Cache-Control": cache.version === version ? "public, max-age=31536000, immutable" : "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    console.error("popup image error:", err);
    return new NextResponse(null, { status: 500 });
  }
}
