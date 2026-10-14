"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type CrumbMenuProps = {
  current: string;
  items: { label: string; href: string }[];
  /** dark: 네이비 바탕(서브 히어로)용 */
  tone?: "light" | "dark";
};

/* 브레드크럼의 현재 페이지 항목 — 누르면 형제 페이지로 이동하는 작은 메뉴 */
export default function CrumbMenu({ current, items, tone = "light" }: CrumbMenuProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 font-bold transition-colors ${
          tone === "dark" ? "text-white hover:bg-white/10" : "text-ink hover:bg-g100"
        }`}
      >
        {current}
        <svg className={`h-4 w-4 transition-transform duration-300 ${tone === "dark" ? "text-white/60" : "text-g500"} ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul
          id={menuId}
          className="animate-pop-in absolute left-0 top-full z-30 mt-2 min-w-44 overflow-hidden rounded-2xl border border-g200 bg-white p-1.5"
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={item.label === current ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-xl px-4 text-[15px] font-semibold transition-colors ${
                  item.label === current ? "bg-brand-50 text-brand" : "text-g700 hover:bg-g100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
