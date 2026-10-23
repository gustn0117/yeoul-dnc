"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon, ChevronIcon } from "@/components/ui/icons";
import { SERVICES } from "@/lib/offerings";

/* 서비스 범위 6개 — 데스크톱은 세로 패널이 나란히 있고 고른 패널이 넓게 펼쳐짐(활용 목적·결과물·이럴 때 + 사진), 모바일은 카드 목록 */
export default function ServicePanels() {
  const [active, setActive] = useState(0);

  return (
    <>
      <ul className="hidden h-[32rem] gap-2.5 lg:flex" aria-label="여울디앤씨가 하는 일">
        {SERVICES.map((s, i) => {
          const on = i === active;
          return (
            <li
              key={s.id}
              data-on={on}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`ch-panel relative min-w-0 overflow-hidden rounded-[1.75rem] ${on ? "bg-night text-white" : "bg-g100 text-ink"}`}
            >
              <Link href={s.href} className="flex h-full flex-col p-6 -outline-offset-3" aria-label={`${s.name} — ${s.purpose}`}>
                <span className={`text-[15px] font-extrabold tabular-nums ${on ? "text-[#8db8ff]" : "text-brand"}`}>{s.no}</span>
                {/* 접힌 패널: 세로 이름 */}
                {!on && <span className="mt-auto text-[20px] font-extrabold tracking-[-0.03em] [writing-mode:vertical-rl]">{s.name}</span>}
                {/* 펼친 패널: 설명 + 사진 */}
                {on && (
                  <span className="ch-detail mt-4 grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_auto] gap-6">
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[14px] font-bold tracking-[0.06em] text-white/45">{s.en}</span>
                      <span className="mt-1 text-[32px] font-extrabold leading-tight tracking-[-0.045em]">{s.name}</span>
                      <span className="mt-2 text-[19px] font-bold text-white/85">{s.purpose}</span>
                      <span className="mt-6 block border-t border-white/12 pt-5">
                        <span className="block text-[14px] font-bold text-[#8db8ff]">결과물</span>
                        <span className="mt-1 block text-[16px] leading-relaxed text-white/80">{s.outputs}</span>
                      </span>
                      <span className="mt-4 block">
                        <span className="block text-[14px] font-bold text-[#8db8ff]">이럴 때</span>
                        <span className="mt-1 block text-[16px] leading-relaxed text-white/80">{s.when}</span>
                      </span>
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[16px] font-bold text-[#8db8ff]">
                        자세히 보기
                        <ArrowIcon className="h-4.5 w-4.5" />
                      </span>
                    </span>
                    <span className="relative block w-56 self-stretch overflow-hidden rounded-2xl bg-white/5 xl:w-64">
                      <Image src={s.image} alt={s.alt} fill sizes="260px" className="object-cover" />
                    </span>
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* 모바일·태블릿: 카드 목록 */}
      <ul className="grid gap-3 sm:grid-cols-2 lg:hidden" aria-label="여울디앤씨가 하는 일">
        {SERVICES.map((s) => (
          <li key={s.id}>
            <Link href={s.href} className="flex h-full flex-col rounded-3xl border border-g200 bg-white p-5">
              <span className="flex items-baseline justify-between gap-3">
                <span className="text-[21px] font-extrabold tracking-[-0.04em] text-ink">
                  <span className="mr-2 text-[15px] tabular-nums text-brand">{s.no}</span>
                  {s.name}
                </span>
                <ChevronIcon className="h-5 w-5 shrink-0 text-g400" />
              </span>
              <span className="mt-1 text-[16px] font-bold text-g700">{s.purpose}</span>
              <span className="mt-3 text-[15px] leading-relaxed text-g600">
                <b className="font-bold text-g800">결과물</b> {s.outputs}
              </span>
              <span className="mt-1 text-[15px] leading-relaxed text-g600">
                <b className="font-bold text-g800">이럴 때</b> {s.when}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
