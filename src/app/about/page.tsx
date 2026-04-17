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
      <section className="relative overflow-hidden">
        <Image src="/images/stock/team-collab.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-deep-navy/88" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/8 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">회사소개</h1>
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl">
            유입이 끝이 아니라,<br className="sm:hidden" />
            {" "}상담 전환까지 설계합니다
          </p>
          <p className="text-[13px] sm:text-sm text-slate-400/80 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            여울디앤씨는 업종에 맞는 채널 선택부터<br className="sm:hidden" />
            {" "}소재 제작, 운영, 보완까지<br className="hidden sm:inline lg:hidden" />
            {" "}연결하는 온라인 광고 실행 파트너입니다.
          </p>
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

      {/* 2. Core values */}
      <section className="py-16 sm:py-20 lg:py-28 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">Core Value</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              보여주기식 운영보다,<br />
              실제 반응이 남는 광고를 지향합니다
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 card-3d gradient-border">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-linear-to-br ${v.color} flex items-center justify-center mb-4 sm:mb-5 shadow-lg`}>
                  <v.Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[15px] sm:text-base font-bold text-deep-navy mb-1.5 sm:mb-2">{v.title}</h3>
                <p className="text-[12px] sm:text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strengths + image */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0">
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Strengths</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
                채널만 운영하는 것이 아니라,<br />
                업종에 맞는 구조까지<br className="sm:hidden" />
                {" "}함께 설계합니다
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-500 mb-6 sm:mb-8 leading-relaxed">
                분양/병원/지역 자영업처럼<br className="sm:hidden" />
                {" "}상담과 방문 전환이 중요한 업종은<br className="hidden sm:inline lg:hidden" />
                {" "}매체 조합과 후속 운영 방식이 중요합니다.
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                {strengths.map((text) => (
                  <div key={text} className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-slate-100 hover:border-accent-blue/15 transition-all duration-300">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-blue flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                    <p className="text-slate-700 text-[13px] sm:text-sm font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/stock/strategy-board.jpg" alt="전략 회의" width={800} height={533} className="w-full h-auto" />
              </div>
              {/* Floating pie chart */}
              <div className="absolute -bottom-8 -left-8 hidden lg:block animate-float-slow">
                <IllustPieChart className="w-40 h-40 drop-shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Work environment */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <Image src="/images/stock/work-desk.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-deep-navy/88" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4">
            전략을 세우고, 빠르게 실행하고,<br />
            데이터로 보완하는 팀
          </h2>
          <p className="text-[13px] sm:text-sm text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
            회의/기획/모니터링/리포트 중심으로<br className="sm:hidden" />
            {" "}움직이는 실행 조직입니다.
          </p>
          {/* Platform logos */}
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            {["naver", "kakaotalk", "meta", "youtube", "google", "instagram"].map((name) => (
              <div key={name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <img src={`/images/logos/${name}.svg`} alt={name} className="h-3.5 sm:h-4 w-auto brightness-0 invert opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case summary */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">Cases</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              업종별 목적에 따라<br />
              필요한 채널과 운영 방식은 달라집니다
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {caseSummary.map((c) => (
              <div key={c.industry} className="p-5 sm:p-6 rounded-2xl border border-slate-100 card-3d gradient-border">
                <div className="flex items-center gap-2 mb-3">
                  {c.logos.map((logo) => (
                    <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-4 w-auto" />
                  ))}
                </div>
                <p className="text-xs font-bold text-accent-blue tracking-wider uppercase mb-1.5 sm:mb-2">{c.industry}</p>
                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
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
