/* 3D-style SVG illustrations for sections */

export function IllustChart({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background card */}
      <rect x="20" y="20" width="360" height="260" rx="24" fill="white" filter="url(#shadow1)" />
      {/* Chart bars with 3D effect */}
      <defs>
        <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#2563eb" /></linearGradient>
        <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient>
        <linearGradient id="bar3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#93c5fd" /><stop offset="100%" stopColor="#60a5fa" /></linearGradient>
        <linearGradient id="line1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#fb923c" /></linearGradient>
        <filter id="shadow1"><feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.08" /></filter>
        <filter id="shadow2"><feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1" /></filter>
      </defs>
      {/* Grid lines */}
      <line x1="60" y1="80" x2="360" y2="80" stroke="#f1f5f9" strokeWidth="1" />
      <line x1="60" y1="130" x2="360" y2="130" stroke="#f1f5f9" strokeWidth="1" />
      <line x1="60" y1="180" x2="360" y2="180" stroke="#f1f5f9" strokeWidth="1" />
      {/* Bars */}
      <rect x="80" y="100" width="32" height="130" rx="6" fill="url(#bar3)" />
      <rect x="130" y="80" width="32" height="150" rx="6" fill="url(#bar2)" />
      <rect x="180" y="120" width="32" height="110" rx="6" fill="url(#bar1)" />
      <rect x="230" y="70" width="32" height="160" rx="6" fill="url(#bar2)" />
      <rect x="280" y="55" width="32" height="175" rx="6" fill="url(#bar1)" />
      <rect x="330" y="45" width="32" height="185" rx="6" fill="url(#bar1)" />
      {/* Trend line */}
      <path d="M96 95 L146 75 L196 115 L246 65 L296 50 L346 40" stroke="url(#line1)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="346" cy="40" r="5" fill="#f97316" />
      {/* Floating stat card */}
      <g filter="url(#shadow2)">
        <rect x="270" y="200" width="110" height="60" rx="12" fill="white" />
        <text x="285" y="222" fill="#94a3b8" fontSize="9" fontWeight="600">전환율</text>
        <text x="285" y="245" fill="#2563eb" fontSize="20" fontWeight="800">+32.8%</text>
      </g>
    </svg>
  );
}

export function IllustTarget({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#dbeafe" /><stop offset="100%" stopColor="#bfdbfe" /></linearGradient>
        <linearGradient id="ring2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#93c5fd" /><stop offset="100%" stopColor="#60a5fa" /></linearGradient>
        <linearGradient id="ring3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#2563eb" /></linearGradient>
        <filter id="ts"><feDropShadow dx="0" dy="6" stdDeviation="12" floodOpacity="0.1" /></filter>
      </defs>
      <circle cx="150" cy="150" r="130" fill="url(#ring1)" opacity="0.5" />
      <circle cx="150" cy="150" r="95" fill="url(#ring2)" opacity="0.3" />
      <circle cx="150" cy="150" r="60" fill="url(#ring3)" opacity="0.7" />
      <circle cx="150" cy="150" r="20" fill="white" />
      {/* Arrow hitting center */}
      <g filter="url(#ts)">
        <line x1="230" y1="70" x2="160" y2="140" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
        <polygon points="155,145 165,135 175,155" fill="#f97316" />
      </g>
      {/* Floating badges */}
      <g filter="url(#ts)">
        <rect x="10" y="60" width="90" height="36" rx="18" fill="white" />
        <circle cx="30" cy="78" r="8" fill="#22c55e" opacity="0.2" />
        <circle cx="30" cy="78" r="4" fill="#22c55e" />
        <text x="44" y="82" fill="#334155" fontSize="10" fontWeight="600">업종 맞춤</text>
      </g>
      <g filter="url(#ts)">
        <rect x="200" y="220" width="90" height="36" rx="18" fill="white" />
        <circle cx="220" cy="238" r="8" fill="#f97316" opacity="0.2" />
        <circle cx="220" cy="238" r="4" fill="#f97316" />
        <text x="234" y="242" fill="#334155" fontSize="10" fontWeight="600">전환 중심</text>
      </g>
    </svg>
  );
}

