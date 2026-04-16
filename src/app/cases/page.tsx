import type { Metadata } from "next";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "포트폴리오 | 여울디앤씨",
  description: "업종에 맞는 채널 조합과 운영 구조를 보여드립니다.",
};

const industries = ["분양", "병원", "지역 자영업", "교육", "상담형 서비스 업종"];

const operationExamples = [
  {
    industry: "분양 광고",
    channel: "메타 리드폼 + 문자 후속",
    desc: "DB 유입과 재접촉 구조가 중요하고, 리드폼으로 관심 고객을 확보한 뒤 문자로 후속 관리까지 연결합니다.",
    accent: "border-l-blue-500",
  },
  {
    industry: "병원 광고",
    channel: "네이버 검색형 + 메타 노출형",
    desc: "예약 문의와 신뢰 형성이 중요합니다. 검색 유입과 관심사 타겟팅을 병행하여 예약 전환을 유도합니다.",
    accent: "border-l-emerald-500",
  },
  {
    industry: "지역 자영업",
    channel: "당근 + 메타 생활권 타겟팅",
    desc: "생활권 고객 유입이 핵심입니다. 지역 타겟팅 기반의 조합형 운영으로 방문 및 전화 문의를 늘립니다.",
    accent: "border-l-orange-500",
  },
];

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">포트폴리오</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">
            실제로 이런 업종, 이런 작업을 해왔습니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3 max-w-2xl">
            &lsquo;큰 성과 자랑&rsquo;보다 &lsquo;실제로 이런 업종/이런 작업을 해왔다&rsquo;는 신뢰를 쌓는 구조로 구성했습니다.
          </p>
        </div>
      </section>

      {/* 1. 광고주 로고 및 현황 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Clients</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              다양한 업종의 광고 운영과 제작 경험을 바탕으로 방향을 제안합니다
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 운영 방식 예시 */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Operations</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              업종에 맞는 채널 조합과 운영 흐름을 이렇게 설계합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              결과 수치 대신 운영 구조를 보여주는 방식입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {operationExamples.map((c) => (
              <div key={c.industry} className={`bg-white p-7 rounded-2xl border border-slate-100 border-l-4 ${c.accent}`}>
                <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">{c.industry}</p>
                <p className="text-sm font-semibold text-deep-navy mb-3">{c.channel}</p>
                <p className="text-xs text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 작업물 중심 (placeholder - 추후 사례 쌓이면 카드 추가) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Works</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              광고는 결과도 중요하지만, 시작은 퀄리티 있는 작업물에서 달라집니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              랜딩페이지, 광고 배너, 이미지 소재, 리드 유입형 문구 등 실제 작업물을 카드형으로 정리해 보여드립니다.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["분양 광고 랜딩", "병원 광고 배너", "지역 광고 이미지", "리드 수집형 폼 화면"].map((title) => (
              <div key={title} className="aspect-4/3 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center">
                <p className="text-xs text-slate-400 text-center px-4">{title}<br /><span className="text-[10px]">(추후 이미지 추가)</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 간단 설명 */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-500">
            프로젝트는 계속 추가되며, 업종에 따라 필요한 방식은 다르게 제안됩니다.<br />
            모든 현장을 같은 방식으로 운영하지 않습니다. 여울디앤씨는 업종과 예산, 지역, 목표를 반영해 각 프로젝트별로 다른 방향을 제안합니다.
          </p>
          <p className="text-[11px] text-slate-400 mt-4">포트폴리오는 지속적으로 업데이트됩니다</p>
        </div>
      </section>

      {/* 5. CTA */}
      <SectionCTA
        title="우리 업종에는 어떤 방식이 맞을지, 먼저 방향부터 상담받아보세요"
        description="여울디앤씨가 업종에 맞는 채널 조합과 운영 구조를 정리해드립니다. 작업물과 운영 방식이 궁금하시면 편하게 문의 주세요."
        buttonText="문의하기"
        variant="dark"
      />
    </>
  );
}
