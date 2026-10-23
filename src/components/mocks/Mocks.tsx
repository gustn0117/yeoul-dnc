import Image from "next/image";
import type { ReactNode } from "react";

/* '구성 예시' 화면 — 실제 작업물(영상·디자인·문서)을 받기 전까지 결과물의 형태를 보여주는 시안.
   진짜 작업물로 오해하지 않도록 모두 '구성 예시' 표시를 단다. 작업물을 받으면 이미지로 교체. */

export function ExampleTag({ children = "구성 예시", className = "" }: { children?: ReactNode; className?: string }) {
  return <span className={`absolute left-3 top-3 z-10 rounded-full bg-white/92 px-2.5 py-1 text-[12px] font-bold text-g600 shadow-sm ${className}`}>{children}</span>;
}

/** 세로 9:16 릴스·쇼츠 화면 */
export function ReelMock({ image, alt, caption, className = "", tag = true }: { image: string; alt: string; caption: ReactNode; className?: string; tag?: boolean }) {
  return (
    <figure className={`relative aspect-9/16 overflow-hidden rounded-[1.4rem] bg-night ${className}`}>
      {tag && <ExampleTag />}
      <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 240px, 40vw" className="object-cover" />
      <span className="absolute inset-x-3 top-12 flex gap-1" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`h-0.5 flex-1 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`} />
        ))}
      </span>
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" aria-hidden="true" />
      <figcaption className="absolute inset-x-4 bottom-5 text-[15px] font-extrabold leading-snug tracking-[-0.03em] text-white">{caption}</figcaption>
    </figure>
  );
}

/** 가로 16:9 홍보영상 재생 화면 */
export function VideoMock({ image, alt, title, className = "", tag = true }: { image: string; alt: string; title: string; className?: string; tag?: boolean }) {
  return (
    <figure className={`relative aspect-video overflow-hidden rounded-[1.2rem] bg-night ${className}`}>
      {tag && <ExampleTag />}
      <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 560px, 90vw" className="object-cover" />
      <span className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-pop" aria-hidden="true">
        <svg className="ml-1 h-6 w-6 text-ink" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 4.8v14.4a1 1 0 0 0 1.52.85l11.5-7.2a1 1 0 0 0 0-1.7L8.52 3.95A1 1 0 0 0 7 4.8Z" />
        </svg>
      </span>
      <figcaption className="absolute inset-x-4 bottom-3 flex items-center gap-3 text-[13px] font-semibold text-white">
        <span className="truncate">{title}</span>
        <span className="relative h-1 flex-1 rounded-full bg-white/30" aria-hidden="true">
          <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-white" />
        </span>
        <span className="tabular-nums">0:32</span>
      </figcaption>
    </figure>
  );
}

