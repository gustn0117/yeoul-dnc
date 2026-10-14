import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import TimelineFill from "@/components/process/TimelineFill";
import SectionHead from "@/components/ui/SectionHead";
import SubHero from "@/components/ui/SubHero";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("진행절차 | 여울디앤씨", "맡기면 어떻게 흘러가는지, 짧고 확실하게 안내드립니다.", "/process");

const steps = [
  {
    step: "01",
    title: "상담 / 문의",
    // 0515 피드백에서 고객사가 직접 제시한 문장 (기존: 업종·예산·목표부터 확인합니다)
    summary: "먼저 업종과 예산, 목표부터 간단하게 확인합니다.",
    detail: "현재 상황과 원하는 방향을 먼저 파악한 뒤 상담을 진행합니다.",
    tags: ["업종", "예산", "목표 확인"],
    img: "/images/0515/team-presentation-1.png",
  },
  {
    step: "02",
    title: "기획 / 전략",
    summary: "맞는 채널과 광고 방향을 정리합니다.",
    detail: "목표와 예산에 맞는 현실적인 운영 방식을 먼저 설계합니다.",
    tags: ["타겟 설정", "채널 선별", "운영 구조 설계"],
    img: "/images/0515/team-presentation-3.png",
  },
  {
    step: "03",
    title: "제작 / 세팅",
    summary: "소재와 광고 세팅을 준비합니다.",
    detail: "이미지, 영상, 문구와 실제 송출 세팅까지 진행합니다.",
    tags: ["소재 제작", "문구 정리", "광고 세팅"],
    img: "/images/stock/creative-design.jpg",
  },
  {
    step: "04",
    title: "운영 / 최적화",
    summary: "운영 과정에서 효율을 보완합니다.",
    detail: "반응 데이터를 보며 예산, 타겟, 소재를 지속적으로 조정합니다.",
    tags: ["집행", "반응 확인", "효율 개선"],
    img: "/images/stock/analytics-screen.jpg",
  },
  {
    step: "05",
    title: "결과 / 리포트",
    summary: "성과와 다음 방향을 정리합니다.",
    detail: "운영 결과와 필요한 보완 방향을 함께 안내합니다.",
    tags: ["결과 체크", "피드백", "후속 운영 제안"],
    img: "/images/stock/monitor-data.jpg",
  },
];

const ways: { num: string; tag: string; title: ReactNode; desc: string }[] = [
  {
    num: "01",
    tag: "STRATEGY",
    title: (
      <>
        업종별 맞춤 전략으로
        <br />
        광고 방향을 설계합니다
      </>
    ),
    desc: "타겟과 시장을 보고 채널 전략을 정리합니다.",
  },
  { num: "02", tag: "OPERATION", title: "운영 이후까지 관리합니다", desc: "집행, 예산, 소재 흐름을 지속적으로 봅니다." },
  { num: "03", tag: "DATA-DRIVEN", title: "데이터로 효율을 개선합니다", desc: "반응 데이터를 기준으로 개선점을 찾습니다." },
];