export function IllustProcess({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="step" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#1d4ed8" /></linearGradient>
        <filter id="ss"><feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" /></filter>
      </defs>
      {/* Connection line */}
      <line x1="60" y1="50" x2="440" y2="50" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 4" />
      {/* Steps */}
      {[50, 145, 240, 335, 430].map((x, i) => (
        <g key={i} filter="url(#ss)">
          <circle cx={x} cy={50} r={28} fill="white" />
          <circle cx={x} cy={50} r={20} fill="url(#step)" />
          <text x={x} y={55} textAnchor="middle" fill="white" fontSize="12" fontWeight="700">{i + 1}</text>
        </g>
      ))}
    </svg>
  );
}

export function IllustPhone({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phoneBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f8fafc" /><stop offset="100%" stopColor="#f1f5f9" /></linearGradient>
        <filter id="ps"><feDropShadow dx="0" dy="12" stdDeviation="20" floodOpacity="0.12" /></filter>
        <clipPath id="screen"><rect x="14" y="40" width="172" height="300" rx="4" /></clipPath>
      </defs>
      {/* Phone body */}
      <g filter="url(#ps)">
        <rect x="4" y="4" width="192" height="372" rx="28" fill="#1e293b" />
        <rect x="10" y="10" width="180" height="360" rx="24" fill="white" />
        {/* Notch */}
        <rect x="65" y="14" width="70" height="20" rx="10" fill="#1e293b" />
        {/* Screen area */}
        <rect x="14" y="40" width="172" height="300" rx="4" fill="url(#phoneBg)" />
        {/* Screen content - mock UI */}
        <g clipPath="url(#screen)">
          <rect x="24" y="55" width="100" height="10" rx="5" fill="#e2e8f0" />
          <rect x="24" y="75" width="152" height="60" rx="8" fill="#2563eb" opacity="0.1" />
          <rect x="34" y="85" width="80" height="8" rx="4" fill="#2563eb" opacity="0.4" />
          <rect x="34" y="100" width="60" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
          <rect x="34" y="115" width="40" height="12" rx="6" fill="#2563eb" />
          {/* Cards */}
          <rect x="24" y="150" width="72" height="50" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="104" y="150" width="72" height="50" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="24" y="210" width="72" height="50" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="104" y="210" width="72" height="50" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          {/* Bottom nav */}
          <rect x="14" y="300" width="172" height="40" fill="white" />
          <circle cx="60" cy="320" r="4" fill="#94a3b8" />
          <circle cx="100" cy="320" r="4" fill="#2563eb" />
          <circle cx="140" cy="320" r="4" fill="#94a3b8" />
        </g>
        {/* Home indicator */}
        <rect x="70" y="350" width="60" height="4" rx="2" fill="#cbd5e1" />
      </g>
    </svg>
  );
}

