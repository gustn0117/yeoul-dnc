import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon, KakaoIcon } from "@/components/ui/icons";
import { KAKAO_URL, NAV, YEOULAD_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "여울애드 · 분양·부동산 전문 | 여울디앤씨",
  "여울디앤씨의 분양·부동산 전문 브랜드 여울애드. 분양 현장의 광고와 관심고객 접수를 현장 일정에 맞춰 함께 운영합니다.",
  "/yeoulad",
);

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

// 분양 이야기는 여울애드 홈페이지에서 자세히 — 여기서는 맡는 일만 짧게
const TASKS = [
  { title: "현장별 광고 기획", desc: "입지, 단지 특징, 공급 조건, 예상 수요층을 정리해 매체 조합과 집행 일정을 짭니다." },
  { title: "온라인 광고와 타깃 문자", desc: "메타·네이버·카카오 등 온라인 광고와 통신사 타깃 문자광고, 부동산 특화 매체를 현장 상황에 맞게 운영합니다." },
  { title: "현장 홍보물과 영상", desc: "현수막·전단·리플렛 디자인과 현장·단지 소개 영상, 릴스를 만듭니다." },
  { title: "관심고객·방문예약 접수", desc: "관심고객 등록 페이지와 방문예약 신청폼을 만들고 담당자에게 알림이 가도록 연결합니다." },
  { title: "상담·브리핑 자료", desc: "상담사가 현장에서 쓰는 상품 안내 자료와 브리핑용 PPT를 만듭니다." },
];

const STAGES = ["사전 홍보", "견본주택 오픈", "청약·계약", "잔여 세대"];

const marketingLinks = NAV.find((n) => n.href === "/marketing")?.groups?.flatMap((g) => g.links) ?? [];

export default function YeouladPage() {
  return (
    <>
      <SubHero
        tag="전문 분야 · 분양·부동산"
        current="분양·부동산 · 여울애드"
        parent={{ label: "광고·마케팅", href: "/marketing" }}
        siblings={marketingLinks}
        title={
          <>
            분양·부동산 전문 브랜드
            <br />
            <span className="text-accent">여울애드</span>
          </>
        }
        desc="분양 현장은 사전 홍보부터 견본주택 오픈, 계약까지 단계마다 필요한 광고와 자료가 달라집니다. 여울애드는 현장 일정에 맞춰 광고와 관심고객 접수, 상담 자료까지 함께 운영합니다."
        actions={
          <>
            <a href={YEOULAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-signal min-h-13 px-6">
              여울애드 홈페이지 바로가기 ↗
            </a>
            <Link href="/contact" className="btn min-h-13 bg-white/12 px-6 text-white hover:bg-white/20">
              분양 광고 상담
            </Link>
          </>
        }
      />

      <section className="py-20 sm:py-28" aria-labelledby="yeoulad-tasks">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2.5 text-[15px] font-bold text-brand">
                <span className="h-0.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                여울애드가 맡는 일
              </p>
              <h2 id="yeoulad-tasks" className="mt-4 text-h2">
                현장 일정에 맞춰
                <br />
                <span className="text-accent">필요한 일</span>을 연결합니다
              </h2>
              <ol className="mt-8 flex flex-wrap gap-2" aria-label="분양 단계">
                {STAGES.map((stage, i) => (
                  <li key={stage} className="inline-flex items-center gap-2 rounded-full bg-g100 px-4 py-2 text-[15px] font-bold text-g800">
                    <span className="tabular-nums text-brand">{i + 1}</span>
                    {stage}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-[15px] text-g600">단계 구분과 진행 항목은 현장 상황에 따라 조정합니다.</p>
            </div>
            <ul className="divide-y divide-g200 border-y border-g200">
              {TASKS.map((t, i) => (
                <li key={t.title} className="grid gap-1 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4" data-reveal style={delay(i * 0.05)}>
                  <span className="text-[17px] font-extrabold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[20px] font-extrabold tracking-[-0.035em] text-ink">{t.title}</span>
                    <span className="mt-1 block text-[16px] leading-relaxed text-g700">{t.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 flex flex-col gap-5 rounded-4xl bg-g50 p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[21px] font-extrabold tracking-[-0.04em] text-ink sm:text-[24px]">분양 광고 사례와 서비스는 여울애드 홈페이지에서 자세히 확인하세요</p>
              <p className="mt-2 text-[16px] text-g600">현장 위치와 분양 단계, 필요한 업무를 남겨 주시면 여울애드 담당자가 연락드립니다.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <a href={YEOULAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-brand min-h-12 px-5">
                yeoulads.com ↗
              </a>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-soft min-h-12 px-5">
                <KakaoIcon className="h-5 w-5" />
                카카오톡 상담
              </a>
            </div>
          </div>

          <p className="mt-8 text-center">
            <Link href="/marketing" className="inline-flex min-h-11 items-center gap-1.5 text-[16px] font-bold text-brand hover:underline">
              분양 외 업종 광고는 광고·마케팅에서 보기
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
