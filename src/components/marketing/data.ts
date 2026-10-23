import type { ChannelKey } from "@/components/ui/ChannelLogo";

/* 광고·마케팅 페이지 데이터 (고객사 개편안 기준).
   매체 상품명과 기능은 매체 공개 안내 기준 — 매체 정책이 바뀌면 여기만 고친다. */

type Shot = { src: string; alt: string };

export type ChannelVisual =
  /** 가운데 폰이 shots[0] */
  | { kind: "phones"; shots: [Shot, Shot, Shot] }
  | { kind: "youtube" }
  | { kind: "google" };

export const YOUTUBE_FORMATS = [
  { name: "범퍼", detail: "6초 짧은 광고", image: "/images/stock/youtube-video.jpg", alt: "영상 편집 타임라인 화면" },
  { name: "인스트림", detail: "5초 후 건너뛰기", image: "/images/stock/creative-design.jpg", alt: "광고 소재 디자인 시안" },
  { name: "Shorts", detail: "모바일 세로형", image: "/images/stock/mobile-ads.jpg", alt: "앱 아이콘이 보이는 스마트폰 화면" },
];

export type InfoRow = { label: string; value: string; ours?: boolean };

export type MarketingChannel = {
  id: string;
  no: string;
  en: string;
  name: string;
  logos: ChannelKey[];
  intro: string;
  rows: InfoRow[];
  note?: string;
  visual: "naver" | "meta" | "kakao" | "google" | "lms" | "local" | "sns" | "viral" | "consult";
};

const row = (label: string, value: string, ours = false): InfoRow => ({ label, value, ours });

