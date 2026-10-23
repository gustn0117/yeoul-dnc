import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import ClosingCTA from "@/components/ClosingCTA";
import FlowLine from "@/components/ui/FlowLine";
import SectionHead from "@/components/ui/SectionHead";
import SectionTabs from "@/components/ui/SectionTabs";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon, KakaoIcon } from "@/components/ui/icons";
import { COMPANY, KAKAO_URL, TEL_HREF, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "회사소개 | 여울디앤씨",
  "여울디앤씨는 종합광고 실행사입니다. 온라인 광고를 기획·운영하고, 광고에 필요한 영상·디자인·문서·홈페이지를 만들며, 문의 이후의 고객관리까지 연결합니다.",
  "/about",
);

const revealDelay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

const TABS = [
  { id: "intro", label: "하는 일" },
  { id: "way", label: "일하는 방식" },
  { id: "scope", label: "업무 범위" },
  { id: "comm", label: "소통 방식" },
  { id: "info", label: "회사 정보" },
];

const PILLARS = [
  { en: "Advertising", title: "광고·마케팅", desc: "네이버, 메타, 카카오, 구글·유튜브, LMS 문자, 당근 등 목표에 맞는 매체를 골라 소재 제작부터 운영과 보고까지 진행합니다.", href: "/marketing", link: "광고·마케팅 보기" },
  { en: "Production", title: "제작서비스", desc: "릴스·홍보영상, 광고 디자인과 인쇄물 디자인, PPT·제안서·회사소개서, 홈페이지·랜딩페이지를 결과물 단위로 제작합니다.", href: "/production", link: "제작서비스 보기" },
  { en: "Customer Care", title: "고객관리·자동화", desc: "SNS 댓글·DM 자동화, 홈페이지 기능 개선, 시트 연동, 알림톡·문자 발송 등 반복 업무를 줄이고 고객 관리를 연결합니다.", href: "/automation", link: "고객관리·자동화 보기" },
];

const PRINCIPLES = [
  {
    title: "먼저 듣고 범위를 정합니다",
    desc: "업종, 목표, 일정, 예산을 확인하고 이번에 맡길 업무와 맡기지 않을 업무를 먼저 나눕니다. 범위가 분명해야 일정과 비용도 정확하게 안내할 수 있습니다.",
    img: "/images/0515/op-consult.png",
    alt: "헤드셋을 쓰고 상담하는 직원",
  },
  {
    title: "과장 없이 제안합니다",
    desc: "노출 순위나 문의 수를 약속하지 않습니다. 매체가 제공하는 조건과 지금 가진 자료로 할 수 있는 일, 그리고 확인이 필요한 일을 구분해 설명합니다.",
    img: "/images/0515/team-presentation-2.png",
    alt: "화면을 띄워 놓고 제안 내용을 설명하는 회의",
  },
  {
    title: "반응을 보고 보완합니다",
    desc: "운영 데이터와 상담 현장의 피드백을 기준으로 소재, 문구, 화면을 고칩니다. 바꾼 내용과 이유는 보고서에 함께 남깁니다.",
    img: "/images/stock/analytics-screen.jpg",
    alt: "모니터에 띄운 광고 반응 분석 그래프",
  },
];

const SCOPE_ROWS = [
  { label: "여울디앤씨 수행", desc: "기획, 광고 세팅·운영, 디자인·편집, 문서 구성, 웹페이지 구축, 접수 흐름 연결, 보고", when: "범위 협의 단계", tone: "brand" },
  { label: "외부 진행·비용", desc: "매체 광고비, 인쇄·출력, 모델·장소, 유료 이미지·음원·폰트, 도메인·호스팅, 메시지 발송 비용 등", when: "견적 안내 시 포함 여부 표시", tone: "gray" },
  { label: "고객 준비", desc: "로고·사진 등 자료, 사실 확인이 필요한 정보, 계정 권한, 시안 검토와 승인", when: "상담 직후 목록으로 전달", tone: "gray" },
];

const COMM = [
  { title: "정해진 소통 창구", desc: "프로젝트를 시작할 때 연락 창구와 채널(카카오톡, 전화, 이메일)을 정하고, 요청과 결정 사항을 한곳에 남깁니다." },
  { title: "단계별 검토 시점", desc: "기획안, 시안, 최종본처럼 검토할 시점을 미리 정해 두고, 각 단계에서 확인할 내용을 함께 전달합니다." },
  { title: "정리된 결과 보고", desc: "광고는 합의한 주기로 노출·클릭·문의·비용과 다음 조정안을, 제작은 납품물과 사용처별 적용 방법을 정리해 드립니다." },
];

