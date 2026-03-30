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
  { label: "광고사례", href: "/cases" },
  { label: "진행절차", href: "/process" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/70 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <LogoFull className="h-9 lg:h-10" variant="color" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-accent-blue"
                    : "text-slate-500 hover:text-deep-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 bg-deep-navy text-white text-[13px] font-semibold rounded-lg hover:bg-deep-navy/90 transition-colors duration-200"
            >
              광고 문의
            </Link>
          </nav>

          {/* Mobile */}
          <button
            className="lg:hidden p-2 text-slate-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-fade-in">
          <nav className="px-4 py-3 space-y-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  pathname === item.href ? "text-accent-blue bg-accent-blue/5" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-deep-navy text-white text-sm font-semibold rounded-lg text-center"
            >
              광고 문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
