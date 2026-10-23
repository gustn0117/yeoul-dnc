import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ConsultForm from "@/components/ConsultForm";
import FaqList from "@/components/FaqList";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHead from "@/components/ui/SectionHead";
import FlowLine from "@/components/ui/FlowLine";
import SubHero from "@/components/ui/SubHero";
import { CheckIcon, KakaoIcon, PhoneIcon } from "@/components/ui/icons";
import { FAQS } from "@/lib/offerings";
import { COMPANY, KAKAO_FRIEND_URL, KAKAO_URL, TEL_HREF, pageMetadata } from "@/lib/site";

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
              <a href={KAKAO_FRIEND_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 px-1 text-[15px] font-semibold text-white/65 transition-colors hover:text-white">
                <KakaoIcon className="h-4.5 w-4.5 text-kakao" />
                카카오톡 채널 추가하고 소식 받기
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

      {/* 진행·보고·견적 안내 (진행절차 페이지 내용을 이곳에 모음) */}
      <section id="guide" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="guide-title">
        <div className="wrap">
          <SectionHead
            align="left"
            label="진행·보고·견적 안내"
            title={
              <span id="guide-title">
                상담 이후에는
                <br />
                <span className="text-accent">이렇게 진행합니다</span>
              </span>
            }
            desc="단계마다 고객님이 준비하거나 확인해 주실 내용을 함께 적었습니다."
          />
          <div className="mt-12 sm:mt-14">
            <ProcessSteps detail />
          </div>
          <p className="mt-6 text-[15px] text-g600">제작만 의뢰하는 경우 3단계 승인 후 협의한 형식으로 최종 파일을 납품하고 마무리합니다.</p>

          <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
            <div className="rounded-3xl border border-g200 bg-white p-6 sm:p-8">
              <h3 className="text-[21px] font-extrabold tracking-[-0.035em] text-ink">성과 보고</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-g700">목표, 노출, 클릭, CTR, 문의, 유효 문의, 예약 등 실제로 확인할 수 있는 지표를 중심으로 정리합니다.</p>
              <ol className="mt-5 grid grid-cols-2 gap-2 text-[15px] font-bold text-g800">
                {["결과 요약", "원인 분석·가설", "실행한 조치", "다음 개선 작업"].map((s, i) => (
                  <li key={s} className="flex items-center gap-2 rounded-xl bg-g50 px-3.5 py-3">
                    <span className="tabular-nums text-brand">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <ul className="mt-5 space-y-1.5 text-[15px] leading-relaxed text-g600">
                <li>· 매체에서 집계한 전환과 실제 상담·예약 결과는 나눠서 표기합니다.</li>
                <li>· 보고 주기와 형식은 계약 시 정합니다.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-g200 bg-white p-6 sm:p-8">
              <h3 className="text-[21px] font-extrabold tracking-[-0.035em] text-ink">견적 구성</h3>
              <dl className="mt-4 divide-y divide-g100 border-y border-g100">
                {[
                  ["포함 업무", "상담에서 정한 기획·제작·운영·보고 업무"],
                  ["선택 항목", "추가 소재·사이즈, 추가 수정, 원본 파일 제공, 유지관리"],
                  ["별도 비용", "매체 광고비, 문자 발송료, 외부 도구 이용료, 도메인·호스팅, 촬영·인쇄 (해당될 때)"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3.5 text-[16px]">
                    <dt className="font-bold text-g500">{label}</dt>
                    <dd className="text-g800">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[15px] text-g600">수량, 규격, 납품 형식, 기간, 수정 횟수는 상담에서 확정합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section id="faq" className="panel scroll-mt-20 py-20 sm:py-28" aria-labelledby="faq-title">
        <div className="wrap">
          <SectionHead
            label="자주 묻는 질문"
            title={
              <span id="faq-title">
                의뢰 전에 <span className="text-accent">많이 물어보시는</span> 내용
              </span>
            }
            desc="일정, 수정, 운영 범위처럼 프로젝트마다 달라지는 내용은 상담에서 함께 정합니다."
          />
          <div className="mx-auto mt-12 max-w-4xl rounded-4xl bg-white px-5 sm:mt-14 sm:px-8">
            <FaqList items={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
