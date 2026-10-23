import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClosingCTA from "@/components/ClosingCTA";
import { BannerMock, CardNewsMock, ExampleTag } from "@/components/mocks/Mocks";
import { CheckList, CompareTable, PRODUCTION_LINKS, PartHead, ProductionSubnav } from "@/components/production/Parts";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "디자인 제작 | 여울디앤씨",
  "광고 배너, 카드뉴스, SNS 콘텐츠와 브로셔·리플렛·전단지·현수막 인쇄물 디자인. 하나의 메시지를 매체에 맞는 형태로 만듭니다.",
  "/production/design",
);

// SNS 프로필 그리드 구성 예시: 사진·정보·소식 게시물을 같은 규칙으로
const GRID = [
  { kind: "photo", image: "/images/0515/ind-store.png" },
  { kind: "info", text: "알아두면 좋은\n정보 3가지" },
  { kind: "photo", image: "/images/0515/op-store.png" },
  { kind: "news", text: "이번 달\n소식" },
  { kind: "photo", image: "/images/stock/creative-design.jpg" },
  { kind: "info", text: "자주 묻는\n질문" },
  { kind: "photo", image: "/images/0515/op-clinic.png" },
  { kind: "news", text: "이벤트\n안내" },
  { kind: "photo", image: "/images/stock/office-space.jpg" },
] as const;

