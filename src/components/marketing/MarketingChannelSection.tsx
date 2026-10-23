import Link from "next/link";
import type { CSSProperties } from "react";
import ChannelVisual from "@/components/marketing/ChannelVisual";
import type { MarketingChannel } from "@/components/marketing/data";
import { BlogMock, CalendarMock, LocalFeedMock, ReportMock, SmsMock } from "@/components/mocks/Mocks";
import ChannelLogo from "@/components/ui/ChannelLogo";
import { ArrowIcon } from "@/components/ui/icons";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

// 실제 광고 노출 화면 (고객사 제공 캡처). 가운데 폰이 첫 번째
const SHOTS = {
  naver: [
    { src: "/images/0515/naver-phone-2.png", alt: "네이버 파워링크 광고 노출 화면" },
    { src: "/images/0515/naver-phone-1.png", alt: "네이버 브랜드검색 광고 노출 화면" },
    { src: "/images/0515/naver-phone-3.png", alt: "네이버 메인 배너 광고 노출 화면" },
  ],
  meta: [
    { src: "/images/0515/insta-phone-1.png", alt: "인스타그램 피드 광고 노출 화면" },
    { src: "/images/0515/insta-phone-2.png", alt: "인스타그램 릴스 광고 노출 화면" },
    { src: "/images/0515/insta-phone-3.png", alt: "인스타그램 브랜드 계정 프로필 화면" },
  ],
  kakao: [
    { src: "/images/0515/kakao-phone-1.png", alt: "카카오톡 친구탭 배너 광고 노출 화면" },
    { src: "/images/0515/kakao-phone-2.png", alt: "카카오톡 채팅탭 배너 광고 노출 화면" },
    { src: "/images/0515/kakao-phone-3.png", alt: "카카오톡 더보기탭 배너 광고 노출 화면" },
  ],
} as const;

const CAPTION: Record<MarketingChannel["visual"], string> = {
  naver: "광고 노출 화면 예시 · 검색·브랜드검색·메인 배너",
  meta: "광고 노출 화면 예시 · 피드·릴스·브랜드 계정",
  kakao: "광고 노출 화면 예시 · 카카오톡 탭별 배너",
  google: "유튜브 광고 형식 · 범퍼·인스트림·Shorts",
  lms: "장문·이미지 문자 구성. 설정 가능한 항목은 통신사·상품마다 다릅니다.",
  local: "동네 피드 노출 형태",
  sns: "월간 게시 계획 구성",
  viral: "대가 표시를 포함한 콘텐츠 구성",
  consult: "광고 진단·운영 보고서 구성 (광고주 정보 가림)",
};

function Visual({ kind }: { kind: MarketingChannel["visual"] }) {
  if (kind === "naver" || kind === "meta" || kind === "kakao") {
    const [a, b, c] = SHOTS[kind];
    return <ChannelVisual visual={{ kind: "phones", shots: [a, b, c] }} />;
  }
  if (kind === "google") return <ChannelVisual visual={{ kind: "youtube" }} />;
  const mock = {
    lms: <SmsMock lines={["(광고)[업체명]", "신규 오픈·행사 안내 문구", "", "▶ 연결 페이지 링크", "", "무료수신거부 080-000-0000"]} />,
    local: <LocalFeedMock />,
    sns: <CalendarMock className="mx-auto max-w-md" />,
    viral: <BlogMock className="mx-auto max-w-md" />,
    consult: <ReportMock className="mx-auto max-w-md" />,
  }[kind];
  return <div className="rounded-[28px] bg-g100 px-5 py-12 sm:rounded-panel sm:px-10 sm:py-16">{mock}</div>;
}

