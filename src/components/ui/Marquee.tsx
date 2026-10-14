import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** 한 바퀴(목록 1회분) 도는 데 걸리는 시간(초) */
  duration?: number;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
};

/* 같은 목록을 두 번 이어 붙여 -50%까지 이동하는 무한 마퀴.
   복제본은 inert로 스크린리더·탭 이동에서 제외. 호버/포커스 시 일시정지. */
export default function Marquee({ children, duration = 40, reverse = false, className = "", trackClassName = "" }: MarqueeProps) {
  const style = {
    "--marquee-duration": `${duration}s`,
    "--marquee-direction": reverse ? "reverse" : "normal",
  } as CSSProperties;

  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track" style={style}>
        <div className={`flex shrink-0 ${trackClassName}`}>{children}</div>
        <div className={`flex shrink-0 ${trackClassName}`} aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
