"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { BannerMock, ExampleTag, ReelMock, ReportMock, SlideMock, VideoMock } from "@/components/mocks/Mocks";
import PhoneFrame from "@/components/ui/PhoneFrame";
import { ArrowIcon } from "@/components/ui/icons";
import { WEB_WORKS } from "@/lib/offerings";

type Work = {
  id: string;
  label: string;
  title: string;
  desc: string;
  rows: [string, string][];
  link: { label: string; href: string };
  visual: ReactNode;
};

const WORKS: Work[] = [
  {
    id: "video",
    label: "영상",
    title: "릴스·쇼츠와 홍보영상",
    desc: "세로형 짧은 영상부터 회사·상품을 소개하는 가로형 영상까지, 쓰일 매체에 맞춰 구성과 비율을 정해 편집합니다.",
    rows: [
      ["결과물", "용도별 편집본(세로 9:16, 가로 16:9 등), 자막 포함본"],
      ["쓰이는 곳", "인스타그램 릴스, 유튜브 쇼츠·채널, 광고 소재, 홈페이지"],
      ["협의 항목", "영상 길이와 편수, 현장 촬영 여부, 수정 범위, 납기"],
    ],
    link: { label: "영상 제작 자세히", href: "/production/video" },
    visual: (
      <div className="grid grid-cols-[0.62fr_1fr] items-center gap-4">
        <ReelMock image="/images/0515/op-education.png" alt="상담하는 모습을 담은 세로 영상 장면" caption={<>첫 3초 안에<br />주제를 전달합니다</>} />
        <VideoMock image="/images/0515/team-presentation-1.png" alt="회사 소개 영상의 회의 장면" title="기업·브랜드 홍보영상" />
      </div>
    ),
  },
  {
    id: "web",
    label: "홈페이지",
    title: "PC·모바일 홈페이지와 신청 페이지",
    desc: "회사를 소개하는 홈페이지와 광고에서 연결되는 랜딩페이지, 상담 신청폼을 함께 설계합니다. 모바일에서 신청까지 이어지는 흐름을 먼저 확인합니다.",
    rows: [
      ["결과물", "공개된 웹페이지(PC·모바일), 상담 신청폼, 접수 알림 설정"],
      ["쓰이는 곳", "회사 소개, 광고 연결 페이지, 예약 요청 접수"],
      ["협의 항목", "페이지 수와 기능, 도메인·호스팅, 유지관리 범위"],
    ],
    link: { label: "홈페이지 제작 자세히", href: "/production/web" },
    visual: (
      <div className="grid grid-cols-2 gap-3">
        {WEB_WORKS.slice(0, 4).map((w) => (
          <figure key={w.slug} className="overflow-hidden rounded-2xl bg-[#f4f4f4]">
            <Image src={w.image} alt={`${w.title} 제작 사례`} width={1000} height={1000} sizes="(min-width: 1024px) 280px, 45vw" className="h-auto w-full" />
            <figcaption className="px-3 pb-3 text-[13px] font-bold text-g700">{w.title}</figcaption>
          </figure>
        ))}
      </div>
    ),
  },
  {
    id: "document",
    label: "제안서·문서",
    title: "PPT·사업제안서·회사소개서",
    desc: "흩어진 자료를 목차로 정리하고, 읽는 사람이 바로 이해할 수 있도록 핵심 문장과 도표로 페이지를 구성합니다.",
    rows: [
      ["결과물", "발표·제출용 문서 파일(PPTX, PDF 등 협의), 인쇄용 파일"],
      ["쓰이는 곳", "입찰·제안 발표, 투자·제휴 미팅, 상담 현장"],
      ["협의 항목", "페이지 분량, 원고 작성 범위, 수정 범위, 납기"],
    ],
    link: { label: "문서 제작 자세히", href: "/production/document" },
    visual: (
      <div className="grid gap-3">
        <SlideMock kind="cover" title={"우리 회사를 한눈에 보여주는\n회사소개서"} />
        <div className="grid grid-cols-2 gap-3">
          <SlideMock kind="body" title="서비스 소개" tag={false} />
          <SlideMock kind="chart" title="도표 페이지" tag={false} />
        </div>
      </div>
    ),
  },
  {
    id: "design",
    label: "광고 디자인",
    title: "광고 배너와 SNS 콘텐츠",
    desc: "같은 메시지라도 매체마다 지면 크기와 비율이 다릅니다. 하나의 시안을 기준으로 필요한 사이즈별 파일을 만듭니다.",
    rows: [
      ["결과물", "매체별 사이즈의 이미지 파일, 카드뉴스 페이지 묶음"],
      ["쓰이는 곳", "메타·카카오·구글 광고, 인스타그램 게시물, 홈페이지 배너"],
      ["협의 항목", "사이즈 종류와 수량, 문구 작성 범위, 수정 범위"],
    ],
    link: { label: "디자인 제작 자세히", href: "/production/design" },
    visual: (
      <div className="grid grid-cols-[1fr_0.82fr] items-end gap-3">
        <BannerMock ratio="1:1" image="/images/0515/ind-store.png" alt="카페 매장 사진을 쓴 광고 배너" headline="이번 주 매장 소식" caption="1:1 · 피드" />
        <BannerMock ratio="4:5" image="/images/0515/op-store.png" alt="매장 운영자 사진을 쓴 광고 배너" headline="동네 고객 혜택" caption="4:5 · 피드" tag={false} />
        <div className="col-span-2">
          <BannerMock ratio="1.91:1" image="/images/stock/office-space.jpg" alt="사무 공간 사진을 쓴 가로 배너" headline="상담 신청 안내" caption="1.91:1 · 디스플레이" tag={false} />
        </div>
      </div>
    ),
  },
  {
    id: "ads",
    label: "광고 운영",
    title: "광고 노출 화면과 운영 보고서",
    desc: "광고가 실제로 어떤 지면에 어떤 모습으로 보이는지 확인하고, 운영 중에는 노출·클릭·문의·비용을 정리한 보고서로 결과를 공유합니다.",
    rows: [
      ["결과물", "매체 운영안, 광고 소재와 문구, 계정 세팅, 정기 보고서"],
      ["쓰이는 곳", "검색·SNS·카카오·유튜브·문자·지역 광고"],
      ["협의 항목", "운영 매체와 기간, 광고비와 운영비, 보고 주기"],
    ],
    link: { label: "광고·마케팅 자세히", href: "/marketing" },
    visual: (
      <div className="grid grid-cols-[0.75fr_1fr] items-center gap-4">
        <div className="relative">
          <ExampleTag className="left-auto right-0 top-0 -translate-y-1/2">실제 노출 화면</ExampleTag>
          <div className="grid grid-cols-2 gap-2">
            <PhoneFrame src="/images/0515/naver-phone-2.png" alt="네이버 파워링크 광고 노출 화면" sizes="160px" />
            <PhoneFrame src="/images/0515/insta-phone-1.png" alt="인스타그램 피드 광고 노출 화면" sizes="160px" className="translate-y-6" />
          </div>
        </div>
        <ReportMock />
      </div>
    ),
  },
];

