import Link from "next/link";
import Image from "next/image";
import ScrollTopButton from "@/components/ScrollTopButton";
import FlowLine from "@/components/ui/FlowLine";
import { ArrowUpIcon, KakaoIcon } from "@/components/ui/icons";
import { COMPANY, KAKAO_FRIEND_URL, KAKAO_URL, NAV, TEL_HREF } from "@/lib/site";

const info = [
  { label: "대표", value: COMPANY.ceo },
  { label: "사업자등록번호", value: COMPANY.bizNo },
  { label: "이메일", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
];

/* 네이비 푸터 — 기존 사이트의 짙은 푸터 + 흐름 선 */
export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-night text-white">
      <FlowLine tone="dark" className="pointer-events-none absolute -right-48 -top-24 h-136 w-6xl max-w-none opacity-80" />

      <div className="wrap-wide relative pb-10 pt-16 sm:pt-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Image src="/images/logo-header-white-transparent.png" alt="여울디앤씨 Yeoul D&C" width={706} height={203} className="h-10 w-auto object-contain" />
            <p className="mt-6 text-[clamp(26px,3vw,40px)] font-extrabold leading-tight tracking-[-0.045em]">
              <span className="text-[#8db8ff]">결과</span>로 말하는 광고,
              <br />
              여울디앤씨와 함께
            </p>
          </div>
          <div className="lg:text-right">
            <p className="text-[16px] font-semibold text-white/60">
              전화 상담 · {COMPANY.hours} ({COMPANY.hoursNote})
            </p>
            <a href={TEL_HREF} className="mt-1 block text-[44px] font-extrabold leading-none tracking-[-0.045em] transition-colors hover:text-[#8db8ff] sm:text-[60px]">
              {COMPANY.tel}
            </a>
            <div className="mt-4 flex flex-wrap gap-x-5 lg:justify-end">
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-[16px] font-semibold text-white/75 transition-colors hover:text-white">
                <KakaoIcon className="h-5 w-5 text-kakao" />
                카카오톡으로 바로 상담
              </a>
              <a href={KAKAO_FRIEND_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-[16px] font-semibold text-white/60 transition-colors hover:text-white">
                채널 추가하고 소식 받기
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-[17px] font-semibold text-white/85">{COMPANY.tagline}</p>
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-white/60">
              {info.map((row) => (
                <div key={row.label} className="flex gap-2">
                  <dt>{row.label}</dt>
                  <dd className="text-white/85">
                    {row.href ? (
                      <a href={row.href} className="hover:text-white">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <nav aria-label="하단 메뉴">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] font-semibold text-white/75 md:justify-end">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-[14px] text-white/50">
            &copy; {new Date().getFullYear()} {COMPANY.name}({COMPANY.nameEn}). All rights reserved.
          </p>
          <ScrollTopButton className="flex h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[14px] font-semibold text-white/75 ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white">
            맨 위로
            <ArrowUpIcon className="h-4 w-4" />
          </ScrollTopButton>
        </div>
      </div>
    </footer>
  );
}
