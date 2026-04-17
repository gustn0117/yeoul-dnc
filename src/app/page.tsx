import Link from "next/link";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import FAQSection from "@/components/FAQSection";
import { IllustChart, IllustTarget, IllustPhone } from "@/components/Illustrations";
import {
  IconKakao, IconSearch, IconMeta, IconYoutube, IconGlobe, IconMail, IconCarrot, IconBuilding,
  IconTarget, IconLayers, IconBarChart, IconRefresh, IconCheck, IconArrowRight, IconZap,
  IconClipboard, IconCompass, IconImage, IconSettings, IconPlay,
} from "@/components/Icons";

const channels = [
  { name: "메타 광고", purpose: "관심사 기반 타겟팅과 리드 수집", logos: ["instagram", "facebook"], color: "from-blue-500 to-indigo-600" },
  { name: "네이버 광고", purpose: "검색 수요 기반 문의 확보", logos: ["naver"], color: "from-green-500 to-emerald-600" },
  { name: "카카오 광고", purpose: "상담 유입과 재접촉 운영", logos: ["kakaotalk"], color: "from-yellow-400 to-amber-500" },
  { name: "유튜브 광고", purpose: "브랜드 인지도와 신뢰 형성", logos: ["youtube"], color: "from-red-500 to-rose-600" },
  { name: "구글 광고", purpose: "검색+디스플레이+리타겟팅 확장", logos: ["google", "google-ads"], color: "from-sky-500 to-cyan-600" },
  { name: "문자 마케팅", purpose: "기존 고객 재접촉 및 안내", logos: [], Icon: IconMail, color: "from-violet-500 to-purple-600" },
  { name: "당근/지역 광고", purpose: "생활권 고객 유입", logos: ["danggeun"], color: "from-orange-400 to-orange-600" },
  { name: "부동산 특화", purpose: "분양 임대 실수요 타겟", logos: [], Icon: IconBuilding, color: "from-teal-500 to-teal-600" },
];

const whyUs = [
  { title: "업종 맞춤\n채널 제안", desc: "업종과 목적에 맞는 채널만 선별해 제안합니다. 불필요한 채널을 권유하지 않습니다.", Icon: IconTarget, color: "from-blue-500 to-indigo-600", light: "from-blue-50 to-indigo-50", text: "text-blue-600" },
  { title: "문의 전환\n중심 운영", desc: "노출이 아니라 실제 문의와 상담 전환을 설계합니다. 클릭만 많은 광고는 의미 없습니다.", Icon: IconZap, color: "from-amber-500 to-orange-500", light: "from-amber-50 to-orange-50", text: "text-amber-600" },
  { title: "소재 제작부터\n운영까지", desc: "광고 소재 제작, 세팅, 운영, 최적화까지 한 번에 진행합니다.", Icon: IconLayers, color: "from-violet-500 to-purple-600", light: "from-violet-50 to-purple-50", text: "text-violet-600" },
  { title: "데이터 기반\n최적화", desc: "반응 데이터를 분석하고, 효율이 나오는 방향으로 지속적으로 보완합니다.", Icon: IconBarChart, color: "from-emerald-500 to-teal-600", light: "from-emerald-50 to-teal-50", text: "text-emerald-600" },
];

const processSteps = [
  { title: "문의 접수", sub: "업종/예산/목표 확인", Icon: IconClipboard },
  { title: "광고 방향 제안", sub: "채널과 전략 수립", Icon: IconCompass },
  { title: "소재 제작·세팅", sub: "이미지/영상/문구 준비", Icon: IconImage },
  { title: "광고 운영", sub: "집행 및 효율 최적화", Icon: IconSettings },
  { title: "성과 체크·보완", sub: "결과 확인/보완/연결", Icon: IconPlay },
];

const caseStudies = [
  { industry: "분양", channel: "메타 리드폼 + 문자 후속", desc: "DB 유입과 재접촉 구조 중심", color: "bg-blue-500" },
  { industry: "병원", channel: "네이버 검색형 + 메타 노출형", desc: "예약 문의와 신뢰 형성 중심", color: "bg-emerald-500" },
  { industry: "지역 자영업", channel: "당근 + 메타 생활권 타겟팅", desc: "생활권 고객 유입 중심", color: "bg-orange-500" },
];

