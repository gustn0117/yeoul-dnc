import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IllustPieChart } from "@/components/Illustrations";
import { IconCheck, IconTarget, IconBarChart, IconLayers } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "회사소개 | 여울디앤씨",
  description: "여울디앤씨는 유입부터 상담 전환까지 설계하는 온라인 광고 실행사입니다.",
};

const coreValues = [
  { title: "데이터 중심 운영", desc: "화려한 제안보다 실제 반응과 문의로 이어지는 방향을 우선합니다.", Icon: IconBarChart },
  { title: "실행력 있는 대응", desc: "빠른 실행과 수정으로 광고 효율을 지속적으로 개선합니다.", Icon: IconTarget },
  { title: "정직한 성과 설계", desc: "과장된 숫자 대신, 업종에 맞는 현실적인 운영 방식을 제안합니다.", Icon: IconLayers },
];

const strengths = [
  "업종별 타겟 이해",
  "소재 제작과 운영 통합",
  "문의 이후 재접촉까지 고려한 설계",
];

const caseSummary = [
  { industry: "분양", desc: "DB 유입과 재접촉 구조 중심, 메타 리드폼 + 문자 후속", logos: ["meta"] },
  { industry: "병원", desc: "예약 문의와 신뢰 형성, 네이버 검색형 + 메타 노출형", logos: ["naver", "instagram"] },
  { industry: "지역 자영업", desc: "생활권 타겟팅, 당근 + 메타 조합형 운영", logos: ["danggeun"] },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#060e1e]">
        <Image src="/images/stock/team-collab.jpg" alt="" fill className="object-cover opacity-30" aria-hidden="true" />
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

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase">About 여울디앤씨</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                광고는 많이 하는 것보다,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">맞는 방향</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                으로 하는 것이 중요합니다
              </h1>
              <p className="text-[13px] sm:text-base text-slate-300/90 max-w-xl leading-relaxed mb-6">
                업종, 예산, 목표를 먼저 확인하고<br className="hidden sm:inline lg:hidden" />
                {" "}<span className="font-semibold text-white">필요한 광고 구조부터 제안</span>하는 온라인 광고 전문 실행사입니다.
              </p>

              {/* 3 mini feature cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 max-w-xl">
                {[
                  {
                    title: "업종 맞춤 전략",
                    desc: "업종별 목표에 최적화된 광고 전략 설계",
                    icon: (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="5" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    title: "데이터 기반 운영",
                    desc: "실시간 데이터 분석으로 성과를 극대화",
                    icon: (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                  },
                  {
                    title: "상담 전환 최적화",
                    desc: "유입에서 상담까지 이어지는 전환 구조 설계",
                    icon: (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87m-4-12a4 4 0 110 7.75M9 20H4v-2a4 4 0 014-4h.5a4 4 0 014 4v2zm0-12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ),
                  },
                ].map((f) => (
                  <div key={f.title} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center mb-2">
                      {f.icon}
                    </div>
                    <p className="text-[11px] sm:text-[12px] font-extrabold text-white mb-0.5 leading-tight">{f.title}</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* Quick highlight stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md">
                {[
                  { value: "6+", label: "운영 채널" },
                  { value: "100+", label: "누적 캠페인" },
                  { value: "2~4x", label: "목표 ROAS" },
                ].map((s, i) => (
                  <div key={i} className="relative">
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/20" />
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3 text-center">
                      <p className="text-lg sm:text-xl font-extrabold bg-linear-to-br from-white to-accent-blue bg-clip-text text-transparent">{s.value}</p>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand mark (subtle 3D) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center perspective-1200">
              <div
                className="relative w-72 h-72 preserve-3d"
                style={{ transform: "rotateX(6deg) rotateY(-4deg)", transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />

                {/* Stacked orbital rings at different Z levels */}
                <div className="absolute inset-0 rounded-full border-2 border-accent-blue/20" style={{ transform: "translateZ(0)" }} />
                <div className="absolute inset-3 rounded-full border-2 border-accent-blue/15" style={{ transform: "translateZ(10px)" }} />
                <div className="absolute inset-6 rounded-full border-2 border-accent-blue/10" style={{ transform: "translateZ(20px)" }} />

                {/* Center mark - top of stack */}
                <div
                  className="absolute inset-10 rounded-full glass-3d-dark flex items-center justify-center shadow-3d-lg"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <LogoMark variant="white" className="w-16" />
                </div>

                {/* Orbital dots */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue shadow-lg shadow-accent-blue/60"
                  style={{ transform: "translateZ(45px)", animation: "float 4s ease-in-out infinite" }}
                />
                <div
                  className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50"
                  style={{ transform: "translateZ(30px)", animation: "float 5s ease-in-out infinite 1s" }}
                />
                <div
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50"
                  style={{ transform: "translateZ(25px)", animation: "float 4.5s ease-in-out infinite 2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Brand message + logo (3D framed) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.025]" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #2563eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: 3D framed logo with floating elements */}
            <div className="flex justify-center mb-12 lg:mb-0">
              <div className="relative">
                {/* Background depth */}
                <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-linear-to-br from-accent-blue to-blue-600 opacity-20 blur-[3px]" />
                <div className="absolute inset-0 translate-x-1.5 translate-y-2 rounded-3xl bg-linear-to-br from-accent-blue to-blue-600 opacity-10" />

                {/* Logo container */}
                <div className="relative bg-linear-to-br from-white via-blue-50/40 to-white rounded-3xl p-10 sm:p-14 border border-white shadow-2xl shadow-blue-900/10">
                  <div className="absolute inset-0 rounded-3xl" style={{
                    backgroundImage: "linear-gradient(135deg, transparent, transparent 40%, rgba(37,99,235,0.04) 50%, transparent 60%, transparent)",
                  }} />
                  <Image src="/images/logo-vertical-color.png" alt="여울디앤씨 로고" width={1000} height={1250} className="relative w-32 sm:w-40 lg:w-48 h-auto mx-auto" />

                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-3xl border border-blue-200/30 -z-10" />
                </div>

                {/* Floating tags */}
                <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl shadow-blue-900/10 px-3 py-2 border border-blue-100 animate-float flex items-center gap-2">
                  <LogoMark className="w-6" />
                  <div>
                    <p className="text-[9px] text-slate-400 font-medium leading-none">EST.</p>
                    <p className="text-[11px] font-extrabold text-accent-blue leading-tight">여울디앤씨</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-xl shadow-blue-900/10 px-3 py-2 border border-emerald-100 flex items-center gap-2" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                  <p className="text-[10px] font-bold text-slate-600">ONLINE AD PARTNER</p>
                </div>
              </div>
            </div>

            {/* Right: Brand message + 3 mini cards */}
            <div>
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">BRAND</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 sm:mb-5 leading-tight">
                광고는 집행보다<br />
                <span className="relative inline-block">
                  <span className="relative z-10">구조가 중요</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
                </span>
                합니다
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mb-5 leading-relaxed">
                여울디앤씨는 업종에 맞는 채널 선택부터 소재 제작, 운영, 보완까지<br className="hidden sm:inline lg:hidden" />
                {" "}연결하는 <span className="font-semibold text-deep-navy">온라인 광고 실행 파트너</span>입니다.
              </p>
              <p className="text-[13px] sm:text-sm text-deep-navy font-bold mb-6">
                결과를 만드는 광고는 시작부터 다릅니다.
              </p>

              {/* 3 mission mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "MISSION", text: "전환까지 책임지는 운영", color: "from-blue-500 to-indigo-600" },
                  { label: "VISION", text: "업종 맞춤 광고 파트너", color: "from-violet-500 to-purple-600" },
                  { label: "PROMISE", text: "데이터로 증명되는 성과", color: "from-emerald-500 to-teal-600" },
                ].map((m) => (
                  <div key={m.label} className="relative group">
                    <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-linear-to-br ${m.color} opacity-15`} />
                    <div className="relative bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm group-hover:-translate-y-0.5 transition-transform duration-300">
                      <span className={`text-[9px] font-extrabold bg-linear-to-br ${m.color} bg-clip-text text-transparent tracking-widest`}>{m.label}</span>
                      <p className="text-[12px] sm:text-xs text-deep-navy font-bold mt-0.5 leading-tight">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core values (isometric 3D cards) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-[#f5f9ff] via-white to-[#f0f5ff] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">CORE VALUE</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              보여주기식 운영보다,<br />
              <span className="relative inline-block">
                <span className="relative z-10">실제 반응이 남는 광고</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              를 지향합니다
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="group relative"
                style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
              >
                <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-accent-blue/20 blur-[2px]" />

                <div className="relative bg-white p-6 sm:p-8 rounded-2xl border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-60">
                  <div className="absolute -top-4 -right-2 text-[7rem] sm:text-[8rem] font-black text-slate-50 leading-none select-none">
                    {i + 1}
                  </div>

                  <div className="relative">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6">
                      <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-2xl bg-accent-blue/50 blur-[1px]" />
                      <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-lg">
                        <v.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-[15px] sm:text-base font-extrabold text-deep-navy mb-2 sm:mb-2.5">{v.title}</h3>
                    <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">{v.desc}</p>

                    <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold text-accent-blue">
                        VALUE {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strengths + image (isometric numbered list + floating dashboard) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">STRENGTHS</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
                채널만 운영하는 것이 아니라,<br />
                <span className="relative inline-block">
                  <span className="relative z-10">업종에 맞는 구조</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
                </span>
                까지<br className="sm:hidden" />
                {" "}함께 설계합니다
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mb-6 sm:mb-8 leading-relaxed">
                분양/병원/지역 자영업처럼 상담과 방문 전환이 중요한 업종은<br className="hidden sm:inline lg:hidden" />
                {" "}매체 조합과 후속 운영 방식이 중요합니다.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { text: "업종별 타겟 이해", num: "01" },
                  { text: "소재 제작과 운영 통합", num: "02" },
                  { text: "문의 이후 재접촉까지 고려한 설계", num: "03" },
                ].map((item, i) => (
                  <div
                    key={item.text}
                    className="group relative"
                    style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
                  >
                    <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/15" />
                    <div className="relative flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                      <div className="text-3xl sm:text-4xl font-black text-accent-blue leading-none tracking-tight shrink-0">
                        {item.num}
                      </div>
                      <div className="w-0.5 h-10 bg-linear-to-b from-accent-blue to-blue-600 rounded-full shrink-0" />
                      <div className="flex-1">
                        <p className="text-[13px] sm:text-sm text-deep-navy font-bold">{item.text}</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-md shrink-0">
                        <IconCheck className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual side with layered mockups */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/15 ring-1 ring-white/50">
                <Image src="/images/stock/strategy-board.jpg" alt="전략 회의" width={800} height={533} className="w-full h-auto" />
                <div className="absolute inset-0 bg-linear-to-t from-deep-navy/20 to-transparent" />
              </div>

              {/* Floating dashboard card (top right) */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-blue-900/15 p-4 border border-blue-100 w-52 animate-float hidden sm:block">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider">CAMPAIGN</p>
                  <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                    LIVE
                  </span>
                </div>
                <p className="text-xs font-extrabold text-deep-navy mb-2">분양 캠페인 #12</p>
                <div className="flex items-end gap-1 h-10 mb-2">
                  {[30, 50, 40, 65, 55, 75, 80, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-linear-to-t from-accent-blue to-sky-400" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] text-slate-400">목표 ROAS</span>
                  <span className="text-sm font-extrabold text-accent-blue">2~4x 달성</span>
                </div>
              </div>

              {/* Floating pie chart (bottom left) */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block animate-float-slow">
                <IllustPieChart className="w-40 h-40 drop-shadow-2xl" />
              </div>

              {/* Floating stat card (bottom right) */}
              <div className="absolute -bottom-4 right-8 bg-white rounded-xl shadow-xl shadow-blue-900/15 p-3 border border-blue-100 hidden sm:block" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <IconCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400">전환 달성</p>
                    <p className="text-xs font-extrabold text-deep-navy">128건</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Work environment (isometric platform grid) */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#060e1e]">
        <Image src="/images/stock/work-desk.jpg" alt="" fill className="object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e] via-[#0a1428] to-[#060e1e]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-accent-blue/15 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">TEAM</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
            전략을 세우고, 빠르게 실행하고,<br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">데이터로 보완</span>
              <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
            </span>
            하는 팀
          </h2>
          <p className="text-[13px] sm:text-sm text-slate-400 max-w-lg mx-auto mb-10 sm:mb-12 leading-relaxed">
            회의/기획/모니터링/리포트 중심으로<br className="sm:hidden" />
            {" "}움직이는 실행 조직입니다.
          </p>

          {/* Isometric platform cards grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10">
            {[
              { name: "naver", color: "from-green-500 to-emerald-600" },
              { name: "kakaotalk", color: "from-yellow-400 to-amber-500" },
              { name: "meta", color: "from-blue-500 to-indigo-600" },
              { name: "youtube", color: "from-red-500 to-rose-600" },
              { name: "google", color: "from-sky-500 to-blue-500" },
              { name: "instagram", color: "from-pink-500 to-rose-500" },
            ].map((p, i) => (
              <div key={p.name} className="relative group" style={{ animation: `float ${4 + (i % 3)}s ease-in-out infinite ${i * 0.3}s` }}>
                {/* Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${p.color} opacity-20 blur-xl group-hover:opacity-50 transition-opacity`} />
                {/* Depth layer */}
                <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-2xl bg-linear-to-br ${p.color} opacity-60`} />
                {/* Front card */}
                <div className="relative w-full aspect-square rounded-2xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl group-hover:-translate-y-1 transition-transform duration-300">
                  <img src={`/images/logos/${p.name}.svg`} alt={p.name} className={`h-6 sm:h-7 w-auto ${p.name === "kakaotalk" ? "" : "brightness-0 invert"}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Team stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto pt-8 border-t border-white/10">
            {[
              { value: "6+", label: "운영 플랫폼" },
              { value: "100+", label: "누적 캠페인" },
              { value: "2~4x", label: "목표 ROAS" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold bg-linear-to-br from-white to-slate-300 bg-clip-text text-transparent">{s.value}</p>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case summary (3D isometric) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">CASES</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              업종별 목적에 따라<br />
              <span className="relative inline-block">
                <span className="relative z-10">필요한 채널과 운영 방식</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              은 달라집니다
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {caseSummary.map((c, i) => (
              <div
                key={c.industry}
                className="group relative"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
              >
                <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-accent-blue/15 blur-[2px]" />

                <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden min-h-48">
                  <div className="relative">
                    <div className="inline-flex items-center gap-1 mb-3 px-2.5 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                      <span className="text-[10px] font-extrabold text-accent-blue tracking-wider uppercase">{c.industry}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3 bg-slate-50 rounded-lg px-2.5 py-1.5 w-fit">
                      {c.logos.map((logo) => (
                        <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-4 w-auto" />
                      ))}
                    </div>
                    <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold text-accent-blue tracking-widest">
                        CASE {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Approach timeline (our way of working) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">OUR APPROACH</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              우리가 일하는 방식은<br className="sm:hidden" />
              {" "}<span className="relative inline-block">
                <span className="relative z-10">3가지 원칙</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              을 따릅니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
              과정보다 결과, 수치보다 흐름.<br className="sm:hidden" />
              {" "}우리가 놓치지 않는 3가지 기준입니다.
            </p>
          </div>

          {/* 3 principles - isometric connected */}
          <div className="relative">
            {/* Desktop: horizontal connector line */}
            <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent-blue/40 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-sky-300/40 to-transparent blur-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              {[
                {
                  step: "01",
                  label: "LISTEN",
                  title: "먼저 듣습니다",
                  desc: "현재 상황과 목표부터 정확히 파악합니다. 무조건적인 제안보다, 상황에 맞는 질문을 먼저 합니다.",
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  ),
                  tags: ["업종 이해", "목표 정리", "예산 확인"],
                },
                {
                  step: "02",
                  label: "BUILD",
                  title: "구조를 만듭니다",
                  desc: "필요한 채널만 선별하고, 소재부터 운영까지 일관된 흐름을 설계합니다. 실행 중심으로 준비합니다.",
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  ),
                  tags: ["채널 선별", "소재 제작", "운영 세팅"],
                },
                {
                  step: "03",
                  label: "IMPROVE",
                  title: "보완을 반복합니다",
                  desc: "데이터로 판단하고, 효율이 나오는 방향으로 조정합니다. 끝난 뒤에도 다음 방향까지 연결합니다.",
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  tags: ["반응 확인", "효율 개선", "리포트"],
                },
              ].map((p, i) => (
                <div
                  key={p.step}
                  className="relative group"
                  style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.12}s backwards` }}
                >
                  <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-accent-blue/15 blur-[2px]" />

                  <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
                    <div className="relative flex items-center gap-4 mb-5">
                      <div className="relative w-16 h-16 shrink-0">
                        <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-2xl bg-accent-blue/50 blur-[1px]" />
                        <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-lg">
                          {p.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-accent-blue tracking-[0.2em]">
                          {p.label}
                        </p>
                        <p className="text-3xl font-black text-accent-blue leading-none tracking-tight">
                          {p.step}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-deep-navy mb-2 leading-tight">{p.title}</h3>
                    <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed mb-4">{p.desc}</p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-50 border border-slate-100 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* "결과로 증명합니다" footer band */}
            <div className="mt-8 sm:mt-10 relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-accent-blue/15 blur-[2px]" />
              <div className="relative bg-white rounded-2xl border border-white shadow-3d px-5 sm:px-7 py-5 flex items-center gap-4 sm:gap-6 overflow-hidden">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0">
                  <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/40 blur-[1px]" />
                  <div className="relative w-full h-full rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] sm:text-base font-extrabold text-deep-navy leading-tight">결과로 증명합니다</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">작은 개선이 쌓여 성과가 됩니다. 데이터가 말해주는 결과로 신뢰를 만듭니다.</p>
                </div>
                {/* mini sparkline */}
                <div className="hidden sm:block shrink-0">
                  <svg viewBox="0 0 120 32" className="w-24 h-8" fill="none">
                    <path d="M0 28 L18 22 L36 24 L54 16 L72 18 L90 8 L108 10 L120 4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                    {[0, 18, 36, 54, 72, 90, 108, 120].map((x, i) => (
                      <circle key={i} cx={x} cy={[28, 22, 24, 16, 18, 8, 10, 4][i]} r="2" fill="#2563eb" />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <SectionCTA
        title="우리 회사 광고, 어떤 방향이 맞는지 함께 정리해드릴게요"
        description="업종, 예산, 목표를 먼저 확인하고 필요한 광고 구조부터 제안합니다. 무료 상담으로 부담없이 시작해보세요."
        buttonText="무료 광고 상담받기"
        variant="dark"
      />
    </>
  );
}
