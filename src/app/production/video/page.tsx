import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import { ExampleTag, ReelMock, VideoMock } from "@/components/mocks/Mocks";
import { CheckList, CompareTable, PRODUCTION_LINKS, PartHead, ProductionSubnav, ScopeLists, StepRow } from "@/components/production/Parts";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "영상 제작 | 여울디앤씨",
  "릴스·쇼츠부터 기업·브랜드·상품 홍보영상까지. 기획과 대본, 촬영, 편집, 자막을 영상이 쓰일 곳에 맞춰 만듭니다.",
  "/production/video",
);

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

const SCENES = [
  { no: "SCENE 01 · 도입", line: "보는 사람이 궁금해할 질문으로 시작합니다", sub: "첫 3초 안에 주제 전달", image: "/images/0515/op-education.png", alt: "상담원이 웃으며 이야기하는 장면" },
  { no: "SCENE 02 · 대상", line: "상품·공간·서비스를 직접 보여줍니다", sub: "핵심 특징 한 가지씩", image: "/images/0515/ind-store.png", alt: "매장 외관을 보여주는 장면" },
  { no: "SCENE 03 · 사람", line: "인터뷰·사용 장면으로 신뢰를 더합니다", sub: "담당자 또는 사용 장면", image: "/images/0515/op-store.png", alt: "매장 운영자가 태블릿을 보는 장면" },
  { no: "SCENE 04 · 마무리", line: "다음 행동을 안내하고 로고로 마칩니다", sub: "신청·문의 안내", image: "/images/0515/team-presentation-1.png", alt: "회의실에서 마무리 발표를 하는 장면" },
];

