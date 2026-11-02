import type { ReactNode } from "react";

/* '구성 예시' 화면 — 실제 자료가 아직 없는 결과물(카드뉴스, 운영 보고서, 콘텐츠 캘린더)의 형태를 보여주는 시안.
   진짜 작업물로 오해하지 않도록 모두 '구성 예시' 표시를 단다. 자료를 받으면 이미지로 교체. */

export function ExampleTag({ children = "구성 예시", className = "" }: { children?: ReactNode; className?: string }) {
  return <span className={`absolute left-3 top-3 z-10 rounded-full bg-white/92 px-2.5 py-1 text-[12px] font-bold text-g600 shadow-sm ${className}`}>{children}</span>;
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