// 번호 사이를 잇는 S자 물결 — 세로로 늘어나도 선 굵기는 그대로 (non-scaling-stroke)
function WaveSegment({ className, strong = false }: { className: string; strong?: boolean }) {
  return (
    <svg className={`absolute inset-0 h-full w-full ${className}`} viewBox="0 0 40 200" preserveAspectRatio="none" fill="none">
      <path d="M20 0 C 36 50, 4 70, 20 100 S 36 150, 20 200" stroke="currentColor" strokeWidth={strong ? 4 : 3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

export default function ProcessPage() {
  return (
    <>
      <SubHero
        tag="여울디앤씨 진행절차"
        title={
          <>
            처음 상담부터 광고 운영,
            <br />
            <span className="text-accent">결과 정리</span>까지 한 번에
          </>
        }
        current="진행절차"
      />

      {/* 5단계 타임라인 — 기존 TIMELINE 요약 + 단계 상세를 한 줄기로 합침 */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="wrap">
          <SectionHead
            label="Process"
            title={
              <>
                문의부터 리포트까지,
                <br />
                <span className="text-accent">5단계로 진행합니다</span>
              </>
            }
            desc={
              <>
                각 단계는 짧고 확실하며,
                <br className="sm:hidden" /> 처음이셔도 바로 이해할 수 있습니다.
              </>
            }
          />

          <TimelineFill className="mx-auto mt-14 max-w-6xl sm:mt-20">
            <ol>
              {steps.map((s, i) => {
                // 데스크톱: 짝수 단계는 글이 왼쪽·사진이 오른쪽, 홀수 단계는 반대
                const textLeft = i % 2 === 0;
                return (
                  <li
                    key={s.step}
                    className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 pb-16 last:pb-0 sm:gap-x-8 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] lg:gap-x-0 lg:pb-28"
                  >
                    {/* 이 번호 중심 → 다음 번호 중심까지 S자로 흐르는 물결선 조각 (회색 바탕 위로 파란 선이 드러남) */}
                    {i < steps.length - 1 && (
                      <span aria-hidden="true" className="absolute -bottom-5 left-5 top-5 w-8 -translate-x-1/2 lg:-bottom-14 lg:left-1/2 lg:top-14 lg:w-14">
                        <WaveSegment className="text-g200" />
                        <span data-fill className="absolute inset-0" style={{ clipPath: "inset(0% 0% 100% 0%)" }}>
                          <WaveSegment className="text-brand" strong />
                        </span>
                      </span>
                    )}

                    <div className="relative col-start-1 row-start-1 flex justify-center lg:col-start-2 lg:pt-8">
                      <span
                        data-node
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[16px] font-extrabold tabular-nums text-g600 ring-2 ring-g200 transition-[background-color,color,box-shadow] duration-500 ease-soft lg:h-12 lg:w-12 lg:text-[18px] [&.is-on]:bg-brand [&.is-on]:text-white [&.is-on]:ring-6 [&.is-on]:ring-brand-100"
                      >
                        {s.step}
                      </span>
                    </div>

                    <div data-reveal className={`col-start-2 row-start-1 pt-1 lg:pt-0 ${textLeft ? "lg:col-start-1" : "lg:col-start-3"}`}>
                      <div className="lg:rounded-card lg:border lg:border-g200 lg:bg-white lg:p-9">
                        <h3 className="text-[26px] font-extrabold leading-tight tracking-[-0.04em] text-ink lg:text-[34px]">{s.title}</h3>
                        <p className="mt-3 text-balance text-[19px] font-bold leading-[1.45] tracking-[-0.03em] text-g800 lg:text-[22px]">{s.summary}</p>
                        <p className="mt-3 hidden text-pretty text-body text-g700 sm:block">{s.detail}</p>
                        {/* 모바일은 칩 3개가 한 줄에 들어가도록 조금 작게 (누르는 요소가 아니라 44px 높이 불필요) */}
                        <ul className="mt-5 flex flex-wrap gap-1.5 sm:gap-2" aria-label={`${s.title} 단계 확인 항목`}>
                          {s.tags.map((tag) => (
                            <li key={tag} className="chip min-h-9 px-3 text-[15px] sm:min-h-11 sm:px-4.5 sm:text-[16px]">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      data-reveal
                      style={delay(0.1)}
                      className={`col-start-2 row-start-2 mt-6 sm:max-w-xl lg:row-start-1 lg:mt-0 lg:max-w-none ${textLeft ? "lg:col-start-3" : "lg:col-start-1"}`}
                    >
                      <div className="relative aspect-16/10 overflow-hidden rounded-card bg-g100 lg:aspect-3/2">
                        <Image src={s.img} alt="" fill sizes="(min-width: 1024px) 34rem, (min-width: 640px) 36rem, 85vw" className="object-cover" />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </TimelineFill>

          <p data-reveal className="mt-20 text-center text-[22px] font-extrabold leading-[1.4] tracking-[-0.04em] text-brand sm:mt-28 sm:text-[28px] lg:text-[32px]">
            체계적인 프로세스로
            <br className="sm:hidden" /> 효율적인 광고 운영을 만듭니다.
          </p>
        </div>
      </section>

      {/* OUR WAY — 밝은 회색 패널 + 3줄 원칙 */}
      <section>
        <div className="panel bg-g50 px-5 py-20 sm:px-10 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              align="split"
              label="Our Way"
              title={
                <>
                  단순 광고가 아닌,
                  <br />
                  <span className="text-accent">성과 중심</span>으로 운영합니다
                </>
              }
              desc={
                <span className="hidden sm:inline">전략부터 운영, 데이터 분석까지 전 과정을 유기적으로 연결하여 지속 가능한 성과를 만듭니다.</span>
              }
            />

            <ol className="mt-12 border-t border-g300 sm:mt-16">
              {ways.map((w, i) => (
                <li
                  key={w.num}
                  data-reveal
                  style={delay(i * 0.08)}
                  className="grid gap-3 border-b border-g300 py-8 sm:py-10 lg:grid-cols-[12rem_minmax(0,1fr)_minmax(0,23rem)] lg:items-center lg:gap-10 lg:py-12"
                >
                  <p className="flex items-baseline gap-3 text-brand">
                    <span className="text-[28px] font-extrabold tabular-nums leading-none tracking-[-0.03em] lg:text-[40px]">{w.num}</span>
                    <span className="text-[15px] font-bold tracking-[0.08em]">{w.tag}</span>
                  </p>
                  <h3 className="text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] text-ink sm:text-[30px] lg:text-[34px]">{w.title}</h3>
                  <p className="text-[16px] leading-[1.6] text-g700 sm:text-[18px]">{w.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ClosingCTA
        title={
          // 모바일에서 3줄로 꺾이지 않도록 앞 구절은 sm 이상에서만 표시
          <>
            <span className="hidden sm:inline">
              복잡하게 고민하지 마시고,
              <br />
            </span>
            현재 상황부터 편하게 말씀해 주세요
          </>
        }
        desc={<span className="block text-balance">업종과 광고 상황을 확인한 뒤, 필요한 채널과 실행 방법부터 빠르게 정리해드립니다.</span>}
      />
    </>
  );
}
