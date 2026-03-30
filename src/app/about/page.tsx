import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IconTarget, IconCompass, IconImage, IconSettings, IconBarChart, IconRefresh, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "회사소개 | 여울디앤씨",
  description: "여울디앤씨는 유입부터 상담 전환까지 설계하는 온라인 광고 실행사입니다.",
};

const tasks = [
  { title: "광고 채널 기획", desc: "업종과 목표에 맞는 최적의 광고 채널을 선정합니다", Icon: IconTarget },
  { title: "광고상품 제안", desc: "예산과 효율을 고려한 광고 상품을 제안합니다", Icon: IconCompass },
  { title: "광고 소재 제작", desc: "이미지, 영상, 문구 등 광고에 필요한 소재를 제작합니다", Icon: IconImage },
  { title: "광고 세팅 및 운영", desc: "타겟, 예산, 일정 등을 세팅하고 직접 운영합니다", Icon: IconSettings },
  { title: "성과 확인 및 최적화", desc: "데이터를 분석하고 더 나은 성과를 위해 최적화합니다", Icon: IconBarChart },
  { title: "리타겟팅 / 재접촉 운영", desc: "이탈 고객이나 기존 고객에 대한 재접촉을 운영합니다", Icon: IconRefresh },
];

const philosophies = [
  "많이 하는 광고보다 맞는 광고를 제안합니다",
  "클릭 수보다 실제 문의와 상담 가능성을 중요하게 봅니다",
  "광고 집행 후에도 운영과 보완까지 함께합니다",
  "업종별 특성에 맞는 방식으로 접근합니다",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">회사소개</h1>
          <p className="text-lg lg:text-xl text-slate-300/90 max-w-2xl">
            여울디앤씨는 유입부터 상담 전환까지 설계하는<br />
            온라인 광고 실행사입니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3 max-w-2xl">
            업종과 목적에 맞는 광고를 제안하고 실제 운영까지 연결합니다
          </p>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div className="flex justify-center mb-12 lg:mb-0">
              <Image
                src="/images/logo-vertical-color.png"
                alt="여울디앤씨 로고"
                width={1000}
                height={1250}
                className="w-48 lg:w-64 h-auto"
              />
            </div>
            <div>
              <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-3">Brand</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-6 tracking-tight">
                시장 흐름의 방향과 속도를<br />만들어내는 전략적 움직임
              </h2>
              <p className="text-slate-500 mb-4">
                여울디앤씨의 로고는 대표 이니셜 Y자 형태로 시장 흐름의 방향과 속도를 만들어내는 전략적 움직임을 시각화한 로고입니다.
              </p>
              <p className="text-slate-500">
                &ldquo;광고를 해주는 회사&rdquo;가 아니라, 유입부터 상담 전환까지 설계하고 실행하는 온라인 광고 실행사입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-4">
              여울디앤씨가 하는 일
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tasks.map((task, i) => (
              <div key={i} className="group p-7 rounded-3xl border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-accent-blue/10 to-accent-blue/5 rounded-2xl flex items-center justify-center mb-5 group-hover:from-accent-blue/20 group-hover:to-accent-blue/10 transition-all duration-300">
                  <task.Icon className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">{task.title}</h3>
                <p className="text-sm text-slate-500">{task.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-32 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-3">Philosophy</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-4">운영 철학</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {philosophies.map((text, i) => (
              <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-accent-blue/20 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                  <IconCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="여울디앤씨의 광고 운영 방식이 궁금하신가요?"
        description="맞는 광고 방향부터 상담해드립니다"
        variant="dark"
      />
    </>
  );
}
