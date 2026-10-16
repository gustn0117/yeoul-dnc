import type { ReactNode } from "react";

/* 관리자 화면 공용 조각 — 사이트와 같은 색·글꼴, 넉넉한 글자 크기 */

export const inputCls =
  "w-full rounded-xl border border-g200 bg-white px-4 py-3 text-[16px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-g400 focus:border-brand focus:ring-4 focus:ring-brand/10 aria-[invalid=true]:border-red-400";

export function Card({ title, desc, action, children, className = "" }: { title?: string; desc?: ReactNode; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-g200 bg-white p-5 sm:p-7 ${className}`}>
      {(title || action) && (
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title && <h2 className="text-[19px] font-extrabold tracking-[-0.03em] text-ink">{title}</h2>}
            {desc && <p className="mt-1 text-[15px] leading-relaxed text-g600">{desc}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Field({ id, label, hint, error, counter, children }: { id: string; label: string; hint?: ReactNode; error?: string; counter?: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[15px] font-bold text-g800">
          {label}
        </label>
        {counter && <span className="text-[13px] tabular-nums text-g500">{counter}</span>}
      </div>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[14px] font-semibold text-red-600">
          {error}
        </p>
      ) : (
        hint && <p className="mt-1.5 text-[14px] leading-relaxed text-g500">{hint}</p>
      )}
    </div>
  );
}

export function Toggle({ id, checked, onChange, label }: { id: string; checked: boolean; onChange: (next: boolean) => void; label: string }) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="group inline-flex min-h-11 items-center gap-3 text-[16px] font-bold text-ink"
    >
      <span className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${checked ? "bg-brand" : "bg-g300"}`}>
        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-[left] duration-200 ${checked ? "left-6" : "left-1"}`} />
      </span>
      {label}
    </button>
  );
}

export function Notice({ tone = "info", children }: { tone?: "info" | "success" | "warning" | "error"; children: ReactNode }) {
  const styles = {
    info: "border-brand-100 bg-brand-50 text-brand",
    success: "border-emerald-200 bg-emerald-50 text-emerald-800",
    warning: "border-amber-200 bg-amber-50 text-amber-900",
    error: "border-red-200 bg-red-50 text-red-700",
  }[tone];
  return (
    <p role={tone === "error" ? "alert" : "status"} className={`rounded-xl border px-4 py-3 text-[15px] font-semibold leading-relaxed ${styles}`}>
      {children}
    </p>
  );
}
