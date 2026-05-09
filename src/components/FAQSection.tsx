import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

const faqs = [
  {
    q: "어떤 광고부터 시작해야 하는지 모르겠어요.",
    a: "업종, 예산, 목표를 바탕으로 가장 적합한 광고 채널과 운영 전략을 무료로 제안해드립니다. 처음 진행하시는 분들도 부담 없이 상담받으실 수 있습니다.",
    tag: "채널 선정",
    accent: "from-blue-500 to-blue-600",
  },
  {
    q: "광고 소재 제작도 함께 해주시나요?",
    a: "네. 이미지, 배너, 영상, 카드라이팅까지 광고 목적에 맞게 제작을 지원합니다. 업종과 타겟에 맞는 소재를 지속적으로 테스트하고 최적화합니다.",
    tag: "제작 · 세팅",
    accent: "from-blue-500 to-blue-600",
  },
  {
    q: "최소 광고 예산은 얼마 정도가 필요한가요?",
    a: "업종과 목표에 따라 다르지만, 일반적으로 월 30만원~50만원 이상 예산부터 효율적인 운영이 가능합니다. 정확한 예산은 상담을 통해 안내해드립니다.",
    tag: "예산",
    accent: "from-blue-500 to-blue-600",
  },
  {
    q: "광고 집행 후 결과는 어떻게 확인할 수 있나요?",
    a: "광고 성과 리포트를 주간/월간 단위로 제공해드립니다. 노출, 클릭, 문의, 비용 등 핵심 지표를 보기 쉽게 정리해드리고, 운영점과 개선 방향까지 함께 제안해드립니다.",
    tag: "리포트",
    accent: "from-blue-500 to-blue-600",
  },
  {
    q: "홈페이지가 없어도 광고 운영이 가능한가요?",
    a: "가능합니다. 랜딩페이지(단일 페이지)를 제작하여 광고 성과를 높여드립니다. 기존 홈페이지가 있으면 더 좋지만, 없어도 문제없습니다.",
    tag: "랜딩 · 수신",
    accent: "from-blue-500 to-blue-600",
  },
  {
    q: "계약 기간은 어떻게 되나요?",
    a: "기본 계약 기간은 1개월 단위입니다. 광고 성과와 방향을 충분히 확인하신 후 연장 여부를 결정하실 수 있어 부담 없이 시작하실 수 있습니다.",
    tag: "계약",
    accent: "from-blue-500 to-blue-600",
  },
];

export default function FAQSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-100 rounded-full shadow-sm mb-5">
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-accent-blue">FAQ</span>
            <span className="w-1 h-1 rounded-full bg-accent-blue/40" />
            <span className="text-[10px] font-semibold text-slate-500">자주 묻는 질문</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
            문의 전에 많이 물어보신{" "}
            <span className="relative inline-block">
              <span className="relative z-10">자주 묻는 질문</span>
              <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            광고 진행 전 가장 많이 궁금해하시는 내용을 모았습니다.
            <br className="sm:hidden" />
            {" "}더 자세한 내용은{" "}
            <span className="font-semibold text-deep-navy">무료 상담</span>에서 편하게 남겨주세요.
          </p>
        </div>

        {/* Cards grid - 모두 펼친 상태, 3D 강화 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="group relative" style={{ perspective: "1000px" }}>
              {/* Layered depth shadows - true 3D */}
              <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-accent-blue/8 blur-[6px]" aria-hidden="true" />
              <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-slate-200/40" aria-hidden="true" />

              <article
                className="relative bg-white rounded-2xl border border-slate-100 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:rotate-x-1 overflow-hidden"
                style={{
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.9) inset, 0 2px 4px rgba(15,23,42,0.04), 0 8px 16px rgba(15,23,42,0.04), 0 16px 32px rgba(15,23,42,0.06), 0 32px 64px rgba(37,99,235,0.04)",
                  animation: `fade-in-up 0.5s ease-out ${i * 0.05}s backwards`,
                }}
              >
                {/* Top accent strip */}
                <div className={`h-1 bg-linear-to-r ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Number watermark */}
                <span className="absolute top-3 right-4 text-[44px] sm:text-[56px] font-black text-slate-100 leading-none select-none pointer-events-none group-hover:text-accent-blue/10 transition-colors" style={{ textShadow: "0 2px 0 rgba(15,23,42,0.02)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative p-5 sm:p-6">
                  {/* Tag pill */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-linear-to-br from-accent-blue/10 to-accent-blue/5 border border-accent-blue/15 rounded-full mb-4"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-blue shadow-[0_0_4px_rgba(37,99,235,0.6)]" />
                    <span className="text-[10px] font-bold text-accent-blue tracking-wider">{f.tag}</span>
                  </div>

                  {/* Q row - 3D icon */}
                  <div className="flex items-start gap-3 sm:gap-3.5 mb-4">
                    <div className="relative shrink-0">
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-1.5 rounded-xl bg-linear-to-br ${f.accent} opacity-40 blur-xs`} aria-hidden="true" />
                      <div
                        className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br ${f.accent} flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5`}
                        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 4px rgba(0,0,0,0.15), 0 6px 16px rgba(37,99,235,0.35)" }}
                      >
                        <span className="text-white font-black text-sm drop-shadow-sm">Q</span>
                      </div>
                    </div>
                    <p className="flex-1 text-[14px] sm:text-[15px] font-extrabold text-deep-navy leading-snug pt-1.5">
                      {f.q}
                    </p>
                  </div>

                  {/* Divider with dots */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="flex-1 h-px bg-linear-to-r from-slate-200 via-slate-100 to-transparent" />
                    <span className="w-1 h-1 rounded-full bg-slate-100" />
                  </div>

                  {/* A row - 항상 펼쳐진 상태, 3D icon */}
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/15 blur-[3px]" aria-hidden="true" />
                      <div
                        className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br from-blue-50 to-white border border-accent-blue/25 flex items-center justify-center"
                        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(37,99,235,0.08)" }}
                      >
                        <span className="text-accent-blue font-black text-sm">A</span>
                      </div>
                    </div>
                    <p className="flex-1 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed pt-2.5">
                      {f.a}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 sm:mt-16">
          <p className="text-[13px] text-slate-500 mb-4">원하는 답변을 못 찾으셨나요?</p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-accent-blue to-blue-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-accent-blue/25 hover:shadow-xl hover:shadow-accent-blue/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true" />
            <span className="relative">직접 문의하기</span>
            <IconArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