export default function VideoPage() {
  return (
    <>
      <SubHero
        tag="제작서비스 · 영상 제작"
        current="영상 제작"
        parent={{ label: "제작서비스", href: "/production" }}
        siblings={PRODUCTION_LINKS}
        title={
          <>
            릴스부터 홍보영상까지
            <br />
            <span className="text-accent">기획에서 편집까지</span> 맡깁니다
          </>
        }
        desc="무엇을 보여줄지 정하는 기획부터 대본, 촬영, 편집, 자막까지 영상이 쓰일 곳에 맞춰 만듭니다. 갖고 계신 영상·사진으로 편집만 맡기셔도 됩니다."
        actions={
          <Link href="/contact" className="btn btn-signal min-h-13 px-6">
            영상 제작 상담
            <ArrowIcon className="h-4.5 w-4.5" />
          </Link>
        }
      />
      <ProductionSubnav current="/production/video" />

      {/* 장면 구성 예시 */}
      <section className="py-20 sm:py-28" aria-labelledby="scene-title">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14">
            <div>
              <PartHead id="scene-title" label="이럴 때 필요합니다" title={<>영상이 <span className="text-accent">필요한 순간</span></>} />
              <div className="mt-8">
                <CheckList
                  items={[
                    "인스타그램·유튜브에 꾸준히 올릴 짧은 영상이 필요할 때",
                    "광고에 쓸 영상 소재가 없어 이미지 광고만 하고 있을 때",
                    "회사나 상품을 1–2분 안에 설명할 소개 영상이 필요할 때",
                    "촬영해 둔 영상은 많은데 편집할 사람이 없을 때",
                    "무엇을 찍어야 할지부터 함께 정하고 싶을 때",
                  ]}
                />
              </div>
            </div>
            <figure className="relative">
              <ExampleTag className="left-0 top-0 -translate-y-1/2">구성 예시 · 장면 순서</ExampleTag>
              <ol className="grid grid-cols-2 gap-3 pt-4">
                {SCENES.map((s, i) => (
                  <li key={s.no} className="overflow-hidden rounded-2xl bg-night" data-reveal style={delay(i * 0.08)}>
                    <div className="relative aspect-video">
                      <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 320px, 45vw" className="object-cover opacity-85" />
                      <span className="absolute inset-0 bg-linear-to-t from-night/90 to-transparent" aria-hidden="true" />
                      <span className="absolute bottom-2 left-3 rounded-md bg-black/50 px-2 py-0.5 text-[11px] font-semibold text-white/90">자막 · {s.sub}</span>
                    </div>
                    <div className="p-3.5">
                      <p className="text-[11px] font-bold tracking-[0.04em] text-[#8db8ff]">{s.no}</p>
                      <p className="mt-1 text-[14px] font-bold leading-snug text-white">{s.line}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </figure>
          </div>
        </div>
      </section>

      {/* 영상 종류 */}
      <section className="panel py-20 sm:py-28" aria-labelledby="types-title">
        <div className="wrap">
          <PartHead id="types-title" label="영상 종류" title={<>쓰일 곳에 따라 <span className="text-accent">길이와 비율</span>이 다릅니다</>} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex flex-col rounded-3xl bg-white p-5" data-reveal>
              <ReelMock image="/images/0515/op-consult.png" alt="상담 장면 세로 영상" caption="소리 없이도 이해되는 자막" className="mx-auto w-3/5" />
              <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.035em] text-ink">릴스·쇼츠</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-g700">세로형 짧은 영상. 첫 장면에서 핵심을 보여주고 자막으로 소리 없이도 이해되게 만듭니다.</p>
            </li>
            <li className="flex flex-col rounded-3xl bg-white p-5" data-reveal style={delay(0.07)}>
              <VideoMock image="/images/0515/team-presentation-2.png" alt="회사 회의 장면 가로 영상" title="홍보영상" />
              <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.035em] text-ink">기업·브랜드 홍보영상</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-g700">회사가 하는 일과 일하는 방식을 소개하는 영상. 홈페이지, 제안 발표, 채용에 씁니다.</p>
            </li>
            <li className="flex flex-col rounded-3xl bg-white p-5" data-reveal style={delay(0.14)}>
              <VideoMock image="/images/stock/creative-design.jpg" alt="상품 디자인 시안 장면" title="상품 영상" tag={false} />
              <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.035em] text-ink">상품 홍보영상</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-g700">상품의 사용 장면과 특징을 보여주는 영상. 상세페이지와 광고 소재로 함께 씁니다.</p>
            </li>
            <li className="flex flex-col rounded-3xl bg-white p-5" data-reveal style={delay(0.21)}>
              <figure className="relative rounded-xl border border-g200 bg-g50 p-4 pt-10">
                <ExampleTag>구성안 양식</ExampleTag>
                <ol className="space-y-2 text-[13px] font-semibold text-g700">
                  {["#1 도입 · 자막", "#2 보여줄 장면", "#3 인터뷰·내레이션", "#4 마무리 안내"].map((line) => (
                    <li key={line} className="rounded-lg bg-white px-3 py-2">
                      {line}
                    </li>
                  ))}
                </ol>
              </figure>
              <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.035em] text-ink">콘텐츠 기획과 대본</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-g700">영상 주제, 장면 구성, 내레이션·자막 대본을 정리합니다. 기획만 따로 맡길 수도 있습니다.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* 제작 과정 */}
      <section className="py-20 sm:py-28" aria-labelledby="flow-title">
        <div className="wrap">
          <PartHead id="flow-title" label="제작 과정" title={<>장면을 먼저 정하고 <span className="text-accent">촬영</span>합니다</>} desc="구성안 단계에서 장면 순서와 자막을 확인하시면 촬영과 편집 이후의 큰 수정을 줄일 수 있습니다." />
          <div className="mt-12">
            <StepRow
              steps={[
                { title: "기획", desc: "목적, 보는 사람, 핵심 메시지, 사용처를 정리합니다." },
                { title: "구성안·대본", desc: "장면 순서, 자막, 내레이션 대본을 작성합니다." },
                { title: "촬영 또는 소스 정리", desc: "현장 촬영을 하거나 보유 영상·사진을 정리합니다." },
                { title: "편집·검토·납품", desc: "편집, 자막, 음악을 넣고 검토 후 최종본을 전달합니다." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 편집과 촬영의 구분 + 결과물 */}
      <section className="panel py-20 sm:py-28" aria-labelledby="scope-title">
        <div className="wrap">
          <PartHead id="scope-title" label="편집과 촬영의 구분" title={<>편집만 맡길지, <span className="text-accent">촬영까지</span> 맡길지 먼저 정합니다</>} />
          <div className="mt-12">
            <CompareTable
              caption="편집만 의뢰와 현장 촬영 포함 비교"
              columns={["편집만 의뢰", "현장 촬영 포함"]}
              rows={[
                ["영상 소스", "고객님이 보유한 영상·사진을 받아 사용", "여울디앤씨가 현장에서 촬영"],
                ["하는 일", "컷 편집, 자막, 음악, 색 보정, 비율별 편집", "촬영 계획, 현장 촬영, 이후 편집 전체"],
                ["별도 협의", "소스 양과 상태에 따른 작업량", "촬영 회차·시간, 장소, 출연자 섭외, 장비, 이동"],
                ["준비할 것", "원본 영상 파일, 사용할 사진, 로고", "촬영 장소 사용 협조, 출연 동의, 촬영 일정"],
              ]}
            />
          </div>
          <div className="mt-6">
            <ScopeLists
              deliver={["용도별 최종 편집본(세로 9:16, 가로 16:9 등 협의)", "자막을 넣은 버전", "구성안·대본 파일(기획을 맡긴 경우)", "썸네일 이미지(협의 시)"]}
              separate={["영상 길이와 편수, 비율별 추가 편집", "현장 촬영 여부와 회차", "출연자·모델·장소 섭외와 비용", "유료 음원·폰트·이미지 사용", "수정 횟수와 범위, 납기", "원본·프로젝트 파일 제공 여부"]}
            />
          </div>
        </div>
      </section>

      <ClosingCTA
        title={<>어떤 영상이 필요하신가요?</>}
        desc="사용처와 희망 일정을 알려 주시면 구성과 범위를 안내드립니다."
        buttonText="영상 제작 상담"
      />
    </>
  );
}
