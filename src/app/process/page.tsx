import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";
import { IconClipboard, IconCompass, IconImage, IconSettings, IconPlay, IconBarChart, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "진행절차 | 여울디앤씨",
  description: "문의부터 광고 운영까지 어떤 식으로 진행되는지 안내드립니다.",
};

const steps = [
  {
    step: "STEP 1",
    title: "상담 접수",
    desc: "업종, 예산, 현재 상황, 목표를 간단히 확인합니다.",
    detail: "전화, 카카오톡, 문의폼 등 편한 방법으로 문의해주시면 담당자가 빠르게 확인합니다.",
    Icon: IconClipboard,
  },
  {
    step: "STEP 2",
    title: "광고 방향 분석",
    desc: "어떤 채널이 맞는지, 어떤 방식이 효율적인지 검토합니다.",
    detail: "업종 특성, 타겟 고객, 경쟁 환경 등을 분석하여 최적의 광고 방향을 도출합니다.",
    Icon: IconCompass,
  },
  {
    step: "STEP 3",
    title: "광고 기획 및 제안",
    desc: "채널 구성, 운영 방향, 소재 방향을 정리해 안내합니다.",
    detail: "구체적인 채널별 운영 전략과 예산 배분, 기대 효과를 포함한 제안서를 전달합니다.",
    Icon: IconImage,
  },
  {
    step: "STEP 4",
    title: "소재 제작 및 세팅",
    desc: "이미지, 영상, 문구 등 필요한 광고 소재를 준비하고 세팅합니다.",
    detail: "업종과 타겟에 맞는 광고 소재를 제작하고, 각 매체별 광고를 세팅합니다.",
    Icon: IconSettings,
  },
  {
    step: "STEP 5",
    title: "광고 운영",
    desc: "광고 집행 후 반응을 보며 효율 중심으로 운영합니다.",
    detail: "일일 모니터링을 통해 입찰가, 타겟, 소재 등을 실시간으로 조정합니다.",
    Icon: IconPlay,
  },
  {
    step: "STEP 6",
    title: "분석 및 보완",
    desc: "성과를 체크하고 보완하며 다음 전환까지 연결합니다.",
    detail: "정기 리포트를 통해 성과를 공유하고, 다음 단계 전략을 함께 논의합니다.",
    Icon: IconBarChart,
  },
];

const highlights = [
  "시작 전 방향부터 명확히 정리합니다",
  "광고 집행 후에도 운영과 보완까지 함께합니다",
  "단순 집행이 아닌 실행 중심으로 진행합니다",
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-4">Process</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">진행절차</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl leading-relaxed">
            문의부터 광고 운영까지 어떤 식으로 진행되는지 안내드립니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3">
            처음 진행하셔도 이해하기 쉽게 단계별로 설명드립니다
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7.75 top-4 bottom-4 w-px bg-linear-to-b from-accent-blue/20 via-accent-blue/10 to-transparent hidden lg:block" />

            <div className="space-y-6 lg:space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="relative flex gap-6 lg:gap-8">
                  {/* Step Icon */}
                  <div className="hidden lg:flex w-16 h-16 bg-linear-to-br from-accent-blue to-blue-600 rounded-2xl items-center justify-center shrink-0 z-10 shadow-lg shadow-accent-blue/20">
                    <s.Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 group p-7 rounded-3xl border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="lg:hidden w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center">
                        <s.Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-accent-blue font-bold tracking-widest uppercase">{s.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{s.title}</h3>
                    <p className="text-slate-700 mb-2 leading-relaxed">{s.desc}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {highlights.map((text, i) => (
              <div key={i} className="text-center p-7 bg-white rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-accent-blue/10 rounded-2xl flex items-center justify-center mb-4">
                  <IconCheck className="w-5 h-5 text-accent-blue" />
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="여울디앤씨와 광고를 시작해보고 싶으신가요?"
        description="업종과 목표에 맞는 방향부터 안내해드립니다"
        buttonText="문의하기"
        variant="dark"
      />
    </>
  );
}
