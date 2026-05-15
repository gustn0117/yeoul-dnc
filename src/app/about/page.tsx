import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";
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
  {
    industry: "분양",
    badge: "01",
    title: "부동산 분양 광고 최적화 운영",
    desc: "DB 유입과 재접촉 구조를 중심으로, 메타 리드폼과 문자 후속 시스템을 통해 분양 상담 전환까지 연결합니다.",
    channels: [
      { name: "meta", label: "메타 광고", color: "from-blue-500 to-indigo-600" },
      { name: "naver", label: "네이버 광고", color: "from-green-500 to-emerald-600" },
      { name: "kakaotalk", label: "LMS 운영", color: "from-yellow-400 to-amber-500" },
      { name: "google", label: "리타겟팅", color: "from-sky-500 to-blue-500" },
    ],
    img: "/images/0515/ind-apartment.png",
  },
  {
    industry: "병원",
    badge: "02",
    title: "병·의원 브랜딩 및 유입 최적화",
    desc: "병원 광고는 검색 신뢰도와 반복 노출 브랜딩이 중요합니다. 플레이스·검색광고·메타 운영을 통해 예약 문의 전환을 도모합니다.",
    channels: [
      { name: "naver", label: "네이버 검색", color: "from-green-500 to-emerald-600" },
      { name: "instagram", label: "메타 광고", color: "from-pink-500 via-rose-500 to-orange-500" },
      { name: "meta", label: "디스플레이", color: "from-blue-500 to-indigo-600" },
      { name: "google", label: "검색 광고", color: "from-sky-500 to-blue-500" },
    ],
    img: "/images/0515/ind-clinic.png",
  },
  {
    industry: "지역 자영업",
    badge: "03",
    title: "자영업 맞춤 지역 광고 솔루션",
    desc: "당근 광고와 지역 타겟 광고를 활용해 생활권 고객에게 노출시키고, 매장 유입 중심 퍼포먼스 마케팅을 진행합니다.",
    channels: [
      { name: "danggeun", label: "당근 광고", color: "from-orange-500 to-red-500" },
      { name: "meta", label: "메타 광고", color: "from-blue-500 to-indigo-600" },
      { name: "naver", label: "네이버 광고", color: "from-green-500 to-emerald-600" },
      { name: "kakaotalk", label: "브랜딩 운영", color: "from-yellow-400 to-amber-500" },
    ],
    img: "/images/0515/ind-store.png",
  },
  {
    industry: "그 외 모든 업종",
    badge: "04",
    title: "모든 업종 맞춤 종합 마케팅 솔루션",
    desc: "네이버 + 구글 + LMS + 홈페이지제작 + 메타 등 상담 후 업종에 맞게 진행.",
    channels: [
      { name: "naver", label: "네이버", color: "from-green-500 to-emerald-600" },
      { name: "google", label: "구글", color: "from-sky-500 to-blue-500" },
      { name: "kakaotalk", label: "LMS", color: "from-yellow-400 to-amber-500" },
      { name: "meta", label: "메타", color: "from-blue-500 to-indigo-600" },
    ],
    isAll: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#060e1e]">
        <Image src="/images/stock/boardroom.jpg" alt="" fill priority className="object-cover opacity-30" aria-hidden="true" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e]/93 via-[#0a1428]/90 to-[#060e1e]/95" />
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
                <span className="text-[12px] font-bold text-slate-300 tracking-wider uppercase">About 여울디앤씨</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                광고는 많이 하는 것보다,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">맞는 방향</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                으로 하는 것이 중요합니다
              </h1>
              <p className="text-[14px] sm:text-base text-slate-300/90 max-w-xl leading-relaxed mb-6">
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
                    <p className="text-[12px] sm:text-[13px] font-extrabold text-white mb-0.5 leading-tight">{f.title}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">{f.desc}</p>
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
        {/* 희미하게 스며드는 사진 — 우상단 모서리에서 페이드 */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/stock/meeting-room.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.11] grayscale"
            style={{
              maskImage: "radial-gradient(125% 125% at 94% 6%, rgba(0,0,0,0.92), rgba(0,0,0,0.3) 36%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(125% 125% at 94% 6%, rgba(0,0,0,0.92), rgba(0,0,0,0.3) 36%, transparent 60%)",
            }}
          />
        </div>
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
                    <p className="text-[10px] text-slate-400 font-medium leading-none">EST.</p>
                    <p className="text-[12px] font-extrabold text-accent-blue leading-tight">여울디앤씨</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-xl shadow-blue-900/10 px-3 py-2 border border-emerald-100 flex items-center gap-2" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                  <p className="text-[11px] font-bold text-slate-600">ONLINE AD PARTNER</p>
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
              <p className="text-[14px] sm:text-sm text-slate-500 mb-5 leading-relaxed">
                여울디앤씨는 업종에 맞는 채널 선택부터 소재 제작, 운영, 보완까지<br className="hidden sm:inline lg:hidden" />
                {" "}연결하는 <span className="font-semibold text-deep-navy">온라인 광고 실행 파트너</span>입니다.
              </p>
              <p className="text-[14px] sm:text-sm text-deep-navy font-bold mb-6">
                결과를 만드는 광고는 시작부터 다릅니다.
              </p>

              {/* 3 mission cards — 아이콘 + 제목 + 부제 (0515 피드백 반영) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  {
                    label: "MISSION",
                    text: "전환까지 책임지는 운영",
                    sub: "기획부터 운영까지 전환율을 최우선으로 합니다.",
                    color: "from-blue-500 to-indigo-600",
                    iconBg: "bg-blue-50",
                    iconColor: "text-blue-600",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    label: "VISION",
                    text: "업종 맞춤 광고 파트너",
                    sub: "업종과 목표에 맞는 전략으로 최적의 광고 성과를 만듭니다.",
                    color: "from-violet-500 to-purple-600",
                    iconBg: "bg-violet-50",
                    iconColor: "text-violet-600",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: "PROMISE",
                    text: "데이터로 증명되는 성과",
                    sub: "데이터 기반의 분석과 최적화로 확실한 성과를 약속합니다.",
                    color: "from-emerald-500 to-teal-600",
                    iconBg: "bg-emerald-50",
                    iconColor: "text-emerald-600",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    ),
                  },
                ].map((m) => (
                  <div key={m.label} className="relative group">
                    <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-linear-to-br ${m.color} opacity-15 blur-[2px]`} />
                    <div className="relative bg-white rounded-xl p-4 sm:p-4.5 border border-slate-100 shadow-md group-hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${m.iconBg} ${m.iconColor} flex items-center justify-center mb-2.5`}>
                        {m.icon}
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-extrabold bg-linear-to-br ${m.color} bg-clip-text text-transparent tracking-widest mb-1`}>{m.label}</span>
                      <p className="text-[13px] sm:text-[14px] text-deep-navy font-extrabold leading-tight mb-1.5">{m.text}</p>
                      <p className="text-[11px] sm:text-[12px] text-slate-500 leading-relaxed">{m.sub}</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-deep-navy mb-4 leading-tight">
              보여주기식 운영보다,<br />
              <span className="relative inline-block">
                <span className="relative z-10">실제 반응이 남는 광고</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              를 지향합니다
            </h2>
            <p className="text-[13px] sm:text-[14px] text-slate-500 max-w-xl mx-auto leading-relaxed">
              여울디앤씨는 데이터와 경험을 바탕으로, 업종에 맞는 전략과 실행으로<br className="hidden sm:inline" />
              {" "}광고의 본질적인 성과를 만들어냅니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="group relative h-full"
                style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
              >
                <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-accent-blue/20 blur-[2px]" />

                <div className="relative h-full bg-white p-7 sm:p-8 lg:p-9 rounded-2xl border border-slate-100 shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* 큰 숫자 워터마크 — 우상단 */}
                  <div className="absolute top-4 right-5 text-[3.75rem] sm:text-[4.75rem] lg:text-[5.25rem] font-black text-slate-100 leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex flex-col flex-1">
                    {/* 아이콘 박스 — 키움 */}
                    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] mb-5 sm:mb-6">
                      <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/50 blur-[2px]" />
                      <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-lg shadow-accent-blue/30">
                        <v.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    {/* 제목 — 키움 (lg → xl, 굵게) */}
                    <h3 className="text-[19px] sm:text-xl lg:text-[1.375rem] font-extrabold text-deep-navy mb-3 sm:mb-4 leading-tight">
                      {v.title}
                    </h3>

                    {/* 설명 — 키움 (14px → 15-16px) + 시인성 강화 (slate-500 → slate-600) */}
                    <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed flex-1">
                      {v.desc}
                    </p>

                    {/* VALUE NN + 화살표 — 하단 정렬 (mt-auto) */}
                    <div className="mt-7 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-extrabold text-accent-blue tracking-wider">
                        VALUE {String(i + 1).padStart(2, "0")}
                      </span>
                      <svg className="w-5 h-5 text-accent-blue group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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
              <p className="text-[14px] sm:text-sm text-slate-500 mb-6 sm:mb-8 leading-relaxed">
                분양/병원/지역 자영업처럼 상담과 방문 전환이 중요한 업종은<br className="hidden sm:inline lg:hidden" />
                {" "}매체 조합과 후속 운영 방식이 중요합니다.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    num: "01",
                    text: "업종별 타겟 이해",
                    sub: "고객의 니즈와 검색의도·데이터를 기반으로 정확한 타겟을 설정합니다.",
                    Icon: () => (
                      <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    num: "02",
                    text: "소재 제작과 운영 통합",
                    sub: "전체 맞춤 소재 기획부터 제작, 운영까지 원스톱으로 진행합니다.",
                    Icon: () => (
                      <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    ),
                  },
                  {
                    num: "03",
                    text: "문의 이후 재접촉까지 고려한 설계",
                    sub: "문의 이후 고객 여정을 설계하고, 재방문과 신뢰성을 강화하여 관계화 합니다.",
                    Icon: () => (
                      <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={item.text}
                    className="group relative"
                    style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
                  >
                    <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/15" />
                    <div className="relative flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                        <item.Icon />
                      </div>
                      <div className="text-[12px] sm:text-[13px] font-extrabold text-accent-blue leading-none pt-1 shrink-0 px-2 py-2 rounded-md bg-accent-blue/5">
                        {item.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] sm:text-[15px] text-deep-navy font-extrabold mb-1 leading-tight">{item.text}</p>
                        <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">{item.sub}</p>
                      </div>
                      <svg className="w-4 h-4 text-accent-blue/40 group-hover:text-accent-blue group-hover:translate-x-1 transition-all shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* PDF page 28: 전문 컨설팅으로 광고 효율 극대화 부가 박스 */}
              <div className="mt-5 relative">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/15" />
                <div className="relative flex items-center gap-3 p-3.5 rounded-xl bg-linear-to-br from-accent-blue/5 to-blue-50 border border-accent-blue/20">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] sm:text-sm font-extrabold text-deep-navy">전문 컨설팅으로 광고 효율을 극대화합니다</p>
                    <p className="text-[11px] sm:text-[12px] text-slate-500 mt-0.5">업종 특성에 맞는 전략으로 확실한 성과를 만들어드립니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual side with layered mockups */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/15 ring-1 ring-white/50">
                <Image src="/images/0515/team-presentation-1.png" alt="전략 회의" width={800} height={800} className="w-full h-auto" />
                <div className="absolute inset-0 bg-linear-to-t from-deep-navy/20 to-transparent" />
              </div>

              {/* Floating dashboard card (top right) */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-blue-900/15 p-4 border border-blue-100 w-52 animate-float hidden sm:block">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] font-bold text-slate-400 tracking-wider">CAMPAIGN</p>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500">
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
                  <span className="text-[11px] text-slate-400">목표 ROAS</span>
                  <span className="text-sm font-extrabold text-accent-blue">2~4x 달성</span>
                </div>
              </div>

              {/* PDF page 28: 68% 도넛 차트 카드 */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block animate-float-slow bg-white rounded-2xl shadow-2xl shadow-blue-900/15 p-4 border border-blue-100">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="59.83 87.96" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-2xl font-black text-deep-navy leading-none">68%</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">전환율</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="flex items-center gap-1 text-[10px] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />검색
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />SNS
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />디스플레이
                  </span>
                </div>
              </div>

              {/* Floating stat card (bottom right) */}
              <div className="absolute -bottom-4 right-8 bg-white rounded-xl shadow-xl shadow-blue-900/15 p-3 border border-blue-100 hidden sm:block" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <IconCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">전환 달성</p>
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
        <Image src="/images/stock/developer-desk.jpg" alt="" fill className="object-cover opacity-25" aria-hidden="true" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e]/94 via-[#0a1428]/91 to-[#060e1e]/96" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-accent-blue/15 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left: text + platforms + stats */}
            <div className="mb-10 lg:mb-0">
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">TEAM</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
                전략을 세우고, 빠르게 실행하고,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">데이터로 보완</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                하는 팀
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-400 mb-6 leading-relaxed max-w-md">
                회의/기획/모니터링/리포트 중심으로 움직이는 실행 조직입니다.
              </p>

              {/* Platform 6-grid — 흰 카드 + 라벨 (PDF 변경시안 매칭) */}
              <div className="grid grid-cols-6 gap-2 sm:gap-3 mb-6">
                {[
                  { name: "naver", label: "네이버", brand: "bg-[#03C75A]" },
                  { name: "kakaotalk", label: "카카오", brand: "bg-[#FEE500]" },
                  { name: "meta", label: "메타", brand: "bg-[#0866FF]" },
                  { name: "youtube", label: "유튜브", brand: "bg-[#FF0000]" },
                  { name: "google", label: "구글", brand: "bg-white" },
                  { name: "instagram", label: "인스타그램", brand: "bg-linear-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
                ].map((p, i) => (
                  <div key={p.name} className="relative group" style={{ animation: `float ${4 + (i % 3)}s ease-in-out infinite ${i * 0.3}s` }}>
                    <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-black/40 blur-sm" aria-hidden="true" />
                    <div className="relative bg-white rounded-xl flex flex-col items-center gap-1.5 p-2 sm:p-2.5 shadow-lg overflow-hidden">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${p.brand} flex items-center justify-center`}>
                        <img src={`/images/logos/${p.name}.svg`} alt={p.label} className={`h-5 w-auto ${p.name === "naver" || p.name === "meta" || p.name === "youtube" || p.name === "instagram" ? "brightness-0 invert" : ""}`} />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-deep-navy">{p.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 단일 가로 stat 카드 (PDF 변경시안 매칭) */}
              <div className="relative">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/20 blur-sm" aria-hidden="true" />
                <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-5 grid grid-cols-3 gap-3 divide-x divide-slate-100">
                  {[
                    { value: "6+", label: "운영 플랫폼", sub: "주요 매체 운영 경험", Icon: () => <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87m-4-12a4 4 0 110 7.75M9 20H4v-2a4 4 0 014-4h.5a4 4 0 014 4v2zm0-12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
                    { value: "100+", label: "누적 캠페인", sub: "다양한 업종의 성공 경험", Icon: () => <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 11l18-5v12L3 14v-3z M11.6 16.8a3 3 0 11-5.8-1.6" /></svg> },
                    { value: "4.8", label: "평균 ROAS", sub: "업종 평균 대비 높은 성과", Icon: () => <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" /></svg> },
                  ].map((s, i) => (
                    <div key={i} className={`flex items-center gap-3 ${i === 0 ? "" : "pl-3"}`}>
                      <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                        <s.Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="text-lg sm:text-xl font-black text-deep-navy leading-none">{s.value}</p>
                        <p className="text-[11px] sm:text-[12px] text-deep-navy font-bold mt-1">{s.label}</p>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 leading-tight">{s.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: floating performance card */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent-blue/15 rounded-3xl blur-3xl" />

              {/* Main image (data-driven) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent-blue/20 ring-1 ring-white/10">
                <Image src="/images/0515/team-presentation-2.png" alt="" width={800} height={800} className="w-full h-auto" />
                <div className="absolute inset-0 bg-linear-to-t from-deep-navy/60 via-transparent to-transparent" />
              </div>

              {/* PERFORMANCE floating card (top right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-accent-blue/15 p-3 border border-white animate-float w-44">
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">PERFORMANCE</p>
                <p className="text-[12px] font-extrabold text-deep-navy">월간 광고 성과</p>
                <div className="flex items-end gap-0.5 h-7 mt-2">
                  {[35, 50, 40, 60, 55, 75, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-linear-to-t from-accent-blue to-sky-400" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex items-baseline justify-between mt-1.5">
                  <span className="text-[11px] text-slate-400">전년 대비</span>
                  <span className="text-xs font-extrabold text-emerald-600">+24.5% ↑</span>
                </div>
              </div>

              {/* 데이터 기반 의사결정 floating card (bottom right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-accent-blue/15 p-3 border border-white w-52" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-extrabold text-deep-navy">데이터 기반 의사결정</p>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">실시간 모니터링과 빠른 개선점도</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Case summary (3D isometric) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        {/* 희미하게 스며드는 사진 — 좌측에서 페이드 */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/stock/team-discussion.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.11] grayscale"
            style={{
              maskImage: "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.28) 32%, transparent 56%)",
              WebkitMaskImage: "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.28) 32%, transparent 56%)",
            }}
          />
        </div>
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
          <p className="text-center text-[13px] sm:text-[14px] text-slate-500 max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12 -mt-6">
            여울디앤씨는 업종의 특성과 목표에 맞는 최적의 전략을 설계하고 실행합니다.
          </p>

          {/* 4 cards — 이미지 + 채널 그리드 + CASE 화살표 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch mb-6">
            {caseSummary.filter(c => !c.isAll).map((c, i) => (
              <div
                key={c.industry}
                className="group relative h-full"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
              >
                <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-accent-blue/15 blur-[2px]" />

                <div className="relative h-full bg-white rounded-2xl border border-slate-100 shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden flex flex-col">
                  {/* 이미지 */}
                  <div className="relative aspect-[16/9]">
                    {c.img && <Image src={c.img} alt={c.industry} fill className="object-cover" />}
                    <div className="absolute inset-0 bg-linear-to-t from-deep-navy/30 via-transparent to-transparent" />
                    {/* 업종 뱃지 */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur shadow-md">
                      <span className="text-[10px] font-extrabold text-accent-blue">{c.badge}</span>
                      <span className="text-[11px] font-extrabold text-deep-navy">{c.industry}</span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-4 sm:p-5">
                    <h3 className="text-[15px] sm:text-base font-extrabold text-deep-navy mb-1.5 leading-tight">{c.title}</h3>
                    <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed mb-4 flex-1">{c.desc}</p>

                    {/* 채널 아이콘 4개 */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {c.channels?.map((ch) => (
                        <div key={ch.label} className="flex flex-col items-center gap-1">
                          <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${ch.color} flex items-center justify-center shadow-sm`}>
                            <img src={`/images/logos/${ch.name}.svg`} alt="" className={`h-3.5 w-auto ${ch.name === "kakaotalk" ? "" : "brightness-0 invert"}`} />
                          </div>
                          <span className="text-[9px] text-slate-500 font-bold leading-tight text-center">{ch.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* CASE NN → */}
                    <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-extrabold text-accent-blue tracking-widest">CASE {c.badge}</span>
                      <svg className="w-4 h-4 text-accent-blue group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 04 그 외 모든 업종 — 가로형 */}
          {(() => {
            const c = caseSummary.find(c => c.isAll);
            if (!c) return null;
            return (
              <div className="relative">
                <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-accent-blue/15 blur-[2px]" />
                <div className="relative bg-white rounded-2xl border border-slate-100 shadow-xl shadow-deep-navy/5 p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
                  {/* Left: badge + 제목 + 설명 */}
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                      <span className="text-[10px] font-extrabold text-accent-blue">{c.badge}</span>
                      <span className="text-[11px] font-extrabold text-deep-navy">{c.industry}</span>
                    </div>
                    <h3 className="text-[16px] sm:text-lg font-extrabold text-deep-navy mb-2 leading-tight">{c.title}</h3>
                    <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">{c.desc}</p>
                  </div>

                  {/* Middle: 채널 로고 */}
                  <div className="lg:col-span-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                    {[
                      { name: "naver", label: "네이버" },
                      { name: "google", label: "구글" },
                      { name: "kakaotalk", label: "LMS" },
                      { name: "meta", label: "홈페이지제작" },
                      { name: "instagram", label: "메타" },
                    ].map((ch) => (
                      <div key={ch.label} className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                          <img src={`/images/logos/${ch.name}.svg`} alt="" className="h-4 w-auto" />
                        </div>
                        <span className="text-[9px] text-slate-500 font-bold">{ch.label}</span>
                      </div>
                    ))}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                        <span className="text-base font-extrabold">···</span>
                      </div>
                      <span className="text-[9px] text-slate-500 font-bold">기타 채널</span>
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-3 bg-linear-to-br from-accent-blue/8 to-blue-50 rounded-xl p-4 border border-accent-blue/15">
                    <p className="text-[12px] text-slate-500 leading-relaxed mb-2">
                      상담을 통해 업종과 목표에 맞는<br />
                      <span className="font-bold text-deep-navy">최적의 전략을 제안</span>드립니다.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-accent-blue text-white text-[12px] font-extrabold rounded-lg hover:bg-blue-700 transition-colors">
                      상담 문의하기
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 6. Approach timeline (our way of working) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        {/* 희미하게 스며드는 사진 — 우하단 모서리에서 페이드 */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/stock/laptop-work.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.1] grayscale"
            style={{
              maskImage: "radial-gradient(125% 125% at 96% 100%, rgba(0,0,0,0.9), rgba(0,0,0,0.28) 36%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(125% 125% at 96% 100%, rgba(0,0,0,0.9), rgba(0,0,0,0.28) 36%, transparent 60%)",
            }}
          />
        </div>
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
                        <p className="text-[11px] font-extrabold text-accent-blue tracking-[0.2em]">
                          {p.label}
                        </p>
                        <p className="text-3xl font-black text-accent-blue leading-none tracking-tight">
                          {p.step}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-deep-navy mb-2 leading-tight">{p.title}</h3>

                    {/* PDF page 31: 각 카드에 사진 추가 */}
                    <div className="relative mb-3 rounded-xl overflow-hidden aspect-video bg-slate-100">
                      <Image
                        src={`/images/stock/${["consultation", "strategy-board", "monitor-data"][i]}.jpg`}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-deep-navy/20 to-transparent" />
                    </div>

                    <p className="text-[13px] sm:text-[14px] text-slate-500 leading-relaxed mb-4">{p.desc}</p>

                    {/* PDF page 31: 미니 아이콘 3개 */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                      {p.tags.map((tag, idx) => {
                        // Different icons per step
                        const icons = i === 0
                          ? [
                              <svg key={0} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                              <svg key={1} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" strokeLinecap="round" /><circle cx="12" cy="12" r="5" strokeLinecap="round" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
                              <svg key={2} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" /></svg>,
                            ]
                          : i === 1
                          ? [
                              <svg key={0} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766" /></svg>,
                              <svg key={1} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
                              <svg key={2} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                            ]
                          : [
                              <svg key={0} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" /></svg>,
                              <svg key={1} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                              <svg key={2} className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                            ];
                        return (
                          <div key={tag} className="text-center">
                            <div className="w-9 h-9 mx-auto rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-1">
                              {icons[idx]}
                            </div>
                            <p className="text-[10px] text-slate-500 font-bold leading-tight">{tag}</p>
                          </div>
                        );
                      })}
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
                  <p className="text-[15px] sm:text-base font-extrabold text-deep-navy leading-tight">결과로 증명합니다</p>
                  <p className="text-[12px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">작은 개선이 쌓여 성과가 됩니다. 데이터가 말해주는 결과로 신뢰를 만듭니다.</p>
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
