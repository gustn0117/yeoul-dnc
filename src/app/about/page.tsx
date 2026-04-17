import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IllustPieChart } from "@/components/Illustrations";
import { IconCheck, IconTarget, IconBarChart, IconLayers } from "@/components/Icons";

export const metadata: Metadata = {
  title: "회사소개 | 여울디앤씨",
  description: "여울디앤씨는 유입부터 상담 전환까지 설계하는 온라인 광고 실행사입니다.",
};

const coreValues = [
  { title: "데이터 중심 운영", desc: "화려한 제안보다 실제 반응과 문의로 이어지는 방향을 우선합니다.", Icon: IconBarChart, color: "from-blue-500 to-blue-600" },
  { title: "실행력 있는 대응", desc: "빠른 실행과 수정으로 광고 효율을 지속적으로 개선합니다.", Icon: IconTarget, color: "from-indigo-500 to-indigo-600" },
  { title: "정직한 성과 설계", desc: "과장된 숫자 대신, 업종에 맞는 현실적인 운영 방식을 제안합니다.", Icon: IconLayers, color: "from-violet-500 to-violet-600" },
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
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                유입이 끝이 아니라,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">상담 전환</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                까지 설계합니다
              </h1>
              <p className="text-[13px] sm:text-base text-slate-300/90 max-w-xl leading-relaxed mb-8">
                여울디앤씨는 업종에 맞는 채널 선택부터 소재 제작, 운영, 보완까지<br className="hidden sm:inline lg:hidden" />
                {" "}연결하는 <span className="font-semibold text-white">온라인 광고 실행 파트너</span>입니다.
              </p>
              {/* Quick highlight stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md">
                {[
                  { value: "6+", label: "운영 채널" },
                  { value: "100+", label: "캠페인" },
                  { value: "4.8", label: "평균 ROAS" },
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

            {/* Isometric brand mark */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />
                {/* Orbiting rings */}
                <div className="absolute inset-0 rounded-full border border-accent-blue/20" />
                <div className="absolute inset-4 rounded-full border border-accent-blue/15" />
                <div className="absolute inset-8 rounded-full border border-accent-blue/10" />
                {/* Center mark */}
                <div className="absolute inset-12 rounded-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <p className="text-[10px] font-extrabold text-accent-blue tracking-[0.3em]">여울</p>
                    <p className="text-2xl font-extrabold text-white">D&C</p>
                    <div className="mt-1.5 w-8 h-0.5 bg-accent-blue mx-auto" />
                  </div>
                </div>
                {/* Orbital dots */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-blue shadow-lg shadow-accent-blue/50" style={{ animation: "float 4s ease-in-out infinite" }} />
                <div className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-lg" style={{ animation: "float 5s ease-in-out infinite 1s" }} />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-lg" style={{ animation: "float 4.5s ease-in-out infinite 2s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Brand message + logo */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div className="flex justify-center mb-10 sm:mb-12 lg:mb-0">
              <Image src="/images/logo-vertical-color.png" alt="여울디앤씨 로고" width={1000} height={1250} className="w-36 sm:w-44 lg:w-56 h-auto" />
            </div>
            <div>
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Brand</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 sm:mb-5">
                광고는 집행보다<br />구조가 중요합니다
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mb-3 leading-relaxed">
                여울디앤씨는 업종에 맞는 채널 선택부터<br className="sm:hidden" />
                {" "}소재 제작, 운영, 보완까지<br className="hidden sm:inline lg:hidden" />
                {" "}연결하는 온라인 광고 실행 파트너입니다.
              </p>
              <p className="text-[13px] sm:text-sm text-slate-500">결과를 만드는 광고는 시작부터 다릅니다.</p>
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
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-violet-200/25 rounded-full blur-3xl" />

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
                {/* 3D depth layers */}
                <div className={`absolute inset-0 translate-x-1.5 translate-y-2.5 rounded-2xl bg-linear-to-br ${v.color} opacity-50 blur-[3px]`} />
                <div className={`absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-linear-to-br ${v.color} opacity-25`} />

                {/* Front card */}
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-60">
                  {/* Huge index */}
                  <div className={`absolute -top-4 -right-2 text-[7rem] sm:text-[8rem] font-black bg-linear-to-br ${v.color} bg-clip-text text-transparent opacity-[0.08] leading-none select-none`}>
                    {i + 1}
                  </div>
                  {/* Corner blob */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-linear-to-br ${v.color} opacity-10 blur-2xl`} />

                  <div className="relative">
                    {/* Isometric icon */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6">
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-2xl bg-linear-to-br ${v.color} opacity-60 blur-[1px]`} />
                      <div className={`relative w-full h-full rounded-2xl bg-linear-to-br ${v.color} flex items-center justify-center shadow-lg`}>
                        <v.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-[15px] sm:text-base font-extrabold text-deep-navy mb-2 sm:mb-2.5">{v.title}</h3>
                    <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">{v.desc}</p>

                    {/* Footer tag */}
                    <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100">
                      <span className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold bg-linear-to-br ${v.color} bg-clip-text text-transparent`}>
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
                  { text: "업종별 타겟 이해", color: "from-blue-500 to-indigo-600", num: "01" },
                  { text: "소재 제작과 운영 통합", color: "from-violet-500 to-purple-600", num: "02" },
                  { text: "문의 이후 재접촉까지 고려한 설계", color: "from-emerald-500 to-teal-600", num: "03" },
                ].map((item, i) => (
                  <div
                    key={item.text}
                    className="group relative"
                    style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
                  >
                    <div className={`absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-linear-to-br ${item.color} opacity-20`} />
                    <div className="relative flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                      {/* Big number */}
                      <div className={`text-3xl sm:text-4xl font-black bg-linear-to-br ${item.color} bg-clip-text text-transparent leading-none tracking-tight shrink-0`}>
                        {item.num}
                      </div>
                      {/* Divider */}
                      <div className={`w-0.5 h-10 bg-linear-to-b ${item.color} rounded-full shrink-0`} />
                      <div className="flex-1">
                        <p className="text-[13px] sm:text-sm text-deep-navy font-bold">{item.text}</p>
                      </div>
                      {/* Check badge */}
                      <div className={`w-9 h-9 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-md shrink-0`}>
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
                  <span className="text-[10px] text-slate-400">ROAS</span>
                  <span className="text-sm font-extrabold text-accent-blue">4.8배 ↑</span>
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
                  <img src={`/images/logos/${p.name}.svg`} alt={p.name} className="h-6 sm:h-7 w-auto brightness-0 invert" />
                </div>
              </div>
            ))}
          </div>

          {/* Team stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto pt-8 border-t border-white/10">
            {[
              { value: "6+", label: "운영 플랫폼" },
              { value: "100+", label: "누적 캠페인" },
              { value: "4.8", label: "평균 ROAS" },
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />

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
            {caseSummary.map((c, i) => {
              const colors = ["from-blue-500 to-indigo-600", "from-emerald-500 to-teal-600", "from-orange-500 to-red-500"];
              const color = colors[i % 3];
              return (
                <div
                  key={c.industry}
                  className="group relative"
                  style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
                >
                  {/* 3D depth */}
                  <div className={`absolute inset-0 translate-x-1.5 translate-y-2 rounded-2xl bg-linear-to-br ${color} opacity-25 blur-[2px]`} />
                  <div className={`absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-linear-to-br ${color} opacity-15`} />

                  <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden min-h-48">
                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-linear-to-br ${color} opacity-10 blur-2xl`} />

                    <div className="relative">
                      <div className={`inline-flex items-center gap-1 mb-3 px-2.5 py-1 rounded-full bg-linear-to-br ${color} shadow-sm`}>
                        <span className="text-[10px] font-extrabold text-white tracking-wider uppercase">{c.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3 bg-slate-50 rounded-lg px-2.5 py-1.5 w-fit">
                        {c.logos.map((logo) => (
                          <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-4 w-auto" />
                        ))}
                      </div>
                      <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold bg-linear-to-br ${color} bg-clip-text text-transparent tracking-widest`}>
                          CASE {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <SectionCTA
        title="말보다 실행이 중요한 광고, 이제 방향부터 제대로 잡아보세요"
        description="업종에 맞는 광고 구조가 궁금하시다면 여울디앤씨가 먼저 정리해드립니다."
        buttonText="무료 상담 받기"
        variant="dark"
      />
    </>
  );
}
