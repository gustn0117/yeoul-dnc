import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";
import { IconCheck, IconArrowRight, IconMail, IconBuilding } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "광고상품 / 서비스 | 여울디앤씨",
  description: "필요한 채널만 골라, 업종에 맞게 설계합니다.",
};

function Logo({ name, className = "h-6 w-auto" }: { name: string; className?: string }) {
  return <img src={`/images/logos/${name}.svg`} alt={name} className={className} />;
}

function Bullet({ children, color = "text-accent-blue" }: { children: React.ReactNode; color?: string }) {
  return (
    <li className={`flex items-start gap-2.5 ${color}`}>
      <div className="w-5 h-5 rounded-full bg-current/10 flex items-center justify-center shrink-0 mt-0.5">
        <IconCheck className="w-3 h-3" />
      </div>
      <span className="text-[13px] sm:text-sm">{children}</span>
    </li>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 sm:px-3 py-1 bg-white text-[11px] sm:text-xs text-slate-600 rounded-lg border border-slate-100 font-medium">{children}</span>;
}

export default function ServicesPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="relative overflow-hidden bg-[#060e1e]">
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e] via-[#0a1428]/95 to-[#060e1e]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-20 right-10 w-96 h-96 bg-accent-blue/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* LEFT — 타이틀 / 플랫폼 행 / 3 feature / CTA 바 */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase">Services · 광고 상품</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                필요한 채널만 골라,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">업종에 맞게 설계</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                합니다
              </h1>
              <p className="text-[13px] sm:text-base text-slate-300/90 max-w-xl leading-relaxed mb-7">
                플랫폼 기능 설명이 아니라,<br className="sm:hidden" />
                {" "}<span className="font-semibold text-white">무엇을 맡길 수 있는지</span>를 명확히 보여드립니다.
              </p>

              {/* 6 플랫폼 아이콘 행 (라벨 동반) */}
              <div className="grid grid-cols-6 gap-2 sm:gap-3 mb-7 max-w-md">
                {[
                  { name: "naver", label: "네이버" },
                  { name: "kakaotalk", label: "카카오" },
                  { name: "meta", label: "메타" },
                  { name: "youtube", label: "유튜브" },
                  { name: "google", label: "구글" },
                  { name: "instagram", label: "인스타" },
                ].map((p) => (
                  <div key={p.name} className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                      <img src={`/images/logos/${p.name}.svg`} alt={p.name} className={`h-4 sm:h-5 w-auto ${p.name === "kakaotalk" ? "" : "brightness-0 invert opacity-80"}`} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">{p.label}</span>
                  </div>
                ))}
              </div>

              {/* 3 feature 카드 */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5 max-w-2xl">
                {[
                  {
                    title: "맞춤 채널 제안",
                    desc: "업종·목표에 맞는 최적 채널 조합 제안",
                    color: "from-accent-blue to-blue-600",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    title: "전략 설계",
                    desc: "데이터 기반 타겟 설정과 광고 전략 수립",
                    color: "from-sky-500 to-blue-600",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    ),
                  },
                  {
                    title: "통합 운영 · 분석",
                    desc: "채널별 성과 분석으로 지속적인 개선",
                    color: "from-blue-500 to-indigo-600",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                    ),
                  },
                ].map((f) => (
                  <div key={f.title} className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-3.5">
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg mb-2 sm:mb-2.5">
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-linear-to-br ${f.color} opacity-50 blur-[1px]`} aria-hidden="true" />
                      <div className={`relative w-full h-full rounded-lg bg-linear-to-br ${f.color} flex items-center justify-center shadow-md`}>
                        {f.icon}
                      </div>
                    </div>
                    <p className="text-[12px] sm:text-[13px] font-extrabold text-white mb-0.5 leading-tight">{f.title}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-snug">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* 블루 CTA 바 */}
              <div className="relative max-w-2xl">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/30 blur-[3px]" aria-hidden="true" />
                <div className="relative bg-linear-to-r from-accent-blue/25 via-accent-blue/15 to-blue-600/10 backdrop-blur-sm border border-accent-blue/30 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-3 sm:gap-4">
                  <div className="relative shrink-0 w-9 h-9 sm:w-10 sm:h-10">
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue opacity-50 blur-[2px]" aria-hidden="true" />
                    <div className="relative w-full h-full rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-lg shadow-accent-blue/30">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] sm:text-sm font-extrabold text-white leading-tight">채널은 도구일 뿐, 결과가 중요합니다.</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">여울디앤씨는 성과로 증명합니다.</p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-deep-navy text-[11px] sm:text-[12px] font-extrabold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    상담 문의하기
                    <IconArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT — 6각 궤도 다이어그램 (중앙 로고 + 6 플랫폼 카드 + 점선 연결) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center mt-12 lg:mt-0">
              <div className="relative w-full aspect-square max-w-[560px]">
                {/* 다층 글로우 — halo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-accent-blue/15 rounded-full blur-[80px]" aria-hidden="true" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] bg-accent-blue/25 rounded-full blur-[60px]" aria-hidden="true" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-accent-blue/35 rounded-full blur-[40px]" aria-hidden="true" />

                {/* 외곽 점선 원 (시각적 궤도) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%] rounded-full border border-dashed border-white/8" aria-hidden="true" />

                {/* 점선 연결 SVG — 중앙에서 6개 카드 위치로 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.15" />
                    </radialGradient>
                    <filter id="dotGlow">
                      <feGaussianBlur stdDeviation="0.5" />
                    </filter>
                  </defs>
                  {[0, 60, 120, 180, 240, 300].map((deg) => {
                    const rad = ((deg - 90) * Math.PI) / 180;
                    const rStart = 14;
                    const rEnd = 33;
                    const x1 = 50 + rStart * Math.cos(rad);
                    const y1 = 50 + rStart * Math.sin(rad);
                    const x2 = 50 + rEnd * Math.cos(rad);
                    const y2 = 50 + rEnd * Math.sin(rad);
                    const midX = 50 + ((rStart + rEnd) / 2) * Math.cos(rad);
                    const midY = 50 + ((rStart + rEnd) / 2) * Math.sin(rad);
                    return (
                      <g key={deg}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="0.6 1.2" strokeLinecap="round" />
                        <circle cx={midX} cy={midY} r="1.2" fill="#60a5fa" opacity="0.4" filter="url(#dotGlow)" />
                        <circle cx={midX} cy={midY} r="0.55" fill="#bfdbfe" />
                      </g>
                    );
                  })}
                </svg>

                {/* 6개 카드 — 6각형 배치 (세로 레이아웃: 아이콘 + 라벨) */}
                {[
                  { name: "meta", label: "메타 광고", color: "from-blue-500 to-indigo-600", glow: "shadow-blue-500/30" },
                  { name: "naver", label: "네이버 광고", color: "from-green-500 to-emerald-600", glow: "shadow-emerald-500/30" },
                  { name: "kakaotalk", label: "카카오 광고", color: "from-yellow-400 to-amber-500", glow: "shadow-amber-500/30" },
                  { name: "youtube", label: "유튜브 광고", color: "from-red-500 to-rose-600", glow: "shadow-rose-500/30" },
                  { name: "google", label: "구글 광고", color: "from-sky-500 to-blue-500", glow: "shadow-sky-500/30" },
                  { name: "instagram", label: "인스타그램 광고", color: "from-pink-500 via-rose-500 to-orange-500", glow: "shadow-pink-500/30" },
                ].map((item, i) => {
                  const deg = i * 60 - 90;
                  const rad = (deg * Math.PI) / 180;
                  const r = 39;
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);
                  return (
                    <div
                      key={item.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
                      style={{ top: `${y}%`, left: `${x}%`, animation: `float ${5 + (i % 3)}s ease-in-out infinite ${i * 0.45}s` }}
                    >
                      <div className="relative">
                        {/* 3중 그림자 */}
                        <div className="absolute inset-0 translate-x-1.5 translate-y-3 rounded-2xl bg-black/40 blur-lg" aria-hidden="true" />
                        <div className={`absolute inset-0 translate-x-0.5 translate-y-1.5 rounded-2xl bg-linear-to-br ${item.color} opacity-25 blur-sm`} aria-hidden="true" />

                        <div
                          className="relative flex flex-col items-center gap-1.5 bg-linear-to-br from-white to-slate-50 rounded-2xl px-3.5 py-3 w-[100px] transition-transform duration-300 group-hover:-translate-y-1"
                          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,1), 0 8px 20px rgba(15,23,42,0.4), 0 2px 6px rgba(15,23,42,0.3)" }}
                        >
                          {/* 아이콘 — 입체 그라디언트 박스 */}
                          <div className="relative">
                            <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-linear-to-br ${item.color} opacity-50 blur-[2px]`} aria-hidden="true" />
                            <div
                              className={`relative w-11 h-11 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg ${item.glow}`}
                              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.15)" }}
                            >
                              <img src={`/images/logos/${item.name}.svg`} alt="" className={`w-5 h-5 drop-shadow-sm ${item.name === "kakaotalk" || item.name === "google" ? "" : "brightness-0 invert"}`} />
                            </div>
                          </div>
                          {/* 라벨 */}
                          <span className="text-[11px] font-extrabold text-deep-navy whitespace-nowrap tracking-tight">{item.label}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* 중앙 로고 — 강한 다층 글로우 + 원형 배지 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    {/* 외곽 halo ring (회전) */}
                    <div className="absolute -inset-3 rounded-full border border-accent-blue/30 animate-spin [animation-duration:24s]" aria-hidden="true" />
                    <div className="absolute -inset-6 rounded-full border border-accent-blue/15" aria-hidden="true" />
                    {/* pulsing glow */}
                    <div className="absolute inset-0 rounded-full bg-accent-blue/50 blur-2xl animate-pulse-soft" aria-hidden="true" />
                    <div className="absolute inset-0 rounded-full bg-sky-400/30 blur-xl" aria-hidden="true" />

                    {/* 본체 */}
                    <div
                      className="relative w-32 h-32 rounded-full bg-linear-to-br from-accent-blue via-blue-600 to-blue-800 flex items-center justify-center border-2 border-white/30"
                      style={{
                        boxShadow:
                          "inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.2), 0 12px 40px rgba(37,99,235,0.55), 0 0 80px rgba(96,165,250,0.35)",
                      }}
                    >
                      <LogoMark variant="white" className="w-16 drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ OVERVIEW (isometric hexagon logos) ━━ */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-[#f3f7ff] via-[#eef4ff] to-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-linear-to-br from-accent-blue/5 via-transparent to-violet-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-4">OVERVIEW</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 sm:mb-5 leading-tight">
            메타, 구글, 네이버, 카카오, 당근, 유튜브까지<br />
            <span className="relative inline-block">
              <span className="relative z-10">국내외 주요 광고 플랫폼</span>
              <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
            </span>
            {" "}운영
          </h2>
          <p className="text-[13px] sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed mb-12 sm:mb-16">
            <span className="font-semibold text-deep-navy">목표 ROAS 달성</span>을 위한 마케팅 전략을 수립하고,<br className="sm:hidden" />
            {" "}캠페인을 설계·집행·최적화합니다.
          </p>

          {/* Isometric platform grid */}
          <div className="relative mx-auto max-w-xl aspect-square">
            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl" />

            {(() => {
              const items = [
                { name: "meta", color: "from-blue-500 to-indigo-600", pos: "top-[4%] left-1/2 -translate-x-1/2" },
                { name: "facebook", color: "from-blue-500 to-blue-600", pos: "top-[22%] right-[8%]" },
                { name: "youtube", color: "from-red-500 to-rose-600", pos: "top-[22%] left-[8%]" },
                { name: "instagram", color: "from-pink-500 to-rose-500", pos: "top-1/2 -translate-y-1/2 right-[2%]" },
                { name: "google", color: "from-sky-500 to-blue-500", pos: "top-1/2 -translate-y-1/2 left-[2%]" },
                { name: "naver", color: "from-green-500 to-emerald-600", pos: "bottom-[22%] right-[8%]" },
                { name: "kakaotalk", color: "from-yellow-400 to-amber-500", pos: "bottom-[22%] left-[8%]" },
                { name: "danggeun", color: "from-orange-400 to-orange-600", pos: "bottom-[4%] left-1/2 -translate-x-1/2" },
              ];
              return items.map((item, i) => (
                <div
                  key={item.name}
                  className={`absolute ${item.pos} w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 group`}
                  style={{ animation: `float ${4 + (i % 3)}s ease-in-out infinite ${i * 0.3}s` }}
                >
                  <div className="absolute inset-0 translate-y-2 rounded-[24%] bg-black/15 blur-md" />
                  <div className={`absolute inset-0 translate-x-1 translate-y-1 rounded-[24%] bg-linear-to-br ${item.color} opacity-70`} />
                  <div className="relative w-full h-full rounded-[24%] bg-white shadow-3d border border-white flex items-center justify-center p-4 group-hover:-translate-y-1 transition-transform duration-300 bevel-edge">
                    <img src={`/images/logos/${item.name}.svg`} alt={item.name} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ));
            })()}

            {/* Center mark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
              <div className="absolute inset-0 translate-y-1 rounded-full bg-accent-blue/30 blur-sm" />
              <div className="relative w-full h-full rounded-full bg-white shadow-3d-lg shadow-accent-blue/30 border border-blue-100 flex items-center justify-center bevel-edge">
                <LogoMark className="w-14 sm:w-16 lg:w-20" />
              </div>
            </div>
          </div>

          {/* Category pills */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
            {[
              { label: "퍼포먼스 광고", desc: "전환 목적", color: "bg-blue-50 text-blue-700 border-blue-100" },
              { label: "브랜드 인지도", desc: "노출·신뢰", color: "bg-red-50 text-red-700 border-red-100" },
              { label: "DB 수집", desc: "리드 확보", color: "bg-violet-50 text-violet-700 border-violet-100" },
              { label: "재접촉 마케팅", desc: "기존 고객", color: "bg-amber-50 text-amber-700 border-amber-100" },
              { label: "업종 특화", desc: "부동산·지역", color: "bg-teal-50 text-teal-700 border-teal-100" },
            ].map((c) => (
              <div key={c.label} className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border ${c.color} text-center`}>
                <p className="text-[11px] sm:text-xs font-bold">{c.label}</p>
                <p className="text-[9px] sm:text-[10px] opacity-70">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ 네이버 (tilted phones reference style) ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Info */}
            <div className="lg:col-span-6 mb-12 lg:mb-0">
              <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
                <span className="text-accent-blue">퍼포먼스 마케팅</span>  ·  네이버 마케팅
              </p>
              <p className="text-sm text-slate-500 mb-2">고객에게 다방면으로 노출 가능</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold leading-tight text-deep-navy mb-4">
                국내 최대 포털사이트에<br />
                노출되어 효과적인<br />
                <span className="inline-flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#03C75A]">
                    <span className="text-white font-black text-lg">N</span>
                  </span>
                  <span className="text-[#03C75A]">네이버 마케팅</span>
                </span>
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-6 sm:mb-7">
                한국 사용자의 대부분이 사용하는 포털사이트로<br className="hidden sm:inline" />
                {" "}<span className="font-semibold text-deep-navy">고객이 검색을 하는 순간</span>부터{" "}
                <span className="font-semibold text-deep-navy">고객과 브랜드의 접점</span>을 확보할 수 있습니다.
                또한, 네이버는 광고 배너부터 검색어, 체험단까지 통합적인 마케팅이 가능하여 고객에게 다방면으로 자연스럽게 노출이 됩니다.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "정보를 찾으러 오는 고객을 대상으로 구매 전 리서치 단계 공략에 유리",
                  "제품, 서비스뿐 아니라 지역 중심 마케팅도 용이",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#03C75A]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <IconCheck className="w-3 h-3 text-[#03C75A]" />
                    </div>
                    <p className="text-[13px] sm:text-sm text-slate-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <Tag>파워링크</Tag><Tag>브랜드검색</Tag><Tag>성과형 디스플레이</Tag>
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-[#03C75A] font-bold hover:gap-3 transition-all">
                네이버 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Tilted phone mockups */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md aspect-square">
                {/* Background decorative circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-linear-to-br from-green-50 to-emerald-50/40 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                {/* Phone back */}
                <div
                  className="absolute top-[8%] right-[4%] w-36 sm:w-44 aspect-9/19 z-10 animate-float-slow"
                  style={{ transform: "rotate(15deg)" }}
                >
                  <div className="relative w-full h-full rounded-3xl bg-slate-900 shadow-2xl shadow-green-900/25 p-1.5 border border-slate-700">
                    <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-white">
                      <Image src="/images/stock/naver-search.jpg" alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Phone middle */}
                <div
                  className="absolute top-[18%] left-1/2 -translate-x-1/2 w-40 sm:w-48 aspect-9/19 z-20"
                  style={{ transform: "translate(-50%, 0) rotate(-4deg)", animation: "float 6s ease-in-out infinite 1s" }}
                >
                  <div className="relative w-full h-full rounded-[26px] bg-slate-900 shadow-2xl shadow-green-900/30 p-1.5 border border-slate-700">
                    <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-white">
                      <Image src="/images/stock/landing-page.jpg" alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Phone front */}
                <div
                  className="absolute bottom-[6%] left-[2%] w-36 sm:w-44 aspect-9/19 z-30"
                  style={{ transform: "rotate(-12deg)", animation: "float 5s ease-in-out infinite 2s" }}
                >
                  <div className="relative w-full h-full rounded-3xl bg-slate-900 shadow-2xl shadow-green-900/25 p-1.5 border border-slate-700">
                    <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-white">
                      <Image src="/images/stock/consultation.jpg" alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Floating green stat */}
                <div className="absolute top-4 left-0 bg-white rounded-xl shadow-xl shadow-green-900/10 px-3 py-2 border border-green-100 z-40 animate-float">
                  <p className="text-[9px] text-slate-400 font-medium">검색 전환</p>
                  <p className="text-sm font-extrabold text-[#03C75A]">매우 높음 ↑</p>
                </div>

                {/* PDF page 35: 200+ / 98% bottom stats card */}
                <div className="absolute bottom-2 left-2 right-2 bg-white rounded-xl shadow-xl shadow-green-900/10 px-3 py-2 border border-green-100 z-40 grid grid-cols-2 gap-3" style={{ animation: "float 5s ease-in-out infinite 1.5s" }}>
                  <div className="text-center">
                    <p className="text-base font-black text-[#03C75A] leading-none">200+</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">운영 키워드</p>
                  </div>
                  <div className="text-center border-l border-slate-100">
                    <p className="text-base font-black text-[#03C75A] leading-none">98%</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">노출 정상화</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 네이버 4 features (PDF page 35) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-14">
            {[
              {
                title: "정확한 타겟팅",
                desc: "검색 의도가 높은 고객을 정확하게 타겟팅",
                icon: <svg className="w-5 h-5 text-[#03C75A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" strokeLinecap="round" /><circle cx="12" cy="12" r="5" strokeLinecap="round" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
              },
              {
                title: "높은 전환율",
                desc: "가입, 구매 등 전환으로 이어질 가능성 증가",
                icon: <svg className="w-5 h-5 text-[#03C75A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
              },
              {
                title: "네이버 기반 운영",
                desc: "성과 데이터를 통한 지속적인 최적화",
                icon: <svg className="w-5 h-5 text-[#03C75A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
              },
              {
                title: "브랜드 신뢰도 향상",
                desc: "검색 노출 및 콘텐츠 제공으로 브랜드 신뢰도 강화",
                icon: <svg className="w-5 h-5 text-[#03C75A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
            ].map((f) => (
              <div key={f.title} className="relative group">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-[#03C75A]/15 blur-[2px]" />
                <div className="relative bg-white rounded-xl p-4 border border-white shadow-3d group-hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#03C75A]/10 border border-[#03C75A]/20 flex items-center justify-center mb-2.5">
                    {f.icon}
                  </div>
                  <p className="text-[12px] sm:text-sm font-extrabold text-deep-navy mb-0.5 leading-tight">{f.title}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ 메타 (reference style tilted phone + feature cards) ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-linear-to-br from-[#f8f6ff] via-[#f3f0fd] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Info */}
            <div className="lg:col-span-7 order-2 lg:order-1 mt-12 lg:mt-0">
              <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
                <span className="text-accent-blue">퍼포먼스 마케팅</span>  ·  메타 마케팅
              </p>
              <p className="text-sm text-slate-500 mb-2">브랜드 홍보부터 매출 증대까지!</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold leading-tight text-deep-navy mb-5">
                국내·해외 최대 규모의 SNS에 노출되는<br />
                <span className="inline-flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1">
                    <img src="/images/logos/instagram.svg" alt="" className="h-8 sm:h-9 w-auto" />
                    <img src="/images/logos/facebook.svg" alt="" className="h-8 sm:h-9 w-auto" />
                  </span>
                  <span className="bg-linear-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent">메타 마케팅</span>
                </span>
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-7">
                <span className="font-semibold text-deep-navy">Meta(인스타그램 · 페이스북) 플랫폼</span>에 노출되는 맞춤형 광고로,<br className="hidden sm:inline" />
                {" "}타겟의 관심사와 행동 데이터를 기반으로{" "}
                <span className="font-semibold text-deep-navy">높은 전환을 유도하는 성과 중심</span> 광고입니다.
                브랜드 인지도부터 구매 전환까지 다양한 마케팅 목적 달성이 가능합니다.
              </p>

              {/* 3 feature cards (reference style) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  {
                    title: "관심사, 행동, 위치 기반",
                    main: "정밀 타겟팅 가능",
                    color: "from-pink-500 to-rose-500",
                    icon: (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    title: "최대 규모의 SNS",
                    main: "인스타그램, 페이스북에서 브랜드 노출",
                    color: "from-blue-500 to-indigo-600",
                    icon: (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 0a4 4 0 100-8 4 4 0 000 8zm6-4a3 3 0 100-6 3 3 0 000 6zM5 12a3 3 0 100-6 3 3 0 000 6z" />
                      </svg>
                    ),
                  },
                  {
                    title: "구매 개연성이 높은 고객에게",
                    main: "전달되어 높은 전환율",
                    color: "from-emerald-500 to-teal-500",
                    icon: (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ),
                  },
                ].map((f, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 sm:p-4 border border-slate-100 text-center shadow-sm shadow-slate-200">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-lg bg-linear-to-br ${f.color} flex items-center justify-center mb-2.5 shadow-md`}>
                      {f.icon}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 mb-0.5 leading-tight">{f.title}</p>
                    <p className="text-[11px] sm:text-xs text-deep-navy font-bold leading-snug">{f.main}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-blue-600 font-bold hover:gap-3 transition-all mt-6">
                메타 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Phone mockup — Instagram feed (정렬·비율 정리, 다음 섹션 침범 방지) */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <div className="relative mx-auto w-full max-w-[340px] py-8">
                {/* Decorative blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-[2rem] bg-linear-to-br from-pink-100/60 to-blue-100/40 -z-10" />

                {/* Phone (회전 없음, 자연스러운 비율) */}
                <div
                  className="relative mx-auto w-48 sm:w-52 aspect-[9/18]"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                >
                  {/* 3D depth */}
                  <div className="absolute inset-0 translate-x-1.5 translate-y-3 rounded-[28px] bg-slate-900/30 blur-md" aria-hidden="true" />
                  <div className="absolute inset-0 translate-x-0.5 translate-y-1.5 rounded-[28px] bg-slate-800/50" aria-hidden="true" />

                  <div
                    className="relative w-full h-full rounded-[28px] bg-slate-900 p-[5px] border border-slate-700"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(15,23,42,0.25)" }}
                  >
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                      {/* Notch */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-900 rounded-full z-30" />

                      {/* IG header */}
                      <div className="absolute top-0 left-0 right-0 px-2.5 pt-6 pb-2 bg-white flex items-center gap-1.5 z-20 border-b border-slate-100">
                        <span className="text-[9px] font-extrabold text-deep-navy">Instagram</span>
                        <div className="ml-auto flex gap-1.5">
                          <svg className="w-2.5 h-2.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                          <svg className="w-2.5 h-2.5 text-slate-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        </div>
                      </div>

                      {/* Stories row */}
                      <div className="absolute top-[42px] left-0 right-0 px-2 py-1.5 flex items-center gap-1.5 border-b border-slate-100 z-10 bg-white">
                        {["from-[#FEDA77] via-[#F58529] to-[#DD2A7B]", "from-[#833AB4] to-[#E1306C]", "from-[#F77737] to-[#FCAF45]", "from-[#DD2A7B] to-[#833AB4]"].map((g, idx) => (
                          <div key={idx} className={`w-7 h-7 rounded-full p-[1.5px] bg-linear-to-br ${g}`}>
                            <div className="w-full h-full rounded-full bg-slate-100 border-2 border-white" />
                          </div>
                        ))}
                      </div>

                      {/* Feed post */}
                      <div className="absolute top-[80px] left-0 right-0 bottom-7">
                        <div className="flex items-center gap-1.5 px-2 py-1.5">
                          <div className="w-5 h-5 rounded-full bg-linear-to-br from-[#FEDA77] via-[#F58529] to-[#DD2A7B] p-[1px]">
                            <div className="w-full h-full rounded-full bg-white" />
                          </div>
                          <span className="text-[7px] font-bold text-deep-navy">yeoul_dnc</span>
                        </div>
                        <div className="aspect-square bg-linear-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center">
                          <svg className="w-12 h-12 text-white/95 drop-shadow" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 2A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9a5.5 5.5 0 005.5-5.5v-9A5.5 5.5 0 0016.5 2h-9zm0 1.5h9a4 4 0 014 4v9a4 4 0 01-4 4h-9a4 4 0 01-4-4v-9a4 4 0 014-4zm10 1.75a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/></svg>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5">
                          <svg className="w-3 h-3 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                          <svg className="w-3 h-3 text-slate-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
                          <svg className="w-3 h-3 text-slate-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                      </div>

                      {/* Bottom nav */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex items-center justify-around py-1.5">
                        <svg className="w-3 h-3 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3z"/></svg>
                        <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
                        <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M12 4v16M4 12h16" /></svg>
                        <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <div className="w-3 h-3 rounded-full bg-linear-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating platform logos — 폰 외곽, 콘텐츠 안 가림 */}
                <div className="absolute top-2 right-0 sm:right-2 w-11 h-11 bg-white rounded-2xl shadow-xl shadow-pink-900/10 flex items-center justify-center z-30 animate-float-slow">
                  <img src="/images/logos/instagram.svg" alt="" className="w-6 h-6" />
                </div>
                <div className="absolute bottom-10 left-0 sm:left-2 w-11 h-11 bg-white rounded-2xl shadow-xl shadow-blue-900/10 flex items-center justify-center z-30" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                  <img src="/images/logos/facebook.svg" alt="" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* 메타 6 features (PDF page 36) */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 mt-10 sm:mt-14">
            {[
              {
                title: "정밀 타겟팅",
                desc: "관심사·행동 기반 맞춤 타겟 설정",
                icon: <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" strokeLinecap="round" /><circle cx="12" cy="12" r="5" strokeLinecap="round" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
              },
              {
                title: "높은 도달률",
                desc: "브랜드 인지도와 빠르게 확산",
                icon: <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
              },
              {
                title: "비주얼 최적화",
                desc: "트렌디한 디자인으로 주목도 향상",
                icon: <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" /></svg>,
              },
              {
                title: "전환율 향상",
                desc: "구매·문의 전환 효과 극대화",
                icon: <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
              },
              {
                title: "광고 강력한 전달",
                desc: "핵심 메시지를 빠른 타임에",
                icon: <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
              },
              {
                title: "성과 최적화",
                desc: "전환 목표 기반 효율 극대화",
                icon: <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
              },
            ].map((f) => (
              <div key={f.title} className="relative group">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-pink-500/15 blur-[2px]" />
                <div className="relative bg-white rounded-xl p-3 sm:p-4 border border-white shadow-3d group-hover:-translate-y-0.5 transition-transform duration-300 text-center">
                  <div className="w-9 h-9 mx-auto rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center mb-2">
                    {f.icon}
                  </div>
                  <p className="text-[11px] sm:text-[12px] font-extrabold text-deep-navy mb-0.5 leading-tight">{f.title}</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 leading-snug">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PDF page 36: 메타 3 작업물 카드 (인스타그램 이미지 광고/쇼츠 영상 광고/인스타그램 비즈니스 프로필) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
            {[
              {
                tag: "1번",
                title: "인스타그램 이미지 광고",
                desc: "감각적인 이미지로 브랜드와 상품을 효과적으로 노출하는 광고",
                img: "/images/stock/meta-social.jpg",
                badge: "📷",
              },
              {
                tag: "2번",
                title: "쇼츠 영상 광고",
                desc: "짧은 시간 안에 강한 인상을 남기는 숏폼 영상 광고",
                img: "/images/stock/mobile-ads.jpg",
                badge: "🎬",
              },
              {
                tag: "3번",
                title: "인스타그램 비즈니스 프로필",
                desc: "브랜드 신뢰도와 정보 전달력을 강화하는 공식 프로필 운영",
                img: "/images/stock/landing-page.jpg",
                badge: "👥 102,540+",
              },
            ].map((w, idx) => (
              <div key={w.title} className="relative group">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-pink-500/15 blur-[2px]" />
                <div className="relative bg-white rounded-2xl border border-white shadow-3d overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative aspect-[5/6]">
                    <Image src={w.img} alt={w.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-deep-navy/30 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 bg-white/95 text-pink-600 text-[9px] font-extrabold rounded uppercase tracking-wider shadow-md">{w.tag}</span>
                      <span className="px-2 py-0.5 bg-pink-500 text-white text-[9px] font-extrabold rounded shadow-md flex items-center gap-1">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /></svg>
                        Instagram
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy mb-1 leading-tight">{w.title}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ 카카오 (tilted phone style) ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Kakao phone — 폰 콘텐츠 가리지 않는 레이아웃 */}
            <div className="lg:col-span-5 order-1 relative mb-12 lg:mb-0">
              <div className="relative mx-auto w-full max-w-[340px] py-8">
                {/* Background blob (폰 뒤 장식만 — 콘텐츠 가리지 않음) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-[2rem] bg-linear-to-br from-yellow-50 to-amber-50/60 -z-10" />

                {/* Phone (가운데 정렬, 회전 없음) */}
                <div
                  className="relative mx-auto w-48 sm:w-52 aspect-[9/18]"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                >
                  {/* 3D depth layers */}
                  <div className="absolute inset-0 translate-x-1.5 translate-y-3 rounded-[28px] bg-slate-900/30 blur-md" aria-hidden="true" />
                  <div className="absolute inset-0 translate-x-0.5 translate-y-1.5 rounded-[28px] bg-slate-800/50" aria-hidden="true" />

                  <div
                    className="relative w-full h-full rounded-[28px] bg-slate-900 p-[5px] border border-slate-700"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(15,23,42,0.25), 0 8px 16px rgba(15,23,42,0.15)" }}
                  >
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#B2C7D9]">
                      {/* Notch */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-900 rounded-full z-30" />

                      {/* Kakaotalk header */}
                      <div className="absolute top-0 left-0 right-0 px-2.5 pt-6 pb-2 bg-[#A8BECF] flex items-center gap-1.5 z-20 border-b border-black/5">
                        <svg className="w-2.5 h-2.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <div className="w-4 h-4 rounded-md bg-[#FEE500] flex items-center justify-center shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-bold text-slate-800">여울디앤씨</span>
                        <div className="ml-auto flex gap-1">
                          <svg className="w-2.5 h-2.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
                          <svg className="w-2.5 h-2.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                      </div>

                      {/* Chat area */}
                      <div className="absolute top-[44px] left-2 right-2 bottom-7 space-y-1.5 overflow-hidden">
                        <p className="text-center text-[6.5px] text-slate-600/70 mb-1">오늘</p>
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg rounded-tl-sm px-2 py-1 text-[7px] text-slate-700 shadow-sm max-w-[78%]">광고 상담 문의드려요</div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-[#FEE500] rounded-lg rounded-tr-sm px-2 py-1 text-[7px] text-slate-800 shadow-sm max-w-[78%]">반갑습니다 :)<br />업종부터 알려주세요</div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg rounded-tl-sm px-2 py-1 text-[7px] text-slate-700 shadow-sm max-w-[78%]">병원 광고를 시작하려고 합니다</div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-[#FEE500] rounded-lg rounded-tr-sm px-2 py-1 text-[7px] text-slate-800 shadow-sm max-w-[78%]">예약 문의 흐름까지<br />함께 설계해드릴게요</div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg rounded-tl-sm px-2 py-1 text-[7px] text-slate-700 shadow-sm max-w-[78%]">감사합니다!</div>
                        </div>
                      </div>

                      {/* Bottom input bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white px-2 py-1.5 border-t border-slate-100 flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-slate-200 shrink-0" />
                        <div className="flex-1 h-3 rounded-full bg-slate-100" />
                        <div className="w-3 h-3 rounded-full bg-[#FEE500] shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 실시간 stat - 폰 우측 외곽 (폰 콘텐츠 가리지 않음) */}
                <div
                  className="absolute top-12 right-0 sm:right-2 bg-white rounded-xl shadow-xl shadow-amber-900/10 px-3 py-2 border border-amber-100 z-30"
                  style={{ animation: "float 5s ease-in-out infinite 0.8s" }}
                >
                  <p className="text-[9px] text-slate-400">상담 유입</p>
                  <p className="text-sm font-extrabold text-amber-600 leading-tight">실시간 ↑</p>
                </div>

                {/* 채널 카드 - 폰 좌측 외곽 */}
                <div
                  className="absolute bottom-10 left-0 sm:left-2 bg-white rounded-xl shadow-xl shadow-amber-900/10 px-3 py-2 border border-slate-100 z-30 flex items-center gap-2"
                  style={{ animation: "float 5.5s ease-in-out infinite 1.4s" }}
                >
                  <div className="w-6 h-6 rounded-md bg-[#FEE500] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] text-slate-400">카카오톡 채널</p>
                    <p className="text-[10px] font-extrabold text-deep-navy leading-tight">실시간 응답</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 order-2">
              <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
                <span className="text-accent-blue">상담 유입형</span>  ·  카카오 마케팅
              </p>
              <p className="text-sm text-slate-500 mb-2">빠른 커뮤니케이션이 중요한 업종에</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold leading-tight text-deep-navy mb-5">
                카카오톡 채널 기반<br />
                <span className="inline-flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FEE500]">
                    <svg className="w-5 h-5 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                    </svg>
                  </span>
                  <span className="text-[#FBB034]">상담 유입</span>과{" "}
                  <span className="text-[#FBB034]">재접촉</span>
                </span>
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-6">
                <span className="font-semibold text-deep-navy">카카오톡 채널을 활용</span>해 상담 유입부터 기존 고객 재접촉까지 운영합니다.
                키워드 광고와 채널 메시지를 결합해 빠른 전환을 유도합니다.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "상담 유입이 중요한 업종에 최적화",
                  "기존 고객 재접촉 및 후속 메시지 발송",
                  "카카오톡 채널 연동으로 빠른 커뮤니케이션",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <IconCheck className="w-3 h-3 text-amber-600" />
                    </div>
                    <p className="text-[13px] sm:text-sm text-slate-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <Tag>키워드 광고</Tag><Tag>디스플레이 광고</Tag><Tag>카카오톡 채널 메시지</Tag><Tag>비즈메시지</Tag>
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-amber-600 font-bold hover:gap-3 transition-all">
                카카오 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 카카오 5 features (PDF page 38) */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-10 sm:mt-14 items-stretch">
            {[
              { title: "실시간 상담 유입", desc: "카카오톡 채널로 빠른 상담 유입", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
              { title: "빠른 응답 & 전환", desc: "즉시 응답으로 만족도·전환율 상승", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "기존 고객 재접촉", desc: "메시지 발송으로 재방문·재구매 유도", icon: "M3 10h10a8 8 0 018 8v2M3 10l6-6m-6 6l6 6" },
              { title: "광고 효율 극대화", desc: "키워드·비즈메시지 통합 운영으로 효율 극대화", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625z" },
              { title: "결과 분석 & 최적화", desc: "데이터 기반 성과 분석과 지속 최적화", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" },
            ].map((f, i) => (
              <div key={f.title} className="relative group h-full" style={{ perspective: "800px" }}>
                {/* Layered depth shadows */}
                <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-amber-500/25 blur-[6px]" aria-hidden="true" />
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-amber-100/80" aria-hidden="true" />

                <div
                  className="relative h-full bg-white rounded-2xl p-4 sm:p-5 border border-amber-50 transition-all duration-300 group-hover:-translate-y-1 flex flex-col items-center text-center"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(180,83,9,0.06), 0 8px 20px rgba(180,83,9,0.08), 0 16px 40px rgba(245,158,11,0.06)",
                    animation: `fade-in-up 0.5s ease-out ${i * 0.06}s backwards`,
                  }}
                >
                  {/* Icon - 3D 입체 박스 */}
                  <div className="relative shrink-0 mb-3">
                    <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-amber-500/40 blur-[3px]" aria-hidden="true" />
                    <div
                      className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
                      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 4px rgba(124,45,18,0.2), 0 6px 16px rgba(245,158,11,0.4)" }}
                    >
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[12px] sm:text-[13px] font-extrabold text-deep-navy mb-1.5 leading-tight">{f.title}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed flex-1 break-keep">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ 유튜브 (tilted video thumbnail) ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-linear-to-br from-[#fff5f5] via-white to-[#fef2f2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Info */}
            <div className="lg:col-span-7 order-2 lg:order-1 mt-12 lg:mt-0">
              <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
                <span className="text-accent-blue">브랜드 인지도</span>  ·  유튜브 마케팅
              </p>
              <p className="text-sm text-slate-500 mb-2">영상으로 전하는 브랜드 신뢰</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold leading-tight text-deep-navy mb-5">
                영상 중심 광고로<br />
                <span className="inline-flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FF0000]">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-[#FF0000]">유튜브 마케팅</span>
                </span>
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-6">
                <span className="font-semibold text-deep-navy">인스트림 · 범퍼 · Shorts</span> 등 다양한 포맷으로
                브랜드 인지도와 신뢰를 동시에 확보합니다.
              </p>

              {/* 3 format cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                {[
                  { label: "인스트림", desc: "5초 후 건너뛰기", color: "from-red-500 to-rose-500" },
                  { label: "범퍼", desc: "6초 짧은 광고", color: "from-orange-500 to-red-500" },
                  { label: "Shorts", desc: "모바일 세로형", color: "from-pink-500 to-rose-500" },
                ].map((f) => (
                  <div key={f.label} className="bg-white rounded-xl p-3 border border-slate-100 text-center shadow-sm">
                    <div className={`w-9 h-9 mx-auto rounded-lg bg-linear-to-br ${f.color} flex items-center justify-center mb-2 shadow-md`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <p className="text-[11px] sm:text-xs text-deep-navy font-bold">{f.label}</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {[
                  "브랜드 인지도를 높이고 싶은 경우",
                  "영상 콘텐츠 활용이 가능한 업종",
                  "신뢰감 형성이 중요한 업종에 효과적",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <IconCheck className="w-3 h-3 text-red-600" />
                    </div>
                    <p className="text-[13px] sm:text-sm text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-red-600 font-bold hover:gap-3 transition-all">
                유튜브 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Tilted video thumbnail stack */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <div className="relative mx-auto max-w-sm aspect-square">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400/15 rounded-full blur-3xl" />

                {/* Back video card */}
                <div className="absolute top-[15%] right-[4%] w-44 sm:w-52 aspect-video z-10" style={{ transform: "rotate(8deg)", animation: "float 6s ease-in-out infinite" }}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl shadow-red-900/15 bg-slate-900 border border-slate-700">
                    <Image src="/images/stock/youtube-video.jpg" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front video card */}
                <div className="absolute top-[40%] left-[6%] w-52 sm:w-60 aspect-video z-20" style={{ transform: "rotate(-6deg)", animation: "float 5s ease-in-out infinite 1.5s" }}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-red-900/25 bg-slate-900 border border-slate-700">
                    <Image src="/images/stock/creative-design.jpg" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl ring-4 ring-white/20">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[9px]">
                      <span className="bg-red-600 px-1.5 py-0.5 rounded font-bold">LIVE</span>
                      <span className="bg-black/60 px-1.5 py-0.5 rounded">0:15</span>
                    </div>
                  </div>
                </div>

                {/* YT logo floating */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl shadow-xl shadow-red-900/10 flex items-center justify-center z-30 animate-float-slow">
                  <img src="/images/logos/youtube.svg" alt="" className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 구글 (multi-surface visualization) ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Floating multi-surface visualization */}
            <div className="lg:col-span-5 order-1 mb-12 lg:mb-0 relative">
              <div className="relative mx-auto max-w-sm aspect-square">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-400/15 rounded-full blur-3xl" />

                {/* Laptop dashboard card (back) */}
                <div className="absolute top-[6%] left-[4%] right-[4%] aspect-video z-10" style={{ transform: "perspective(600px) rotateX(8deg)", animation: "float 6s ease-in-out infinite" }}>
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl shadow-sky-900/15 bg-slate-900 border border-slate-700">
                    <Image src="/images/stock/google-analytics.jpg" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  </div>
                </div>

                {/* Search bar card (middle) */}
                <div className="absolute top-[45%] left-[8%] right-[8%] z-20" style={{ transform: "rotate(-3deg)", animation: "float 5s ease-in-out infinite 1s" }}>
                  <div className="relative bg-white rounded-2xl shadow-2xl shadow-sky-900/20 border border-slate-100 p-3 flex items-center gap-2">
                    <div className="flex gap-1 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-lg px-3 py-1.5 flex items-center gap-2">
                      <img src="/images/logos/google.svg" alt="" className="h-3 w-auto" />
                      <span className="text-[10px] text-slate-400">광고 캠페인 검색...</span>
                      <svg className="w-3 h-3 text-slate-300 ml-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" strokeLinecap="round" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
                    </div>
                  </div>
                </div>

                {/* Phone ad card (front) */}
                <div className="absolute bottom-[5%] right-[6%] w-32 sm:w-36 aspect-9/16 z-30" style={{ transform: "rotate(8deg)", animation: "float 5s ease-in-out infinite 2s" }}>
                  <div className="relative w-full h-full rounded-2xl bg-slate-900 shadow-2xl shadow-sky-900/25 p-1 border border-slate-700">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                      <Image src="/images/stock/mobile-ads.jpg" alt="" fill className="object-cover" />
                      <div className="absolute top-1 left-1 right-1 flex items-center gap-1 bg-white/90 rounded-lg px-1.5 py-1">
                        <img src="/images/logos/google-ads.svg" alt="" className="h-2 w-auto" />
                        <span className="text-[6px] font-bold text-slate-600">광고</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating G logo */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl shadow-xl shadow-sky-900/10 flex items-center justify-center z-40 animate-float-slow">
                  <img src="/images/logos/google.svg" alt="" className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 order-2">
              <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
                <span className="text-accent-blue">확장형 광고</span>  ·  구글 마케팅
              </p>
              <p className="text-sm text-slate-500 mb-2">검색 + 디스플레이 + 리타겟팅</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold leading-tight text-deep-navy mb-5">
                자동 최적화로 확장되는<br />
                <span className="inline-flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-sm">
                    <img src="/images/logos/google.svg" alt="" className="w-5 h-5" />
                  </span>
                  <span className="text-accent-blue">구글 마케팅</span>
                </span>
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-6">
                <span className="font-semibold text-deep-navy">다양한 지면에서 광고를 확장</span>하고,
                리타겟팅과 자동 최적화 기반으로 효율적으로 운영합니다.
                검색, 디스플레이, 유튜브까지 통합 캠페인이 가능합니다.
              </p>

              {/* 4 surface tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { label: "검색 광고", color: "from-sky-500 to-blue-500" },
                  { label: "디스플레이", color: "from-blue-500 to-indigo-500" },
                  { label: "디맨드젠", color: "from-indigo-500 to-violet-500" },
                  { label: "PMax", color: "from-cyan-500 to-sky-500" },
                ].map((s) => (
                  <div key={s.label} className="relative">
                    <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-linear-to-br ${s.color} opacity-40 blur-[1px]`} />
                    <div className="relative bg-white rounded-lg border border-slate-100 p-2.5 text-center shadow-sm">
                      <p className="text-[11px] font-bold text-deep-navy">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {[
                  "다양한 지면에서 광고 확장이 필요한 경우",
                  "이탈 고객 리타겟팅이 필요한 경우",
                  "자동 최적화 기반 효율적 운영",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <IconCheck className="w-3 h-3 text-sky-600" />
                    </div>
                    <p className="text-[13px] sm:text-sm text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-sky-600 font-bold hover:gap-3 transition-all">
                구글 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 문자 + 당근 + 부동산 (3D isometric cards) ━━━━ */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f8f6ff] to-slate-50 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-violet-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">MORE CHANNELS</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              그 외 운영 가능한<br className="sm:hidden" />
              {" "}<span className="relative inline-block">
                <span className="relative z-10">광고 채널</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {/* 문자 */}
            <div className="group relative">
              <div className="absolute inset-0 translate-x-1.5 translate-y-2.5 rounded-2xl bg-linear-to-br from-violet-500 to-purple-600 opacity-40 blur-[3px]" />
              <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-linear-to-br from-violet-500 to-purple-600 opacity-20" />
              <div className="relative bg-white rounded-2xl overflow-hidden border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-video">
                  <Image src="/images/stock/sms-marketing.jpg" alt="문자 마케팅" fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-violet-900/70 via-violet-900/20 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-300" />
                      <span className="text-[10px] font-bold text-white">재접촉 마케팅</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">문자 마케팅</h3>
                  </div>
                  {/* Corner icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <IconMail className="w-5 h-5 text-violet-600" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">확보된 DB를 대상으로 직접 전달하는 SMS/LMS/MMS 광고</p>
                  <ul className="space-y-2 text-violet-700 mb-4">
                    <Bullet color="text-violet-700">재문의 유도 / 방문·예약 안내</Bullet>
                    <Bullet color="text-violet-700">기존 고객 재접촉에 효과적</Bullet>
                  </ul>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-linear-to-br from-violet-500 to-purple-600 bg-clip-text text-transparent">06</span>
                    <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center">
                      <IconArrowRight className="w-3 h-3 text-violet-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 당근 */}
            <div className="group relative">
              <div className="absolute inset-0 translate-x-1.5 translate-y-2.5 rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 opacity-40 blur-[3px]" />
              <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 opacity-20" />
              <div className="relative bg-white rounded-2xl overflow-hidden border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-video">
                  <Image src="/images/stock/local-store.jpg" alt="당근 광고" fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-orange-900/70 via-orange-900/20 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <Logo name="danggeun" className="h-3.5 sm:h-4 w-auto brightness-0 invert" />
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-[10px] font-bold text-white">지역 특화</span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">당근/지역 광고</h3>
                  </div>
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <img src="/images/logos/danggeun.svg" alt="" className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">지역 기반 피드/검색/카탈로그 광고로 생활권 고객을 확보</p>
                  <ul className="space-y-2 text-orange-700 mb-4">
                    <Bullet color="text-orange-700">지역 상권 업종에 최적화</Bullet>
                    <Bullet color="text-orange-700">생활권 고객이 중요한 서비스</Bullet>
                  </ul>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-linear-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent">07</span>
                    <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
                      <IconArrowRight className="w-3 h-3 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 부동산 */}
            <div className="group relative">
              <div className="absolute inset-0 translate-x-1.5 translate-y-2.5 rounded-2xl bg-linear-to-br from-teal-500 to-teal-600 opacity-40 blur-[3px]" />
              <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-linear-to-br from-teal-500 to-teal-600 opacity-20" />
              <div className="relative bg-white rounded-2xl overflow-hidden border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-video">
                  <Image src="/images/stock/real-estate.jpg" alt="부동산 광고" fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-teal-900/70 via-teal-900/20 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                      <span className="text-[10px] font-bold text-white">업종 특화</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">부동산 특화 광고</h3>
                  </div>
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <IconBuilding className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">호갱노노, 직방, 다방, 네모 등 부동산 전문 플랫폼 광고</p>
                  <ul className="space-y-2 text-teal-700 mb-4">
                    <Bullet color="text-teal-700">분양 / 임대 / 상가</Bullet>
                    <Bullet color="text-teal-700">지역 부동산 마케팅</Bullet>
                  </ul>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-linear-to-br from-teal-500 to-teal-600 bg-clip-text text-transparent">08</span>
                    <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center">
                      <IconArrowRight className="w-3 h-3 text-teal-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PDF page 42: 4번째 통합 카드 */}
          <div className="mt-6 sm:mt-8 relative group">
            <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/15 blur-[2px]" />
            <div className="relative bg-white rounded-2xl border border-white shadow-3d p-5 sm:p-7 lg:grid lg:grid-cols-12 gap-6 items-center group-hover:-translate-y-0.5 transition-transform duration-300">
              <div className="lg:col-span-6 mb-4 lg:mb-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-3">
                  <span className="w-1 h-1 rounded-full bg-accent-blue" />
                  <span className="text-[10px] font-extrabold text-accent-blue tracking-wider uppercase">04 — 그 외 모든 업종</span>
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-deep-navy mb-2 leading-tight">모든 업종 맞춤 종합 마케팅 솔루션</h3>
                <p className="text-[12px] sm:text-sm text-slate-500 leading-relaxed">네이버·구글·LMS·홈페이지 제작·메타 등 상담 후 업종에 맞게 진행합니다.</p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap items-center gap-2 sm:gap-3">
                {["naver", "google", "kakaotalk", "meta"].map((n) => (
                  <div key={n} className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <img src={`/images/logos/${n}.svg`} alt={n} className="h-5 w-auto" />
                    </div>
                  </div>
                ))}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <span className="text-slate-500 text-base font-bold">···</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <Link href="/contact" className="block w-full px-4 py-3 bg-linear-to-r from-accent-blue to-blue-600 text-white text-center text-[12px] sm:text-sm font-bold rounded-xl shadow-lg shadow-accent-blue/25 hover:shadow-xl transition-shadow">
                  상담 문의하기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 업종별 맞춤 + 운영방식 요약 (isometric) ━━━━ */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* 업종별 */}
            <div className="mb-12 lg:mb-0">
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">INDUSTRY</p>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-deep-navy mb-6 leading-tight">
                같은 광고라도, 업종이 다르면<br />
                <span className="relative inline-block">
                  <span className="relative z-10">설계가 달라집니다</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
                </span>
              </h2>
              <div className="space-y-3">
                {[
                  {
                    industry: "분양",
                    bullets: ["DB 수집 · 방문 예약 · LMS 전환 운영"],
                    result: "관심 고객 유입부터 계약 상담까지 메타 · 네이버 · LMS 기반 통합 운영",
                    iconType: "building",
                  },
                  {
                    industry: "병원",
                    bullets: ["예약 문의 확보", "신뢰 기반 브랜딩 운영"],
                    result: "플레이스 · 블로그 기반 의료 마케팅 — 지역 검색 노출 · 상담 문의 최적화",
                    iconType: "hospital",
                  },
                  {
                    industry: "교육",
                    bullets: ["수강 상담", "카카오 채널 연동 운영"],
                    result: "수강생 모집 중심 광고 운영 — 상담 유입 · 리드 확보 · 전환 최적화",
                    iconType: "edu",
                  },
                  {
                    industry: "지역 자영업",
                    bullets: ["지역 타겟 광고", "신규 고객 유입 확대"],
                    result: "플레이스 기반 지역 마케팅 — 생활권 고객 확보 · 방문 유도 최적화",
                    iconType: "store",
                  },
                  {
                    industry: "상담형 서비스",
                    bullets: ["문의 전환", "리드 확보 최적화"],
                    result: "고객 문의 확보 중심 운영 — 상담 신청 · DB 유입 · 전환 관리",
                    iconType: "consult",
                  },
                ].map((item, i) => (
                  <div
                    key={item.industry}
                    className="group relative"
                    style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s backwards` }}
                  >
                    <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/10" />
                    <div className="relative flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white border border-white shadow-3d group-hover:-translate-y-0.5 transition-transform duration-300">
                      {/* Number */}
                      <div className="text-xl font-black text-accent-blue shrink-0 leading-none tracking-tight pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {/* Industry icon */}
                      <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                          {item.iconType === "building" && <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 21V7l9-4 9 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />}
                          {item.iconType === "hospital" && <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v1.5M21 7.5H3m9 4.5v6m-3-3h6" />}
                          {item.iconType === "edu" && <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />}
                          {item.iconType === "store" && <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" />}
                          {item.iconType === "consult" && <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M9.879 16.121A3 3 0 1012.015 11L11.288 9.273M16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />}
                        </svg>
                      </div>
                      {/* Industry content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy">{item.industry}</p>
                          {item.bullets.map((b) => (
                            <span key={b} className="text-[10px] text-slate-400">· {b}</span>
                          ))}
                        </div>
                        <div className="hidden sm:block w-8 h-px bg-slate-200 my-1" />
                        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed mt-1">{item.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 relative">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/15" />
                <div className="relative flex items-center gap-3 p-3.5 rounded-xl bg-linear-to-br from-accent-blue/5 to-blue-50 border border-accent-blue/20">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="5" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy">업종별 맞춤 전략으로 더 높은 성과를</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">업종의 특성과 고객 행동을 분석하여 가장 효과적인 광고 전략을 설계합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 운영방식 */}
            <div>
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">PROCESS</p>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-deep-navy mb-6 leading-tight">
                분석부터 제작, 운영,<br className="sm:hidden" />
                {" "}<span className="relative inline-block">
                  <span className="relative z-10">보완까지 한 번에</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
                </span>
              </h2>

              {/* 3D framed image */}
              <div className="relative mb-6 group">
                <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-2xl bg-linear-to-br from-accent-blue to-blue-600 opacity-20 blur-[3px]" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <Image src="/images/stock/monitor-data.jpg" alt="데이터 모니터링" width={800} height={500} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-linear-to-t from-deep-navy/40 via-transparent to-transparent" />
                  {/* Floating stats */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-lg">
                    <p className="text-[9px] text-slate-400 font-medium">LIVE</p>
                    <p className="text-xs font-extrabold text-accent-blue flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" /> 최적화 중
                    </p>
                  </div>
                </div>
              </div>

              {/* Step rows - more detailed */}
              <div className="space-y-2.5">
                {[
                  { step: "전략 수립", desc: "시장/경쟁사까지 분석을 통한 광고 전략 기획" },
                  { step: "소재 제작", desc: "타겟에 최적화된 광고 소재 기획 및 제작" },
                  { step: "채널 세팅", desc: "광고 채널 설정 및 캠페인 구조 세팅" },
                  { step: "운영 및 최적화", desc: "데이터 기반 운영으로 성과 지속 개선" },
                  { step: "결과 체크", desc: "성과 리포트 제공 및 다음 전략 제안" },
                ].map((s, i) => (
                  <div key={s.step} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-md shrink-0">
                      <span className="text-white text-[10px] font-black">{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] sm:text-sm font-extrabold text-deep-navy leading-tight">{s.step}</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 relative">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/15" />
                <div className="relative flex items-center gap-3 p-3.5 rounded-xl bg-white border border-accent-blue/20">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy">데이터 기반 성과 관리</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">실시간 데이터 분석과 지속적인 최적화로 광고 효율을 극대화합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 업종 × 채널 매칭 매트릭스 ━━━━ */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-br from-[#f5f9ff] via-white to-[#f0f5ff] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">CHANNEL GUIDE</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              우리 업종에는<br className="sm:hidden" />
              {" "}<span className="relative inline-block">
                <span className="relative z-10">어떤 채널이 맞을까요</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              ?
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
              업종별로 자주 권장되는 채널 조합을<br className="sm:hidden" />
              {" "}한눈에 확인해보세요.
            </p>
          </div>

          {/* Matrix */}
          <div className="relative">
            <div className="absolute inset-0 translate-x-1.5 translate-y-2 rounded-3xl bg-accent-blue/15 blur-[3px]" />
            <div className="relative bg-white rounded-3xl border border-white shadow-2xl shadow-deep-navy/5 overflow-hidden">
              {/* Header row - desktop only */}
              <div className="hidden sm:grid grid-cols-8 gap-0 border-b border-slate-100 bg-linear-to-r from-slate-50 to-white">
                <div className="col-span-2 px-4 py-4 text-[11px] font-extrabold text-slate-400 tracking-widest uppercase">업종</div>
                {[
                  { name: "naver", label: "네이버" },
                  { name: "meta", label: "메타" },
                  { name: "kakaotalk", label: "카카오" },
                  { name: "youtube", label: "유튜브" },
                  { name: "google", label: "구글" },
                  { name: "danggeun", label: "당근" },
                ].map((ch) => (
                  <div key={ch.name} className="px-2 py-4 flex flex-col items-center gap-1.5">
                    <img src={`/images/logos/${ch.name}.svg`} alt="" className="h-5 w-auto" />
                    <span className="text-[10px] font-bold text-slate-500">{ch.label}</span>
                  </div>
                ))}
              </div>

              {/* Desktop rows */}
              <div className="hidden sm:block divide-y divide-slate-100">
                {[
                  { industry: "분양", color: "from-blue-500 to-indigo-600", tag: "DB 수집", matches: { naver: 2, meta: 3, kakaotalk: 2, youtube: 1, google: 2, danggeun: 0 } },
                  { industry: "병원", color: "from-emerald-500 to-teal-600", tag: "예약 문의", matches: { naver: 3, meta: 2, kakaotalk: 2, youtube: 1, google: 2, danggeun: 1 } },
                  { industry: "교육", color: "from-violet-500 to-purple-600", tag: "상담 전환", matches: { naver: 2, meta: 2, kakaotalk: 3, youtube: 2, google: 2, danggeun: 0 } },
                  { industry: "지역 자영업", color: "from-orange-500 to-red-500", tag: "생활권", matches: { naver: 1, meta: 2, kakaotalk: 1, youtube: 0, google: 1, danggeun: 3 } },
                  { industry: "상담형 서비스", color: "from-sky-500 to-cyan-500", tag: "리드 수집", matches: { naver: 2, meta: 3, kakaotalk: 2, youtube: 1, google: 3, danggeun: 0 } },
                ].map((row, i) => (
                  <div key={row.industry} className="grid grid-cols-8 gap-0 hover:bg-slate-50/50 transition-colors">
                    <div className="col-span-2 px-4 py-4 flex items-center gap-3">
                      <div className="relative">
                        <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-linear-to-br ${row.color} opacity-50 blur-[1px]`} />
                        <div className={`relative w-9 h-9 rounded-lg bg-linear-to-br ${row.color} flex items-center justify-center shadow-md`}>
                          <span className="text-white font-black text-xs">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-deep-navy">{row.industry}</p>
                        <p className={`text-[10px] font-bold bg-linear-to-br ${row.color} bg-clip-text text-transparent tracking-wider`}>{row.tag}</p>
                      </div>
                    </div>
                    {Object.entries(row.matches).map(([ch, level]) => (
                      <div key={ch} className="px-2 py-4 flex items-center justify-center">
                        {/* PDF page 44 5단계: 추천(green) / 적합(2 dots) / 보조(yellow dots) / 비추보조(orange dot) / 비추(grey dots) */}
                        {level === 3 ? (
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 shadow-sm">
                            <span className="text-[9px] font-extrabold text-white">추천</span>
                          </div>
                        ) : level === 2 ? (
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                          </div>
                        ) : level === 1 ? (
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          </div>
                        ) : level === -1 ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                        ) : (
                          <div className="flex gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile cards */}
              <div className="sm:hidden divide-y divide-slate-100">
                {[
                  { industry: "분양", color: "from-blue-500 to-indigo-600", tag: "DB 수집", top: ["meta", "naver", "kakaotalk"] },
                  { industry: "병원", color: "from-emerald-500 to-teal-600", tag: "예약 문의", top: ["naver", "meta", "kakaotalk"] },
                  { industry: "교육", color: "from-violet-500 to-purple-600", tag: "상담 전환", top: ["kakaotalk", "naver", "meta"] },
                  { industry: "지역 자영업", color: "from-orange-500 to-red-500", tag: "생활권", top: ["danggeun", "meta", "google"] },
                  { industry: "상담형 서비스", color: "from-sky-500 to-cyan-500", tag: "리드 수집", top: ["meta", "google", "naver"] },
                ].map((row, i) => (
                  <div key={row.industry} className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`relative w-9 h-9 rounded-lg bg-linear-to-br ${row.color} flex items-center justify-center shadow-md shrink-0`}>
                        <span className="text-white font-black text-xs">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-extrabold text-deep-navy">{row.industry}</p>
                        <p className={`text-[10px] font-bold bg-linear-to-br ${row.color} bg-clip-text text-transparent tracking-wider`}>{row.tag}</p>
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">추천 채널</span>
                    </div>
                    <div className="flex items-center gap-2 pl-12">
                      {row.top.map((ch) => (
                        <div key={ch} className="relative">
                          <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-linear-to-br ${row.color} opacity-30 blur-[1px]`} />
                          <div className="relative w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                            <img src={`/images/logos/${ch}.svg`} alt="" className="h-4 w-auto" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend - PDF page 44 5단계 */}
              <div className="p-4 sm:p-5 bg-linear-to-r from-slate-50 to-white border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500 shadow-sm">
                    <span className="text-[9px] font-extrabold text-white">추천</span>
                  </div>
                  <span className="text-slate-500 font-medium">최적의 채널</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  </div>
                  <span className="text-slate-500 font-medium">적합한 채널</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>
                  <span className="text-slate-500 font-medium">보조 채널</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span className="text-slate-500 font-medium">비추천/보조 수준</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-slate-500 font-medium">비추천</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[11px] sm:text-xs text-slate-400 mt-6 leading-relaxed">
            * 위 매트릭스는 일반적인 기준이며,<br className="sm:hidden" />
            {" "}실제 예산과 목표에 따라 조합이 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* ━━━━ CTA ━━━━ */}
      <SectionCTA
        title="어떤 채널 조합이 맞는지, 업종과 목표부터 같이 정리해드릴게요"
        description="메타·네이버·카카오·구글·당근·문자까지 목적에 맞게 조합합니다. 광고가 처음이셔도 현재 상황만 남겨주시면 정리해드립니다."
        buttonText="무료 광고 상담받기"
        variant="dark"
      />
    </>
  );
}