/* LMS는 '신규 대상 문자광고'와 '보유 고객 후속 안내'를 구분해 보여줌 */
function LmsCompare() {
  const cards = [
    { tag: "광고·마케팅", title: "신규 대상에게 보내는 문자광고", rows: [["받는 사람", "통신사 광고 수신에 동의한 이용자 중 조건에 맞는 대상"], ["연락처", "광고주가 보유하지 않아도 됨"], ["쓰임", "신규 오픈·행사·모집 안내"]] },
    { tag: "고객관리·자동화", title: "보유 고객에게 보내는 후속 안내", rows: [["받는 사람", "상담 신청·예약 등으로 광고주가 확보한 고객"], ["연락처", "광고주가 보유한 고객 정보 사용"], ["쓰임", "접수 확인, 일정 안내, 리마인드"]], href: "/automation" },
  ];
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {cards.map((c) => (
        <div key={c.title} className="rounded-2xl border border-g200 bg-white p-5">
          <span className="rounded-full bg-g100 px-2.5 py-1 text-[12px] font-bold text-g700">{c.tag}</span>
          <p className="mt-3 text-[17px] font-extrabold tracking-[-0.03em] text-ink">{c.title}</p>
          <dl className="mt-3 space-y-2 text-[14px]">
            {c.rows.map(([label, value]) => (
              <div key={label}>
                <dt className="font-bold text-g500">{label}</dt>
                <dd className="text-g800">{value}</dd>
              </div>
            ))}
          </dl>
          {c.href && (
            <Link href={c.href} className="mt-3 inline-flex min-h-10 items-center gap-1 text-[14px] font-bold text-brand hover:underline">
              고객관리·자동화 보기
              <ArrowIcon className="h-4 w-4" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

/* 매체 1개 = 소개 + 정보 표(파란 줄 = 여울디앤씨 업무) + 노출 화면. 데스크톱은 좌우를 번갈아 배치.
   scroll-mt = 고정 헤더 + 매체 탭 바 높이 */
export default function MarketingChannelSection({ channel, reverse = false }: { channel: MarketingChannel; reverse?: boolean }) {
  const titleId = `${channel.id}-title`;
  return (
    <section id={channel.id} aria-labelledby={titleId} className="scroll-mt-28 py-14 sm:py-20 lg:scroll-mt-36">
      <div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className={reverse ? "lg:order-2" : ""} data-reveal>
          <p className="text-[15px] font-bold tracking-[0.02em] text-brand">
            {channel.no} · {channel.en}
          </p>
          <h2 id={titleId} className="mt-3 flex flex-wrap items-center gap-3 text-h2">
            {channel.logos.length > 0 && (
              <span className="flex items-center gap-1.5" aria-hidden="true">
                {channel.logos.map((logo) => (
                  <ChannelLogo key={logo} name={logo} size={44} className="h-9 w-9 sm:h-11 sm:w-11" />
                ))}
              </span>
            )}
            {channel.name}
          </h2>
          <p className="mt-4 text-lead text-g700">{channel.intro}</p>

          <dl className="mt-7 overflow-hidden rounded-2xl border border-g200">
            {channel.rows.map((r) => (
              <div key={r.label} className={`grid gap-1 border-b border-g200 px-5 py-4 last:border-b-0 sm:grid-cols-[8.5rem_1fr] sm:gap-4 ${r.ours ? "bg-brand-50" : "bg-white"}`}>
                <dt className={`text-[15px] font-bold ${r.ours ? "text-brand" : "text-g500"}`}>{r.label}</dt>
                <dd className={`text-[16px] leading-relaxed ${r.ours ? "font-semibold text-ink" : "text-g800"}`}>{r.value}</dd>
              </div>
            ))}
          </dl>
          {channel.id === "lms" && <LmsCompare />}
          {channel.note && <p className="mt-4 rounded-xl bg-g50 px-4 py-3 text-[14px] leading-relaxed text-g600">{channel.note}</p>}
          <Link href="/contact" className="group mt-6 inline-flex min-h-11 items-center gap-2 text-[17px] font-bold text-brand">
            {channel.name} 상담받기
            <ArrowIcon className="h-5 w-5 transition-transform duration-300 ease-soft group-hover:translate-x-1" />
          </Link>
        </div>

        <figure className={`lg:sticky lg:top-40 ${reverse ? "lg:order-1" : ""}`} data-reveal style={delay(0.08)}>
          <Visual kind={channel.visual} />
          <figcaption className="mt-3 text-[14px] text-g500">{CAPTION[channel.visual]}</figcaption>
        </figure>
      </div>
    </section>
  );
}
