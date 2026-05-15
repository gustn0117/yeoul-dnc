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
      <span className="text-[14px] sm:text-sm">{children}</span>
    </li>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 sm:px-3 py-1 bg-white text-[12px] sm:text-xs text-slate-600 rounded-lg border border-slate-100 font-medium">{children}</span>;
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
                <span className="text-[12px] font-bold text-slate-300 tracking-wider uppercase">Services · 광고 상품</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                필요한 채널만 골라,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">업종에 맞게 설계</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                합니다
              </h1>
              <p className="text-[14px] sm:text-base text-slate-300/90 max-w-xl leading-relaxed mb-7">
                플랫폼 기능 설명이 아니라,<br className="sm:hidden" />
                {" "}<span className="font-semibold text-white">무엇을 맡길 수 있는지</span>를 명확히 보여드립니다.
              </p>

              {/* 6 플랫폼 아이콘 행 (텍스트 라벨 제거 — 로고만) */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-7 flex-wrap">
                {[
                  { name: "naver" },
                  { name: "kakaotalk" },
                  { name: "meta" },
                  { name: "youtube" },
                  { name: "google" },
                  { name: "instagram" },
                  { name: "facebook" },
                ].map((p) => (
                  <div key={p.name} className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors">
                    <img src={`/images/logos/${p.name}.svg`} alt={p.name} className={`h-5 sm:h-6 w-auto ${p.name === "kakaotalk" ? "" : "brightness-0 invert opacity-80"}`} />
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
                    <p className="text-[13px] sm:text-sm font-extrabold text-white leading-tight">채널은 도구일 뿐, 결과가 중요합니다.</p>
                    <p className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">여울디앤씨는 성과로 증명합니다.</p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-deep-navy text-[12px] sm:text-[13px] font-extrabold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    상담 문의하기
                    <IconArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT — 6각 hub-and-spoke 다이어그램 (재설계: 중앙 dominant + 미니멀 카드) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center mt-12 lg:mt-0">
              <div className="relative w-full aspect-square max-w-[560px]">
                {/* 다층 halo (중앙 강조) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-blue/8 rounded-full blur-[100px]" aria-hidden="true" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-accent-blue/20 rounded-full blur-[70px]" aria-hidden="true" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-accent-blue/30 rounded-full blur-[40px]" aria-hidden="true" />

                {/* SVG 연결 — 부드러운 곡선 + 미세 dot */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                      <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* 외곽 점선 원 — 미세하게 (궤도 힌트) */}
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#60a5fa" strokeOpacity="0.18" strokeWidth="0.3" strokeDasharray="0.6 1.6" />
                  {/* 각 카드 위치에 점 (궤도 위) */}
                  {[0, 60, 120, 180, 240, 300].map((deg) => {
                    const rad = ((deg - 90) * Math.PI) / 180;
                    const r = 44;
                    const x = 50 + r * Math.cos(rad);
                    const y = 50 + r * Math.sin(rad);
                    return (
                      <g key={deg}>
                        <circle cx={x} cy={y} r="1.6" fill="#60a5fa" opacity="0.25" />
                        <circle cx={x} cy={y} r="0.7" fill="#bfdbfe" opacity="0.9" />
                      </g>
                    );
                  })}
                </svg>

                {/* 6개 카드 — 미니멀 다크 글래스 + 컬러 아이콘 블록 + 살짝 다른 각도 */}
                {[
                  { name: "meta", label: "메타 광고", color: "from-[#0866FF] to-[#1d4ed8]", glow: "#0866FF", tilt: -3 },
                  { name: "naver", label: "네이버 광고", color: "from-[#03C75A] to-[#15803d]", glow: "#03C75A", tilt: 3 },
                  { name: "kakaotalk", label: "카카오 광고", color: "from-[#FFD60A] to-[#FEE500]", glow: "#FEE500", tilt: -2 },
                  { name: "youtube", label: "유튜브 광고", color: "from-[#FF0000] to-[#b91c1c]", glow: "#FF0000", tilt: 2 },
                  { name: "google", label: "구글 광고", color: "from-[#4285F4] to-[#1d4ed8]", glow: "#4285F4", tilt: -3 },
                  { name: "instagram", label: "인스타 광고", color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]", glow: "#DD2A7B", tilt: 3 },
                ].map((item, i) => {
                  const deg = i * 60 - 90;
                  const rad = (deg * Math.PI) / 180;
                  const r = 44; // 중앙 dominant 위해 카드는 외곽으로
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);
                  const useDark = item.name !== "kakaotalk"; // 카카오 노란색은 어두운 로고
                  return (
                    <div
                      key={item.name}
                      className="absolute z-10 group"
                      style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: `translate(-50%, -50%) rotate(${item.tilt}deg)`,
                      }}
                    >
                      <div className="relative" style={{ animation: `float ${5 + (i % 3)}s ease-in-out infinite ${i * 0.45}s` }}>
                        {/* 컬러 halo */}
                        <div
                          className="absolute -inset-2 rounded-2xl opacity-40 blur-xl"
                          style={{ background: item.glow }}
                          aria-hidden="true"
                        />
                        {/* 카드 본체 — 다크 글래스 */}
                        <div
                          className="relative w-[108px] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 bg-linear-to-br from-white/[0.10] to-white/[0.04] backdrop-blur-md border border-white/15"
                          style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.15), 0 12px 28px rgba(0,0,0,0.45), 0 0 20px ${item.glow}30` }}
                        >
                          <div className="flex flex-col items-center gap-2 pt-3.5 pb-3 px-3">
                            {/* 입체 컬러 아이콘 블록 */}
                            <div className="relative">
                              <div
                                className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl opacity-50 blur-[3px]"
                                style={{ background: item.glow }}
                                aria-hidden="true"
                              />
                              <div
                                className={`relative w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center`}
                                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)" }}
                              >
                                <img
                                  src={`/images/logos/${item.name}.svg`}
                                  alt=""
                                  className={`w-6 h-6 ${useDark ? "brightness-0 invert" : ""} drop-shadow-sm`}
                                />
                              </div>
                            </div>
                            <span className="text-[12px] font-extrabold text-white whitespace-nowrap tracking-tight">{item.label}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* 중앙 로고 — DOMINANT (176px, 카드보다 큼) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="relative">
                    {/* 회전 외곽 ring */}
                    <div className="absolute -inset-4 rounded-full border border-accent-blue/25 animate-spin [animation-duration:30s]" aria-hidden="true" />
                    <div className="absolute -inset-8 rounded-full border border-accent-blue/12" aria-hidden="true" />
                    <div className="absolute -inset-12 rounded-full border border-accent-blue/6" aria-hidden="true" />

                    {/* 강한 다층 glow */}
                    <div className="absolute -inset-4 rounded-full bg-accent-blue/55 blur-3xl animate-pulse-soft" aria-hidden="true" />
                    <div className="absolute inset-0 rounded-full bg-sky-400/35 blur-2xl" aria-hidden="true" />

                    {/* 본체 — 144px (w-36, 카드와 균형) */}
                    <div
                      className="relative w-36 h-36 rounded-full bg-linear-to-br from-accent-blue via-blue-600 to-blue-800 flex items-center justify-center border-2 border-white/30"
                      style={{
                        boxShadow:
                          "inset 0 3px 0 rgba(255,255,255,0.35), inset 0 -6px 12px rgba(0,0,0,0.25), 0 16px 48px rgba(37,99,235,0.6), 0 0 100px rgba(96,165,250,0.4)",
                      }}
                    >
                      <LogoMark variant="white" className="w-20 drop-shadow-2xl" />
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
          <p className="text-[14px] sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed mb-12 sm:mb-16">
            <span className="font-semibold text-deep-navy">목표 ROAS 달성</span>을 위한 마케팅 전략을 수립하고,<br className="sm:hidden" />
            {" "}캠페인을 설계·집행·최적화합니다.
          </p>

          {/* 8 플랫폼 hub-and-spoke + 중앙 로고 + 점선 연결 */}
          <div className="relative mx-auto max-w-2xl aspect-square">
            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-blue/12 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-blue/20 rounded-full blur-2xl" />

            {/* 점선 SVG 연결 (8 방향) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#60a5fa" strokeOpacity="0.15" strokeWidth="0.3" strokeDasharray="0.6 1.4" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                const rad = ((deg - 90) * Math.PI) / 180;
                const x1 = 50 + 13 * Math.cos(rad);
                const y1 = 50 + 13 * Math.sin(rad);
                const x2 = 50 + 38 * Math.cos(rad);
                const y2 = 50 + 38 * Math.sin(rad);
                return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#60a5fa" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="0.6 1.2" strokeLinecap="round" />;
              })}
            </svg>

            {[
              { name: "meta", label: "메타 광고", brand: "bg-[#0866FF]", deg: 0 },
              { name: "facebook", label: "페이스북 광고", brand: "bg-[#1877F2]", deg: 45 },
              { name: "instagram", label: "인스타그램 광고", brand: "bg-linear-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]", deg: 90 },
              { name: "kakaotalk", label: "카카오 광고", brand: "bg-[#FEE500]", deg: 135 },
              { name: "danggeun", label: "당근 광고", brand: "bg-[#FF7E36]", deg: 180 },
              { name: "naver", label: "네이버 광고", brand: "bg-[#03C75A]", deg: 225 },
              { name: "google", label: "구글 광고", brand: "bg-white border border-slate-100", deg: 270 },
              { name: "youtube", label: "유튜브 광고", brand: "bg-[#FF0000]", deg: 315 },
            ].map((item, i) => {
              const rad = ((item.deg - 90) * Math.PI) / 180;
              const r = 42;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              const useDark = item.name === "kakaotalk" || item.name === "google";
              return (
                <div
                  key={item.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
                  style={{ top: `${y}%`, left: `${x}%`, animation: `float ${4 + (i % 3)}s ease-in-out infinite ${i * 0.3}s` }}
                >
                  <div className="relative">
                    {/* 그림자 */}
                    <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-black/15 blur-sm" />
                    {/* 카드 */}
                    <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl p-2.5 sm:p-3 w-[88px] sm:w-[104px] group-hover:-translate-y-1 transition-transform duration-300">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${item.brand} flex items-center justify-center mb-1.5`}>
                        <img src={`/images/logos/${item.name}.svg`} alt="" className={`h-5 sm:h-6 w-auto ${useDark ? "" : "brightness-0 invert"}`} />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-deep-navy whitespace-nowrap">{item.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 중앙 로고 — V 브랜드 마크 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-accent-blue/40 blur-2xl animate-pulse-soft" />
                <div className="absolute -inset-1 rounded-full bg-sky-400/30 blur-xl" />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-br from-accent-blue via-blue-600 to-blue-800 flex items-center justify-center border-2 border-white/40 shadow-2xl shadow-accent-blue/50">
                  <LogoMark variant="white" className="w-14 sm:w-16 drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* 5 카테고리 카드 (PDF 변경시안 매칭 — 아이콘 + 큰 라벨 + 부제) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-12 sm:mt-16">
            {[
              {
                label: "퍼포먼스 광고",
                desc: "전환 목적의\n성과 중심 광고 운영",
                bg: "bg-blue-50",
                color: "text-blue-600",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
              {
                label: "브랜드 인지도",
                desc: "노출 확대를 통한\n브랜드 신뢰 구축",
                bg: "bg-pink-50",
                color: "text-pink-600",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M9 8.25h.008v.008H9V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                label: "DB 수집",
                desc: "리드 확보 및\n잠재 고객 발굴",
                bg: "bg-violet-50",
                color: "text-violet-600",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                label: "재접촉 마케팅",
                desc: "기존 고객 대상\n맞춤 메시지 운영",
                bg: "bg-amber-50",
                color: "text-amber-600",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
              },
              {
                label: "업종 특화",
                desc: "부동산·병원·자영업 등\n업종 맞춤 전략 수립",
                bg: "bg-emerald-50",
                color: "text-emerald-600",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
            ].map((c) => (
              <div key={c.label} className="relative group">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/12 blur-[2px]" />
                <div className="relative bg-white rounded-2xl border border-slate-100 shadow-md p-4 sm:p-5 group-hover:-translate-y-1 transition-transform duration-300 text-center h-full flex flex-col">
                  <div className={`w-12 h-12 mx-auto rounded-xl ${c.bg} ${c.color} flex items-center justify-center mb-2.5`}>
                    {c.icon}
                  </div>
                  <p className="text-[13px] sm:text-[14px] font-extrabold text-deep-navy mb-1.5 leading-tight">{c.label}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed whitespace-pre-line flex-1">{c.desc}</p>
                </div>
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
              <p className="text-[12px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
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
              <p className="text-[14px] sm:text-sm text-slate-500 leading-relaxed mb-6 sm:mb-7">
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
                    <p className="text-[14px] sm:text-sm text-slate-700 leading-relaxed">{text}</p>
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

            {/* Phone mockups — 3개 폰 가로 배치, 비율 9:16(이미지 매칭), 겹침 최소화 */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto w-full max-w-[520px] aspect-[5/4]">
                {/* Background decorative */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[80%] rounded-[3rem] bg-linear-to-br from-green-50 to-emerald-50/40 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                {/* Phone LEFT — 좌측 기울임 -15°, 살짝 뒤 */}
                <div
                  className="absolute top-[16%] left-[4%] w-[30%] sm:w-[32%] aspect-[9/19] z-10"
                  style={{ transform: "rotate(-15deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 7s ease-in-out infinite" }}>
                    <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-green-900/30 p-[5px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[19px] overflow-hidden bg-white">
                        <Image src="/images/0515/naver-phone-2.png" alt="네이버 광고 영역" fill className="object-cover" sizes="180px" />
                      </div>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Phone CENTER — 정면 가장 큼, 앞으로 + 살짝 위 */}
                <div
                  className="absolute top-[2%] left-1/2 w-[34%] sm:w-[36%] aspect-[9/19] z-30"
                  style={{ transform: "translate(-50%, 0) rotate(0deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 6s ease-in-out infinite 0.5s" }}>
                    <div className="relative w-full h-full rounded-[28px] bg-slate-900 shadow-2xl shadow-green-900/50 p-[6px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                        <Image src="/images/0515/naver-phone-1.png" alt="네이버 검색 화면" fill className="object-cover" sizes="220px" />
                      </div>
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Phone RIGHT — 우측 기울임 +12°, 살짝 뒤 */}
                <div
                  className="absolute top-[16%] right-[4%] w-[30%] sm:w-[32%] aspect-[9/19] z-20"
                  style={{ transform: "rotate(12deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 5.5s ease-in-out infinite 1.5s" }}>
                    <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-green-900/30 p-[5px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[19px] overflow-hidden bg-white">
                        <Image src="/images/0515/naver-phone-3.png" alt="네이버 검색 결과" fill className="object-cover" sizes="180px" />
                      </div>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Floating "검색 전환" stat */}
                <div className="absolute top-2 left-2 bg-white rounded-xl shadow-xl shadow-green-900/15 px-3 py-2 border border-green-100 z-40 animate-float">
                  <p className="text-[10px] text-slate-400 font-medium">검색 전환</p>
                  <p className="text-sm font-extrabold text-[#03C75A]">매우 높음 ↑</p>
                </div>

                {/* Bottom 200+ / 98% stats card */}
                <div className="absolute bottom-1 left-2 right-2 bg-white rounded-xl shadow-xl shadow-green-900/15 px-3 py-2 border border-green-100 z-40 grid grid-cols-2 gap-3" style={{ animation: "float 5s ease-in-out infinite 1.5s" }}>
                  <div className="text-center">
                    <p className="text-base font-black text-[#03C75A] leading-none">200+</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">운영 키워드</p>
                  </div>
                  <div className="text-center border-l border-slate-100">
                    <p className="text-base font-black text-[#03C75A] leading-none">98%</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">노출 정상화</p>
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
                  <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy mb-0.5 leading-tight">{f.title}</p>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug">{f.desc}</p>
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
            <div className="lg:col-span-6 order-2 lg:order-1 mt-12 lg:mt-0">
              <p className="text-[12px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
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
              <p className="text-[14px] sm:text-sm text-slate-500 leading-relaxed mb-7">
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
                    <p className="text-[11px] sm:text-[12px] text-slate-400 mb-0.5 leading-tight">{f.title}</p>
                    <p className="text-[12px] sm:text-xs text-deep-navy font-bold leading-snug">{f.main}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-blue-600 font-bold hover:gap-3 transition-all mt-6">
                메타 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Phone mockups — 3개 폰 가로 배치, 비율 9:16 (Naver 레이아웃 미러) */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative mx-auto w-full max-w-[520px] aspect-[5/4]">
                {/* Background decorative blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[80%] rounded-[3rem] bg-linear-to-br from-pink-50 to-purple-50/40 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400/15 rounded-full blur-3xl" />

                {/* Phone LEFT */}
                <div
                  className="absolute top-[16%] left-[4%] w-[30%] sm:w-[32%] aspect-[9/19] z-10"
                  style={{ transform: "rotate(-15deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 7s ease-in-out infinite" }}>
                    <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-pink-900/30 p-[5px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[19px] overflow-hidden bg-white">
                        <Image src="/images/0515/insta-phone-2.png" alt="인스타그램 광고 2" fill className="object-cover" sizes="180px" />
                      </div>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Phone CENTER — 가장 큼 */}
                <div
                  className="absolute top-[2%] left-1/2 w-[34%] sm:w-[36%] aspect-[9/19] z-30"
                  style={{ transform: "translate(-50%, 0) rotate(0deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 6s ease-in-out infinite 0.5s" }}>
                    <div className="relative w-full h-full rounded-[28px] bg-slate-900 shadow-2xl shadow-pink-900/50 p-[6px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                        <Image src="/images/0515/insta-phone-1.png" alt="인스타그램 광고 1" fill className="object-cover" sizes="220px" />
                      </div>
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Phone RIGHT */}
                <div
                  className="absolute top-[16%] right-[4%] w-[30%] sm:w-[32%] aspect-[9/19] z-20"
                  style={{ transform: "rotate(12deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 5.5s ease-in-out infinite 1.5s" }}>
                    <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-pink-900/30 p-[5px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[19px] overflow-hidden bg-white">
                        <Image src="/images/0515/insta-phone-3.png" alt="인스타그램 광고 3" fill className="object-cover" sizes="180px" />
                      </div>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Floating IG/FB logos — 폰 외곽 */}
                <div className="absolute top-2 right-2 w-11 h-11 bg-white rounded-2xl shadow-xl shadow-pink-900/15 flex items-center justify-center z-40 animate-float-slow">
                  <img src="/images/logos/instagram.svg" alt="" className="w-6 h-6" />
                </div>
                <div className="absolute bottom-4 left-2 w-11 h-11 bg-white rounded-2xl shadow-xl shadow-blue-900/15 flex items-center justify-center z-40" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
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
                  <p className="text-[12px] sm:text-[13px] font-extrabold text-deep-navy mb-0.5 leading-tight">{f.title}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug">{f.desc}</p>
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
            {/* Kakao 3 phone mockups — Naver 레이아웃 미러 (가로 배치 9:16) */}
            <div className="lg:col-span-6 order-1 relative mb-12 lg:mb-0">
              <div className="relative mx-auto w-full max-w-[520px] aspect-[5/4]">
                {/* Background decorative */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[80%] rounded-[3rem] bg-linear-to-br from-yellow-50 to-amber-50/40 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl" />

                {/* Phone LEFT */}
                <div
                  className="absolute top-[16%] left-[4%] w-[30%] sm:w-[32%] aspect-[9/19] z-10"
                  style={{ transform: "rotate(-15deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 7s ease-in-out infinite" }}>
                    <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-amber-900/30 p-[5px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[19px] overflow-hidden bg-white">
                        <Image src="/images/0515/kakao-phone-2.png" alt="카카오 광고 2" fill className="object-cover" sizes="180px" />
                      </div>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Phone CENTER — 가장 큼 */}
                <div
                  className="absolute top-[2%] left-1/2 w-[34%] sm:w-[36%] aspect-[9/19] z-30"
                  style={{ transform: "translate(-50%, 0) rotate(0deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 6s ease-in-out infinite 0.5s" }}>
                    <div className="relative w-full h-full rounded-[28px] bg-slate-900 shadow-2xl shadow-amber-900/50 p-[6px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                        <Image src="/images/0515/kakao-phone-1.png" alt="카카오 광고 1" fill className="object-cover" sizes="220px" />
                      </div>
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Phone RIGHT */}
                <div
                  className="absolute top-[16%] right-[4%] w-[30%] sm:w-[32%] aspect-[9/19] z-20"
                  style={{ transform: "rotate(12deg)" }}
                >
                  <div className="relative w-full h-full" style={{ animation: "float 5.5s ease-in-out infinite 1.5s" }}>
                    <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-amber-900/30 p-[5px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[19px] overflow-hidden bg-white">
                        <Image src="/images/0515/kakao-phone-3.png" alt="카카오 광고 3" fill className="object-cover" sizes="180px" />
                      </div>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-10" />
                    </div>
                  </div>
                </div>

                {/* Floating Kakao logo */}
                <div className="absolute top-2 right-2 w-11 h-11 bg-[#FEE500] rounded-2xl shadow-xl shadow-amber-900/20 flex items-center justify-center z-40 animate-float-slow">
                  <svg className="w-6 h-6 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                  </svg>
                </div>
                {/* 실시간 stat */}
                <div className="absolute bottom-4 left-2 bg-white rounded-xl shadow-xl shadow-amber-900/10 px-3 py-2 border border-amber-100 z-40" style={{ animation: "float 5s ease-in-out infinite 1.4s" }}>
                  <p className="text-[10px] text-slate-400">상담 유입</p>
                  <p className="text-sm font-extrabold text-amber-600 leading-tight">실시간 ↑</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-6 order-2">
              <p className="text-[12px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
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
              <p className="text-[14px] sm:text-sm text-slate-500 leading-relaxed mb-6">
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
                    <p className="text-[14px] sm:text-sm text-slate-700 leading-relaxed">{text}</p>
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
                  <p className="text-[13px] sm:text-[14px] font-extrabold text-deep-navy mb-1.5 leading-tight">{f.title}</p>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 leading-relaxed flex-1 break-keep">{f.desc}</p>
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
              <p className="text-[12px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
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
              <p className="text-[14px] sm:text-sm text-slate-500 leading-relaxed mb-6">
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
                    <p className="text-[12px] sm:text-xs text-deep-navy font-bold">{f.label}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">{f.desc}</p>
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
                    <p className="text-[14px] sm:text-sm text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-red-600 font-bold hover:gap-3 transition-all">
                유튜브 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* YouTube video mockups — 사진 매칭: 큰 영상(우상) + 작은 영상(좌중) + Shorts 폰(우하) + 배지들 */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <div className="relative mx-auto w-full max-w-[520px] aspect-square">
                {/* Background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[80%] rounded-[3rem] bg-linear-to-br from-pink-50 to-red-50/30 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400/15 rounded-full blur-3xl" />
                {/* Dot pattern (PDF 매칭) */}
                <div className="absolute top-2 right-2 w-20 h-16 opacity-30" style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1px, transparent 1.5px)", backgroundSize: "8px 8px" }} />
                <div className="absolute bottom-12 left-4 w-16 h-12 opacity-25" style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1px, transparent 1.5px)", backgroundSize: "8px 8px" }} />

                {/* Video TOP-RIGHT — 큰 16:9, 범퍼 광고 */}
                <div className="absolute top-[4%] right-0 w-[72%] aspect-video z-20" style={{ transform: "rotate(-2deg)" }}>
                  <div className="relative w-full h-full" style={{ animation: "float 6s ease-in-out infinite" }}>
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-red-900/25 bg-slate-900 border-2 border-white">
                      <Image src="/images/stock/youtube-video.jpg" alt="" fill className="object-cover" sizes="380px" />
                      <div className="absolute inset-0 bg-black/30" />
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl ring-4 ring-white/30">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                      {/* Bottom controls */}
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-linear-to-t from-black/80 to-transparent flex items-center gap-2 text-white text-[10px]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z" /></svg>
                        <span>0:15 / 0:30</span>
                        <span className="flex-1 h-0.5 bg-red-500 rounded mx-2" />
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 범퍼 광고 배지 */}
                <div className="absolute top-[2%] right-[2%] z-30 bg-slate-900 rounded-lg shadow-xl px-2.5 py-1.5 flex items-center gap-1.5 animate-float-slow">
                  <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  <span className="text-[11px] font-extrabold text-white whitespace-nowrap">범퍼 광고 <span className="text-slate-400 font-medium">| 6초</span></span>
                </div>

                {/* YouTube logo floating top-left */}
                <div className="absolute top-[6%] left-[2%] w-12 h-12 bg-white rounded-2xl shadow-xl shadow-red-900/15 flex items-center justify-center z-30">
                  <img src="/images/logos/youtube.svg" alt="" className="w-7 h-7" />
                </div>

                {/* Video MIDDLE-LEFT — 작은 16:9, 인스트림 */}
                <div className="absolute top-[36%] left-0 w-[58%] aspect-video z-25" style={{ transform: "rotate(2deg)" }}>
                  <div className="relative w-full h-full" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-red-900/30 bg-slate-900 border-2 border-white">
                      <Image src="/images/stock/creative-design.jpg" alt="" fill className="object-cover" sizes="300px" />
                      <div className="absolute inset-0 bg-black/25" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-xl ring-4 ring-white/30">
                          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px]">
                        <span className="bg-red-600 px-2 py-0.5 rounded font-extrabold tracking-wider">LIVE</span>
                        <span className="bg-black/70 px-2 py-0.5 rounded font-bold">0:15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 인스트림 광고 배지 */}
                <div className="absolute top-[32%] left-[-2%] z-30 bg-slate-900 rounded-lg shadow-xl px-2.5 py-1.5 flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  <div>
                    <p className="text-[11px] font-extrabold text-white whitespace-nowrap leading-tight">인스트림 광고</p>
                    <p className="text-[9px] text-slate-400 leading-tight">5초 후 건너뛰기</p>
                  </div>
                </div>

                {/* Phone BOTTOM-RIGHT — Shorts (9:19) */}
                <div className="absolute bottom-0 right-[4%] w-[30%] aspect-[9/19] z-30" style={{ transform: "rotate(3deg)" }}>
                  <div className="relative w-full h-full" style={{ animation: "float 5.5s ease-in-out infinite 1.8s" }}>
                    <div className="relative w-full h-full rounded-[20px] bg-slate-900 shadow-2xl shadow-red-900/40 p-1 border border-slate-700">
                      <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-slate-900">
                        {/* Shorts UI mockup */}
                        <div className="absolute inset-0">
                          <Image src="/images/stock/mobile-ads.jpg" alt="" fill className="object-cover opacity-80" />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40" />
                          {/* Header */}
                          <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between text-white">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                            <span className="text-[7px] font-bold">Shorts</span>
                            <div className="flex gap-1">
                              <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /></svg>
                              <span className="text-[8px]">⋮</span>
                            </div>
                          </div>
                          {/* Play button center */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                          {/* Bottom brand */}
                          <div className="absolute bottom-7 left-1.5 right-1.5">
                            <div className="flex items-center gap-1 mb-1">
                              <div className="w-4 h-4 rounded-full bg-white border border-white" />
                              <span className="text-[7px] text-white font-bold">브랜드 이름</span>
                              <span className="text-[6px] text-white/60 bg-white/20 px-1 rounded">광고</span>
                            </div>
                            <div className="bg-red-600 rounded text-center py-0.5">
                              <span className="text-[7px] text-white font-extrabold">자세히 보기</span>
                            </div>
                          </div>
                          {/* Bottom nav */}
                          <div className="absolute bottom-0 left-0 right-0 bg-black/95 flex items-center justify-around py-1">
                            {["홈", "Shorts", "+", "구독", "보관함"].map((t, idx) => (
                              <span key={idx} className="text-[6px] text-white">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shorts 광고 배지 */}
                <div className="absolute bottom-[18%] right-[36%] z-40 bg-slate-900 rounded-lg shadow-xl px-2.5 py-1.5 flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  <div>
                    <p className="text-[11px] font-extrabold text-white whitespace-nowrap leading-tight">Shorts 광고</p>
                    <p className="text-[9px] text-slate-400 leading-tight">모바일 세로형</p>
                  </div>
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
            {/* Google visualization — 비율 정리 (가로형 컨테이너, B&W 이미지 키움, 폰 폭 줄임) */}
            <div className="lg:col-span-5 order-1 mb-12 lg:mb-0 relative">
              <div className="relative mx-auto w-full max-w-[560px] aspect-[6/5]">
                {/* Background subtle blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl" />
                {/* Dot pattern */}
                <div className="absolute top-2 right-2 w-20 h-14 opacity-30" style={{ backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1.5px)", backgroundSize: "8px 8px" }} />
                <div className="absolute bottom-0 right-12 w-16 h-10 opacity-25" style={{ backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1.5px)", backgroundSize: "8px 8px" }} />

                {/* 좌측 점선 동심원 궤도 */}
                <div className="absolute top-[38%] left-[6%] w-40 h-40 rounded-full border border-dashed border-blue-300/40" />
                <div className="absolute top-[36%] left-[3%] w-44 h-44 rounded-full border border-dashed border-blue-300/25" />

                {/* B&W 회의 이미지 (좌상단, 키움) */}
                <div className="absolute top-[3%] left-[2%] w-[54%] aspect-[5/4] z-10" style={{ animation: "float 7s ease-in-out infinite" }}>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/30 border-2 border-white">
                    <Image src="/images/0515/team-presentation-3.png" alt="" fill className="object-cover grayscale" sizes="320px" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>

                {/* Google G logo — B&W 우상단에 부유 */}
                <div className="absolute top-[5%] left-[48%] w-11 h-11 bg-white rounded-2xl shadow-xl flex items-center justify-center z-30 animate-float-slow">
                  <img src="/images/logos/google.svg" alt="" className="w-6 h-6" />
                </div>

                {/* 검색박스 카드 (B&W 좌하단) */}
                <div className="absolute top-[44%] left-[-2%] bg-white rounded-xl shadow-xl border border-slate-100 px-3 py-2 flex items-center gap-2 z-20" style={{ animation: "float 5.5s ease-in-out infinite 1s" }}>
                  <div className="flex gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <img src="/images/logos/google.svg" alt="" className="h-3 w-auto" />
                  <span className="text-[10px] text-slate-400 whitespace-nowrap">광고 컬렉션 검색...</span>
                </div>

                {/* 좌측 부유 채널 아이콘 */}
                <div className="absolute top-[58%] left-[2%] w-9 h-9 bg-white rounded-xl shadow-lg flex items-center justify-center z-30 animate-float">
                  <img src="/images/logos/google-ads.svg" alt="" className="w-5 h-5" />
                </div>
                <div className="absolute top-[68%] left-[12%] w-9 h-9 bg-white rounded-xl shadow-lg flex items-center justify-center z-30" style={{ animation: "float 5s ease-in-out infinite 0.8s" }}>
                  <img src="/images/logos/youtube.svg" alt="" className="w-5 h-5" />
                </div>
                <div className="absolute top-[80%] left-[4%] w-9 h-9 bg-white rounded-xl shadow-lg flex items-center justify-center z-30" style={{ animation: "float 6s ease-in-out infinite 1.5s" }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="6" height="6" rx="1" fill="#4285F4" />
                    <rect x="14" y="4" width="6" height="6" rx="1" fill="#EA4335" />
                    <rect x="4" y="14" width="6" height="6" rx="1" fill="#FBBC04" />
                    <rect x="14" y="14" width="6" height="6" rx="1" fill="#34A853" />
                  </svg>
                </div>

                {/* 폰 — Google 검색 (우측, 폭 줄임, B&W 우측과 겹침) */}
                <div className="absolute top-[14%] right-[2%] w-[32%] aspect-[9/19] z-40" style={{ transform: "rotate(2deg)" }}>
                  <div className="relative w-full h-full" style={{ animation: "float 6s ease-in-out infinite 0.5s" }}>
                    <div className="relative w-full h-full rounded-[22px] bg-slate-900 shadow-2xl shadow-slate-900/40 p-[5px] border border-slate-700">
                      <div className="relative w-full h-full rounded-[17px] overflow-hidden bg-white">
                        {/* Notch */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-900 rounded-full z-30" />
                        {/* Google header */}
                        <div className="absolute top-0 left-0 right-0 pt-4 pb-1.5 px-2.5 flex items-center justify-center bg-white border-b border-slate-100">
                          <span className="text-[9px] font-bold tracking-tight">
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FBBC04]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34A853]">l</span>
                            <span className="text-[#EA4335]">e</span>
                          </span>
                        </div>
                        {/* Search bar */}
                        <div className="absolute top-[30px] left-1.5 right-1.5 bg-slate-50 rounded-full px-2 py-1 flex items-center gap-1 border border-slate-200">
                          <svg className="w-2 h-2 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /></svg>
                          <span className="text-[6px] text-slate-700">광고</span>
                        </div>
                        {/* Tabs */}
                        <div className="absolute top-[50px] left-1.5 right-1.5 flex items-center gap-1.5 text-[6px]">
                          <span className="text-blue-500 font-bold border-b border-blue-500 pb-0.5">전체</span>
                          <span className="text-slate-500">이미지</span>
                          <span className="text-slate-500">동영상</span>
                          <span className="text-slate-500">쇼핑</span>
                        </div>
                        {/* Sponsored result */}
                        <div className="absolute top-[70px] left-1.5 right-1.5">
                          <span className="text-[5px] text-slate-700 font-bold bg-slate-100 px-1 rounded">스폰서</span>
                          <p className="text-[6px] text-blue-500 mt-0.5">www.yeouldnc.co.kr</p>
                          <p className="text-[6.5px] font-bold text-deep-navy leading-tight mt-0.5">여울디앤씨 마케팅 파트너</p>
                          <p className="text-[5px] text-slate-500 leading-tight mt-0.5">검색, 디스플레이, 유튜브까지<br />통합 캠페인으로 비즈니스<br />성장을 함께합니다.</p>
                          {/* mini banner */}
                          <div className="mt-1 h-7 rounded bg-linear-to-r from-blue-50 to-slate-100 grid grid-cols-2 gap-0.5 p-0.5">
                            <div className="bg-blue-100 rounded-sm" />
                            <div className="bg-slate-200 rounded-sm" />
                          </div>
                          <div className="mt-1 flex gap-0.5 flex-wrap">
                            <span className="text-[5px] text-slate-600 bg-slate-50 border border-slate-200 px-0.5 rounded">검색</span>
                            <span className="text-[5px] text-slate-600 bg-slate-50 border border-slate-200 px-0.5 rounded">디스플레이</span>
                            <span className="text-[5px] text-slate-600 bg-slate-50 border border-slate-200 px-0.5 rounded">유튜브</span>
                          </div>
                        </div>
                        {/* Bottom nav */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-1 bg-white border-t border-slate-100 text-[5px] text-slate-500">
                          <span>홈</span><span>검색</span><span>저장됨</span><span>알림</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 order-2">
              <p className="text-[12px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">
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
              <p className="text-[14px] sm:text-sm text-slate-500 leading-relaxed mb-6">
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
                      <p className="text-[12px] font-bold text-deep-navy">{s.label}</p>
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
                    <p className="text-[14px] sm:text-sm text-slate-700">{text}</p>
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
                      <span className="text-[11px] font-bold text-white">재접촉 마케팅</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">문자 마케팅</h3>
                  </div>
                  {/* Corner icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <IconMail className="w-5 h-5 text-violet-600" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[12px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">확보된 DB를 대상으로 직접 전달하는 SMS/LMS/MMS 광고</p>
                  <ul className="space-y-2 text-violet-700 mb-4">
                    <Bullet color="text-violet-700">재문의 유도 / 방문·예약 안내</Bullet>
                    <Bullet color="text-violet-700">기존 고객 재접촉에 효과적</Bullet>
                  </ul>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold bg-linear-to-br from-violet-500 to-purple-600 bg-clip-text text-transparent">06</span>
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
                        <span className="text-[11px] font-bold text-white">지역 특화</span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">당근/지역 광고</h3>
                  </div>
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <img src="/images/logos/danggeun.svg" alt="" className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[12px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">지역 기반 피드/검색/카탈로그 광고로 생활권 고객을 확보</p>
                  <ul className="space-y-2 text-orange-700 mb-4">
                    <Bullet color="text-orange-700">지역 상권 업종에 최적화</Bullet>
                    <Bullet color="text-orange-700">생활권 고객이 중요한 서비스</Bullet>
                  </ul>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold bg-linear-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent">07</span>
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
                      <span className="text-[11px] font-bold text-white">업종 특화</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">부동산 특화 광고</h3>
                  </div>
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <IconBuilding className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[12px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">호갱노노, 직방, 다방, 네모 등 부동산 전문 플랫폼 광고</p>
                  <ul className="space-y-2 text-teal-700 mb-4">
                    <Bullet color="text-teal-700">분양 / 임대 / 상가</Bullet>
                    <Bullet color="text-teal-700">지역 부동산 마케팅</Bullet>
                  </ul>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold bg-linear-to-br from-teal-500 to-teal-600 bg-clip-text text-transparent">08</span>
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
                  <span className="text-[11px] font-extrabold text-accent-blue tracking-wider uppercase">04 — 그 외 모든 업종</span>
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-deep-navy mb-2 leading-tight">모든 업종 맞춤 종합 마케팅 솔루션</h3>
                <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed">네이버·구글·LMS·홈페이지 제작·메타 등 상담 후 업종에 맞게 진행합니다.</p>
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
                <Link href="/contact" className="block w-full px-4 py-3 bg-linear-to-r from-accent-blue to-blue-600 text-white text-center text-[13px] sm:text-sm font-bold rounded-xl shadow-lg shadow-accent-blue/25 hover:shadow-xl transition-shadow">
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
                    iconBg: "bg-blue-50",
                    iconColor: "text-blue-600",
                  },
                  {
                    industry: "병원",
                    bullets: ["예약 문의 확보", "신뢰 기반 브랜딩 운영"],
                    result: "플레이스 · 블로그 기반 의료 마케팅 — 지역 검색 노출 · 상담 문의 최적화",
                    iconType: "hospital",
                    iconBg: "bg-emerald-50",
                    iconColor: "text-emerald-600",
                  },
                  {
                    industry: "교육",
                    bullets: ["수강 상담", "카카오 채널 연동 운영"],
                    result: "수강생 모집 중심 광고 운영 — 상담 유입 · 리드 확보 · 전환 최적화",
                    iconType: "edu",
                    iconBg: "bg-amber-50",
                    iconColor: "text-amber-600",
                  },
                  {
                    industry: "지역 자영업",
                    bullets: ["지역 타겟 광고", "신규 고객 유입 확대"],
                    result: "플레이스 기반 지역 마케팅 — 생활권 고객 확보 · 방문 유도 최적화",
                    iconType: "store",
                    iconBg: "bg-orange-50",
                    iconColor: "text-orange-600",
                  },
                  {
                    industry: "상담형 서비스",
                    bullets: ["문의 전환", "리드 확보 최적화"],
                    result: "고객 문의 확보 중심 운영 — 상담 신청 · DB 유입 · 전환 관리",
                    iconType: "consult",
                    iconBg: "bg-violet-50",
                    iconColor: "text-violet-600",
                  },
                ].map((item, i) => (
                  <div
                    key={item.industry}
                    className="group relative"
                    style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s backwards` }}
                  >
                    <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/10" />
                    <div className="relative grid grid-cols-12 items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-md group-hover:-translate-y-0.5 transition-transform duration-300">
                      {/* Number */}
                      <div className="col-span-1 text-2xl sm:text-3xl font-black text-accent-blue leading-none tracking-tight">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {/* Industry icon — 컬러 박스 */}
                      <div className="col-span-1 flex justify-center">
                        <div className={`w-11 h-11 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center`}>
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                            {item.iconType === "building" && <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 21V7l9-4 9 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />}
                            {item.iconType === "hospital" && <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v1.5M21 7.5H3m9 4.5v6m-3-3h6" />}
                            {item.iconType === "edu" && <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />}
                            {item.iconType === "store" && <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" />}
                            {item.iconType === "consult" && <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M9.879 16.121A3 3 0 1012.015 11L11.288 9.273M16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />}
                          </svg>
                        </div>
                      </div>
                      {/* Left: 업종명 + bullets */}
                      <div className="col-span-4">
                        <p className="text-[15px] sm:text-base font-extrabold text-deep-navy mb-1">{item.industry}</p>
                        {item.bullets.map((b) => (
                          <p key={b} className="text-[11px] sm:text-[12px] text-slate-500 leading-tight">· {b}</p>
                        ))}
                      </div>
                      {/* "또는" pill */}
                      <div className="col-span-2 flex justify-center">
                        <span className="text-[10px] sm:text-[11px] font-bold text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded-full px-2 py-1">또는</span>
                      </div>
                      {/* Right: result */}
                      <div className="col-span-4">
                        <p className="text-[11px] sm:text-[12px] text-slate-600 leading-relaxed">{item.result}</p>
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
                    <p className="text-[14px] sm:text-sm font-extrabold text-deep-navy">업종별 맞춤 전략으로 더 높은 성과를</p>
                    <p className="text-[11px] sm:text-[12px] text-slate-500 mt-0.5">업종의 특성과 고객 행동을 분석하여 가장 효과적인 광고 전략을 설계합니다.</p>
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

              {/* 노트북 이미지 + LIVE 배지 (사진 매칭) */}
              <div className="relative mb-6 group">
                <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-2xl bg-linear-to-br from-accent-blue to-blue-600 opacity-20 blur-[3px]" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/stock/monitor-data.jpg" alt="데이터 모니터링" width={800} height={500} className="w-full h-auto" />
                  {/* LIVE 최적화 중 floating badge */}
                  <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2 shadow-xl">
                    <p className="text-[10px] flex items-center gap-1 text-deep-navy font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> LIVE
                    </p>
                    <p className="text-[11px] flex items-center gap-1 text-accent-blue font-extrabold mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse-soft" /> 최적화 중
                    </p>
                  </div>
                </div>
              </div>

              {/* 5-step 리스트 (사진 매칭: 파랑 번호 박스 + 아이콘 + 제목 + 설명) */}
              <div className="space-y-3">
                {[
                  {
                    step: "전략 수립",
                    desc: "시장/경쟁사/타겟 분석을 통한 광고 전략 기획",
                    icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
                  },
                  {
                    step: "소재 제작",
                    desc: "타겟에 최적화된 광고 소재 기획 및 제작",
                    icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
                  },
                  {
                    step: "채널 세팅",
                    desc: "광고 채널 설정 및 캠페인 구조 세팅",
                    icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5" /></svg>,
                  },
                  {
                    step: "운영 및 최적화",
                    desc: "데이터 기반 운영으로 성과 지속 개선",
                    icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" /></svg>,
                  },
                  {
                    step: "결과 체크",
                    desc: "성과 리포트 제공 및 다음 전략 제안",
                    icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  },
                ].map((s, i) => (
                  <div key={s.step} className="flex items-center gap-3 sm:gap-4">
                    {/* 파랑 번호 박스 */}
                    <div className="w-9 h-9 rounded-lg bg-accent-blue flex items-center justify-center shrink-0 shadow-md">
                      <span className="text-white text-[14px] font-black">{i + 1}</span>
                    </div>
                    {/* 컬러 아이콘 원형 */}
                    <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      {s.icon}
                    </div>
                    {/* 텍스트 */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] sm:text-base font-extrabold text-deep-navy leading-tight">{s.step}</p>
                      <p className="text-[12px] sm:text-[13px] text-slate-500 mt-0.5 leading-tight">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 데이터 기반 성과 관리 카드 */}
              <div className="mt-6 relative">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/15" />
                <div className="relative flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-md">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[15px] sm:text-base font-extrabold text-deep-navy">데이터 기반 성과 관리</p>
                    <p className="text-[12px] sm:text-[13px] text-slate-500 mt-1 leading-relaxed">실시간 데이터 분석과 지속적인 최적화로 광고 효율을 극대화합니다.</p>
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
                <div className="col-span-2 px-4 py-4 text-[12px] font-extrabold text-slate-400 tracking-widest uppercase">업종</div>
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
                    <span className="text-[11px] font-bold text-slate-500">{ch.label}</span>
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
                        <p className={`text-[11px] font-bold bg-linear-to-br ${row.color} bg-clip-text text-transparent tracking-wider`}>{row.tag}</p>
                      </div>
                    </div>
                    {Object.entries(row.matches).map(([ch, level]) => (
                      <div key={ch} className="px-2 py-4 flex items-center justify-center">
                        {/* PDF page 44 5단계: 추천(green) / 적합(2 dots) / 보조(yellow dots) / 비추보조(orange dot) / 비추(grey dots) */}
                        {level === 3 ? (
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 shadow-sm">
                            <span className="text-[10px] font-extrabold text-white">추천</span>
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
                        <p className={`text-[11px] font-bold bg-linear-to-br ${row.color} bg-clip-text text-transparent tracking-wider`}>{row.tag}</p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">추천 채널</span>
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
              <div className="p-4 sm:p-5 bg-linear-to-r from-slate-50 to-white border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] sm:text-[12px]">
                <div className="flex items-center gap-1.5">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500 shadow-sm">
                    <span className="text-[10px] font-extrabold text-white">추천</span>
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

          <p className="text-center text-[12px] sm:text-xs text-slate-400 mt-6 leading-relaxed">
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
