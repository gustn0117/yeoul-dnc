import Link from "next/link";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import {
  IconKakao, IconSearch, IconMeta, IconYoutube, IconGlobe, IconMail, IconCarrot, IconBuilding,
  IconTarget, IconLayers, IconBarChart, IconRefresh, IconCheck, IconArrowRight, IconZap,
  IconClipboard, IconCompass, IconImage, IconSettings, IconPlay,
} from "@/components/Icons";

const channels = [
  { name: "카카오 광고", desc: "상담 유입과 재접촉에 강한 광고", Icon: IconKakao },
  { name: "네이버 광고", desc: "검색 수요 기반 문의 확보에 강한 광고", Icon: IconSearch },
  { name: "메타 광고", desc: "관심사 기반 타겟팅과 DB 수집에 강한 광고", Icon: IconMeta },
  { name: "유튜브 광고", desc: "브랜드 인지도와 신뢰 형성에 강한 광고", Icon: IconYoutube },
  { name: "구글 광고", desc: "검색 디스플레이 리타겟팅 확장형 광고", Icon: IconGlobe },
  { name: "문자 마케팅", desc: "기존 고객 재접촉 및 안내형 광고", Icon: IconMail },
  { name: "당근 광고", desc: "지역 기반 생활권 고객 유입 광고", Icon: IconCarrot },
  { name: "부동산 특화 광고", desc: "분양 임대 실수요 타겟 광고", Icon: IconBuilding },
];

const strengths = [
  { title: "업종 맞춤 채널 제안", desc: "무조건 많은 광고를 제안하지 않습니다. 업종과 목적에 맞는 채널을 선별합니다.", Icon: IconTarget, num: "01" },
  { title: "문의 전환 중심 운영", desc: "유입만 만드는 광고가 아니라 문의까지 설계합니다.", Icon: IconZap, num: "02" },
  { title: "소재 제작부터 운영까지", desc: "광고 집행, 소재 제작, 운영 관리까지 한 번에 진행합니다.", Icon: IconLayers, num: "03" },
  { title: "데이터 기반 최적화", desc: "데이터를 분석하고 반응을 확인해 효율적으로 운영합니다.", Icon: IconBarChart, num: "04" },
  { title: "재접촉까지 고려한 운영", desc: "광고 후 재접촉까지 고려한 장기적 운영이 가능합니다.", Icon: IconRefresh, num: "05" },
];

const processSteps = [
  { step: "01", title: "문의 접수", desc: "업종 / 예산 / 목표 확인", Icon: IconClipboard },
  { step: "02", title: "광고 방향 제안", desc: "맞는 채널과 전략 수립", Icon: IconCompass },
  { step: "03", title: "소재 제작 및 세팅", desc: "이미지 / 영상 / 문구 준비", Icon: IconImage },
  { step: "04", title: "광고 운영", desc: "집행 및 효율 최적화", Icon: IconSettings },
  { step: "05", title: "분석 및 보완", desc: "성과 체크 / 보완 / 전환 연결", Icon: IconPlay },
];

