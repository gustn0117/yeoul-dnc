import ConsultForm from "@/components/ConsultForm";
import FlowLine from "@/components/ui/FlowLine";
import { CheckIcon, KakaoIcon, PhoneIcon } from "@/components/ui/icons";
import { COMPANY, KAKAO_URL, TEL_HREF } from "@/lib/site";

const trust = ["부담 없는 무료 상담", "업종 맞춤 제안", "빠른 답변"];

/* 홈 마지막 상담: 왼쪽 네이비 안내 패널 + 오른쪽 상담 폼 (플로팅 버튼은 이 구간에서 숨김) */
export default function ConsultSplit() {
  return (
    <section data-hide-floating className="bg-g50 py-20 sm:py-28" aria-labelledby="consult-title">
      <div className="wrap grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:gap-5">
        <div className="on-dark relative flex flex-col overflow-hidden rounded-[2rem] bg-night p-7 text-white sm:p-10">
          <FlowLine tone="dark" className="pointer-events-none absolute -bottom-16 -right-40 h-[26rem] w-[44rem] max-w-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2.5 text-[15px] font-bold text-[#8db8ff]">
              <span className="h-0.5 w-6 rounded-full bg-[#8db8ff]" aria-hidden="true" />
              무료 상담
            </span>
            <h2 id="consult-title" className="mt-4 text-h2 text-white" data-reveal>
              우리 업종에는
              <br />
              <span className="text-accent">어떤 광고</span>가 맞을까요?
            </h2>
            <p className="mt-5 text-lead text-white/75">
              현재 상황만 남겨주시면 업종, 예산, 목표에 맞는 광고 방향부터 정리해드립니다.
              <span className="hidden sm:inline"> 광고가 처음이셔도 부담 없이 문의 남겨주세요.</span>
            </p>
          </div>

          <ul className="relative mt-10 flex flex-col gap-3 lg:mt-auto lg:pt-10">
            <li>
              <a href={TEL_HREF} className="flex items-center gap-4 rounded-2xl bg-white/8 px-5 py-4 transition-colors hover:bg-white/12">
                <PhoneIcon className="h-6 w-6 text-[#8db8ff]" />
                <span>
                  <span className="block text-[14px] font-semibold text-white/60">전화 상담 · {COMPANY.hours}</span>
                  <span className="block text-[26px] font-extrabold leading-tight tracking-[-0.04em]">{COMPANY.tel}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/8 px-5 py-4 transition-colors hover:bg-white/12">
                <KakaoIcon className="h-6 w-6 text-kakao" />
                <span>
                  <span className="block text-[14px] font-semibold text-white/60">카카오톡</span>
                  <span className="block text-[19px] font-extrabold tracking-[-0.03em]">실시간 상담 가능</span>
                </span>
              </a>
            </li>
          </ul>
          <ul className="relative mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-semibold text-white/75">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-[#8db8ff]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-white p-5 sm:p-10">
          <h3 className="text-h3">광고 상담 신청</h3>
          <p className="mt-2 text-[17px] text-g600">필수 항목만 적어주셔도 됩니다. 담당자가 확인 후 연락드립니다.</p>
          <div className="mt-8">
            <ConsultForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
