import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IconCheck, IconTarget, IconBarChart, IconLayers, IconArrowRight } from "@/components/Icons";

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
  { industry: "분양", desc: "DB 유입과 재접촉 구조가 중요하고, 메타 리드폼 + 문자 후속 구조로 운영" },
  { industry: "병원", desc: "예약 문의와 신뢰 형성 중심, 네이버 검색형 + 메타 노출형 병행" },
  { industry: "지역 자영업", desc: "생활권 타겟팅 구조가 중요, 당근 + 메타 조합형 운영" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">회사소개</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">
            유입이 끝이 아니라, 상담 전환까지 설계합니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3 max-w-2xl">
            여울디앤씨는 업종에 맞는 채널 선택부터 소재 제작, 운영, 보완까지 연결하는 온라인 광고 실행 파트너입니다.
          </p>
        </div>
      </section>

      {/* 1. 대표 메시지 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div className="flex justify-center mb-12 lg:mb-0">
              <Image src="/images/logo-vertical-color.png" alt="여울디앤씨 로고" width={1000} height={1250} className="w-44 lg:w-56 h-auto" />
            </div>
            <div>
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Brand Message</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-5">
                광고는 집행보다 구조가 중요합니다
              </h2>
              <p className="text-slate-500 text-sm mb-3">
                여울디앤씨는 업종에 맞는 채널 선택부터 소재 제작, 운영, 보완까지 연결하는 온라인 광고 실행 파트너입니다.
              </p>
              <p className="text-slate-500 text-sm">
                결과를 만드는 광고는 시작부터 다릅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 핵심가치 / 운영방식 */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Core Value</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              보여주기식 운영보다, 실제 반응이 남는 광고를 지향합니다
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-white p-7 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/8 flex items-center justify-center mb-5">
                  <v.Icon className="w-4.5 h-4.5 text-accent-blue" />
                </div>
                <h3 className="text-sm font-bold text-deep-navy mb-2">{v.title}</h3>
                <p className="text-xs text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 강점 / 경쟁력 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0">
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Strengths</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
                채널만 운영하는 것이 아니라,<br />업종에 맞는 구조까지 함께 설계합니다
              </h2>
              <p className="text-slate-500 text-sm">
                분양/병원/지역 자영업처럼 상담과 방문 전환이 중요한 업종은 매체 조합과 후속 운영 방식이 중요합니다. 여울디앤씨는 업종별 고객 흐름을 고려해 광고 구조를 제안합니다.
              </p>
            </div>
            <div className="space-y-3">
              {strengths.map((text) => (
                <div key={text} className="flex items-center gap-4 p-5 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center shrink-0">
                    <IconCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 업무환경 이미지 */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image src="/images/stock/marketing-laptop.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#070d1a]/88" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
            전략을 세우고, 빠르게 실행하고, 데이터로 보완하는 팀
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            회의/기획/모니터링/리포트 검토 중심의 전문가 이미지로 &lsquo;실행 조직&rsquo; 느낌을 전달합니다.
          </p>
        </div>
      </section>

      {/* 5. 간단 사례 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Cases</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              업종별 목적에 따라 필요한 채널과 운영 방식은 달라집니다
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseSummary.map((c) => (
              <div key={c.industry} className="p-6 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-accent-blue tracking-wider uppercase mb-3">{c.industry}</p>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <SectionCTA
        title="말보다 실행이 중요한 광고, 이제 방향부터 제대로 잡아보세요"
        description="업종에 맞는 광고 구조가 궁금하시다면 여울디앤씨가 먼저 정리해드립니다. 부담 없이 문의 남겨주시면 현실적인 운영 방향부터 안내해드립니다."
        buttonText="무료 상담 받기"
        variant="dark"
      />
    </>
  );
}
