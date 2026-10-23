import Link from "next/link";
import Image from "next/image";
import ScrollTopButton from "@/components/ScrollTopButton";
import FlowLine from "@/components/ui/FlowLine";
import { ArrowUpIcon, KakaoIcon } from "@/components/ui/icons";
import { COMPANY, KAKAO_FRIEND_URL, KAKAO_URL, TEL_HREF, YEOULAD_URL } from "@/lib/site";

const LINK_GROUPS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "광고·마케팅",
    links: [
      { label: "네이버 광고", href: "/marketing#naver" },
      { label: "메타 광고", href: "/marketing#meta" },
      { label: "카카오 광고", href: "/marketing#kakao" },
      { label: "구글·유튜브 광고", href: "/marketing#google" },
      { label: "LMS 문자광고", href: "/marketing#lms" },
    ],
  },
  {
    title: "제작서비스",
    links: [
      { label: "한눈에 보기", href: "/production" },
      { label: "영상 제작", href: "/production/video" },
      { label: "디자인 제작", href: "/production/design" },
      { label: "문서 제작", href: "/production/document" },
      { label: "홈페이지 제작", href: "/production/web" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "회사소개", href: "/about" },
      { label: "고객관리·자동화", href: "/automation" },
      { label: "포트폴리오", href: "/cases" },
    ],
  },
  {
    title: "상담",
    links: [
      { label: "상담 신청", href: "/contact" },
      { label: "카카오톡 상담", href: KAKAO_URL, external: true },
      { label: "카카오 채널 추가", href: KAKAO_FRIEND_URL, external: true },
      { label: "자주 묻는 질문", href: "/contact#faq" },
    ],
  },
];

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

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="max-w-md text-[17px] font-semibold leading-relaxed text-white/85">{COMPANY.tagline}</p>
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
            {/* 분양·부동산은 전문 브랜드 여울애드에서 다룸 */}
            <a href={YEOULAD_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-[15px] font-semibold text-white/80 ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white">
              패밀리 사이트 · 여울애드 (분양·부동산 전문) ↗
            </a>
          </div>
          <nav aria-label="하단 메뉴" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-[15px] font-bold text-white">{group.title}</p>
                <ul className="mt-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-[15px] text-white/65 transition-colors hover:text-white">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="inline-flex min-h-10 items-center text-[15px] text-white/65 transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
