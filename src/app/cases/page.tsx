import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import SectionHead from "@/components/ui/SectionHead";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { WEB_WORKS } from "@/lib/offerings";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "포트폴리오 | 여울디앤씨",
  "여울디앤씨가 제작한 결과물을 분야별로 보여드립니다. 업종·범위와 결과는 확인된 내용만 표기합니다.",
  "/cases",
);

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

// 사례는 공개 동의를 받은 실제 작업만 올린다 (가짜 사례·확인되지 않은 수치 금지)
const PENDING = ["광고 운영", "영상", "디자인", "문서·제안서", "자동화·업무 양식"];

export default function CasesPage() {
  return (
    <>
      <SubHero
        tag="포트폴리오 · Portfolio"
        current="포트폴리오"
        title={
          <>
            필요했던 일과 담당한 일을
            <br />
            <span className="text-accent">결과물로</span> 보여드립니다
          </>
        }
        desc="제작한 결과물과 광고 운영 사례를 분야별로 정리합니다. 공개 동의를 받은 사례만 올리고, 업종·범위·결과는 확인된 내용만 표기합니다."
      />

      <section className="py-20 sm:py-28" aria-labelledby="web-title">
        <div className="wrap">
          <SectionHead
            align="split"
            label="홈페이지 제작 사례"
            title={
              <span id="web-title">
                업종과 목적에 맞춰
                <br />
                <span className="text-accent">만든 홈페이지</span>
              </span>
            }
            desc="기관·단체, 교육, 병원, 생활서비스, 전문 서비스까지 실제로 제작한 사이트입니다."
          />
          <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {WEB_WORKS.map((w, i) => (
              <li key={w.slug} className="flex flex-col overflow-hidden rounded-4xl border border-g200 bg-white" data-reveal style={delay((i % 3) * 0.07)}>
                <div className="bg-[#f4f4f4]">
                  <Image src={w.image} alt={`${w.title} 화면`} width={1000} height={1000} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="h-auto w-full" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[13px] font-bold text-brand">
                    {w.industry} · {w.type}
                  </p>
                  <h3 className="mt-1.5 text-[21px] font-extrabold leading-snug tracking-[-0.04em] text-ink">{w.title}</h3>
                  <dl className="mt-4 border-t border-g100 pt-4 text-[15px]">
                    <dt className="font-bold text-g500">제작물</dt>
                    <dd className="mt-1 leading-relaxed text-g800">{w.desc}</dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-4xl bg-g50 p-6 sm:p-9" data-reveal>
            <p className="text-[19px] font-extrabold tracking-[-0.035em] text-ink sm:text-[21px]">다른 분야 사례는 공개 동의를 받은 건부터 순서대로 올립니다</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {PENDING.map((p) => (
                <li key={p} className="rounded-full bg-white px-3.5 py-1.5 text-[14px] font-bold text-g600 ring-1 ring-g200">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[16px] leading-relaxed text-g600">
              사례마다 필요했던 일, 담당 업무, 제작물·실행 내용, 확인된 결과를 나눠 정리합니다. 비슷한 작업이 궁금하시면 상담에서 관련 결과물을 따로 보여드립니다.
            </p>
            <Link href="/production" className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[16px] font-bold text-brand hover:underline">
              분야별 결과물 형태 보기
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA
        title={<>비슷한 작업이 필요하신가요?</>}
        desc="참고하고 싶은 작업을 알려 주시면 범위와 일정을 함께 정리해 드립니다."
        buttonText="상담 신청"
      />
    </>
  );
}
