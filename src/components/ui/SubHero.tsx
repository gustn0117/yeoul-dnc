import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import CrumbMenu from "@/components/ui/CrumbMenu";
import FlowLine from "@/components/ui/FlowLine";
import { ChevronIcon } from "@/components/ui/icons";
import { NAV } from "@/lib/site";

type Crumb = { label: string; href: string };

type SubHeroProps = {
  /** 제목 위 작은 태그 */
  tag: string;
  title: ReactNode;
  /** 브레드크럼의 현재 페이지 이름 (형제 메뉴에서 강조됨) */
  current: string;
  /** 중간 단계 (예: 제작서비스 › 영상 제작) */
  parent?: Crumb;
  /** 현재 항목을 눌렀을 때 고를 형제 페이지 (기본: 상단 메뉴) */
  siblings?: Crumb[];
  /** 제목 아래 설명 */
  desc?: ReactNode;
  /** 설명 아래 버튼 */
  actions?: ReactNode;
};

const delay = (s: number) => ({ "--delay": `${s}s` }) as CSSProperties;

/* 서브페이지 머리: 네이비 띠 위에 흐름 선이 그려지고, 경로 → 태그 → 큰 제목 → 설명 → 버튼을 왼쪽 정렬로 */
export default function SubHero({ tag, title, current, parent, siblings, desc, actions }: SubHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-night">
      <FlowLine tone="dark" draw="load" className="pointer-events-none absolute -bottom-10 -right-24 h-[120%] w-[150%] max-w-none sm:w-[110%] lg:-right-10 lg:w-[80%]" />
      <div className="wrap relative pb-14 pt-6 sm:pb-20 sm:pt-8 lg:pb-24">
        <nav aria-label="현재 위치" className="animate-rise-in">
          <ol className="flex flex-wrap items-center gap-1 text-[15px] text-white/60">
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center rounded-full px-2 font-semibold transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {parent && (
              <>
                <li aria-hidden="true" className="text-white/35">
                  <ChevronIcon className="h-4 w-4" />
                </li>
                <li>
                  <Link href={parent.href} className="inline-flex min-h-11 items-center rounded-full px-2 font-semibold transition-colors hover:text-white">
                    {parent.label}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true" className="text-white/35">
              <ChevronIcon className="h-4 w-4" />
            </li>
            <li>
              <CrumbMenu current={current} items={siblings ?? NAV} tone="dark" />
            </li>
          </ol>
        </nav>
        <p className="animate-rise-in mt-10 text-[16px] font-bold text-[#8db8ff] sm:mt-14" style={delay(0.06)}>
          {tag}
        </p>
        <h1 className="animate-rise-in mt-3 max-w-4xl text-h1 text-white" style={delay(0.12)}>
          {title}
        </h1>
        {desc && (
          <p className="animate-rise-in mt-6 max-w-2xl text-pretty text-lead text-white/72" style={delay(0.18)}>
            {desc}
          </p>
        )}
        {actions && (
          <div className="animate-rise-in mt-8 flex flex-wrap gap-3" style={delay(0.24)}>
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
