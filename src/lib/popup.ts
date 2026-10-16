/* 메인 팝업 — 관리자 화면(편집·미리보기), 공개 API, 메인 화면이 같은 규칙을 쓴다 (서버 전용 코드 없음) */

export type PopupImageMeta = { width: number; height: number; version: number };

/** DB(site_settings.popup)에 저장되는 값 */
export type PopupSetting = {
  enabled: boolean;
  title: string;
  body: string;
  buttonLabel: string;
  linkUrl: string;
  /** "YYYY-MM-DD" (한국 날짜), 비우면 제한 없음 */
  startsOn: string | null;
  endsOn: string | null;
  image: PopupImageMeta | null;
  /** 저장할 때마다 바뀜 — '오늘 하루 보지 않기'를 내용이 바뀌면 다시 보여주는 기준 */
  version?: number;
};

/** 메인 화면에 내려주는 값 */
export type PublicPopup = {
  title: string;
  body: string;
  buttonLabel: string;
  linkUrl: string;
  image: { src: string; width: number; height: number } | null;
  version: string;
};

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export const POPUP_LIMITS = { title: 60, body: 600, buttonLabel: 20, linkUrl: 300 } as const;
export const POPUP_IMAGE_MAX_BYTES = 1.5 * 1024 * 1024;

export const EMPTY_POPUP: PopupSetting = {
  enabled: false,
  title: "",
  body: "",
  buttonLabel: "",
  linkUrl: "",
  startsOn: null,
  endsOn: null,
  image: null,
};

/** 저장값이 일부 비었거나 형식이 달라도 안전하게 채움 */
export function normalizePopup(raw: Partial<PopupSetting> | null | undefined): PopupSetting {
  const text = (v: unknown) => (typeof v === "string" ? v : "");
  const date = (v: unknown) => (typeof v === "string" && DATE_RE.test(v) ? v : null);
  const img = raw?.image;
  return {
    enabled: raw?.enabled === true,
    title: text(raw?.title),
    body: text(raw?.body),
    buttonLabel: text(raw?.buttonLabel),
    linkUrl: text(raw?.linkUrl),
    startsOn: date(raw?.startsOn),
    endsOn: date(raw?.endsOn),
    image: img && img.width > 0 && img.height > 0 && img.version ? { width: img.width, height: img.height, version: img.version } : null,
    version: typeof raw?.version === "number" ? raw.version : 0,
  };
}

/** 한국 시간 기준 오늘 (YYYY-MM-DD) */
export function todayInSeoul(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

export function popupImageSrc(image: PopupImageMeta) {
  return `/api/popup/image?v=${image.version}`;
}

/** 지금 메인에 띄울지: 켜져 있고, 제목이나 이미지가 있고, 노출 기간 안 */
export function isPopupLive(p: PopupSetting, today = todayInSeoul()) {
  if (!p.enabled || (!p.title.trim() && !p.image)) return false;
  if (p.startsOn && today < p.startsOn) return false;
  if (p.endsOn && today > p.endsOn) return false;
  return true;
}

export function toPublicPopup(p: PopupSetting): PublicPopup {
  return {
    title: p.title,
    body: p.body,
    buttonLabel: p.buttonLabel,
    linkUrl: p.linkUrl,
    image: p.image ? { src: popupImageSrc(p.image), width: p.image.width, height: p.image.height } : null,
    version: String(p.version ?? 0),
  };
}

/** 링크는 사이트 안 경로(/contact), http(s) 주소, 전화(tel:)만 */
export function isAllowedLink(url: string) {
  if (!url) return true;
  if (url.startsWith("/") && !url.startsWith("//")) return true;
  if (/^https?:\/\/[^\s"'<>]+$/i.test(url)) return true;
  return /^tel:[0-9+\-]{8,20}$/.test(url);
}

export type PopupFields = Omit<PopupSetting, "image" | "version">;
export type PopupErrors = Partial<Record<keyof PopupFields | "image", string>>;

/** 관리자 입력 검사 — 서버(저장 직전)와 관리자 화면(저장 전 안내)이 같이 쓴다 */
export function validatePopupFields(input: PopupFields, hasImage: boolean): PopupErrors {
  const errors: PopupErrors = {};
  if (input.title.length > POPUP_LIMITS.title) errors.title = `제목은 ${POPUP_LIMITS.title}자 이내로 입력해 주세요.`;
  if (input.body.length > POPUP_LIMITS.body) errors.body = `내용은 ${POPUP_LIMITS.body}자 이내로 입력해 주세요.`;
  if (input.buttonLabel.length > POPUP_LIMITS.buttonLabel) errors.buttonLabel = `버튼 문구는 ${POPUP_LIMITS.buttonLabel}자 이내로 입력해 주세요.`;
  if (input.linkUrl.length > POPUP_LIMITS.linkUrl || !isAllowedLink(input.linkUrl)) {
    errors.linkUrl = "링크는 /contact 같은 사이트 주소, https:// 로 시작하는 주소, tel:전화번호 중 하나로 입력해 주세요.";
  }
  if (input.buttonLabel && !input.linkUrl) errors.linkUrl = "버튼을 누르면 이동할 링크를 입력해 주세요.";
  if (input.startsOn && input.endsOn && input.startsOn > input.endsOn) errors.endsOn = "종료일이 시작일보다 빠릅니다.";
  if (input.enabled && !input.title.trim() && !hasImage) errors.title = "팝업을 켜려면 제목이나 이미지 중 하나는 있어야 합니다.";
  return errors;
}

/** 제목의 **강조** 구간을 나눔 → 파란 형광펜으로 표시 */
export function splitAccent(title: string) {
  return title.split(/\*\*(.+?)\*\*/g).map((text, i) => ({ text, accent: i % 2 === 1 })).filter((part) => part.text);
}
