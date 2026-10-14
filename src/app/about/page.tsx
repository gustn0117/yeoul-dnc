import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import ClosingCTA from "@/components/ClosingCTA";
import ChannelLogo, { type ChannelKey } from "@/components/ui/ChannelLogo";
import FlowLine from "@/components/ui/FlowLine";
import SectionHead from "@/components/ui/SectionHead";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("회사소개 | 여울디앤씨", "여울디앤씨는 유입부터 상담 전환까지 설계하는 온라인 광고 실행사입니다.", "/about");

const revealDelay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

const heroKeywords = ["업종 맞춤 전략", "데이터 기반 운영", "상담 전환 최적화"];

const brandPillars = [
  { label: "MISSION", title: "전환까지 책임지는 운영", sub: "기획부터 운영까지 전환율을 최우선으로 합니다." },
  { label: "VISION", title: "업종 맞춤 광고 파트너", sub: "업종과 목표에 맞는 전략으로 최적의 광고 성과를 만듭니다." },
  { label: "PROMISE", title: "데이터로 증명되는 성과", sub: "데이터 기반 분석과 최적화로 확실한 성과를 약속합니다." },
];

const coreValues = [
  { title: "데이터 중심 운영", desc: "화려한 제안보다 실제 반응과 문의로 이어지는 방향을 우선합니다." },
  { title: "실행력 있는 대응", desc: "빠른 실행과 수정으로 광고 효율을 지속적으로 개선합니다." },
  { title: "정직한 성과 설계", desc: "과장된 숫자 대신, 업종에 맞는 현실적인 운영 방식을 제안합니다." },
];

const strengths = [
  { num: "01", title: "업종별 타겟 이해", sub: "고객 니즈·검색의도·데이터 기반 정확한 타겟 설정" },
  { num: "02", title: "소재 제작과 운영 통합", sub: "맞춤 소재 기획·제작·운영까지 원스톱 진행" },
  { num: "03", title: "문의 이후 재접촉까지 설계", sub: "고객 여정 설계·재방문·신뢰성 강화로 관계화" },
];

const platforms: { key: ChannelKey; name: string }[] = [
  { key: "naver", name: "네이버" },
  { key: "kakaotalk", name: "카카오" },
  { key: "meta", name: "메타" },
  { key: "youtube", name: "유튜브" },
  { key: "google", name: "구글" },
  { key: "instagram", name: "인스타그램" },
];

// 로고는 해당 매체 이름과 맞을 때만 붙인다 (LMS·리타겟팅처럼 매체가 아닌 항목은 글자만)
type CaseChannel = { label: string; logo?: ChannelKey };

const cases: { industry: string; title: string; desc: string; img: string; alt: string; channels: CaseChannel[] }[] = [
  {
    industry: "분양",
    title: "부동산 분양 광고 최적화 운영",
    desc: "DB 유입과 재접촉 구조를 중심으로, 메타 리드폼과 문자 후속 시스템을 통해 분양 상담 전환까지 연결합니다.",
    img: "/images/0515/ind-apartment.png",
    alt: "조경이 잘 갖춰진 신축 아파트 단지",
    channels: [{ label: "메타 광고", logo: "meta" }, { label: "네이버 광고", logo: "naver" }, { label: "LMS 운영" }, { label: "리타겟팅" }],
  },
  {
    industry: "병원",
    title: "병·의원 브랜딩 및 유입 최적화",
    desc: "병원 광고는 검색 신뢰도와 반복 노출 브랜딩이 중요합니다. 플레이스·검색광고·메타 운영을 통해 예약 문의 전환을 도모합니다.",
    img: "/images/0515/ind-clinic.png",
    alt: "밝고 깔끔한 병원 로비와 안내 데스크",
    channels: [{ label: "네이버 검색", logo: "naver" }, { label: "메타 광고", logo: "meta" }, { label: "구글 검색", logo: "google" }, { label: "디스플레이" }],
  },
  {
    industry: "지역 자영업",
    title: "자영업 맞춤 지역 광고 솔루션",
    desc: "당근 광고와 지역 타겟 광고를 활용해 생활권 고객에게 노출시키고, 매장 유입 중심 퍼포먼스 마케팅을 진행합니다.",
    img: "/images/0515/ind-store.png",
    alt: "조명이 켜진 동네 카페 매장 입구",
    channels: [{ label: "당근 광고", logo: "danggeun" }, { label: "메타 광고", logo: "meta" }, { label: "네이버 광고", logo: "naver" }, { label: "브랜딩 운영" }],
  },
];