export const MARKETING_CHANNELS: MarketingChannel[] = [
  {
    id: "naver",
    no: "01",
    en: "NAVER",
    name: "네이버 광고",
    logos: ["naver"],
    intro: "검색으로 업체와 상품을 찾는 고객에게 홈페이지, 상담 페이지, 매장 정보를 보여줍니다.",
    rows: [
      row("적합한 고객", "검색해서 업체를 고르는 고객이 많은 업종"),
      row("활용 목적", "홈페이지 방문, 문의·예약, 매장 방문, 브랜드 검색 대응"),
      row("노출 위치", "검색 결과의 파워링크·쇼핑·플레이스 영역, 브랜드 검색 상단, 메인·뉴스 등 피드 지면"),
      row("매체 상품", "사이트검색광고(파워링크), 쇼핑검색광고, 플레이스광고, 브랜드검색, 성과형 디스플레이 광고"),
      row("여울디앤씨 업무", "키워드 기획, 광고 문구·확장소재 작성, 계정 세팅, 입찰·예산 조정, 제외 키워드 관리, 결과 분석", true),
      row("확인하는 성과", "노출, 클릭, CTR, 클릭당 비용, 문의·예약"),
    ],
    note: "노출 순위와 클릭 비용은 입찰가, 광고 품질, 경쟁 상황에 따라 달라지므로 순위나 문의 수를 보장하지 않습니다.",
    visual: "naver",
  },
  {
    id: "meta",
    no: "02",
    en: "META",
    name: "메타 광고",
    logos: ["instagram", "facebook"],
    intro: "검색하기 전의 고객에게 인스타그램과 페이스북에서 상품과 브랜드를 먼저 보여줍니다.",
    rows: [
      row("적합한 고객", "이미지·영상으로 보여주기 좋은 상품·서비스"),
      row("활용 목적", "인지도, 사이트 방문, 광고 안 신청서로 잠재 고객 확보, 판매"),
      row("노출 위치", "인스타그램·페이스북 피드, 스토리, 릴스"),
      row("매체 기능", "캠페인 목표 설정, 지역·연령·성별·관심사 대상 설정, 잠재 고객 양식"),
      row("여울디앤씨 업무", "캠페인 구조 설계, 이미지·릴스 소재 제작, 소재 비교 테스트, 전환 측정 설정 확인, 결과 분석", true),
      row("확인하는 성과", "노출, 도달, 클릭, CTR, 신청 수, 신청당 비용"),
    ],
    visual: "meta",
  },
  {
    id: "kakao",
    no: "03",
    en: "KAKAO",
    name: "카카오 광고",
    logos: ["kakaotalk"],
    intro: "카카오톡과 다음 등 카카오 서비스에 광고를 노출하고, 카카오톡 채널로 상담을 이어갑니다.",
    rows: [
      row("적합한 고객", "카카오톡으로 상담·소식을 주고받는 업종"),
      row("활용 목적", "인지도, 사이트 방문, 채널 친구 확보, 상담 연결"),
      row("노출 위치", "카카오톡 채팅 목록 상단 등 카카오 서비스와 제휴 지면, 다음 검색 결과"),
      row("매체 상품", "카카오 비즈보드, 디스플레이·동영상 광고, 카카오톡 채널 메시지, 카카오 키워드광고"),
      row("여울디앤씨 업무", "지면별 배너·메시지 소재 제작, 대상·예산 설정과 조정, 채널 메시지 기획, 결과 분석", true),
      row("확인하는 성과", "노출, 클릭, CTR, 채널 추가, 문의"),
    ],
    note: "채널 메시지는 광고 메시지입니다. 접수 확인 같은 정보성 안내는 고객관리·자동화에서 다룹니다.",
    visual: "kakao",
  },
  {
    id: "google",
    no: "04",
    en: "GOOGLE · YOUTUBE",
    name: "구글·유튜브 광고",
    logos: ["google", "youtube"],
    intro: "유튜브 영상 앞뒤와 쇼츠 피드, 구글 검색과 제휴 지면에 광고를 노출합니다.",
    rows: [
      row("적합한 고객", "영상으로 설명하기 좋은 상품·서비스"),
      row("활용 목적", "인지도, 영상 시청, 사이트 방문, 전환"),
      row("노출 위치", "유튜브 영상 전·중·후, 쇼츠 피드, 검색·추천 영역, 구글 검색 결과, 제휴 웹사이트·앱"),
      row("매체 상품", "건너뛸 수 있는 인스트림, 범퍼 광고, 인피드·Shorts 광고, 검색·디스플레이, 디맨드젠·실적 최대화"),
      row("여울디앤씨 업무", "광고용 영상 편집, 캠페인 유형 선택, 대상 설정, 전환 측정 태그 확인, 결과 분석", true),
      row("확인하는 성과", "노출, 조회, 조회율, 클릭, 전환"),
    ],
    note: "광고 영상이 없다면 영상 제작과 함께 진행할 수 있습니다.",
    visual: "google",
  },
  {
    id: "lms",
    no: "05",
    en: "LMS",
    name: "LMS 문자광고",
    logos: [],
    intro: "통신사의 타깃 문자광고 상품으로 지역·연령·성별 등 조건에 맞는 대상에게 장문·이미지 문자를 보냅니다.",
    rows: [
      row("적합한 고객", "특정 지역·연령대 고객에게 직접 알리고 싶은 업종"),
      row("활용 목적", "신규 오픈, 행사, 모집 안내를 조건에 맞는 대상에게 전달"),
      row("노출 위치", "수신자 휴대폰 문자함 (LMS 장문, MMS 이미지)"),
      row("매체 기능", "광고 수신에 동의한 이용자 중 지역·연령·성별 등으로 대상 설정. 설정 가능한 조건, 최소 발송 규모, 단가는 공급사와 상품마다 다릅니다."),
      row("여울디앤씨 업무", "발송 대상 조건 설계, 문구·이미지 제작, 연결 페이지 점검, 발송 후 반응 정리", true),
      row("확인하는 성과", "발송 수, 링크 클릭, 문의"),
    ],
    note: "광고성 문자에는 ‘(광고)’ 표시, 보내는 사람, 수신 거부 방법을 함께 적습니다.",
    visual: "lms",
  },
  {
    id: "local",
    no: "06",
    en: "LOCAL & MORE",
    name: "당근 및 그 외 광고",
    logos: ["danggeun"],
    intro: "생활권 고객이 많은 당근에서 동네 단위로 광고를 노출합니다. 업종에 맞는 특화 매체는 상담에서 함께 검토합니다.",
    rows: [
      row("적합한 고객", "매장·학원·병원처럼 주변 고객의 방문이 중요한 업종"),
      row("활용 목적", "동네 고객 방문, 문의, 소식 전달"),
      row("노출 위치", "당근 홈 피드, 검색 결과"),
      row("매체 상품", "피드 광고, 검색 광고, 카탈로그 광고(전문가 모드), 노출 지역 설정"),
      row("여울디앤씨 업무", "노출 지역·대상 설정, 동네 고객에 맞춘 소재·문구 작성, 비즈프로필 정리, 결과 분석", true),
      row("확인하는 성과", "노출, 클릭, 문의·방문"),
    ],
    visual: "local",
  },
  {
    id: "sns",
    no: "07",
    en: "SNS CHANNEL",
    name: "SNS 채널 운영",
    logos: ["instagram"],
    intro: "브랜드 계정에 무엇을 언제 올릴지 계획하고, 합의한 범위에서 게시와 반응 확인을 맡습니다.",
    rows: [
      row("적합한 고객", "브랜드 채널을 꾸준히 운영해야 하는 업체"),
      row("활용 목적", "채널 관리, 소식 전달, 고객과의 소통"),
      row("노출 위치", "인스타그램 등 브랜드 계정"),
      row("여울디앤씨 업무", "월별 게시 계획, 게시물 준비(제작서비스 연계), 게시, 반응 확인, 월간 정리", true),
      row("확인하는 성과", "도달, 반응(댓글·저장·공유), 팔로워 변화, 프로필 링크 클릭"),
    ],
    note: "게시물 제작만 맡기거나, 계획·게시·반응 확인 같은 운영만 맡길 수도 있습니다.",
    visual: "sns",
  },
  {
    id: "viral",
    no: "08",
    en: "BRAND & VIRAL",
    name: "브랜드·바이럴 마케팅",
    logos: [],
    intro: "광고 소재만으로 전하기 어려운 내용을 콘텐츠로 만들어 고객이 정보를 찾는 곳에 배포합니다.",
    rows: [
      row("적합한 고객", "설명이 필요한 상품·서비스"),
      row("활용 목적", "검색·탐색 단계의 고객에게 브랜드 이해"),
      row("노출 위치", "브랜드 블로그, SNS, 커뮤니티 등 협의한 채널"),
      row("여울디앤씨 업무", "주제 기획, 글·이미지·영상 콘텐츠 제작, 배포. 인플루언서·체험단 협업은 범위와 비용을 별도 협의", true),
      row("확인하는 성과", "조회, 검색 유입, 반응"),
    ],
    note: "협찬이나 대가를 받은 콘텐츠에는 경제적 이해관계를 표시합니다. 실제 이용하지 않은 후기를 만드는 방식은 진행하지 않습니다.",
    visual: "viral",
  },
  {
    id: "consult",
    no: "09",
    en: "PLANNING & CONSULTING",
    name: "광고 기획·컨설팅",
    logos: [],
    intro: "지금 운영 중인 광고를 점검하고, 매체 조합과 예산 배분, 개선 방향을 제안합니다.",
    rows: [
      row("적합한 고객", "광고를 직접 또는 다른 곳에서 운영 중인데 점검이 필요한 경우"),
      row("활용 목적", "현재 광고 진단, 매체·예산 재구성, 개선 우선순위 정리"),
      row("여울디앤씨 업무", "계정 구조·소재·대상 설정·연결 페이지·전환 측정 점검, 매체·예산 제안, 성과 분석, 보고서 양식 정리", true),
      row("확인하는 성과", "매체 집계 전환과 실제 상담·예약 결과를 나눠 정리"),
    ],
    note: "보고서 구성과 보고 흐름은 상담문의에서 확인할 수 있습니다.",
    visual: "consult",
  },
];

