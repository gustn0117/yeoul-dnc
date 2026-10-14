"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import ChannelLogo from "@/components/ui/ChannelLogo";
import SectionHead from "@/components/ui/SectionHead";
import { ArrowIcon } from "@/components/ui/icons";
import { CHANNEL_ROLE, GUIDE_CHANNELS, GUIDE_ROWS, INDUSTRIES, LEVELS, OPERATIONS, type IndustryIcon, type Level } from "@/components/services/data";

/* 업종 선 아이콘 (공용 아이콘과 같은 선 굵기) */
const ICON_PATHS: Record<IndustryIcon, string> = {
  building: "M4 21V4.8a.8.8 0 0 1 .8-.8h8.4a.8.8 0 0 1 .8.8V21m0-11h5.2a.8.8 0 0 1 .8.8V21M2.5 21h19M7.5 8h3m-3 4h3m-3 4h3m6.5-2h1m-1 3.5h1",
  hospital: "M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5ZM12 8v8m-4-4h8",
  book: "M12 6.8C10.3 5.3 7.8 4.6 3.5 4.6v13.2c4.3 0 6.8.7 8.5 2.2 1.7-1.5 4.2-2.2 8.5-2.2V4.6c-4.3 0-6.8.7-8.5 2.2Zm0 0V20",
  store: "M4.5 10.5V20h15v-9.5M3 10l1.8-5.5h14.4L21 10a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Zm7 10v-5h4v5",
  chat: "M4 5.5h16v10H8.5L4 19.5v-14ZM8.5 10.5h.01m3.49 0h.01m3.49 0h.01",
};

// 업종 목록·채널 단계표·운영 사례를 같은 번호로 묶어 업종 하나의 설계안으로
const PLANS = INDUSTRIES.map((industry) => {
  const row = GUIDE_ROWS.find((r) => r.no === industry.no)!;
  const op = OPERATIONS.find((o) => o.no === industry.no)!;
  const byLevel = (level: Level) => GUIDE_CHANNELS.filter((_, i) => row.levels[i] === level);
  return {
    ...industry,
    op,
    // 추천 채널은 '노출 → 검색 → 상담' 흐름 순서로 놓는다
    best: byLevel("best").sort((a, b) => CHANNEL_ROLE[a.key].stage - CHANNEL_ROLE[b.key].stage),
    others: [
      { level: "good" as const, channels: byLevel("good") },
      { level: "sub" as const, channels: byLevel("sub") },
    ],
  };
});

/* 업종별 설계: 업종을 고르면 추천 채널이 흐름 선으로 이어지고, 함께 쓰는 채널과 운영 예시가 바뀐다
   (기존 '업종별 맞춤' 목록과 '업종 × 채널' 표를 하나로 합침) */
