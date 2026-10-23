import type { Metadata } from "next";
import Link from "next/link";
import ClosingCTA from "@/components/ClosingCTA";
import MarketingChannelSection from "@/components/marketing/MarketingChannelSection";
import PurposeFinder from "@/components/marketing/PurposeFinder";
import { MARKETING_CHANNELS, MARKETING_TABS } from "@/components/marketing/data";
import SectionTabs from "@/components/ui/SectionTabs";
import SectionHead from "@/components/ui/SectionHead";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "광고·마케팅 | 여울디앤씨",
  "네이버·메타·카카오·구글·유튜브·LMS·당근 광고와 SNS 운영, 브랜드·바이럴, 광고 컨설팅. 목표에 맞는 매체를 고르고 소재부터 운영까지 맡깁니다.",
  "/marketing",
);

export default function MarketingPage() {
  return (
    <>
      <SubHero
        tag="광고·마케팅"
        current="광고·마케팅"
        title={
          <>
            목표에 맞는 매체를 고르고
            <br />
            <span className="text-accent">소재부터 운영까지</span> 맡깁니다
          </>
        }
        desc="검색하는 고객, 관심사로 만나는 고객, 동네 고객에게는 각각 맞는 매체가 다릅니다. 목표와 업종에 맞춰 매체를 고르고 소재 제작부터 운영, 보고까지 진행합니다."
        actions={
          <>
            <Link href="/contact" className="btn btn-signal min-h-13 px-6">
              광고 상담 신청
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
            <a href="#finder" className="btn min-h-13 bg-white/12 px-6 text-white hover:bg-white/20">
              목적별 매체 찾기
            </a>
          </>
        }
      />

      {/* 목적별 매체 찾기 */}
      <section id="finder" className="scroll-mt-20 py-20 sm:py-28 lg:py-32" aria-labelledby="finder-title">
        <div className="wrap">
          <SectionHead
            align="left"
            label="목적별 매체 찾기"
            title={
              <span id="finder-title">
                이런 목적이라면,
                <br />
                <span className="text-accent">이 매체부터</span> 살펴보세요
              </span>
            }
            desc="목적을 고르면 먼저 살펴볼 매체를 보여드립니다. 매체를 누르면 자세한 설명으로 이동합니다."
          />
          <div className="mt-10 sm:mt-14">
            <PurposeFinder />
          </div>

          {/* 매체가 제공하는 것 vs 여울디앤씨가 하는 일 — 아래 표의 파란 줄과 연결 */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-3xl bg-g50 p-6 sm:p-7">
              <h3 className="text-[19px] font-extrabold tracking-[-0.03em] text-g800">매체가 제공하는 것</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-g600">광고 지면, 광고 상품, 대상 설정 기능, 집계 화면. 매체마다 상품명과 조건이 다르고 수시로 바뀝니다.</p>
            </div>
            <div className="rounded-3xl border-2 border-brand-100 bg-brand-50 p-6 sm:p-7">
              <h3 className="text-[19px] font-extrabold tracking-[-0.03em] text-brand">여울디앤씨가 하는 일</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-g700">
                목표에 맞는 매체 선택과 기획, 소재 제작, 계정 세팅, 운영 조정, 결과 분석과 보고. 아래 매체별 표의 <b className="font-bold text-brand">파란 줄</b>이 여울디앤씨의 업무입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 탭 바는 매체 구간에서만 따라오도록 같은 래퍼 안에 둔다 (sticky의 기준 상자) */}
      <div>
        <SectionTabs items={MARKETING_TABS} label="매체 바로가기" />
        {MARKETING_CHANNELS.map((channel, i) => (
          <MarketingChannelSection key={channel.id} channel={channel} reverse={i % 2 === 1} />
        ))}
      </div>

      {/* 전문 분야 */}
      <section className="pb-4 pt-10" aria-label="전문 분야">
        <div className="wrap">
          <Link href="/yeoulad" className="group flex flex-col gap-3 rounded-3xl border border-g200 bg-white p-6 transition-colors hover:border-brand sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <span>
              <span className="block text-[14px] font-bold text-brand">전문 분야 · 분양·부동산</span>
              <span className="mt-1 block text-[21px] font-extrabold tracking-[-0.04em] text-ink sm:text-[24px]">분양 광고는 전문 브랜드 여울애드가 맡습니다</span>
            </span>
            <span className="inline-flex items-center gap-2 text-[16px] font-bold text-brand">
              여울애드 소개
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            어떤 매체부터 시작할지
            <br className="hidden sm:inline" /> 함께 정해 보세요
          </>
        }
        desc="처음 광고를 시작하시는 경우도, 지금 광고를 점검하고 싶은 경우도 상담할 수 있습니다."
        buttonText="광고 상담하기"
      />
    </>
  );
}
