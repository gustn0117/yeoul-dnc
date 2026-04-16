import Link from "next/link";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import {
  IconKakao, IconSearch, IconMeta, IconYoutube, IconGlobe, IconMail, IconCarrot, IconBuilding,
  IconTarget, IconLayers, IconBarChart, IconRefresh, IconCheck, IconArrowRight, IconZap,
  IconClipboard, IconCompass, IconImage, IconSettings, IconPlay,
} from "@/components/Icons";

/* ── DATA ── */

const channels = [
  { name: "메타 광고", purpose: "관심사 기반 타겟팅과 리드 수집", Icon: IconMeta },
  { name: "네이버 광고", purpose: "검색 수요 기반 문의 확보", Icon: IconSearch },
  { name: "카카오 광고", purpose: "상담 유입과 재접촉 운영", Icon: IconKakao },
  { name: "유튜브 광고", purpose: "브랜드 인지도와 신뢰 형성", Icon: IconYoutube },
  { name: "구글 광고", purpose: "검색+디스플레이+리타겟팅 확장", Icon: IconGlobe },
  { name: "문자 마케팅", purpose: "기존 고객 재접촉 및 안내", Icon: IconMail },
  { name: "당근/지역 광고", purpose: "생활권 고객 유입", Icon: IconCarrot },
  { name: "부동산 특화 광고", purpose: "분양 임대 실수요 타겟", Icon: IconBuilding },
];

const whyUs = [
  { title: "업종 맞춤 채널 제안", desc: "업종과 목적에 맞는 채널만 선별해 제안합니다.", Icon: IconTarget },
  { title: "문의 전환 중심 운영", desc: "노출이 아니라 실제 문의와 상담 전환을 설계합니다.", Icon: IconZap },
  { title: "소재 제작부터 운영까지", desc: "광고 소재 제작, 세팅, 운영, 최적화까지 한 번에.", Icon: IconLayers },
  { title: "데이터 기반 최적화", desc: "반응 데이터를 분석해 효율적으로 운영합니다.", Icon: IconBarChart },
];

const processSteps = [
  { title: "문의 접수", desc: "업종 / 예산 / 목표 확인", Icon: IconClipboard },
  { title: "광고 방향 제안", desc: "맞는 채널과 전략 수립", Icon: IconCompass },
  { title: "소재 제작 및 세팅", desc: "이미지 / 영상 / 문구 준비", Icon: IconImage },
  { title: "광고 운영", desc: "집행 및 효율 최적화", Icon: IconSettings },
  { title: "성과 체크 및 보완", desc: "결과 확인 / 보완 / 전환 연결", Icon: IconPlay },
];

const targetAudiences = [
  "광고는 하고 있는데 문의가 적은 업체",
  "어떤 광고부터 시작해야 할지 고민인 업체",
  "제작과 운영을 한 번에 맡기고 싶은 업체",
  "상담과 방문 전환이 중요한 업종",
  "예산 대비 효율이 중요한 광고주",
];

const caseStudies = [
  {
    industry: "분양 광고",
    channel: "메타 리드폼 + 문자 후속",
    desc: "DB 유입과 재접촉 구조가 중요한 업종",
    accent: "border-l-blue-500",
  },
  {
    industry: "병원 광고",
    channel: "네이버 검색형 + 메타 노출형",
    desc: "예약 문의와 신뢰 형성 중심 운영",
    accent: "border-l-emerald-500",
  },
  {
    industry: "지역 자영업",
    channel: "당근 + 메타 생활권 타겟팅",
    desc: "생활권 고객 유입이 중요한 업종",
    accent: "border-l-orange-500",
  },
];

/* ── PAGE ── */

