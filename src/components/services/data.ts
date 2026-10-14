import type { ChannelKey } from "@/components/ui/ChannelLogo";

/* 광고상품 / 서비스 페이지 데이터.
   문구는 기존 사이트 그대로 두고(CONTENT_INVENTORY §4.3), 문자열 안의 **…**는 강조(Emph)로 렌더링한다. */

export type ChannelId = "naver" | "meta" | "kakao" | "youtube" | "google";

type Shot = { src: string; alt: string };

export type ChannelVisual =
  /** 가운데 폰이 shots[0] */
  | { kind: "phones"; shots: [Shot, Shot, Shot]; stat?: { label: string; value: string } }
  | { kind: "youtube" }
  | { kind: "google" };

export type Channel = {
  id: ChannelId;
  name: string;
  category: string;
  /** 제목 위 회색 한 줄 (기존 제목의 앞부분) */
  lead: string;
  title: string;
  logos: ChannelKey[];
  /** 데스크톱에서만 보이는 설명 */
  desc?: string;
  checks: string[];
  chips: string[];
  visual: ChannelVisual;
};

export const CHANNELS: Channel[] = [
  {
    id: "naver",
    name: "네이버",
    category: "퍼포먼스 마케팅",
    lead: "국내 최대 포털사이트에 노출되어 효과적인",
    title: "네이버 마케팅",
    logos: ["naver"],
    desc: "고객이 **검색하는 순간부터** 브랜드와의 접점을 확보합니다. 구매 전 리서치 단계와 지역 중심 마케팅에 강합니다.",
    checks: [
      "검색 의도가 높은 고객을 정확하게 타겟팅",
      "가입, 구매 등 전환으로 이어질 가능성 증가",
      "성과 데이터를 통한 지속적인 최적화",
      "검색 노출 및 콘텐츠 제공으로 브랜드 신뢰도 강화",
    ],
    chips: ["파워링크", "브랜드검색", "성과형 디스플레이"],
    visual: {
      kind: "phones",
      shots: [
        { src: "/images/0515/naver-phone-1.png", alt: "네이버 브랜드검색 광고 화면" },
        { src: "/images/0515/naver-phone-2.png", alt: "네이버 파워링크 광고 화면" },
        { src: "/images/0515/naver-phone-3.png", alt: "네이버 메인 배너 광고 화면" },
      ],
      stat: { label: "검색 전환", value: "매우 높음" },
    },
  },
  {
    id: "meta",
    name: "메타",
    category: "퍼포먼스 마케팅",
    lead: "국내·해외 최대 규모의 SNS에 노출되는",
    title: "메타 마케팅",
    logos: ["instagram", "facebook"],
    desc: "**관심사·행동·위치 기반 정밀 타겟팅**으로 인스타그램·페이스북에서 높은 전환을 유도합니다.",
    // 기존 기능 카드(클라이언트 요청으로 삭제)에서 뜻이 분명한 문장만 체크리스트로 남김
    checks: ["관심사·행동 기반 맞춤 타겟 설정", "트렌디한 디자인으로 주목도 향상", "구매·문의 전환 효과 극대화"],
    chips: [],
    visual: {
      kind: "phones",
      shots: [
        { src: "/images/0515/insta-phone-1.png", alt: "인스타그램 피드 광고 화면" },
        { src: "/images/0515/insta-phone-2.png", alt: "인스타그램 릴스 광고 화면" },
        { src: "/images/0515/insta-phone-3.png", alt: "여울디앤씨 인스타그램 프로필 화면" },
      ],
    },
  },
  {
    id: "kakao",
    name: "카카오",
    category: "상담 유입형",
    lead: "카카오톡 채널 기반 상담 유입과 재접촉",
    title: "카카오 마케팅",
    logos: ["kakaotalk"],
    checks: ["상담 유입이 중요한 업종에 최적화", "기존 고객 재접촉·후속 메시지 발송", "카카오톡 채널 연동으로 빠른 커뮤니케이션"],
    chips: ["키워드 광고", "카카오톡 채널 메시지", "비즈메시지"],
    visual: {
      kind: "phones",
      shots: [
        { src: "/images/0515/kakao-phone-1.png", alt: "카카오톡 친구탭 배너 광고 화면" },
        { src: "/images/0515/kakao-phone-2.png", alt: "카카오톡 채팅탭 배너 광고 화면" },
        { src: "/images/0515/kakao-phone-3.png", alt: "카카오톡 더보기탭 배너 광고 화면" },
      ],
      stat: { label: "상담 유입", value: "실시간" },
    },
  },
  {
    id: "youtube",
    name: "유튜브",
    category: "브랜드 인지도",
    lead: "영상 중심 광고로",
    title: "유튜브 마케팅",
    logos: ["youtube"],
    desc: "**인스트림 · 범퍼 · Shorts** 등 다양한 포맷으로 브랜드 인지도와 신뢰를 동시에 확보합니다.",
    checks: ["브랜드 인지도를 높이고 싶은 경우", "영상 콘텐츠 활용이 가능한 업종", "신뢰감 형성이 중요한 업종에 효과적"],
    chips: ["인스트림", "범퍼", "Shorts"],
    visual: { kind: "youtube" },
  },
  {
    id: "google",
    name: "구글",
    category: "확장형 광고",
    lead: "자동 최적화로 확장되는",
    title: "구글 마케팅",
    logos: ["google"],
    desc: "**다양한 지면에서 광고를 확장**하고, 리타겟팅과 자동 최적화 기반으로 효율적으로 운영합니다. 검색, 디스플레이, 유튜브까지 통합 캠페인이 가능합니다.",
    checks: ["다양한 지면에서 광고 확장이 필요한 경우", "이탈 고객 리타겟팅이 필요한 경우", "자동 최적화 기반 효율적 운영"],
    chips: ["검색 광고", "디스플레이", "디맨드젠", "PMax"],
    visual: { kind: "google" },
  },
];

