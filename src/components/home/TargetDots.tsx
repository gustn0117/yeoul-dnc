"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const STEPS = [
  { label: "전체 노출", desc: "광고를 볼 수 있는 모든 사람", keep: 1 },
  { label: "지역", desc: "현장 인근 · 시군구 · 상권 반경", keep: 0.55 },
  { label: "관심사", desc: "업종과 관련된 관심사를 가진 사람", keep: 0.32 },
  { label: "검색 수요", desc: "직접 찾아보고 비교하는 사람", keep: 0.17 },
  { label: "행동", desc: "사이트 방문 · 상담 클릭 이력", keep: 0.08 },
];
const COLS = 18;
const ROWS = 8;
const COUNT = COLS * ROWS;
// 점마다 고정된 '순위' (정수 연산이라 서버·브라우저 결과가 같음) — 순위가 낮을수록 끝까지 남는다
const RANKS = Array.from({ length: COUNT }, (_, i) => ((i * 97 + 31) % COUNT) / COUNT);
const STEP_MS = 2400;
const HOLD_MS = 3800;

/* 타깃 좁히기: 조건을 하나씩 걸 때마다 점(사람)이 줄어들고, 마지막엔 남은 점만 파랗게 깜빡인다.
   화면에 있는 동안 자동 진행, 조건을 누르면 그 단계로 이동. */
export default function TargetDots() {
  const [step, setStep] = useState(0);
  const [inView, setInView] = useState(false);
  const [locked, setLocked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const last = STEPS.length - 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || locked || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setStep((s) => (s + 1) % STEPS.length), step === last ? HOLD_MS : STEP_MS);
    return () => window.clearTimeout(id);
  }, [inView, locked, step, last]);

  const keep = STEPS[step].keep;

  return (
    <div ref={ref} className="grid gap-8 rounded-[2rem] bg-g50 p-5 sm:p-8 lg:grid-cols-[18rem_1fr] lg:gap-12 lg:p-12">
      <ol className="flex flex-col gap-1.5" aria-label="타깃 조건">
        {STEPS.map((s, i) => {
          const on = i === step;
          const passed = i < step;
          return (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => {
                  setLocked(true);
                  setStep(i);
                }}
                aria-pressed={on}
                className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-colors duration-300 ${on ? "bg-white" : "hover:bg-white/60"}`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold transition-colors duration-300 ${
                    on ? "bg-brand text-white" : passed ? "bg-brand-100 text-brand" : "bg-white text-g500 ring-1 ring-g200"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className={`block text-[18px] font-extrabold tracking-[-0.03em] ${on || passed ? "text-ink" : "text-g600"}`}>{s.label}</span>
                  <span className={`block text-[15px] text-g600 ${on ? "" : "max-lg:hidden"}`}>{s.desc}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-col justify-center">
        <div className="mx-auto grid w-full max-w-xl grid-cols-[repeat(18,minmax(0,1fr))] gap-[clamp(4px,0.6vw,8px)]" aria-hidden="true">
          {RANKS.map((rank, i) => {
            const state = step === 0 ? "base" : rank < keep ? (step === last ? "final" : "in") : "out";
            return (
              <span
                key={i}
                className="t-dot aspect-square rounded-full bg-g300"
                data-state={state}
                style={{ "--dd": `${(rank * 0.25).toFixed(3)}s` } as CSSProperties}
              />
            );
          })}
        </div>
        <p className="mx-auto mt-6 flex w-full max-w-xl flex-wrap items-baseline justify-between gap-2 text-[16px] text-g600" aria-live="polite">
          <span>
            지금 조건: <strong className="font-extrabold text-ink">{STEPS.slice(1, step + 1).map((s) => s.label).join(" + ") || "없음"}</strong>
          </span>
          <span className={`font-bold transition-colors ${step === last ? "text-accent" : "text-g500"}`}>
            {step === last ? "문의할 만한 사람만 남았습니다" : "조건을 더해 대상을 좁히는 중"}
          </span>
        </p>
      </div>
    </div>
  );
}
