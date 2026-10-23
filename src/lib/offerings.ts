/* 여울디앤씨가 하는 일 — 메인·회사소개·제작서비스·포트폴리오·상담문의가 같은 문구를 쓴다.
   문구는 고객사가 보낸 개편안(1023)을 따르고, 확인되지 않은 실적·수치는 넣지 않는다. */

export type Service = {
  id: string;
  no: string;
  name: string;
  en: string;
  purpose: string;
  outputs: string;
  when: string;
  href: string;
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    id: "marketing",
    no: "01",
    name: "광고·마케팅",
    en: "Advertising",
    purpose: "필요한 고객에게 알리는 일",
    outputs: "매체 운영안, 광고 소재, 계정 세팅, 운영 보고서",
    when: "문의가 부족한 경우",
    href: "/marketing",
    image: "/images/stock/strategy-board.jpg",
    alt: "광고 성과 그래프가 띄워진 노트북",
  },
  {
    id: "video",
    no: "02",
    name: "영상·콘텐츠",
    en: "Video & Contents",
    purpose: "상품과 서비스를 이해시키는 일",
    outputs: "릴스·쇼츠, 홍보영상, 콘텐츠 기획·대본",
    when: "홍보에 사용할 콘텐츠가 부족한 경우",
    href: "/production/video",
    image: "/images/stock/youtube-video.jpg",
    alt: "영상 편집 타임라인 화면",
  },
  {
    id: "design",
    no: "03",
    name: "디자인·인쇄물",
    en: "Design",
    purpose: "한눈에 보이게 정리하는 일",
    outputs: "광고 배너, 카드뉴스, SNS 콘텐츠, 리플렛·전단·현수막 디자인",
    when: "광고 소재와 홍보물이 필요한 경우",
    href: "/production/design",
    image: "/images/stock/creative-design.jpg",
    alt: "색상표와 디자인 시안이 놓인 책상",
  },
  {
    id: "document",
    no: "04",
    name: "문서·제안서",
    en: "Documents",
    purpose: "영업과 설명에 쓰는 자료를 만드는 일",
    outputs: "PPT, 사업제안서, 회사소개서, 상담·브리핑 자료",
    when: "영업용 문서와 소개자료가 필요한 경우",
    href: "/production/document",
    image: "/images/0515/team-presentation-1.png",
    alt: "화면에 자료를 띄워 놓고 발표하는 회의",
  },
  {
    id: "web",
    no: "05",
    name: "홈페이지·랜딩",
    en: "Website",
    purpose: "정보를 확인하고 문의하는 공간",
    outputs: "회사 홈페이지, 광고 랜딩페이지, 상담 신청폼, 예약 접수",
    when: "홈페이지에서 문의로 이어지지 않는 경우",
    href: "/production/web",
    image: "/images/works/web/association.webp",
    alt: "협회 홈페이지를 띄운 모니터",
  },
  {
    id: "automation",
    no: "06",
    name: "고객관리·자동화",
    en: "Customer Care",
    purpose: "접수 이후의 업무를 연결하는 일",
    outputs: "SNS 댓글·DM 자동화, 시트 연동, 알림톡·문자 자동 발송, 맞춤 업무 자동화",
    when: "상담 기록과 후속 안내가 누락되는 경우",
    href: "/automation",
    image: "/images/stock/kakao-chat.jpg",
    alt: "메신저 앱이 모인 휴대폰 화면",
  },
];

