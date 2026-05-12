import Link from "next/link";
import Image from "next/image";

const channels = [
  { name: "naver", label: "네이버", bg: "bg-[#03C75A]", logoTone: "dark" },
  { name: "kakaotalk", label: "카카오톡", bg: "bg-[#FEE500]", logoTone: "kakao" },
  { name: "meta", label: "메타", bg: "bg-[#0866FF]", logoTone: "white" },
  { name: "youtube", label: "유튜브", bg: "bg-[#FF0000]", logoTone: "white" },
  { name: "google", label: "구글", bg: "bg-white", logoTone: "color" },
  { name: "instagram", label: "인스타그램", bg: "bg-linear-to-br from-[#FEDA77] via-[#F58529] to-[#DD2A7B]", logoTone: "white" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080e1a] overflow-hidden">
      {/* 희미하게 스며드는 사진 — 상단에서 아래로 페이드 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/stock/office-space.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.13] grayscale"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 30%, transparent 55%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 30%, transparent 55%)",
          }}
        />
      </div>
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute -top-20 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-violet-500/8 rounded-full blur-[100px]" />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-20">
        {/* Top: Brand statement */}
        <div className="text-center mb-12 sm:mb-16 pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase">함께 시작해보세요</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-white mb-3 leading-tight">
            <span className="bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">결과</span>로 말하는 광고,<br className="sm:hidden" />
            {" "}여울디앤씨와 함께
          </h3>
          <p className="text-[13px] sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            업종에 맞는 광고 구조를 먼저 정리해드립니다.
          </p>
          {/* Quick CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cta-orange to-orange-500 text-white text-[13px] font-bold rounded-xl shadow-lg shadow-cta-orange/20 hover:shadow-xl transition-shadow"
            >
              무료 상담 받기
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FEE500] text-[#3C1E1E] text-[13px] font-bold rounded-xl shadow-lg shadow-amber-900/20 hover:shadow-xl transition-shadow"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
              </svg>
              카카오톡
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo-header-white-transparent.png"
                alt="여울디앤씨"
                width={706}
                height={203}
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_4px_12px_rgba(96,165,250,0.25)]"
              />
            </Link>
            <p className="text-slate-400 text-[13px] sm:text-sm mb-6 max-w-xs leading-relaxed">
              유입부터 상담 전환까지 설계하는<br />
              <span className="font-semibold text-white">온라인 광고 실행 파트너</span>
            </p>
            <div className="space-y-2 text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-accent-blue/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>대표: OOO</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-accent-blue/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>사업자등록번호: OOO-OO-OOOOO</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-accent-blue/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>OOO-OOOO-OOOO</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-accent-blue/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>OOO@OOO.com</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-accent-blue/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>평일 09:00 - 18:00 <span className="text-slate-600">(주말/공휴일 휴무)</span></span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-extrabold text-accent-blue uppercase tracking-[0.2em] mb-4">메뉴</h4>
            <nav className="space-y-1">
              {[
                { href: "/about", label: "회사소개" },
                { href: "/services", label: "광고상품 / 서비스" },
                { href: "/cases", label: "포트폴리오" },
                { href: "/process", label: "진행절차" },
                { href: "/contact", label: "문의하기" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-2 py-2 text-[13px] sm:text-sm text-slate-400 hover:text-white border-b border-white/5 last:border-b-0 transition-colors"
                >
                  <span>{item.label}</span>
                  <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-accent-blue group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>

          {/* Channels - 3D 컬러 블록 */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-extrabold text-accent-blue uppercase tracking-[0.2em] mb-4">운영 채널</h4>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {channels.map((c, i) => (
                <div key={c.name} className="group relative" style={{ perspective: "600px" }}>
                  {/* Depth layers - layered for true 3D effect */}
                  <div className={`absolute inset-0 translate-x-1 translate-y-2 rounded-xl ${c.bg} opacity-25 blur-sm`} aria-hidden="true" />
                  <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl ${c.bg} opacity-50`} aria-hidden="true" />
                  {/* Drop shadow */}
                  <div className="absolute inset-0 translate-x-0 translate-y-2.5 rounded-xl bg-black/50 blur-[6px]" aria-hidden="true" />

                  <div
                    className={`relative w-full aspect-square rounded-xl ${c.bg} flex flex-col items-center justify-center gap-1 overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-0`}
                    style={{
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 4px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.25), 0 8px 16px rgba(0,0,0,0.15)",
                      animation: `fade-in-up 0.5s ease-out ${i * 0.06}s backwards`,
                    }}
                  >
                    {/* Glossy top highlight */}
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-linear-to-b from-white/30 to-transparent" aria-hidden="true" />
                    {/* Bottom shadow */}
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 rounded-b-xl bg-linear-to-t from-black/15 to-transparent" aria-hidden="true" />
                    <img
                      src={`/images/logos/${c.name}.svg`}
                      alt={c.label}
                      className={`relative h-5 sm:h-6 w-auto drop-shadow-md ${
                        c.logoTone === "white" || c.logoTone === "dark" ? "brightness-0 invert" : ""
                      }`}
                    />
                    <span
                      className={`relative text-[9px] sm:text-[10px] font-bold tracking-tight ${
                        c.logoTone === "kakao" || c.logoTone === "color" ? "text-[#3C1E1E]" : "text-white drop-shadow-sm"
                      }`}
                    >
                      {c.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent-blue hover:text-sky-400 transition-colors">
              빠른 상담 받기
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* PDF page 24: 무료 광고 상담 신청 + 안심하고 맡길 수 있는 파트너 - 3D cards */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* 무료 광고 상담 신청 카드 */}
          <div className="group relative">
            <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-accent-blue/20 blur-sm" aria-hidden="true" />
            <Link
              href="/contact"
              className="relative block bg-linear-to-br from-white/8 to-white/3 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:from-white/12 group-hover:border-accent-blue/30 overflow-hidden"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 24px rgba(8,14,26,0.5), 0 16px 48px rgba(37,99,235,0.08)" }}
            >
              <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true" />
              <div className="relative flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-accent-blue/40 blur-[3px]" aria-hidden="true" />
                  <div
                    className="relative w-12 h-12 rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), 0 4px 12px rgba(37,99,235,0.4)" }}
                  >
                    <svg className="w-5 h-5 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-extrabold text-white leading-tight">무료 광고 상담 신청</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">업종과 예산에 맞는 광고 전략을 무료로 제안해드립니다.</p>
                </div>
                <svg className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* 안심하고 맡길 수 있는 파트너 */}
          <div className="group relative">
            <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-emerald-500/20 blur-sm" aria-hidden="true" />
            <div
              className="relative bg-linear-to-br from-white/8 to-white/3 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex items-center gap-4"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 24px rgba(8,14,26,0.5), 0 16px 48px rgba(16,185,129,0.06)" }}
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-emerald-500/30 blur-[3px]" aria-hidden="true" />
                <div
                  className="relative w-12 h-12 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), 0 4px 12px rgba(16,185,129,0.4)" }}
                >
                  <svg className="w-5 h-5 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-extrabold text-white leading-tight">안심하고 맡길 수 있는 파트너</p>
                <p className="text-[11px] text-slate-400 mt-0.5">광고 운영부터 성과 분석, 후속 관리까지 정직하고 투명하게 함께합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PDF page 24: 인사이트(뉴스레터) - 3D card */}
        <div className="group relative mt-6">
          <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-violet-500/20 blur-sm" aria-hidden="true" />
          <div
            className="relative bg-linear-to-br from-white/8 to-white/3 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 24px rgba(8,14,26,0.5), 0 16px 48px rgba(139,92,246,0.06)" }}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative shrink-0">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-xl bg-violet-500/30 blur-[3px]" aria-hidden="true" />
                <div
                  className="relative w-11 h-11 rounded-xl bg-linear-to-br from-violet-400 to-violet-600 flex items-center justify-center"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), 0 4px 12px rgba(139,92,246,0.4)" }}
                >
                  <svg className="w-5 h-5 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-[13px] sm:text-sm font-extrabold text-white">여울디앤씨의 인사이트를 받아보세요</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">광고 트렌드와 실무 노하우를 정기적으로 전해드립니다.</p>
              </div>
            </div>
            <div className="flex items-stretch gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                className="flex-1 sm:w-56 px-3 py-2 text-[12px] rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-accent-blue focus:bg-white/[0.07] focus:outline-none transition-colors"
                style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)" }}
              />
              <button
                type="button"
                className="relative group/btn px-4 py-2 bg-linear-to-r from-accent-blue to-blue-600 text-white text-[12px] font-bold rounded-lg whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(37,99,235,0.35)" }}
              >
                구독하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} 여울디앤씨(YEOUL D&amp;C).<br className="sm:hidden" />
            {" "}All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-5">
            <Link href="#" className="text-[11px] sm:text-xs text-slate-500 hover:text-slate-300 transition-colors">
              개인정보처리방침
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <Link href="#" className="text-[11px] sm:text-xs text-slate-500 hover:text-slate-300 transition-colors">
              이용약관
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <Link href="/contact" className="text-[11px] sm:text-xs text-accent-blue hover:text-sky-400 font-semibold transition-colors">
              광고 문의
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
