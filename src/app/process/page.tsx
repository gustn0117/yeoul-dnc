import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";
import { IconClipboard, IconCompass, IconImage, IconSettings, IconBarChart, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "진행절차 | 여울디앤씨",
  description: "맡기면 어떻게 흘러가는지, 짧고 확실하게 안내드립니다.",
};

const steps = [
  {
    step: "STEP 01",
    title: "상담 / 문의",
    main: "먼저 업종과 예산, 목표부터 간단하게 확인합니다",
    detail: "어떤 광고가 필요한지 바로 판단하기보다, 현재 상황과 원하는 방향을 먼저 파악한 뒤 상담을 진행합니다.",
    tags: ["업종", "예산", "목표 확인"],
    Icon: IconClipboard,
  },
  {
    step: "STEP 02",
    title: "기획 / 전략",
    main: "업종에 맞는 채널과 광고 방향을 정리합니다",
    detail: "무조건 많은 채널을 제안하지 않고, 목표와 예산에 맞는 현실적인 운영 방식을 먼저 설계합니다.",
    tags: ["타겟 설정", "채널 선별", "운영 구조 설계"],
    Icon: IconCompass,
  },
  {
    step: "STEP 03",
    title: "제작 / 세팅",
    main: "광고 소재와 세팅을 빠르게 준비합니다",
    detail: "이미지, 영상, 문구, 랜딩 또는 폼 구성을 정리하고 실제 송출을 위한 세팅까지 진행합니다.",
    tags: ["소재 제작", "문구 정리", "광고 세팅"],
    Icon: IconImage,
  },
  {
    step: "STEP 04",
    title: "운영 / 최적화",
    main: "광고는 시작보다 운영 과정에서 차이가 납니다",
    detail: "집행 후 반응 데이터를 확인하고, 채널별 효율과 문의 흐름을 보며 예산/타겟/소재를 지속적으로 보완합니다.",
    tags: ["집행", "반응 확인", "효율 개선"],
    Icon: IconSettings,
  },
  {
    step: "STEP 05",
    title: "결과 / 리포트",
    main: "성과를 체크하고, 다음 운영 방향까지 연결합니다",
    detail: "DB 유입, 상담 흐름, 반응 데이터를 바탕으로 운영 결과를 정리하고 필요한 보완 방향까지 함께 안내합니다.",
    tags: ["결과 체크", "피드백", "후속 운영 제안"],
    Icon: IconBarChart,
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Process</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">진행절차</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">
            맡기면 어떻게 흘러가는지, 짧고 확실하게 안내드립니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3 max-w-2xl">
            각 단계는 짧고 확실하며, &lsquo;맡기면 어떻게 흘러가는지&rsquo;가 바로 이해되도록 구성했습니다.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-4 bottom-4 w-px bg-slate-100 hidden lg:block" />

            <div className="space-y-6 lg:space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="relative flex gap-6 lg:gap-8">
                  {/* Step icon */}
                  <div className="hidden lg:flex w-16 h-16 bg-accent-blue rounded-2xl items-center justify-center shrink-0 z-10 shadow-lg shadow-accent-blue/15">
                    <s.Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8 rounded-2xl border border-slate-100 hover:border-accent-blue/15 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="lg:hidden w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center">
                        <s.Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[11px] text-accent-blue font-bold tracking-widest uppercase">{s.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-700 mb-2">{s.main}</p>
                    <p className="text-xs text-slate-500 mb-4">{s.detail}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[11px] rounded-md border border-slate-100">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="복잡하게 고민하지 마시고, 현재 상황부터 편하게 말씀해 주세요"
        description="여울디앤씨가 현재 업종과 광고 상황을 확인한 뒤, 필요한 방향부터 빠르게 정리해드립니다."
        buttonText="맞춤 상담 받기"
        variant="dark"
      />
    </>
  );
}
