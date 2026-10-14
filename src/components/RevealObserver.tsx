"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* 화면에 들어온 요소에 .is-in을 붙인다 — 페이지는 서버 컴포넌트로 두고 속성·클래스만 달면 되도록 전역에서 한 번만 관찰.
   [data-reveal]: 떠오르며 등장 / [data-draw]: 흐름 선·막대 그리기 / 제목 속 .text-accent: 파란 형광펜 */
const TARGETS = "[data-reveal], [data-draw], h1 .text-accent, h2 .text-accent";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (!el.classList.contains("is-in")) io.observe(el);
      });
    };
    scan();

    // 탭 전환 등으로 새로 그려진 요소도 잡기 (프레임당 한 번만 스캔)
    let frame = 0;
    const mo = new MutationObserver(() => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
