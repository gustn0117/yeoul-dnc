import Image from "next/image";
import type { CSSProperties } from "react";
import { INDUSTRIES } from "@/lib/offerings";

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 대상 업종 6개 — 업종명과 예시만 (실적 표현 없음). PC 3열×2행, 태블릿 2열, 모바일 1열 */
export default function Industries() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {INDUSTRIES.map((ind, i) => (
        <li key={ind.name} className="group relative overflow-hidden rounded-4xl bg-night" data-reveal style={delay((i % 3) * 0.08)}>
          <div className="relative aspect-16/10 sm:aspect-4/3">
            <Image src={ind.image} alt={ind.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover opacity-90" />
            <span className="absolute inset-0 bg-linear-to-t from-night via-night/45 to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <h3 className="text-[24px] font-extrabold tracking-[-0.04em] text-white sm:text-[26px]">{ind.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/75 sm:text-[16px]">{ind.examples.join(" · ")}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
