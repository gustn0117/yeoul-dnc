import type { CSSProperties } from "react";
import CountUp from "@/components/ui/CountUp";

const KPIS = [
  { label: "누적 캠페인", node: <CountUp to={100} suffix="+" duration={1600} /> },
  { label: "목표 ROAS", node: "2~4x" },
  { label: "문의 증가 사례", node: <CountUp to={56} prefix="+" suffix="%" duration={1600} /> },
  { label: "빠른 응답", node: "24h" },
];

// 주차별 반응이 오르는 막대 (정수값이라 서버·브라우저 동일)
const BARS = [28, 34, 31, 42, 46, 44, 55, 61, 58, 70, 76, 84];
const LINE = "M 20 150 C 60 140, 90 132, 130 128 S 210 112, 250 104 S 330 84, 370 70 S 450 40, 490 26";

/* 성과 대시보드 카드 — 화면에 들어오면([data-draw]) 막대가 자라고 추세선이 그려진다 */
export default function PerformanceBoard() {
  return (
    <div data-draw className="on-dark relative overflow-hidden rounded-[2rem] bg-night p-6 text-white sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[15px] font-semibold text-white/55">운영 성과 요약</p>
          <p className="mt-1 text-[22px] font-extrabold tracking-[-0.035em]">데이터로 보고, 계속 보완합니다</p>
        </div>
        <span className="shrink-0 rounded-full bg-white/10 px-3 py-1.5 text-[14px] font-semibold text-white/80">주간 · 월간 리포트</span>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-2xl bg-white/6 px-4 py-4">
            <dd className="text-[30px] font-extrabold leading-none tracking-[-0.04em] text-[#8db8ff] sm:text-[34px]">{k.node}</dd>
            <dt className="mt-2 text-[14px] font-semibold text-white/60">{k.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-6 rounded-2xl bg-white/4 p-4 sm:p-5">
        <svg viewBox="0 0 510 170" className="h-auto w-full" role="img" aria-label="광고 반응이 꾸준히 오르는 추세 그래프">
          {[40, 80, 120].map((y) => (
            <line key={y} x1="0" x2="510" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeDasharray="4 6" />
          ))}
          {BARS.map((h, i) => (
            <rect
              key={i}
              className="dash-bar"
              x={14 + i * 41}
              y={160 - h * 1.4}
              width="22"
              height={h * 1.4}
              rx="6"
              fill={i >= BARS.length - 3 ? "#2563eb" : "rgba(141,184,255,0.28)"}
              style={{ "--d": `${(i * 0.05).toFixed(2)}s` } as CSSProperties}
            />
          ))}
          <path d={LINE} pathLength={1} className="flow-path" fill="none" stroke="#8db8ff" strokeWidth="4" strokeLinecap="round" style={{ "--d": "0.5s" } as CSSProperties} />
          <circle cx="490" cy="26" r="7" fill="#fff" stroke="#2563eb" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
}
