import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import CaseScroller from "@/components/cases/CaseScroller";
import ChannelLogo from "@/components/ui/ChannelLogo";
import CountUp from "@/components/ui/CountUp";
import SectionHead from "@/components/ui/SectionHead";
import FlowLine from "@/components/ui/FlowLine";
import SubHero from "@/components/ui/SubHero";
import { OPERATION_LOGO_NAME, OPERATIONS } from "@/components/services/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("포트폴리오 | 여울디앤씨", "업종에 맞는 채널 조합과 운영 구조를 보여드립니다.", "/cases");

type Stat = { label: string; sub: string } & ({ count: number; suffix: string } | { text: string });

const stats: Stat[] = [
  { count: 5, suffix: "+", label: "주요 업종", sub: "다양한 업종 경험" },
  { count: 100, suffix: "+", label: "누적 캠페인", sub: "성과 기반 운영" },
  { count: 6, suffix: "개", label: "운영 채널", sub: "통합 마케팅 운영" },
  { text: "성과 중심", label: "퍼포먼스 마케팅", sub: "데이터 기반 최적화" },
];

// 업종 바로가기 버튼 (OPERATIONS와 같은 순서)
const industries = ["분양", "병원", "교육", "지역 자영업", "상담형 서비스"];

const works = [
  {
    title: "홈페이지 제작",
    desc: "기획부터 디자인, 개발까지 브랜드에 맞게 제작합니다.",
    point: "브랜드 신뢰 + 정보 전달",
    img: "/images/stock/landing-page.jpg",
  },
  {
    title: "홍보영상 제작",
    desc: "브랜드 메시지를 영상으로 정리해 신뢰감을 높입니다.",
    point: "브랜드 이미지 + 인지도 상승",
    img: "/images/stock/creative-design.jpg",
  },
  {
    title: "릴스·쇼츠영상 제작",
    desc: "짧은 영상으로 SNS 노출과 문의 확보를 돕습니다.",
    point: "유입 강화 + 문의 확보",
    img: "/images/stock/mobile-ads.jpg",
  },
  {
    title: "광고이미지 제작",
    desc: "광고 목적에 맞는 배너와 이미지를 제작합니다.",
    point: "시선 집중 + 클릭 유도 + 광고 성과 향상",
    img: "/images/stock/monitor-data.jpg",
  },
];

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

