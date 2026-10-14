import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import FlowLine from "@/components/ui/FlowLine";
import { ArrowIcon, CheckIcon, KakaoIcon } from "@/components/ui/icons";
import { COMPANY, KAKAO_URL, TEL_HREF } from "@/lib/site";

type ClosingCTAProps = {
  title: ReactNode;
  desc: ReactNode;
  buttonText?: string;
  buttonHref?: string;
};

const trust = ["부담 없는 무료 상담", "업종 맞춤 제안", "빠른 답변"];

/* 페이지 마지막 상담 유도 — 브랜드 블루 패널 (기존 SectionCTA 대체) */
export default function ClosingCTA({ title, desc, buttonText = "무료 광고 상담받기", buttonHref = "/contact" }: ClosingCTAProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="panel on-dark relative overflow-hidden bg-brand px-6 py-16 text-center text-white sm:px-12 sm:py-24">
        <FlowLine tone="dark" className="pointer-events-none absolute inset-0 h-full w-full" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <span className="pill bg-white/12 text-white" data-reveal>
            지금 무료 상담
          </span>
          <h2 className="mt-5 text-h2 text-white" data-reveal style={{ "--reveal-delay": "0.06s" } as CSSProperties}>
            {title}
          </h2>
          <p className="mt-5 text-balance text-lead text-white/80" data-reveal style={{ "--reveal-delay": "0.12s" } as CSSProperties}>
            {desc}
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" data-reveal style={{ "--reveal-delay": "0.18s" } as CSSProperties}>
            <Link href={buttonHref} className="btn btn-signal min-h-14 px-8 text-[18px]">
              {buttonText}
              <ArrowIcon className="h-5 w-5" />
            </Link>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn min-h-14 bg-white/12 px-8 text-[18px] text-white hover:bg-white/20">
              <KakaoIcon className="h-5 w-5 text-kakao" />
              카카오톡 상담
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[16px] font-semibold text-white/85">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-white" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[16px] text-white/70">
            전화 상담{" "}
            <a href={TEL_HREF} className="font-bold text-white underline-offset-4 hover:underline">
              {COMPANY.tel}
            </a>{" "}
            · {COMPANY.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
