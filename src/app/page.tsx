import Link from "next/link";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
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

            {/* ── Right: visual ── */}
            <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center py-16">
              {/* Main image with frame */}
              <div className="relative w-full max-w-130">
                <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-blue-900/20 ring-1 ring-white/50">
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
                    {/* Top right chart decoration */}
                    <svg className="absolute top-8 right-8 w-28 h-16 opacity-90" viewBox="0 0 120 60" fill="none">
                      <path d="M0 50 Q30 20 60 30 T120 5" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="0 1" />
                      <circle cx="120" cy="5" r="4" fill="#2563eb" />
                      <circle cx="60" cy="30" r="3" fill="#60a5fa" />
                    </svg>
                  </div>
                </div>

                {/* Floating card: 전환율 (top right) */}
                <div className="absolute top-10 -right-6 bg-white rounded-2xl shadow-xl shadow-blue-900/15 px-4 py-3 border border-blue-100/80 z-20 animate-float backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/30">
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
                <div className="absolute top-1/2 -translate-y-1/2 -right-10 bg-white rounded-2xl shadow-xl shadow-blue-900/15 px-4 py-3.5 border border-blue-100/80 z-20 backdrop-blur-sm" style={{ animation: "float 5s ease-in-out infinite 2s" }}>
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

                {/* Floating card: 문의 증가 (bottom left) */}
                <div className="absolute bottom-12 -left-6 bg-white rounded-2xl shadow-xl shadow-blue-900/15 px-4 py-3 border border-blue-100/80 z-20 backdrop-blur-sm" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
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

                {/* Decorative ring around image */}
                <div className="absolute -inset-4 rounded-4xl border border-blue-200/40 -z-10" />
                <div className="absolute -inset-8 rounded-[36px] border border-blue-200/20 -z-10" />
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="group relative"
                style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
              >
                {/* 3D depth layers */}
                <div className={`absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-linear-to-br ${item.color} opacity-60 blur-[2px]`} />
                <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-linear-to-br ${item.color} opacity-30`} />
                {/* Front card */}
                <div className="relative bg-white rounded-2xl p-5 sm:p-7 border border-white shadow-xl shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
                  {/* Decorative number */}
                  <div className={`absolute -top-3 -right-3 text-6xl sm:text-7xl font-black bg-linear-to-br ${item.light} bg-clip-text text-transparent opacity-80 select-none leading-none`}>
                    0{i + 1}
                  </div>
                  {/* Gradient corner accent */}
                  <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-linear-to-br ${item.color} opacity-10 blur-2xl`} />

                  <div className="relative">
                    {/* Icon with isometric depth */}
                    <div className="relative w-11 h-11 sm:w-14 sm:h-14 mb-4 sm:mb-5">
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl sm:rounded-2xl bg-linear-to-br ${item.color} opacity-60 blur-[1px]`} />
                      <div className={`relative w-full h-full rounded-xl sm:rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-[13px] sm:text-base font-extrabold text-deep-navy mb-1.5 sm:mb-2 whitespace-pre-line leading-tight">{item.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{item.desc}</p>

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

      {/* ━━━━━━━━━━━━━ HOW ━━━━━━━━━━━━━ */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <Image src="/images/stock/dashboard.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#060e1e]/93" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">How</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4">
              상담만 하는 것이 아니라,<br />
              실제 실행까지 연결합니다
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto px-2">
              문의 접수 후 업종/예산/목표를 정리하고,<br className="sm:hidden" />
              {" "}맞는 채널 제안부터<br className="hidden sm:inline lg:hidden" />
              {" "}소재 제작, 운영/보완까지 한 번에.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-white/8 hidden lg:block" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {processSteps.map((s, i) => (
                <div key={i} className={`card-shine glass rounded-2xl p-4 sm:p-6 text-center group hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 ${i === 4 ? "col-span-2 sm:col-span-1 max-w-[calc(50%-6px)] sm:max-w-none mx-auto sm:mx-0" : ""}`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-accent-blue/15 group-hover:bg-accent-blue/30 flex items-center justify-center mb-2.5 sm:mb-3 transition-colors duration-300 relative">
                    <s.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent-blue text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-white mb-0.5">{s.title}</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-500">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link href="/process" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold hover:gap-3 transition-all">
              진행절차 보기 <IconArrowRight className="w-3.5 h-3.5" />
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {channels.map((ch, i) => (
              <Link
                key={ch.name}
                href="/services"
                className="group relative"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.06}s backwards` }}
              >
                {/* Isometric depth layers */}
                <div className={`absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-linear-to-br ${ch.color} opacity-40 blur-[2px]`} />
                <div className={`absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-linear-to-br ${ch.color} opacity-25`} />

                {/* Front card */}
                <div className="relative bg-white rounded-2xl p-4 sm:p-5 border border-white shadow-lg shadow-deep-navy/5 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
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
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ TARGET ━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-20 lg:items-center">
            <div className="lg:col-span-2 mb-10 sm:mb-12 lg:mb-0">
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Target</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-5">
                이런 고민이 있다면,<br />
                지금 광고 방향부터<br className="hidden sm:inline" />
                {" "}다시 점검해야 합니다
              </h2>
              {/* Target SVG illustration */}
              <div className="hidden lg:block mb-6">
                <IllustTarget className="w-48 h-48" />
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-linear-to-r from-deep-navy to-slate-800 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-deep-navy/25 transition-all duration-300">
                맞는 광고 방향 상담받기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
              {[
                "광고는 하고 있는데 문의가 적은 업체",
                "어떤 광고부터 시작해야 할지 고민인 업체",
                "제작과 운영을 한 번에 맡기고 싶은 업체",
                "상담과 방문 전환이 중요한 업종",
                "기존 고객 재접촉이 필요한 업종",
                "예산 대비 효율이 중요한 광고주",
              ].map((text, i) => (
                <div key={i} className="group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-100 hover:border-accent-blue/20 hover:shadow-md hover:shadow-accent-blue/5 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-accent-blue/6 flex items-center justify-center shrink-0 group-hover:bg-accent-blue transition-all duration-300">
                    <IconCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-slate-700 text-[13px] sm:text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ PORTFOLIO ━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-14">
            <div>
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Portfolio</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy">
                업종에 맞는<br className="sm:hidden" />
                {" "}채널 조합과 운영 흐름
              </h2>
            </div>
            <Link href="/cases" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold mt-3 sm:mt-0 hover:gap-3 transition-all">
              전체 사례 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((c, i) => (
              <div key={i} className="group relative p-6 sm:p-7 rounded-2xl bg-white card-3d gradient-border overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full ${c.color} rounded-r-full`} />
                <div className="relative pl-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white ${c.color} mb-3 sm:mb-4`}>
                    {c.industry}
                  </div>
                  <p className="text-sm font-bold text-deep-navy mb-1.5 sm:mb-2">{c.channel}</p>
                  <p className="text-xs text-slate-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
