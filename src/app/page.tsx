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
  { title: "업종 맞춤\n채널 제안", desc: "업종과 목적에 맞는 채널만 선별해 제안합니다. 불필요한 채널을 권유하지 않습니다.", Icon: IconTarget },
  { title: "문의 전환\n중심 운영", desc: "노출이 아니라 실제 문의와 상담 전환을 설계합니다. 클릭만 많은 광고는 의미 없습니다.", Icon: IconZap },
  { title: "소재 제작부터\n운영까지", desc: "광고 소재 제작, 세팅, 운영, 최적화까지 한 번에 진행합니다.", Icon: IconLayers },
  { title: "데이터 기반\n최적화", desc: "반응 데이터를 분석하고, 효율이 나오는 방향으로 지속적으로 보완합니다.", Icon: IconBarChart },
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
      <section className="relative overflow-hidden">
        {/* Layered bg */}
        <div className="absolute inset-0 bg-linear-to-br from-[#f0f4ff] via-white to-[#f8faff]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-blue/5 blur-[100px]" />
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-orange-200/20 blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4.5rem)]">

            {/* ── Left: copy ── */}
            <div className="lg:col-span-6 py-16 sm:py-20 lg:py-0">
              <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.8rem] font-extrabold leading-hero text-deep-navy tracking-tight mb-5">
                온라인 광고,<br />
                <span className="gradient-text">결과</span>로 말합니다
              </h1>

              <div className="space-y-2.5 mb-7">
                {["광고비만 쓰고 끝나셨나요?", "문의 없는 광고는 의미 없습니다"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 bg-slate-50 rounded-lg px-3.5 sm:px-4 py-2.5 w-fit border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-[13px] text-slate-700 font-medium">{t}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-500 mb-8 max-w-sm leading-relaxed">
                전환 중심으로 설계된 광고 운영.<br className="sm:hidden" />
                {" "}불필요한 광고비 지출없이,<br className="hidden sm:inline lg:hidden" />
                {" "}결과가 달라집니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/contact" className="group px-7 py-3.5 bg-linear-to-r from-accent-blue to-blue-600 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-accent-blue/30 transition-all duration-300 flex items-center justify-center sm:justify-start gap-2">
                  상담 신청하기 <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/about" className="px-7 py-3.5 text-sm text-slate-600 font-semibold rounded-xl border border-slate-200 hover:border-accent-blue/30 hover:bg-accent-blue/4 hover:text-accent-blue transition-all duration-300 text-center sm:text-left">
                  우리만의 차별점 보기
                </Link>
              </div>

              {/* Media bar - real logos */}
              <div className="flex items-center gap-4 sm:gap-5 flex-wrap opacity-40">
                {["naver", "kakaotalk", "meta", "youtube", "google", "instagram"].map((name) => (
                  <img key={name} src={`/images/logos/${name}.svg`} alt={name} className="h-3.5 sm:h-4 w-auto grayscale" />
                ))}
              </div>
            </div>

            {/* ── Right: visual ── */}
            <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center py-12">
              {/* Main SVG chart illustration */}
              <div className="relative z-10 card-3d glow-blue rounded-3xl overflow-visible">
                <IllustChart className="w-full max-w-md h-auto" />
              </div>

              {/* Floating phone mockup */}
              <div className="absolute -left-4 top-8 z-20 animate-float-slow w-28">
                <IllustPhone className="w-full h-auto drop-shadow-2xl" />
              </div>

              {/* Floating card: 전환율 */}
              <div className="absolute top-4 right-0 bg-white rounded-2xl shadow-xl shadow-blue-900/10 p-4 border border-slate-100 z-20 animate-float gradient-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">전환율</p>
                    <p className="text-lg font-extrabold text-deep-navy">+32.8%</p>
                  </div>
                </div>
              </div>

              {/* Floating card: ROAS */}
              <div className="absolute bottom-16 -right-2 bg-white rounded-2xl shadow-xl shadow-blue-900/10 p-4 border border-slate-100 z-20 gradient-border" style={{ animation: "float 5s ease-in-out infinite 2s" }}>
                <p className="text-[10px] text-slate-400 mb-1">광고 효율 (ROAS)</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-2xl font-extrabold text-accent-blue">4.8</p>
                  <p className="text-xs font-bold text-slate-400">배</p>
                </div>
                <div className="flex items-end gap-1 mt-2 h-6">
                  {[40, 55, 35, 70, 60, 80, 90].map((h, i) => (
                    <div key={i} className="w-2 rounded-t-sm bg-linear-to-t from-accent-blue/40 to-accent-blue/20" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Floating card: 문의 증가 */}
              <div className="absolute bottom-4 left-16 bg-white rounded-2xl shadow-xl shadow-blue-900/10 p-4 border border-slate-100 z-20 gradient-border" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
                <p className="text-[10px] text-slate-400 mb-1">문의 증가</p>
                <p className="text-lg font-extrabold text-deep-navy">+56%<span className="text-emerald-500 text-xs font-bold ml-1">↑</span></p>
              </div>

              {/* Decorative blurs */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/8 rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cta-orange/6 rounded-full blur-[60px] -z-10" />
            </div>

            {/* ── Mobile hero visual (shown only on mobile) ── */}
            <div className="lg:hidden flex justify-center pb-12 -mt-4">
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                <div className="bg-white rounded-2xl shadow-lg shadow-blue-900/8 p-4 border border-slate-100 text-center">
                  <div className="w-9 h-9 mx-auto rounded-xl bg-linear-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/20 mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                  </div>
                  <p className="text-[9px] text-slate-400">전환율</p>
                  <p className="text-base font-extrabold text-deep-navy">+32.8%</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg shadow-blue-900/8 p-4 border border-slate-100 text-center">
                  <div className="w-9 h-9 mx-auto rounded-xl bg-linear-to-br from-accent-blue to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20 mb-2">
                    <IconBarChart className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[9px] text-slate-400">ROAS</p>
                  <p className="text-base font-extrabold text-accent-blue">4.8배</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg shadow-blue-900/8 p-4 border border-slate-100 text-center">
                  <div className="w-9 h-9 mx-auto rounded-xl bg-linear-to-br from-violet-400 to-violet-500 flex items-center justify-center shadow-md shadow-violet-500/20 mb-2">
                    <IconTarget className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[9px] text-slate-400">문의 증가</p>
                  <p className="text-base font-extrabold text-deep-navy">+56%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ WHY ━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Why</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              광고는 많이 하는 것보다,<br />
              맞게 하는 것이 더 중요합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto px-2">
              여울디앤씨는 업종과 목표에 따라<br className="sm:hidden" />
              {" "}채널을 선별하고,<br className="hidden sm:inline lg:hidden" />
              {" "}문의 전환까지 고려한 구조로 광고를 운영합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {whyUs.map((item, i) => (
              <div key={item.title} className="group relative p-5 sm:p-7 rounded-2xl border border-slate-100 bg-white card-3d gradient-border hover:shadow-xl hover:shadow-accent-blue/8 transition-all duration-500">
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 text-4xl sm:text-5xl font-black text-slate-50 group-hover:text-accent-blue/5 transition-colors duration-500 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-linear-to-br from-accent-blue/10 to-accent-blue/5 group-hover:from-accent-blue group-hover:to-blue-600 flex items-center justify-center mb-4 sm:mb-5 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-accent-blue/20">
                    <item.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-[13px] sm:text-base font-bold text-deep-navy mb-1.5 sm:mb-2 whitespace-pre-line">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{item.desc}</p>
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

      {/* ━━━━━━━━━━━━━ WHAT ━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-24 lg:py-32 bg-linear-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">What</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              업종과 목적에 따라,<br />
              필요한 채널만 선별해 운영합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto px-2">
              메타/네이버/카카오/유튜브/구글부터<br className="sm:hidden" />
              {" "}지역/문자/부동산 특화 채널까지<br className="hidden sm:inline lg:hidden" />
              {" "}예산과 목적에 맞게 조합합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {channels.map((ch) => (
              <Link key={ch.name} href="/services" className="group relative bg-white rounded-2xl p-4 sm:p-6 card-3d gradient-border overflow-hidden">
                <div className={`absolute inset-0 bg-linear-to-br ${ch.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                <div className="relative">
                  {/* Logo area */}
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 h-8 sm:h-10">
                    {ch.logos && ch.logos.length > 0 ? (
                      ch.logos.map((logo) => (
                        <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-5 sm:h-7 w-auto" />
                      ))
                    ) : ch.Icon ? (
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-linear-to-br ${ch.color} flex items-center justify-center shadow-sm`}>
                        <ch.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    ) : null}
                  </div>
                  <h3 className="font-bold text-deep-navy text-[13px] sm:text-sm mb-1">{ch.name}</h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mb-2 sm:mb-3 leading-relaxed">{ch.purpose}</p>
                  <div className="flex items-center gap-1 text-[10px] text-accent-blue font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    자세히 보기 <IconArrowRight className="w-3 h-3" />
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