const INFO = [
  ["상호", `${COMPANY.name} (${COMPANY.nameEn})`],
  ["대표", COMPANY.ceo],
  ["사업자등록번호", COMPANY.bizNo],
  ["대표전화", COMPANY.tel],
  ["이메일", COMPANY.email],
  ["상담 시간", `${COMPANY.hours} (${COMPANY.hoursNote})`],
];

export default function AboutPage() {
  return (
    <>
      <SubHero
        tag="회사소개 · About Yeoul D&C"
        current="회사소개"
        title={
          <>
            여러 업종의 광고를
            <br />
            <span className="text-accent">기획하고 만들고 운영합니다</span>
          </>
        }
        desc="여울디앤씨는 종합광고 실행사입니다. 온라인 광고를 기획·운영하고, 광고에 필요한 영상·디자인·문서·홈페이지를 만들며, 문의 이후의 고객관리 업무까지 연결합니다."
      />

      <div>
        <SectionTabs items={TABS} label="회사소개 바로가기" />

        {/* 하는 일 — 네이비 면 */}
        <section id="intro" className="scroll-mt-28 py-16 sm:py-24 lg:scroll-mt-36" aria-labelledby="intro-title">
          <div className="wrap">
            <div className="on-dark relative overflow-hidden rounded-4xl bg-night px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <FlowLine tone="dark" className="pointer-events-none absolute -right-56 -top-32 h-144 w-272 max-w-none" />
              <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-8">
                  <SectionHead
                    align="left"
                    tone="dark"
                    label="하는 일"
                    title={
                      <span id="intro-title">
                        광고를 운영하는 팀이
                        <br />
                        <span className="text-accent">제작물과 접수 화면까지</span> 함께 봅니다
                      </span>
                    }
                  />
                  <p className="mt-6 max-w-2xl text-lead text-white/72" data-reveal style={revealDelay(0.12)}>
                    광고 소재가 바뀌면 랜딩페이지 문구도 맞춰 바뀌어야 하고, 문의가 늘면 응대 순서와 기록 방식도 정리되어야 합니다. 여울디앤씨는 이 연결 지점을 한 팀에서 다룹니다.
                  </p>
                  <p className="mt-4 text-[18px] font-bold tracking-[-0.03em] text-[#8db8ff]" data-reveal style={revealDelay(0.16)}>
                    필요한 일만 따로 의뢰하셔도 같은 기준으로 진행합니다.
                  </p>
                </div>
                <div className="hidden lg:col-span-4 lg:flex lg:justify-end" data-reveal="scale">
                  <Image src="/images/logo-mark-white-transparent.png" alt="여울디앤씨 로고" width={538} height={387} className="h-auto w-full max-w-64" />
                </div>
              </div>

              <ul className="relative mt-12 grid gap-3 sm:mt-14 lg:grid-cols-3 lg:gap-4">
                {PILLARS.map((p, i) => (
                  <li key={p.en} className="flex flex-col rounded-card border border-white/10 bg-white/6 px-6 py-6 sm:px-8 sm:py-8" data-reveal style={revealDelay(i * 0.08)}>
                    <p className="text-[14px] font-bold tracking-[0.06em] text-[#8db8ff]">{p.en}</p>
                    <h3 className="mt-2 text-[24px] font-extrabold tracking-[-0.04em] text-white">{p.title}</h3>
                    <p className="mt-3 flex-1 text-pretty text-[16px] leading-relaxed text-white/68">{p.desc}</p>
                    <Link href={p.href} className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[16px] font-bold text-[#8db8ff] transition-colors hover:text-white">
                      {p.link}
                      <ArrowIcon className="h-4.5 w-4.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 일하는 방식 — 세 기준을 순서대로 잇는 물결 선 */}
        <section id="way" className="panel scroll-mt-28 py-20 sm:py-28 lg:scroll-mt-36 lg:py-32" aria-labelledby="way-title">
          <div className="wrap">
            <SectionHead
              label="일하는 방식"
              title={
                <span id="way-title">
                  <span className="text-accent">세 가지 기준</span>으로 일합니다
                </span>
              }
            />
            <ol className="mt-12 grid gap-14 sm:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
              {PRINCIPLES.map((p, i) => (
                <li key={p.title} className="relative" data-reveal style={revealDelay(i * 0.1)}>
                  {i < PRINCIPLES.length - 1 && (
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
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-night text-[16px] font-extrabold tabular-nums text-white">{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative mt-6 aspect-16/10 overflow-hidden rounded-card bg-g100">
                    <Image src={p.img} alt={p.alt} fill sizes="(min-width: 1280px) 390px, (min-width: 768px) 32vw, 100vw" className="object-cover" />
                  </div>
                  <h3 className="mt-6 text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] sm:text-[26px]">{p.title}</h3>
                  <p className="mt-3 text-pretty text-[16px] leading-[1.75] text-g700 sm:text-[17px]">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 업무 범위 */}
        <section id="scope" className="scroll-mt-28 py-20 sm:py-28 lg:scroll-mt-36 lg:py-32" aria-labelledby="scope-title">
          <div className="wrap">
            <SectionHead
              align="left"
              label="업무 범위"
              title={
                <span id="scope-title">
                  누가 무엇을 하는지
                  <br />
                  <span className="text-accent">시작 전에 정리</span>합니다
                </span>
              }
              desc="프로젝트마다 여울디앤씨가 맡는 일, 외부 업체와 진행하는 일, 고객님이 준비하실 일을 나눠 안내합니다."
            />
            <ul className="mt-12 overflow-hidden rounded-3xl border border-g200">
              {SCOPE_ROWS.map((r) => (
                <li key={r.label} className={`grid gap-2 border-b border-g200 px-6 py-6 last:border-b-0 md:grid-cols-[12rem_minmax(0,1fr)_14rem] md:items-center md:gap-8 md:px-8 ${r.tone === "brand" ? "bg-brand-50" : "bg-white"}`} data-reveal>
                  <h3 className={`text-[19px] font-extrabold tracking-[-0.035em] ${r.tone === "brand" ? "text-brand" : "text-ink"}`}>{r.label}</h3>
                  <p className="text-[16px] leading-relaxed text-g800">{r.desc}</p>
                  <p className="text-[15px] font-semibold text-g500 md:text-right">{r.when}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 소통 방식 */}
        <section id="comm" className="panel scroll-mt-28 py-20 sm:py-28 lg:scroll-mt-36 lg:py-32" aria-labelledby="comm-title">
          <div className="wrap">
            <SectionHead
              label="소통과 결과 공유"
              title={
                <span id="comm-title">
                  진행 상황을 <span className="text-accent">기다리지 않게</span> 공유합니다
                </span>
              }
            />
            <ul className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-6">
              {COMM.map((c, i) => (
                <li key={c.title} className="border-t-2 border-ink pt-6 sm:pt-7" data-reveal style={revealDelay(i * 0.08)}>
                  <h3 className="text-[23px] font-extrabold leading-[1.3] tracking-[-0.04em] sm:text-[25px]">{c.title}</h3>
                  <p className="mt-3 max-w-sm text-pretty text-[16px] leading-[1.75] text-g700 sm:text-[17px]">{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 회사 정보 */}
        <section id="info" className="scroll-mt-28 pb-4 pt-20 sm:pt-28 lg:scroll-mt-36 lg:pt-32" aria-labelledby="info-title">
          <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <SectionHead
                align="left"
                label="회사 정보"
                title={<span id="info-title">{COMPANY.name}</span>}
                desc={`상담은 ${COMPANY.hours}에 받습니다. 주말·공휴일 문의는 다음 영업일에 답변드립니다.`}
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-brand min-h-12 px-5">
                  상담 신청
                  <ArrowIcon className="h-4.5 w-4.5" />
                </Link>
                <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-soft min-h-12 px-5">
                  <KakaoIcon className="h-5 w-5" />
                  카카오톡 상담
                </a>
              </div>
            </div>
            <dl className="divide-y divide-g200 border-y border-g200" data-reveal>
              {INFO.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-4 text-[16px] sm:text-[17px]">
                  <dt className="font-bold text-g500">{label}</dt>
                  <dd className="text-g800">
                    {label === "대표전화" ? (
                      <a href={TEL_HREF} className="font-bold text-brand hover:underline">
                        {value}
                      </a>
                    ) : label === "이메일" ? (
                      <a href={`mailto:${value}`} className="hover:underline">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>

      <ClosingCTA
        title={
          <>
            우리 회사에 필요한 일,
            <br className="hidden sm:inline" /> 함께 정리해드릴게요
          </>
        }
        desc="업종, 예산, 목표를 먼저 확인하고 필요한 범위부터 제안합니다. 광고가 처음이셔도 부담 없이 문의하세요."
      />
    </>
  );
}
