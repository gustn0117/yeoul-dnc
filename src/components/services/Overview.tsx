import type { CSSProperties } from "react";
import ChannelLogo from "@/components/ui/ChannelLogo";
import SectionHead from "@/components/ui/SectionHead";
import { OVERVIEW_LOGOS } from "@/components/services/data";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 운영 플랫폼 소개 — 가운데 정렬 머리 + 로고만 있는 타일 한 줄(모바일 4×2) */
export default function Overview() {
  return (
    <section className="py-20 sm:py-28 lg:py-32" aria-labelledby="overview-title">
      <div className="wrap">
        <SectionHead
          label="Overview"
          title={
            <span id="overview-title">
              <span className="mb-2 block text-[18px] font-bold tracking-[-0.03em] text-g600 sm:mb-3 sm:text-[22px]">
                메타, 구글, 네이버, 카카오,
                <br className="sm:hidden" /> 당근, 유튜브까지
              </span>
              <span className="text-accent">국내외 주요 광고 플랫폼</span> 운영
            </span>
          }
          desc={
            <span className="block text-balance">
              <strong className="font-bold text-accent">목표 ROAS 달성</strong>을 위한 마케팅 전략을 수립하고, 캠페인을 설계·집행·최적화합니다.
            </span>
          }
        />
        <ul className="mx-auto mt-12 grid max-w-88 grid-cols-4 gap-3 sm:mt-16 sm:max-w-md sm:gap-4 lg:flex lg:max-w-none lg:justify-center xl:gap-5" aria-label="운영하는 광고 플랫폼">
          {OVERVIEW_LOGOS.map((logo, i) => (
            <li
              key={logo.key}
              className="flex aspect-square items-center justify-center rounded-[22px] bg-white ring-1 ring-g200 sm:rounded-[28px] lg:h-24 lg:w-24 xl:h-28 xl:w-28"
              data-reveal="scale"
              style={delay(i * 0.035)}
            >
              <ChannelLogo name={logo.key} size={52} alt={logo.label} className="h-8 w-8 sm:h-11 sm:w-11 xl:h-13 xl:w-13" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
