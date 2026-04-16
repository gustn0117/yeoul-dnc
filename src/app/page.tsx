import Link from "next/link";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import {
  IconKakao, IconSearch, IconMeta, IconYoutube, IconGlobe, IconMail, IconCarrot, IconBuilding,
  IconTarget, IconLayers, IconBarChart, IconRefresh, IconCheck, IconArrowRight, IconZap,
  IconClipboard, IconCompass, IconImage, IconSettings, IconPlay,
} from "@/components/Icons";

const channels = [
  { name: "메타 광고", purpose: "관심사 기반 타겟팅과 리드 수집", Icon: IconMeta, color: "from-blue-500 to-indigo-600" },
  { name: "네이버 광고", purpose: "검색 수요 기반 문의 확보", Icon: IconSearch, color: "from-green-500 to-emerald-600" },
  { name: "카카오 광고", purpose: "상담 유입과 재접촉 운영", Icon: IconKakao, color: "from-yellow-400 to-amber-500" },
  { name: "유튜브 광고", purpose: "브랜드 인지도와 신뢰 형성", Icon: IconYoutube, color: "from-red-500 to-rose-600" },
  { name: "구글 광고", purpose: "검색+디스플레이+리타겟팅 확장", Icon: IconGlobe, color: "from-sky-500 to-cyan-600" },
  { name: "문자 마케팅", purpose: "기존 고객 재접촉 및 안내", Icon: IconMail, color: "from-violet-500 to-purple-600" },
  { name: "당근/지역 광고", purpose: "생활권 고객 유입", Icon: IconCarrot, color: "from-orange-400 to-orange-600" },
  { name: "부동산 특화", purpose: "분양 임대 실수요 타겟", Icon: IconBuilding, color: "from-teal-500 to-teal-600" },
];