export function IllustLaptop({ className = "w-full h-auto" }: { className?: string }) {
  const donutR = 16;
  const donutC = 2 * Math.PI * donutR;
  const donutSegs = [
    { c: "#3b82f6", v: 28, label: "네이버" },
    { c: "#a855f7", v: 22, label: "메타" },
    { c: "#facc15", v: 18, label: "카카오" },
    { c: "#22c55e", v: 14, label: "구글" },
    { c: "#ef4444", v: 12, label: "유튜브" },
    { c: "#64748b", v: 6, label: "기타" },
  ];
  let donutOffset = 0;
  const donutPaths = donutSegs.map((s, i) => {
    const len = (s.v / 100) * donutC;
    const el = (
      <circle
        key={i}
        r={donutR}
        fill="none"
        stroke={s.c}
        strokeWidth="6"
        strokeDasharray={`${len} ${donutC - len}`}
        strokeDashoffset={-donutOffset}
        transform="rotate(-90)"
      />
    );
    donutOffset += len;
    return el;
  });

  return (
    <svg className={className} viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lpHalo" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#1e3a8a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lpBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id="lpScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1c36" />
          <stop offset="100%" stopColor="#060f1f" />
        </linearGradient>
        <linearGradient id="lpLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="lpArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lpHinge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0a0f1c" />
        </linearGradient>
        <filter id="lpShadow"><feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#000" floodOpacity="0.5" /></filter>
        <filter id="lpScrGlow"><feGaussianBlur stdDeviation="4" /></filter>
      </defs>

      {/* Halo / 배경 글로우 */}
      <ellipse cx="240" cy="180" rx="240" ry="170" fill="url(#lpHalo)" />

      {/* 장식: 곡선 (좌/우) */}
      <g stroke="#60a5fa" strokeWidth="0.8" fill="none" opacity="0.3">
        <path d="M 10 250 Q 80 180 170 200" strokeDasharray="3 3" />
        <path d="M 470 260 Q 400 200 310 215" strokeDasharray="3 3" />
        <path d="M 20 200 Q 100 230 180 220" strokeDasharray="2 4" opacity="0.5" />
      </g>

      {/* 장식: 떠있는 점들 */}
      <g>
        <circle cx="60" cy="100" r="2" fill="#60a5fa" opacity="0.7" />
        <circle cx="420" cy="120" r="2" fill="#60a5fa" opacity="0.7" />
        <circle cx="30" cy="180" r="1.5" fill="#93c5fd" opacity="0.6" />
        <circle cx="450" cy="200" r="1.5" fill="#93c5fd" opacity="0.6" />
        <circle cx="90" cy="50" r="1.2" fill="#60a5fa" opacity="0.4" />
        <circle cx="400" cy="60" r="1.2" fill="#60a5fa" opacity="0.4" />
      </g>

      {/* 노트북 그림자 */}
      <ellipse cx="240" cy="310" rx="200" ry="10" fill="#000" opacity="0.4" />

      {/* === 노트북 본체 === */}
      <g filter="url(#lpShadow)">
        {/* 스크린 외곽 베젤 */}
        <rect x="60" y="20" width="360" height="240" rx="10" fill="url(#lpBody)" />
        {/* 내부 검정 베젤 */}
        <rect x="68" y="28" width="344" height="224" rx="4" fill="#000" />
        {/* 실제 스크린 */}
        <rect x="70" y="30" width="340" height="220" rx="3" fill="url(#lpScreen)" />

        {/* 스크린 글로우 (안쪽 빛) */}
        <rect x="70" y="30" width="340" height="60" rx="3" fill="#3b82f6" opacity="0.06" />

        {/* === 사이드바 === */}
        <rect x="70" y="30" width="28" height="220" fill="#081428" />
        <line x1="98" y1="30" x2="98" y2="250" stroke="#1e3a5f" strokeWidth="0.4" />
        {/* 사이드바 로고 */}
        <circle cx="84" cy="44" r="5" fill="#3b82f6" />
        <circle cx="84" cy="44" r="2.5" fill="#fff" />
        {/* 사이드바 메뉴 아이콘 (6개) */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect
              x="76"
              y={66 + i * 22}
              width="16"
              height="14"
              rx="2"
              fill={i === 0 ? "#3b82f6" : "#0f2a4d"}
              opacity={i === 0 ? 1 : 0.6}
            />
            <circle cx="84" cy={73 + i * 22} r="2.5" fill={i === 0 ? "#fff" : "#3b82f6"} opacity={i === 0 ? 1 : 0.5} />
          </g>
        ))}

        {/* === 헤더 우상단: 기간 설정 === */}
        <text x="345" y="50" fill="#64748b" fontSize="6" fontFamily="ui-sans-serif, system-ui">기간 설정</text>
        <rect x="370" y="42" width="34" height="11" rx="2" fill="#0f2a4d" stroke="#1e3a5f" strokeWidth="0.3" />
        <text x="374" y="50" fill="#cbd5e1" fontSize="5.5" fontFamily="ui-sans-serif, system-ui">최근 30일</text>
        <polygon points="398,46.5 402,46.5 400,49.5" fill="#cbd5e1" />

        {/* === Performance Overview === */}
        <text x="108" y="55" fill="#fff" fontSize="8" fontWeight="700" fontFamily="ui-sans-serif, system-ui">Performance Overview</text>

        {/* 4 KPI 카드 */}
        {[
          { x: 108, label: "총 전환", value: "128", delta: "+15.4%", up: true },
          { x: 184, label: "전환수", value: "3,245", delta: "+10.2%", up: true },
          { x: 260, label: "광고비", value: "₩24.7M", delta: "-6.7%", up: false },
          { x: 336, label: "ROAS", value: "320%", delta: "+15.2%", up: true },
        ].map((k) => (
          <g key={k.x}>
            <rect x={k.x} y={62} width="70" height="40" rx="3" fill="#0a1c38" stroke="#1e3a5f" strokeWidth="0.3" />
            <text x={k.x + 6} y={73} fill="#94a3b8" fontSize="5.5" fontFamily="ui-sans-serif, system-ui">{k.label}</text>
            <text x={k.x + 6} y={89} fill="#fff" fontSize="10" fontWeight="700" fontFamily="ui-sans-serif, system-ui">{k.value}</text>
            <text x={k.x + 6} y={98} fill={k.up ? "#60a5fa" : "#f87171"} fontSize="4.5" fontFamily="ui-sans-serif, system-ui">{k.delta}</text>
          </g>
        ))}

        {/* === Performance Trend (라인 차트) === */}
        <rect x="108" y="112" width="174" height="128" rx="3" fill="#0a1c38" stroke="#1e3a5f" strokeWidth="0.3" />
        <text x="114" y="124" fill="#fff" fontSize="6.5" fontWeight="700" fontFamily="ui-sans-serif, system-ui">Performance Trend</text>
        {/* 그리드 라인 (수평) */}
        {[150, 170, 190, 210].map((y) => (
          <line key={y} x1="118" x2="276" y1={y} y2={y} stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="1 2" />
        ))}
        {/* 영역 fill */}
        <path
          d="M 122 190 L 142 180 L 162 198 L 182 175 L 202 188 L 222 165 L 242 180 L 262 152 L 272 168 L 272 226 L 122 226 Z"
          fill="url(#lpArea)"
        />
        {/* 라인 */}
        <path
          d="M 122 190 L 142 180 L 162 198 L 182 175 L 202 188 L 222 165 L 242 180 L 262 152 L 272 168"
          stroke="url(#lpLine)"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 라인 점 */}
        {[
          [122, 190], [142, 180], [162, 198], [182, 175], [202, 188], [222, 165], [242, 180], [262, 152], [272, 168],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.4" fill="#0a1c38" stroke="#60a5fa" strokeWidth="1" />
        ))}
        {/* 피크 강조 점 + 버블 */}
        <circle cx="262" cy="152" r="2.6" fill="#fff" stroke="#3b82f6" strokeWidth="1.2" />
        <rect x="246" y="138" width="28" height="10" rx="2" fill="#3b82f6" />
        <text x="249" y="145" fill="#fff" fontSize="5.5" fontWeight="700" fontFamily="ui-sans-serif, system-ui">+15.2%</text>
        {/* x축 라벨 */}
        {["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월"].map((l, i) => (
          <text key={l} x={122 + i * 20} y={234} fill="#475569" fontSize="4" fontFamily="ui-sans-serif, system-ui">{l}</text>
        ))}

        {/* === Channel Performance (도넛) === */}
        <rect x="290" y="112" width="118" height="128" rx="3" fill="#0a1c38" stroke="#1e3a5f" strokeWidth="0.3" />
        <text x="296" y="124" fill="#fff" fontSize="6.5" fontWeight="700" fontFamily="ui-sans-serif, system-ui">Channel Performance</text>
        {/* 도넛 */}
        <g transform="translate(320, 180)">
          {donutPaths}
          <circle r="10" fill="#0a1c38" />
        </g>
        {/* Legend */}
        {donutSegs.map((s, i) => (
          <g key={s.label}>
            <circle cx="357" cy={148 + i * 12} r="2" fill={s.c} />
            <text x="362" y={150.5 + i * 12} fill="#cbd5e1" fontSize="5" fontFamily="ui-sans-serif, system-ui">{s.label}</text>
          </g>
        ))}
      </g>

      {/* === 노트북 베이스 (힌지/하판) === */}
      <g filter="url(#lpShadow)">
        <path
          d="M 24 260 L 60 260 L 78 280 L 402 280 L 420 260 L 456 260 L 466 292 L 14 292 Z"
          fill="url(#lpHinge)"
        />
        {/* 터치패드 영역 표시 */}
        <rect x="196" y="282" width="88" height="3" rx="1.5" fill="#000" opacity="0.6" />
        {/* 카메라/노치 */}
        <circle cx="240" cy="25" r="0.8" fill="#1e3a5f" />
      </g>
    </svg>
  );
}