/** 상단 탭 바 — id는 섹션 id이자 홈(/services#naver 등)에서 들어오는 앵커 */
export const TABS = [
  { id: "naver", label: "네이버" },
  { id: "meta", label: "메타" },
  { id: "kakao", label: "카카오" },
  { id: "youtube", label: "유튜브" },
  { id: "google", label: "구글" },
  { id: "more", label: "그 외 채널" },
];

export const YOUTUBE_FORMATS = [
  { name: "범퍼", detail: "6초 짧은 광고", image: "/images/stock/youtube-video.jpg", alt: "영상 편집 타임라인 화면" },
  { name: "인스트림", detail: "5초 후 건너뛰기", image: "/images/stock/creative-design.jpg", alt: "광고 소재 디자인 시안" },
  { name: "Shorts", detail: "모바일 세로형", image: "/images/stock/mobile-ads.jpg", alt: "앱 아이콘이 보이는 스마트폰 화면" },
];

export const OVERVIEW_LOGOS: { key: ChannelKey; label: string }[] = [
  { key: "naver", label: "네이버" },
  { key: "kakaotalk", label: "카카오톡" },
  { key: "meta", label: "메타" },
  { key: "instagram", label: "인스타그램" },
  { key: "facebook", label: "페이스북" },
  { key: "google", label: "구글" },
  { key: "youtube", label: "유튜브" },
  { key: "danggeun", label: "당근" },
];

export const MORE_CHANNELS = [
  {
    label: "재접촉 마케팅",
    title: "문자 마케팅",
    desc: "확보된 DB를 대상으로 직접 전달하는 SMS/LMS/MMS 광고",
    points: ["재문의 유도 / 방문·예약 안내", "기존 고객 재접촉에 효과적"],
    image: "/images/stock/sms-marketing.jpg",
    alt: "여러 장의 편지 봉투",
  },
  {
    label: "지역 특화",
    title: "당근·지역 광고",
    desc: "지역 기반 피드/검색/카탈로그 광고로 생활권 고객을 확보",
    points: ["지역 상권 업종에 최적화", "생활권 고객이 중요한 서비스"],
    image: "/images/stock/local-store.jpg",
    alt: "상품이 진열된 동네 마트",
  },
  {
    label: "업종 특화",
    title: "부동산 특화 광고",
    desc: "호갱노노, 직방, 다방, 네모 등 부동산 전문 플랫폼 광고",
    points: ["분양 / 임대 / 상가", "지역 부동산 마케팅"],
    image: "/images/stock/real-estate.jpg",
    alt: "열쇠 옆에 놓인 집 모형",
  },
];

