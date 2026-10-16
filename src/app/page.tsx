import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import SitePopup from "@/components/popup/SitePopup";
import HeroFlow from "@/components/home/HeroFlow";
import WordFill from "@/components/home/WordFill";
import ChannelPanels from "@/components/home/ChannelPanels";
import AdFan from "@/components/home/AdFan";
import TargetDots from "@/components/home/TargetDots";
import PerformanceBoard from "@/components/home/PerformanceBoard";
import ConsultSplit from "@/components/home/ConsultSplit";
import FaqList, { type Faq } from "@/components/home/FaqList";
import SectionHead from "@/components/ui/SectionHead";
import { ArrowIcon } from "@/components/ui/icons";
import { SITE_DESCRIPTION, SITE_TITLE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(SITE_TITLE, SITE_DESCRIPTION, "/");

const processSteps = [
  { title: "문의 접수", sub: "업종·예산·목표 확인" },
  { title: "광고 방향 제안", sub: "채널과 전략 수립" },
  { title: "소재 제작·세팅", sub: "이미지·영상·문구 준비" },
  { title: "광고 운영", sub: "집행 및 효율 최적화" },
  { title: "성과 체크·보완", sub: "결과 확인·보완·연결" },
];

const caseStudies = [
  {
    industry: "분양·부동산",
    title: "분양 현장 맞춤 마케팅",
    subtitle: "관심 고객 DB 확보와 빠른 상담 연결",
    desc: "메타 리드폼 광고로 관심 고객을 확보하고 문자 후속과 재타겟팅으로 방문과 상담으로 이어지는 흐름을 구축했습니다.",
    img: "/images/0515/ind-apartment.png",
    tactics: ["메타 리드폼", "디스플레이", "문자 마케팅", "재타겟팅"],
    metrics: [
      { label: "목표 ROAS 달성", value: "4.2x" },
      { label: "문의 증가율", value: "+58%" },
      { label: "CPA 절감률", value: "-32%" },
      { label: "실상담 전환", value: "120+" },
    ],
  },
  {
    industry: "병원·클리닉",
    title: "병원 신규 환자 유입",
    subtitle: "검색·노출 광고로 예약 전환 극대화",
    desc: "네이버 검색과 메타 광고를 함께 운영하여 검색 고객과 잠재 고객을 동시에 유입시키고, 예약까지 이어지는 구조를 설계합니다.",
    img: "/images/0515/ind-clinic.png",
    tactics: ["네이버 검색", "메타 광고", "디스플레이", "카카오톡 채널"],
    metrics: [
      { label: "목표 ROAS 달성", value: "3.6x" },
      { label: "예약 문의 증가", value: "+41%" },
      { label: "검색 효율 개선", value: "-28%" },
      { label: "예약 전환율", value: "89%" },
    ],
  },
  {
    industry: "지역 자영업",
    title: "지역 매장 매출 증대",
    subtitle: "당근·메타 생활권 타겟팅으로 방문 고객 유도",
    desc: "당근 광고와 지역 타겟 광고를 활용해 생활권 고객에게 노출하고, 프로모션과 연계하여 방문과 매출을 끌어올립니다.",
    img: "/images/0515/ind-store.png",
    tactics: ["당근 광고", "인스타그램", "네이버 플레이스", "문자 마케팅"],
    metrics: [
      { label: "광고 수익률", value: "2.8x" },
      { label: "방문 고객 증가", value: "+36%" },
      { label: "매출 증가", value: "+27%" },
      { label: "재방문율", value: "65%" },
    ],
  },
];

const voices = [
  {
    industry: "병원",
    summary: "예약 문의가 눈에 띄게 늘었어요",
    quote: "광고만 돌리는 게 아니라, 어떤 채널이 우리 병원에 맞는지 처음부터 같이 정리해주셨어요. 예약 문의가 두 배 이상 늘고, 상담부터 내원까지 흐름이 훨씬 좋아졌습니다.",
    name: "박 원장",
    desc: "서울 OO 정형외과",
    stat: { label: "예약 문의 증가", value: "+128%" },
  },
  {
    industry: "분양",
    summary: "DB 유입 구조가 안정됐습니다",
    quote: "리드폼만 하고 끝나는 게 아니라, 후속 문자까지 흐름을 잡아주셔서 실제 상담 전환율이 좋아졌습니다. 현장 상황을 빠르게 이해하고 전략을 제안해주셔서 맡길 수 있었습니다.",
    name: "이 팀장",
    desc: "OO 더 테라스 분양팀",
    stat: { label: "상담 전환율", value: "+32.8%" },
  },
  {
    industry: "지역 자영업",
    summary: "지역 단골이 꾸준히 늘었어요",
    quote: "당근하고 인스타 광고를 함께 진행했는데, 매장 주변 고객이 부쩍 늘었습니다. 작은 예산이지만 효율을 확실히 높여주셔서 만족스럽게 운영하고 있어요.",
    name: "정 대표",
    desc: "OO 카페/베이커리",
    stat: { label: "방문 고객 증가", value: "+56%" },
  },
];

// 대표 후기는 성과 수치가 가장 큰 병원 후기, 나머지는 작은 카드로
const [featuredVoice, ...otherVoices] = voices;

const shortVoices = [
  { industry: "쇼핑몰", text: "광고 구조를 꼼꼼하게 점검해주셔서 관리가 편해졌습니다.", name: "김 과장", desc: "OO 패션 쇼핑몰" },
  { industry: "약국", text: "문의부터 상담까지 자동화 흐름을 만들어주셔서 상담 누락이 거의 없어졌습니다.", name: "최 원장", desc: "OO 메디케어" },
  { industry: "B2B", text: "타겟팅과 소재 퀄리티가 확실히 다릅니다.", name: "오 부장", desc: "OO 제조업체" },
];

const faqs: Faq[] = [
  { tag: "채널 선정", q: "어떤 광고부터 시작해야 하는지 모르겠어요.", a: "업종, 예산, 목표를 바탕으로 가장 적합한 광고 채널과 운영 전략을 무료로 제안해드립니다. 처음 진행하시는 분들도 부담 없이 상담받으실 수 있습니다." },
  { tag: "제작 · 세팅", q: "광고 소재 제작도 함께 해주시나요?", a: "네. 이미지, 배너, 영상, 카피라이팅까지 광고 목적에 맞게 제작을 지원합니다. 업종과 타겟에 맞는 소재를 지속적으로 테스트하고 최적화합니다." },
  { tag: "예산", q: "최소 광고 예산은 얼마 정도가 필요한가요?", a: "업종과 목표에 따라 다르지만, 일반적으로 월 30만원~50만원 이상 예산부터 효율적인 운영이 가능합니다. 정확한 예산은 상담을 통해 안내해드립니다." },
  { tag: "리포트", q: "광고 집행 후 결과는 어떻게 확인할 수 있나요?", a: "광고 성과 리포트를 주간/월간 단위로 제공해드립니다. 노출, 클릭, 문의, 비용 등 핵심 지표를 보기 쉽게 정리해드리고, 운영 개선 방향까지 함께 제안해드립니다." },
  { tag: "랜딩 · 수신", q: "홈페이지가 없어도 광고 운영이 가능한가요?", a: "가능합니다. 랜딩페이지(단일 페이지)를 제작하여 광고 성과를 높여드립니다. 기존 홈페이지가 있으면 더 좋지만, 없어도 문제없습니다." },
  { tag: "계약", q: "계약 기간은 어떻게 되나요?", a: "기본 계약 기간은 1개월 단위입니다. 광고 성과와 방향을 충분히 확인하신 후 연장 여부를 결정하실 수 있어 부담 없이 시작하실 수 있습니다." },
];

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

export default function Home() {
  return (
    <>
      {/* 메인 팝업: 관리자 화면(팝업 관리)에서 켜고 끄고 내용을 바꿈 */}
      <SitePopup />

      {/* ━━ 첫 화면 ━━ */}
      <HeroFlow />

      {/* ━━ 스크롤로 차오르는 문장 ━━ */}
      <WordFill />

      {/* ━━ 운영 채널 ━━ */}
      <section className="pb-24 lg:pb-32" aria-labelledby="channels-title">
        <div className="wrap-wide xl:px-[clamp(2rem,4vw,5rem)]">
          <div className="mb-10 grid gap-5 lg:mb-14 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHead
              align="left"
              label="운영 채널"
              title={
                <span id="channels-title">
                  업종과 목적에 따라,
                  <br />
                  <span className="text-accent">필요한 채널만 선별</span>해 운영합니다
                </span>
              }
            />
            <p className="max-w-md text-lead text-g700 lg:text-right" data-reveal>
              모든 온라인 광고 채널을 활용해
              <br className="hidden sm:block" /> 예산과 목적에 맞게 조합합니다.
            </p>
          </div>
          <ChannelPanels />
        </div>
      </section>

      {/* ━━ 실제 광고 노출 화면 (네이비) ━━ */}
      <section className="on-dark bg-night py-24 text-white lg:py-32" aria-labelledby="adfan-title">
        <div className="wrap">
          <div className="mb-12 max-w-3xl lg:mb-16">
            <span className="inline-flex items-center gap-2.5 text-[15px] font-bold text-[#8db8ff]" data-reveal>
              <span className="h-0.5 w-6 rounded-full bg-[#8db8ff]" aria-hidden="true" />
              실제 노출 화면
            </span>
            <h2 id="adfan-title" className="mt-4 text-h2 text-white" data-reveal style={delay(0.06)}>
              고객이 보게 될 광고,
              <br />
              <span className="text-accent">화면까지 함께 만듭니다</span>
            </h2>
          </div>
          <AdFan />
        </div>
      </section>

      {/* ━━ 타깃 좁히기 ━━ */}
      <section className="py-24 lg:py-32" aria-labelledby="target-title">
        <div className="wrap">
          <SectionHead
            label="정밀 타겟팅"
            title={
              <span id="target-title">
                관심사·행동·위치 기반,
                <br />
                <span className="text-accent">필요한 사람에게만</span> 보여줍니다
              </span>
            }
            desc="조건을 하나씩 더해 대상을 좁히고, 문의할 만한 사람에게 예산을 씁니다."
            hideDescMobile
          />
          <div className="mt-12 sm:mt-16" data-reveal>
            <TargetDots />
          </div>
        </div>
      </section>

      {/* ━━ 성과 대시보드 ━━ */}
      <section className="pb-24 lg:pb-32" aria-labelledby="data-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHead
              align="left"
              label="데이터 기반 운영"
              title={
                <span id="data-title">
                  전략을 세우고,
                  <br />
                  빠르게 실행하고,
                  <br />
                  <span className="text-accent">데이터로 보완</span>합니다
                </span>
              }
              desc="회의·기획·모니터링·리포트 중심으로 움직이는 실행 조직입니다."
            />
            <ul className="mt-8 flex flex-col gap-2.5 text-[17px] font-semibold text-g800" data-reveal>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                노출 · 클릭 · 문의 · 비용을 한눈에 정리
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                주간 · 월간 성과 리포트 제공
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                반응을 보며 소재 · 예산 · 타겟 보완
              </li>
            </ul>
          </div>
          <PerformanceBoard />
        </div>
      </section>

      {/* ━━ 진행 흐름 ━━ */}
      <section className="py-24 lg:py-32" aria-labelledby="flow-title">
        <div className="wrap">
          <SectionHead
            label="진행 흐름"
            title={
              <span id="flow-title">
                상담만 하는 것이 아니라,
                <br />
                <span className="text-accent">실제 실행까지 연결</span>합니다
              </span>
            }
            desc={
              <>
                문의 접수 후 업종·예산·목표를 정리하고,
                <br className="hidden sm:block" /> 맞는 채널 제안부터 운영·보완까지 한 번에.
              </>
            }
          />
          <div className="relative mt-14 sm:mt-16" data-draw>
            <span className="absolute inset-x-0 top-0 hidden h-0.5 bg-g200 md:block" aria-hidden="true" />
            <span className="step-fill absolute inset-x-0 top-0 hidden h-0.5 bg-brand md:block" aria-hidden="true" />
            <ol className="grid gap-3 md:grid-cols-5 md:gap-0">
              {processSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative flex items-center gap-5 rounded-2xl bg-g50 px-5 py-5 md:flex-col md:items-start md:gap-0 md:rounded-none md:bg-transparent md:px-6 md:pb-2 md:pt-9"
                  data-reveal
                  style={delay(i * 0.07)}
                >
                  <span
                    className="step-dot absolute -top-1.75 left-6 hidden h-4 w-4 rounded-full border-[3px] border-white md:block"
                    style={{ "--dd": `${0.25 + i * 0.36}s` } as CSSProperties}
                    aria-hidden="true"
                  />
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-[20px] font-extrabold text-white md:h-auto md:w-auto md:justify-start md:bg-transparent md:text-[44px] md:leading-none md:tracking-[-0.04em] md:text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col md:mt-5">
                    <span className="text-[20px] font-extrabold tracking-[-0.035em] text-ink md:text-[22px]">{step.title}</span>
                    <span className="mt-1 text-[16px] text-g600 md:text-[17px]">{step.sub}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/process" className="btn btn-line min-h-12">
              진행절차 자세히 보기
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 업종별 사례 ━━ */}
      <section className="bg-g50 py-24 lg:py-32" aria-labelledby="cases-title">
        <div className="wrap">
          <SectionHead
            label="포트폴리오"
            title={
              <span id="cases-title">
                업종에 맞는 <span className="text-accent">채널 조합과 운영 흐름</span>
              </span>
            }
            desc="업종별 고민에 맞춰 채널 조합과 운영 흐름을 설계합니다."
          />
          <ul className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <li key={c.title} className="flex flex-col overflow-hidden rounded-card border border-g200 bg-white" data-reveal style={delay(i * 0.08)}>
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image src={c.img} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  <span className="pill absolute left-4 top-4 bg-white/95">{c.industry}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-[24px] font-extrabold tracking-[-0.04em] text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-[17px] font-semibold text-g700">{c.subtitle}</p>
                  <p className="mt-3 hidden text-[16px] leading-[1.7] text-g600 lg:block">{c.desc}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="채널 조합">
                    {c.tactics.map((t) => (
                      <li key={t} className="rounded-full bg-g100 px-3 py-1.5 text-[14px] font-semibold text-g700">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-auto grid grid-cols-2 gap-2 pt-6">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl bg-g50 px-4 py-3">
                        <dd className="text-[26px] font-extrabold tracking-[-0.04em] text-brand">{m.value}</dd>
                        <dt className="text-[14px] font-semibold text-g600">{m.label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Link href="/cases" className="btn btn-brand min-h-13">
              전체 사례 보기
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 광고주 후기 ━━ */}
      <section className="py-24 lg:py-32" aria-labelledby="voices-title">
        <div className="wrap">
          <SectionHead
            label="광고주 후기"
            title={
              <span id="voices-title">
                여울디앤씨와 함께한
                <br />
                <span className="text-accent">실제 광고주 후기</span>
              </span>
            }
            desc="과장된 후기보다, 실제 운영 결과로 들어온 피드백을 정리했습니다."
          />
          {/* 똑같은 카드 세 장 대신 위계: 성과가 가장 큰 후기 하나를 크게, 나머지는 작게, 짧은 후기는 선으로만 */}
          <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-12 lg:gap-5">
            <figure className="flex flex-col rounded-4xl bg-brand-50 p-7 sm:p-10 lg:col-span-7 lg:row-span-2 lg:p-12" data-reveal>
              <span className="block text-[80px] font-extrabold leading-[0.7] text-brand/25 sm:text-[104px]" aria-hidden="true">
                “
              </span>
              <span className="pill mt-4 self-start bg-white">{featuredVoice.industry}</span>
              <h3 className="mt-5 text-[26px] font-extrabold leading-[1.3] tracking-[-0.045em] text-ink sm:text-[34px]">{featuredVoice.summary}</h3>
              <blockquote className="mt-4 text-[17px] leading-[1.8] text-g800 sm:text-[19px]">{featuredVoice.quote}</blockquote>
              <figcaption className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-10">
                <p className="text-[15px] text-g600 sm:text-[16px]">
                  <span className="block text-[18px] font-bold text-ink">{featuredVoice.name}</span>
                  {featuredVoice.desc}
                </p>
                <p className="text-right">
                  <span className="block text-[56px] font-extrabold leading-none tracking-[-0.05em] text-brand sm:text-[72px]">{featuredVoice.stat.value}</span>
                  <span className="text-[15px] font-semibold text-g600">{featuredVoice.stat.label}</span>
                </p>
              </figcaption>
            </figure>
            {otherVoices.map((v, i) => (
              <figure key={v.name} className="flex flex-col rounded-4xl border border-g200 bg-white p-7 sm:p-8 lg:col-span-5" data-reveal style={delay(0.08 + i * 0.08)}>
                <div className="flex items-start justify-between gap-4">
                  <span className="pill">{v.industry}</span>
                  <p className="text-right">
                    <span className="block text-[30px] font-extrabold leading-none tracking-[-0.04em] text-brand">{v.stat.value}</span>
                    <span className="text-[14px] font-semibold text-g600">{v.stat.label}</span>
                  </p>
                </div>
                <h3 className="mt-4 text-[21px] font-extrabold leading-[1.35] tracking-[-0.04em] text-ink sm:text-[22px]">{v.summary}</h3>
                <blockquote className="mt-2 text-[16px] leading-[1.7] text-g700">“{v.quote}”</blockquote>
                <figcaption className="mt-auto pt-5 text-[15px] text-g600">
                  <span className="font-bold text-ink">{v.name}</span> · {v.desc}
                </figcaption>
              </figure>
            ))}
          </div>
          <ul className="mt-10 grid gap-6 border-t border-g200 pt-8 md:grid-cols-3 md:gap-0">
            {shortVoices.map((v, i) => (
              <li key={v.name} className="md:border-l md:border-g200 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0" data-reveal style={delay(0.1 + i * 0.06)}>
                <p className="text-[17px] font-semibold leading-[1.6] text-g800">“{v.text}”</p>
                <p className="mt-3 text-[15px] text-g600">
                  <span className="font-bold text-g800">{v.name}</span> · {v.desc} · {v.industry}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ━━ 자주 묻는 질문 ━━ */}
      <section className="pb-24 pt-8 lg:pb-32" aria-labelledby="faq-title">
        <div className="wrap max-w-5xl">
          <SectionHead
            label="자주 묻는 질문"
            title={
              <span id="faq-title">
                문의 전에 많이 물어보신 <span className="text-accent">자주 묻는 질문</span>
              </span>
            }
            desc="광고 진행 전 가장 많이 궁금해하시는 내용을 모았습니다."
          />
          <div className="mt-12 sm:mt-14">
            <FaqList items={faqs} />
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-[17px] text-g700">원하는 답변을 못 찾으셨나요?</p>
            <Link href="/contact" className="btn btn-brand min-h-13">
              직접 문의하기
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 상담 신청 ━━ */}
      <ConsultSplit />
    </>
  );
}
