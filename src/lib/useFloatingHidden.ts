"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* 퀵메뉴·하단 상담 바를 숨겨야 하는 구간(푸터, [data-hide-floating] 섹션)이 화면에 들어왔는지.
   레퍼런스 기준: 상담 폼 섹션은 화면 88%~15% 사이, 푸터는 94%~6% 사이에 걸치면 숨김. */
export function useFloatingHidden() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = [...document.querySelectorAll<HTMLElement>("footer, [data-hide-floating]")];
    if (!targets.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setHidden(visible.size > 0);
      },
      { rootMargin: "-12% 0px -12% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => {
      io.disconnect();
      setHidden(false);
    };
  }, [pathname]);

  return hidden;
}