export type IndustryIcon = "building" | "hospital" | "book" | "store" | "chat";

export const INDUSTRIES: { no: string; name: string; points: string[]; result: string; icon: IndustryIcon }[] = [
  { no: "01", name: "분양", points: ["DB 수집", "방문 예약", "LMS 전환"], result: "관심 고객 유입부터 계약 상담까지 통합 운영", icon: "building" },
  { no: "02", name: "병원", points: ["예약 문의 확보", "신뢰 기반 브랜딩 운영"], result: "검색 노출과 상담 문의 최적화", icon: "hospital" },
  { no: "03", name: "교육", points: ["수강 상담", "카카오 채널 연동 운영"], result: "상담 유입과 리드 확보 중심 운영", icon: "book" },
  { no: "04", name: "지역 자영업", points: ["지역 타겟 광고", "신규 고객 유입 확대"], result: "생활권 고객 확보와 방문 유도", icon: "store" },
  { no: "05", name: "상담형 서비스", points: ["문의 전환", "리드 확보 최적화"], result: "상담 신청과 전환 관리", icon: "chat" },
];

export const PROCESS_STEPS = [
  { title: "전략 수립", desc: "시장·경쟁사·타겟 분석을 통한 광고 전략 기획" },
  { title: "소재 제작", desc: "타겟에 최적화된 광고 소재 기획 및 제작" },
  { title: "채널 세팅", desc: "광고 채널 설정 및 캠페인 구조 세팅" },
  { title: "운영 및 최적화", desc: "데이터 기반 운영으로 성과 지속 개선" },
  { title: "결과 보고", desc: "성과 리포트 제공 및 다음 전략 제안" },
];

/* 업종 × 채널 가이드 — 데스크톱 표의 단계가 기준이고, 모바일 카드의 추천/적합 목록도 여기서 뽑는다 */
export type Level = "best" | "good" | "sub" | "low";

export const LEVELS: Record<Level, { short: string; label: string }> = {
  best: { short: "추천", label: "최적의 채널" },
  good: { short: "적합", label: "적합한 채널" },
  sub: { short: "보조", label: "보조 채널" },
  low: { short: "–", label: "비추천/보조 수준" },
};

export type GuideChannelKey = Extract<ChannelKey, "naver" | "meta" | "kakaotalk" | "youtube" | "google" | "danggeun">;

export const GUIDE_CHANNELS: { key: GuideChannelKey; label: string }[] = [
  { key: "naver", label: "네이버" },
  { key: "meta", label: "메타" },
  { key: "kakaotalk", label: "카카오" },
  { key: "youtube", label: "유튜브" },
  { key: "google", label: "구글" },
  { key: "danggeun", label: "당근" },
];

/** levels 순서 = GUIDE_CHANNELS 순서 */
export const GUIDE_ROWS: { no: string; name: string; tag: string; levels: Level[] }[] = [
  { no: "01", name: "분양", tag: "DB 수집", levels: ["best", "best", "sub", "sub", "good", "best"] },
  { no: "02", name: "병원", tag: "예약 문의", levels: ["best", "best", "sub", "sub", "good", "best"] },
  { no: "03", name: "교육", tag: "상담 전환", levels: ["best", "good", "best", "good", "good", "low"] },
  { no: "04", name: "지역 자영업", tag: "생활권", levels: ["best", "good", "sub", "low", "good", "best"] },
  { no: "05", name: "상담형 서비스", tag: "리드 수집", levels: ["best", "best", "good", "sub", "good", "sub"] },
];

