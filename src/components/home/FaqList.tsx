"use client";

import { useId, useState } from "react";

export type Faq = { tag: string; q: string; a: string };

/* 자주 묻는 질문 아코디언 — 여러 개를 동시에 열 수 있고, 첫 질문은 펼친 상태로 시작 */
export default function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const uid = useId();

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <ul className="divide-y divide-g200 border-y border-g200">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <li key={item.q} data-reveal style={{ "--reveal-delay": `${Math.min(i, 5) * 0.05}s` } as React.CSSProperties}>
            <h3>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`${uid}-a${i}`}
                id={`${uid}-q${i}`}
                className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
              >
                <span className="hidden w-24 shrink-0 text-[15px] font-bold text-brand sm:block">{item.tag}</span>
                <span className="flex-1 text-[19px] font-bold leading-[1.45] tracking-[-0.03em] text-ink sm:text-[21px]">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? "bg-brand text-white" : "bg-g100 text-g700 group-hover:bg-g200"}`}
                >
                  <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                  <span className={`absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-300 ease-soft ${isOpen ? "scale-y-0" : ""}`} />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-a${i}`}
              role="region"
              aria-labelledby={`${uid}-q${i}`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-420 ease-soft ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="mb-6 rounded-2xl bg-g50 px-5 py-5 text-[17px] leading-[1.75] text-g700 sm:mb-7 sm:ml-30 sm:px-7 sm:text-[18px]">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
