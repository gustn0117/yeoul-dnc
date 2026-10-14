import type { CSSProperties, ReactNode } from "react";

type SectionHeadProps = {
  label?: string;
  title: ReactNode;
  desc?: ReactNode;
  /** center: 가운데 / left: 왼쪽 / split: 제목은 왼쪽, 설명은 오른쪽 아래 (데스크톱) */
  align?: "center" | "left" | "split";
  /** h1을 써야 하는 위치(서브 히어로 바로 아래 등)가 아니면 h2 */
  as?: "h1" | "h2";
  /** 0515 피드백(모바일은 큰 제목만): 모바일에서 설명 숨기기 */
  hideDescMobile?: boolean;
  /** 제목이 긴 섹션용 넓은 폭 (max-w-4xl) */
  wide?: boolean;
  /** dark: 네이비 바탕 위 */
  tone?: "light" | "dark";
  className?: string;
};

const delay = (s: string) => ({ "--reveal-delay": s }) as CSSProperties;

/* 섹션 머리: 선+라벨 → 굵은 제목 → 짧은 설명 */
export default function SectionHead({
  label,
  title,
  desc,
  align = "center",
  as: Tag = "h2",
  hideDescMobile = false,
  wide = false,
  tone = "light",
  className = "",
}: SectionHeadProps) {
  const dark = tone === "dark";
  const labelEl = label && (
    // 기존 사이트의 '선 + 라벨' 머리표를 이어받음
    <span className={`inline-flex items-center gap-2.5 text-[15px] font-bold tracking-[-0.01em] ${dark ? "text-[#8db8ff]" : "text-brand"}`} data-reveal>
      <span className={`h-0.5 w-6 rounded-full ${dark ? "bg-[#8db8ff]" : "bg-accent"}`} aria-hidden="true" />
      {label}
    </span>
  );
  const titleEl = (
    <Tag className={`${label ? "mt-4" : ""} text-h2 ${dark ? "text-white" : ""}`} data-reveal style={delay("0.06s")}>
      {title}
    </Tag>
  );
  const descEl = desc && (
    <p className={`text-lead ${dark ? "text-white/72" : "text-g700"} ${hideDescMobile ? "max-sm:hidden" : ""}`} data-reveal style={delay("0.12s")}>
      {desc}
    </p>
  );

  if (align === "split") {
    return (
      <div className={`grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16 ${className}`}>
        <div className="flex flex-col items-start">
          {labelEl}
          {titleEl}
        </div>
        {descEl && <div className="lg:pb-2 [&>p]:max-w-md">{descEl}</div>}
      </div>
    );
  }

  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start"} flex ${wide ? "max-w-4xl" : "max-w-3xl"} flex-col ${className}`}>
      {labelEl}
      {titleEl}
      {descEl && <div className="mt-5">{descEl}</div>}
    </div>
  );
}