/* 받게 되는 결과물 — 결과물 종류별 탭: 왼쪽 예시 화면, 오른쪽 설명·결과물·쓰이는 곳·협의 항목 */
export default function WorksTabs() {
  const [active, setActive] = useState(0);
  const work = WORKS[active];

  const onKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + WORKS.length) % WORKS.length;
    setActive(n);
    document.getElementById(`works-tab-${WORKS[n].id}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="결과물 종류" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:-mx-8 md:px-8 lg:mx-0 lg:justify-center lg:px-0">
        {WORKS.map((w, i) => {
          const on = i === active;
          return (
            <button
              key={w.id}
              id={`works-tab-${w.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="works-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`min-h-12 shrink-0 rounded-full px-5 text-[16px] font-bold transition-colors ${on ? "bg-night text-white" : "border border-g200 bg-white text-g700 hover:bg-g50"}`}
            >
              {w.label}
            </button>
          );
        })}
      </div>

      <div id="works-panel" role="tabpanel" aria-labelledby={`works-tab-${work.id}`} className="mt-8 rounded-4xl border border-g200 bg-white p-5 sm:p-8 lg:mt-10 lg:p-10">
        <div key={work.id} className="planner-in grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="min-w-0">{work.visual}</div>
          <div>
            <h3 className="text-h3 text-ink">{work.title}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-g700">{work.desc}</p>
            <dl className="mt-6 divide-y divide-g200 border-y border-g200">
              {work.rows.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3.5 text-[16px]">
                  <dt className="font-bold text-g500">{label}</dt>
                  <dd className="text-g800">{value}</dd>
                </div>
              ))}
            </dl>
            <Link href={work.link.href} className="mt-6 inline-flex min-h-11 items-center gap-2 text-[17px] font-bold text-brand hover:underline">
              {work.link.label}
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
