import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import { COMPANY, KAKAO_CHANNEL_URL, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

const INIT_SCRIPT = `document.documentElement.classList.add("js")`;

// 검색엔진용 회사 정보 (Google·네이버 구조화 데이터) — '<'는 스크립트 탈출 방지를 위해 유니코드로
const ORG_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  alternateName: COMPANY.nameEn,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-mark-color.png`,
  description: COMPANY.tagline,
  email: COMPANY.email,
  telephone: `+82-${COMPANY.tel}`,
  sameAs: [KAKAO_CHANNEL_URL],
  contactPoint: { "@type": "ContactPoint", telephone: `+82-${COMPANY.tel}`, contactType: "customer service", areaServed: "KR", availableLanguage: "Korean" },
}).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // 공유 미리보기 이미지·canonical 주소를 절대 경로로 만들 기준
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: "AI 퍼포먼스 마케팅, 홈페이지 제작, 랜딩페이지, 광고 운영, 콘텐츠 제작, 분양 광고, DB 자동화, 여울디앤씨",
  // 페이지별 값은 각 페이지의 pageMetadata()가 덮어씀 (관리자·404 등은 이 기본값)
  openGraph: { type: "website", locale: "ko_KR", siteName: COMPANY.name, title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/og-image.png"] },
  twitter: { card: "summary_large_image" },
  verification: {
    google: "Jgb5fVHXF8BK-kUW2N1GDfnIWm5cYGYJnQMiAEDZWjE",
    other: {
      "naver-site-verification": "62a58f20ebf5bdf2d9fd14618b6ddbdf5fd36caf",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Next 16은 페이지 이동 시 smooth 스크롤을 자동으로 끄지 않으므로 속성으로 요청
    // 아래 인라인 스크립트가 hydration 전에 html에 js 클래스를 붙이므로 경고 억제
    <html lang="ko" className="h-full" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* 스크롤 등장 효과는 JS가 있을 때만 요소를 숨김 (globals.css의 .js [data-reveal]) — 페인트 전에 붙여야 깜빡임이 없음 */}
        <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* Pretendard — 기존엔 폰트를 불러오지 않아 미설치 기기에서 시스템 폰트로 보였음 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORG_JSON_LD }} />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
