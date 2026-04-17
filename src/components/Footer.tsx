import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#080e1a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-5">
              <Image
                src="/images/logo-header-white.png"
                alt="여울디앤씨"
                width={800}
                height={300}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-[13px] sm:text-sm mb-5 sm:mb-6 max-w-xs leading-relaxed">
              유입부터 상담 전환까지 설계하는<br />
              온라인 광고 실행 파트너
            </p>
            <div className="space-y-1.5 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">
              <p>
                대표: OOO<br className="sm:hidden" />
                <span className="hidden sm:inline"> | </span>
                사업자등록번호: OOO-OO-OOOOO
              </p>
              <p>대표번호: OOO-OOOO-OOOO</p>
              <p>이메일: OOO@OOO.com</p>
              <p>운영시간: 평일 09:00 - 18:00</p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 sm:mb-4">메뉴</h4>
            <nav className="space-y-2 sm:space-y-2.5">
              {[
                { href: "/about", label: "회사소개" },
                { href: "/services", label: "광고상품 / 서비스" },
                { href: "/cases", label: "포트폴리오" },
                { href: "/process", label: "진행절차" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block text-[13px] sm:text-sm text-slate-500 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 sm:mb-4">문의</h4>
            <nav className="space-y-2 sm:space-y-2.5">
              <Link href="/contact" className="block text-[13px] sm:text-sm text-slate-500 hover:text-white transition-colors">
                문의하기
              </Link>
              <a href="#" className="block text-[13px] sm:text-sm text-slate-500 hover:text-white transition-colors">
                카카오톡 상담
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-5 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] sm:text-xs text-slate-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} 여울디앤씨.<br className="sm:hidden" />
            {" "}All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-5">
            <Link href="#" className="text-[11px] sm:text-xs text-slate-600 hover:text-slate-400 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-[11px] sm:text-xs text-slate-600 hover:text-slate-400 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
