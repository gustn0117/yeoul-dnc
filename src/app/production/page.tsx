import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import { BannerMock, ReelMock, SlideMock, VideoMock } from "@/components/mocks/Mocks";
import { CheckList, PRODUCTION_LINKS, PartHead, ProductionSubnav } from "@/components/production/Parts";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { WEB_WORKS } from "@/lib/offerings";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "제작서비스 | 여울디앤씨",
  "영상·디자인·문서·홈페이지를 결과물 단위로 제작합니다. 릴스·홍보영상, 광고 배너·인쇄물, PPT·제안서·회사소개서, 홈페이지·랜딩페이지.",
  "/production",
);

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

const FIELDS: { no: string; en: string; title: string; desc: string; chips: string[]; when: string; get: string; href: string; visual: ReactNode }[] = [
  {
    no: "01",
    en: "VIDEO",
    title: "영상 제작",
    desc: "릴스·쇼츠 같은 짧은 영상부터 기업·브랜드·상품 홍보영상까지, 기획과 대본, 촬영, 편집을 맡습니다. 갖고 계신 영상으로 편집만 맡기셔도 됩니다.",
    chips: ["릴스·쇼츠", "기업·브랜드·상품 홍보영상", "콘텐츠 기획과 대본", "촬영·편집"],
    when: "SNS에 올릴 영상, 광고용 영상 소재, 회사·상품 소개 영상이 필요할 때",
    get: "용도별 편집본(9:16, 16:9 등), 자막본, 구성안·대본",
    href: "/production/video",
    visual: (
      <div className="grid grid-cols-[0.6fr_1fr] items-center gap-3">
        <ReelMock image="/images/0515/op-store.png" alt="매장을 소개하는 세로 영상 장면" caption={<>오늘의 매장<br />소식</>} />
        <VideoMock image="/images/0515/team-presentation-2.png" alt="회사 소개 영상의 회의 장면" title="기업 홍보영상" />
      </div>
    ),
  },
  {
    no: "02",
    en: "DESIGN",
    title: "디자인 제작",
    desc: "광고 배너, 카드뉴스, SNS 콘텐츠처럼 온라인에 쓰는 디자인과 브로셔·리플렛, 전단지·현수막 같은 인쇄물 디자인을 만듭니다.",
    chips: ["광고 배너", "카드뉴스", "SNS 콘텐츠", "브로셔·리플렛", "전단지·현수막"],
    when: "광고 소재가 필요하거나, SNS 게시물과 인쇄 홍보물을 정돈하고 싶을 때",
    get: "매체별 사이즈 이미지, 인쇄용 파일 (인쇄 진행은 별도 협의)",
    href: "/production/design",
    visual: (
      <div className="grid grid-cols-2 items-end gap-3">
        <BannerMock ratio="1:1" image="/images/0515/ind-store.png" alt="카페 매장 사진을 쓴 광고 배너" headline="이번 주 매장 소식" caption="1:1 · 피드" />
        <BannerMock ratio="4:5" image="/images/0515/op-clinic.png" alt="진료실 사진을 쓴 광고 배너" headline="진료 안내" caption="4:5 · 피드" tag={false} />
      </div>
    ),
  },
  {
    no: "03",
    en: "DOCUMENT",
    title: "문서 제작",
    desc: "흩어진 자료를 목차로 정리하고 핵심 문장과 도표로 페이지를 구성합니다. 발표용 PPT, 제출용 제안서, 회사소개서, 상담 현장 자료를 만듭니다.",
    chips: ["PPT", "사업제안서", "회사소개서", "상담·브리핑 자료"],
    when: "입찰·제안 발표, 투자·제휴 미팅, 영업 미팅 자료가 필요할 때",
    get: "편집 가능한 문서 파일, 배포·제출용 PDF",
    href: "/production/document",
    visual: (
      <div className="grid gap-3">
        <SlideMock kind="cover" title={"읽는 사람이 바로 이해하는\n사업제안서"} />
        <div className="grid grid-cols-2 gap-3">
          <SlideMock kind="body" title="제안 내용" tag={false} />
          <SlideMock kind="schedule" title="추진 일정" tag={false} />
        </div>
      </div>
    ),
  },
  {
    no: "04",
    en: "WEBSITE",
    title: "홈페이지 제작",
    desc: "회사·브랜드 홈페이지, 광고에서 연결되는 랜딩페이지, 상담 신청폼과 예약 접수 페이지를 PC와 모바일에 맞춰 만듭니다.",
    chips: ["회사·브랜드 홈페이지", "광고 랜딩페이지", "상담 신청폼", "예약 접수", "모바일 화면"],
    when: "광고를 보낼 페이지가 없거나, 오래된 홈페이지를 고치고 싶을 때",
    get: "PC·모바일 웹페이지, 신청 접수 알림 설정, 수정 방법 안내",
    href: "/production/web",
    visual: (
      <div className="grid grid-cols-2 gap-3">
        {WEB_WORKS.slice(4, 6).map((w) => (
          <figure key={w.slug} className="overflow-hidden rounded-2xl bg-[#f4f4f4]">
            <Image src={w.image} alt={`${w.title} 제작 사례`} width={1000} height={1000} sizes="(min-width: 1024px) 260px, 45vw" className="h-auto w-full" />
            <figcaption className="px-3 pb-3 text-[13px] font-bold text-g700">{w.title}</figcaption>
          </figure>
        ))}
      </div>
    ),
  },
];

