"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type TimelineFillProps = {
  children: ReactNode;
  className?: string;
};

// 레퍼런스와 같은 채움 구간: 첫 번호가 화면 높이 66%에 오면 시작, 마지막 번호가 24%에 오면 끝
const TIP_START = 66;
const TIP_END = 24;

/* 진행절차 '흐름 타임라인'의 물결선 채움.
   선은 [이 단계 번호 → 다음 단계 번호] 조각(data-fill)으로 나뉘어 있고, 조각마다 위에서 아래로 드러난다(clip-path). 각 번호에 채움 끝이 닿는 화면 높이를
   선 전체에서의 위치에 비례해 66% → 24%로 정하고, 조각마다 그 두 높이 사이에서 0→1로 차오르게 해
   끝이 끊김 없이 이어진다. 채움 끝이 닿은 번호(data-node)는 켜진다.
   움직임 줄이기 설정이면 처음부터 모두 채운 상태로 둔다. */
export default function TimelineFill({ children, className = "" }: TimelineFillProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const fills = Array.from(root.querySelectorAll<HTMLElement>("[data-fill]"));
      const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-node]"));
      if (!nodes.length) return;
      const clearNodes = () => nodes.forEach((node) => node.classList.remove("is-on"));

      // i번째 번호에 채움 끝이 닿는 순간의 화면 높이(%) — 레이아웃이 바뀌면 refresh 때 다시 계산됨
      const centerY = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2;
      };
      const tipAt = (i: number) => {
        const first = centerY(nodes[0]);
        const span = centerY(nodes[nodes.length - 1]) - first || 1;
        return TIP_START - (TIP_START - TIP_END) * ((centerY(nodes[i]) - first) / span);
      };

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        fills.forEach((fill, i) => {
          gsap.fromTo(
            fill,
            { clipPath: "inset(0% 0% 100% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: {
                trigger: fill.parentElement ?? fill,
                start: () => `top ${tipAt(i)}%`,
                end: () => `bottom ${tipAt(i + 1)}%`,
                scrub: 0.25,
              },
            },
          );
        });
        nodes.forEach((node, i) => {
          // 한번 켜진 번호는 다시 위로 올라갈 때만 꺼지도록 끝을 최대 스크롤 너머로 둔다
          // (gsap 3.15에서 end: "max"는 트리거 요소가 있으면 "bottom top"으로 바뀌어 버림)
          ScrollTrigger.create({
            trigger: node,
            start: () => `center ${tipAt(i)}%`,
            end: () => ScrollTrigger.maxScroll(window) + 1,
            toggleClass: { targets: node, className: "is-on" },
          });
        });
        return clearNodes;
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(fills, { clipPath: "inset(0% 0% 0% 0%)" });
        nodes.forEach((node) => node.classList.add("is-on"));
        return clearNodes;
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