/** 상단 바로가기 탭 — id는 섹션 id이자 메뉴·다른 페이지에서 들어오는 앵커 (/marketing#naver 등) */
export const MARKETING_TABS = MARKETING_CHANNELS.map((c) => ({ id: c.id, label: c.name.replace(" 광고", "").replace(" 마케팅", "") }));

/* 목적별 매체 찾기 — 목적을 고르면 먼저 살펴볼 매체가 흐름 선으로 이어져 보임 */
export type FinderTile = { label: string; role: string; href: string; logo?: ChannelKey; icon?: "sms" | "doc" | "place" };

export const PURPOSES: { id: string; label: string; short: string; desc: string; tiles: FinderTile[] }[] = [
  {
    id: "search",
    label: "검색하는 고객에게 보이고 싶을 때",
    short: "검색 고객",
    desc: "업체·상품을 직접 검색하는 고객에게 홈페이지, 상담 페이지, 매장 정보를 보여줍니다.",
    tiles: [
      { label: "네이버", role: "검색 결과·플레이스", href: "#naver", logo: "naver" },
      { label: "카카오 키워드", role: "다음 검색 결과", href: "#kakao", logo: "kakaotalk" },
      { label: "구글 검색", role: "구글 검색 결과", href: "#google", logo: "google" },
    ],
  },
  {
    id: "new",
    label: "관심사·연령·지역으로 새 고객에게 알릴 때",
    short: "새 고객",
    desc: "검색하기 전의 고객에게 관심사·연령·지역 조건으로 상품과 브랜드를 먼저 보여줍니다.",
    tiles: [
      { label: "메타", role: "인스타·페이스북", href: "#meta", logo: "instagram" },
      { label: "카카오", role: "카카오톡·제휴 지면", href: "#kakao", logo: "kakaotalk" },
      { label: "네이버 디스플레이", role: "메인·피드 지면", href: "#naver", logo: "naver" },
    ],
  },
  {
    id: "video",
    label: "영상으로 상품·브랜드를 설명할 때",
    short: "영상",
    desc: "유튜브 영상 앞뒤와 쇼츠 피드, 인스타그램 릴스에 영상 광고를 노출합니다.",
    tiles: [
      { label: "유튜브", role: "인스트림·쇼츠", href: "#google", logo: "youtube" },
      { label: "릴스", role: "인스타그램 릴스", href: "#meta", logo: "instagram" },
    ],
  },
  {
    id: "local",
    label: "가게 주변 생활권 고객을 만날 때",
    short: "동네 고객",
    desc: "동네 단위 광고와 지도·플레이스 정보로 주변 고객의 방문과 문의를 이끕니다.",
    tiles: [
      { label: "당근", role: "동네 피드·검색", href: "#local", logo: "danggeun" },
      { label: "플레이스", role: "지도·매장 정보", href: "#naver", icon: "place" },
    ],
  },
  {
    id: "sms",
    label: "조건에 맞는 대상에게 문자로 알릴 때",
    short: "문자",
    desc: "통신사 광고 수신에 동의한 이용자 중 지역·연령·성별 조건에 맞는 대상에게 장문·이미지 문자를 보냅니다.",
    tiles: [{ label: "통신사 타깃 LMS", role: "장문·이미지 문자", href: "#lms", icon: "sms" }],
  },
  {
    id: "channel",
    label: "꾸준한 채널 운영과 콘텐츠가 필요할 때",
    short: "채널 운영",
    desc: "브랜드 계정의 게시 계획과 콘텐츠를 운영하고, 정보를 찾는 고객이 보는 곳에 브랜드 콘텐츠를 배포합니다.",
    tiles: [
      { label: "SNS 운영", role: "브랜드 계정", href: "#sns", logo: "instagram" },
      { label: "브랜드·바이럴", role: "블로그·커뮤니티", href: "#viral", icon: "doc" },
    ],
  },
];
