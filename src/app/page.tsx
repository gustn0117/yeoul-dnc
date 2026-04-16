import Link from "next/link";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import {
  IconKakao, IconSearch, IconMeta, IconYoutube, IconGlobe, IconMail, IconCarrot, IconBuilding,
  IconTarget, IconLayers, IconBarChart, IconRefresh, IconCheck, IconArrowRight, IconZap,
  IconClipboard, IconCompass, IconImage, IconSettings, IconPlay,
} from "@/components/Icons";

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
  { title: "문의 접수", Icon: IconClipboard },
  { title: "광고 방향 제안", Icon: IconCompass },
  { title: "소재 제작 및 세팅", Icon: IconImage },
  { title: "광고 운영", Icon: IconSettings },
  { title: "성과 체크 및 보완", Icon: IconPlay },
];

const caseStudies = [
  { industry: "분양 광고", channel: "메타 리드폼 + 문자 후속", desc: "DB 유입과 재접촉 구조가 중요한 업종", accent: "border-l-blue-500" },
  { industry: "병원 광고", channel: "네이버 검색형 + 메타 노출형", desc: "예약 문의와 신뢰 형성 중심 운영", accent: "border-l-emerald-500" },
  { industry: "지역 자영업", channel: "당근 + 메타 생활권 타겟팅", desc: "생활권 고객 유입이 중요한 업종", accent: "border-l-orange-500" },
];

