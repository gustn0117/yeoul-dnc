import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IllustLaptop } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: "포트폴리오 | 여울디앤씨",
  description: "업종에 맞는 채널 조합과 운영 구조를 보여드립니다.",
};

const industries = ["분양", "병원", "교육", "지역 자영업", "상담형 서비스"];

const operations = [
  {
    industry: "분양 광고",
    channel: "메타 리드폼 + 문자 후속",
    desc: "DB 유입과 재접촉 구조가 중요하고, 리드폼으로 관심 고객을 확보한 뒤 문자로 후속 관리까지 연결합니다.",
    logos: ["meta", "kakaotalk"],
    color: "from-blue-500 to-blue-600",
    img: "/images/stock/landing-page.jpg",
  },
  {
    industry: "병원 광고",
    channel: "네이버 검색형 + 메타 노출형",
    desc: "예약 문의와 신뢰 형성이 중요합니다. 검색 유입과 관심사 타겟팅을 병행하여 예약 전환을 유도합니다.",
    logos: ["naver", "instagram"],
    color: "from-emerald-500 to-emerald-600",
    img: "/images/stock/consultation.jpg",
  },
  {
    industry: "지역 자영업",
    channel: "당근 + 메타 생활권 타겟팅",
    desc: "생활권 고객 유입이 핵심입니다. 지역 타겟팅 기반의 조합형 운영으로 방문 및 전화 문의를 늘립니다.",
    logos: ["danggeun", "facebook"],
    color: "from-orange-500 to-orange-600",
    img: "/images/stock/local-store.jpg",
  },
];

