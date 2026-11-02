import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import ChannelVisual from "@/components/marketing/ChannelVisual";
import type { MarketingChannel } from "@/components/marketing/data";
import { CalendarMock, ReportMock } from "@/components/mocks/Mocks";
import ChannelLogo from "@/components/ui/ChannelLogo";
import { ArrowIcon } from "@/components/ui/icons";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

// 광고 노출 화면 예시 (고객사 제공, 휴대폰 테두리 포함). 가운데 폰이 첫 번째
const shot = (src: string, alt: string) => ({ src: `/images/marketing/${src}.webp`, alt });
const SHOTS = {
  naver: [shot("naver-1", "네이버 모바일 검색광고 노출 화면 예시"), shot("naver-3", "네이버 브랜드검색 노출 화면 예시"), shot("naver-2", "네이버 모바일 피드 광고 노출 화면 예시")],
  meta: [shot("meta-3", "인스타그램 피드 광고 노출 화면 예시"), shot("meta-1", "인스타그램 릴스 광고 노출 화면 예시"), shot("meta-2", "인스타그램 스토리 광고 노출 화면 예시")],
  kakao: [shot("kakao-2", "카카오톡 채팅탭 배너 광고 노출 화면 예시"), shot("kakao-1", "카카오톡 친구탭 배너 광고 노출 화면 예시"), shot("kakao-3", "카카오톡 더보기탭 쇼핑 광고 노출 화면 예시")],
  lms: [shot("lms-1", "쿠폰 안내 LMS 문자광고 예시"), shot("lms-2", "미용실 할인 안내 LMS 문자광고 예시"), shot("lms-3", "창업 설명회 안내 LMS 문자광고 예시")],
  local: [shot("local-1", "당근 동네 피드에 노출된 안경점 광고 예시"), shot("local-2", "당근 동네 피드에 노출된 어학원 광고 예시"), shot("local-3", "당근 동네 피드에 노출된 식당 광고 예시")],
} as const;

const VIRAL = [
  shot("viral-1", "피부과 상담 키워드 검색 결과에 노출된 블로그 콘텐츠 예시"),
  shot("viral-2", "반영구 눈썹 키워드 검색 결과에 노출된 블로그 콘텐츠 예시"),
  shot("viral-3", "공유오피스 키워드 검색 결과에 노출된 카페 콘텐츠 예시"),
  shot("viral-4", "맛집 키워드 검색 결과에 노출된 카페 콘텐츠 예시"),
];

const CAPTION: Record<MarketingChannel["visual"], string> = {
  naver: "광고 노출 화면 예시 · 검색광고·브랜드검색·모바일 피드",
  meta: "광고 노출 화면 예시 · 피드·릴스·스토리",
  kakao: "광고 노출 화면 예시 · 카카오톡 채팅탭·친구탭·더보기탭",
  google: "유튜브 광고 노출 화면 예시 · 범퍼·인스트림·Shorts",
  lms: "LMS 문자광고 예시 · 설정 가능한 항목은 통신사·상품마다 다릅니다.",
  local: "당근 동네 피드 광고 노출 화면 예시",
  sns: "월간 게시 계획 구성",
  viral: "검색 결과에 노출되는 블로그·카페 콘텐츠 예시",
  consult: "광고 진단·운영 보고서 구성 (광고주 정보 가림)",
};

function Visual({ kind }: { kind: MarketingChannel["visual"] }) {
  if (kind === "naver" || kind === "meta" || kind === "kakao" || kind === "lms" || kind === "local") {
    const [a, b, c] = SHOTS[kind];
    return <ChannelVisual visual={{ kind: "phones", shots: [a, b, c] }} />;
  }
  if (kind === "google") return <ChannelVisual visual={{ kind: "youtube" }} />;
  if (kind === "viral") {
    return (
      <div className="grid grid-cols-2 gap-3 rounded-[28px] bg-g100 p-3 sm:gap-4 sm:rounded-panel sm:p-6">
        {VIRAL.map((v) => (
          <Image key={v.src} src={v.src} alt={v.alt} width={1200} height={1062} sizes="(min-width: 1024px) 270px, 45vw" className="h-auto w-full rounded-xl shadow-soft" />
        ))}
      </div>
    );
  }
  const mock = {
    sns: <CalendarMock className="mx-auto max-w-md" />,
    consult: <ReportMock className="mx-auto max-w-md" />,
  }[kind];
  return <div className="rounded-[28px] bg-g100 px-5 py-12 sm:rounded-panel sm:px-10 sm:py-16">{mock}</div>;
}

/* 항목 하단 강조: 타겟팅 기능(매체 광고) / 서비스(운영·기획) */
function PointBox({ point }: { point: MarketingChannel["point"] }) {
  const service = point.label === "서비스";
  return (
    <div className="mt-4 flex items-start gap-4 rounded-2xl bg-night px-5 py-5 sm:px-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8db8ff]" aria-hidden="true">
        {service ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        ) : (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="0.8" fill="currentColor" />
          </svg>
        )}
      </span>
      <div>
        <p className="text-[14px] font-bold tracking-[0.02em] text-[#8db8ff]">{point.label}</p>
        <p className="mt-1 text-pretty text-[17px] font-bold leading-relaxed tracking-[-0.02em] text-white">{point.text}</p>
      </div>
    </div>
  );
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
          <PointBox point={channel.point} />
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