export default function Home() {
  return (
    <>
      {/* ━━ HERO ━━ 좌측 텍스트 + 우측 이미지 + 플로팅 카드 */}
      <section className="relative bg-linear-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Subtle bg pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center min-h-[calc(100vh-72px)]">
            {/* Left: Text */}
            <div className="py-20 lg:py-28">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-hero text-deep-navy tracking-tight mb-6">
                온라인 광고,<br />
                <span className="gradient-text">결과</span>로 말합니다
              </h1>

              {/* Checkmark messages */}
              <div className="space-y-3 mb-8">
                {[
                  "광고비만 쓰고 끝나셨나요?",
                  "문의 없는 광고는 의미 없습니다",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-accent-blue" />
                    </div>
                    <p className="text-sm text-slate-600">{t}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-500 mb-8 max-w-md">
                전환 중심으로 설계된 광고 운영.<br />
                불필요한 광고비 지출없이, 결과가 달라집니다.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="group px-7 py-3.5 bg-linear-to-r from-accent-blue to-blue-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 flex items-center gap-2">
                  상담 신청하기 <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/about" className="px-7 py-3.5 text-sm text-slate-600 font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                  우리만의 차별점 보기
                </Link>
              </div>

              {/* 운영 매체 바 */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 tracking-widest uppercase mb-3">운영 가능한 주요 매체</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    { name: "Kakao", Icon: IconKakao },
                    { name: "NAVER", Icon: IconSearch },
                    { name: "Meta", Icon: IconMeta },
                    { name: "YouTube", Icon: IconYoutube },
                    { name: "Google", Icon: IconGlobe },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <m.Icon className="w-4 h-4" /> {m.name}
                    </div>
                  ))}
                  <span className="text-slate-300">+</span>
                </div>
              </div>
            </div>

            {/* Right: Image + Floating stat cards */}
            <div className="relative hidden lg:block">
              {/* Main person image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <Image
                  src="/images/stock/woman-professional.jpg"
                  alt="여울디앤씨 광고 전문가"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Blue overlay gradient on bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-deep-navy/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat card - top right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 border border-slate-100 animate-float">
                <p className="text-[10px] text-slate-400 mb-1">전환율</p>
                <p className="text-xl font-extrabold text-accent-blue">+32.8%<span className="text-emerald-500 text-xs ml-1">↑</span></p>
              </div>

              {/* Floating stat card - middle right */}
              <div className="absolute top-1/3 -right-8 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 border border-slate-100" style={{ animationDelay: "2s", animation: "float 6s ease-in-out infinite 2s" }}>
                <p className="text-[10px] text-slate-400 mb-1">광고 효율</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <IconBarChart className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-deep-navy">ROAS 4.8x</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card - bottom left */}
              <div className="absolute bottom-8 -left-6 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 border border-slate-100" style={{ animation: "float 6s ease-in-out infinite 1s" }}>
                <p className="text-[10px] text-slate-400 mb-1">문의 증가</p>
                <p className="text-lg font-extrabold text-deep-navy">+56%<span className="text-emerald-500 text-xs ml-1">↑</span></p>
              </div>

              {/* Dashboard thumbnail overlay */}
              <div className="absolute bottom-16 right-4 w-40 rounded-xl overflow-hidden shadow-lg border-2 border-white" style={{ animation: "float 6s ease-in-out infinite 3s" }}>
                <Image src="/images/stock/dashboard.jpg" alt="" width={400} height={280} className="w-full h-auto" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ WHY ━━ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Why</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              광고는 많이 하는 것보다, 맞게 하는 것이 더 중요합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              여울디앤씨는 업종과 목표에 따라 채널을 선별하고, 문의 전환까지 고려한 구조로 광고를 운영합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item) => (
              <div key={item.title} className="group p-7 rounded-2xl bg-slate-50 hover:bg-accent-blue hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.Icon className="w-4.5 h-4.5 text-accent-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-deep-navy group-hover:text-white mb-2 transition-colors duration-300">{item.title}</h3>
                <p className="text-xs text-slate-500 group-hover:text-blue-100 transition-colors duration-300">{item.desc}</p>
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

      {/* ━━ HOW ━━ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image src="/images/stock/dashboard.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#070d1a]/92" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">How</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
              상담만 하는 것이 아니라, 실제 실행까지 연결합니다
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              문의 접수 후 업종/예산/목표를 정리하고, 맞는 채널 제안부터 소재 제작, 광고 세팅, 운영/보완까지 한 번에 진행합니다.
            </p>
          </div>
          {/* Steps as connected flow */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-0">
            {processSteps.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="glass rounded-2xl p-5 lg:p-6 text-center min-w-35">
                  <div className="w-11 h-11 mx-auto rounded-xl bg-accent-blue/15 flex items-center justify-center mb-3">
                    <s.Icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <p className="text-[10px] text-accent-blue/50 font-bold tracking-widest mb-1">STEP {String(i + 1).padStart(2, "0")}</p>
                  <p className="text-xs font-bold text-white">{s.title}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block mx-2 text-slate-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
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

      {/* ━━ WHAT ━━ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">What</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              업종과 목적에 따라, 필요한 채널만 선별해 운영합니다
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {channels.map((ch) => (
              <Link key={ch.name} href="/services" className="group bg-slate-50 rounded-2xl p-5 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-accent-blue/10 border border-transparent transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-accent-blue/8 flex items-center justify-center mb-3 transition-colors duration-300 shadow-sm">
                  <ch.Icon className="w-5 h-5 text-slate-400 group-hover:text-accent-blue transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-deep-navy text-sm mb-0.5">{ch.name}</h3>
                <p className="text-[11px] text-slate-400">{ch.purpose}</p>
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

      {/* ━━ TARGET ━━ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
            <div className="lg:col-span-2 mb-12 lg:mb-0">
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Target</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-5">
                이런 고민이 있다면,<br />지금 광고 방향부터<br />다시 점검해야 합니다
              </h2>
              <Link href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-deep-navy text-white text-sm font-semibold rounded-xl hover:bg-deep-navy/90 transition-all duration-300">
                맞는 광고 방향 상담받기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-3 space-y-3">
              {[
                "광고는 하고 있는데 문의가 적은 업체",
                "어떤 광고부터 시작해야 할지 고민인 업체",
                "제작과 운영을 한 번에 맡기고 싶은 업체",
                "상담과 방문 전환이 중요한 업종",
                "기존 고객 재접촉이 필요한 업종",
                "예산 대비 효율이 중요한 광고주",
              ].map((text, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 lg:p-5 rounded-xl bg-white border border-slate-100 hover:border-accent-blue/15 transition-all duration-300">
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

      {/* ━━ PORTFOLIO PREVIEW ━━ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
            <div>
              <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Portfolio</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy">
                업종에 맞는 채널 조합과 운영 흐름
              </h2>
            </div>
            <Link href="/cases" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold mt-4 lg:mt-0 hover:gap-3 transition-all">
              전체 사례 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((c, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 border-l-4 ${c.accent} hover:shadow-lg transition-all duration-300`}>
                <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-3">{c.industry}</p>
                <p className="text-sm font-semibold text-deep-navy mb-2">{c.channel}</p>
                <p className="text-xs text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <SectionCTA
        title="우리 업종에는 어떤 광고가 맞을지, 지금 방향부터 정리해보세요"
        description="여울디앤씨가 업종과 예산에 맞는 광고 구조를 먼저 정리해드립니다. 부담 없이 문의 남겨주시면 빠르게 상담 도와드립니다."
        buttonText="문의하기"
        variant="dark"
      />
    </>
  );
}
