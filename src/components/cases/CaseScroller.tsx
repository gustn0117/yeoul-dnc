"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronIcon } from "@/components/ui/icons";

type CaseScrollerProps = {
  /** 카드 순서와 같은 업종 이름 — 위쪽 바로가기 버튼이 된다 */
  labels: string[];
  /** 스크롤 영역 이름 (스크린리더) */
  label: string;
  /** snap-start가 붙은 <li> 카드들 */
  children: ReactNode;
  className?: string;
};

// 첫 카드는 본문 폭(wrap)의 왼쪽 선에 맞추고, 나머지는 화면 오른쪽 끝까지 흘러가게
const EDGE_PAD = "px-5 md:px-8 xl:px-[calc((100%_-_80rem)/2_+_2rem)]";
const SNAP_PAD = "scroll-pl-5 md:scroll-pl-8 xl:scroll-pl-[calc((100%_-_80rem)/2_+_2rem)]";

const behavior = (): ScrollBehavior => (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");

/* 업종별 사례 가로 스크롤 (레퍼런스 '숏폼 영상' 줄 형식)
   - 손가락·트랙패드로 넘기면 카드 단위로 멈춤(scroll-snap), 포커스 후 방향키로도 이동
   - 업종 버튼을 누르면 해당 카드로 이동하고, 넘기는 동안에는 보이는 카드의 버튼이 켜짐
   - 데스크톱은 좌우 화살표 제공 (넘칠 게 없을 만큼 화면이 넓으면 숨김) */
export default function CaseScroller({ labels, label, children, className = "" }: CaseScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  // 버튼으로 이동 중에는 스크롤 위치로 활성 카드를 다시 계산하지 않음 (끝 카드 근처에서 버튼과 어긋나지 않게)
  const programmatic = useRef(false);
  const settleTimer = useRef(0);
  const [active, setActive] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false, overflow: true });

  const release = useCallback((ms: number) => {
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      programmatic.current = false;
    }, ms);
  }, []);

  // 업종 버튼: 해당 카드로 바로 이동하고 그 버튼을 켠다
  const go = useCallback(
    (index: number) => {
      const card = listRef.current?.children[index];
      if (!(card instanceof HTMLElement)) return;
      programmatic.current = true;
      release(900);
      setActive(index);
      card.scrollIntoView({ behavior: behavior(), block: "nearest", inline: "start" });
    },
    [release],
  );

  // 화살표: 카드 한 장만큼 넘기고, 켜지는 버튼은 스크롤 위치를 따라감
  const step = (dir: 1 | -1) => {
    const scroller = scrollerRef.current;
    const list = listRef.current;
    const first = list?.children[0];
    if (!scroller || !list || !(first instanceof HTMLElement)) return;
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    scroller.scrollBy({ left: dir * (first.offsetWidth + gap), behavior: behavior() });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    const list = listRef.current;
    if (!scroller || !list) return;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const x = scroller.scrollLeft;
      const max = scroller.scrollWidth - scroller.clientWidth;
      const next = { start: x <= 2, end: x >= max - 2, overflow: max > 2 };
      setEdge((prev) => (prev.start === next.start && prev.end === next.end && prev.overflow === next.overflow ? prev : next));
      if (programmatic.current) return;

      const cards = Array.from(list.children) as HTMLElement[];
      if (!cards.length) return;
      if (next.overflow && next.end) {
        setActive(cards.length - 1);
        return;
      }
      const anchor = x + (parseFloat(getComputedStyle(scroller).scrollPaddingLeft) || 0);
      let nearest = 0;
      cards.forEach((card, i) => {
        if (Math.abs(card.offsetLeft - anchor) < Math.abs(cards[nearest].offsetLeft - anchor)) nearest = i;
      });
      setActive(nearest);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const onScroll = () => {
      if (programmatic.current) release(160);
      schedule();
    };

    schedule();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer.current);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
    };
  }, [release]);

  const arrow = "hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-g100 text-ink transition-colors hover:bg-g200 disabled:cursor-default disabled:opacity-35 disabled:hover:bg-g100 md:flex";

  return (
    <div className={className}>
      <div className="wrap flex items-center justify-center gap-3 lg:gap-5">
        {edge.overflow && (
          <button type="button" onClick={() => step(-1)} disabled={edge.start} aria-label="이전 사례" className={arrow}>
            <ChevronIcon className="h-5 w-5 rotate-180" />
          </button>
        )}
        <ul className="flex flex-wrap justify-center gap-2" aria-label="업종 바로가기">
          {labels.map((name, i) => (
            <li key={name}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === active ? "true" : undefined}
                className={`chip transition-colors duration-300 ${i === active ? "bg-brand text-white" : "hover:bg-g200 hover:text-ink"}`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
        {edge.overflow && (
          <button type="button" onClick={() => step(1)} disabled={edge.end} aria-label="다음 사례" className={arrow}>
            <ChevronIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={`no-scrollbar relative mt-8 snap-x snap-mandatory overflow-x-auto overscroll-x-contain sm:mt-10 ${SNAP_PAD}`}
      >
        <ul ref={listRef} className={`flex w-max gap-4 pb-1 lg:gap-6 ${EDGE_PAD}`}>
          {children}
        </ul>
      </div>
    </div>
  );
}
