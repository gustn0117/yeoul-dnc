"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import RevealObserver from "@/components/RevealObserver";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      {/* 키보드·스크린리더 사용자가 메뉴를 건너뛰고 본문으로 (Tab을 누르면 처음에 나타남) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-[16px] focus:font-bold focus:text-white"
      >
        본문 바로가기
      </a>
      <Header />
      {/* 고정 헤더(64px / 데스크톱 76px) 높이만큼 내림 */}
      <main id="main" tabIndex={-1} className="flex-1 pt-16 outline-none lg:pt-19">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      <RevealObserver />
    </>
  );
}
