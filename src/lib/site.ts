import type { Metadata } from "next";

/* 사이트 전역 상수 — 연락처·메뉴는 여기 한 곳에서만 고친다 */

export const SITE_URL = "https://yeouldnc.com";
export const SITE_TITLE = "AI 퍼포먼스 마케팅 실행사, 여울디앤씨";
export const SITE_DESCRIPTION = "홈페이지, 랜딩페이지 제작 및 광고 운영과 콘텐츠 제작, 분양 광고 마케팅, DB 자동화 서비스 제공.";

export const COMPANY = {
  name: "여울디앤씨",
  nameEn: "Yeoul D&C",
  ceo: "문주호",
  bizNo: "880-53-01226",
  tel: "1668-5832",
  email: "info@yeouldnc.com",
  hours: "평일 09:00 - 18:00",
  hoursNote: "주말·공휴일 휴무",
  tagline: "유입부터 상담 전환까지 설계하는 온라인 광고 실행 파트너",
} as const;

export const TEL_HREF = `tel:${COMPANY.tel.replace(/-/g, "")}`;
export const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_GxipxdX";
export const KAKAO_URL = `${KAKAO_CHANNEL_URL}/chat`;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "회사소개", href: "/about" },
  { label: "광고상품 / 서비스", href: "/services" },
  { label: "포트폴리오", href: "/cases" },
  { label: "진행절차", href: "/process" },
  { label: "문의하기", href: "/contact" },
];

// 카카오톡·페이스북 등 링크 공유 미리보기 이미지 (public/og-image.png, 1200×630)
const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "여울디앤씨, 결과로 말하는 온라인 광고" };

/** 페이지 메타데이터 — 페이지가 openGraph를 정하면 상위 설정을 통째로 덮어쓰므로, 공유 미리보기에 필요한 값을 매번 모두 채운다 */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "ko_KR", siteName: COMPANY.name, url: path, title, description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
