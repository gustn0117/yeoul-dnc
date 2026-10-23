import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import { SlideMock } from "@/components/mocks/Mocks";
import { PRODUCTION_LINKS, PartHead, ProductionSubnav, ScopeLists } from "@/components/production/Parts";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "문서 제작 | 여울디앤씨",
  "PPT 발표 자료, 사업제안서, 회사소개서, 상담·브리핑 자료. 흩어진 자료를 목차로 정리하고 핵심 문장과 도표로 페이지를 구성합니다.",
  "/production/document",
);

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

const TYPES = [
  { title: "PPT 발표 자료", desc: "한 장에 한 메시지. 발표자가 말로 설명할 부분과 화면에 남길 부분을 나눠 구성합니다.", slide: { kind: "cover" as const, title: "핵심 메시지를\n한 장에 하나씩" } },
  { title: "사업제안서", desc: "제출처의 평가 기준과 양식에 맞춰 현황, 제안, 일정, 수행 체계를 논리 순서대로 정리합니다.", slide: { kind: "schedule" as const, title: "추진 일정과 수행 체계" } },
  { title: "회사소개서", desc: "회사가 하는 일, 서비스, 진행 방식, 연락처를 담습니다. 공개 가능한 실적과 인증만 넣습니다.", slide: { kind: "body" as const, title: "회사가 하는 일" } },
  { title: "상담·브리핑 자료", desc: "상담사가 고객 앞에서 넘기며 설명하는 자료. 자주 받는 질문 순서대로 구성합니다.", slide: { kind: "chart" as const, title: "자주 묻는 내용 정리" } },
];

const SCOPES = [
  { key: "A", title: "원고가 준비된 경우", desc: "완성된 원고를 받아 페이지 구성과 디자인을 진행합니다. 문장은 읽기 쉽게 다듬는 정도로 손봅니다." },
  { key: "B", title: "자료만 있는 경우", desc: "기존 소개서, 보고서, 메모 등을 받아 목차를 세우고 핵심 문장과 도표로 정리합니다." },
  { key: "C", title: "함께 기획하는 경우", desc: "인터뷰로 내용을 정리하는 단계부터 시작해 구성안, 원고, 디자인까지 진행합니다." },
];

export default function DocumentPage() {
  return (
    <>
      <SubHero
        tag="제작서비스 · 문서 제작"
        current="문서 제작"
        parent={{ label: "제작서비스", href: "/production" }}
        siblings={PRODUCTION_LINKS}
        title={
          <>
            읽는 사람이 바로 이해하는
            <br />
            <span className="text-accent">제안서와 회사소개서</span>
          </>
        }
        desc="흩어진 자료를 목차로 정리하고, 핵심 문장과 도표로 페이지를 구성한 뒤 디자인까지 마무리합니다. 발표용 PPT, 제출용 제안서, 상담 현장에서 쓰는 자료를 만듭니다."
        actions={
          <Link href="/contact" className="btn btn-signal min-h-13 px-6">
            문서 제작 상담
            <ArrowIcon className="h-4.5 w-4.5" />
          </Link>
        }
      />
      <ProductionSubnav current="/production/document" />

      {/* 대표 결과물 */}
      <section className="py-20 sm:py-28" aria-labelledby="types-title">
        <div className="wrap">
          <PartHead id="types-title" label="대표 결과물" title={<>쓰이는 자리에 따라 <span className="text-accent">구성이 다릅니다</span></>} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {TYPES.map((t, i) => (
              <li key={t.title} className="rounded-3xl border border-g200 bg-white p-5 sm:p-6" data-reveal style={delay(i * 0.07)}>
                <SlideMock kind={t.slide.kind} title={t.slide.title} tag={i === 0} />
                <h3 className="mt-5 text-[21px] font-extrabold tracking-[-0.035em] text-ink">{t.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-g700">{t.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 작업 범위 A·B·C */}
      <section className="panel py-20 sm:py-28" aria-labelledby="scope-title">
        <div className="wrap">
          <PartHead id="scope-title" label="작업 범위" title={<>원고를 <span className="text-accent">어디까지 함께 쓸지</span> 먼저 정합니다</>} desc="문서 제작에서 가장 범위 차이가 큰 부분은 내용 작성입니다. 아래 세 가지 중 어디에 해당하는지 상담에서 확인합니다." />
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {SCOPES.map((s, i) => (
              <li key={s.key} className="rounded-3xl bg-white p-6 sm:p-7" data-reveal style={delay(i * 0.07)}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-night text-[18px] font-extrabold text-white">{s.key}</span>
                <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.035em] text-ink">{s.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-g700">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <ScopeLists
              deliver={["편집 가능한 문서 파일(PPTX 등 협의)", "배포·제출용 PDF", "인쇄가 필요한 경우 인쇄용 파일"]}
              separateTitle="상담 시 확정"
              separate={["분량", "원고 작성 범위(A·B·C)", "도표·일러스트·사진 촬영 필요 여부", "수정 횟수와 납기", "인쇄·제본 진행 여부"]}
            />
          </div>
        </div>
      </section>

      <ClosingCTA title={<>마감일이 정해져 있나요?</>} desc="제출·발표 일정과 분량을 알려 주시면 가능한 일정을 먼저 확인해 드립니다." buttonText="문서 제작 상담" />
    </>
  );
}
