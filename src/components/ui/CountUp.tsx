"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** ms */
  duration?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/* 화면에 들어오면 0 → to로 올라가는 숫자.
   서버 렌더에는 최종값이 들어가고(검색·JS 미동작 대비), 움직임 줄이기 설정이면 그대로 둔다.
   매 프레임 리렌더를 피하려고 텍스트 노드를 직접 갱신. */
export default function CountUp({ to, decimals = 0, prefix = "", suffix = "", duration = 1400, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const render = (n: number) => { el.textContent = `${prefix}${n.toFixed(decimals)}${suffix}`; };
    render(0);

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          render(to * easeOutCubic(t));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      render(to);
    };
  }, [to, decimals, prefix, suffix, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {format(to)}
    </span>
  );
}