// 모바일에서는 첫 문장(lead)만 보여준다
const principles = [
  {
    title: "먼저 듣습니다",
    lead: "현재 상황과 목표부터 정확히 파악합니다.",
    rest: "무조건적인 제안보다, 상황에 맞는 질문을 먼저 합니다.",
    img: "/images/0515/op-consult.png",
    alt: "헤드셋을 쓰고 상담하는 직원",
    tags: ["업종 이해", "목표 정리", "예산 확인"],
  },
  {
    title: "구조를 만듭니다",
    lead: "필요한 채널만 선별하고, 소재부터 운영까지 일관된 흐름을 설계합니다.",
    rest: "실행 중심으로 준비합니다.",
    img: "/images/0515/team-presentation-3.png",
    alt: "광고 대시보드를 보며 운영 방향을 정하는 팀",
    tags: ["채널 선별", "소재 제작", "운영 세팅"],
  },
  {
    title: "보완을 반복합니다",
    lead: "데이터로 판단하고, 효율이 나오는 방향으로 조정합니다.",
    rest: "끝난 뒤에도 다음 방향까지 연결합니다.",
    img: "/images/stock/analytics-screen.jpg",
    alt: "모니터에 띄운 광고 성과 분석 그래프",
    tags: ["반응 확인", "효율 개선", "리포트"],
  },
];

