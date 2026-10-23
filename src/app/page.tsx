import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import ProcessSteps from "@/components/ProcessSteps";
import ConsultSplit from "@/components/home/ConsultSplit";
import HeroFlow from "@/components/home/HeroFlow";
import Industries from "@/components/home/Industries";
import ServicePanels from "@/components/home/ServicePanels";
import WorksTabs from "@/components/home/WorksTabs";
import SitePopup from "@/components/popup/SitePopup";
import FlowLine from "@/components/ui/FlowLine";
import SectionHead from "@/components/ui/SectionHead";
import { ArrowIcon } from "@/components/ui/icons";
import { COMBOS } from "@/lib/offerings";
import { SITE_DESCRIPTION, SITE_TITLE, YEOULAD_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(SITE_TITLE, SITE_DESCRIPTION, "/");

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 메인 흐름 (고객사 개편안 기준): 첫 화면 → 대상 업종 → 하는 일 → 받게 되는 결과물 → 의뢰 방식과 진행 과정 → 상담
   분양·부동산은 전문 브랜드 여울애드로 짧게 안내만 */
export default function Home() {
  return (
    <>
      {/* 메인 팝업: 관리자 화면(팝업 관리)에서 켜고 끄고 내용을 바꿈 */}
      <SitePopup />

      {/* ━━ 첫 화면 ━━ */}
      <HeroFlow />

      {/* ━━ 대상 업종 ━━ */}
      <section id="industries" className="panel py-24 lg:py-32" aria-labelledby="industries-title">
        <div className="wrap">
          <SectionHead
            label="대상 업종"
            title={
              <span id="industries-title">
                우리 업종에 맞는 <span className="text-accent">마케팅</span>
              </span>
            }
            desc={
              <>
                업종의 특성과 고객의 선택 기준에 맞춰
                <br className="hidden sm:block" /> 광고 기획부터 콘텐츠 제작, 운영까지 함께합니다.
              </>
            }
          />
          <div className="mt-12 sm:mt-16">
            <Industries />
          </div>
        </div>
      </section>

      {/* ━━ 서비스 범위 ━━ */}
      <section id="services" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="services-title">
        <div className="wrap-wide xl:px-[clamp(2rem,4vw,5rem)]">
          <SectionHead
            align="split"
            label="서비스 범위"
            title={
              <span id="services-title">
                여울디앤씨가 <span className="text-accent">하는 일</span>
              </span>
            }
            desc="필요한 서비스만 따로 맡기거나, 여러 업무를 한 흐름으로 연결할 수 있습니다."
          />
          <div className="mt-12 lg:mt-14">
            <ServicePanels />
          </div>
        </div>
      </section>

      {/* ━━ 대표 작업물 ━━ */}
      <section id="works" className="panel py-24 lg:py-32" aria-labelledby="works-title">
        <div className="wrap">
          <SectionHead
            label="대표 작업물"
            title={
              <span id="works-title">
                받게 되는 <span className="text-accent">결과물</span>
              </span>
            }
            desc="영상, 홈페이지, 문서, 디자인, 광고 운영 보고서까지 결과물별로 확인하세요."
          />
          <div className="mt-12 sm:mt-14">
            <WorksTabs />
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/cases" className="btn btn-line min-h-12">
              포트폴리오 전체 보기
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ 의뢰 방식과 진행 과정 ━━ */}
      <section id="process" className="py-24 lg:py-32" aria-labelledby="process-title">
        <div className="wrap">
          <SectionHead
            label="의뢰 방식과 진행 과정"
            title={
              <span id="process-title">
                필요한 만큼 맡기고,
                <br />
                <span className="text-accent">같은 순서로</span> 진행합니다
              </span>
            }
            desc="아래는 서비스 조합 예시입니다. 실제 범위와 비용은 상담에서 확인한 뒤 정합니다."
          />

          <ul className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:gap-5">
            {COMBOS.map((c, i) => (
              <li key={c.title} className="flex flex-col rounded-4xl border border-g200 bg-white p-6 sm:p-8" data-reveal style={delay(i * 0.08)}>
                <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-[13px] font-bold text-brand">서비스 조합 예시</span>
                <h3 className="mt-4 text-[24px] font-extrabold tracking-[-0.04em] text-ink sm:text-[26px]">{c.title}</h3>
                <dl className="mt-5 divide-y divide-g100 border-y border-g100">
                  {[
                    ["대상 상황", c.situation],
                    ["포함 업무", c.tasks],
                    ["결과물", c.outputs],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3.5 text-[16px]">
                      <dt className="font-bold text-g500">{label}</dt>
                      <dd className="text-g800">{value}</dd>
                    </div>
                  ))}
                </dl>
                <Link href={c.href} className="mt-5 inline-flex min-h-11 items-center gap-2 text-[16px] font-bold text-brand hover:underline">
                  {c.linkLabel}
                  <ArrowIcon className="h-4.5 w-4.5" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-[16px] text-g600" data-reveal>
            영상·디자인·문서·홈페이지 제작만 따로 맡기실 수도 있습니다.{" "}
            <Link href="/production" className="inline-flex min-h-11 items-center font-bold text-brand underline underline-offset-4">
              제작서비스 보기
            </Link>
          </p>

          <div className="mt-14 sm:mt-16">
            <ProcessSteps />
          </div>
          <p className="mt-8 text-center text-[15px] leading-relaxed text-g600 sm:text-[16px]">
            제작만 의뢰하면 3단계 승인 후 최종 파일을 납품하고 마무리합니다.
            <br className="hidden sm:block" /> 단계별 준비 자료와 견적 구성은{" "}
            <Link href="/contact#guide" className="font-bold text-brand underline underline-offset-4">
              상담문의
            </Link>
            에서 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* ━━ 분양·부동산 → 전문 브랜드 여울애드 (짧게 안내만) ━━ */}
      <section className="pb-24 lg:pb-32" aria-labelledby="yeoulad-title">
        <div className="wrap">
          <div className="on-dark relative overflow-hidden rounded-4xl bg-night px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
            <FlowLine tone="dark" className="pointer-events-none absolute -right-40 -top-24 h-96 w-4xl max-w-none" />
            <div className="relative">
              <p className="text-[15px] font-bold text-[#8db8ff]">전문 분야 · 분양·부동산</p>
              <h2 id="yeoulad-title" className="mt-3 text-[clamp(24px,2.6vw,34px)] font-extrabold leading-snug tracking-[-0.045em] text-white">
                분양 광고는 전문 브랜드 <span className="text-[#8db8ff]">여울애드</span>가 맡습니다
              </h2>
              <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-white/70 sm:text-[17px]">분양 현장의 광고와 관심고객 접수를 현장 일정에 맞춰 함께 운영합니다.</p>
            </div>
            <div className="relative mt-7 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <a href={YEOULAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-signal min-h-13 px-6">
                여울애드 바로가기 ↗
              </a>
              <Link href="/yeoulad" className="btn min-h-13 bg-white/12 px-6 text-white hover:bg-white/20">
                여울애드 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ 상담 (기존 구성 유지) ━━ */}
      <ConsultSplit />
    </>
  );
}
