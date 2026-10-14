import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import SubHero from "@/components/ui/SubHero";
import ChannelSection from "@/components/services/ChannelSection";
import IndustryPlanner from "@/components/services/IndustryPlanner";
import MoreChannels from "@/components/services/MoreChannels";
import Overview from "@/components/services/Overview";
import ProcessSection from "@/components/services/ProcessSection";
import ServiceTabs from "@/components/services/ServiceTabs";
import { CHANNELS, TABS } from "@/components/services/data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("광고상품 / 서비스 | 여울디앤씨", "필요한 채널만 골라, 업종에 맞게 설계합니다.", "/services");

export default function ServicesPage() {
  return (
    <>
      <SubHero
        tag="여울디앤씨 광고상품"
        title={
          <>
            필요한 채널만 골라,
            <br />
            <span className="text-accent">업종에 맞게 설계</span>합니다
          </>
        }
        current="광고상품 / 서비스"
      />

      <Overview />

      {/* 탭 바는 채널 ~ 그 외 채널 구간에서만 따라오도록 같은 래퍼 안에 둔다 (sticky의 기준 상자) */}
      <div>
        <ServiceTabs items={TABS} />
        {CHANNELS.map((channel, i) => (
          <ChannelSection key={channel.id} channel={channel} reverse={i % 2 === 1} />
        ))}
        <MoreChannels />
      </div>

      {/* 업종별 설계 (업종 목록 + 업종 × 채널 표를 하나로) — 회사소개에서 #industry로 바로 연결 */}
      <IndustryPlanner />
      <ProcessSection />

      <ClosingCTA
        title={
          <>
            어떤 채널 조합이 맞는지,
            <br className="sm:hidden" /> 업종과 목표부터 같이 정리해드릴게요
          </>
        }
        desc="메타·네이버·카카오·구글·당근·문자까지 목적에 맞게 조합합니다. 광고가 처음이셔도 현재 상황만 남겨주시면 정리해드립니다."
      />
    </>
  );
}
