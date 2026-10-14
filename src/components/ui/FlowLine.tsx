type FlowLineProps = {
  className?: string;
  /** light: 흰 바탕용(진한 선) / dark: 네이비 바탕용(밝은 선) */
  tone?: "light" | "dark";
  /** load: 페이지 로드 때 그림 / view: 화면에 들어올 때 그림 / none: 정지 */
  draw?: "load" | "view" | "none";
};

// 로고 스우시처럼 왼쪽 아래에서 오른쪽 위로 휘어 오르는 세 겹의 선
const PATHS = [
  { d: "M-40 470 C 260 470, 520 430, 760 290 S 1110 70, 1260 40", width: 46, light: "#13438c", dark: "rgba(141,184,255,0.13)", delay: 0 },
  { d: "M-40 520 C 300 515, 600 470, 820 330 S 1150 120, 1260 92", width: 22, light: "#2563eb", dark: "rgba(141,184,255,0.11)", delay: 0.12 },
  { d: "M-40 560 C 330 552, 650 506, 870 370 S 1170 168, 1260 140", width: 8, light: "#b0b8c1", dark: "rgba(255,255,255,0.09)", delay: 0.24 },
];

/* 여울디앤씨 흐름 선 — "유입부터 상담 전환까지 이어지는 흐름"을 로고 스우시 모양으로 */
export default function FlowLine({ className = "", tone = "light", draw = "view" }: FlowLineProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`${draw === "load" ? "flow-load" : ""} ${className}`}
      {...(draw === "view" ? { "data-draw": "" } : {})}
    >
      {PATHS.map((p) => (
        <path
          key={p.width}
          d={p.d}
          pathLength={1}
          className="flow-path"
          stroke={tone === "light" ? p.light : p.dark}
          strokeWidth={p.width}
          strokeLinecap="round"
          strokeOpacity={tone === "light" ? (p.width > 40 ? 0.1 : 0.12) : 1}
          style={{ "--d": `${p.delay + (draw === "load" ? 0.15 : 0)}s` } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
