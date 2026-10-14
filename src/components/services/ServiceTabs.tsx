"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type TabItem = { id: string; label: string };

/* 채널 바로가기 바 — 고정 헤더 바로 아래에 붙어 따라오고, 지금 읽는 섹션을 강조한다.
   패널을 갈아끼우는 탭이 아니라 같은 페이지 안의 앵커 이동이라 tablist 대신 nav + aria-current를 쓴다. */
export default function ServiceTabs({ items, label = "광고 채널 바로가기" }: { items: TabItem[]; label?: string }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const visibleRef = useRef(new Map<string, boolean>());
  // 탭을 눌러 스크롤하는 동안엔 지나치는 섹션으로 강조가 깜빡이지 않게 잠근다
  const lockRef = useRef(false);
  const releaseRef = useRef<() => void>(() => {});

  const pick = useCallback(() => {
    if (lockRef.current) return;
    const hit = items.find((it) => visibleRef.current.get(it.id));
    if (hit) setActive(hit.id);
  }, [items]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const sections = items.map((it) => document.getElementById(it.id)).filter((el): el is HTMLElement => el !== null);
    let io: IntersectionObserver | undefined;

    // 기준선 = 탭 바 아래에서 남은 화면의 30% 지점(1px 띠). 이 선에 걸린 섹션이 현재 섹션.
    const observe = () => {
      io?.disconnect();
      const barBottom = (parseFloat(getComputedStyle(nav).top) || 0) + nav.offsetHeight;
      const vh = window.innerHeight;
      const line = Math.round(barBottom + Math.max(24, (vh - barBottom) * 0.3));
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) visibleRef.current.set(entry.target.id, entry.isIntersecting);
          pick();
        },
        { rootMargin: `-${line}px 0px -${Math.max(0, vh - line - 1)}px 0px` },
      );
      sections.forEach((section) => io?.observe(section));
    };

    observe();
    let timer = 0;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(observe, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      io?.disconnect();
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [items, pick]);

  // 모바일: 강조된 탭이 가로 스크롤 영역 가운데 오도록 (페이지는 건드리지 않음)
  useEffect(() => {
    const scroller = scrollerRef.current;
    const link = linkRefs.current.get(active);
    if (!scroller || !link || scroller.scrollWidth <= scroller.clientWidth) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollTo({ left: Math.max(0, link.offsetLeft - (scroller.clientWidth - link.offsetWidth) / 2), behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  // 이동 자체는 브라우저 기본 앵커 스크롤(부드러운 스크롤 + 섹션의 scroll-margin)에 맡긴다
  const onNavigate = (id: string) => {
    releaseRef.current();
    setActive(id);
    lockRef.current = true;
    let timer = 0;
    const release = () => {
      lockRef.current = false;
      window.clearTimeout(timer);
      window.removeEventListener("scrollend", release);
      releaseRef.current = () => {};
      pick();
    };
    timer = window.setTimeout(release, 1500);
    window.addEventListener("scrollend", release);
    releaseRef.current = release;
  };

  return (
    <nav ref={navRef} aria-label={label} className="sticky top-16 z-30 border-y border-g200 bg-white/94 backdrop-blur-xl lg:top-19">
      <div ref={scrollerRef} className="no-scrollbar relative overflow-x-auto overscroll-x-contain">
        <ul className="mx-auto flex w-max min-w-full px-1 sm:justify-center lg:gap-3">
          {items.map((it) => {
            const on = it.id === active;
            return (
              <li key={it.id} className="shrink-0">
                <a
                  ref={(el) => {
                    if (el) linkRefs.current.set(it.id, el);
                    else linkRefs.current.delete(it.id);
                  }}
                  href={`#${it.id}`}
                  aria-current={on ? "true" : undefined}
                  onClick={() => onNavigate(it.id)}
                  className={`relative flex h-12 items-center whitespace-nowrap px-4 text-[16px] font-bold tracking-[-0.02em] transition-colors duration-200 after:pointer-events-none after:absolute after:inset-x-3 after:bottom-0 after:h-0.75 after:rounded-full after:bg-brand after:transition-opacity focus-visible:-outline-offset-4 lg:h-14 lg:px-5 lg:text-[17px] ${
                    on ? "text-brand after:opacity-100" : "text-g700 after:opacity-0 hover:text-ink"
                  }`}
                >
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
