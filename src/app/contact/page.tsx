import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ConsultForm from "@/components/ConsultForm";
import FlowLine from "@/components/ui/FlowLine";
import SubHero from "@/components/ui/SubHero";
import { CheckIcon, KakaoIcon, PhoneIcon } from "@/components/ui/icons";
import { COMPANY, KAKAO_URL, TEL_HREF, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("문의하기 | 여울디앤씨", "업종과 광고 상황을 확인한 뒤, 필요한 방향부터 빠르게 정리해드립니다. 무료 광고 상담을 신청하세요.", "/contact");

const trust = ["무료 상담", "업종 맞춤 제안", "빠른 답변"];
const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

export default function ContactPage() {
  return (
    <>
      <SubHero
        tag="여울디앤씨 상담접수"
        current="문의하기"
        title={
          <>
            복잡하게 고민하지 마시고,
            <br />
            현재 상황부터
            {/* 모바일에서 "주세요"만 한 줄로 떨어지지 않게 */}
            <br className="sm:hidden" /> <span className="text-accent">편하게 말씀해 주세요</span>
          </>
        }
      />

      <section className="bg-g50 py-16 sm:py-24" aria-labelledby="contact-form-title">
        <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="rounded-card bg-white p-5 sm:rounded-4xl sm:p-10" data-reveal>
            <h2 id="contact-form-title" className="text-h3">
              광고 상담 신청
            </h2>
            <p className="mt-2 text-[17px] text-g700">
              업종과 광고 상황을 확인한 뒤, <strong className="font-bold text-ink">필요한 방향부터 빠르게 정리</strong>해드립니다.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[16px] font-semibold text-g700">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-brand" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-g200 pt-8">
              <ConsultForm variant="full" />
            </div>
          </div>

          {/* 다른 상담 방법: 홈 상담 구간과 같은 네이비 안내 패널 하나로 */}
          <aside
            className="on-dark relative overflow-hidden rounded-card bg-night p-6 text-white sm:rounded-4xl sm:p-8 lg:sticky lg:top-28 lg:self-start"
            aria-label="다른 상담 방법"
            data-reveal
            style={delay(0.06)}
          >
            <FlowLine tone="dark" className="pointer-events-none absolute -bottom-20 -right-44 h-96 w-176 max-w-none" />
            <div className="relative flex flex-col gap-3">
              <a href={TEL_HREF} className="rounded-2xl bg-white/8 px-5 py-5 transition-colors hover:bg-white/12">
                <span className="flex items-center gap-2 text-[15px] font-semibold text-white/65">
                  <PhoneIcon className="h-5 w-5 text-[#8db8ff]" />
                  전화 상담
                </span>
                <span className="mt-2 block text-[32px] font-extrabold leading-none tracking-[-0.04em]">{COMPANY.tel}</span>
                <span className="mt-3 block text-[15px] text-white/55">빠른 답변이 필요하면 바로 전화 주세요.</span>
              </a>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/8 px-5 py-5 transition-colors hover:bg-white/12">
                <span className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[15px] font-semibold text-white/65">
                    <KakaoIcon className="h-5 w-5 text-kakao" />
                    카카오톡 상담
                  </span>
                  <span className="rounded-full bg-kakao px-2.5 py-1 text-[13px] font-bold text-[#3c1e1e]">추천</span>
                </span>
                <span className="mt-2 block text-[22px] font-extrabold tracking-[-0.04em]">실시간 상담 가능</span>
                <span className="mt-2 block text-[15px] text-white/55">채팅으로 편하게 물어보세요.</span>
              </a>
            </div>
            <div className="relative mt-7 border-t border-white/12 pt-6">
              <p className="text-[15px] font-semibold text-white/65">운영 시간</p>
              <p className="mt-1.5 text-[22px] font-extrabold tracking-[-0.04em]">{COMPANY.hours}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-white/55">{COMPANY.hoursNote} · 휴무일 문의는 다음 영업일에 답변드립니다.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
