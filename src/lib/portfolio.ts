/* 포트폴리오 자료 — 고객사 제공(2026-11-02).
   광고 이미지는 가상 브랜드로 만든 업종별 디자인 예시라 실제 집행 사례·성과로 소개하지 않는다.
   영상은 영상마다 가장 보기 좋은 5초만 잘라 소리 없이 미리보기로 쓰고, 원본은 상담 때 보여준다. */

export type AdKind = "brand" | "info";
export type AdRatio = "1x1" | "9x16" | "16x9";

export const AD_KINDS: Record<AdKind, { label: string; desc: string }> = {
  brand: { label: "브랜드형 광고", desc: "사진과 짧은 문구로 업종의 분위기를 전하고 브랜드를 기억하게 하는 광고입니다." },
  info: { label: "정보형 광고", desc: "진료 과정, 수업 구성, 이용 순서처럼 알려야 할 내용을 한눈에 정리한 광고입니다." },
};

export const AD_RATIOS: { id: AdRatio; label: string; use: string; w: number; h: number }[] = [
  { id: "1x1", label: "1:1", use: "피드", w: 960, h: 960 },
  { id: "9x16", label: "9:16", use: "스토리·릴스", w: 720, h: 1280 },
  { id: "16x9", label: "16:9", use: "디스플레이·유튜브", w: 1280, h: 720 },
];

// 메인 '함께하는 업종'과 같은 6개 묶음
export const AD_GROUPS = ["병원·의료기관", "교육·학원", "공공기관·단체", "외식·프랜차이즈", "매장·생활서비스", "기업·브랜드"] as const;
export type AdGroup = (typeof AD_GROUPS)[number];

export type AdIndustry = { no: string; slug: string; name: string; group: AdGroup };

const industry = (no: number, slug: string, name: string, group: AdGroup): AdIndustry => ({ no: String(no).padStart(2, "0"), slug, name, group });

export const AD_INDUSTRIES: AdIndustry[] = [
  industry(1, "hospital", "종합병원", "병원·의료기관"),
  industry(2, "clinic", "병의원", "병원·의료기관"),
  industry(3, "dermatology", "피부과", "병원·의료기관"),
  industry(4, "plastic-surgery", "성형외과", "병원·의료기관"),
  industry(5, "dental", "치과", "병원·의료기관"),
  industry(6, "korean-medicine", "한의원", "병원·의료기관"),
  industry(7, "exam-academy", "입시학원", "교육·학원"),
  industry(8, "language-academy", "외국어학원", "교육·학원"),
  industry(9, "arts-academy", "예체능학원", "교육·학원"),
  industry(10, "vocational", "직업교육기관", "교육·학원"),
  industry(11, "public", "공공기관", "공공기관·단체"),
  industry(12, "local-gov", "지자체", "공공기관·단체"),
  industry(13, "association", "협회", "공공기관·단체"),
  industry(14, "foundation", "재단", "공공기관·단체"),
  industry(15, "nonprofit", "비영리단체", "공공기관·단체"),
  industry(16, "restaurant", "음식점", "외식·프랜차이즈"),
  industry(17, "cafe", "카페", "외식·프랜차이즈"),
  industry(18, "bakery", "베이커리", "외식·프랜차이즈"),
  industry(19, "food-brand", "외식 브랜드", "외식·프랜차이즈"),
  industry(20, "franchise", "프랜차이즈", "외식·프랜차이즈"),
  industry(21, "hair-salon", "미용실", "매장·생활서비스"),
  industry(22, "aesthetic", "에스테틱", "매장·생활서비스"),
  industry(23, "gym", "헬스장", "매장·생활서비스"),
  industry(24, "pilates", "필라테스", "매장·생활서비스"),
  industry(25, "pet", "반려동물 서비스", "매장·생활서비스"),
  industry(26, "company", "일반기업", "기업·브랜드"),
  industry(27, "manufacturing", "제조업", "기업·브랜드"),
  industry(28, "online-shop", "온라인 쇼핑몰", "기업·브랜드"),
  industry(29, "product-service", "제품·서비스", "기업·브랜드"),
];

export const adImage = (kind: AdKind, item: AdIndustry, ratio: AdRatio) => `/images/portfolio/ads/${kind}/${item.no}-${item.slug}-${ratio}.webp`;

export const findIndustry = (slug: string) => AD_INDUSTRIES.find((i) => i.slug === slug)!;

export type PortfolioVideo = { slug: string; title: string; tag: string };

// 부동산(분양)은 뒤쪽에 — 종합광고 위주로 먼저 보이게
export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  { slug: "product", title: "제품 광고", tag: "화장품" },
  { slug: "skin", title: "피부 정보 영상", tag: "병원" },
  { slug: "academy", title: "원장 인터뷰", tag: "학원" },
  { slug: "story", title: "스토리 광고", tag: "헬스장" },
  { slug: "brow", title: "시술 소개 광고", tag: "뷰티" },
  { slug: "ai", title: "AI 합성 영상 광고", tag: "서비스" },
  { slug: "promo", title: "참여 유도 광고", tag: "온라인 쇼핑" },
  { slug: "estate-1", title: "모션그래픽 광고", tag: "분양" },
  { slug: "estate-2", title: "세대 내부 소개", tag: "분양" },
  { slug: "estate-3", title: "입지 브리핑", tag: "분양" },
  { slug: "estate-4", title: "3D 미니어처 설명", tag: "분양" },
  { slug: "estate-5", title: "3D 연출 설명", tag: "분양" },
  { slug: "estate-6", title: "생활권 브리핑", tag: "분양" },
];

export const findVideo = (slug: string) => PORTFOLIO_VIDEOS.find((v) => v.slug === slug)!;
export const videoSrc = (slug: string) => `/videos/portfolio/${slug}.mp4`;
export const videoPoster = (slug: string) => `/images/portfolio/video/${slug}.webp`;

// 제안서·회사소개서의 표지와 본문 페이지를 모은 이미지 (1280×720)
export const DOC_WORKS = Array.from({ length: 13 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { id: n, src: `/images/portfolio/docs/doc-${n}.webp`, alt: `문서·제안서 디자인 ${i + 1} — 표지와 본문 페이지 모음` };
});

export const findDoc = (id: string) => DOC_WORKS.find((d) => d.id === id)!;