export default function CasesPage() {
  return (
    <>
      <SubHero
        tag="여울디앤씨 포트폴리오"
        title={
          <>
            성과는 광고비보다
            <br />
            <span className="text-accent">구조에서 달라</span>집니다
          </>
        }
        current="포트폴리오"
      />

      {/* 실적 숫자 — 네이비 성과 패널 (흐름 선 + 숫자 4개) */}
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="wrap">
          <div className="on-dark relative overflow-hidden rounded-4xl bg-night px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <FlowLine tone="dark" className="pointer-events-none absolute -right-32 -top-16 h-120 w-224 max-w-none" />
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
              <SectionHead
                align="left"
                tone="dark"
                label="Industries"
                title={
                  <>
                    다양한 업종 경험으로
                    <br />
                    <span className="text-accent">방향을 제안</span>합니다
                  </>
                }
                desc={<span className="block text-balance">업종별 특성에 맞는 최적의 채널 조합과 운영 전략을 제공합니다.</span>}
                hideDescMobile
              />
              <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10">
                {stats.map((s, i) => (
                  <li key={s.label} data-reveal style={delay(i * 0.08)} className="border-t border-white/15 pt-5">
                    <p className="whitespace-nowrap text-[30px] font-extrabold leading-none tracking-[-0.045em] text-[#8db8ff] sm:text-[42px] xl:text-[48px]">
                      {"count" in s ? <CountUp to={s.count} suffix={s.suffix} /> : s.text}
                    </p>
                    <p className="mt-3 text-[17px] font-bold tracking-[-0.03em] text-white sm:mt-4 sm:text-[18px]">{s.label}</p>
                    <p className="mt-1 hidden text-[15px] text-white/55 sm:block">{s.sub}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 업종별 운영 사례 — 기존 INDUSTRIES 업종 목록 + OPERATIONS 카드를 한 줄 가로 스크롤로 */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="wrap">
          <SectionHead
            label="Operations"
            title={
              <>
                업종에 맞는
                <br className="sm:hidden" /> <span className="text-accent">채널 조합과 운영 흐름</span>
              </>
            }
          />
        </div>

        <div data-reveal style={delay(0.12)}>
          <CaseScroller labels={industries} label="업종별 운영 사례" className="mt-10 sm:mt-12">
            {OPERATIONS.map((op) => (
              <li key={op.no} className="flex w-[82vw] max-w-88 shrink-0 snap-start sm:w-88">
                <article className="flex w-full flex-col">
                  <div className="relative aspect-4/3 overflow-hidden rounded-card bg-g100">
                    <Image src={op.img} alt="" fill sizes="(min-width: 640px) 22rem, 82vw" className="object-cover" />
                  </div>
                  <p className="mt-6 text-[16px] font-bold text-g600">
                    <span className="mr-1.5 tabular-nums text-brand">{op.no}</span>
                    {op.industry}
                  </p>
                  <h3 className="mt-2 text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] text-ink lg:text-[26px]">{op.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.65] text-g700 sm:text-[17px]">
                    {op.lead}
                    <span className="hidden sm:inline"> {op.rest}</span>
                  </p>

                  <div className="mt-auto pt-6">
                    <ul className="flex gap-2" aria-label="운영 채널">
                      {op.logos.map((logo) => (
                        <li key={logo} className="flex h-11 w-11 items-center justify-center rounded-xl border border-g200 bg-white">
                          <ChannelLogo name={logo} size={24} alt={OPERATION_LOGO_NAME[logo]} />
                        </li>
                      ))}
                    </ul>
                    <dl className="mt-4 grid gap-2.5 rounded-2xl bg-g50 px-5 py-4">
                      <div className="flex gap-4">
                        <dt className="w-8 shrink-0 text-[15px] font-bold leading-[1.6] text-g600">핵심</dt>
                        <dd className="text-[17px] font-bold leading-normal tracking-[-0.02em] text-ink">{op.point}</dd>
                      </div>
                      <div className="flex gap-4">
                        <dt className="w-8 shrink-0 text-[15px] font-bold leading-[1.6] text-g600">목표</dt>
                        <dd className="text-[17px] font-bold leading-normal tracking-[-0.02em] text-ink">{op.target}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </li>
            ))}
          </CaseScroller>
        </div>
      </section>

      {/* 작업물 — 큰 제목·본문, 번호 라벨·가짜 화살표 제거 */}
      <section className="pb-4">
        <div className="wrap">
          <SectionHead
            label="Works"
            // 둘째 줄(약 780px)이 기본 폭(max-w-3xl)을 살짝 넘어 3줄로 꺾이는 것 방지
            wide
            title={
              <>
                <span className="hidden sm:inline">
                  광고는 결과도 중요하지만,
                  <br />
                </span>
                시작은 <span className="text-accent">퀄리티 있는 작업물</span>에서 달라집니다
              </>
            }
          />

          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {works.map((w, i) => (
              <li key={w.title} data-reveal style={delay(i * 0.08)} className="flex flex-col">
                <div className="relative aspect-16/10 overflow-hidden rounded-card bg-g100 lg:aspect-4/3">
                  <Image src={w.img} alt="" fill sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw" className="object-cover" />
                </div>
                <h3 className="mt-6 text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] text-ink lg:text-[26px]">{w.title}</h3>
                <p className="mt-2.5 text-[17px] leading-[1.65] text-g700 lg:text-[18px]">{w.desc}</p>
                <div className="mt-auto pt-5">
                  <div className="border-t border-g200 pt-5">
                    <p className="text-[15px] font-bold text-g600">핵심 포인트</p>
                    <p className="mt-1 text-[18px] font-extrabold leading-normal tracking-[-0.03em] text-accent">{w.point}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-center text-[16px] leading-[1.7] text-g600 sm:mt-20">
            포트폴리오는 지속적으로 업데이트됩니다.
            <br className="sm:hidden" /> 업종에 따라 필요한 방식은 다르게 제안됩니다.
          </p>
        </div>
      </section>

      {/* 페이지 제목과 같은 문장이 반복되지 않게, 기존 CTA 설명 문장을 제목으로 */}
      <ClosingCTA
        title={
          <>
            우리 업종에 맞는 채널 조합과
            <br className="hidden sm:block" /> 운영 흐름부터 정리해드립니다
          </>
        }
        desc="광고가 처음이셔도 부담 없이 상황만 남겨주세요."
      />
    </>
  );
}
