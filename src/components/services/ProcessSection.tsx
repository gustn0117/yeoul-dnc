import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import SectionHead from "@/components/ui/SectionHead";
import { ArrowIcon } from "@/components/ui/icons";
import { PROCESS_STEPS } from "@/components/services/data";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 운영 방식 — 클라이언트 시안: 제목 → 넓은 사진 → 파란 사각 번호 1–5 → 문의 카드.
   데스크톱은 (제목+사진) | (단계+카드) 두 열. */
export default function ProcessSection() {
  return (
    <section className="py-8 sm:py-12" aria-labelledby="process-title">
      <div className="panel bg-g50 py-20 sm:py-24 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <div>
            <SectionHead
              align="left"
              label="Process"
              title={
                <span id="process-title">
                  분석부터 제작,
                  <br />
                  운영, 보완까지 <span className="text-accent">한 번에</span>
                </span>
              }
            />
            <div className="relative mt-10 aspect-16/10 overflow-hidden rounded-card bg-g200 sm:mt-12" data-reveal style={delay(0.1)}>
              <Image src="/images/stock/monitor-data.jpg" alt="광고 성과 데이터를 띄운 노트북 화면" fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" />
            </div>
          </div>

          <div>
            <ol className="border-y border-g200">
              {PROCESS_STEPS.map((step, i) => (
                <li key={step.title} className="flex items-center gap-5 border-b border-g200 py-5 last:border-b-0 sm:gap-6 sm:py-6" data-reveal style={delay(i * 0.06)}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-[20px] font-extrabold text-white sm:h-14 sm:w-14 sm:text-[22px]" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[20px] font-extrabold tracking-[-0.035em] text-ink sm:text-[22px]">{step.title}</h3>
                    <p className="mt-1 text-pretty text-[16px] text-g600 sm:text-[17px]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/contact"
              className="group mt-8 flex items-center justify-between gap-4 rounded-card bg-white p-6 ring-1 ring-g200 transition-shadow hover:ring-g300 sm:p-7"
              data-reveal
              style={delay(0.2)}
            >
              <span>
                <span className="block text-[19px] font-extrabold tracking-[-0.035em] text-ink sm:text-[21px]">광고 운영이 고민되시나요?</span>
                <span className="mt-1 block text-[17px] font-bold text-accent sm:text-[18px]">지금 바로 문의해 주세요.</span>
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-brand-press" aria-hidden="true">
                <ArrowIcon className="h-5 w-5 transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