export default function AboutPage() {
  return (
    <>
      <SubHero
        tag="여울디앤씨 회사소개"
        title={
          <>
            광고는 많이 하는 것보다,
            <br />
            <span className="text-accent">맞는 방향</span>으로 하는 것이 중요합니다
          </>
        }
        current="회사소개"
      />

      {/* 대표 이미지 + 한 줄 소개 */}
      <section className="pt-10 sm:pt-14 lg:pt-16">
        <div className="wrap">
          <div
            className="animate-rise-in relative aspect-4/3 overflow-hidden rounded-3xl bg-g100 sm:aspect-2/1 sm:rounded-4xl"
            style={{ "--delay": "0.24s" } as CSSProperties}
          >
            <Image
              src="/images/0515/team-presentation-1.png"
              alt="광고 성과 대시보드를 보며 전략 회의를 하는 팀"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <div className="mt-7 flex flex-col gap-5 sm:mt-10 xl:flex-row xl:items-center xl:justify-between xl:gap-12">
            {/* 히어로 문구의 앞 구절(업종, 예산, 목표를 먼저 확인하고)은 하단 ClosingCTA 설명과 겹쳐 한 줄로 줄임 */}
            <p className="text-[20px] font-bold leading-normal tracking-[-0.03em] text-g700 sm:text-[24px] xl:text-[26px]" data-reveal>
              <span className="text-accent">필요한 광고 구조부터 제안</span>하는
              <br className="sm:hidden" /> 온라인 광고 전문 실행사입니다.
            </p>
            <ul className="hidden flex-wrap gap-2 sm:flex" aria-label="여울디앤씨의 일하는 기준" data-reveal style={revealDelay(0.08)}>
              {heroKeywords.map((k) => (
                <li key={k} className="chip">
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BRAND — 네이비 면: 브랜드 문장 + 흰 로고 마크 + 반투명 카드 3개 */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="wrap">
          <div className="on-dark relative overflow-hidden rounded-4xl bg-night px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <FlowLine tone="dark" className="pointer-events-none absolute -right-56 -top-32 h-144 w-272 max-w-none" />
            <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <SectionHead
                  align="left"
                  tone="dark"
                  label="Brand"
                  title={
                    <>
                      광고는 집행보다
                      <br />
                      <span className="text-accent">구조가 중요</span>합니다
                    </>
                  }
                />
                <p className="mt-6 hidden max-w-xl text-lead text-white/72 sm:block" data-reveal style={revealDelay(0.12)}>
                  여울디앤씨는 업종에 맞는 채널 선택부터 소재 제작, 운영, 보완까지 연결하는{" "}
                  <strong className="font-bold text-white">온라인 광고 실행 파트너</strong>입니다.
                </p>
                <p className="mt-5 text-[19px] font-bold tracking-[-0.03em] text-[#8db8ff] sm:text-[21px]" data-reveal style={revealDelay(0.16)}>
                  결과를 만드는 광고는 시작부터 다릅니다.
                </p>
              </div>
              <div className="hidden lg:col-span-4 lg:flex lg:justify-end" data-reveal="scale">
                <Image src="/images/logo-mark-white-transparent.png" alt="여울디앤씨 로고" width={538} height={387} className="h-auto w-full max-w-64" />
              </div>
            </div>

            <ul className="relative mt-12 grid gap-3 sm:mt-14 lg:grid-cols-3 lg:gap-4">
              {brandPillars.map((p, i) => (
                <li key={p.label} className="rounded-card border border-white/10 bg-white/6 px-6 py-6 sm:px-8 sm:py-8 lg:py-9" data-reveal style={revealDelay(i * 0.08)}>
                  <p className="text-[15px] font-bold tracking-[0.08em] text-[#8db8ff]">{p.label}</p>
                  <h3 className="mt-3 text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] text-white sm:text-[26px] lg:text-[24px] xl:text-[28px]">{p.title}</h3>
                  <p className="mt-3 hidden text-pretty text-[17px] leading-[1.65] text-white/65 sm:block">{p.sub}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CORE VALUE — 상자 카드 대신 굵은 윗선으로 나눈 세 칸 */}
      <section className="panel py-20 sm:py-28 lg:py-32">
        <div className="wrap">
          <SectionHead
            align="left"
            wide
            label="Core Value"
            title={
              <>
                보여주기식 운영보다,
                <br />
                <span className="text-accent">실제 반응이 남는 광고</span>를 지향합니다
              </>
            }
            desc={
              <>
                여울디앤씨는 데이터와 경험을 바탕으로, 업종에 맞는 전략과 실행으로
                <br className="hidden lg:inline" /> 광고의 본질적인 성과를 만들어냅니다.
              </>
            }
            hideDescMobile
          />
          <ul className="mt-12 grid gap-9 sm:mt-16 lg:grid-cols-3 lg:gap-10">
            {coreValues.map((v, i) => (
              <li key={v.title} className="border-t-2 border-ink pt-6 sm:pt-7" data-reveal style={revealDelay(i * 0.08)}>
                <h3 className="text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] sm:text-[26px] lg:text-[28px]">{v.title}</h3>
                <p className="mt-3 max-w-sm text-pretty text-[17px] leading-[1.7] text-g700 sm:text-[18px]">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="wrap">
          <SectionHead
            align="left"
            label="Strengths"
            title={
              <>
                채널만 운영하는 것이 아니라,
                <br />
                <span className="text-accent">업종에 맞는 구조</span>까지 함께 설계합니다
              </>
            }
            desc={
              <>
                분양·병원·지역 자영업처럼 상담과 방문 전환이 중요한 업종은
                <br className="hidden md:inline" /> 매체 조합과 후속 운영 방식이 중요합니다.
              </>
            }
            hideDescMobile
          />

          <ol className="mt-10 border-t border-g200 sm:mt-14">
            {strengths.map((s, i) => (
              <li
                key={s.num}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 border-b border-g200 py-6 sm:gap-x-8 sm:py-8 lg:grid-cols-[6rem_1fr_1fr]"
                data-reveal
                style={revealDelay(i * 0.08)}
              >
                <span className="text-[22px] font-extrabold tabular-nums tracking-[-0.02em] text-brand sm:text-[28px]" aria-hidden="true">
                  {s.num}
                </span>
                <h3 className="text-[22px] font-extrabold leading-[1.35] tracking-[-0.04em] sm:text-[26px] lg:text-[28px]">{s.title}</h3>
                <p className="col-start-2 mt-2 hidden text-[17px] leading-[1.65] text-g700 sm:block sm:text-[18px] lg:col-start-3 lg:mt-0">{s.sub}</p>
              </li>
            ))}
          </ol>

          {/* 서비스 페이지의 업종별 설계(#industry)로 바로 이어짐 */}
          <div className="mt-8 flex flex-col gap-5 rounded-card bg-brand-50 px-7 py-7 sm:mt-10 sm:px-10 sm:py-9 md:flex-row md:items-center md:justify-between" data-reveal>
            <div>
              <p className="text-[20px] font-extrabold leading-[1.4] tracking-[-0.04em] text-brand sm:text-[24px]">전문 컨설팅으로 광고 효율을 극대화합니다</p>
              <p className="mt-2 hidden text-[17px] text-g700 sm:block sm:text-[18px]">업종 특성에 맞는 전략으로 확실한 성과를 만들어드립니다.</p>
            </div>
            <Link href="/services#industry" className="btn btn-brand shrink-0 self-start md:self-center">
              우리 업종 채널 조합 보기
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="pb-20 sm:pb-28 lg:pb-32">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-g100 sm:rounded-4xl md:aspect-video lg:aspect-4/3" data-reveal="scale">
              <Image
                src="/images/0515/team-presentation-2.png"
                alt="광고 성과 화면을 띄워 놓고 회의하는 팀"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHead
                align="left"
                label="Team"
                title={
                  <>
                    전략을 세우고,
                    <br />
                    빠르게 실행하고,
                    <br />
                    <span className="text-accent">데이터로 보완</span>하는 팀
                  </>
                }
                desc={
                  <>
                    회의·기획·모니터링·리포트 중심으로
                    <br className="sm:hidden" /> 움직이는 실행 조직입니다.
                  </>
                }
              />
              <div className="mt-9" data-reveal style={revealDelay(0.16)}>
                <p id="about-team-channels" className="text-[15px] font-semibold text-g600">
                  운영 채널
                </p>
                <ul aria-labelledby="about-team-channels" className="mt-3 grid max-w-md grid-cols-6 gap-2 sm:gap-3">
                  {platforms.map((p) => (
                    <li key={p.key} className="flex aspect-square items-center justify-center rounded-2xl border border-g200 bg-white">
                      <ChannelLogo name={p.key} size={28} alt={p.name} className="h-6 w-6 sm:h-7 sm:w-7" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="panel py-20 sm:py-28 lg:py-32">
        <div className="wrap">
          <SectionHead
            label="Cases"
            title={
              <>
                업종별 목적에 따라
                <br />
                <span className="text-accent">필요한 채널과 운영 방식</span>은 달라집니다
              </>
            }
            desc="여울디앤씨는 업종의 특성과 목표에 맞는 최적의 전략을 설계하고 실행합니다."
            hideDescMobile
          />

          {/* 태블릿(md)은 가로형 카드, 데스크톱(lg)은 3열 */}
          <ul className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
            {cases.map((c, i) => (
              <li key={c.industry} className="flex flex-col overflow-hidden rounded-card bg-white md:flex-row lg:flex-col" data-reveal style={revealDelay(i * 0.08)}>
                <div className="relative aspect-16/10 shrink-0 bg-g100 md:aspect-auto md:w-2/5 lg:aspect-16/10 lg:w-auto">
                  <Image src={c.img} alt={c.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7">
                  <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-[15px] font-bold text-brand">{c.industry}</span>
                  <h3 className="mt-4 text-[22px] font-extrabold leading-[1.35] tracking-[-0.04em] sm:text-[24px] xl:text-[26px]">{c.title}</h3>
                  <p className="mt-3 hidden text-[17px] leading-[1.7] text-g700 sm:block">{c.desc}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label={`${c.industry} 주요 운영 항목`}>
                    {c.channels.map((ch) => (
                      <li key={ch.label} className="inline-flex h-9 items-center gap-1.5 rounded-full bg-g100 px-3 text-[15px] font-semibold text-g700">
                        {ch.logo && <ChannelLogo name={ch.logo} size={16} />}
                        {ch.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-6 rounded-card bg-white px-6 py-7 sm:px-9 sm:py-9 md:flex-row md:items-center md:justify-between lg:mt-6" data-reveal>
            <div>
              <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-[15px] font-bold text-brand">그 외 모든 업종</span>
              <h3 className="mt-4 text-[22px] font-extrabold leading-[1.35] tracking-[-0.04em] sm:text-[24px] xl:text-[26px]">모든 업종 맞춤 종합 마케팅 솔루션</h3>
              <p className="mt-2 hidden text-[17px] leading-[1.7] text-g700 sm:block">네이버 + 구글 + LMS + 홈페이지 제작 + 메타 등, 상담 후 업종에 맞게 진행합니다.</p>
            </div>
            <Link href="/contact" className="btn btn-brand shrink-0 self-start md:self-center">
              상담 문의하기
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR APPROACH — 세 원칙을 순서대로 잇는 흐름 선. 아래 ClosingCTA가 자체 여백을 가지므로 하단 여백은 짧게 */}
      <section className="pb-4 pt-20 sm:pb-8 sm:pt-28 lg:pt-32">
        <div className="wrap">
          <SectionHead
            label="Our Approach"
            title={
              <>
                우리가 일하는 방식은
                <br className="sm:hidden" /> <span className="text-accent">3가지 원칙</span>을 따릅니다
              </>
            }
            desc={
              <>
                과정보다 결과, 수치보다 흐름.
                <br className="sm:hidden" /> 우리가 놓치지 않는 3가지 기준입니다.
              </>
            }
          />

          <ol className="mt-12 grid gap-14 sm:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
            {principles.map((p, i) => (
              <li key={p.title} className="relative" data-reveal style={revealDelay(i * 0.1)}>
                {/* 다음 원칙의 번호까지 이어지는 물결 선 (태블릿 이상, 화면에 들어오면 차례로 그려짐).
                    pathLength 그리기는 non-scaling-stroke와 함께 쓰면 일부만 그려지므로, 세로 좌표를 실제 높이(36px)와 맞춰 굵기 변형을 피함 */}
                {i < principles.length - 1 && (
                  <svg
                    data-draw
                    aria-hidden="true"
                    viewBox="0 0 360 36"
                    preserveAspectRatio="none"
                    fill="none"
                    className="pointer-events-none absolute left-14 top-1 hidden h-9 md:block md:w-[calc(100%-2.75rem)] lg:w-[calc(100%-2.25rem)]"
                  >
                    <path
                      d="M3 18 C 70 3, 120 3, 180 18 S 290 33, 357 18"
                      pathLength={1}
                      className="flow-path"
                      stroke="#2563eb"
                      strokeOpacity={0.45}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      style={{ "--d": `${0.35 + i * 0.9}s`, transitionDuration: "1.1s" } as CSSProperties}
                    />
                  </svg>
                )}
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-night text-[16px] font-extrabold tabular-nums text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative mt-6 aspect-16/10 overflow-hidden rounded-card bg-g100">
                  <Image src={p.img} alt={p.alt} fill sizes="(min-width: 1280px) 390px, (min-width: 768px) 32vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-6 text-[26px] font-extrabold leading-[1.3] tracking-[-0.04em] sm:text-[28px] lg:text-[30px]">{p.title}</h3>
                <p className="mt-3 text-pretty text-[17px] leading-[1.7] text-g700 sm:text-[18px]">
                  {p.lead}
                  <span className="hidden sm:inline"> {p.rest}</span>
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-16 max-w-3xl border-t border-g200 pt-14 text-center sm:mt-20 sm:pt-16" data-reveal>
            <p className="text-[17px] font-bold text-brand">결과로 증명합니다</p>
            <p className="mt-3 text-[26px] font-extrabold leading-[1.3] tracking-[-0.04em] text-ink sm:text-[34px]">작은 개선이 쌓여 성과가 됩니다.</p>
            <p className="mt-3 hidden text-lead text-g700 sm:block">데이터가 말해주는 결과로 신뢰를 만듭니다.</p>
          </div>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            우리 회사 광고, 어떤 방향이 맞는지
            <br className="hidden sm:inline" /> 함께 정리해드릴게요
          </>
        }
        desc={
          <>
            업종, 예산, 목표를 먼저 확인하고 필요한 광고 구조부터 제안합니다.
            <span className="hidden sm:inline">
              <br />
              무료 상담으로 부담 없이 시작해보세요.
            </span>
          </>
        }
      />
    </>
  );
}
