import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { NAV } from "@/lib/site";

/* 제작서비스 페이지들이 같이 쓰는 조각 */

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

export const PRODUCTION_LINKS = NAV.find((n) => n.href === "/production")?.groups?.[0]?.links ?? [];

/** 제작서비스 하위 페이지 바로가기 (현재 페이지 강조) */
export function ProductionSubnav({ current }: { current: string }) {
  return (
    <nav aria-label="제작서비스 메뉴" className="border-b border-g200 bg-white">
      <ul className="wrap no-scrollbar flex gap-1 overflow-x-auto py-3">
        {PRODUCTION_LINKS.map((link) => {
          const on = link.href === current;
          return (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                aria-current={on ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-bold transition-colors ${on ? "bg-night text-white" : "text-g600 hover:bg-g100 hover:text-ink"}`}
              >
                {link.label === "제작서비스 한눈에 보기" ? "전체" : link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** 섹션 머리 (작은 라벨 + 제목 + 설명, 왼쪽 정렬) */
export function PartHead({ label, title, desc, id }: { label: string; title: ReactNode; desc?: ReactNode; id?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="inline-flex items-center gap-2.5 text-[15px] font-bold text-brand" data-reveal>
        <span className="h-0.5 w-6 rounded-full bg-accent" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="mt-4 text-h2" data-reveal style={delay(0.06)}>
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-lead text-g700" data-reveal style={delay(0.12)}>
          {desc}
        </p>
      )}
    </div>
  );
}

/** 두 방식 비교표 (예: 편집만 / 촬영 포함). 모바일은 항목별 카드로 */
export function CompareTable({ columns, rows, caption }: { columns: [ReactNode, ReactNode]; rows: [string, string, string][]; caption: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-g200 bg-white" data-reveal>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="hidden sm:table-header-group">
          <tr className="bg-g50">
            <th scope="col" className="w-36 px-6 py-4 text-[15px] font-bold text-g500">
              구분
            </th>
            <th scope="col" className="px-6 py-4 text-[17px] font-extrabold text-ink">
              {columns[0]}
            </th>
            <th scope="col" className="border-l border-g200 px-6 py-4 text-[17px] font-extrabold text-brand">
              {columns[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, a, b]) => (
            <tr key={label} className="block border-t border-g200 first:border-t-0 sm:table-row sm:first:border-t">
              <th scope="row" className="block px-5 pt-4 text-[15px] font-bold text-g500 sm:table-cell sm:px-6 sm:py-4">
                {label}
              </th>
              <td className="block px-5 pt-2 text-[16px] leading-relaxed text-g800 sm:table-cell sm:px-6 sm:py-4">
                <span className="mr-2 text-[13px] font-bold text-g500 sm:hidden">{columns[0]}</span>
                {a}
              </td>
              <td className="block px-5 pb-4 pt-2 text-[16px] leading-relaxed text-g800 sm:table-cell sm:border-l sm:border-g200 sm:px-6 sm:py-4">
                <span className="mr-2 text-[13px] font-bold text-brand sm:hidden">{columns[1]}</span>
                {b}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 체크 목록 */
export function CheckList({ items, tone = "brand" }: { items: string[]; tone?: "brand" | "gray" }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[17px] leading-relaxed text-g800">
          <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${tone === "brand" ? "bg-brand-50 text-brand" : "bg-g100 text-g500"}`} aria-hidden="true">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** 받는 결과물 / 별도 협의 두 묶음 */
export function ScopeLists({ deliver, separate, deliverTitle = "받는 결과물", separateTitle = "별도 협의" }: { deliver: string[]; separate: string[]; deliverTitle?: string; separateTitle?: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      <div className="rounded-3xl border border-g200 bg-white p-6 sm:p-8" data-reveal>
        <h3 className="text-[20px] font-extrabold tracking-[-0.035em] text-ink">{deliverTitle}</h3>
        <div className="mt-5">
          <CheckList items={deliver} />
        </div>
      </div>
      <div className="rounded-3xl bg-g50 p-6 sm:p-8" data-reveal style={delay(0.08)}>
        <h3 className="text-[20px] font-extrabold tracking-[-0.035em] text-g800">{separateTitle}</h3>
        <p className="mt-1 text-[15px] text-g500">범위에 따라 상담에서 정하는 일</p>
        <div className="mt-5">
          <CheckList items={separate} tone="gray" />
        </div>
      </div>
    </div>
  );
}

/** 번호가 붙은 진행 단계 (가로 4칸, 모바일 세로) */
export function StepRow({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="relative rounded-3xl border border-g200 bg-white p-6" data-reveal style={delay(i * 0.07)}>
          <span className="text-[32px] font-extrabold leading-none tracking-[-0.04em] text-brand">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 text-[19px] font-extrabold tracking-[-0.035em] text-ink">{s.title}</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-g700">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}