export function IllustRocket({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rk1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#1d4ed8" /></linearGradient>
        <linearGradient id="rk2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#fbbf24" /></linearGradient>
        <filter id="rs"><feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12" /></filter>
      </defs>
      {/* Orbit circles */}
      <circle cx="100" cy="100" r="80" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 4" />
      <circle cx="100" cy="100" r="55" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 6" />
      {/* Rocket body */}
      <g filter="url(#rs)" transform="translate(70,40) rotate(30,30,60)">
        <ellipse cx="30" cy="30" rx="16" ry="28" fill="url(#rk1)" />
        <ellipse cx="30" cy="24" rx="10" ry="6" fill="white" opacity="0.3" />
        {/* Fins */}
        <path d="M14 45 L8 60 L20 50 Z" fill="#60a5fa" />
        <path d="M46 45 L52 60 L40 50 Z" fill="#60a5fa" />
        {/* Fire */}
        <ellipse cx="30" cy="60" rx="8" ry="14" fill="url(#rk2)" opacity="0.8" />
        <ellipse cx="30" cy="62" rx="4" ry="8" fill="#fef3c7" />
      </g>
      {/* Floating dots */}
      <circle cx="40" cy="50" r="3" fill="#2563eb" opacity="0.2" />
      <circle cx="160" cy="70" r="4" fill="#f97316" opacity="0.2" />
      <circle cx="150" cy="150" r="3" fill="#2563eb" opacity="0.15" />
      <circle cx="50" cy="160" r="5" fill="#60a5fa" opacity="0.1" />
    </svg>
  );
}

