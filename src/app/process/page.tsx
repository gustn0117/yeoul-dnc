import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IconClipboard, IconCompass, IconImage, IconSettings, IconBarChart, IconCheck, IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "진행절차 | 여울디앤씨",
  description: "맡기면 어떻게 흘러가는지, 짧고 확실하게 안내드립니다.",
};

const steps = [
  {
    step: "01", title: "상담 / 문의",
    main: "먼저 업종과 예산, 목표부터 간단하게 확인합니다",
    detail: "어떤 광고가 필요한지 바로 판단하기보다, 현재 상황과 원하는 방향을 먼저 파악한 뒤 상담을 진행합니다.",
    tags: ["업종", "예산", "목표 확인"],
    Icon: IconClipboard, color: "from-accent-blue to-blue-600",
  },
  {
    step: "02", title: "기획 / 전략",
    main: "업종에 맞는 채널과 광고 방향을 정리합니다",
    detail: "무조건 많은 채널을 제안하지 않고, 목표와 예산에 맞는 현실적인 운영 방식을 먼저 설계합니다.",
    tags: ["타겟 설정", "채널 선별", "운영 구조 설계"],
    Icon: IconCompass, color: "from-accent-blue to-blue-600",
  },
  {
    step: "03", title: "제작 / 세팅",
    main: "광고 소재와 세팅을 빠르게 준비합니다",
    detail: "이미지, 영상, 문구, 랜딩 또는 폼 구성을 정리하고 실제 송출을 위한 세팅까지 진행합니다.",
    tags: ["소재 제작", "문구 정리", "광고 세팅"],
    Icon: IconImage, color: "from-accent-blue to-blue-600",
  },
  {
    step: "04", title: "운영 / 최적화",
    main: "광고는 시작보다 운영 과정에서 차이가 납니다",
    detail: "집행 후 반응 데이터를 확인하고, 채널별 효율과 문의 흐름을 보며 예산/타겟/소재를 지속적으로 보완합니다.",
    tags: ["집행", "반응 확인", "효율 개선"],
    Icon: IconSettings, color: "from-accent-blue to-blue-600",
  },
  {
    step: "05", title: "결과 / 리포트",
    main: "성과를 체크하고, 다음 운영 방향까지 연결합니다",
    detail: "DB 유입, 상담 흐름, 반응 데이터를 바탕으로 운영 결과를 정리하고 필요한 보완 방향까지 함께 안내합니다.",
    tags: ["결과 체크", "피드백", "후속 운영 제안"],
    Icon: IconBarChart, color: "from-accent-blue to-blue-600",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#060e1e]">
        <Image src="/images/stock/code-screen.jpg" alt="" fill priority className="object-cover opacity-25" aria-hidden="true" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e]/93 via-[#0a1428]/91 to-[#060e1e]/96" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-20 right-10 w-96 h-96 bg-accent-blue/15 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">— PROCESS</p>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                처음 상담부터 광고 운영,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">결과 정리</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                까지 한 번에
              </h1>
              <p className="text-[14px] sm:text-base text-slate-300/90 max-w-md leading-relaxed">
                고객 상황을 먼저 확인한 뒤<br className="sm:hidden" />
                {" "}<span className="font-semibold text-white">필요한 채널과 실행 방법</span>을 제안합니다.
              </p>
              <div className="my-4 w-12 h-0.5 bg-accent-blue/50" />
              <p className="text-[14px] sm:text-sm text-slate-400/80 max-w-md leading-relaxed">
                각 단계는 짧고 확실하며,<br className="sm:hidden" />
                {" "}처음이셔도 바로 이해할 수 있습니다.
              </p>
            </div>

            {/* Clipboard with orbital rings */}
            <div className="hidden lg:flex justify-center items-center perspective-1200">
              <div className="relative w-72 h-72" style={{ transform: "rotateX(8deg) rotateY(-6deg)", transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />
                {/* Orbital rings (dashed) */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-blue/30" />
                <div className="absolute inset-6 rounded-full border-2 border-dashed border-accent-blue/20" />
                {/* Orbital dots */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-blue shadow-lg" style={{ animation: "float 4s ease-in-out infinite" }} />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-lg" style={{ animation: "float 5s ease-in-out infinite 1s" }} />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-lg" style={{ animation: "float 4.5s ease-in-out infinite 2s" }} />
                {/* Center clipboard */}
                <div className="absolute inset-12 rounded-full glass-3d-dark flex items-center justify-center shadow-3d-lg">
                  <svg className="w-20 h-20 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    <circle cx="17" cy="14" r="3" fill="currentColor" stroke="none" />
                    <path d="M15.5 14L16.5 15L18.5 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline overview (PDF reference style) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-b from-[#eef4ff] via-[#f5f9ff] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-4">TIMELINE</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-deep-navy leading-tight mb-3">
              문의부터 리포트까지,{" "}
              <span className="text-accent-blue">5단계로 진행합니다</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] text-slate-500 leading-relaxed">
              체계적인 프로세스로 효율적인 광고 운영을 만듭니다.
            </p>
          </div>

          {/* Horizontal connected steps — STEP pill bar + 카드 (사진 매칭) */}
          <div className="hidden md:block">
            {/* STEP NN pill bar with connecting line */}
            <div className="relative mb-6 sm:mb-8">
              {/* 연결선 */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[8%] right-[8%] h-px bg-accent-blue/40" />
              <div className="grid grid-cols-5 gap-4 relative">
                {steps.map((s) => (
                  <div key={s.step} className="flex flex-col items-center">
                    <div className="px-4 py-1.5 rounded-full bg-accent-blue text-white text-[11px] font-extrabold shadow-md tracking-wider mb-2">
                      STEP {s.step}
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-accent-blue shadow-md" />
                  </div>
                ))}
              </div>
            </div>

            {/* 5 카드 — 사진 + 아이콘 원 + STEP NN + 제목 + 설명 (화살표로 연결) */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4 relative items-stretch">
              {steps.map((s, i) => (
                <div key={s.step} className="relative flex flex-col h-full group">
                  <div className="relative flex-1 flex flex-col rounded-2xl overflow-hidden shadow-lg shadow-blue-900/10 border border-slate-100 bg-white hover:-translate-y-1 transition-transform duration-300">
                    {/* 이미지 */}
                    <div className="relative aspect-4/3 shrink-0">
                      <Image
                        src={[
                          "/images/0515/team-presentation-1.png",
                          "/images/0515/team-presentation-3.png",
                          "/images/stock/creative-design.jpg",
                          "/images/stock/analytics-screen.jpg",
                          "/images/stock/monitor-data.jpg",
                        ][i]}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* 아이콘 원형 (이미지와 텍스트 사이에 걸침) */}
                    <div className="relative -mt-8 mb-2 flex justify-center z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-slate-100 shadow-md flex items-center justify-center">
                        <s.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-blue" />
                      </div>
                    </div>
                    {/* 텍스트 */}
                    <div className="flex-1 flex flex-col items-center text-center px-3 sm:px-4 pb-5 pt-1">
                      <p className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 tracking-[0.2em]">STEP {s.step}</p>
                      <h3 className="text-base sm:text-lg font-extrabold text-deep-navy mt-1 mb-2.5 leading-tight">{s.title}</h3>
                      <p className="text-[11px] sm:text-[12px] text-slate-500 leading-relaxed">{s.main}</p>
                    </div>
                  </div>

                  {/* 카드 사이 화살표 (마지막 카드 제외) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 text-accent-blue/40 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-linear-to-b from-accent-blue/40 via-accent-blue/25 to-accent-blue/10" />
            <div className="space-y-5">
              {steps.map((s, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-6.5 top-2 w-5 h-5 rounded-full bg-linear-to-br ${s.color} shadow-md ring-4 ring-white`} />
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md shadow-blue-900/5 border border-slate-100">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex px-2 py-0.5 rounded-full bg-linear-to-r ${s.color} text-white text-[10px] font-bold`}>STEP {s.step}</span>
                      </div>
                      <p className="text-sm font-extrabold text-deep-navy mb-0.5">{s.title}</p>
                      <p className="text-[12px] text-slate-500 leading-relaxed">{s.main}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps detail — 사진 매칭: 좌측 timeline + 카드 (아이콘 원 + 텍스트 + 이미지 + 워터마크) */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-linear-to-b from-white to-[#f5f9ff] overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* 좌측 dot 패턴 장식 */}
          <div className="hidden lg:block absolute left-0 top-12 w-6 h-12 opacity-30" style={{ backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1.5px)", backgroundSize: "6px 6px" }} />

          {/* 좌측 vertical timeline (number badges + line) */}
          <div className="flex gap-5 sm:gap-8">
            <div className="relative hidden md:flex flex-col items-center w-12 sm:w-16 shrink-0 pt-6">
              {/* 연결선 */}
              <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-0.5 bg-accent-blue/30" />
              {steps.map((s, i) => (
                <div key={s.step} className="relative w-full flex-1 flex flex-col items-center" style={{ marginBottom: i < steps.length - 1 ? 0 : 0 }}>
                  {/* Number badge */}
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent-blue flex items-center justify-center shadow-md z-10">
                    <span className="text-white font-extrabold text-base sm:text-lg">{s.step}</span>
                  </div>
                  {/* Small dot below number */}
                  <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-accent-blue mt-3 z-10" />
                </div>
              ))}
            </div>

            {/* 우측 카드 stack */}
            <div className="flex-1 min-w-0 space-y-5 sm:space-y-6">
              {steps.map((s, i) => (
                <div
                  key={s.step}
                  className="relative group"
                  style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
                >
                  {/* 모바일 number badge */}
                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue flex items-center justify-center shadow-md">
                      <span className="text-white font-extrabold text-base">{s.step}</span>
                    </div>
                  </div>

                  {/* 카드 */}
                  <div className="relative bg-white rounded-2xl border border-slate-100 shadow-md group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
                    {/* 큰 숫자 워터마크 (우측, 이미지 뒤) */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-8 text-[5rem] sm:text-[6.5rem] font-black text-slate-100 leading-none select-none pointer-events-none">
                      {s.step}
                    </div>

                    <div className="relative grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-5 items-center p-4 sm:p-5 lg:p-6">
                      {/* 좌측 아이콘 원형 */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <s.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent-blue" />
                      </div>

                      {/* 중앙 텍스트 */}
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-[11px] font-extrabold text-accent-blue tracking-widest uppercase mb-1">STEP {s.step}</p>
                        <h3 className="text-lg sm:text-xl font-extrabold text-deep-navy mb-2 leading-tight">{s.title}</h3>
                        <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed mb-2">{s.main}</p>
                        <p className="text-[11px] sm:text-[12px] text-slate-400 leading-relaxed mb-3">{s.detail}</p>
                        {/* 태그 */}
                        <div className="flex flex-wrap gap-1.5">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 bg-accent-blue/8 text-accent-blue text-[10px] sm:text-[11px] rounded-full font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 우측 이미지 + 아이콘 배지 */}
                      <div className="relative w-full sm:w-48 lg:w-56 aspect-[5/4] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-md shrink-0">
                        <Image
                          src={[
                            "/images/0515/team-presentation-1.png",
                            "/images/0515/team-presentation-3.png",
                            "/images/stock/creative-design.jpg",
                            "/images/stock/analytics-screen.jpg",
                            "/images/stock/monitor-data.jpg",
                          ][i]}
                          alt={s.title}
                          fill
                          className="object-cover"
                        />
                        {/* 이미지 좌상단 아이콘 배지 */}
                        <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
                          <s.Icon className="w-4 h-4 text-accent-blue" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary strip (dark isometric) */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#060e1e]">
        <Image src="/images/stock/boardroom.jpg" alt="" fill className="object-cover opacity-25" aria-hidden="true" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e]/94 via-[#0a1428]/91 to-[#060e1e]/96" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-accent-blue/15 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">OUR WAY</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-tight">
                단순 광고가 아닌,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">성과 중심</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                으로 운영합니다
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-400 mb-6 max-w-md leading-relaxed">
                전략부터 운영, 데이터 분석까지 전 과정을 유기적으로 연결하여<br className="hidden sm:inline" />
                {" "}지속 가능한 성과를 만듭니다.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6">
                {[
                  {
                    num: "01",
                    tag: "STRATEGY",
                    title: "업종별 맞춤 전략으로 광고 방향을 설계합니다",
                    desc: "타겟 분석과 시장 데이터를 기반으로 최적의 채널 전략을 수립합니다.",
                    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" strokeLinecap="round" /><circle cx="12" cy="12" r="5" strokeLinecap="round" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
                  },
                  {
                    num: "02",
                    tag: "OPERATION",
                    title: "광고 운영 이후까지 지속적으로 관리합니다",
                    desc: "광고 집행부터 예산 관리, 소재 운영까지 전문적으로 운영합니다.",
                    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                  },
                  {
                    num: "03",
                    tag: "DATA-DRIVEN",
                    title: "데이터 기반 분석으로 광고 효율을 최적화합니다",
                    desc: "실시간 데이터 분석과 인사이트 도출로 광고 성과를 극대화합니다.",
                    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
                  },
                ].map((item, i) => (
                  <div key={item.num} className="group relative" style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}>
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/20" />
                    <div className="relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-accent-blue/40 transition-all">
                      <div className="relative w-10 h-10 shrink-0">
                        <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg bg-accent-blue/60 blur-[1px]" />
                        <div className="relative w-full h-full rounded-lg bg-linear-to-br from-accent-blue to-blue-600 flex items-center justify-center shadow-lg">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base font-black text-accent-blue leading-none">{item.num}</span>
                          <span className="text-[10px] sm:text-[11px] font-extrabold text-accent-blue tracking-widest">{item.tag}</span>
                        </div>
                        <p className="text-[14px] sm:text-sm text-white font-bold leading-snug mb-1">{item.title}</p>
                        <p className="text-[12px] sm:text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 원형 마케팅 플로우 다이어그램 (사진 매칭) */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />
              <div className="relative w-full aspect-square max-w-md mx-auto px-12 py-8">
                {/* 원형 영역 (노드 공간 확보 위해 padding 내부에 그려짐) */}
                <div className="relative w-full h-full">
                  {/* 외곽 글로우 */}
                  <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 60px rgba(96,165,250,0.4), inset 0 0 40px rgba(96,165,250,0.15)" }} />
                  {/* 외곽 ring (노드가 올라앉을 원) */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent-blue/40" />
                  {/* 중간 ring */}
                  <div className="absolute inset-[8%] rounded-full border border-accent-blue/30" />
                  {/* 내부 ring */}
                  <div className="absolute inset-[18%] rounded-full border border-accent-blue/15" />

                  {/* 5개 connector dot — 외곽 ring 위 (펜타곤 꼭짓점) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    {[0, 72, 144, 216, 288].map((deg) => {
                      const rad = ((deg - 90) * Math.PI) / 180;
                      const r = 50;
                      const x = 50 + r * Math.cos(rad);
                      const y = 50 + r * Math.sin(rad);
                      return <circle key={deg} cx={x} cy={y} r="1.2" fill="#60a5fa" />;
                    })}
                  </svg>

                  {/* 중앙 PERFORMANCE */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-[10px] font-extrabold text-accent-blue tracking-[0.3em] mb-2">PERFORMANCE</p>
                    <p className="text-base font-extrabold text-white leading-tight">성과 중심<br />마케팅 플로우</p>
                  </div>

                  {/* 5 노드 — 트리그 좌표로 외곽 ring 위에 정확히 배치 */}
                  {[
                    {
                      label: "전략 수립",
                      num: "01",
                      icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25" /></svg>,
                    },
                    {
                      label: "광고 집행",
                      num: "02",
                      icon: <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>,
                    },
                    {
                      label: "데이터 분석",
                      num: "03",
                      icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
                    },
                    {
                      label: "성과 최적화",
                      num: "04",
                      icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /></svg>,
                    },
                    {
                      label: "리포트 & 인사이트",
                      num: "05",
                      icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>,
                    },
                  ].map((n, i) => {
                    const angle = i * 72;
                    const rad = ((angle - 90) * Math.PI) / 180;
                    const x = 50 + 50 * Math.cos(rad);
                    const y = 50 + 50 * Math.sin(rad);
                    return (
                      <div
                        key={n.num}
                        className="absolute z-20"
                        style={{ top: `${y}%`, left: `${x}%`, transform: "translate(-50%, -50%)" }}
                      >
                        <div className="relative flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent-blue to-blue-700 flex items-center justify-center shadow-xl shadow-accent-blue/40 border border-accent-blue/40">
                            {n.icon}
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-slate-900/80 backdrop-blur-sm rounded-md px-2 py-1 whitespace-nowrap text-center">
                            <p className="text-[9px] font-extrabold text-accent-blue leading-none">{n.num}</p>
                            <p className="text-[11px] text-white font-bold leading-tight mt-0.5">{n.label}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 하단 3 feature 카드 (다크 글래스) */}
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  {
                    title: "업종 맞춤 전략",
                    desc: "업종과 목표에 최적화된 광고 전략을 설계합니다.",
                    icon: <svg className="w-7 h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
                  },
                  {
                    title: "실시간 성과 운영",
                    desc: "광고 데이터를 실시간으로 모니터링하고 효율을 높입니다.",
                    icon: <svg className="w-7 h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" /></svg>,
                  },
                  {
                    title: "데이터 기반 분석",
                    desc: "정확한 데이터 분석으로 더 나은 성과를 만듭니다.",
                    icon: <svg className="w-7 h-7 text-accent-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M11 3.05V12L17.96 18.18A10 10 0 1 1 11 3.05Z" opacity="0.3" /><path d="M13 3.05V11.05H21A10 10 0 0 0 13 3.05Z" /></svg>,
                  },
                ].map((c) => (
                  <div key={c.title} className="relative bg-white/4 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center mb-3">
                      {c.icon}
                    </div>
                    <p className="text-[13px] sm:text-[14px] font-extrabold text-white leading-tight mb-1">{c.title}</p>
                    <div className="w-6 h-0.5 bg-accent-blue/50 mb-2" />
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="복잡하게 고민하지 마시고, 현재 상황부터 편하게 말씀해 주세요"
        description="업종과 광고 상황을 확인한 뒤, 필요한 채널과 실행 방법부터 빠르게 정리해드립니다."
        buttonText="무료 광고 상담받기"
        variant="dark"
      />
    </>
  );
}
