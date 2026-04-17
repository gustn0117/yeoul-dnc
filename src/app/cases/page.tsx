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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Portfolio</p>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">포트폴리오</h1>
              <p className="text-base sm:text-lg text-slate-300/90 max-w-md">
                실제로 이런 업종,<br className="sm:hidden" />
                {" "}이런 작업을 해왔습니다
              </p>
              <p className="text-[13px] sm:text-sm text-slate-400/80 mt-2.5 sm:mt-3 max-w-md leading-relaxed">
                큰 성과 자랑보다,<br className="sm:hidden" />
                {" "}실제 작업과 운영 구조를 보여드립니다.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <IllustLaptop className="w-80 h-auto animate-float-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* 1. 거래 업종 */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] sm:text-xs text-slate-400 mb-4 sm:mb-5 font-medium leading-relaxed">
            다양한 업종의 광고 운영과 제작 경험을 바탕으로<br className="sm:hidden" />
            {" "}방향을 제안합니다
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[13px] sm:text-sm font-semibold text-slate-600 hover:bg-accent-blue/4 hover:border-accent-blue/20 hover:text-accent-blue transition-all duration-300 cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 운영 방식 예시 - 풍성한 카드 */}
      <section className="py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">Operations</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              업종에 맞는<br className="sm:hidden" />
              {" "}채널 조합과 운영 흐름
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {operations.map((op, i) => (
              <div key={op.industry} className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center bg-white rounded-2xl sm:rounded-3xl border border-slate-100 card-3d gradient-border overflow-hidden`}>
                {/* Image */}
                <div className={`relative aspect-video lg:aspect-auto lg:h-full min-h-56 sm:min-h-60 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={op.img} alt={op.industry} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-r from-deep-navy/30 to-transparent" />
                  {/* Industry badge */}
                  <div className={`absolute top-4 left-4 px-3 sm:px-4 py-1.5 rounded-full bg-linear-to-r ${op.color} text-white text-[11px] sm:text-xs font-bold shadow-lg`}>
                    {op.industry}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 sm:p-7 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    {op.logos.map((logo) => (
                      <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-4 sm:h-5 w-auto" />
                    ))}
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-deep-navy mb-1.5 sm:mb-2">{op.channel}</h3>
                  <p className="text-[13px] sm:text-sm text-slate-500 mb-5 sm:mb-6 leading-relaxed">{op.desc}</p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="px-3 sm:px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 flex-1 min-w-0">
                      <p className="text-[10px] text-slate-400 font-medium">핵심</p>
                      <p className="text-[11px] sm:text-xs text-deep-navy font-bold truncate">{op.industry === "분양 광고" ? "DB 유입 → 후속 관리" : op.industry === "병원 광고" ? "검색 → 예약 전환" : "지역 노출 → 방문 유도"}</p>
                    </div>
                    <div className="px-3 sm:px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 flex-1 min-w-0">
                      <p className="text-[10px] text-slate-400 font-medium">목표</p>
                      <p className="text-[11px] sm:text-xs text-deep-navy font-bold truncate">{op.industry === "분양 광고" ? "관심 고객 확보" : op.industry === "병원 광고" ? "상담 예약" : "매장 방문"}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 작업물 갤러리 */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">Works</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              광고는 결과도 중요하지만,<br />
              시작은 퀄리티 있는 작업물에서 달라집니다
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {works.map((w) => (
              <div key={w.title} className="group relative rounded-2xl overflow-hidden card-3d">
                <div className="aspect-4/3 relative">
                  <Image src={w.img} alt={w.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-deep-navy/70 via-deep-navy/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold rounded uppercase tracking-wider">{w.type}</span>
                  <p className="text-white text-[11px] sm:text-xs font-bold mt-1.5 leading-tight">{w.title}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] sm:text-xs text-slate-400 mt-6 sm:mt-8 leading-relaxed">
            포트폴리오는 지속적으로 업데이트됩니다.<br className="sm:hidden" />
            {" "}업종에 따라 필요한 방식은 다르게 제안됩니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="우리 업종에는 어떤 방식이 맞을지, 먼저 방향부터 상담받아보세요"
        description="여울디앤씨가 업종에 맞는 채널 조합과 운영 구조를 정리해드립니다."
        buttonText="문의하기"
        variant="dark"
      />
    </>
  );
}
