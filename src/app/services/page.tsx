import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";
import { IconCheck, IconArrowRight } from "@/components/Icons";

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
            광고상품 / 서비스
          </h1>
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl">
            필요한 채널만 골라,<br className="sm:hidden" />
            {" "}업종에 맞게 설계합니다
          </p>
          <p className="text-[13px] sm:text-sm text-slate-400/80 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            플랫폼 기능 설명이 아니라,<br className="sm:hidden" />
            {" "}무엇을 맡길 수 있는지 명확히 보여드립니다.
          </p>
          {/* Platform logos bar */}
          <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
            {["naver", "kakaotalk", "meta", "instagram", "youtube", "google", "facebook"].map((n) => (
              <img key={n} src={`/images/logos/${n}.svg`} alt={n} className="h-3.5 sm:h-4 w-auto brightness-0 invert opacity-40" />
            ))}
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

          {/* Isometric hex grid */}
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
                  {/* Shadow layer */}
                  <div className="absolute inset-0 translate-y-2 rounded-[24%] bg-black/15 blur-md" />
                  {/* Back gradient block (isometric depth) */}
                  <div className={`absolute inset-0 translate-x-1 translate-y-1 rounded-[24%] bg-linear-to-br ${item.color} opacity-70`} />
                  {/* Front card */}
                  <div className="relative w-full h-full rounded-[24%] bg-white shadow-xl shadow-blue-900/10 border border-white flex items-center justify-center p-4 group-hover:-translate-y-1 transition-transform duration-300">
                    <img src={`/images/logos/${item.name}.svg`} alt={item.name} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ));
            })()}

            {/* Center logo/mark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-2xl shadow-accent-blue/25 border border-blue-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[9px] sm:text-[10px] font-extrabold text-accent-blue tracking-widest">여울</p>
                <p className="text-sm sm:text-base font-extrabold text-deep-navy">D&C</p>
                <div className="mt-1 w-6 h-0.5 bg-accent-blue mx-auto" />
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-linear-to-br from-green-50 to-emerald-50/40 -z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

                {/* Phone back */}
                <div
                  className="absolute top-[8%] right-[4%] w-36 sm:w-44 aspect-[9/19] z-10 animate-float-slow"
                  style={{ transform: "rotate(15deg)" }}
                >
                  <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-green-900/25 p-1.5 border border-slate-700">
                    <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-white">
                      <Image src="/images/stock/naver-search.jpg" alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Phone middle */}
                <div
                  className="absolute top-[18%] left-1/2 -translate-x-1/2 w-40 sm:w-48 aspect-[9/19] z-20"
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
                  className="absolute bottom-[6%] left-[2%] w-36 sm:w-44 aspect-[9/19] z-30"
                  style={{ transform: "rotate(-12deg)", animation: "float 5s ease-in-out infinite 2s" }}
                >
                  <div className="relative w-full h-full rounded-[24px] bg-slate-900 shadow-2xl shadow-green-900/25 p-1.5 border border-slate-700">
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
                  className="absolute top-1/2 left-1/2 w-48 sm:w-56 aspect-[9/19] z-20"
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

      {/* ━━━━ 카카오 ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative mb-10 sm:mb-12 lg:mb-0">
              <div className="bg-linear-to-br from-yellow-50 to-amber-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <Logo name="kakaotalk" className="h-6 sm:h-7 w-auto" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-bold text-amber-700">상담 유입형</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-deep-navy mb-3">
                  카카오톡 기반<br />상담 유입과 재접촉
                </h3>
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/kakao-chat.jpg" alt="카카오 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-3 sm:mb-4">카카오 광고</h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mb-5 sm:mb-6 leading-relaxed">
                빠른 커뮤니케이션이 중요한 업종에서<br className="sm:hidden" />
                {" "}카카오톡 채널을 활용해<br className="hidden sm:inline lg:hidden" />
                {" "}상담 유입부터 기존 고객 재접촉까지 운영합니다.
              </p>
              <div className="bg-slate-50 rounded-xl p-3.5 sm:p-4 mb-5 sm:mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5"><Tag>키워드 광고</Tag><Tag>디스플레이 광고</Tag><Tag>카카오톡 채널 메시지</Tag><Tag>비즈메시지</Tag></div>
              </div>
              <ul className="space-y-2 text-amber-700 mb-5 sm:mb-6">
                <Bullet color="text-amber-700">상담 유입이 중요한 업종에 최적화</Bullet>
                <Bullet color="text-amber-700">기존 고객 재접촉 및 후속 메시지 발송</Bullet>
                <Bullet color="text-amber-700">카카오톡 채널 연동으로 빠른 커뮤니케이션</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-amber-600 font-semibold hover:gap-3 transition-all">
                카카오 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 유튜브 ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-3 sm:mb-4">유튜브 광고</h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mb-5 sm:mb-6 leading-relaxed">
                영상 중심으로 브랜드를 알리고<br className="sm:hidden" />
                {" "}신뢰를 쌓는 광고입니다.<br className="hidden sm:inline lg:hidden" />
                {" "}인스트림, 범퍼, Shorts 등 다양한 형태로 운영합니다.
              </p>
              <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-100 mb-5 sm:mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5"><Tag>인스트림 광고</Tag><Tag>범퍼 광고</Tag><Tag>인피드 광고</Tag><Tag>Shorts 광고</Tag></div>
              </div>
              <ul className="space-y-2 text-red-700 mb-5 sm:mb-6">
                <Bullet color="text-red-700">브랜드 인지도를 높이고 싶은 경우</Bullet>
                <Bullet color="text-red-700">영상 콘텐츠 활용이 가능한 업종</Bullet>
                <Bullet color="text-red-700">신뢰감 형성이 중요한 업종에 효과적</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-red-600 font-semibold hover:gap-3 transition-all">
                유튜브 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="relative mb-10 sm:mb-12 lg:mb-0 order-1 lg:order-2">
              <div className="bg-linear-to-br from-red-50 to-rose-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <Logo name="youtube" className="h-4 sm:h-5 w-auto" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-[10px] font-bold text-red-700">브랜드 인지도</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-deep-navy mb-3">
                  영상으로 전하는<br />브랜드 신뢰
                </h3>
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/youtube-video.jpg" alt="유튜브 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 구글 ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative mb-10 sm:mb-12 lg:mb-0">
              <div className="bg-linear-to-br from-sky-50 to-cyan-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <Logo name="google" className="h-4 sm:h-5 w-auto" />
                  <Logo name="google-ads" className="h-4 sm:h-5 w-auto" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="text-[10px] font-bold text-sky-700">확장형 광고</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-deep-navy mb-3">
                  검색+디스플레이+<br />리타겟팅 확장
                </h3>
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/google-analytics.jpg" alt="구글 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-3 sm:mb-4">구글 광고</h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mb-5 sm:mb-6 leading-relaxed">
                다양한 지면에서 광고를 확장하고,<br className="sm:hidden" />
                {" "}리타겟팅과 자동 최적화 기반으로<br className="hidden sm:inline lg:hidden" />
                {" "}효율적으로 운영합니다.
              </p>
              <div className="bg-slate-50 rounded-xl p-3.5 sm:p-4 mb-5 sm:mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5"><Tag>검색 광고</Tag><Tag>디스플레이 광고</Tag><Tag>디맨드젠</Tag><Tag>실적 최대화 캠페인</Tag></div>
              </div>
              <ul className="space-y-2 text-sky-700 mb-5 sm:mb-6">
                <Bullet color="text-sky-700">다양한 지면에서 광고 확장이 필요한 경우</Bullet>
                <Bullet color="text-sky-700">이탈 고객 리타겟팅이 필요한 경우</Bullet>
                <Bullet color="text-sky-700">자동 최적화 기반 효율적 운영</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-sky-600 font-semibold hover:gap-3 transition-all">
                구글 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 문자 + 당근 + 부동산 ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">More</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              그 외 운영 가능한<br className="sm:hidden" />
              {" "}광고 채널
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* 문자 */}
            <div className="bg-white rounded-2xl overflow-hidden card-3d gradient-border">
              <div className="relative aspect-video">
                <Image src="/images/stock/sms-marketing.jpg" alt="문자 마케팅" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-violet-900/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span className="text-[10px] font-bold text-white">재접촉 마케팅</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">문자 마케팅</h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[11px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">확보된 DB를 대상으로 직접 전달하는 SMS/LMS/MMS 광고</p>
                <ul className="space-y-2 text-violet-700">
                  <Bullet color="text-violet-700">재문의 유도 / 방문·예약 안내</Bullet>
                  <Bullet color="text-violet-700">기존 고객 재접촉에 효과적</Bullet>
                </ul>
              </div>
            </div>

            {/* 당근 */}
            <div className="bg-white rounded-2xl overflow-hidden card-3d gradient-border">
              <div className="relative aspect-video">
                <Image src="/images/stock/local-store.jpg" alt="당근 광고" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-orange-900/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <Logo name="danggeun" className="h-3.5 sm:h-4 w-auto brightness-0 invert" />
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-[10px] font-bold text-white">지역 특화</span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">당근/지역 광고</h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[11px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">지역 기반 피드/검색/카탈로그 광고로 생활권 고객을 확보</p>
                <ul className="space-y-2 text-orange-700">
                  <Bullet color="text-orange-700">지역 상권 업종에 최적화</Bullet>
                  <Bullet color="text-orange-700">생활권 고객이 중요한 서비스</Bullet>
                </ul>
              </div>
            </div>

            {/* 부동산 */}
            <div className="bg-white rounded-2xl overflow-hidden card-3d gradient-border">
              <div className="relative aspect-video">
                <Image src="/images/stock/real-estate.jpg" alt="부동산 광고" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="text-[10px] font-bold text-white">업종 특화</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">부동산 특화 광고</h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[11px] sm:text-xs text-slate-500 mb-3 sm:mb-4 leading-relaxed">호갱노노, 직방, 다방, 네모 등 부동산 전문 플랫폼 광고</p>
                <ul className="space-y-2 text-teal-700">
                  <Bullet color="text-teal-700">분양 / 임대 / 상가</Bullet>
                  <Bullet color="text-teal-700">지역 부동산 마케팅</Bullet>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 업종별 맞춤 + 운영방식 요약 ━━━━ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* 업종별 */}
            <div className="mb-12 lg:mb-0">
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Industry</p>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-deep-navy mb-5 sm:mb-6">
                같은 광고라도, 업종이 다르면<br />
                설계가 달라집니다
              </h2>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  { industry: "분양", desc: "DB 유입과 후속 문자 구조", logos: ["meta"] },
                  { industry: "병원", desc: "예약 문의와 신뢰 형성", logos: ["naver", "instagram"] },
                  { industry: "교육", desc: "수강 상담, 카카오 채널 연결", logos: ["kakaotalk"] },
                  { industry: "지역 자영업", desc: "생활권 고객 유입", logos: ["danggeun"] },
                  { industry: "상담형 서비스", desc: "문의 전환, 리드폼 활용", logos: ["google"] },
                ].map((item) => (
                  <div key={item.industry} className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-accent-blue/15 transition-all duration-300">
                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.logos.map((l) => <img key={l} src={`/images/logos/${l}.svg`} alt={l} className="h-3.5 sm:h-4 w-auto" />)}
                    </div>
                    <div>
                      <p className="text-[12px] sm:text-xs font-bold text-deep-navy">{item.industry}</p>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 운영방식 */}
            <div>
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Process</p>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-deep-navy mb-5 sm:mb-6">
                분석부터 제작, 운영,<br className="sm:hidden" />
                {" "}보완까지 한 번에
              </h2>
              <div className="relative rounded-2xl overflow-hidden mb-5 sm:mb-6">
                <Image src="/images/stock/monitor-data.jpg" alt="데이터 모니터링" width={800} height={500} className="w-full h-auto" />
              </div>
              <div className="flex flex-wrap gap-2">
                {["전략 수립", "소재 제작", "채널 세팅", "운영 및 최적화", "결과 체크"].map((step, i) => (
                  <div key={step} className="flex items-center gap-1.5">
                    <span className="px-2.5 sm:px-3 py-1.5 bg-accent-blue/8 text-accent-blue text-[11px] sm:text-xs font-semibold rounded-lg">{step}</span>
                    {i < 4 && <span className="text-slate-300 text-xs">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