/** 16:9 문서 장표 (표지·본문·도표·일정) */
export function SlideMock({ kind, title, className = "", tag = true }: { kind: "cover" | "body" | "chart" | "schedule"; title: string; className?: string; tag?: boolean }) {
  const bars = [42, 64, 55, 80, 70];
  return (
    <figure className={`relative aspect-video overflow-hidden rounded-xl border border-g200 ${kind === "cover" ? "bg-night" : "bg-white"} ${className}`}>
      {tag && <ExampleTag />}
      {kind === "cover" ? (
        <div className="absolute inset-0 flex flex-col justify-between p-[7%]">
          <span className="text-right text-[10px] font-bold tracking-[0.2em] text-white/50">YEOUL D&amp;C</span>
          <div>
            <span className="block h-1 w-10 rounded-full bg-[#8db8ff]" />
            <p className="mt-3 whitespace-pre-line text-[clamp(14px,1.8vw,22px)] font-extrabold leading-tight tracking-[-0.04em] text-white">{title}</p>
            <p className="mt-2 text-[11px] font-semibold text-white/55">회사소개서 · 2026</p>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col p-[6%]">
          <p className="flex items-center gap-2 text-[clamp(11px,1.2vw,14px)] font-extrabold tracking-[-0.03em] text-ink">
            <span className="h-3.5 w-1 rounded-full bg-brand" aria-hidden="true" />
            {title}
          </p>
          {kind === "body" && (
            <div className="mt-[5%] grid flex-1 grid-cols-[1.2fr_1fr] gap-[5%]">
              <div className="space-y-2 pt-1">
                {[100, 86, 92, 70, 80].map((w, i) => (
                  <span key={i} className={`block h-1.5 rounded-full ${i === 0 ? "bg-g400" : "bg-g200"}`} style={{ width: `${w}%` }} />
                ))}
              </div>
              <span className="rounded-lg bg-brand-50" />
            </div>
          )}
          {kind === "chart" && (
            <div className="mt-[5%] flex flex-1 items-end gap-[4%] border-b border-g200 px-[3%] pb-1">
              {bars.map((h, i) => (
                <span key={i} className={`flex-1 rounded-t-md ${i === 3 ? "bg-brand" : "bg-brand-100"}`} style={{ height: `${h}%` }} />
              ))}
            </div>
          )}
          {kind === "schedule" && (
            <div className="mt-[5%] flex-1 space-y-2.5">
              {[
                [0, 30],
                [20, 35],
                [45, 30],
                [65, 30],
              ].map(([start, width], i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-[18%] shrink-0 rounded-full bg-g200 py-0.5" />
                  <span className="relative h-2.5 flex-1 rounded-full bg-g100">
                    <span className="absolute inset-y-0 rounded-full bg-accent/70" style={{ left: `${start}%`, width: `${width}%` }} />
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </figure>
  );
}

const RATIO = { "1:1": "aspect-square", "4:5": "aspect-4/5", "1.91:1": "aspect-[1.91/1]" } as const;

/** 매체별 비율의 광고 배너 */
export function BannerMock({ ratio, image, alt, headline, caption, tag = true }: { ratio: keyof typeof RATIO; image: string; alt: string; headline: string; caption: string; tag?: boolean }) {
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-xl bg-night ${RATIO[ratio]}`}>
        {tag && <ExampleTag />}
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
        <span className="absolute inset-0 bg-linear-to-t from-night/90 via-night/30 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-[7%] bottom-[8%]">
          <p className="text-[clamp(13px,1.5vw,18px)] font-extrabold leading-tight tracking-[-0.04em] text-white">{headline}</p>
          <span className="mt-2 inline-flex rounded-full bg-signal px-3 py-1 text-[11px] font-bold text-white">자세히 보기</span>
        </div>
      </div>
      <figcaption className="mt-2 text-[14px] font-semibold text-g600">{caption}</figcaption>
    </figure>
  );
}

/** 넘겨 보는 카드뉴스 5장 */
export function CardNewsMock() {
  const cards = [
    { no: "1 / 5 · 표지", title: "주제를 던지는 한 문장", sub: "넘겨 보고 싶게 만드는 첫 장" },
    { no: "2 / 5 · 본문", title: "첫 번째 내용", sub: "한 장에 한 가지 내용만 담습니다." },
    { no: "3 / 5 · 본문", title: "두 번째 내용", sub: "짧은 문장과 강조 표현으로 정리합니다." },
    { no: "4 / 5 · 본문", title: "세 번째 내용", sub: "필요하면 도표나 사진을 넣습니다." },
    { no: "5 / 5 · 마무리", title: "다음 행동 안내", sub: "신청·문의 방법이나 계정 안내로 마칩니다." },
  ];
  return (
    // min-w-0: 그리드 안에서 가로 스크롤 목록이 열 너비를 밀어내지 않게
    <div className="relative min-w-0">
      <ExampleTag className="left-0 top-0 -translate-y-1/2" />
      <ol className="no-scrollbar -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 pt-4 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
        {cards.map((c, i) => (
          <li key={c.no} className={`flex aspect-square w-44 shrink-0 snap-start flex-col justify-between rounded-xl p-4 lg:w-auto ${i === 0 ? "bg-night text-white" : "border border-g200 bg-white"}`}>
            <span className={`text-[11px] font-bold ${i === 0 ? "text-[#8db8ff]" : "text-brand"}`}>{c.no}</span>
            <span>
              <span className={`block text-[16px] font-extrabold leading-snug tracking-[-0.03em] ${i === 0 ? "text-white" : "text-ink"}`}>{c.title}</span>
              <span className={`mt-1.5 block text-[12px] leading-snug ${i === 0 ? "text-white/65" : "text-g600"}`}>{c.sub}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 운영 보고서 한 장 (지표 이름과 구성만, 수치는 넣지 않음) */
export function ReportMock({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-g200 bg-white p-5 sm:p-6 ${className}`}>
      <ExampleTag />
      <div className="flex items-baseline justify-between pt-6">
        <p className="text-[16px] font-extrabold tracking-[-0.03em] text-ink">광고 운영 보고서</p>
        <p className="text-[12px] font-semibold text-g500">매체별 · 주간</p>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {["노출", "클릭", "CTR", "문의"].map((label) => (
          <div key={label} className="rounded-lg bg-g50 px-2.5 py-2">
            <p className="text-[11px] font-semibold text-g500">{label}</p>
            <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-g200" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-20 items-end gap-1.5 border-b border-g200 pb-1" aria-hidden="true">
        {[35, 50, 42, 60, 55, 72, 66].map((h, i) => (
          <span key={i} className={`flex-1 rounded-t ${i === 5 ? "bg-brand" : "bg-brand-100"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 text-[12px] font-bold text-g700">
        {["결과 요약", "원인 분석·가설", "실행한 조치", "다음 개선 작업"].map((s) => (
          <li key={s} className="rounded-lg border border-g200 px-2.5 py-2">
            {s}
            <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-g100" />
          </li>
        ))}
      </ul>
    </figure>
  );
}

/** 휴대폰 화면 틀 (그린 화면용) */
export function PhoneShell({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-64 rounded-[2.2rem] border-[6px] border-ink bg-g50 p-3 shadow-pop ${className}`}>
      <ExampleTag className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="flex items-center justify-between px-1 pb-2 pt-1 text-[11px] font-bold text-g700">
        <span>9:41</span>
        <span className="h-1.5 w-8 rounded-full bg-g300" aria-hidden="true" />
      </div>
      <p className="border-b border-g200 pb-2 text-center text-[13px] font-bold text-ink">{title}</p>
      <div className="pt-3">{children}</div>
    </div>
  );
}

/** 문자(LMS·MMS) 화면 */
export function SmsMock({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <PhoneShell title="문자 메시지" className={className}>
      <p className="text-center text-[11px] text-g500">오늘 오전 11:20</p>
      <div className="mt-2 max-w-[90%] rounded-2xl rounded-tl-md bg-white p-3 text-[12.5px] leading-relaxed text-g800 shadow-sm">
        <span className="mb-2 block aspect-video rounded-lg bg-brand-100" aria-hidden="true" />
        {lines.map((line, i) => (
          <span key={i} className={`block ${line.startsWith("▶") ? "font-bold text-accent" : ""}`}>
            {line}
          </span>
        ))}
      </div>
    </PhoneShell>
  );
}

/** 동네 피드 광고 화면 */
export function LocalFeedMock({ className = "" }: { className?: string }) {
  return (
    <PhoneShell title="동네 이름 · 홈" className={className}>
      <div className="space-y-2.5">
        {[0, 1].map((i) => (
          <div key={i} className={`flex gap-2.5 rounded-xl bg-white p-2.5 ${i === 0 ? "ring-2 ring-signal/70" : "opacity-60"}`}>
            <span className={`h-14 w-14 shrink-0 rounded-lg ${i === 0 ? "bg-signal/25" : "bg-g200"}`} aria-hidden="true" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12.5px] font-bold text-ink">{i === 0 ? "매장 소식·혜택 제목" : "다른 게시글"}</span>
              <span className="mt-0.5 block text-[11px] text-g500">{i === 0 ? "동네 이름 · 광고" : "동네 이름 · 3분 전"}</span>
              {i === 0 && <span className="mt-1.5 inline-flex rounded-full bg-signal px-2 py-0.5 text-[10.5px] font-bold text-white">자세히 보기 ›</span>}
            </span>
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}

/** 월간 콘텐츠 캘린더 */
export function CalendarMock({ className = "" }: { className?: string }) {
  const kinds: Record<number, string> = { 2: "bg-accent", 5: "bg-signal", 9: "bg-accent", 12: "bg-emerald-500", 16: "bg-accent", 19: "bg-signal", 23: "bg-accent", 26: "bg-emerald-500" };
  return (
    <figure className={`relative rounded-2xl border border-g200 bg-white p-5 ${className}`}>
      <ExampleTag />
      <p className="pt-6 text-[15px] font-extrabold tracking-[-0.03em] text-ink">월간 콘텐츠 캘린더</p>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-g500">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <span key={d}>{d}</span>
        ))}
        {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
          <span key={day} className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-g50 text-[11px] font-semibold text-g700">
            {day}
            {kinds[day] && <span className={`h-1.5 w-1.5 rounded-full ${kinds[day]}`} aria-hidden="true" />}
          </span>
        ))}
      </div>
      <figcaption className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11.5px] font-semibold text-g600">
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          정보 게시물
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          릴스
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          이벤트·소식
        </span>
      </figcaption>
    </figure>
  );
}

/** 대가 표시를 넣은 브랜드 콘텐츠 */
export function BlogMock({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-g200 bg-white ${className}`}>
      <ExampleTag />
      <span className="block aspect-[2/1] bg-brand-50" aria-hidden="true" />
      <div className="p-5">
        <p className="text-[12px] font-bold text-brand">브랜드 블로그 · 정보 글</p>
        <p className="mt-1.5 text-[17px] font-extrabold leading-snug tracking-[-0.03em] text-ink">고객이 찾는 정보를 담은 콘텐츠 제목</p>
        <div className="mt-3 space-y-1.5" aria-hidden="true">
          {[100, 92, 70].map((w, i) => (
            <span key={i} className="block h-1.5 rounded-full bg-g200" style={{ width: `${w}%` }} />
          ))}
        </div>
        <p className="mt-4 rounded-lg bg-g50 px-3 py-2 text-[12px] font-semibold text-g600">이 글은 광고주로부터 원고료를 받아 작성되었습니다.</p>
      </div>
    </figure>
  );
}

/** 브라우저 창 틀 */
export function BrowserFrame({ url, children, className = "" }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-g200 bg-white shadow-soft ${className}`}>
      <div className="flex items-center gap-2 border-b border-g200 bg-g50 px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </span>
        <span className="flex-1 truncate rounded-md bg-white px-2.5 py-0.5 text-[11px] text-g500">{url}</span>
      </div>
      {children}
    </div>
  );
}
