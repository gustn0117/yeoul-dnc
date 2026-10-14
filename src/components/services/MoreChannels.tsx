import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import SectionHead from "@/components/ui/SectionHead";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";
import { MORE_CHANNELS } from "@/components/services/data";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 그 외 채널 — 회색 패널 안에 사진 카드 3장 + 모든 업종 상담 안내 한 줄 (탭 바의 마지막 앵커) */
export default function MoreChannels() {
  return (
    <section id="more" aria-labelledby="more-title" className="scroll-mt-28 py-8 sm:py-12 lg:scroll-mt-36">
      <div className="panel bg-g50 py-20 sm:py-24 lg:py-28">
        <div className="wrap">
          <SectionHead
            label="More Channels"
            title={
              <span id="more-title">
                그 외 운영 가능한
                <br className="sm:hidden" /> <span className="text-accent">광고 채널</span>
              </span>
            }
          />

          {/* 태블릿은 가로형 카드(사진 | 글), 데스크톱은 3열 */}
          <ul className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-5">
            {MORE_CHANNELS.map((item, i) => (
              <li key={item.title} className="flex flex-col overflow-hidden rounded-card bg-white ring-1 ring-g200 sm:flex-row lg:flex-col" data-reveal style={delay(i * 0.08)}>
                <div className="relative aspect-2/1 shrink-0 bg-g100 sm:aspect-auto sm:min-h-60 sm:w-2/5 lg:aspect-16/10 lg:min-h-0 lg:w-auto">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 40vw, 92vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[16px] font-bold tracking-[-0.02em] text-brand">{item.label}</p>
                  <h3 className="mt-1.5 text-[24px] font-extrabold tracking-[-0.04em] text-ink sm:text-[26px]">{item.title}</h3>
                  <p className="mt-3 text-pretty text-[17px] leading-relaxed text-g700">{item.desc}</p>
                  {/* 카드 높이가 달라도 목록이 바닥에 맞춰지도록 mt-auto (최소 간격은 pt-6) */}
                  <div className="mt-auto hidden pt-6 sm:block">
                    <ul className="space-y-2 border-t border-g100 pt-5">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-[16px] font-semibold text-g700">
                          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-6 rounded-card bg-white p-6 ring-1 ring-g200 sm:p-8 md:flex-row md:items-center md:justify-between lg:mt-5" data-reveal>
            <div>
              <p className="text-[16px] font-bold tracking-[-0.02em] text-brand">그 외 모든 업종</p>
              <h3 className="mt-1.5 text-[22px] font-extrabold tracking-[-0.04em] text-ink sm:text-[24px]">모든 업종 맞춤 종합 마케팅 솔루션</h3>
              <p className="mt-2 text-pretty text-[17px] text-g700">네이버·구글·LMS·홈페이지 제작·메타 등 상담 후 업종에 맞게 진행합니다.</p>
            </div>
            <Link href="/contact" className="btn btn-brand min-h-14 shrink-0 px-7 text-[17px]">
              상담 문의하기
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
