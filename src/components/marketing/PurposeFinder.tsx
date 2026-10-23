"use client";

import { useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import ChannelLogo from "@/components/ui/ChannelLogo";
import { ArrowIcon } from "@/components/ui/icons";
import { PURPOSES, type FinderTile } from "@/components/marketing/data";

const ICONS: Record<NonNullable<FinderTile["icon"]>, string> = {
  sms: "M4 5.5h16v10H8.5L4 19.5v-14ZM8 9.5h8M8 12.5h5",
  doc: "M7 3.5h7l4 4v13H7v-17Zm7 0v4h4M9.5 12h6M9.5 15.5h6",
  place: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
};

function TileMark({ tile }: { tile: FinderTile }) {
  if (tile.logo) return <ChannelLogo name={tile.logo} size={36} className="h-8 w-8 sm:h-9 sm:w-9" />;
  return (
    <svg className="h-8 w-8 text-brand sm:h-9 sm:w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[tile.icon ?? "doc"]} />
    </svg>
  );
}

/* 목적별 매체 찾기 — 목적을 고르면 먼저 살펴볼 매체가 흐름 선으로 이어지고, 누르면 해당 매체 설명으로 이동 */
export default function PurposeFinder() {
  const [active, setActive] = useState(0);
  const purpose = PURPOSES[active];

  const onTabKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + PURPOSES.length) % PURPOSES.length;
    setActive(n);
    document.getElementById(`purpose-tab-${PURPOSES[n].id}`)?.focus();
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,23rem)_minmax(0,1fr)] lg:gap-6">
      {/* 목적 선택: 모바일은 가로로 넘기는 칩, 데스크톱은 세로 목록 */}
      <div role="tablist" aria-label="광고 목적" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:-mx-8 md:px-8 lg:mx-0 lg:flex-col lg:self-start lg:overflow-visible lg:rounded-4xl lg:bg-g50 lg:p-2">
        {PURPOSES.map((p, i) => {
          const on = i === active;
          return (
            <button
              key={p.id}
              id={`purpose-tab-${p.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="purpose-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={`flex min-h-11 shrink-0 items-center gap-3 rounded-full px-4 py-2 text-left transition-[background-color,color,box-shadow] duration-300 lg:rounded-3xl lg:px-5 lg:py-4 ${
                on ? "bg-night text-white lg:bg-white lg:text-ink lg:shadow-soft" : "bg-g100 text-g700 hover:bg-g200 lg:bg-transparent lg:hover:bg-white/70"
              }`}
            >
              <span className={`whitespace-nowrap text-[16px] font-bold tracking-[-0.03em] lg:hidden`}>{p.short}</span>
              <span className="hidden text-[17px] font-bold leading-snug tracking-[-0.03em] lg:block">{p.label}</span>
            </button>
          );
        })}
      </div>

      <div id="purpose-panel" role="tabpanel" aria-labelledby={`purpose-tab-${purpose.id}`} className="on-dark relative overflow-hidden rounded-4xl bg-night">
        {/* key: 목적을 바꾸면 내용이 새로 놓이며 등장 효과가 다시 재생됨 */}
        <div key={purpose.id} className="planner-in relative p-6 sm:p-10 lg:p-12">
          <p className="text-[15px] font-bold text-[#8db8ff]">이런 목적이라면</p>
          <h3 className="mt-2 text-[24px] font-extrabold leading-snug tracking-[-0.045em] text-white sm:text-[30px]">{purpose.label}</h3>
          <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-white/70">{purpose.desc}</p>

          <p className="mt-9 text-[15px] font-semibold text-white/60">먼저 살펴볼 매체</p>
          <ol className="mt-4 flex items-start">
            {purpose.tiles.map((tile, i) => (
              // 연결 선 길이에 상한 + SVG 기본 너비 무시 (모바일에서 세 번째 매체가 밀려나지 않게)
              <li key={tile.label} className={`flex items-start ${i > 0 ? "min-w-0 flex-1 sm:max-w-80" : "shrink-0"}`}>
                {i > 0 && (
                  <svg data-draw aria-hidden="true" viewBox="0 0 100 24" preserveAspectRatio="none" fill="none" className="mt-5 h-6 w-0 min-w-6 flex-1 sm:mt-7">
                    <path
                      d="M4 12 C 26 2, 38 2, 50 12 S 74 22, 96 12"
                      pathLength={1}
                      className="flow-path"
                      stroke="#8db8ff"
                      strokeOpacity={0.75}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      style={{ "--d": `${0.2 + (i - 1) * 0.35}s`, transitionDuration: "0.9s" } as CSSProperties}
                    />
                  </svg>
                )}
                <a href={tile.href} className="planner-tile group flex w-20 shrink-0 flex-col items-center text-center sm:w-28" style={{ "--i": i } as CSSProperties}>
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_14px_30px_-14px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:-translate-y-1 sm:h-20 sm:w-20 sm:rounded-3xl">
                    <TileMark tile={tile} />
                  </span>
                  <span className="mt-3 text-[15px] font-extrabold leading-snug tracking-[-0.03em] text-white sm:text-[17px]">{tile.label}</span>
                  <span className="mt-0.5 text-[13px] font-semibold leading-snug text-[#8db8ff] sm:text-[14px]">{tile.role}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/12 pt-6">
            {purpose.tiles.map((tile) => (
              <a key={tile.label} href={tile.href} className="inline-flex min-h-11 items-center gap-1.5 text-[16px] font-bold text-[#8db8ff] transition-colors hover:text-white">
                {tile.label} 자세히
                <ArrowIcon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
