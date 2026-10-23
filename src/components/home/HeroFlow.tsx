"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import ChannelLogo, { type ChannelKey } from "@/components/ui/ChannelLogo";
import FlowLine from "@/components/ui/FlowLine";
import { ArrowIcon } from "@/components/ui/icons";

// 종합광고 실행사가 하는 일 5단계 — 사진은 고객사가 준비한 이미지로 교체 예정
const POINTS = [
  { title: "광고 기획", sub: "목표·대상·매체", desc: "목표와 대상을 정하고 맞는 매체 조합을 고릅니다.", image: "/images/0515/team-presentation-2.png", alt: "광고 운영 계획을 발표하는 회의" },
  { title: "콘텐츠 제작", sub: "영상·디자인·문서", desc: "광고와 영업에 쓸 영상·디자인·문서를 만듭니다.", image: "/images/stock/creative-design.jpg", alt: "색상표와 디자인 시안이 놓인 책상" },
  { title: "매체 운영", sub: "세팅·조정·보고", desc: "세팅부터 조정, 보고까지 직접 운영합니다.", image: "/images/0515/team-presentation-3.png", alt: "광고 성과 그래프를 띄워 놓고 분석하는 팀" },
  { title: "홈페이지", sub: "소개·랜딩·신청폼", desc: "광고에서 이어지는 소개·랜딩·신청 페이지를 만듭니다.", image: "/images/stock/landing-page.jpg", alt: "웹페이지를 띄운 모니터가 놓인 작업 책상" },
  { title: "고객관리", sub: "정리·알림·자동화", desc: "들어온 문의를 정리하고 안내 메시지를 자동으로 보냅니다.", image: "/images/0515/op-consult.png", alt: "헤드셋을 쓰고 고객 상담을 하는 상담원" },
];

const LOGOS: { key: ChannelKey; label: string }[] = [
  { key: "naver", label: "네이버" },
  { key: "kakaotalk", label: "카카오" },
  { key: "meta", label: "메타" },
  { key: "instagram", label: "인스타그램" },
  { key: "youtube", label: "유튜브" },
  { key: "google", label: "구글" },
  { key: "danggeun", label: "당근" },
];

const STEP_MS = 5000;
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReduced = () => window.matchMedia(REDUCED_QUERY).matches;

/* 홈 첫 화면: 메시지는 고정하고, 하는 일 5단계를 진행 막대가 있는 탭으로 돌려 보여준다.
   탭이 바뀌면 오른쪽 사진이 교차 전환되고 설명 카드가 바뀜. 로드 때 흐름 선이 그려짐. */
export default function HeroFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, () => false);
  const autoplay = !reduced;

  const next = () => setActive((i) => (i + 1) % POINTS.length);
  const onTabKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + POINTS.length) % POINTS.length;
    setActive(n);
    document.getElementById(`hero-point-${n}`)?.focus();
  };

  return (
    <section
      className="relative overflow-hidden"
      aria-label="여울디앤씨 소개"
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
    >
      <FlowLine draw="load" className="pointer-events-none absolute -left-[20%] bottom-0 h-[62%] w-[150%] max-w-none lg:-left-[6%] lg:bottom-[-6%] lg:h-[88%] lg:w-[112%]" />

      <div className="wrap-wide relative grid items-center gap-10 pb-10 pt-8 lg:min-h-[calc(100svh-4.75rem-5.5rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-12 lg:pt-6 xl:px-[clamp(2rem,4vw,5rem)]">
        <div>
          <p className="animate-rise-in text-[17px] font-bold text-brand">종합광고 실행사</p>
          <h1 className="animate-rise-in mt-4 text-display" style={{ "--delay": "0.08s" } as CSSProperties}>
            온라인 광고,
            <br />
            <span className="text-accent">결과로 말합니다.</span>
          </h1>
          <p className="animate-rise-in mt-6 max-w-xl text-lead text-g700" style={{ "--delay": "0.16s" } as CSSProperties}>
            광고 기획부터 콘텐츠 제작, 매체 운영,
            <br className="hidden sm:block" /> 홈페이지와 고객관리까지 함께합니다.
          </p>
          <div className="animate-rise-in mt-8 flex flex-wrap gap-3" style={{ "--delay": "0.24s" } as CSSProperties}>
            <Link href="/contact" className="btn btn-signal min-h-14 rounded-full px-7 text-[18px]">
              광고 상담하기
              <ArrowIcon className="h-5 w-5" />
            </Link>
            <Link href="#services" className="btn btn-line min-h-14 rounded-full px-7 text-[18px]">
              서비스 살펴보기
            </Link>
          </div>

          {/* 하는 일 탭 — 진행 막대가 다 차면 다음 단계로 */}
          <div role="tablist" aria-label="여울디앤씨가 하는 일" className="animate-rise-in mt-12 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 sm:gap-x-0" style={{ "--delay": "0.32s" } as CSSProperties}>
            {POINTS.map((p, i) => {
              const on = i === active;
              return (
                <button
                  key={p.title}
                  id={`hero-point-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="hero-point-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                  className="group text-left sm:pr-4"
                >
                  <span className="relative block h-0.5 overflow-hidden rounded-full bg-g200">
                    {on && (
                      <span
                        key={`${active}-${autoplay}`}
                        className="absolute inset-0 origin-left rounded-full bg-brand"
                        onAnimationEnd={next}
                        style={autoplay ? { animation: `progress-fill ${STEP_MS}ms linear forwards`, animationPlayState: paused ? "paused" : "running" } : undefined}
                      />
                    )}
                  </span>
                  <span className={`mt-3 block text-[14px] font-bold tabular-nums ${on ? "text-brand" : "text-g500"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`mt-1 block text-[17px] font-bold leading-snug tracking-[-0.03em] transition-colors ${on ? "text-ink" : "text-g600 group-hover:text-g800"}`}>{p.title}</span>
                  <span className="mt-0.5 hidden text-[13px] font-semibold text-g500 sm:block">{p.sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 사진 + 설명 카드 */}
        <div id="hero-point-panel" role="tabpanel" aria-labelledby={`hero-point-${active}`} className="relative lg:pl-4">
          <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-g100 sm:aspect-16/11 lg:aspect-4/5 lg:max-h-[calc(100svh-12rem)] lg:w-full">
            {POINTS.map((p, i) => (
              <div key={p.image} className="point-media absolute inset-0" data-on={i === active} aria-hidden={i !== active}>
                <Image src={p.image} alt={p.alt} fill preload={i === 0} loading={i === 0 ? undefined : "eager"} sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div key={active} className="animate-pop-in absolute -bottom-6 left-4 w-[min(82%,20rem)] rounded-card border border-g200 bg-white p-5 sm:-left-6 sm:p-6">
            <p className="text-[14px] font-bold text-brand">
              {String(active + 1).padStart(2, "0")} · {POINTS[active].title}
            </p>
            <p className="mt-1 text-[19px] font-extrabold leading-snug tracking-[-0.035em] text-ink">{POINTS[active].desc}</p>
          </div>
        </div>
      </div>

      {/* 운영 채널 — 기존 사이트 첫 화면의 로고 줄 */}
      <div className="wrap-wide relative mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-g100 py-6 xl:px-[clamp(2rem,4vw,5rem)]">
        <span className="text-[15px] font-bold text-g600">운영 채널</span>
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {LOGOS.map((l) => (
            <li key={l.key} className="opacity-55 grayscale transition-[filter,opacity] duration-250 hover:opacity-100 hover:grayscale-0">
              <ChannelLogo name={l.key} size={28} alt={l.label} className="h-7 w-7" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