export default function IndustryPlanner() {
  const [active, setActive] = useState(0);
  const plan = PLANS[active];

  const onTabKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + PLANS.length) % PLANS.length;
    setActive(n);
    document.getElementById(`industry-tab-${PLANS[n].no}`)?.focus();
  };

  return (
    // scroll-mt: 회사소개의 '#industry' 링크로 왔을 때 모바일에서도 제목이 헤더에 붙지 않게
    <section id="industry" className="scroll-mt-3 py-20 sm:py-28 lg:py-32" aria-labelledby="industry-title">
      <div className="wrap">
        <SectionHead
          align="left"
          label="Industry"
          title={
            <span id="industry-title">
              같은 광고라도,
              <br />
              업종이 다르면 <span className="text-accent">설계가 달라집니다</span>
            </span>
          }
          desc="업종을 고르면 자주 권장하는 채널 조합과 운영 방식을 보여드립니다."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-6">
          {/* 업종 선택: 모바일은 가로로 넘기는 칩, 데스크톱은 세로 목록 */}
          <div
            role="tablist"
            aria-label="업종 선택"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:-mx-8 md:px-8 lg:mx-0 lg:flex-col lg:self-start lg:overflow-visible lg:rounded-4xl lg:bg-g50 lg:p-2"
          >
            {PLANS.map((p, i) => {
              const on = i === active;
              return (
                <button
                  key={p.no}
                  id={`industry-tab-${p.no}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="industry-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className={`flex min-h-11 shrink-0 items-center gap-3.5 rounded-full px-4 py-2 text-left transition-[background-color,color,box-shadow] duration-300 lg:rounded-3xl lg:px-4 lg:py-4 ${
                    on ? "bg-night text-white lg:bg-white lg:text-ink lg:shadow-soft" : "bg-g100 text-g700 hover:bg-g200 lg:bg-transparent lg:hover:bg-white/70"
                  }`}
                >
                  <span
                    className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 lg:flex ${on ? "bg-brand text-white" : "bg-white text-brand"}`}
                    aria-hidden="true"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                      <path d={ICON_PATHS[p.icon]} />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-baseline gap-2 whitespace-nowrap text-[16px] font-bold tracking-[-0.03em] lg:text-[20px] lg:font-extrabold">
                      <span className={`tabular-nums ${on ? "text-[#8db8ff] lg:text-brand" : "text-brand"}`}>{p.no}</span>
                      {p.name}
                    </span>
                    <span className="mt-0.5 hidden text-[15px] font-semibold text-g600 lg:block">{p.points.join(" · ")}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${plan.no}`} className="on-dark relative overflow-hidden rounded-4xl bg-night">
            {/* key: 업종을 바꾸면 내용이 새로 놓이며 등장 효과가 다시 재생됨 */}
            <div key={plan.no} className="planner-in relative p-6 sm:p-10 lg:p-12">
              <p className="text-[15px] font-bold text-[#8db8ff]">
                {plan.no} · {plan.points.join(" · ")}
              </p>
              <h3 className="mt-2 text-[28px] font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-[34px]">{plan.name} 광고 설계</h3>
              <p className="mt-2 text-[17px] text-white/70 sm:text-[18px]">{plan.result}</p>

              {/* 추천 채널: 노출 → 검색 → 상담 순서로 놓고 물결 선으로 잇는다 */}
              <p className="mt-9 text-[15px] font-semibold text-white/60 sm:mt-10">추천 채널 조합</p>
              <ol className="mt-4 flex items-start" aria-label="추천 채널 (노출에서 상담 순서)">
                {plan.best.map((ch, i) => (
                  // 연결 선 길이에 상한: 추천이 둘뿐인 업종도 두 채널이 패널 양 끝으로 벌어지지 않게.
                  // min-w-0 + 선의 w-0: SVG가 비율대로 잡는 기본 너비(약 100px) 때문에 모바일에서 세 번째 채널이 밀려나지 않게
                  <li key={ch.key} className={`flex items-start ${i > 0 ? "min-w-0 flex-1 sm:max-w-80" : "shrink-0"}`}>
                    {i > 0 && (
                      // data-draw: 처음엔 화면에 들어올 때, 업종을 바꾸면 새로 놓이자마자 그려짐.
                      // 세로 좌표를 실제 높이(24px)와 같게 둬 가로로만 늘어남 (pathLength 그리기와 굵기 유지)
                      <svg data-draw aria-hidden="true" viewBox="0 0 100 24" preserveAspectRatio="none" fill="none" className="mt-5 h-6 w-0 min-w-6 flex-1 sm:mt-7">
                        <path
                          d="M4 12 C 26 2, 38 2, 50 12 S 74 22, 96 12"
                          pathLength={1}
                          className="flow-path"
                          stroke="#8db8ff"
                          strokeOpacity={0.75}
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          style={{ "--d": `${0.2 + (i - 1) * 0.35}s`, transitionDuration: "0.9s" } as CSSProperties}
                        />
                      </svg>
                    )}
                    <span className="planner-tile flex w-20 shrink-0 flex-col items-center text-center sm:w-28" style={{ "--i": i } as CSSProperties}>
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_14px_30px_-14px_rgba(0,0,0,0.6)] sm:h-20 sm:w-20 sm:rounded-3xl">
                        <ChannelLogo name={ch.key} size={36} className="h-8 w-8 sm:h-9 sm:w-9" />
                      </span>
                      <span className="mt-3 text-[16px] font-extrabold tracking-[-0.03em] text-white sm:text-[18px]">{ch.label}</span>
                      <span className="mt-0.5 text-[13px] font-semibold leading-snug text-[#8db8ff] sm:text-[14px]">{CHANNEL_ROLE[ch.key].role}</span>
                    </span>
                  </li>
                ))}
              </ol>

              {/* 함께 쓰는 채널 (적합·보조) — 없는 단계도 자리를 지켜 패널 높이가 덜 흔들리게 */}
              <dl className="mt-8 grid gap-3 border-t border-white/12 pt-6 sm:grid-cols-2 sm:gap-6">
                {plan.others.map(({ level, channels }) => (
                  <div key={level} className="flex flex-wrap items-center gap-2">
                    <dt className="w-10 shrink-0 text-[14px] font-bold text-white/55">{LEVELS[level].short}</dt>
                    {channels.length > 0 ? (
                      channels.map((ch) => (
                        <dd key={ch.key} className="inline-flex h-9 items-center gap-2 rounded-full bg-white/8 pl-1.5 pr-3.5 text-[15px] font-semibold text-white/85">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                            <ChannelLogo name={ch.key} size={14} className="h-3.5 w-3.5" />
                          </span>
                          {ch.label}
                        </dd>
                      ))
                    ) : (
                      <dd className="text-[15px] text-white/40">해당 없음</dd>
                    )}
                  </div>
                ))}
              </dl>

              {/* 운영 예시 (포트폴리오의 업종별 운영 사례와 같은 문구) */}
              <div className="mt-6 rounded-3xl bg-white/6 p-5 sm:p-6">
                <p className="text-[14px] font-semibold text-white/55">운영 예시</p>
                <p className="mt-1.5 text-[19px] font-extrabold tracking-[-0.035em] text-white sm:text-[21px]">{plan.op.title}</p>
                <p className="mt-2 text-[16px] leading-[1.7] text-white/70 sm:text-[17px]">
                  {plan.op.lead}
                  <span className="hidden sm:inline"> {plan.op.rest}</span>
                </p>
                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-white/55">핵심</dt>
                    <dd className="font-bold text-[#8db8ff]">{plan.op.point}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-white/55">목표</dt>
                    <dd className="font-bold text-white">{plan.op.target}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/contact" className="btn btn-signal min-h-13 px-6">
                  {plan.name} 광고 상담받기
                  <ArrowIcon className="h-4.5 w-4.5" />
                </Link>
                <Link href="/cases" className="inline-flex min-h-11 items-center gap-1.5 text-[16px] font-bold text-[#8db8ff] transition-colors hover:text-white">
                  업종별 운영 사례 보기
                  <ArrowIcon className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-balance text-center text-[15px] text-g600 sm:text-[16px]">* 일반적인 기준이며, 실제 예산과 목표에 따라 조합이 달라질 수 있습니다.</p>
      </div>
    </section>
  );
}