const whyUs = [
  { title: "업종 맞춤 채널 제안", desc: "업종과 목적에 맞는 채널만 선별해 제안합니다. 불필요한 채널을 권유하지 않습니다.", Icon: IconTarget },
  { title: "문의 전환 중심 운영", desc: "노출이 아니라 실제 문의와 상담 전환을 설계합니다. 클릭만 많은 광고는 의미 없습니다.", Icon: IconZap },
  { title: "소재 제작부터 운영까지", desc: "광고 소재 제작, 세팅, 운영, 최적화까지 한 번에 진행합니다.", Icon: IconLayers },
  { title: "데이터 기반 최적화", desc: "반응 데이터를 분석하고, 효율이 나오는 방향으로 지속적으로 보완합니다.", Icon: IconBarChart },
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center min-h-[calc(100vh-72px)]">

            {/* ── Left: copy ── */}
            <div className="lg:col-span-6 py-20 lg:py-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold leading-hero text-deep-navy tracking-tight mb-5">
                온라인 광고,<br />
                <span className="gradient-text">결과</span>로 말합니다
              </h1>

              <div className="space-y-2.5 mb-7">
                {["광고비만 쓰고 끝나셨나요?", "문의 없는 광고는 의미 없습니다"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 bg-slate-50 rounded-lg px-4 py-2.5 w-fit border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-[13px] text-slate-700 font-medium">{t}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-500 mb-8 max-w-sm">
                전환 중심으로 설계된 광고 운영.<br />
                불필요한 광고비 지출없이, 결과가 달라집니다.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="group px-7 py-3.5 bg-linear-to-r from-accent-blue to-blue-600 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-accent-blue/30 transition-all duration-300 flex items-center gap-2">
                  상담 신청하기 <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/about" className="px-7 py-3.5 text-sm text-slate-600 font-semibold rounded-xl border border-slate-200 hover:border-accent-blue/30 hover:bg-accent-blue/4 hover:text-accent-blue transition-all duration-300">
                  우리만의 차별점 보기
                </Link>
              </div>

              {/* Media bar */}
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { name: "Kakao", Icon: IconKakao },
                  { name: "NAVER", Icon: IconSearch },
                  { name: "Meta", Icon: IconMeta },
                  { name: "YouTube", Icon: IconYoutube },
                  { name: "Google", Icon: IconGlobe },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-1.5 text-xs text-slate-400 opacity-60">
                    <m.Icon className="w-4 h-4" /> {m.name}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: visual ── */}
            <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center py-16">
              {/* Decorative ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-accent-blue/10 animate-pulse-soft" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-accent-blue/5" />

              {/* Main image */}
              <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 border-4 border-white z-10">
                <Image src="/images/stock/woman-professional.jpg" alt="광고 전문가" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-linear-to-t from-deep-navy/30 via-transparent to-transparent" />
              </div>

              {/* Floating card: 전환율 */}
              <div className="absolute top-8 right-4 bg-white rounded-2xl shadow-xl shadow-blue-900/8 p-4 border border-slate-100 z-20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">전환율</p>
                    <p className="text-lg font-extrabold text-deep-navy">+32.8%</p>
                  </div>
                </div>
              </div>

              {/* Floating card: ROAS */}
              <div className="absolute top-1/2 -right-2 bg-white rounded-2xl shadow-xl shadow-blue-900/8 p-4 border border-slate-100 z-20 animate-float-slow">
                <p className="text-[10px] text-slate-400 mb-1">광고 효율 (ROAS)</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-2xl font-extrabold text-accent-blue">4.8</p>
                  <p className="text-xs font-bold text-slate-400">배</p>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 mt-2 h-6">
                  {[40, 55, 35, 70, 60, 80, 90].map((h, i) => (
                    <div key={i} className="w-2 rounded-sm bg-accent-blue/20" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Floating card: 문의 증가 */}
              <div className="absolute bottom-12 left-0 bg-white rounded-2xl shadow-xl shadow-blue-900/8 p-4 border border-slate-100 z-20" style={{ animation: "float 5s ease-in-out infinite 1.5s" }}>
                <p className="text-[10px] text-slate-400 mb-1">문의 증가</p>
                <p className="text-lg font-extrabold text-deep-navy">+56%<span className="text-emerald-500 text-xs font-bold ml-1">↑</span></p>
              </div>

              {/* Mini dashboard */}
              <div className="absolute bottom-4 right-8 w-36 rounded-xl overflow-hidden shadow-lg border-2 border-white z-20" style={{ animation: "float-slow 7s ease-in-out infinite 2s" }}>
                <Image src="/images/stock/dashboard.jpg" alt="" width={400} height={280} className="w-full h-auto" aria-hidden="true" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ WHY ━━━━━━━━━━━━━ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Why</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              광고는 많이 하는 것보다,<br className="sm:hidden" /> 맞게 하는 것이 더 중요합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              여울디앤씨는 업종과 목표에 따라 채널을 선별하고, 문의 전환까지 고려한 구조로 광고를 운영합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, i) => (
              <div key={item.title} className="group relative p-7 rounded-2xl border border-slate-100 bg-white hover:border-accent-blue/20 hover:shadow-xl hover:shadow-accent-blue/8 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-6 right-6 text-6xl font-black text-slate-50 group-hover:text-accent-blue/5 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-accent-blue/8 group-hover:bg-accent-blue flex items-center justify-center mb-5 transition-all duration-500">
                    <item.Icon className="w-5 h-5 text-accent-blue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-base font-bold text-deep-navy mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-accent-blue/6 text-accent-blue text-sm font-semibold rounded-xl hover:bg-accent-blue hover:text-white transition-all duration-300">
              무료 상담 받기 <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ HOW ━━━━━━━━━━━━━ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image src="/images/stock/dashboard.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#060e1e]/93" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">How</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
              상담만 하는 것이 아니라, 실제 실행까지 연결합니다
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              문의 접수 후 업종/예산/목표를 정리하고, 맞는 채널 제안부터 소재 제작, 운영/보완까지 한 번에.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-white/8 hidden lg:block" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {processSteps.map((s, i) => (
                <div key={i} className="card-shine glass rounded-2xl p-6 text-center group hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-accent-blue/15 group-hover:bg-accent-blue/30 flex items-center justify-center mb-3 transition-colors duration-300 relative">
                    <s.Icon className="w-5 h-5 text-accent-blue" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-blue text-white text-[9px] font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <p className="text-xs font-bold text-white mb-0.5">{s.title}</p>
                  <p className="text-[10px] text-slate-500">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/process" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold hover:gap-3 transition-all">
              진행절차 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ WHAT ━━━━━━━━━━━━━ */}
      <section className="py-24 lg:py-32 bg-linear-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">What</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              업종과 목적에 따라, 필요한 채널만 선별해 운영합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              메타/네이버/카카오/유튜브/구글부터 지역/문자/부동산 특화 채널까지 예산과 목적에 맞게 조합합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((ch) => (
              <Link key={ch.name} href="/services" className="group relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${ch.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center mb-3 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                    <ch.Icon className="w-5 h-5 text-slate-400 group-hover:text-accent-blue transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-deep-navy text-sm mb-0.5">{ch.name}</h3>
                  <p className="text-[11px] text-slate-400">{ch.purpose}</p>
                  <div className="mt-3 flex items-center gap-1 text-[10px] text-accent-blue font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    자세히 보기 <IconArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ TARGET ━━━━━━━━━━━━━ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-20 lg:items-center">
            <div className="lg:col-span-2 mb-12 lg:mb-0">
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Target</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-5">
                이런 고민이 있다면,<br />지금 광고 방향부터<br />다시 점검해야 합니다
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                광고는 하고 있는데 문의가 적다면, 채널이 아니라 구조를 점검해야 합니다.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-deep-navy text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-deep-navy/25 transition-all duration-300">
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
                <div key={i} className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-accent-blue/20 hover:shadow-md hover:shadow-accent-blue/5 transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-accent-blue/6 flex items-center justify-center shrink-0 group-hover:bg-accent-blue transition-all duration-300">
                    <IconCheck className="w-4 h-4 text-accent-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-slate-700 text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ PORTFOLIO ━━━━━━━━━━━━━ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
            <div>
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Portfolio</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy">
                업종에 맞는 채널 조합과 운영 흐름
              </h2>
            </div>
            <Link href="/cases" className="group inline-flex items-center gap-2 text-sm text-accent-blue font-semibold mt-4 lg:mt-0 hover:gap-3 transition-all">
              전체 사례 보기 <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <div key={i} className="group relative p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full ${c.color} rounded-r-full`} />
                <div className="relative pl-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white ${c.color} mb-4`}>
                    {c.industry}
                  </div>
                  <p className="text-sm font-bold text-deep-navy mb-2">{c.channel}</p>
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