const cases = [
  { industry: "분양 광고", channel: "메타 + 문자", method: "DB 유입 중심 운영", tag: "리드폼 + 후속 문자", accent: "border-l-blue-500" },
  { industry: "병원 광고", channel: "네이버 + 메타", method: "상담 예약 유입 중심", tag: "검색형 + 노출형 병행", accent: "border-l-emerald-500" },
  { industry: "지역 자영업", channel: "당근 + 메타", method: "생활권 고객 유입 중심", tag: "지역 타겟팅 조합", accent: "border-l-orange-500" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-[#070d1a]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 70% 80%, rgba(249,115,22,0.04) 0%, transparent 70%)" }} />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
        {/* Floating logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] opacity-[0.025] pointer-events-none animate-float">
          <Image src="/images/logo-mark-white.png" alt="" width={650} height={570} className="w-100 lg:w-150 h-auto" aria-hidden="true" />
        </div>
        {/* Horizontal gradient lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40 text-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {["상담 중심", "전환 중심", "업종 맞춤 운영"].map((badge) => (
              <span key={badge} className="px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent-blue/80 border border-accent-blue/15 rounded-full bg-accent-blue/5">
                {badge}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-hero mb-6 text-white tracking-tight">
            온라인 광고,<br />
            <span className="gradient-text">결과</span>로 말합니다
          </h1>

          {/* Sub copy */}
          <p className="text-base lg:text-lg text-slate-300/90 mb-2">
            유입부터 상담 전환까지 설계하는 광고 실행 파트너
          </p>
          <p className="text-sm text-slate-500 mb-10 max-w-md mx-auto">
            카카오, 네이버, 메타, 유튜브, 구글 등 다양한 광고 채널을<br />
            업종과 예산에 맞게 제안하고 실행합니다
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <Link
              href="/contact"
              className="group px-8 py-3.5 bg-linear-to-r from-cta-orange to-orange-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-cta-orange/30 transition-all duration-300 flex items-center gap-2"
            >
              광고 문의하기
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="px-8 py-3.5 text-sm text-white/70 font-medium rounded-xl border border-white/10 hover:border-white/20 hover:text-white/90 transition-all duration-300">
              서비스 보기
            </Link>
            <Link href="/cases" className="px-8 py-3.5 text-sm text-white/70 font-medium rounded-xl border border-white/10 hover:border-white/20 hover:text-white/90 transition-all duration-300">
              광고사례 보기
            </Link>
          </div>

          {/* Platform icons row */}
          <div className="flex items-center justify-center gap-1">
            {[
              { name: "카카오", Icon: IconKakao },
              { name: "네이버", Icon: IconSearch },
              { name: "메타", Icon: IconMeta },
              { name: "유튜브", Icon: IconYoutube },
              { name: "구글", Icon: IconGlobe },
              { name: "당근", Icon: IconCarrot },
            ].map((m) => (
              <div key={m.name} className="w-9 h-9 rounded-lg bg-white/3 border border-white/6 flex items-center justify-center" title={m.name}>
                <m.Icon className="w-4 h-4 text-slate-500" />
              </div>
            ))}
            <span className="text-[11px] text-slate-600 ml-2">외 다수 채널</span>
          </div>
        </div>

        {/* Bottom stats bar - integrated into hero */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-white/2 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 divide-x divide-white/5">
              {[
                { number: "8+", label: "운영 채널" },
                { number: "100%", label: "소재·운영 통합" },
                { number: "6단계", label: "체계적 프로세스" },
                { number: "맞춤형", label: "업종별 전략" },
              ].map((s) => (
                <div key={s.label} className="py-5 lg:py-6 text-center">
                  <p className="text-sm lg:text-base font-bold text-white/90">{s.number}</p>
                  <p className="text-[10px] lg:text-[11px] text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-xl mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Why us</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-4">
              왜 여울디앤씨인가
            </h2>
            <p className="text-slate-500">
              업종과 목적에 맞는 채널을 선별해 효율적으로 운영합니다.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-100">
            {strengths.map((item) => (
              <div key={item.num} className="bg-white p-8 lg:p-10 hover:bg-slate-50/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/8 flex items-center justify-center">
                    <item.Icon className="w-4.5 h-4.5 text-accent-blue" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 tracking-wider">{item.num}</span>
                </div>
                <h3 className="text-base font-bold text-deep-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
            {/* CTA cell */}
            <div className="bg-accent-blue/4 p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-sm text-slate-600 mb-4">우리 업종에 맞는 채널이 궁금하신가요?</p>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-accent-blue text-sm font-semibold">
                무료 상담 받기
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AD CHANNELS ── */}
      <section className="py-24 lg:py-36 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Channels</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-4">
              운영 가능한 광고 채널
            </h2>
            <p className="text-slate-500 text-sm">업종과 목적에 맞는 최적의 채널을 제안합니다</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {channels.map((ch) => (
              <Link
                key={ch.name}
                href="/services"
                className="group bg-white rounded-2xl p-5 lg:p-6 border border-slate-100 hover:border-accent-blue/20 hover:shadow-lg hover:shadow-accent-blue/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-accent-blue/8 flex items-center justify-center mb-4 transition-colors duration-300">
                  <ch.Icon className="w-5 h-5 text-slate-400 group-hover:text-accent-blue transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-deep-navy text-sm mb-1">{ch.name}</h3>
                <p className="text-xs text-slate-400">{ch.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold hover:gap-3 transition-all duration-300">
              전체 서비스 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-20 lg:items-center">
            {/* Left - 2cols */}
            <div className="lg:col-span-2 mb-12 lg:mb-0">
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">For you</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-5">
                이런 분들에게<br />필요합니다
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                현재 광고가 잘 안 되고 있다면, 여울디앤씨가 방향부터 함께 정리해드립니다.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-deep-navy text-white text-sm font-semibold rounded-xl hover:bg-deep-navy/90 transition-all duration-300"
              >
                맞는 광고 방향 상담받기
                <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right - 3cols */}
            <div className="lg:col-span-3 space-y-3">
              {[
                "광고는 하고 있는데 문의가 적은 업체",
                "어떤 광고부터 시작해야 할지 고민인 업체",
                "광고 제작과 운영을 한 번에 맡기고 싶은 업체",
                "상담과 방문 전환이 중요한 업종",
                "기존 고객 재접촉까지 함께 운영하고 싶은 업체",
              ].map((text, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 lg:p-5 rounded-xl border border-slate-100 hover:border-accent-blue/15 hover:bg-accent-blue/[0.02] transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/8 flex items-center justify-center shrink-0 group-hover:bg-accent-blue transition-all duration-300">
                    <IconCheck className="w-3.5 h-3.5 text-accent-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-slate-700 text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-[#0a1425]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-accent-blue/6 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Process</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">진행 프로세스</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              상담만 하고 끝나는 것이 아니라 실제 광고 실행까지 연결됩니다
            </p>
          </div>

          {/* Steps - horizontal flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {processSteps.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center group hover:bg-white/6 transition-all duration-300">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <s.Icon className="w-5 h-5 text-accent-blue" />
                </div>
                <span className="text-accent-blue/50 text-[10px] font-bold tracking-widest">{s.step}</span>
                <h3 className="font-bold text-white text-sm mt-1 mb-1">{s.title}</h3>
                <p className="text-[11px] text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-5 mt-12">
            <Link href="/process" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold hover:gap-3 transition-all">
              자세히 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-cta-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              바로 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE PREVIEW ── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
            <div>
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Cases</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy">광고사례 미리보기</h2>
            </div>
            <Link href="/cases" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold mt-4 lg:mt-0 hover:gap-3 transition-all">
              전체 사례 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c, i) => (
              <div key={i} className={`p-6 rounded-2xl border border-slate-100 border-l-4 ${c.accent} hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300`}>
                <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">{c.industry}</p>
                <div className="space-y-2.5 text-sm">
                  {[
                    { label: "채널", value: c.channel },
                    { label: "운영", value: c.method },
                    { label: "포인트", value: c.tag },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <span className="text-slate-400 shrink-0 w-12 text-xs font-medium">{row.label}</span>
                      <span className="text-slate-700 font-medium text-xs">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <SectionCTA
        title="어떤 광고가 우리 업종에 맞는지 궁금하신가요?"
        description="여울디앤씨가 업종에 맞는 광고 방향부터 정리해드립니다"
        buttonText="문의 남기기"
        variant="dark"
      />
    </>
  );
}
