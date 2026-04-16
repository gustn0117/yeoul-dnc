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