const COMBOS = [
  { title: "영상 + 광고 운영", chips: ["광고용 영상 제작", "메타·유튜브 광고"], desc: "광고 지면 비율에 맞춰 영상을 편집하고, 그대로 광고 소재로 운영합니다.", link: { label: "유튜브 광고 보기", href: "/marketing#google" } },
  { title: "랜딩페이지 + 고객관리", chips: ["랜딩·신청폼", "시트 연동", "자동 안내"], desc: "신청 내용을 시트로 모으고 알림톡·문자 안내까지 연결합니다.", link: { label: "고객관리·자동화 보기", href: "/automation" } },
  { title: "회사소개서 + 홈페이지", chips: ["소개서 구성", "홈페이지 문구", "디자인 통일"], desc: "같은 내용과 디자인 기준으로 문서와 홈페이지를 함께 정리합니다.", link: { label: "문서 제작 보기", href: "/production/document" } },
];

export default function ProductionPage() {
  return (
    <>
      <SubHero
        tag="제작서비스"
        current="제작서비스"
        title={
          <>
            필요한 결과물을 고르면
            <br />
            <span className="text-accent">기획부터 최종 파일까지</span> 만듭니다
          </>
        }
        desc="영상, 디자인, 문서, 홈페이지는 각각 따로 의뢰할 수 있습니다. 광고 운영을 함께 맡기지 않아도 되고, 필요하면 광고와 고객관리까지 이어서 연결합니다."
        actions={
          <>
            <Link href="/contact" className="btn btn-signal min-h-13 px-6">
              제작 상담 신청
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
            <a href="#list" className="btn min-h-13 bg-white/12 px-6 text-white hover:bg-white/20">
              결과물별로 보기
            </a>
          </>
        }
      />
      <ProductionSubnav current="/production" />

      {/* 제작 분야 4가지 */}
      <section id="list" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="list-title">
        <div className="wrap">
          <PartHead
            id="list-title"
            label="제작 분야"
            title={
              <>
                무엇을 <span className="text-accent">만들어야</span> 하나요?
              </>
            }
            desc="결과물을 기준으로 네 가지로 나눴습니다. 분야를 누르면 제작 범위, 받는 결과물, 협의 항목을 자세히 볼 수 있습니다."
          />
          <ul className="mt-12 space-y-5 sm:mt-16">
            {FIELDS.map((f, i) => (
              <li key={f.no} className="grid gap-8 rounded-4xl border border-g200 bg-white p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-10" data-reveal style={delay(i * 0.04)}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>{f.visual}</div>
                <div>
                  <p className="text-[15px] font-bold tracking-[0.02em] text-brand">
                    {f.no} · {f.en}
                  </p>
                  <h3 className="mt-2 text-h3 text-ink">{f.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-g700">{f.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {f.chips.map((c) => (
                      <li key={c} className="chip">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-5 space-y-3 border-t border-g200 pt-5 text-[16px]">
                    <div>
                      <dt className="font-bold text-g500">이럴 때</dt>
                      <dd className="mt-0.5 text-g800">{f.when}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-g500">받는 것</dt>
                      <dd className="mt-0.5 text-g800">{f.get}</dd>
                    </div>
                  </dl>
                  <Link href={f.href} className="btn btn-brand mt-6 min-h-12 px-5">
                    {f.title} 자세히
                    <ArrowIcon className="h-4.5 w-4.5" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 서비스 조합 예시 */}
      <section className="panel py-20 sm:py-28" aria-labelledby="combo-title">
        <div className="wrap">
          <PartHead id="combo-title" label="서비스 조합 예시" title={<>다른 서비스와 <span className="text-accent">이어서</span> 맡길 수 있습니다</>} desc="고정된 상품이 아니라 필요한 업무를 확인한 뒤 범위를 정합니다." />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {COMBOS.map((c, i) => (
              <li key={c.title} className="flex flex-col rounded-3xl bg-white p-6 sm:p-7" data-reveal style={delay(i * 0.07)}>
                <h3 className="text-[21px] font-extrabold tracking-[-0.04em] text-ink">{c.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {c.chips.map((chip) => (
                    <li key={chip} className="rounded-full bg-brand-50 px-3 py-1 text-[13px] font-bold text-brand">
                      {chip}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex-1 text-[16px] leading-relaxed text-g700">{c.desc}</p>
                <Link href={c.link.href} className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[16px] font-bold text-brand hover:underline">
                  {c.link.label}
                  <ArrowIcon className="h-4.5 w-4.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 제작 공통 기준 */}
      <section className="py-20 sm:py-28" aria-labelledby="rule-title">
        <div className="wrap">
          <PartHead id="rule-title" label="제작 공통 기준" title={<>시작 전에 <span className="text-accent">범위를 정하고</span> 진행합니다</>} />
          <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
            <div className="rounded-3xl border border-g200 bg-white p-6 sm:p-8" data-reveal>
              <h3 className="text-[20px] font-extrabold tracking-[-0.035em] text-ink">공통 진행</h3>
              <p className="mt-1 text-[15px] text-g500">모든 제작에 적용</p>
              <ol className="mt-5 space-y-3">
                {["상담에서 사용처와 일정 확인", "결과물 종류·수량·납기를 정한 뒤 견적 안내", "기획안 또는 시안 단계에서 방향 확인", "협의한 범위 안에서 수정", "사용처에 맞는 형식으로 최종 파일 전달"].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-[17px] leading-relaxed text-g800">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-extrabold text-white">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl bg-g50 p-6 sm:p-8" data-reveal>
              <h3 className="text-[20px] font-extrabold tracking-[-0.035em] text-g800">별도 협의</h3>
              <p className="mt-1 text-[15px] text-g500">프로젝트마다 정하는 일</p>
              <div className="mt-5">
                <CheckList tone="gray" items={["수량, 분량, 영상 길이", "수정 횟수와 범위", "현장 촬영, 인쇄, 설치 진행 여부", "유료 이미지·음원·폰트, 도메인·호스팅 등 외부 비용", "원본 파일 제공 여부", "납기와 유지관리"]} />
              </div>
            </div>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PRODUCTION_LINKS.filter((l) => l.href !== "/production").map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-16 items-center justify-between rounded-2xl border border-g200 bg-white px-5 text-[17px] font-bold text-ink transition-colors hover:border-brand hover:text-brand">
                  {l.label}
                  <ArrowIcon className="h-4.5 w-4.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCTA
        title={
          <>
            어떤 결과물이 필요한지
            <br className="hidden sm:inline" /> 알려 주세요
          </>
        }
        desc="사용처와 수량, 희망 일정을 남겨 주시면 범위와 일정을 안내드립니다."
        buttonText="제작 상담 신청"
      />
    </>
  );
}
