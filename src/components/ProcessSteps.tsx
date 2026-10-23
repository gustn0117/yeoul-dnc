import type { CSSProperties } from "react";
import { PROCESS_STEPS } from "@/lib/offerings";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 의뢰 후 진행 5단계 — 화면에 들어오면 위쪽 선이 왼쪽부터 채워지고, 선이 닿는 순서대로 점이 켜짐.
   detail: 단계마다 고객이 준비·확인할 내용까지 (상담문의 페이지) */
export default function ProcessSteps({ detail = false }: { detail?: boolean }) {
  return (
    <div className="relative" data-draw>
      <span className="absolute inset-x-0 top-0 hidden h-0.5 bg-g200 md:block" aria-hidden="true" />
      <span className="step-fill absolute inset-x-0 top-0 hidden h-0.5 bg-brand md:block" aria-hidden="true" />
      <ol className="grid gap-3 md:grid-cols-5 md:gap-0">
        {PROCESS_STEPS.map((step, i) => (
          <li
            key={step.title}
            className="relative flex items-start gap-5 rounded-2xl bg-g50 px-5 py-5 md:flex-col md:gap-0 md:rounded-none md:bg-transparent md:px-5 md:pb-2 md:pt-9"
            data-reveal
            style={delay(i * 0.07)}
          >
            <span
              className="step-dot absolute -top-1.75 left-5 hidden h-4 w-4 rounded-full border-[3px] border-white md:block"
              style={{ "--dd": `${0.25 + i * 0.36}s` } as CSSProperties}
              aria-hidden="true"
            />
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-[20px] font-extrabold text-white md:h-auto md:w-auto md:justify-start md:bg-transparent md:text-[40px] md:leading-none md:tracking-[-0.04em] md:text-brand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex flex-col md:mt-4">
              {step.adOnly && <span className="mb-1 self-start rounded-full bg-brand-50 px-2 py-0.5 text-[12px] font-bold text-brand">광고 운영 시</span>}
              <span className="text-[19px] font-extrabold tracking-[-0.035em] text-ink md:text-[20px]">{step.title}</span>
              <span className="mt-1 text-[16px] text-g600">{step.desc}</span>
              {detail && (
                <span className="mt-3 text-[14px] leading-relaxed text-g600">
                  <b className="mr-1 font-bold text-g800">{step.note}</b>
                  {step.detail}
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
