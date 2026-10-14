import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import CrumbMenu from "@/components/ui/CrumbMenu";
import FlowLine from "@/components/ui/FlowLine";
import { ChevronIcon } from "@/components/ui/icons";
import { NAV } from "@/lib/site";

type SubHeroProps = {
  /** 제목 위 작은 태그 */
  tag: string;
  title: ReactNode;
  /** 브레드크럼에 표시할 현재 페이지 이름 (NAV의 label과 같아야 형제 메뉴에서 강조됨) */
  current: string;
};

/* 서브페이지 머리: 네이비 띠 위에 흐름 선이 그려지고, 경로 → 태그 → 큰 제목을 왼쪽 정렬로 */
export default function SubHero({ tag, title, current }: SubHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-night">
      <FlowLine tone="dark" draw="load" className="pointer-events-none absolute -bottom-10 -right-24 h-[120%] w-[150%] max-w-none sm:w-[110%] lg:-right-10 lg:w-[80%]" />
      <div className="wrap relative pb-14 pt-6 sm:pb-20 sm:pt-8 lg:pb-24">
        <nav aria-label="현재 위치" className="animate-rise-in">
          <ol className="flex items-center gap-1 text-[15px] text-white/60">
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center rounded-full px-2 font-semibold transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/35">
              <ChevronIcon className="h-4 w-4" />
            </li>
            <li>
              <CrumbMenu current={current} items={NAV} tone="dark" />
            </li>
          </ol>
        </nav>
        <p className="animate-rise-in mt-10 text-[16px] font-bold text-[#8db8ff] sm:mt-14" style={{ "--delay": "0.06s" } as CSSProperties}>
          {tag}
        </p>
        <h1 className="animate-rise-in mt-3 max-w-4xl text-h1 text-white" style={{ "--delay": "0.12s" } as CSSProperties}>
          {title}
        </h1>
      </div>
    </section>
  );
}
