import Link from "next/link";
import type { CSSProperties } from "react";
import ChannelLogo from "@/components/ui/ChannelLogo";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";
import ChannelVisual from "@/components/services/ChannelVisual";
import Emph from "@/components/services/Emph";
import type { Channel } from "@/components/services/data";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 채널 1개 = 글(라벨 · 회색 한 줄 · 로고+큰 제목 · 설명 · 체크리스트 · 상품 칩 · 상담 링크) + 회색 패널 비주얼.
   데스크톱은 좌우를 번갈아 배치, 모바일은 제목 → 비주얼 → 체크리스트 순서로 쌓는다.
   scroll-mt = 고정 헤더(64/76px) + 채널 탭 바 높이 */
export default function ChannelSection({ channel, reverse = false }: { channel: Channel; reverse?: boolean }) {
  const textCol = reverse ? "lg:col-start-2" : "lg:col-start-1";
  const visualCol = reverse ? "lg:col-start-1" : "lg:col-start-2";
  const titleId = `${channel.id}-title`;

  return (
    <section id={channel.id} aria-labelledby={titleId} className="scroll-mt-28 py-14 sm:py-20 lg:scroll-mt-36">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0 xl:gap-x-24">
        <div className={`${textCol} lg:row-start-1 lg:self-end`} data-reveal>
          <p className="text-[16px] font-bold tracking-[-0.02em] text-brand sm:text-[17px]">
            {channel.category} · {channel.name}
          </p>
          <h2 id={titleId} className="mt-4">
            <span className="block text-[18px] font-bold tracking-[-0.03em] text-g600 sm:text-[21px]">{channel.lead}</span>
            <span className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-h2 sm:gap-x-4">
              <span className="flex shrink-0 items-center gap-1.5 sm:gap-2" aria-hidden="true">
                {channel.logos.map((logo) => (
                  <ChannelLogo key={logo} name={logo} size={48} className="h-8 w-8 sm:h-11 sm:w-11" />
                ))}
              </span>
              {channel.title}
            </span>
          </h2>
        </div>

        <div className={`${visualCol} lg:row-span-2 lg:row-start-1 lg:self-center`} data-reveal style={delay(0.08)}>
          <ChannelVisual visual={channel.visual} />
        </div>

        <div className={`${textCol} lg:row-start-2 lg:self-start lg:pt-7`} data-reveal style={delay(0.14)}>
          {channel.desc && (
            <p className="mb-7 hidden max-w-xl text-body text-g700 sm:block">
              <Emph text={channel.desc} />
            </p>
          )}
          <ul className="space-y-3.5">
            {channel.checks.map((check) => (
              <li key={check} className="flex items-start gap-3 text-[18px] font-semibold leading-normal tracking-[-0.025em] text-g800 sm:text-[19px]">
                <span className="mt-px flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand" aria-hidden="true">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-pretty">{check}</span>
              </li>
            ))}
          </ul>
          {channel.chips.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5" aria-label={`${channel.name} 주요 광고 상품`}>
              {channel.chips.map((chip) => (
                <li key={chip} className="chip px-4 text-[16px] font-bold text-g800 sm:min-h-12 sm:px-5 sm:text-[18px]">
                  {chip}
                </li>
              ))}
            </ul>
          )}
          <Link href="/contact" className="group mt-8 inline-flex min-h-11 items-center gap-2 text-[18px] font-bold tracking-[-0.03em] text-brand sm:text-[19px]">
            {channel.name} 광고 상담받기
            <ArrowIcon className="h-5 w-5 transition-transform duration-300 ease-soft group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