export default function DesignPage() {
  return (
    <>
      <SubHero
        tag="제작서비스 · 디자인 제작"
        current="디자인 제작"
        parent={{ label: "제작서비스", href: "/production" }}
        siblings={PRODUCTION_LINKS}
        title={
          <>
            광고 배너부터 인쇄용 리플렛까지
            <br />
            <span className="text-accent">쓰일 곳에 맞춰</span> 디자인합니다
          </>
        }
        desc="온라인 광고 지면, SNS 게시물, 인쇄물은 크기와 읽히는 방식이 다릅니다. 하나의 메시지를 각 매체에 맞는 형태로 만들어 드립니다."
        actions={
          <Link href="/contact" className="btn btn-signal min-h-13 px-6">
            디자인 상담
            <ArrowIcon className="h-4.5 w-4.5" />
          </Link>
        }
      />
      <ProductionSubnav current="/production/design" />

      {/* 01 광고 배너 */}
      <section className="py-20 sm:py-28" aria-labelledby="banner-title">
        <div className="wrap">
          <PartHead id="banner-title" label="01 · 광고 배너" title={<>한 시안을 <span className="text-accent">매체별 사이즈</span>로</>} desc="메타, 카카오, 구글, 당근 등 매체마다 요구하는 비율이 다릅니다. 기준 시안을 정한 뒤 필요한 사이즈로 맞춰 전달합니다." />
          <div className="mt-12 grid grid-cols-2 items-end gap-4 lg:grid-cols-[1fr_0.85fr_1.6fr]">
            <BannerMock ratio="1:1" image="/images/0515/op-clinic.png" alt="진료실 사진을 쓴 정사각 배너" headline="진료 시간 안내" caption="1:1 · 피드" />
            <BannerMock ratio="4:5" image="/images/0515/op-clinic.png" alt="진료실 사진을 쓴 세로 배너" headline="진료 시간 안내" caption="4:5 · 피드" tag={false} />
            <div className="col-span-2 lg:col-span-1">
              <BannerMock ratio="1.91:1" image="/images/0515/op-clinic.png" alt="진료실 사진을 쓴 가로 배너" headline="진료 시간 안내" caption="1.91:1 · 디스플레이" tag={false} />
            </div>
          </div>
        </div>
      </section>

      {/* 02 카드뉴스 */}
      <section className="panel py-20 sm:py-28" aria-labelledby="card-title">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
            <div>
              <PartHead id="card-title" label="02 · 카드뉴스" title={<>넘겨 보며 <span className="text-accent">이해되는</span> 카드뉴스</>} desc="첫 장에서 주제를 던지고, 한 장에 한 가지 내용만 담아 끝까지 넘겨 보게 구성합니다. 문구 정리부터 함께 할 수 있습니다." />
              <div className="mt-8">
                <CheckList items={["표지·본문·마무리 장으로 흐름 구성", "본문 문구 요약과 강조 표현 정리", "인스타그램 게시용 비율로 제작"]} />
              </div>
            </div>
            <CardNewsMock />
          </div>
        </div>
      </section>

      {/* 03 SNS 콘텐츠 */}
      <section className="py-20 sm:py-28" aria-labelledby="sns-title">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
            <figure className="relative order-2 mx-auto w-full max-w-md lg:order-1">
              <ExampleTag className="left-0 top-0 -translate-y-1/2">구성 예시 · 프로필 그리드</ExampleTag>
              <ul className="grid grid-cols-3 gap-1.5 pt-4">
                {GRID.map((g, i) => (
                  <li key={i} className="relative aspect-square overflow-hidden rounded-md">
                    {g.kind === "photo" ? (
                      <Image src={g.image} alt="" fill sizes="150px" className="object-cover" />
                    ) : (
                      <span className={`flex h-full items-center justify-center whitespace-pre-line px-2 text-center text-[13px] font-extrabold leading-snug tracking-[-0.03em] ${g.kind === "info" ? "bg-night text-white" : "bg-brand-50 text-brand"}`}>{g.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </figure>
            <div className="order-1 lg:order-2">
              <PartHead id="sns-title" label="03 · SNS 콘텐츠" title={<>채널이 <span className="text-accent">정돈되어 보이는</span> 게시물</>} desc="게시물 하나하나보다 프로필에서 모아 봤을 때의 인상이 중요합니다. 색과 글자 규칙을 정해 정보 게시물, 소식, 이벤트를 일관되게 만듭니다." />
              <p className="mt-6 text-[16px] text-g600">
                게시물 제작과 별도로 게시·반응 관리까지 필요하면{" "}
                <Link href="/marketing#sns" className="font-bold text-brand underline underline-offset-4">
                  SNS 채널 운영
                </Link>
                을 함께 확인해 보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 인쇄물 */}
      <section id="print" className="panel py-20 sm:py-28" aria-labelledby="print-title">
        <div className="wrap">
          <PartHead id="print-title" label="04 · 인쇄물 디자인" title={<>브로셔·리플렛, <span className="text-accent">전단지·현수막</span></>} desc="인쇄 사양(크기, 접지, 재단 여백)에 맞춘 인쇄용 파일을 만듭니다. 인쇄 진행은 원하실 때 별도로 협의합니다." />
          <ul className="mt-12 grid gap-4 md:grid-cols-[1.4fr_0.8fr] lg:grid-cols-[1.3fr_0.7fr_1.2fr]">
            <li>
              <figure className="relative flex aspect-[1.6/1] overflow-hidden rounded-2xl bg-white p-4 shadow-soft">
                <ExampleTag />
                {[0, 1, 2].map((p) => (
                  <span key={p} className={`flex-1 border-dashed border-g200 p-3 pt-10 ${p > 0 ? "border-l" : ""}`}>
                    <span className={`block h-1/3 rounded-md ${p === 1 ? "bg-night" : "bg-brand-50"}`} />
                    <span className="mt-3 block h-1.5 w-4/5 rounded-full bg-g200" />
                    <span className="mt-1.5 block h-1.5 w-3/5 rounded-full bg-g200" />
                  </span>
                ))}
              </figure>
              <p className="mt-2 text-[14px] font-semibold text-g600">3단 리플렛 · A4 접지</p>
            </li>
            <li>
              <figure className="relative mx-auto flex aspect-[1/1.414] max-w-56 flex-col overflow-hidden rounded-2xl bg-night p-5 shadow-soft">
                <ExampleTag />
                <span className="mt-auto text-[18px] font-extrabold leading-tight tracking-[-0.04em] text-white">
                  오픈
                  <br />
                  기념 안내
                </span>
                <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-white/30" />
                <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-white/30" />
              </figure>
              <p className="mt-2 text-center text-[14px] font-semibold text-g600">전단지 · A4</p>
            </li>
            <li className="md:col-span-2 lg:col-span-1">
              {/* 문구를 아래쪽에 두어 왼쪽 위 '구성 예시' 표시와 겹치지 않게 */}
              <figure className="relative flex aspect-[3.2/1] items-end justify-between gap-3 overflow-hidden rounded-2xl bg-brand px-6 pb-4 shadow-soft sm:aspect-[4.5/1]">
                <ExampleTag />
                <span className="text-[clamp(16px,2vw,24px)] font-extrabold tracking-[-0.04em] text-white">현수막 문구 자리</span>
                <span className="rounded-full bg-white px-3 py-1 text-[12px] font-bold text-brand">1668-0000</span>
              </figure>
              <p className="mt-2 text-[14px] font-semibold text-g600">현수막 · 가로형 (실제 규격은 설치 장소에 맞춰 협의)</p>
            </li>
          </ul>
        </div>
      </section>

      {/* 디자인과 인쇄의 구분 */}
      <section className="py-20 sm:py-28" aria-labelledby="print-scope-title">
        <div className="wrap">
          <PartHead id="print-scope-title" label="디자인과 인쇄의 구분" title={<>디자인 파일까지가 <span className="text-accent">기본</span>입니다</>} />
          <div className="mt-12">
            <CompareTable
              caption="디자인 제작과 인쇄·설치 진행 비교"
              columns={["디자인 제작", "인쇄·설치까지 진행"]}
              rows={[
                ["결과물", "인쇄용 파일(PDF 등)과 온라인용 이미지 파일", "인쇄된 실물, 필요 시 배송·현장 설치"],
                ["여울디앤씨가 하는 일", "시안, 수정, 인쇄 사양에 맞춘 파일 정리", "디자인과 함께 인쇄소 발주, 교정 확인, 납품 일정 관리"],
                ["별도 협의", "사이즈 종류와 수량, 수정 범위", "인쇄 수량, 용지·후가공, 배송·설치 비용"],
                ["고객 확인", "문구·정보의 정확성, 최종 시안 승인", "인쇄 전 최종 교정 승인, 현수막 설치 장소 허가"],
              ]}
            />
          </div>
        </div>
      </section>

      <ClosingCTA title={<>필요한 디자인을 알려 주세요</>} desc="사용처와 수량, 일정을 남겨 주시면 범위를 안내드립니다." buttonText="디자인 상담" />
    </>
  );
}