export default function Home() {
  return (
    <>
      {/* ━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#e8f0ff] via-[#f3f7ff] to-[#fafcff]">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Decorative blurs */}
        <div className="absolute -top-20 right-[10%] w-120 h-120 rounded-full bg-accent-blue/8 blur-[120px]" />
        <div className="absolute bottom-0 left-[5%] w-96 h-96 rounded-full bg-blue-300/15 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4.5rem)]">

            {/* ── Left: copy ── */}
            <div className="lg:col-span-6 py-14 sm:py-20 lg:py-0 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 mb-6 shadow-sm shadow-blue-500/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                <span className="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Online Ad Partner</span>
              </div>

              <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-extrabold leading-hero text-deep-navy tracking-tight mb-5">
                온라인 광고,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 gradient-text">결과</span>
                  <span className="absolute bottom-1 sm:bottom-1.5 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
                </span>
                로 말합니다
              </h1>

              <div className="space-y-2.5 mb-7">
                {["광고비만 쓰고 끝나셨나요?", "문의 없는 광고는 의미 없습니다"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-lg px-3.5 sm:px-4 py-2.5 w-fit border border-slate-100 shadow-sm shadow-blue-500/5">
                    <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-[13px] text-slate-700 font-medium">{t}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-600 mb-8 max-w-sm leading-relaxed">
                <span className="font-semibold text-deep-navy">전환 중심으로 설계된 광고 운영.</span><br />
                불필요한 광고비 지출없이,<br className="hidden sm:inline lg:hidden" />
                {" "}결과가 달라집니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/contact" className="group px-7 py-3.5 bg-linear-to-r from-accent-blue to-blue-600 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-accent-blue/30 transition-all duration-300 flex items-center justify-center sm:justify-start gap-2">
                  상담 신청하기 <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/about" className="px-7 py-3.5 text-sm text-slate-600 font-semibold rounded-xl border border-slate-200 bg-white/60 backdrop-blur-sm hover:border-accent-blue/30 hover:bg-accent-blue/4 hover:text-accent-blue transition-all duration-300 text-center sm:text-left">
                  우리만의 차별점 보기
                </Link>
              </div>

              {/* Media bar - real logos */}
              <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase w-full sm:w-auto">운영 채널</p>
                {["naver", "kakaotalk", "meta", "youtube", "google", "instagram"].map((name) => (
                  <img key={name} src={`/images/logos/${name}.svg`} alt={name} className="h-3.5 sm:h-4 w-auto opacity-50 hover:opacity-100 transition-opacity" />
                ))}
              </div>
            </div>

            {/* ── Right: visual (3D perspective scene) ── */}
            <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center py-16 perspective-1200">
              {/* 3D floor grid (below image) */}
              <div className="absolute bottom-8 left-0 right-0 h-64 floor-grid opacity-50 -z-10" />

              {/* Main image with 3D tilt */}
              <div className="relative w-full max-w-130 preserve-3d" style={{ transform: "rotateY(-8deg) rotateX(4deg)" }}>
                <div className="relative rounded-[28px] overflow-hidden shadow-3d-lg ring-1 ring-white/60">
                  <div className="relative aspect-5/6">
                    <Image
                      src="/images/stock/woman-professional.jpg"
                      alt="온라인 광고 전문가"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-accent-blue/10 via-transparent to-transparent" />
                    {/* Glossy highlight */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.05) 100%)" }} />
                    {/* Top right chart decoration */}
                    <svg className="absolute top-8 right-8 w-28 h-16 opacity-90" viewBox="0 0 120 60" fill="none">
                      <path d="M0 50 Q30 20 60 30 T120 5" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      <circle cx="120" cy="5" r="4" fill="#2563eb" />
                      <circle cx="60" cy="30" r="3" fill="#60a5fa" />
                    </svg>
                  </div>
                </div>

                {/* Floating card: 전환율 (top right, pops forward) */}
                <div
                  className="absolute top-10 -right-10 bg-white rounded-2xl shadow-3d-lg px-4 py-3 border border-blue-100/80 z-20 animate-float backdrop-blur-sm bevel-edge"
                  style={{ transform: "translateZ(60px) rotateY(6deg)", transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/30" style={{ transform: "translateZ(10px)" }}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">전환율</p>
                      <p className="text-xl font-extrabold text-deep-navy leading-tight">+32.8%<span className="text-emerald-500 text-xs font-bold ml-1">↑</span></p>
                    </div>
                  </div>
                </div>

                {/* Floating card: ROAS (middle right) */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -right-16 bg-white rounded-2xl shadow-3d-lg px-4 py-3.5 border border-blue-100/80 z-20 backdrop-blur-sm bevel-edge"
                  style={{ transform: "translateZ(80px) rotateY(8deg)", transformStyle: "preserve-3d", animation: "float 5s ease-in-out infinite 2s" }}
                >
                  <p className="text-[10px] text-slate-400 font-medium mb-1">광고 효율 (ROAS)</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <p className="text-[26px] font-extrabold text-accent-blue leading-none">4.8</p>
                    <p className="text-sm font-bold text-slate-400">배</p>
                  </div>
                  <div className="flex items-end gap-0.75 h-6">
                    {[40, 55, 35, 70, 60, 80, 90].map((h, i) => (
                      <div key={i} className="w-1.5 rounded-t-sm bg-linear-to-t from-accent-blue to-blue-300" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                {/* Floating card: 문의 증가 (bottom left, tilted other way) */}
                <div
                  className="absolute bottom-12 -left-12 bg-white rounded-2xl shadow-3d-lg px-4 py-3 border border-blue-100/80 z-20 backdrop-blur-sm bevel-edge"
                  style={{ transform: "translateZ(50px) rotateY(-8deg)", transformStyle: "preserve-3d", animation: "float 5s ease-in-out infinite 1s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-md shadow-accent-blue/30">
                      <IconTarget className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">문의 증가</p>
                      <p className="text-xl font-extrabold text-deep-navy leading-tight">+56%<span className="text-emerald-500 text-xs font-bold ml-1">↑</span></p>
                    </div>
                  </div>
                </div>

                {/* Decorative rings */}
                <div className="absolute -inset-4 rounded-4xl border border-blue-200/40 -z-10" />
                <div className="absolute -inset-8 rounded-[36px] border border-blue-200/20 -z-10" />
              </div>

              {/* Rotating 3D cube in background */}
              <div className="absolute top-6 left-0 cube-3d opacity-20 -z-10">
                <div className="face front bg-accent-blue/40" />
                <div className="face back bg-accent-blue/40" />
                <div className="face right bg-blue-400/40" />
                <div className="face left bg-blue-400/40" />
                <div className="face top bg-sky-300/40" />
                <div className="face bottom bg-indigo-500/40" />
              </div>

              {/* Background blur */}
              <div className="absolute top-10 right-10 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] -z-10" />
            </div>

            {/* ── Mobile hero visual ── */}
            <div className="lg:hidden pb-14">
              <div className="relative max-w-md mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-blue-900/15 ring-1 ring-white/60">
                  <div className="relative aspect-4/5">
                    <Image
                      src="/images/stock/woman-professional.jpg"
                      alt="온라인 광고 전문가"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-accent-blue/15 via-transparent to-transparent" />
                  </div>
                </div>
                {/* Mobile floating stat */}
                <div className="absolute -bottom-4 -right-2 bg-white rounded-xl shadow-lg shadow-blue-900/15 px-3 py-2 border border-blue-100">
                  <p className="text-[9px] text-slate-400">ROAS</p>
                  <p className="text-base font-extrabold text-accent-blue">4.8배 <span className="text-emerald-500 text-[10px]">↑</span></p>
                </div>
                <div className="absolute -top-4 -left-2 bg-white rounded-xl shadow-lg shadow-blue-900/15 px-3 py-2 border border-blue-100">
                  <p className="text-[9px] text-slate-400">전환율</p>
                  <p className="text-base font-extrabold text-deep-navy">+32.8%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ STATS strip (between hero and WHY) ━━━━━━━━━━━━━ */}
      <section className="relative py-12 sm:py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-50/40 via-white to-amber-50/30" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 perspective-1200">
            {[
              { value: "100+", label: "누적 캠페인", sub: "다양한 업종 운영", icon: <IconBarChart className="w-5 h-5" />, color: "from-blue-500 to-indigo-600" },
              { value: "4.8x", label: "평균 ROAS", sub: "광고비 대비 수익", icon: <IconZap className="w-5 h-5" />, color: "from-emerald-500 to-teal-600" },
              { value: "+56%", label: "문의 증가율", sub: "운영 후 평균치", icon: <IconTarget className="w-5 h-5" />, color: "from-amber-500 to-orange-500" },
              { value: "24h", label: "빠른 응답", sub: "영업일 기준", icon: <IconRefresh className="w-5 h-5" />, color: "from-violet-500 to-purple-600" },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative preserve-3d"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s backwards` }}
              >
                <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-linear-to-br ${s.color} opacity-15 blur-[2px]`} />
                <div
                  className="relative bg-white rounded-2xl p-4 sm:p-5 border border-white shadow-3d overflow-hidden bevel-edge preserve-3d transition-transform duration-500"
                  style={{
                    transform: `perspective(900px) rotateY(${(i - 1.5) * 2}deg) rotateX(2deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-linear-to-br ${s.color} opacity-10 blur-xl`} />
                  <div className="relative flex items-center gap-3 sm:gap-4 preserve-3d">
                    <div className="relative shrink-0" style={{ transform: "translateZ(20px)" }}>
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-linear-to-br ${s.color} opacity-50 blur-[1px]`} />
                      <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center shadow-md text-white bevel-edge`}>
                        {s.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-2xl sm:text-3xl font-black bg-linear-to-br ${s.color} bg-clip-text text-transparent leading-none tracking-tight`} style={{ transform: "translateZ(10px)" }}>{s.value}</p>
                      <p className="text-[12px] sm:text-sm font-bold text-deep-navy mt-1">{s.label}</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400">{s.sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ WHY ━━━━━━━━━━━━━ */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-linear-to-b from-white via-white to-[#f5f9ff] overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">WHY US</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              광고는 많이 하는 것보다,<br />
              <span className="relative inline-block">
                <span className="relative z-10">맞게 하는 것이 더 중요</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto px-2 leading-relaxed">
              여울디앤씨는 업종과 목표에 따라<br className="sm:hidden" />
              {" "}채널을 선별하고,<br className="hidden sm:inline lg:hidden" />
              {" "}문의 전환까지 고려한 구조로 광고를 운영합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 perspective-1200">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="group relative preserve-3d"
                style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
              >
                {/* 3D depth layers */}
                <div className={`absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-linear-to-br ${item.color} opacity-60 blur-[2px]`} />
                <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-linear-to-br ${item.color} opacity-30`} />

                {/* Front card with real 3D tilt */}
                <div
                  className="relative bg-white rounded-2xl p-5 sm:p-7 border border-white shadow-3d overflow-hidden bevel-edge preserve-3d transition-transform duration-500"
                  style={{
                    transform: `perspective(1000px) rotateY(${i % 2 === 0 ? -4 : 4}deg) rotateX(3deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Decorative number */}
                  <div className={`absolute -top-3 -right-3 text-6xl sm:text-7xl font-black bg-linear-to-br ${item.light} bg-clip-text text-transparent opacity-80 select-none leading-none`}>
                    0{i + 1}
                  </div>
                  {/* Gradient corner accent */}
                  <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-linear-to-br ${item.color} opacity-10 blur-2xl`} />

                  <div className="relative preserve-3d">
                    {/* Icon - pops forward in 3D */}
                    <div
                      className="relative w-11 h-11 sm:w-14 sm:h-14 mb-4 sm:mb-5 preserve-3d"
                      style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}
                    >
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl sm:rounded-2xl bg-linear-to-br ${item.color} opacity-60 blur-[1px]`} />
                      <div className={`relative w-full h-full rounded-xl sm:rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg bevel-edge`}>
                        <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-[13px] sm:text-base font-extrabold text-deep-navy mb-1.5 sm:mb-2 whitespace-pre-line leading-tight" style={{ transform: "translateZ(12px)" }}>{item.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed" style={{ transform: "translateZ(6px)" }}>{item.desc}</p>

                    {/* Bottom accent line */}
                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100">
                      <span className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold ${item.text}`}>
                        POINT {String(i + 1).padStart(2, "0")} <IconArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-accent-blue/6 text-accent-blue text-sm font-semibold rounded-xl hover:bg-accent-blue hover:text-white transition-all duration-300">
              무료 상담 받기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ HOW (isometric glowing steps) ━━━━━━━━━━━━━ */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#060e1e]">
        <Image src="/images/stock/dashboard.jpg" alt="" fill className="object-cover opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e] via-[#0a1428] to-[#060e1e]" />
        {/* 3D perspective floor grid */}
        <div className="absolute bottom-0 left-0 right-0 h-96 floor-grid opacity-40" />
        {/* Ceiling grid (inverted) */}
        <div className="absolute top-0 left-0 right-0 h-96 opacity-30" style={{
          backgroundImage: "linear-gradient(to right, rgba(96, 165, 250, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(96, 165, 250, 0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: "perspective(600px) rotateX(-60deg)",
          transformOrigin: "center bottom",
          maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 80%)",
        }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-blue/15 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">HOW WE WORK</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
              상담만 하는 것이 아니라,<br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">실제 실행까지 연결</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
              </span>
              합니다
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto px-2 leading-relaxed">
              문의 접수 후 업종/예산/목표를 정리하고,<br className="sm:hidden" />
              {" "}맞는 채널 제안부터<br className="hidden sm:inline lg:hidden" />
              {" "}소재 제작, 운영/보완까지 한 번에.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="absolute top-[68px] left-[8%] right-[8%] hidden lg:block">
              <div className="relative h-0.5">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent-blue/40 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-sky-300/20 to-transparent blur-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 perspective-1200">
              {processSteps.map((s, i) => (
                <div
                  key={i}
                  className={`relative group preserve-3d ${i === 4 ? "col-span-2 sm:col-span-1 max-w-[calc(50%-8px)] sm:max-w-none mx-auto sm:mx-0" : ""}`}
                  style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
                >
                  {/* 3D depth glow */}
                  <div className="absolute inset-0 translate-y-2 rounded-2xl bg-accent-blue/30 opacity-40 blur-xl group-hover:opacity-70 transition-opacity" />

                  {/* Glass card with 3D tilt alternating */}
                  <div
                    className="relative glass-3d-dark rounded-2xl p-5 sm:p-6 text-center border border-white/10 group-hover:border-accent-blue/40 transition-all duration-500 overflow-hidden bevel-edge preserve-3d"
                    style={{
                      transform: `perspective(800px) rotateY(${(i - 2) * 3}deg) rotateX(3deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-accent-blue/0 via-accent-blue/5 to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Icon - pops forward */}
                    <div
                      className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 preserve-3d"
                      style={{ transform: "translateZ(28px)", transformStyle: "preserve-3d" }}
                    >
                      <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-2xl bg-linear-to-br from-accent-blue to-blue-600 opacity-50 blur-[1px]" />
                      <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-accent-blue/20 to-accent-blue/5 border border-accent-blue/30 group-hover:from-accent-blue group-hover:to-blue-600 flex items-center justify-center transition-all duration-500 shadow-lg shadow-accent-blue/20 bevel-edge">
                        <s.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-blue group-hover:text-white transition-colors duration-300" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-linear-to-br from-white to-slate-200 text-deep-navy text-[10px] font-black flex items-center justify-center shadow-lg">
                        {i + 1}
                      </div>
                    </div>

                    <p className="text-[13px] sm:text-sm font-extrabold text-white mb-1" style={{ transform: "translateZ(12px)" }}>{s.title}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">{s.sub}</p>

                    {/* Bottom accent */}
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="text-[9px] font-bold text-accent-blue tracking-widest">STEP {String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/process" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue/10 hover:bg-accent-blue border border-accent-blue/30 text-sm text-white font-semibold transition-all duration-300">
              진행절차 자세히 보기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ WHAT (isometric channel cards) ━━━━━━━━━━━━━ */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-linear-to-b from-[#f5f9ff] via-white to-[#f0f5ff] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-96 h-96 bg-accent-blue/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">CHANNELS</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              업종과 목적에 따라,<br />
              <span className="relative inline-block">
                <span className="relative z-10">필요한 채널만 선별</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              해 운영합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto px-2 leading-relaxed">
              메타/네이버/카카오/유튜브/구글부터<br className="sm:hidden" />
              {" "}지역/문자/부동산 특화 채널까지<br className="hidden sm:inline lg:hidden" />
              {" "}예산과 목적에 맞게 조합합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 perspective-1200">
            {channels.map((ch, i) => {
              const tiltY = ((i % 4) - 1.5) * 3; // staggered tilt across row
              return (
              <Link
                key={ch.name}
                href="/services"
                className="group relative preserve-3d"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.06}s backwards` }}
              >
                {/* Isometric depth layers */}
                <div className={`absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-linear-to-br ${ch.color} opacity-40 blur-[2px]`} />
                <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-linear-to-br ${ch.color} opacity-25`} />

                {/* Front card with 3D tilt */}
                <div
                  className="relative bg-white rounded-2xl p-4 sm:p-5 border border-white shadow-3d overflow-hidden bevel-edge preserve-3d transition-transform duration-500"
                  style={{
                    transform: `perspective(900px) rotateY(${tiltY}deg) rotateX(2deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Corner color blob */}
                  <div className={`absolute -top-8 -right-8 w-20 h-20 rounded-full bg-linear-to-br ${ch.color} opacity-10 blur-xl`} />

                  {/* Logo area - 3D cube */}
                  <div className="relative mb-3 sm:mb-4 h-12 sm:h-14 flex items-center">
                    {ch.logos && ch.logos.length > 0 ? (
                      <div className="relative">
                        <div className={`absolute -inset-1 rounded-xl bg-linear-to-br ${ch.color} opacity-15 blur-sm`} />
                        <div className="relative flex items-center gap-1.5 sm:gap-2 bg-white rounded-xl px-2 py-1.5 border border-slate-100">
                          {ch.logos.map((logo) => (
                            <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-5 sm:h-7 w-auto" />
                          ))}
                        </div>
                      </div>
                    ) : ch.Icon ? (
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12">
                        <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-linear-to-br ${ch.color} opacity-60 blur-[1px]`} />
                        <div className={`relative w-full h-full rounded-xl bg-linear-to-br ${ch.color} flex items-center justify-center shadow-md`}>
                          <ch.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <h3 className="font-extrabold text-deep-navy text-[13px] sm:text-sm mb-1">{ch.name}</h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mb-3 sm:mb-4 leading-relaxed">{ch.purpose}</p>

                  {/* Footer with number + arrow */}
                  <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-slate-100">
                    <span className={`text-[10px] sm:text-[11px] font-extrabold bg-linear-to-br ${ch.color} bg-clip-text text-transparent`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={`w-6 h-6 rounded-full bg-slate-50 group-hover:bg-linear-to-br group-hover:${ch.color} flex items-center justify-center transition-all duration-300`}>
                      <IconArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ TARGET (isometric check cards) ━━━━━━━━━━━━━ */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start">
            <div className="lg:col-span-2 mb-12 lg:mb-0 lg:sticky lg:top-28">
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">FOR YOU</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-5 leading-tight">
                이런 고민이 있다면,<br />
                <span className="relative inline-block">
                  <span className="relative z-10">지금 광고 방향</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
                </span>
                부터<br className="hidden sm:inline" />
                {" "}다시 점검해야 합니다
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                여울디앤씨가 6가지 공통 고민을<br className="sm:hidden" />
                {" "}해결해드립니다.
              </p>

              {/* 3D target mark with perspective layers */}
              <div className="hidden lg:block mb-8 relative w-56 h-56 perspective-800">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-blue/15 rounded-full blur-2xl" />
                <div
                  className="relative w-full h-full preserve-3d"
                  style={{ transform: "rotateX(55deg) rotateZ(-25deg)", transformStyle: "preserve-3d" }}
                >
                  {/* Outermost ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-accent-blue/10 bg-white shadow-3d-lg" style={{ transform: "translateZ(0)" }}>
                    {/* Mid ring */}
                    <div className="absolute inset-4 rounded-full border-4 border-accent-blue/20" style={{ transform: "translateZ(18px)" }}>
                      {/* Inner ring */}
                      <div className="absolute inset-4 rounded-full border-4 border-accent-blue/40" style={{ transform: "translateZ(36px)" }}>
                        {/* Bullseye - the top of the 3D stack */}
                        <div className="absolute inset-3 rounded-full bg-linear-to-br from-accent-blue to-blue-600 shadow-lg shadow-accent-blue/40 flex items-center justify-center" style={{ transform: "translateZ(56px)" }}>
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Flying arrow hitting the center */}
                  <div className="absolute top-[35%] left-[40%]" style={{ transform: "translateZ(80px) rotate(-35deg)" }}>
                    <svg className="w-10 h-10 drop-shadow-lg" viewBox="0 0 24 24" fill="none">
                      <path d="M14 4 L20 4 L20 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 4 L10 14" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-linear-to-r from-deep-navy to-slate-800 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-deep-navy/25 transition-all duration-300">
                맞는 광고 방향 상담받기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { text: "광고는 하고 있는데 문의가 적은 업체", color: "from-blue-500 to-indigo-600", tag: "문의 부족" },
                { text: "어떤 광고부터 시작해야 할지 고민인 업체", color: "from-violet-500 to-purple-600", tag: "초기 진입" },
                { text: "제작과 운영을 한 번에 맡기고 싶은 업체", color: "from-emerald-500 to-teal-600", tag: "통합 운영" },
                { text: "상담과 방문 전환이 중요한 업종", color: "from-amber-500 to-orange-500", tag: "전환 중심" },
                { text: "기존 고객 재접촉이 필요한 업종", color: "from-pink-500 to-rose-500", tag: "재마케팅" },
                { text: "예산 대비 효율이 중요한 광고주", color: "from-sky-500 to-cyan-500", tag: "효율 관리" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative"
                  style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.07}s backwards` }}
                >
                  {/* 3D depth */}
                  <div className={`absolute inset-0 translate-x-1 translate-y-1.5 rounded-xl bg-linear-to-br ${item.color} opacity-25 blur-[2px]`} />

                  <div className="relative bg-white rounded-xl p-4 sm:p-5 border border-white shadow-lg shadow-deep-navy/5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <div className="flex items-start gap-3">
                      {/* Isometric check icon */}
                      <div className="relative w-10 h-10 shrink-0">
                        <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-linear-to-br ${item.color} opacity-60 blur-[1px]`} />
                        <div className={`relative w-full h-full rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-md`}>
                          <IconCheck className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className={`inline-block text-[9px] font-extrabold bg-linear-to-br ${item.color} bg-clip-text text-transparent tracking-widest mb-1`}>
                          {item.tag}
                        </span>
                        <p className="text-[13px] sm:text-sm text-deep-navy font-semibold leading-snug">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ PORTFOLIO (3D case cards) ━━━━━━━━━━━━━ */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.025]" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #2563eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-14">
            <div>
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">PORTFOLIO</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy leading-tight">
                업종에 맞는<br className="sm:hidden" />
                {" "}<span className="relative inline-block">
                  <span className="relative z-10">채널 조합과 운영 흐름</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
                </span>
              </h2>
            </div>
            <Link href="/cases" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-bold mt-3 sm:mt-0 hover:gap-3 transition-all">
              전체 사례 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 perspective-1200">
            {caseStudies.map((c, i) => {
              const gradient = c.color.replace("bg-", "from-").replace("-500", "-500 to-") + (c.color.includes("blue") ? "indigo-600" : c.color.includes("emerald") ? "teal-600" : "orange-600");
              return (
                <div
                  key={i}
                  className="group relative preserve-3d"
                  style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
                >
                  {/* 3D depth */}
                  <div className={`absolute inset-0 translate-x-1.5 translate-y-2 rounded-2xl bg-linear-to-br ${gradient} opacity-30 blur-[3px]`} />
                  <div className={`absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-linear-to-br ${gradient} opacity-15`} />

                  <div
                    className="relative bg-white rounded-2xl p-6 sm:p-7 border border-white shadow-3d overflow-hidden min-h-52 bevel-edge preserve-3d transition-transform duration-500"
                    style={{
                      transform: `perspective(1000px) rotateY(${(i - 1) * 6}deg) rotateX(3deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Huge bg number */}
                    <div className={`absolute -bottom-6 -right-4 text-[8rem] font-black bg-linear-to-br ${gradient} bg-clip-text text-transparent opacity-[0.06] leading-none select-none`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Corner gradient */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-linear-to-br ${gradient} opacity-10 blur-2xl`} />

                    <div className="relative">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-white bg-linear-to-br ${gradient} mb-4 shadow-md`}>
                        <span className="w-1 h-1 rounded-full bg-white/80" />
                        {c.industry}
                      </div>
                      <p className="text-base font-extrabold text-deep-navy mb-2 leading-tight">{c.channel}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">{c.desc}</p>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold bg-linear-to-br ${gradient} bg-clip-text text-transparent tracking-widest`}>
                          CASE {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className={`w-7 h-7 rounded-full bg-slate-50 group-hover:bg-linear-to-br group-hover:${gradient} flex items-center justify-center transition-all`}>
                          <IconArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ TESTIMONIALS ━━━━━━━━━━━━━ */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">VOICES</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              여울디앤씨와 함께한<br />
              <span className="relative inline-block">
                <span className="relative z-10">실제 광고주 후기</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
              과장된 후기보다,<br className="sm:hidden" />
              {" "}실제 운영 결과로 들어온 피드백을 정리했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 perspective-1200">
            {[
              {
                industry: "병원",
                summary: "예약 문의가 눈에 띄게 늘었어요",
                quote: "광고만 돌리는 곳이 아니라, 어떤 채널이 우리에게 맞는지 처음부터 같이 정리해주셨어요. 예약 문의가 두 배 가까이 늘었습니다.",
                role: "원장",
                color: "from-emerald-500 to-teal-600",
                stat: { label: "예약 문의", value: "+128%" },
              },
              {
                industry: "분양",
                summary: "DB 유입 구조가 안정됐습니다",
                quote: "리드폼만 하고 끝나는게 아니라, 후속 문자까지 흐름을 잡아주셔서 실제 상담 전환율이 좋아졌습니다.",
                role: "마케팅 팀장",
                color: "from-blue-500 to-indigo-600",
                stat: { label: "전환율", value: "+32.8%" },
              },
              {
                industry: "지역 자영업",
                summary: "지역 단골이 늘었어요",
                quote: "당근하고 메타 조합으로 동네 사람들이 가게를 알아보기 시작했어요. 작은 예산이지만 효율은 확실히 다릅니다.",
                role: "대표",
                color: "from-orange-500 to-red-500",
                stat: { label: "방문 증가", value: "+56%" },
              },
            ].map((t, i) => (
              <div
                key={i}
                className="group relative preserve-3d"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
              >
                <div className={`absolute inset-0 translate-x-1.5 translate-y-2 rounded-2xl bg-linear-to-br ${t.color} opacity-25 blur-[3px]`} />
                <div className={`absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-linear-to-br ${t.color} opacity-15`} />

                <div
                  className="relative bg-white rounded-2xl p-6 sm:p-7 border border-white shadow-3d overflow-hidden h-full flex flex-col bevel-edge preserve-3d transition-transform duration-500"
                  style={{
                    transform: `perspective(1000px) rotateY(${(i - 1) * 5}deg) rotateX(3deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-linear-to-br ${t.color} opacity-10 blur-2xl`} />

                  {/* Quote mark */}
                  <div className={`absolute top-3 right-4 text-7xl font-black bg-linear-to-br ${t.color} bg-clip-text text-transparent opacity-25 leading-none select-none`}>
                    &ldquo;
                  </div>

                  <div className="relative flex-1">
                    {/* Industry badge */}
                    <div className="inline-flex items-center gap-1.5 mb-4">
                      <div className={`px-2.5 py-1 rounded-full bg-linear-to-br ${t.color} shadow-sm`}>
                        <span className="text-[10px] font-extrabold text-white tracking-wider uppercase">{t.industry}</span>
                      </div>
                      {/* Star rating */}
                      <div className="flex gap-0.5 ml-1">
                        {[...Array(5)].map((_, n) => (
                          <svg key={n} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p className="text-base font-extrabold text-deep-navy mb-3 leading-tight">{t.summary}</p>
                    <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Footer with stat */}
                  <div className="relative pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center shadow-sm`}>
                        <span className="text-white text-[10px] font-black">{t.industry.charAt(0)}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">{t.industry} {t.role}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-slate-400">{t.stat.label}</p>
                      <p className={`text-sm font-extrabold bg-linear-to-br ${t.color} bg-clip-text text-transparent`}>{t.stat.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ FAQ ━━━━━━━━━━━━━ */}
      <FAQSection />

      {/* ━━━━━━━━━━━━━ CTA ━━━━━━━━━━━━━ */}
      <SectionCTA
        title="우리 업종에는 어떤 광고가 맞을지, 지금 방향부터 정리해보세요"
        description="여울디앤씨가 업종과 예산에 맞는 광고 구조를 먼저 정리해드립니다. 부담 없이 문의 남겨주시면 빠르게 상담 도와드립니다."
        buttonText="문의하기"
        variant="dark"
      />
    </>
  );
}
