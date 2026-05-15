"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IconArrowRight } from "@/components/Icons";
import { LogoFull } from "@/components/Logo";

const navItems = [
  { label: "메인", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "광고상품 / 서비스", href: "/services" },
  { label: "포트폴리오", href: "/cases" },
  { label: "진행절차", href: "/process" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      setProgress(Math.min(window.scrollY / max, 1));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ "--progress": progress } as React.CSSProperties} />
      </div>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-header shadow-[0_1px_0_rgba(15,29,50,0.04),0_4px_12px_rgba(15,29,50,0.04)]" : "bg-white/60 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" aria-label="여울디앤씨 홈">
            <LogoFull className="h-8 sm:h-9 lg:h-10" variant="color" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 rounded-lg text-[14px] font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-accent-blue"
                    : "text-slate-500 hover:text-deep-navy"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-premium ml-3 inline-flex items-center gap-1.5 px-4 py-2 bg-linear-to-br from-deep-navy to-slate-800 text-white text-[14px] font-semibold rounded-lg shadow-md shadow-deep-navy/20 hover:shadow-lg hover:shadow-deep-navy/30"
            >
              무료 상담받기
              <IconArrowRight className="w-3 h-3" />
            </Link>
          </nav>

          {/* Mobile */}
          <button
            className="lg:hidden p-2 -mr-2 text-slate-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-16 bg-deep-navy/30 backdrop-blur-[2px] animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden absolute left-0 right-0 bg-white border-t border-slate-100 shadow-xl shadow-deep-navy/5 animate-fade-in-up">
            <nav className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === item.href
                      ? "text-accent-blue bg-accent-blue/5"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <IconArrowRight className={`w-3.5 h-3.5 ${pathname === item.href ? "text-accent-blue" : "text-slate-300"}`} />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3.5 bg-linear-to-r from-deep-navy to-slate-800 text-white text-sm font-bold rounded-xl"
              >
                무료 광고 상담받기
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
    </>
  );
}
