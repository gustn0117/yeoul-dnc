import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IllustRocket, IllustPieChart } from "@/components/Illustrations";
import { IconClipboard, IconCompass, IconImage, IconSettings, IconBarChart, IconCheck, IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "진행절차 | 여울디앤씨",
  description: "맡기면 어떻게 흘러가는지, 짧고 확실하게 안내드립니다.",
};

const steps = [
  {
    step: "01", title: "상담 / 문의",
    main: "먼저 업종과 예산, 목표부터 간단하게 확인합니다",
    detail: "어떤 광고가 필요한지 바로 판단하기보다, 현재 상황과 원하는 방향을 먼저 파악한 뒤 상담을 진행합니다.",
    tags: ["업종", "예산", "목표 확인"],
    Icon: IconClipboard, color: "from-blue-500 to-blue-600",
  },
  {
    step: "02", title: "기획 / 전략",
    main: "업종에 맞는 채널과 광고 방향을 정리합니다",
    detail: "무조건 많은 채널을 제안하지 않고, 목표와 예산에 맞는 현실적인 운영 방식을 먼저 설계합니다.",
    tags: ["타겟 설정", "채널 선별", "운영 구조 설계"],
    Icon: IconCompass, color: "from-indigo-500 to-indigo-600",
  },
  {
    step: "03", title: "제작 / 세팅",
    main: "광고 소재와 세팅을 빠르게 준비합니다",
    detail: "이미지, 영상, 문구, 랜딩 또는 폼 구성을 정리하고 실제 송출을 위한 세팅까지 진행합니다.",
    tags: ["소재 제작", "문구 정리", "광고 세팅"],
    Icon: IconImage, color: "from-violet-500 to-violet-600",
  },
  {
    step: "04", title: "운영 / 최적화",
    main: "광고는 시작보다 운영 과정에서 차이가 납니다",
    detail: "집행 후 반응 데이터를 확인하고, 채널별 효율과 문의 흐름을 보며 예산/타겟/소재를 지속적으로 보완합니다.",
    tags: ["집행", "반응 확인", "효율 개선"],
    Icon: IconSettings, color: "from-emerald-500 to-emerald-600",
  },
  {
    step: "05", title: "결과 / 리포트",
    main: "성과를 체크하고, 다음 운영 방향까지 연결합니다",
    detail: "DB 유입, 상담 흐름, 반응 데이터를 바탕으로 운영 결과를 정리하고 필요한 보완 방향까지 함께 안내합니다.",
    tags: ["결과 체크", "피드백", "후속 운영 제안"],
    Icon: IconBarChart, color: "from-orange-500 to-orange-600",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Process</p>
              <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">진행절차</h1>
              <p className="text-lg text-slate-300/90 max-w-md">맡기면 어떻게 흘러가는지, 짧고 확실하게 안내드립니다</p>
              <p className="text-sm text-slate-400/80 mt-3 max-w-md">각 단계는 짧고 확실하며, 처음이셔도 바로 이해할 수 있습니다.</p>
            </div>
            <div className="hidden lg:flex justify-center">
              <IllustRocket className="w-56 h-56 animate-float-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Visual flow bar */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-2xl bg-linear-to-br ${s.color} flex items-center justify-center shadow-lg mb-2`}>
                    <s.Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 hidden sm:block">{s.title}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 mx-2 sm:mx-4">
                    <div className="h-px bg-linear-to-r from-slate-200 to-slate-100" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 lg:space-y-0">
            {steps.map((s, i) => (
              <div key={i} className={`lg:grid lg:grid-cols-12 lg:gap-8 ${i > 0 ? "lg:mt-0" : ""}`}>
                {/* Number + line */}
                <div className="hidden lg:flex lg:col-span-1 flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${s.color} flex items-center justify-center shadow-lg shadow-accent-blue/10 shrink-0`}>
                    <span className="text-white font-extrabold text-lg">{s.step}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-linear-to-b from-slate-200 to-transparent my-2" />}
                </div>

                {/* Content */}
                <div className={`lg:col-span-11 pb-12 lg:pb-16 ${i % 2 === 0 ? "" : ""}`}>
                  <div className={`p-6 lg:p-8 rounded-2xl border border-slate-100 card-3d gradient-border ${i % 2 === 1 ? "bg-slate-50/50" : "bg-white"}`}>
                    <div className="lg:grid lg:grid-cols-5 lg:gap-8 lg:items-center">
                      {/* Text */}
                      <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                        <div className="flex items-center gap-3 mb-3 lg:hidden">
                          <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center`}>
                            <s.Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-bold text-accent-blue tracking-widest uppercase">STEP {s.step}</span>
                        </div>
                        <p className="text-xs font-bold text-accent-blue tracking-widest uppercase mb-2 hidden lg:block">STEP {s.step}</p>
                        <h3 className="text-lg lg:text-xl font-extrabold text-deep-navy mb-2">{s.title}</h3>
                        <p className="text-sm text-slate-700 mb-2">{s.main}</p>
                        <p className="text-xs text-slate-500 mb-4">{s.detail}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[11px] rounded-full border border-slate-100 font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                      {/* Visual */}
                      <div className={`lg:col-span-2 mt-6 lg:mt-0 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                        <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-50">
                          <Image
                            src={`/images/stock/${["consultation", "strategy-board", "creative-design", "dashboard", "monitor-data"][i]}.jpg`}
                            alt={s.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-deep-navy/20 to-transparent" />
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

      {/* Summary strip */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/stock/team-collab.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-deep-navy/90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-6">
                단순 집행이 아닌,<br />실행 중심으로 진행합니다
              </h2>
              <div className="space-y-3">
                {["시작 전 방향부터 명확히 정리합니다", "광고 집행 후에도 운영과 보완까지 함께합니다", "모든 과정을 데이터 기반으로 판단합니다"].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-sm text-slate-200 font-medium">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <IllustPieChart className="w-48 h-48 mx-auto" />
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
