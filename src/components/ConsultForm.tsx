"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckIcon } from "@/components/ui/icons";
import {
  BUDGET_OPTIONS,
  CHANNEL_OPTIONS,
  EMPTY_INQUIRY,
  MESSAGE_MAX,
  WEBSITE_OPTIONS,
  validateInquiry,
  type InquiryField,
  type InquiryInput,
} from "@/lib/inquiry";

type ConsultFormProps = {
  /** compact: 홈 하단(필수 5개) / full: 상담 페이지(선택 항목 포함) */
  variant?: "compact" | "full";
};

const fieldBase =
  "w-full rounded-input bg-g100 px-5 text-[17px] font-medium text-ink outline-none transition-[background-color,box-shadow] duration-200 placeholder:text-g500 hover:bg-g200/70 focus:bg-white focus:ring-2 focus:ring-accent/40 aria-[invalid=true]:bg-white aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-400/60";

const CHANNEL_LOGOS: Partial<Record<(typeof CHANNEL_OPTIONS)[number], string>> = {
  "카카오 광고": "kakaotalk",
  "네이버 광고": "naver",
  "메타 광고": "meta",
  "유튜브 광고": "youtube",
  "구글 광고": "google",
  "당근 광고": "danggeun",
};

export default function ConsultForm({ variant = "compact" }: ConsultFormProps) {
  const [form, setForm] = useState<InquiryInput>(EMPTY_INQUIRY);
  const [errors, setErrors] = useState<Partial<Record<InquiryField, string>>>({});
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [serverError, setServerError] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const full = variant === "full";

  useEffect(() => {
    if (status === "done") doneRef.current?.focus();
  }, [status]);

  const update = (key: InquiryField, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");

    const nextErrors = validateInquiry(form);
    setErrors(nextErrors);
    setAgreeError(!agreed);
    const firstInvalid = (Object.keys(nextErrors) as InquiryField[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (!agreed) {
      formRef.current?.querySelector<HTMLElement>('[name="agree"]')?.focus();
      return;
    }

    // 자동 입력 봇이 숨김 칸을 채우면 전송하지 않고 접수된 것처럼 처리
    if (honeypotRef.current?.value) {
      setStatus("done");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) setErrors(data.fields);
        throw new Error(data.error || "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
      setStatus("done");
    } catch (err) {
      setServerError(err instanceof Error && err.message !== "Failed to fetch" ? err.message : "네트워크 연결을 확인한 뒤 다시 시도해주세요.");
      setStatus("idle");
    }
  }

  const reset = () => {
    setForm(EMPTY_INQUIRY);
    setErrors({});
    setStatus("idle");
  };

  if (status === "done") {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className="animate-pop-in flex flex-col items-center px-6 py-14 text-center outline-none sm:py-20">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-h3">문의가 접수되었습니다</h3>
        <p className="mt-2 text-[17px] text-g700">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
        <button type="button" onClick={reset} className="btn btn-soft mt-8">
          추가 문의하기
        </button>
      </div>
    );
  }

  const err = (key: InquiryField) => errors[key];
  const describedBy = (key: InquiryField) => (errors[key] ? `${uid}-${key}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* 봇 차단용 숨김 칸 — 사람에게는 보이지 않음 */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          홈페이지 주소
          <input ref={honeypotRef} type="text" name="homepage" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id={`${uid}-company`} label="업체명" required error={err("company_name")} errorId={describedBy("company_name")}>
          <input
            id={`${uid}-company`}
            name="company_name"
            type="text"
            autoComplete="organization"
            value={form.company_name}
            onChange={(e) => update("company_name", e.target.value)}
            placeholder="업체명 또는 브랜드명"
            aria-invalid={!!err("company_name")}
            aria-describedby={describedBy("company_name")}
            className={`${fieldBase} h-14`}
          />
        </Field>
        <Field id={`${uid}-industry`} label="업종" required error={err("industry")} errorId={describedBy("industry")}>
          <input
            id={`${uid}-industry`}
            name="industry"
            type="text"
            value={form.industry}
            onChange={(e) => update("industry", e.target.value)}
            placeholder="예: 병원, 부동산, 음식점"
            aria-invalid={!!err("industry")}
            aria-describedby={describedBy("industry")}
            className={`${fieldBase} h-14`}
          />
        </Field>
        <Field id={`${uid}-name`} label="담당자명" required error={err("contact_name")} errorId={describedBy("contact_name")}>
          <input
            id={`${uid}-name`}
            name="contact_name"
            type="text"
            autoComplete="name"
            value={form.contact_name}
            onChange={(e) => update("contact_name", e.target.value)}
            placeholder="예: 홍길동 팀장"
            aria-invalid={!!err("contact_name")}
            aria-describedby={describedBy("contact_name")}
            className={`${fieldBase} h-14`}
          />
        </Field>
        <Field id={`${uid}-phone`} label="연락처" required error={err("phone")} errorId={describedBy("phone")}>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="010-0000-0000"
            aria-invalid={!!err("phone")}
            aria-describedby={describedBy("phone")}
            className={`${fieldBase} h-14`}
          />
        </Field>
      </div>

      <Field
        id={`${uid}-message`}
        label="문의내용"
        required
        error={err("message")}
        errorId={describedBy("message")}
        aside={
          <span className={`text-[14px] tabular-nums ${form.message.length >= MESSAGE_MAX ? "text-red-500" : "text-g500"}`}>
            {form.message.length} / {MESSAGE_MAX}
          </span>
        }
      >
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={full ? 5 : 4}
          maxLength={MESSAGE_MAX}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="현재 상황이나 궁금한 점을 자유롭게 적어주세요. (예: 통화 편한 시간)"
          aria-invalid={!!err("message")}
          aria-describedby={describedBy("message")}
          className={`${fieldBase} resize-none py-4 leading-[1.6]`}
        />
      </Field>

      {full && (
        <div className="mt-3 flex flex-col gap-7 border-t border-g200 pt-8">
          <div>
            <p className="text-[19px] font-extrabold tracking-[-0.03em] text-ink">추가 정보</p>
            <p className="mt-1 text-[16px] text-g600">선택 항목을 작성해주시면 보다 정확한 상담이 가능합니다.</p>
          </div>
          <OptionGroup legend="희망 광고 채널" value={form.channel} onReset={() => update("channel", "")}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {CHANNEL_OPTIONS.map((opt) => (
                <OptionChip key={opt} name="channel" value={opt} checked={form.channel === opt} onChange={() => update("channel", opt)}>
                  {CHANNEL_LOGOS[opt] && (
                    // eslint-disable-next-line @next/next/no-img-element -- 24px 브랜드 SVG
                    <img src={`/images/logos/${CHANNEL_LOGOS[opt]}.svg`} alt="" className="h-5 w-5 object-contain" />
                  )}
                  {opt}
                </OptionChip>
              ))}
            </div>
          </OptionGroup>
          <OptionGroup legend="월 광고 예산" value={form.budget} onReset={() => update("budget", "")}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BUDGET_OPTIONS.map((opt) => (
                <OptionChip key={opt} name="budget" value={opt} checked={form.budget === opt} onChange={() => update("budget", opt)}>
                  {opt}
                </OptionChip>
              ))}
            </div>
          </OptionGroup>
          <OptionGroup legend="홈페이지·랜딩페이지 보유 여부" value={form.has_website} onReset={() => update("has_website", "")}>
            <div className="grid grid-cols-3 gap-2">
              {WEBSITE_OPTIONS.map((opt) => (
                <OptionChip key={opt} name="has_website" value={opt} checked={form.has_website === opt} onChange={() => update("has_website", opt)}>
                  {opt}
                </OptionChip>
              ))}
            </div>
          </OptionGroup>
        </div>
      )}

      <div className={`flex flex-col gap-5 ${full ? "mt-2" : ""} sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                if (e.target.checked) setAgreeError(false);
              }}
              aria-invalid={agreeError}
              aria-describedby={agreeError ? `${uid}-agree-error` : undefined}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-white ring-1 ring-g300 transition-colors peer-checked:bg-brand peer-checked:ring-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent"
            >
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[16px] leading-[1.55] text-g700">
              개인정보 수집 및 이용에 동의합니다.
              <span className="block text-[14px] text-g600">수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.</span>
            </span>
          </label>
          {agreeError && (
            <p id={`${uid}-agree-error`} className="mt-2 pl-9 text-[15px] font-semibold text-red-600">
              개인정보 수집 및 이용에 동의해주세요.
            </p>
          )}
        </div>
        <button type="submit" disabled={status === "submitting"} className="btn btn-brand min-h-14 w-full shrink-0 px-8 text-[18px] disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {status === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
              접수 중...
            </>
          ) : (
            "상담 신청하기"
          )}
        </button>
      </div>

      {serverError && (
        <p role="alert" className="rounded-input bg-red-50 px-5 py-4 text-[16px] font-semibold text-red-700">
          {serverError}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  errorId,
  aside,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-[16px] font-bold text-ink">
          {label}
          {required && (
            <span className="ml-1 text-signal" aria-hidden="true">
              *
            </span>
          )}
          {required && <span className="sr-only">(필수)</span>}
        </label>
        {aside}
      </div>
      {children}
      {error && (
        <p id={errorId} className="text-[15px] font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function OptionGroup({ legend, value, onReset, children }: { legend: string; value: string; onReset: () => void; children: ReactNode }) {
  return (
    <fieldset>
      <div className="mb-3 flex items-center justify-between">
        <legend className="text-[16px] font-bold text-ink">{legend}</legend>
        {value && (
          <button type="button" onClick={onReset} className="min-h-9 rounded-full px-3 text-[14px] font-semibold text-g600 hover:bg-g100">
            초기화
          </button>
        )}
      </div>
      {children}
    </fieldset>
  );
}

function OptionChip({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <label className="relative block cursor-pointer">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="peer sr-only" />
      <span className="flex min-h-13 items-center justify-center gap-2 rounded-input bg-g100 px-3 text-center text-[15px] font-semibold text-g700 transition-colors hover:bg-g200/70 peer-checked:bg-brand-50 peer-checked:text-brand peer-checked:ring-2 peer-checked:ring-brand/40 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
        {children}
      </span>
    </label>
  );
}
