"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollTopButton from "@/components/ScrollTopButton";
import { ArrowUpIcon, KakaoIcon } from "@/components/ui/icons";
import { KAKAO_URL } from "@/lib/site";
import { useFloatingHidden } from "@/lib/useFloatingHidden";

/* 오른쪽 아래 플로팅 버튼 (카톡 상담 · 무료 상담 · 맨 위로).
   상담 폼 구간·푸터가 보이면 비켜 숨고, 상담 페이지에선 '무료 상담'을 뺀다. */
export default function FloatingActions() {
  const pathname = usePathname();
  const hidden = useFloatingHidden();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div
      inert={hidden}
      className={`fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex flex-col items-end gap-2.5 transition-[opacity,translate] duration-300 ease-soft md:bottom-6 md:right-6 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : ""
      }`}
    >
      <ScrollTopButton
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-g200 bg-white text-ink transition-[opacity,scale,background-color] duration-300 hover:bg-g50 ${
          showTop ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </ScrollTopButton>
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 상담"
        className="group flex h-14 items-center gap-2 rounded-full bg-kakao px-4 text-[16px] font-bold text-[#3c1e1e] shadow-pop transition-transform hover:-translate-y-0.5"
      >
        <KakaoIcon className="h-6 w-6" />
        <span className="hidden md:inline">카톡 상담</span>
      </a>
      {pathname !== "/contact" && (
        <Link
          href="/contact"
          className="flex h-14 items-center gap-2 rounded-full bg-signal px-5 text-[16px] font-bold text-white shadow-pop transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-signal-press"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5h16v10H8.5L4 19.5v-14Z" />
          </svg>
          무료 상담
        </Link>
      )}
    </div>
  );
}