export const INDUSTRIES = [
  { name: "병원·의료기관", examples: ["종합병원", "병의원", "피부과", "성형외과", "치과", "한의원"], image: "/images/0515/op-clinic.png", alt: "진료실에서 모니터를 보는 의사" },
  { name: "교육·학원", examples: ["입시학원", "외국어학원", "예체능학원", "직업교육기관"], image: "/images/0515/op-education.png", alt: "헤드셋을 쓰고 수강 상담을 하는 상담원" },
  { name: "공공기관·단체", examples: ["공공기관", "지자체", "협회", "재단", "비영리단체"], image: "/images/stock/boardroom.jpg", alt: "긴 회의 테이블이 놓인 회의실" },
  { name: "외식·프랜차이즈", examples: ["음식점", "카페", "베이커리", "외식 브랜드", "프랜차이즈"], image: "/images/0515/ind-store.png", alt: "조명이 켜진 카페 매장 입구" },
  { name: "매장·생활서비스", examples: ["미용실", "에스테틱", "헬스장", "필라테스", "반려동물 서비스"], image: "/images/0515/op-store.png", alt: "태블릿으로 매장을 관리하는 운영자" },
  { name: "기업·브랜드", examples: ["일반기업", "제조업", "온라인 쇼핑몰", "제품 및 서비스 브랜드"], image: "/images/stock/office-space.jpg", alt: "유리벽으로 나뉜 사무 공간" },
];

/* 홈페이지 제작 사례 — 실제 제작 작업물(협력 제작사 포트폴리오). 설명은 작업물 소개 문구 기준 */
export type WebWork = { slug: string; title: string; type: string; industry: string; desc: string; image: string };

export const WEB_WORKS: WebWork[] = [
  { slug: "association", title: "협회 홈페이지", type: "기관·단체 홈페이지", industry: "공공기관·단체", desc: "협회 소개와 회원 안내, 공지사항과 자료실을 운영하기 쉬운 구조로 만들었습니다.", image: "/images/works/web/association.webp" },
  { slug: "civic-education", title: "시민교육 공공 플랫폼", type: "공공 플랫폼", industry: "공공기관·교육", desc: "교육 과정 안내와 신청, 공지 운영을 공공기관 기준에 맞춰 구성했습니다.", image: "/images/works/web/civic-education.webp" },
  { slug: "edu-signup", title: "기업 교육 신청 시스템", type: "신청 접수 시스템", industry: "교육", desc: "과정 등록과 신청 접수, 명단 관리, 통계 확인을 한 화면에서 처리하는 교육 신청 시스템입니다.", image: "/images/works/web/edu-signup.webp" },
  { slug: "medical-landing", title: "외국인 대상 의료 홍보 페이지", type: "랜딩페이지", industry: "병원·의료", desc: "진료 항목과 절차, 문의 창구를 외국인 방문자 기준으로 정리했습니다.", image: "/images/works/web/medical-landing.webp" },
  { slug: "interior", title: "인테리어 업체 홈페이지", type: "기업 홈페이지", industry: "생활서비스", desc: "시공 사례와 주요 서비스를 효과적으로 소개하는 공식 웹사이트입니다.", image: "/images/works/web/interior.webp" },
  { slug: "cleaning", title: "청소 전문 업체 홈페이지", type: "기업 홈페이지", industry: "생활서비스", desc: "현장에 따라 기준을 달리하는 청소라는 브랜드 철학이 드러나도록 기획했습니다.", image: "/images/works/web/cleaning.webp" },
  { slug: "law-office", title: "법률사무소 홈페이지", type: "기업 홈페이지", industry: "전문 서비스", desc: "업무 분야와 변호사 소개, 상담 문의를 신뢰 중심으로 구성했습니다.", image: "/images/works/web/law-office.webp" },
  { slug: "eco-medical", title: "의료폐기물 처리 기업 홈페이지", type: "기업 홈페이지", industry: "기업·브랜드", desc: "친환경 의료폐기물 처리 서비스를 소개하는 기업 공식 웹사이트입니다.", image: "/images/works/web/eco-medical.webp" },
];

