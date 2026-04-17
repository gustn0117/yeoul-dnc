import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#080e1a] overflow-hidden">
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
                src="/images/logo-header-white.png"
                alt="여울디앤씨"
                width={800}
                height={300}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-[13px] sm:text-sm mb-6 max-w-xs leading-relaxed">
              유입부터 상담 전환까지 설계하는<br />
              온라인 광고 실행 파트너
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
                <span>평일 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-extrabold text-accent-blue uppercase tracking-[0.2em] mb-4">메뉴</h4>
            <nav className="space-y-2.5">
              {[
                { href: "/about", label: "회사소개" },
                { href: "/services", label: "광고상품 / 서비스" },
                { href: "/cases", label: "포트폴리오" },
                { href: "/process", label: "진행절차" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group flex items-center gap-2 text-[13px] sm:text-sm text-slate-400 hover:text-white transition-colors">
                  <span className="w-0 group-hover:w-3 h-px bg-accent-blue transition-all duration-300" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Channels */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-extrabold text-accent-blue uppercase tracking-[0.2em] mb-4">운영 채널</h4>
            <div className="grid grid-cols-3 gap-2 mb-5">
              {[
                { name: "naver", color: "from-green-500 to-emerald-600" },
                { name: "kakaotalk", color: "from-yellow-400 to-amber-500" },
                { name: "meta", color: "from-blue-500 to-indigo-600" },
                { name: "youtube", color: "from-red-500 to-rose-600" },
                { name: "google", color: "from-sky-500 to-blue-500" },
                { name: "instagram", color: "from-pink-500 to-rose-500" },
              ].map((c) => (
                <div key={c.name} className="relative group">
                  <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-linear-to-br ${c.color} opacity-40 blur-[1px]`} />
                  <div className="relative w-full aspect-square rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <img src={`/images/logos/${c.name}.svg`} alt={c.name} className="h-4 sm:h-5 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent-blue hover:text-sky-400 transition-colors">
              빠른 상담 받기
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} 여울디앤씨.<br className="sm:hidden" />
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
          </div>
        </div>
      </div>
    </footer>
  );
}
