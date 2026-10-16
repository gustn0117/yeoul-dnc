import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { POPUP_IMAGE_MAX_BYTES, normalizePopup, popupImageSrc, validatePopupFields, type PopupFields, type PopupSetting } from "@/lib/popup";
import { getSetting, setSetting } from "@/lib/settings";

// 파일 앞부분으로 실제 이미지 형식 확인 (확장자·브라우저가 알려준 형식은 믿지 않음)
function sniffImageType(buf: Buffer) {
  if (buf.length < 12) return null;
  if (buf[0] === 0x89 && buf.toString("ascii", 1, 4) === "PNG") return "image/png";
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "image/jpeg";
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") return "image/webp";
  if (buf.toString("ascii", 0, 4) === "GIF8") return "image/gif";
  return null;
}

/* 현재 팝업 설정 (관리자) */
export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const popup = normalizePopup(await getSetting<PopupSetting>("popup"));
    return NextResponse.json({ popup, imageSrc: popup.image ? popupImageSrc(popup.image) : null });
  } catch (err) {
    console.error("popup load error:", err);
    return NextResponse.json({ error: "팝업 설정을 불러오지 못했습니다." }, { status: 500 });
  }
}

/* 팝업 저장 (관리자) — multipart: 글자 항목 + 선택 이미지 */
export async function PUT(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });

  const str = (key: string) => {
    const v = form.get(key);
    return typeof v === "string" ? v : "";
  };
  const date = (key: string) => (/^\d{4}-\d{2}-\d{2}$/.test(str(key)) ? str(key) : null);
  const fields: PopupFields = {
    enabled: str("enabled") === "true",
    title: str("title").trim(),
    body: str("body").replace(/\r\n/g, "\n").trim(),
    buttonLabel: str("buttonLabel").trim(),
    linkUrl: str("linkUrl").trim(),
    startsOn: date("startsOn"),
    endsOn: date("endsOn"),
  };

  try {
    const current = normalizePopup(await getSetting<PopupSetting>("popup"));
    let image = str("removeImage") === "true" ? null : current.image;
    let upload: { type: string; data: string; version: number } | null = null;

    const file = form.get("image");
    if (file instanceof File && file.size > 0) {
      if (file.size > POPUP_IMAGE_MAX_BYTES) return NextResponse.json({ error: "이미지는 1.5MB 이하로 올려 주세요." }, { status: 400 });
      const buf = Buffer.from(await file.arrayBuffer());
      const type = sniffImageType(buf);
      if (!type) return NextResponse.json({ error: "PNG·JPG·WEBP·GIF 이미지만 올릴 수 있습니다." }, { status: 400 });
      const width = Math.round(Number(str("imageWidth")));
      const height = Math.round(Number(str("imageHeight")));
      if (!(width > 0 && width <= 8000 && height > 0 && height <= 8000)) return NextResponse.json({ error: "이미지 크기를 읽지 못했습니다. 다른 이미지로 시도해 주세요." }, { status: 400 });
      const version = Date.now();
      upload = { type, data: buf.toString("base64"), version };
      image = { width, height, version };
    }

    const errors = validatePopupFields(fields, Boolean(image));
    const firstError = Object.values(errors)[0];
    if (firstError) return NextResponse.json({ error: firstError, fields: errors }, { status: 400 });

    if (upload) await setSetting("popup_image", upload);
    else if (!image && current.image) await setSetting("popup_image", {});

    const saved: PopupSetting = { ...fields, image, version: Date.now() };
    await setSetting("popup", saved);
    return NextResponse.json({ popup: saved, imageSrc: image ? popupImageSrc(image) : null });
  } catch (err) {
    console.error("popup save error:", err);
    return NextResponse.json({ error: "팝업 저장 중 오류가 발생했습니다." }, { status: 500 });
  }
}
