import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconCheck } from "@/components/Icons";

interface SectionCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "light" | "dark";
}

export default function SectionCTA({
  title,
  description,
  buttonText = "무료 광고 상담받기",
  buttonHref = "/contact",
  variant = "light",
}: SectionCTAProps) {
  const isDark = variant === "dark";

  return (
    <section className={`relative ${isDark ? "pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:pb-32" : "py-20 sm:py-24 lg:py-32"} overflow-hidden ${isDark ? "bg-[#060e1e]" : "bg-linear-to-b from-[#f5f9ff] via-white to-[#f0f5ff]"}`}>
      {/* Background image (dark mode) */}
      {isDark && (
        <>
          <Image src="/images/stock/meeting-room.jpg" alt="" fill className="object-cover opacity-30" aria-hidden="true" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-br from-[#060e1e]/93 via-[#0a1428]/90 to-[#060e1e]/96" />
          {/* 곡선 디바이더 — 위 (밝은 섹션에서 흘러내림) */}
          <svg className="absolute top-0 left-0 w-full h-9 sm:h-14 lg:h-18" viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,0 H1440 V36 C1140,76 900,4 720,30 C540,56 300,4 0,40 Z" fill="#ffffff" />
          </svg>
        </>
      )}
      {/* Grid pattern */}
      <div
        className={`absolute inset-0 ${isDark ? "opacity-[0.07]" : "opacity-[0.025]"}`}
        style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? "#60a5fa" : "#2563eb"} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? "#60a5fa" : "#2563eb"} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      {/* Glow blobs */}
      <div className={`absolute top-0 right-0 w-150 h-75 ${isDark ? "bg-accent-blue/20" : "bg-accent-blue/15"} rounded-full blur-[120px]`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 ${isDark ? "bg-cta-orange/15" : "bg-cta-orange/10"} rounded-full blur-[120px]`} />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Left: Headline + CTA */}
          <div className="lg:col-span-7 text-center lg:text-left mb-10 lg:mb-0">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 ${isDark ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-white border border-blue-100 shadow-sm"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
              <span className={`text-[11px] font-bold tracking-wider uppercase ${isDark ? "text-slate-300" : "text-slate-600"}`}>지금 무료 상담</span>
            </div>

            <h2 className={`text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold mb-5 leading-tight ${isDark ? "text-white" : "text-deep-navy"}`}>
              {title}
            </h2>

            <p className={`text-[13px] sm:text-sm mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {description}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-8">
              {["부담 없는 무료 상담", "업종 맞춤 제안", "빠른 답변"].map((t) => (
                <div key={t} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold ${isDark ? "bg-white/5 text-slate-300 border border-white/10" : "bg-white text-slate-600 border border-slate-100 shadow-sm"}`}>
                  <IconCheck className={`w-3 h-3 ${isDark ? "text-accent-blue" : "text-emerald-500"}`} />
                  {t}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              {/* Primary CTA - 3D */}
              <div className="relative group">
                <div className="absolute inset-0 translate-x-1 translate-y-1.5 rounded-xl bg-cta-orange/40 blur-[2px]" />
                <Link
                  href={buttonHref}
                  className="btn-premium relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 bg-linear-to-r from-cta-orange to-orange-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-cta-orange/25 hover:shadow-xl hover:shadow-cta-orange/40"
                >
                  {buttonText}
                  <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Secondary - Kakao */}
              <a
                href="#"
                className={`inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "text-white/90 border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                    : "text-slate-700 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <svg className="w-4 h-4 text-[#FEE500]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                </svg>
                카카오톡 상담
              </a>
            </div>
          </div>

          {/* Right: 3D info card stack */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative max-w-sm mx-auto">
              {/* Back card - hours */}
              <div
                className={`absolute top-0 right-4 w-full ${isDark ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-white border border-slate-100"} rounded-2xl p-5 shadow-xl`}
                style={{ transform: "rotate(4deg) translateY(-8px)" }}
              >
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${isDark ? "text-slate-400" : "text-slate-400"}`}>운영 시간</p>
                <p className={`text-base font-extrabold ${isDark ? "text-white" : "text-deep-navy"}`}>평일 09:00 - 18:00</p>
                <p className={`text-[11px] mt-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>주말/공휴일 답변 다음 영업일</p>
              </div>

              {/* Front card - main contact */}
              <div className={`relative ${isDark ? "bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20" : "bg-white border border-blue-100"} rounded-2xl p-6 shadow-2xl shadow-deep-navy/10`}>
                <div className="flex items-center justify-between mb-4">
                  <p className={`text-[10px] font-extrabold tracking-widest uppercase ${isDark ? "text-accent-blue" : "text-accent-blue"}`}>CONTACT</p>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse-soft" />
                    <span className="text-[9px] font-bold text-emerald-400">ONLINE</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 shrink-0">
                      <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/50 blur-[1px]" />
                      <div className="relative w-full h-full rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-md">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className={`text-[10px] ${isDark ? "text-slate-400" : "text-slate-400"}`}>대표 번호</p>
                      <p className={`text-sm font-extrabold ${isDark ? "text-white" : "text-deep-navy"}`}>1668-5832</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 shrink-0">
                      <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-amber-400/50 blur-[1px]" />
                      <div className="relative w-full h-full rounded-xl bg-[#FEE500] flex items-center justify-center shadow-md">
                        <svg className="w-4 h-4 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className={`text-[10px] ${isDark ? "text-slate-400" : "text-slate-400"}`}>카카오톡</p>
                      <p className={`text-sm font-extrabold ${isDark ? "text-white" : "text-deep-navy"}`}>실시간 상담</p>
                    </div>
                  </div>
                </div>

                {/* Bottom mini stats */}
                <div className={`pt-4 border-t ${isDark ? "border-white/10" : "border-slate-100"} grid grid-cols-3 gap-2 text-center`}>
                  <div>
                    <p className={`text-base font-extrabold ${isDark ? "bg-linear-to-br from-white to-accent-blue bg-clip-text text-transparent" : "text-accent-blue"}`}>2~4x</p>
                    <p className={`text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>목표 ROAS</p>
                  </div>
                  <div>
                    <p className={`text-base font-extrabold ${isDark ? "bg-linear-to-br from-white to-accent-blue bg-clip-text text-transparent" : "text-accent-blue"}`}>100+</p>
                    <p className={`text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>누적 캠페인</p>
                  </div>
                  <div>
                    <p className={`text-base font-extrabold ${isDark ? "bg-linear-to-br from-white to-accent-blue bg-clip-text text-transparent" : "text-accent-blue"}`}>24h</p>
                    <p className={`text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>응답</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