export default function Home() {
  return (
    <>
      {/* ━━ 1. 첫 화면 / HERO ━━ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/stock/hero-building.jpg" alt="" fill className="object-cover" priority aria-hidden="true" />
        <div className="absolute inset-0 bg-[#070d1a]/85" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 45%, rgba(37,99,235,0.10) 0%, transparent 70%)" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] opacity-[0.025] pointer-events-none animate-float">
          <Image src="/images/logo-mark-white.png" alt="" width={650} height={570} className="w-100 lg:w-140 h-auto" aria-hidden="true" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-hero mb-6 text-white tracking-tight">
            온라인 광고,<br /><span className="gradient-text">결과</span>로 말합니다
          </h1>

          <p className="text-base lg:text-lg text-slate-300/90 mb-2">
            광고비만 쓰고 끝나는 광고가 아니라, 유입부터 상담 전환까지 설계하는 실행 중심 광고 파트너.
          </p>

          {/* Sub messages */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6 mb-10">
            {["문의 없는 광고는 의미 없습니다", "업종과 목적에 맞는 채널만 선별해 제안합니다"].map((t) => (
              <div key={t} className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <IconCheck className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                {t}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link href="/contact" className="group px-8 py-3.5 bg-linear-to-r from-cta-orange to-orange-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-cta-orange/30 transition-all duration-300 flex items-center gap-2">
              무료 상담 받기 <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="px-8 py-3.5 text-sm text-white/70 font-medium rounded-xl border border-white/10 hover:border-white/20 hover:text-white/90 backdrop-blur-sm transition-all duration-300">
              서비스 보기
            </Link>
          </div>

          {/* 운영 가능한 주요 매체 */}
          <div className="pt-8 border-t border-white/8">
            <p className="text-[11px] text-slate-500 tracking-widest uppercase mb-4">운영 가능한 주요 매체</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {[
                { name: "Kakao", Icon: IconKakao },
                { name: "NAVER", Icon: IconSearch },
                { name: "Meta", Icon: IconMeta },
                { name: "YouTube", Icon: IconYoutube },
                { name: "Google", Icon: IconGlobe },
              ].map((m) => (
                <div key={m.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/4 border border-white/6 text-xs text-slate-400">
                  <m.Icon className="w-3.5 h-3.5" /> {m.name}
                </div>
              ))}
              <span className="text-[11px] text-slate-600 ml-1">+</span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ 2. 차별화 / WHY ━━ */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Why</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-4">
              광고는 많이 하는 것보다, 맞게 하는 것이 더 중요합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              여울디앤씨는 업종과 목표에 따라 채널을 선별하고, 문의 전환까지 고려한 구조로 광고를 운영합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item) => (
              <div key={item.title} className="p-7 rounded-2xl border border-slate-100 hover:border-accent-blue/15 hover:shadow-lg hover:shadow-accent-blue/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/8 flex items-center justify-center mb-5">
                  <item.Icon className="w-4.5 h-4.5 text-accent-blue" />
                </div>
                <h3 className="text-sm font-bold text-deep-navy mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold">
              무료 상담 받기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 3. 구조 설명 / HOW ━━ */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <Image src="/images/stock/data-analytics.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#070d1a]/92" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">How</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              상담만 하는 것이 아니라, 실제 실행까지 연결합니다
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              문의 접수 후 업종/예산/목표를 정리하고, 맞는 채널 제안부터 소재 제작, 광고 세팅, 운영/보완까지 한 번에 진행합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {processSteps.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center group hover:bg-white/6 transition-all duration-300">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <s.Icon className="w-5 h-5 text-accent-blue" />
                </div>
                <span className="text-accent-blue/50 text-[10px] font-bold tracking-widest">STEP {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-bold text-white text-sm mt-1 mb-1">{s.title}</h3>
                <p className="text-[11px] text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/process" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold hover:gap-3 transition-all">
              진행절차 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 4. 운영 매체 / WHAT ━━ */}
      <section className="py-24 lg:py-36 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">What</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-4">
              업종과 목적에 따라, 필요한 채널만 선별해 운영합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              메타/네이버/카카오/유튜브/구글을 비롯해, 지역/지도/문자/부동산 특화 채널까지 예산과 목적에 맞게 조합합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {channels.map((ch) => (
              <Link key={ch.name} href="/services" className="group bg-white rounded-2xl p-5 lg:p-6 border border-slate-100 hover:border-accent-blue/20 hover:shadow-lg hover:shadow-accent-blue/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-accent-blue/8 flex items-center justify-center mb-3 transition-colors duration-300">
                  <ch.Icon className="w-5 h-5 text-slate-400 group-hover:text-accent-blue transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-deep-navy text-sm mb-0.5">{ch.name}</h3>
                <p className="text-xs text-slate-400">{ch.purpose}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold hover:gap-3 transition-all">
              전체 서비스 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 5. 공감 / TARGET ━━ */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
            <div className="lg:col-span-2 mb-12 lg:mb-0">
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Target</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy mb-5">
                이런 고민이 있다면,<br />지금 광고 방향부터<br />다시 점검해야 합니다
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                광고는 하고 있는데 문의가 적은 업체, 어떤 광고부터 시작해야 할지 고민인 업체, 제작과 운영을 한 번에 맡기고 싶은 업체에 적합합니다.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-deep-navy text-white text-sm font-semibold rounded-xl hover:bg-deep-navy/90 transition-all duration-300">
                맞는 광고 방향 상담받기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-3 space-y-3">
              {targetAudiences.map((text, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 lg:p-5 rounded-xl border border-slate-100 hover:border-accent-blue/15 hover:bg-accent-blue/2 transition-all duration-300">
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

      {/* ━━ 업종별 운영 사례 (포트폴리오 연결) ━━ */}
      <section className="py-24 lg:py-36 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
            <div>
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Portfolio</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-navy">
                업종에 맞는 채널 조합과 운영 흐름을 이렇게 설계합니다
              </h2>
            </div>
            <Link href="/cases" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold mt-4 lg:mt-0 hover:gap-3 transition-all">
              전체 사례 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((c, i) => (
              <div key={i} className={`bg-white p-6 rounded-2xl border border-slate-100 border-l-4 ${c.accent} hover:shadow-lg transition-all duration-300`}>
                <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">{c.industry}</p>
                <p className="text-sm font-semibold text-deep-navy mb-2">{c.channel}</p>
                <p className="text-xs text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            프로젝트는 계속 추가되며, 업종에 따라 필요한 방식은 다르게 제안됩니다
          </p>
        </div>
      </section>

      {/* ━━ 6. 문의 CTA ━━ */}
      <SectionCTA
        title="우리 업종에는 어떤 광고가 맞을지, 지금 방향부터 정리해보세요"
        description="여울디앤씨가 업종과 예산에 맞는 광고 구조를 먼저 정리해드립니다. 부담 없이 문의 남겨주시면 빠르게 상담 도와드립니다."
        buttonText="문의하기"
        variant="dark"
      />
    </>
  );
}
