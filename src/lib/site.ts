import type { Metadata } from "next";

/* 사이트 전역 상수 — 연락처·메뉴는 여기 한 곳에서만 고친다 */

export const SITE_URL = "https://yeouldnc.com";
export const SITE_TITLE = "종합광고 실행사, 여울디앤씨";
export const SITE_DESCRIPTION =
  "광고 기획부터 콘텐츠 제작, 매체 운영, 홈페이지와 고객관리까지 함께하는 종합광고 실행사. 네이버·메타·카카오·구글·LMS 광고, 영상·디자인·제안서·홈페이지 제작, 고객관리 자동화.";

export const COMPANY = {
  name: "여울디앤씨",
  nameEn: "Yeoul D&C",
  ceo: "문주호",
  bizNo: "880-53-01226",
  tel: "1668-5832",
  email: "info@yeouldnc.com",
  hours: "평일 09:00 - 18:00",
  hoursNote: "주말·공휴일 휴무",
  tagline: "광고 기획부터 콘텐츠 제작, 매체 운영, 홈페이지와 고객관리까지 함께하는 종합광고 실행사",
} as const;

export const TEL_HREF = `tel:${COMPANY.tel.replace(/-/g, "")}`;
export const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_GxipxdX";
export const KAKAO_URL = `${KAKAO_CHANNEL_URL}/chat`;
export const KAKAO_FRIEND_URL = `${KAKAO_CHANNEL_URL}/friend`;

/** 분양·부동산 전문 브랜드 (분양 광고는 이쪽에서 자세히 다룸) */
export const YEOULAD_URL = "https://yeoulads.com";

export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { title?: string; links: NavLink[] };
export type NavItem = NavLink & { groups?: NavGroup[] };

export const NAV: NavItem[] = [
  { label: "회사소개", href: "/about" },
  {
    label: "광고·마케팅",
    href: "/marketing",
    groups: [
      {
        title: "매체 광고",
        links: [
          { label: "네이버 광고", href: "/marketing#naver" },
          { label: "메타 광고", href: "/marketing#meta" },
          { label: "카카오 광고", href: "/marketing#kakao" },
          { label: "구글·유튜브 광고", href: "/marketing#google" },
          { label: "LMS 문자광고", href: "/marketing#lms" },
          { label: "당근 및 그 외 광고", href: "/marketing#local" },
        ],
      },
      {
        title: "운영·기획",
        links: [
          { label: "SNS 채널 운영", href: "/marketing#sns" },
          { label: "브랜드·바이럴 마케팅", href: "/marketing#viral" },
          { label: "광고 기획·컨설팅", href: "/marketing#consult" },
        ],
      },
      { title: "전문 분야", links: [{ label: "분양·부동산 · 여울애드", href: "/yeoulad" }] },
    ],
  },
  {
    label: "제작서비스",
    href: "/production",
    groups: [
      {
        links: [
          { label: "제작서비스 한눈에 보기", href: "/production" },
          { label: "영상 제작", href: "/production/video", desc: "릴스·쇼츠, 홍보영상, 기획·대본, 촬영·편집" },
          { label: "디자인 제작", href: "/production/design", desc: "배너, 카드뉴스, SNS 콘텐츠, 인쇄물 디자인" },
          { label: "문서 제작", href: "/production/document", desc: "PPT, 사업제안서, 회사소개서, 브리핑 자료" },
          { label: "홈페이지 제작", href: "/production/web", desc: "홈페이지, 랜딩페이지, 신청폼, 예약 접수" },
        ],
      },
    ],
  },
  { label: "고객관리·자동화", href: "/automation" },
  { label: "포트폴리오", href: "/cases" },
  { label: "상담문의", href: "/contact" },
];

/** 이 메뉴가 현재 경로를 포함하는지 (하위 페이지·같은 묶음의 다른 경로 포함) */
export function navMatches(item: NavItem, pathname: string) {
  const paths = [item.href, ...(item.groups ?? []).flatMap((g) => g.links.map((l) => l.href.split("#")[0]))];
  return paths.some((p) => p !== "/" && (pathname === p || pathname.startsWith(`${p}/`)));
}

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
