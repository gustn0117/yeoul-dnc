"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

const faqs = [
  {
    q: "어떤 광고부터 시작해야 하는지 모르겠어요.",
    a: "업종과 예산, 목표부터 무료로 정리해드립니다. 여울디앤씨는 무조건 많은 채널을 제안하지 않고, 현재 상황에서 실제 문의로 연결될 수 있는 최소 구성부터 먼저 안내드립니다.",
    tag: "채널 선정",
  },
  {
    q: "광고 소재 제작도 함께 해주시나요?",
    a: "이미지/영상/문구/랜딩페이지 구성까지 일관된 흐름으로 제작합니다. 운영과 소재가 분리되면 효율이 떨어지기 때문에, 기본적으로 제작-세팅-운영을 한 팀에서 진행합니다.",
    tag: "제작 · 세팅",
  },
  {
    q: "최소 광고 예산은 얼마 정도가 필요한가요?",
    a: "업종과 목표에 따라 편차가 큽니다. 월 100만원 미만부터 1,000만원 이상까지 운영 경험이 있으며, 예산이 제한적일수록 채널 선별과 운영 구조가 더 중요합니다. 문의 시 상황에 맞게 안내드립니다.",
    tag: "예산",
  },
  {
    q: "광고 집행 후 결과는 어떻게 확인할 수 있나요?",
    a: "DB 유입, 상담 흐름, 반응 데이터를 바탕으로 정기 리포트를 제공합니다. 숫자 나열이 아니라, 다음 운영 방향에 필요한 판단 근거 중심으로 정리해서 전달드립니다.",
    tag: "리포트",
  },
  {
    q: "홈페이지가 없어도 광고 운영이 가능한가요?",
    a: "가능합니다. 랜딩페이지, 리드폼, 카카오톡 채널 등 목적에 맞는 수신 구조를 먼저 설계하는 방식으로 진행합니다. 홈페이지 제작이 필요한 경우 함께 안내드립니다.",
    tag: "랜딩 · 수신",
  },
  {
    q: "계약 기간은 어떻게 되나요?",
    a: "장기 계약을 강요하지 않습니다. 업종과 목표에 따라 단기 테스트 운영도 가능하며, 성과에 따라 연장하거나 조정하는 방식을 권장합니다.",
    tag: "계약",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #2563eb 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-100 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse-soft" />
            <p className="text-[11px] font-extrabold tracking-[0.25em] text-accent-blue">FAQ</p>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
            문의 전에 많이 물어보신{" "}
            <span className="relative inline-block">
              <span className="relative z-10">자주 묻는 질문</span>
              <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            더 궁금한 점은 <span className="font-semibold text-deep-navy">무료 상담</span>에서<br className="sm:hidden" />
            {" "}편하게 남겨주세요.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="relative group self-start"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.07}s backwards` }}
              >
                {/* Glow shadow when open */}
                <div
                  className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 pointer-events-none ${
                    isOpen ? "bg-accent-blue/25 scale-105" : "bg-accent-blue/0 scale-100"
                  }`}
                />
                {/* Subtle 3D depth */}
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/10 blur-[2px]" />

                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className={`relative w-full bg-white rounded-2xl text-left overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? "shadow-3d-lg shadow-accent-blue/15 ring-1 ring-accent-blue/30"
                      : "shadow-3d hover:-translate-y-0.5 ring-1 ring-slate-100 hover:ring-accent-blue/20"
                  }`}
                  aria-expanded={isOpen}
                >
                  {/* Top gradient line on open */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent-blue to-transparent transition-opacity duration-500 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {/* Bg accent on open */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent-blue/10 blur-3xl transition-opacity duration-500 ${
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    }`}
                  />

                  <div className="relative p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      {/* Q badge with glow */}
                      <div className="relative shrink-0">
                        {/* Outer glow ring */}
                        <div
                          className={`absolute -inset-1 rounded-xl bg-accent-blue/30 blur-md transition-opacity duration-500 ${
                            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                          }`}
                        />
                        {/* Depth */}
                        <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/40 blur-[1px]" />
                        {/* Front */}
                        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br from-accent-blue via-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-accent-blue/30 ring-1 ring-white/50">
                          <span className="text-white font-black text-sm sm:text-base drop-shadow-sm">Q</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wider uppercase transition-colors duration-300 ${
                            isOpen ? "bg-accent-blue text-white" : "bg-accent-blue/10 text-accent-blue"
                          }`}>
                            {f.tag}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold tracking-wider">#{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <p className={`text-[14px] sm:text-[15px] font-extrabold leading-snug transition-colors duration-300 ${
                          isOpen ? "text-accent-blue" : "text-deep-navy"
                        }`}>
                          {f.q}
                        </p>
                      </div>

                      {/* Chevron with glow */}
                      <div className="relative shrink-0">
                        <div
                          className={`absolute inset-0 rounded-full bg-accent-blue/30 blur-md transition-opacity duration-500 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <div className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? "bg-linear-to-br from-accent-blue to-blue-600 shadow-md shadow-accent-blue/30 rotate-180"
                            : "bg-slate-50 group-hover:bg-slate-100"
                        }`}>
                          <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-400 group-hover:text-accent-blue"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Answer with smooth slide */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-4 border-t border-slate-100 flex gap-3 sm:gap-4">
                          {/* A badge */}
                          <div className="shrink-0 w-10 sm:w-11 flex justify-center">
                            <div className="relative">
                              <div className="absolute -inset-0.5 rounded-lg bg-accent-blue/20 blur-sm" />
                              <div className="relative w-7 h-7 rounded-lg bg-linear-to-br from-accent-blue/15 to-accent-blue/5 border border-accent-blue/20 flex items-center justify-center">
                                <span className="text-accent-blue font-black text-[11px]">A</span>
                              </div>
                            </div>
                          </div>
                          <p className="flex-1 text-[12px] sm:text-sm text-slate-600 leading-relaxed">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <p className="text-[13px] text-slate-500 mb-4">원하는 답변을 못 찾으셨나요?</p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-accent-blue to-blue-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-accent-blue/25 hover:shadow-xl hover:shadow-accent-blue/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="absolute -inset-px rounded-xl bg-linear-to-r from-accent-blue/0 via-white/20 to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">직접 문의하기</span>
            <IconArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
