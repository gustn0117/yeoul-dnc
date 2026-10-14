"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ChannelLogo, { type ChannelKey } from "@/components/ui/ChannelLogo";
import PhoneFrame from "@/components/ui/PhoneFrame";
import { ArrowIcon, ChevronIcon } from "@/components/ui/icons";

type Channel = {
  id: string;
  name: string;
  purpose: string;
  formats: string[];
  logos?: ChannelKey[];
  icon?: "mail" | "building";
  media: { type: "phone" | "photo"; src: string; alt: string };
  href: string;
};

const CHANNELS: Channel[] = [
  { id: "meta", name: "메타 광고", purpose: "관심사·행동 기반 정밀 타겟팅과 리드 수집", formats: ["피드", "릴스", "리드폼"], logos: ["instagram", "facebook"], media: { type: "phone", src: "/images/0515/insta-phone-1.png", alt: "인스타그램 피드 광고 화면" }, href: "/services#meta" },
  { id: "naver", name: "네이버 광고", purpose: "검색 수요 기반 문의 확보와 브랜드 노출", formats: ["파워링크", "브랜드검색", "성과형 디스플레이"], logos: ["naver"], media: { type: "phone", src: "/images/0515/naver-phone-2.png", alt: "네이버 파워링크 광고 화면" }, href: "/services#naver" },
  { id: "kakao", name: "카카오 광고", purpose: "상담 유입과 채널 메시지로 재접촉 운영", formats: ["비즈보드", "채널 메시지", "비즈메시지"], logos: ["kakaotalk"], media: { type: "phone", src: "/images/0515/kakao-phone-1.png", alt: "카카오톡 친구탭 배너 광고 화면" }, href: "/services#kakao" },
  { id: "youtube", name: "유튜브 광고", purpose: "영상 콘텐츠로 브랜드 인지도와 신뢰 형성", formats: ["인스트림", "범퍼", "Shorts"], logos: ["youtube"], media: { type: "photo", src: "/images/stock/youtube-video.jpg", alt: "영상 편집 화면" }, href: "/services#youtube" },
  { id: "google", name: "구글 광고", purpose: "검색·디스플레이·리타겟팅까지 확장 운영", formats: ["검색", "디스플레이", "PMax"], logos: ["google"], media: { type: "photo", src: "/images/stock/dashboard.jpg", alt: "광고 성과 대시보드 화면" }, href: "/services#google" },
  { id: "sms", name: "문자 마케팅", purpose: "LMS 기반 지역 타겟팅과 기존 고객 안내", formats: ["LMS", "MMS", "타겟 문자"], icon: "mail", media: { type: "photo", src: "/images/stock/sms-marketing.jpg", alt: "편지 봉투들" }, href: "/services#more" },
  { id: "local", name: "당근·지역 광고", purpose: "생활권 기반 동네 고객 유입과 재방문", formats: ["당근 광고", "지역 타겟"], logos: ["danggeun"], media: { type: "photo", src: "/images/0515/op-store.png", alt: "태블릿을 보는 매장 운영자" }, href: "/services#more" },
  { id: "realestate", name: "부동산 특화", purpose: "분양·임대 실수요 타겟 전문 플랫폼 광고", formats: ["분양", "임대", "상가"], icon: "building", media: { type: "photo", src: "/images/0515/ind-apartment.png", alt: "분양 단지 전경" }, href: "/services#more" },
];

function Mark({ ch, size = 28 }: { ch: Channel; size?: number }) {
  if (ch.logos) {
    return (
      <span className="flex items-center gap-1.5">
        {ch.logos.map((l) => (
          <ChannelLogo key={l} name={l} size={size} />
        ))}
      </span>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden="true" className="text-brand">
      {ch.icon === "mail" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5h17v11h-17zM3.5 7l8.5 6 8.5-6" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20.5h16M6 20.5V4.5h8v16M14 9.5h4v11M9 8h2M9 11.5h2M9 15h2" />
      )}
    </svg>
  );
}

/* 채널 8개: 데스크톱은 세로 패널이 나란히 있고 고른 패널이 넓게 펼쳐짐, 모바일은 목록 */
export default function ChannelPanels() {
  const [active, setActive] = useState(0);

  return (
    <>
      <ul className="hidden h-[34rem] gap-2.5 lg:flex" aria-label="운영 채널">
        {CHANNELS.map((ch, i) => {
          const on = i === active;
          return (
            <li
              key={ch.id}
              data-on={on}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`ch-panel relative min-w-0 overflow-hidden rounded-[1.75rem] ${on ? "bg-night text-white" : "bg-g100 text-ink"}`}
            >
              <Link href={ch.href} className="flex h-full flex-col p-6 -outline-offset-3" aria-label={`${ch.name} — ${ch.purpose}`}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white">
                  <Mark ch={ch} size={ch.logos && ch.logos.length > 1 ? 20 : 26} />
                </span>
                {/* 접힌 패널: 세로 이름 */}
                {!on && (
                  <span className="mt-auto text-[19px] font-extrabold tracking-[-0.03em] [writing-mode:vertical-rl]">{ch.name}</span>
                )}
                {/* 펼친 패널: 설명 + 화면 */}
                {on && (
                  <span className="ch-detail mt-6 grid min-h-0 flex-1 grid-cols-[1fr_auto] gap-6">
                    <span className="flex flex-col">
                      <span className="text-[30px] font-extrabold leading-tight tracking-[-0.045em]">{ch.name}</span>
                      <span className="mt-3 text-[18px] leading-[1.6] text-white/75">{ch.purpose}</span>
                      <span className="mt-5 flex flex-wrap gap-1.5">
                        {ch.formats.map((f) => (
                          <span key={f} className="rounded-full bg-white/10 px-3 py-1.5 text-[14px] font-semibold text-white/85">
                            {f}
                          </span>
                        ))}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-2 text-[16px] font-bold text-[#8db8ff]">
                        자세히 보기
                        <ArrowIcon className="h-4.5 w-4.5" />
                      </span>
                    </span>
                    {ch.media.type === "phone" ? (
                      <PhoneFrame src={ch.media.src} alt={ch.media.alt} sizes="200px" className="w-44 self-end shadow-none xl:w-48" />
                    ) : (
                      <span className="relative block w-52 self-stretch overflow-hidden rounded-2xl xl:w-60">
                        <Image src={ch.media.src} alt={ch.media.alt} fill sizes="240px" className="object-cover" />
                      </span>
                    )}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* 모바일·태블릿: 목록 */}
      <ul className="divide-y divide-g200 border-y border-g200 lg:hidden" aria-label="운영 채널">
        {CHANNELS.map((ch) => (
          <li key={ch.id}>
            <Link href={ch.href} className="flex items-center gap-4 py-5">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-g100">
                <Mark ch={ch} size={ch.logos && ch.logos.length > 1 ? 18 : 24} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[19px] font-extrabold tracking-[-0.035em] text-ink">{ch.name}</span>
                <span className="mt-0.5 block text-[16px] text-g600">{ch.purpose}</span>
              </span>
              <ChevronIcon className="h-5 w-5 shrink-0 text-g400" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