/* 의뢰 후 진행 5단계 — 4·5단계는 광고 운영을 맡길 때만 */
export const PROCESS_STEPS = [
  { title: "상담·진단", desc: "목표와 현재 상황을 확인합니다.", note: "준비", detail: "업종·상품 소개, 홈페이지 주소, 기존 광고 현황" },
  { title: "제안·견적·계약", desc: "범위와 비용을 정리해 안내합니다.", note: "확인", detail: "범위·견적·일정, 광고비 결제 방식" },
  { title: "자료 수령·제작·승인", desc: "자료를 받아 제작하고 확인을 받습니다.", note: "준비·승인", detail: "로고·사진·문구, 계정 권한, 시안 확인" },
  { title: "집행·운영", desc: "광고를 집행하고 반응을 보며 조정합니다.", note: "공유", detail: "들어온 문의의 상담·예약 결과", adOnly: true },
  { title: "보고·개선", desc: "결과를 공유하고 다음 작업을 정합니다.", note: "결정", detail: "다음 운영 방향", adOnly: true },
];

/* 서비스 조합 예시 — 고정 상품이 아니라 상황별 예시 (가격·수량 없음) */
export const COMBOS = [
  {
    title: "광고를 시작하고 싶을 때",
    situation: "광고가 처음이거나 연결할 페이지와 소재가 없는 경우",
    tasks: "광고 기획, 랜딩페이지·소재 제작, 매체 세팅과 운영",
    outputs: "매체 운영안, 랜딩페이지, 광고 소재, 운영 보고서",
    href: "/marketing",
    linkLabel: "광고·마케팅 보기",
  },
  {
    title: "들어온 문의를 놓치지 않고 싶을 때",
    situation: "문의 기록이 흩어지고 후속 안내가 늦어지는 경우",
    tasks: "신청폼 개선, 시트 연동, 담당자 알림, 알림톡·문자 안내",
    outputs: "개선된 신청 화면, 고객관리 시트, 자동 안내 설정",
    href: "/automation",
    linkLabel: "고객관리·자동화 보기",
  },
];

export const FAQS = [
  { q: "한 가지 서비스만 의뢰해도 되나요?", a: "네. 영상 한 편, 제안서 한 건, 랜딩페이지 하나처럼 필요한 업무만 의뢰할 수 있습니다. 광고 운영을 함께 맡기지 않아도 됩니다." },
  { q: "상담 전에 무엇을 준비하면 되나요?", a: "업종과 상품·서비스 소개, 원하는 결과물이나 목표, 희망 일정 정도면 충분합니다. 로고, 기존 홍보물, 홈페이지 주소, 참고하고 싶은 사례가 있으면 함께 보내 주세요." },
  { q: "제작 기간은 얼마나 걸리나요?", a: "결과물 종류와 수량, 자료 준비 상황, 검토 일정에 따라 달라집니다. 상담 후 일정표를 함께 정하고, 행사일이나 광고 시작일처럼 마감이 정해져 있으면 처음에 알려 주세요." },
  { q: "수정은 몇 번까지 가능한가요?", a: "수정 범위와 횟수는 작업 시작 전에 협의해 정합니다. 단계별 검토 시점을 정해 두고, 기획 방향이 크게 바뀌는 경우는 별도로 협의합니다." },
  { q: "광고 운영이나 홈페이지 유지관리도 맡길 수 있나요?", a: "가능합니다. 광고는 운영 기간과 보고 주기를, 홈페이지는 내용 수정, 기능 추가, 도메인·호스팅 관리 같은 범위를 정해 진행합니다." },
  { q: "지금 쓰는 엑셀이나 홈페이지에 기능을 붙일 수 있나요?", a: "사용 중인 서비스와 계정 환경을 확인한 뒤 적용 가능한 기능과 연결 방법을 안내합니다." },
  { q: "예약 페이지에서 바로 결제까지 받을 수 있나요?", a: "기본 예약 접수는 희망 일정을 받아 담당자가 확인 후 확정하는 방식입니다. 실시간 확정과 결제는 예약 솔루션과 결제대행 계약이 필요해 별도로 협의합니다." },
];
