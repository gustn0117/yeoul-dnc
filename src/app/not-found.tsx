import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import FlowLine from "@/components/ui/FlowLine";
import { ArrowIcon } from "@/components/ui/icons";
import { NAV } from "@/lib/site";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 여울디앤씨",
};

/* 없는 주소로 들어왔을 때: 서브페이지 머리와 같은 네이비 면 위에서 갈 곳을 바로 고르게 */
export default function NotFound() {
  return (
    <section className="on-dark relative overflow-hidden bg-night">
      <FlowLine tone="dark" draw="load" className="pointer-events-none absolute -bottom-16 -right-24 h-[110%] w-[160%] max-w-none sm:w-[120%] lg:-right-10 lg:w-[80%]" />
      <div className="wrap relative flex min-h-[calc(100svh-var(--header-h))] flex-col justify-center py-20">
        <p className="animate-rise-in text-[16px] font-bold tabular-nums text-[#8db8ff]">404</p>
        <h1 className="animate-rise-in mt-3 text-h1 text-white" style={{ "--delay": "0.06s" } as CSSProperties}>
          찾으시는 페이지가
          <br />
          <span className="text-accent">없거나 주소가 바뀌었습니다</span>
        </h1>
        <p className="animate-rise-in mt-5 max-w-xl text-lead text-white/72" style={{ "--delay": "0.12s" } as CSSProperties}>
          주소를 다시 확인하시거나, 아래에서 필요한 메뉴로 이동해 주세요.
        </p>
        <div className="animate-rise-in mt-10 flex flex-wrap gap-3" style={{ "--delay": "0.18s" } as CSSProperties}>
          <Link href="/" className="btn btn-signal min-h-13 px-7">
            메인으로 가기
            <ArrowIcon className="h-4.5 w-4.5" />
          </Link>
          <Link href="/contact" className="btn min-h-13 bg-white/12 px-7 text-white hover:bg-white/20">
            상담 문의하기
          </Link>
        </div>
        <nav aria-label="주요 메뉴 바로가기" className="mt-14 border-t border-white/12 pt-8">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-[17px] font-semibold text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
