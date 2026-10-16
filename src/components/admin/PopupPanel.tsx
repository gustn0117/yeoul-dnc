"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { adminApi } from "@/components/admin/api";
import { Card, Field, Notice, Toggle, inputCls } from "@/components/admin/ui";
import PopupCard from "@/components/popup/PopupCard";
import { EMPTY_POPUP, POPUP_IMAGE_MAX_BYTES, POPUP_LIMITS, isPopupLive, todayInSeoul, validatePopupFields, type PopupErrors, type PopupFields, type PopupSetting, type PublicPopup } from "@/lib/popup";
import { COMPANY, KAKAO_FRIEND_URL, KAKAO_URL, TEL_HREF } from "@/lib/site";

const MAX_WIDTH = 1080;
const LINK_PRESETS = [
  { label: "상담 신청 페이지", url: "/contact" },
  { label: "카카오톡 상담", url: KAKAO_URL },
  { label: "카카오톡 채널 추가", url: KAKAO_FRIEND_URL },
  { label: `전화 ${COMPANY.tel}`, url: TEL_HREF },
];

type Pending = { blob: Blob; url: string; width: number; height: number };

const fieldsOf = (p: PopupSetting): PopupFields => ({
  enabled: p.enabled,
  title: p.title,
  body: p.body,
  buttonLabel: p.buttonLabel,
  linkUrl: p.linkUrl,
  startsOn: p.startsOn,
  endsOn: p.endsOn,
});

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("이미지를 읽지 못했습니다."));
    img.src = url;
  });