/** 업종별 설계에서 추천 채널을 '노출 → 검색 → 상담' 흐름 순서로 놓기 위한 역할 (stage가 작을수록 앞) */
export const CHANNEL_ROLE: Record<GuideChannelKey, { role: string; stage: number }> = {
  youtube: { role: "영상으로 인지", stage: 0 },
  meta: { role: "관심사 타겟 노출", stage: 1 },
  danggeun: { role: "동네 고객 노출", stage: 1 },
  naver: { role: "검색 수요 확보", stage: 2 },
  google: { role: "검색·리타겟팅", stage: 2 },
  kakaotalk: { role: "상담·재접촉", stage: 3 },
};

/* 업종별 운영 사례 — 포트폴리오(가로 카드)와 서비스(업종별 설계)가 함께 쓴다. no는 INDUSTRIES·GUIDE_ROWS와 같은 번호 */
// 로고는 그림만 보여주고, 이름은 대체 텍스트로 정확히 (기존: alt="meta" 같은 영문 키)
export const OPERATION_LOGO_NAME = { naver: "네이버", kakaotalk: "카카오톡", meta: "메타", instagram: "인스타그램" } as const;
export type OperationLogo = keyof typeof OPERATION_LOGO_NAME;

export const OPERATIONS: {
  no: string;
  industry: string;
  title: string;
  lead: string;
  rest: string;
  logos: OperationLogo[];
  point: string;
  target: string;
  img: string;
}[] = [
  {
    no: "01",
    industry: "분양 광고",
    title: "메타 리드폼 + LMS 후속 운영",
    lead: "분양 광고는 빠른 DB 확보와 관심 고객 재접촉 구조가 중요합니다.",
    rest: "메타 광고와 LMS 후속 시스템을 통해 방문 상담 전환까지 연결합니다.",
    logos: ["meta", "kakaotalk"],
    point: "DB 유입 → 상담 전환",
    target: "관심 고객 확보",
    img: "/images/0515/op-apartment.png",
  },
  {
    no: "02",
    industry: "병원 광고",
    title: "네이버 검색형 + 메타 노출형",
    // 기존 '반복 노출 분배율'은 오타로 보여 회사소개 사례 문구(반복 노출 브랜딩)로 맞춤
    lead: "병원 광고는 검색 신뢰도와 반복 노출 브랜딩이 중요합니다.",
    rest: "플레이스·검색·블로그·메타 운영을 통해 예약 문의 전환율을 높입니다.",
    logos: ["naver", "instagram"],
    point: "검색 유입 → 신뢰 형성",
    target: "예약 문의 확보",
    img: "/images/0515/op-clinic.png",
  },
  {
    no: "03",
    industry: "교육 광고",
    title: "상담 유입 · 카카오 채널 전환",
    lead: "교육 업종은 상담 연결과 지속적인 상담 고객 관리가 중요합니다.",
    rest: "메타 광고와 카카오 채널 운영으로 수강 문의 전환율을 강화합니다.",
    logos: ["meta", "kakaotalk"],
    point: "문의 유입 → 상담 연결",
    target: "수강생 모집",
    img: "/images/0515/op-education.png",
  },
  {
    no: "04",
    industry: "지역 자영업",
    title: "플레이스 기반 지역 타겟 광고",
    lead: "지역 자영업 광고는 생활권 노출과 실제 방문 고객 확보가 중요합니다.",
    rest: "네이버 플레이스와 메타 광고를 활용해 빠른 유입을 확보합니다.",
    logos: ["naver", "meta"],
    point: "지역 노출 강화",
    target: "방문 고객 확보",
    img: "/images/0515/op-store.png",
  },
  {
    no: "05",
    industry: "상담형 서비스",
    title: "문의 전환 중심 퍼포먼스 광고",
    lead: "상담형 서비스는 고객 문의 확보와 전환 관리 구조가 중요합니다.",
    rest: "검색광고·메타·리드 수집 운영을 통해 실질적인 상담 문의를 유도합니다.",
    logos: ["naver", "meta", "kakaotalk"],
    point: "문의 확보 → 상담 전환",
    target: "리드 고객 확보",
    img: "/images/0515/op-consult.png",
  },
];