const works = [
  { title: "분양 광고 랜딩페이지", type: "Landing", img: "/images/stock/landing-page.jpg" },
  { title: "병원 검색 광고 배너", type: "Banner", img: "/images/stock/creative-design.jpg" },
  { title: "지역 매장 SNS 광고", type: "Social Ad", img: "/images/stock/mobile-ads.jpg" },
  { title: "리드 수집형 폼 디자인", type: "Lead Form", img: "/images/stock/monitor-data.jpg" },
];

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#060e1e]">
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e] via-[#0a1428]/95 to-[#060e1e]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent-blue/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase">Portfolio · 실적</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                실제 이런 업종,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">이런 작업</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                을 해왔습니다
              </h1>
              <p className="text-[13px] sm:text-base text-slate-300/90 max-w-md leading-relaxed mb-6">
                큰 성과 자랑보다,<br className="sm:hidden" />
                {" "}<span className="font-semibold text-white">실제 작업과 운영 구조</span>를 보여드립니다.
              </p>
              {/* Stat strip */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { value: "5+", label: "주요 업종" },
                  { value: "100+", label: "누적 캠페인" },
                  { value: "6개", label: "운영 채널" },
                ].map((s, i) => (
                  <div key={i} className="relative">
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-accent-blue/20" />
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-3 py-2 flex items-baseline gap-1.5">
                      <span className="text-sm font-extrabold bg-linear-to-br from-white to-accent-blue bg-clip-text text-transparent">{s.value}</span>
                      <span className="text-[10px] text-slate-400">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Isometric laptop visual */}
            <div className="hidden lg:flex lg:col-span-5 justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />
                <IllustLaptop className="relative w-80 h-auto animate-float-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. 거래 업종 (isometric pills) */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-2.5">INDUSTRIES</p>
          <p className="text-[12px] sm:text-sm text-slate-500 mb-6 sm:mb-8 leading-relaxed">
            다양한 업종의 광고 운영과 제작 경험을 바탕으로<br className="sm:hidden" />
            {" "}방향을 제안합니다
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {industries.map((ind) => (
              <div key={ind} className="relative group">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-full bg-accent-blue/15 blur-[2px]" />
                <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-white shadow-md shadow-deep-navy/5 text-[13px] sm:text-sm font-bold text-deep-navy group-hover:-translate-y-0.5 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  {ind}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 운영 방식 예시 - 3D isometric cards */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f5f9ff] to-slate-50 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">OPERATIONS</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              업종에 맞는<br className="sm:hidden" />
              {" "}<span className="relative inline-block">
                <span className="relative z-10">채널 조합과 운영 흐름</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {operations.map((op, i) => (
              <div
                key={op.industry}
                className="group relative"
                style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
              >
                {/* 3D depth */}
                <div className={`absolute inset-0 translate-x-2 translate-y-3 rounded-3xl bg-linear-to-br ${op.color} opacity-20 blur-xs`} />
                <div className={`absolute inset-0 translate-x-1 translate-y-1.5 rounded-3xl bg-linear-to-br ${op.color} opacity-10`} />

                <div className={`relative lg:grid lg:grid-cols-2 lg:gap-8 items-center bg-white rounded-2xl sm:rounded-3xl border border-white shadow-2xl shadow-deep-navy/5 overflow-hidden group-hover:-translate-y-1 transition-transform duration-300`}>
                  {/* Image */}
                  <div className={`relative aspect-video lg:aspect-auto lg:h-full min-h-60 sm:min-h-72 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image src={op.img} alt={op.industry} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-br from-deep-navy/40 via-deep-navy/10 to-transparent" />

                    {/* Industry badge - 3D */}
                    <div className="absolute top-4 left-4">
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-full bg-linear-to-r ${op.color} opacity-50 blur-[1px]`} />
                      <div className={`relative px-4 py-1.5 rounded-full bg-linear-to-r ${op.color} text-white text-[11px] sm:text-xs font-extrabold shadow-lg flex items-center gap-1.5`}>
                        <span className="w-1 h-1 rounded-full bg-white" />
                        {op.industry}
                      </div>
                    </div>

                    {/* Corner stat */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/50">
                      <p className="text-[9px] text-slate-400 font-medium">CASE</p>
                      <p className="text-sm font-extrabold text-deep-navy">#{String(i + 1).padStart(3, "0")}</p>
                    </div>

                    {/* Number overlay */}
                    <div className={`absolute top-4 right-4 text-6xl sm:text-7xl font-black bg-linear-to-br ${op.color} bg-clip-text text-transparent opacity-40 leading-none`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 sm:p-8 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    {/* Logo chips */}
                    <div className="inline-flex items-center gap-2 mb-4 bg-slate-50 rounded-full px-3 py-1.5 border border-slate-100">
                      {op.logos.map((logo) => (
                        <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-4 sm:h-5 w-auto" />
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-deep-navy mb-2 sm:mb-3 leading-tight">{op.channel}</h3>
                    <p className="text-[13px] sm:text-sm text-slate-500 mb-6 leading-relaxed">{op.desc}</p>

                    {/* KPI cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-linear-to-br ${op.color} opacity-15`} />
                        <div className="relative bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`w-1.5 h-1.5 rounded-full bg-linear-to-br ${op.color}`} />
                            <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">핵심</p>
                          </div>
                          <p className="text-[11px] sm:text-xs text-deep-navy font-extrabold leading-tight">
                            {op.industry === "분양 광고" ? "DB 유입 → 후속" : op.industry === "병원 광고" ? "검색 → 예약" : "노출 → 방문"}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-linear-to-br ${op.color} opacity-15`} />
                        <div className="relative bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`w-1.5 h-1.5 rounded-full bg-linear-to-br ${op.color}`} />
                            <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">목표</p>
                          </div>
                          <p className="text-[11px] sm:text-xs text-deep-navy font-extrabold leading-tight">
                            {op.industry === "분양 광고" ? "관심 고객 확보" : op.industry === "병원 광고" ? "상담 예약" : "매장 방문"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 작업물 갤러리 (3D isometric) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.025]" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #2563eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">WORKS</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              광고는 결과도 중요하지만,<br />
              시작은 <span className="relative inline-block">
                <span className="relative z-10">퀄리티 있는 작업물</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              에서 달라집니다
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {works.map((w, i) => (
              <div
                key={w.title}
                className="group relative"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s backwards` }}
              >
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/15 blur-[2px]" />

                <div className="relative rounded-2xl overflow-hidden border border-white bg-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-4/3 relative overflow-hidden">
                    <Image src={w.img} alt={w.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-deep-navy/80 via-deep-navy/30 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="relative inline-block px-2 py-0.5 bg-white/95 text-accent-blue text-[9px] font-extrabold rounded-md uppercase tracking-wider shadow-md">
                        {w.type}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <span className="text-[10px] font-black text-accent-blue">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-white">
                    <p className="text-[11px] sm:text-sm font-extrabold text-deep-navy leading-tight">{w.title}</p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-bold text-accent-blue tracking-widest">
                        WORK {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-slate-50 group-hover:bg-accent-blue flex items-center justify-center transition-colors">
                        <svg className="w-2.5 h-2.5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] sm:text-xs text-slate-400 mt-8 sm:mt-12 leading-relaxed">
            포트폴리오는 지속적으로 업데이트됩니다.<br className="sm:hidden" />
            {" "}업종에 따라 필요한 방식은 다르게 제안됩니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="우리 업종에는 어떤 방식이 맞을지, 먼저 방향부터 상담받아보세요"
        description="여울디앤씨가 업종에 맞는 채널 조합과 운영 구조를 정리해드립니다."
        buttonText="무료 광고 상담받기"
        variant="dark"
      />
    </>
  );
}