/** 올린 이미지를 가로 1080px 이하로 줄이고 가볍게 다시 저장 (움직이는 GIF는 그대로) */
async function prepareImage(file: File): Promise<Pending> {
  const sourceUrl = URL.createObjectURL(file);
  try {
    const img = await loadImage(sourceUrl);
    const { naturalWidth: w, naturalHeight: h } = img;
    const keepOriginal = (file.type === "image/gif" || (w <= MAX_WIDTH && file.size <= 600 * 1024)) && file.size <= POPUP_IMAGE_MAX_BYTES;
    if (keepOriginal) return { blob: file, url: URL.createObjectURL(file), width: w, height: h };

    const scale = Math.min(1, MAX_WIDTH / w);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
    const encode = (type: string, quality: number) => new Promise<Blob | null>((r) => canvas.toBlob(r, type, quality));
    let blob = await encode("image/webp", 0.86);
    if (!blob || blob.type !== "image/webp") blob = await encode("image/jpeg", 0.88);
    if (!blob) throw new Error("이미지를 변환하지 못했습니다.");
    return { blob, url: URL.createObjectURL(blob), width: canvas.width, height: canvas.height };
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

/* 팝업 관리 — 왼쪽에서 고치면 오른쪽 미리보기에 바로 보이고, 저장하면 메인에 바로 반영 */
export default function PopupPanel() {
  const [saved, setSaved] = useState<{ popup: PopupSetting; imageSrc: string | null } | null>(null);
  const [form, setForm] = useState<PopupFields>(fieldsOf(EMPTY_POPUP));
  const [pending, setPending] = useState<Pending | null>(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [errors, setErrors] = useState<PopupErrors>({});
  const [notice, setNotice] = useState<{ tone: "success" | "error" | "warning"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const pendingUrl = useRef<string | null>(null);

  useEffect(() => {
    adminApi<{ popup: PopupSetting; imageSrc: string | null }>("/api/admin/popup").then(({ ok, data }) => {
      if (!ok || !data.popup) return setLoadError(data.error ?? "팝업 설정을 불러오지 못했습니다.");
      setSaved({ popup: data.popup, imageSrc: data.imageSrc ?? null });
      setForm(fieldsOf(data.popup));
    });
    return () => {
      if (pendingUrl.current) URL.revokeObjectURL(pendingUrl.current);
    };
  }, []);

  const set = <K extends keyof PopupFields>(key: K, value: PopupFields[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setNotice(null);
  };

  const replacePending = (next: Pending | null) => {
    if (pendingUrl.current) URL.revokeObjectURL(pendingUrl.current);
    pendingUrl.current = next?.url ?? null;
    setPending(next);
  };

  async function pickImage(file: File | undefined) {
    if (!file) return;
    if (!/^image\/(png|jpeg|webp|gif)$/.test(file.type)) return setErrors((e) => ({ ...e, image: "PNG·JPG·WEBP·GIF 이미지만 올릴 수 있습니다." }));
    try {
      const next = await prepareImage(file);
      if (next.blob.size > POPUP_IMAGE_MAX_BYTES) {
        URL.revokeObjectURL(next.url);
        return setErrors((e) => ({ ...e, image: "이미지가 너무 큽니다. 1.5MB 이하로 줄여서 올려 주세요." }));
      }
      replacePending(next);
      setRemoveImage(false);
      setErrors((e) => ({ ...e, image: undefined, title: undefined }));
      setNotice(null);
    } catch (err) {
      setErrors((e) => ({ ...e, image: err instanceof Error ? err.message : "이미지를 읽지 못했습니다." }));
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  const savedImage = !removeImage && saved?.popup.image && saved.imageSrc ? { src: saved.imageSrc, width: saved.popup.image.width, height: saved.popup.image.height } : null;
  const previewImage = pending ? { src: pending.url, width: pending.width, height: pending.height } : savedImage;
  const preview: PublicPopup = { title: form.title, body: form.body, buttonLabel: form.buttonLabel, linkUrl: form.linkUrl, image: previewImage, version: "preview" };
  const dirty = saved !== null && (JSON.stringify(form) !== JSON.stringify(fieldsOf(saved.popup)) || pending !== null || removeImage);

  const today = todayInSeoul();
  const liveNow = isPopupLive({ ...form, image: previewImage ? { width: 1, height: 1, version: 1 } : null }, today);
  const statusText = !form.enabled
    ? "꺼져 있음 — 메인에 팝업이 뜨지 않습니다."
    : liveNow
      ? "켜져 있음 — 메인에 접속하면 팝업이 뜹니다."
      : form.startsOn && today < form.startsOn
        ? `예약됨 — ${form.startsOn}부터 뜹니다.`
        : form.endsOn && today > form.endsOn
          ? `기간 끝남 — ${form.endsOn}까지였습니다.`
          : "제목이나 이미지를 넣어야 뜹니다.";

  async function save() {
    const found = validatePopupFields(form, Boolean(previewImage));
    if (Object.values(found).some(Boolean)) {
      setErrors(found);
      return setNotice({ tone: "error", text: "입력 내용을 확인해 주세요." });
    }
    setSaving(true);
    const body = new FormData();
    body.set("enabled", String(form.enabled));
    for (const key of ["title", "body", "buttonLabel", "linkUrl", "startsOn", "endsOn"] as const) body.set(key, form[key] ?? "");
    if (pending) {
      body.set("image", pending.blob, "popup");
      body.set("imageWidth", String(pending.width));
      body.set("imageHeight", String(pending.height));
    }
    if (removeImage) body.set("removeImage", "true");
    const { ok, data } = await adminApi<{ popup: PopupSetting; imageSrc: string | null; fields: PopupErrors }>("/api/admin/popup", { method: "PUT", body });
    setSaving(false);
    if (!ok || !data.popup) {
      if (data.fields) setErrors(data.fields);
      return setNotice({ tone: "error", text: data.error ?? "저장하지 못했습니다." });
    }
    setSaved({ popup: data.popup, imageSrc: data.imageSrc ?? null });
    setForm(fieldsOf(data.popup));
    replacePending(null);
    setRemoveImage(false);
    setNotice({ tone: "success", text: "저장했습니다. 메인 화면에 바로 반영됩니다. ('오늘 하루 보지 않기'를 누른 방문자에게도 바뀐 내용은 다시 보입니다.)" });
  }

  function revert() {
    if (!saved) return;
    setForm(fieldsOf(saved.popup));
    replacePending(null);
    setRemoveImage(false);
    setErrors({});
    setNotice(null);
  }

  if (loadError) return <Notice tone="error">{loadError}</Notice>;
  if (!saved) return <p className="rounded-2xl border border-g200 bg-white py-16 text-center text-[16px] text-g500">불러오는 중…</p>;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)]">
      <div className="space-y-5">
        <Card title="노출" desc="끄면 메인 화면에 팝업이 뜨지 않습니다.">
          <Toggle id="popup-enabled" checked={form.enabled} onChange={(v) => set("enabled", v)} label="메인 화면에 팝업 띄우기" />
          <p className={`mt-2 text-[15px] font-semibold ${liveNow ? "text-emerald-700" : "text-g600"}`}>{statusText}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field id="popup-starts" label="시작일 (선택)" hint="비우면 바로 뜹니다.">
              <input id="popup-starts" type="date" value={form.startsOn ?? ""} onChange={(e) => set("startsOn", e.target.value || null)} className={inputCls} />
            </Field>
            <Field id="popup-ends" label="종료일 (선택)" hint="비우면 끌 때까지 뜹니다." error={errors.endsOn}>
              <input id="popup-ends" type="date" value={form.endsOn ?? ""} onChange={(e) => set("endsOn", e.target.value || null)} aria-invalid={Boolean(errors.endsOn)} className={inputCls} />
            </Field>
          </div>
        </Card>

        <Card title="내용" desc="이미지만, 글자만, 이미지와 글자를 함께 넣는 것 모두 가능합니다.">
          <div className="space-y-5">
            <Field id="popup-title" label="제목" counter={`${form.title.length}/${POPUP_LIMITS.title}`} error={errors.title} hint={<>강조할 부분을 <b className="text-g700">**이렇게**</b> 감싸면 파란색으로 강조됩니다.</>}>
              <input id="popup-title" value={form.title} maxLength={POPUP_LIMITS.title} onChange={(e) => set("title", e.target.value)} aria-invalid={Boolean(errors.title)} placeholder="예: 홈페이지 **리뉴얼** 오픈" className={inputCls} />
            </Field>
            <Field id="popup-body" label="내용" counter={`${form.body.length}/${POPUP_LIMITS.body}`} error={errors.body} hint="줄을 바꾸면 팝업에서도 줄이 바뀝니다.">
              <textarea id="popup-body" value={form.body} maxLength={POPUP_LIMITS.body} rows={5} onChange={(e) => set("body", e.target.value)} aria-invalid={Boolean(errors.body)} className={`${inputCls} resize-y`} />
            </Field>

            <div>
              <p className="mb-2 text-[15px] font-bold text-g800">이미지 (선택)</p>
              {previewImage ? (
                <div className="flex flex-wrap items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element -- 업로드 전 미리보기(blob 주소) */}
                  <img src={previewImage.src} alt="선택한 팝업 이미지" className="h-20 w-auto max-w-40 rounded-lg border border-g200 object-cover" />
                  <button type="button" onClick={() => fileRef.current?.click()} className="min-h-11 rounded-full border border-g200 px-4 text-[15px] font-bold text-g700 hover:bg-g50">
                    이미지 바꾸기
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      replacePending(null);
                      if (saved.popup.image) setRemoveImage(true);
                      setNotice(null);
                    }}
                    className="min-h-11 rounded-full px-3 text-[15px] font-semibold text-red-600 hover:underline"
                  >
                    이미지 빼기
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex w-full flex-col items-center gap-1 rounded-xl border-2 border-dashed border-g300 bg-g50 px-4 py-7 text-center transition-colors hover:border-brand hover:bg-brand-50"
                >
                  <span className="text-[16px] font-bold text-g800">이미지 올리기</span>
                  <span className="text-[14px] text-g500">PNG·JPG·WEBP·GIF · 가로 1080px 이하로 자동으로 줄여 저장합니다</span>
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="sr-only" tabIndex={-1} aria-label="팝업 이미지 파일" onChange={(e) => pickImage(e.target.files?.[0])} />
              {errors.image && <p className="mt-1.5 text-[14px] font-semibold text-red-600">{errors.image}</p>}
            </div>
          </div>
        </Card>

        <Card title="버튼 · 링크 (선택)" desc="버튼 문구 없이 링크만 넣으면 이미지를 눌렀을 때 이동합니다.">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <Field id="popup-button" label="버튼 문구" counter={`${form.buttonLabel.length}/${POPUP_LIMITS.buttonLabel}`} error={errors.buttonLabel}>
              <input id="popup-button" value={form.buttonLabel} maxLength={POPUP_LIMITS.buttonLabel} onChange={(e) => set("buttonLabel", e.target.value)} placeholder="예: 무료 상담 신청" className={inputCls} />
            </Field>
            <Field id="popup-link" label="이동할 링크" error={errors.linkUrl}>
              <input id="popup-link" value={form.linkUrl} onChange={(e) => set("linkUrl", e.target.value)} aria-invalid={Boolean(errors.linkUrl)} placeholder="/contact 또는 https://…" className={inputCls} />
            </Field>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {LINK_PRESETS.map((p) => (
              <button key={p.url} type="button" onClick={() => set("linkUrl", p.url)} className={`min-h-9 rounded-full px-3.5 text-[14px] font-semibold ${form.linkUrl === p.url ? "bg-brand text-white" : "bg-g100 text-g700 hover:bg-g200"}`}>
                {p.label}
              </button>
            ))}
          </div>
        </Card>

        <div className="sticky bottom-0 z-10 -mx-4 border-t border-g200 bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
          {notice && (
            <div className="mb-3">
              <Notice tone={notice.tone}>{notice.text}</Notice>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={save} disabled={saving || !dirty} className="btn btn-brand min-h-12 px-7 text-[16px] disabled:opacity-50">
              {saving ? "저장 중…" : "저장하고 메인에 반영"}
            </button>
            {dirty && (
              <button type="button" onClick={revert} disabled={saving} className="min-h-12 rounded-full px-3 text-[15px] font-semibold text-g600 hover:underline">
                되돌리기
              </button>
            )}
            <span className="text-[14px] text-g500">{dirty ? "저장하지 않은 변경 사항이 있습니다." : "저장된 상태입니다."}</span>
            <Link href="/" target="_blank" rel="noopener noreferrer" className="ml-auto text-[15px] font-bold text-brand hover:underline">
              메인에서 확인 ↗
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="mb-2 text-[15px] font-bold text-g800">미리보기</p>
        <div className="rounded-2xl bg-ink/55 p-5 sm:p-8">
          <div className="mx-auto max-w-100">
            <PopupCard popup={preview} preview />
          </div>
        </div>
        <p className="mt-2 text-[14px] text-g500">실제 메인 화면에서도 이 모양으로 뜹니다. (미리보기에서는 버튼을 눌러도 이동하지 않습니다)</p>
      </div>
    </div>
  );
}
