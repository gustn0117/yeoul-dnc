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

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase">Services · 광고 상품</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                필요한 채널만 골라,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">업종에 맞게 설계</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                합니다
              </h1>
              <p className="text-[13px] sm:text-base text-slate-300/90 max-w-xl leading-relaxed mb-6">
                플랫폼 기능 설명이 아니라,<br className="sm:hidden" />
                {" "}<span className="font-semibold text-white">무엇을 맡길 수 있는지</span>를 명확히 보여드립니다.
              </p>

              {/* Platform pills */}
              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                {[
                  { name: "naver", color: "from-green-500 to-emerald-600" },
                  { name: "kakaotalk", color: "from-yellow-400 to-amber-500" },
                  { name: "meta", color: "from-blue-500 to-indigo-600" },
                  { name: "youtube", color: "from-red-500 to-rose-600" },
                  { name: "google", color: "from-sky-500 to-blue-500" },
                  { name: "instagram", color: "from-pink-500 to-rose-500" },
                  { name: "facebook", color: "from-blue-500 to-indigo-600" },
                ].map((p) => (
                  <div key={p.name} className="relative group">
                    <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-linear-to-br ${p.color} opacity-50 blur-[1px]`} />
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <img src={`/images/logos/${p.name}.svg`} alt={p.name} className={`h-4 sm:h-5 w-auto ${p.name === "kakaotalk" ? "opacity-90 group-hover:opacity-100" : "brightness-0 invert opacity-70 group-hover:opacity-100"} transition-opacity`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 6 hex isometric stack */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />
                {/* 6 floating hex cards */}
                {[
                  { name: "meta", color: "from-blue-500 to-indigo-600", pos: { top: "0%", left: "30%" } },
                  { name: "naver", color: "from-green-500 to-emerald-600", pos: { top: "10%", right: "0%" } },
                  { name: "kakaotalk", color: "from-yellow-400 to-amber-500", pos: { top: "45%", right: "5%" } },
                  { name: "youtube", color: "from-red-500 to-rose-600", pos: { bottom: "10%", right: "20%" } },
                  { name: "google", color: "from-sky-500 to-blue-500", pos: { bottom: "10%", left: "10%" } },
                  { name: "instagram", color: "from-pink-500 to-rose-500", pos: { top: "30%", left: "0%" } },
                ].map((p, i) => (
                  <div
                    key={p.name}
                    className="absolute w-16 h-16 sm:w-20 sm:h-20"
                    style={{ ...p.pos, animation: `float ${4 + (i % 3)}s ease-in-out infinite ${i * 0.4}s` }}
                  >
                    <div className={`absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-linear-to-br ${p.color} opacity-50`} />
                    <div className="relative w-full h-full rounded-2xl bg-white shadow-xl border border-white flex items-center justify-center">
                      <img src={`/images/logos/${p.name}.svg`} alt={p.name} className="w-7 h-7 sm:w-9 sm:h-9 object-contain" />
                    </div>
                  </div>
                ))}
                {/* Center mark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                  <LogoMark variant="white" className="w-12 sm:w-14" />
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
              </div>
            </div>
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

            {/* Tilted phone mockup */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <div className="relative mx-auto max-w-sm aspect-square">
                {/* Decorative blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-3xl bg-linear-to-br from-pink-100/60 to-blue-100/40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/15 rounded-full blur-3xl" />

                {/* Main tilted phone */}
                <div
                  className="absolute top-1/2 left-1/2 w-48 sm:w-56 aspect-9/19 z-20"
                  style={{ transform: "translate(-50%, -50%) rotate(-18deg)", animation: "float 6s ease-in-out infinite" }}
                >
                  <div className="relative w-full h-full rounded-[28px] bg-slate-900 shadow-2xl shadow-pink-900/25 p-1.5 border border-slate-700">
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                      <Image src="/images/stock/meta-social.jpg" alt="" fill className="object-cover" />
                      {/* Fake IG UI overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-linear-to-t from-black/60 to-transparent">
                        <div className="flex items-center gap-1 text-white text-[8px]">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Floating platform logos */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl shadow-xl shadow-pink-900/10 flex items-center justify-center z-30 animate-float-slow">
                  <img src="/images/logos/instagram.svg" alt="" className="w-7 h-7" />
                </div>
                <div className="absolute bottom-8 left-4 w-12 h-12 bg-white rounded-2xl shadow-xl shadow-blue-900/10 flex items-center justify-center z-30" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                  <img src="/images/logos/facebook.svg" alt="" className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 카카오 (tilted phone style) ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Tilted kakao phone */}
            <div className="lg:col-span-5 order-1 relative mb-12 lg:mb-0">
              <div className="relative mx-auto max-w-sm aspect-square">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-3xl bg-linear-to-br from-yellow-50 to-amber-50/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl" />

                {/* Phone */}
                <div
                  className="absolute top-1/2 left-1/2 w-48 sm:w-56 aspect-9/19 z-20"
                  style={{ transform: "translate(-50%, -50%) rotate(12deg)", animation: "float 6s ease-in-out infinite" }}
                >
                  <div className="relative w-full h-full rounded-[28px] bg-slate-900 shadow-2xl shadow-amber-900/25 p-1.5 border border-slate-700">
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                      <Image src="/images/stock/kakao-chat.jpg" alt="" fill className="object-cover" />
                      {/* Fake chat bubble overlay */}
                      <div className="absolute top-3 left-2 right-2 space-y-1.5">
                        <div className="flex justify-start">
                          <div className="bg-white/90 rounded-lg px-2 py-1 text-[7px] text-slate-700 shadow-sm">상담 문의드립니다</div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-[#FEE500] rounded-lg px-2 py-1 text-[7px] text-slate-800 shadow-sm">안녕하세요! 편하게 말씀해주세요 😊</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Kakao logo floating */}
                <div className="absolute top-6 right-4 w-14 h-14 bg-[#FEE500] rounded-2xl shadow-xl shadow-amber-900/15 flex items-center justify-center z-30 animate-float-slow" style={{ transform: "rotate(-8deg)" }}>
                  <svg className="w-8 h-8 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                  </svg>
                </div>
                <div className="absolute bottom-8 left-4 bg-white rounded-xl shadow-lg shadow-amber-900/10 px-3 py-2 border border-amber-100 z-30" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                  <p className="text-[9px] text-slate-400">상담 유입</p>
                  <p className="text-sm font-extrabold text-amber-600">실시간 ↑</p>
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
                  <span className="bg-linear-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">구글 마케팅</span>
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
                  { industry: "분양", desc: "DB 유입과 후속 문자 구조", logos: ["meta"] },
                  { industry: "병원", desc: "예약 문의와 신뢰 형성", logos: ["naver", "instagram"] },
                  { industry: "교육", desc: "수강 상담, 카카오 채널 연결", logos: ["kakaotalk"] },
                  { industry: "지역 자영업", desc: "생활권 고객 유입", logos: ["danggeun"] },
                  { industry: "상담형 서비스", desc: "문의 전환, 리드폼 활용", logos: ["google"] },
                ].map((item, i) => (
                  <div
                    key={item.industry}
                    className="group relative"
                    style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s backwards` }}
                  >
                    <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/10" />
                    <div className="relative flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white border border-white shadow-md shadow-deep-navy/5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <div className="text-2xl font-black text-accent-blue shrink-0 leading-none tracking-tight">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 bg-slate-50 rounded-lg px-2 py-1.5">
                        {item.logos.map((l) => <img key={l} src={`/images/logos/${l}.svg`} alt={l} className="h-3.5 sm:h-4 w-auto" />)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] sm:text-sm font-extrabold text-deep-navy">{item.industry}</p>
                        <p className="text-[10px] sm:text-[11px] text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

              {/* Step chips */}
              <div className="space-y-2">
                {["전략 수립", "소재 제작", "채널 세팅", "운영 및 최적화", "결과 체크"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-md shrink-0">
                      <span className="text-white text-[10px] font-black">{i + 1}</span>
                    </div>
                    <span className="text-[12px] sm:text-sm font-bold text-deep-navy">{step}</span>
                    {i < 4 && (
                      <div className="flex-1 h-px bg-linear-to-r from-slate-200 to-transparent" />
                    )}
                  </div>
                ))}
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
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">MATCHING</p>
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
                        {level === 3 ? (
                          <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-linear-to-br ${row.color} shadow-sm`}>
                            <span className="text-[9px] font-extrabold text-white">추천</span>
                          </div>
                        ) : level === 2 ? (
                          <div className="flex gap-0.5">
                            {[1, 2].map((n) => <span key={n} className={`w-1.5 h-3 rounded-full bg-linear-to-br ${row.color}`} />)}
                            <span className="w-1.5 h-3 rounded-full bg-slate-100" />
                          </div>
                        ) : level === 1 ? (
                          <div className="flex gap-0.5">
                            <span className={`w-1.5 h-3 rounded-full bg-linear-to-br ${row.color} opacity-60`} />
                            <span className="w-1.5 h-3 rounded-full bg-slate-100" />
                            <span className="w-1.5 h-3 rounded-full bg-slate-100" />
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-300 font-bold">—</span>
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

              {/* Legend */}
              <div className="p-4 sm:p-5 bg-linear-to-r from-slate-50 to-white border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-linear-to-br from-accent-blue to-blue-600 shadow-sm">
                    <span className="text-[9px] font-extrabold text-white">추천</span>
                  </div>
                  <span className="text-slate-500 font-medium">최적</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    <span className="w-1.5 h-3 rounded-full bg-accent-blue" />
                    <span className="w-1.5 h-3 rounded-full bg-accent-blue" />
                    <span className="w-1.5 h-3 rounded-full bg-slate-100" />
                  </div>
                  <span className="text-slate-500 font-medium">적합</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    <span className="w-1.5 h-3 rounded-full bg-accent-blue/60" />
                    <span className="w-1.5 h-3 rounded-full bg-slate-100" />
                    <span className="w-1.5 h-3 rounded-full bg-slate-100" />
                  </div>
                  <span className="text-slate-500 font-medium">보조</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-300 font-bold">—</span>
                  <span className="text-slate-500 font-medium">추천 안함</span>
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
        title="정해진 틀보다, 업종에 맞는 구성으로 제안드립니다"
        description="어떤 채널이 맞는지 모르셔도 괜찮습니다. 업종과 예산을 알려주시면 맞는 방향부터 정리해드립니다."
        buttonText="맞춤 상담 받기"
        variant="dark"
      />
    </>
  );
}
