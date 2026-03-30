"use client";

import Link from "next/link";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-2.5">
      {/* KakaoTalk */}
      <a
        href="#"
        className="flex items-center gap-2 px-4 py-2.5 bg-[#FEE500] text-[#3C1E1E] rounded-full shadow-lg shadow-black/10 hover:shadow-xl transition-all hover:-translate-y-0.5 text-[13px] font-semibold"
        aria-label="카카오톡 상담"
      >
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
        </svg>
        <span className="hidden sm:inline">카카오톡</span>
      </a>

      {/* Quick Contact */}
      <Link
        href="/contact"
        className="flex items-center gap-2 px-4 py-2.5 bg-deep-navy text-white rounded-full shadow-lg shadow-black/10 hover:shadow-xl transition-all hover:-translate-y-0.5 text-[13px] font-semibold"
      >
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden sm:inline">문의하기</span>
      </Link>
    </div>
  );
}
