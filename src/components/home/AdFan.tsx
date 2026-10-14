"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import ChannelLogo, { type ChannelKey } from "@/components/ui/ChannelLogo";
import PhoneFrame from "@/components/ui/PhoneFrame";
import { ArrowIcon } from "@/components/ui/icons";

type Platform = {
  key: string;
  name: string;
  logo: ChannelKey;
  purpose: string;
  formats: string[];
  phones: { src: string; alt: string }[];
  href: string;
};

const PLATFORMS: Platform[] = [
  {
    key: "naver",
    name: "네이버",
    logo: "naver",
    purpose: "검색 수요 기반 문의 확보와 브랜드 노출",
    formats: ["브랜드검색", "파워링크", "성과형 디스플레이"],
    phones: [
      { src: "/images/0515/naver-phone-2.png", alt: "네이버 파워링크 광고 화면" },
      { src: "/images/0515/naver-phone-1.png", alt: "네이버 브랜드검색 광고 화면" },
      { src: "/images/0515/naver-phone-3.png", alt: "네이버 메인 배너 광고 화면" },
    ],
    href: "/services#naver",
  },
  {
    key: "meta",
    name: "메타",
    logo: "instagram",
    purpose: "관심사·행동 기반 정밀 타겟팅과 리드 수집",
    formats: ["피드 광고", "릴스 광고", "프로필 운영"],
    phones: [
      { src: "/images/0515/insta-phone-2.png", alt: "인스타그램 릴스 광고 화면" },
      { src: "/images/0515/insta-phone-1.png", alt: "인스타그램 피드 광고 화면" },
      { src: "/images/0515/insta-phone-3.png", alt: "인스타그램 프로필 화면" },
    ],
    href: "/services#meta",
  },
  {
    key: "kakao",
    name: "카카오",
    logo: "kakaotalk",
    purpose: "상담 유입과 채널 메시지로 재접촉 운영",
    formats: ["친구탭 배너", "채팅탭 배너", "더보기탭 배너"],
    phones: [
      { src: "/images/0515/kakao-phone-1.png", alt: "카카오톡 친구탭 배너 광고 화면" },
      { src: "/images/0515/kakao-phone-2.png", alt: "카카오톡 채팅탭 배너 광고 화면" },
      { src: "/images/0515/kakao-phone-3.png", alt: "카카오톡 더보기탭 배너 광고 화면" },
    ],
    href: "/services#kakao",
  },
];

// 부채꼴 배치: 왼쪽·가운데·오른쪽
const FAN = [
  { x: "-58%", r: "-9deg", s: 0.84, z: 1, d: "0.08s" },
  { x: "0%", r: "0deg", s: 1, z: 2, d: "0s" },
  { x: "58%", r: "9deg", s: 0.84, z: 1, d: "0.16s" },
];
const AUTO_MS = 6000;

/* 실제 광고 노출 화면: 플랫폼을 고르면 휴대폰 3대가 부채꼴로 펼쳐진다 (화면에 있는 동안 6초마다 다음 플랫폼) */
export default function AdFan() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % PLATFORMS.length), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [inView, paused, active]);

  const onTabKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + PLATFORMS.length) % PLATFORMS.length;
    setActive(n);
    document.getElementById(`adfan-tab-${PLATFORMS[n].key}`)?.focus();
  };

  const p = PLATFORMS[active];

  return (
    <div
      ref={rootRef}
      className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
    >
      <div>
        <div role="tablist" aria-label="광고 플랫폼" aria-orientation="vertical" className="flex flex-col gap-2">
          {PLATFORMS.map((pl, i) => {
            const on = i === active;
            return (
              <button
                key={pl.key}
                id={`adfan-tab-${pl.key}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="adfan-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onTabKey(e, i)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                className={`relative flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${on ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                <span className={`absolute inset-y-3 left-0 w-1 rounded-full transition-colors ${on ? "bg-[#8db8ff]" : "bg-transparent"}`} aria-hidden="true" />
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                  <ChannelLogo name={pl.logo} size={24} />
                </span>
                <span className="min-w-0">
                  <span className={`block text-[21px] font-extrabold tracking-[-0.035em] ${on ? "text-white" : "text-white/60"}`}>{pl.name} 광고</span>
                  <span className={`block text-[16px] ${on ? "text-white/75" : "text-white/45"} max-sm:hidden`}>{pl.purpose}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2 px-1">
          {p.formats.map((f) => (
            <span key={f} className="rounded-full bg-white/8 px-3.5 py-2 text-[15px] font-semibold text-white/85">
              {f}
            </span>
          ))}
          <Link href={p.href} className="ml-auto inline-flex min-h-11 items-center gap-1.5 text-[16px] font-bold text-[#8db8ff] hover:text-white">
            {p.name} 광고 자세히
            <ArrowIcon className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>

      <div id="adfan-panel" role="tabpanel" aria-labelledby={`adfan-tab-${p.key}`} className="relative mx-auto h-[26rem] w-full max-w-[38rem] sm:h-[32rem] lg:h-[38rem]">
        {/* 바닥 은은한 빛 */}
        <span className="pointer-events-none absolute inset-x-[12%] bottom-0 h-1/2 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
        <div key={p.key} className="absolute inset-0">
          {p.phones.map((ph, i) => {
            const f = FAN[i];
            return (
              <div
                key={ph.src}
                className="fan-phone absolute left-1/2 top-1/2 w-[40%] sm:w-[38%]"
                style={{ "--x": f.x, "--r": f.r, "--s": f.s, "--fd": f.d, zIndex: f.z } as CSSProperties}
              >
                <PhoneFrame src={ph.src} alt={ph.alt} sizes="(min-width: 1024px) 220px, 36vw" className="shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
