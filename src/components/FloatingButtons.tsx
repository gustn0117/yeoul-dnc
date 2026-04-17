"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-3 sm:right-4 bottom-4 sm:bottom-6 z-40 flex flex-col items-end gap-2 sm:gap-2.5">
      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-white text-slate-600 rounded-full shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center border border-slate-100 animate-fade-in-up"
          aria-label="맨 위로"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* KakaoTalk */}
      <a
        href="#"
        className="flex items-center gap-2 pl-3 pr-3.5 sm:pl-4 sm:pr-4 py-2.5 bg-[#FEE500] text-[#3C1E1E] rounded-full shadow-lg shadow-black/10 hover:shadow-xl transition-all hover:-translate-y-0.5 text-[12px] sm:text-[13px] font-semibold"
        aria-label="카카오톡 상담"
      >
        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
        </svg>
        <span className="hidden sm:inline">카카오톡 상담</span>
      </a>

      {/* Quick Contact */}
      <Link
        href="/contact"
        className="flex items-center gap-2 pl-3 pr-3.5 sm:pl-4 sm:pr-4 py-2.5 bg-deep-navy text-white rounded-full shadow-lg shadow-black/10 hover:shadow-xl transition-all hover:-translate-y-0.5 text-[12px] sm:text-[13px] font-semibold"
      >
        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden sm:inline">문의하기</span>
      </Link>
    </div>
  );
}