export function IllustPieChart({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc"><feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08" /></filter>
      </defs>
      <g filter="url(#pc)">
        {/* Pie segments */}
        <circle cx="100" cy="100" r="70" fill="#dbeafe" />
        <path d="M100 100 L100 30 A70 70 0 0 1 160.62 65 Z" fill="#2563eb" />
        <path d="M100 100 L160.62 65 A70 70 0 0 1 145 155 Z" fill="#60a5fa" />
        <path d="M100 100 L145 155 A70 70 0 0 1 55 155 Z" fill="#93c5fd" />
        {/* Center hole */}
        <circle cx="100" cy="100" r="35" fill="white" />
        <text x="100" y="96" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="800">68%</text>
        <text x="100" y="112" textAnchor="middle" fill="#94a3b8" fontSize="8">전환율</text>
      </g>
      {/* Legend dots */}
      <circle cx="30" cy="180" r="4" fill="#2563eb" />
      <text x="40" y="184" fill="#64748b" fontSize="8">검색</text>
      <circle cx="80" cy="180" r="4" fill="#60a5fa" />
      <text x="90" y="184" fill="#64748b" fontSize="8">SNS</text>
      <circle cx="130" cy="180" r="4" fill="#93c5fd" />
      <text x="140" y="184" fill="#64748b" fontSize="8">리타겟팅</text>
    </svg>
  );
}

export function Illust3DArrow({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#1d4ed8" /></linearGradient>
      </defs>
      <path d="M5 12h11M12 5l7 7-7 7" stroke="url(#arr)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
