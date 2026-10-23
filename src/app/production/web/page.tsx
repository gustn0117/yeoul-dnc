import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import { CompareTable, PRODUCTION_LINKS, PartHead, ProductionSubnav } from "@/components/production/Parts";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { WEB_WORKS } from "@/lib/offerings";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "홈페이지 제작 | 여울디앤씨",
  "회사·브랜드 홈페이지, 광고 랜딩페이지, 상담 신청폼과 예약 접수 페이지를 PC와 모바일에 맞춰 만들고, 신청 알림까지 연결합니다.",
  "/production/web",
);

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

const PAGES = [
  { title: "회사·브랜드 홈페이지", desc: "회사 소개, 서비스, 사례, 연락처를 담는 대표 사이트. 메뉴 구성과 문구 정리부터 함께합니다." },
  { title: "광고 랜딩페이지", desc: "광고를 누른 사람이 도착하는 한 페이지. 광고 문구와 이어지는 내용, 신청 버튼에 집중합니다." },
  { title: "상담 신청폼", desc: "필요한 정보만 묻는 신청 양식. 개인정보 동의 문구와 접수 알림을 함께 설정합니다." },
  { title: "예약 접수 페이지", desc: "희망 날짜·시간을 받아 담당자가 확인 후 확정하는 예약 요청 페이지입니다." },
  { title: "모바일 화면 구성", desc: "방문자 대부분이 보는 휴대폰 화면에서 글자 크기, 버튼 위치, 신청 흐름을 먼저 맞춥니다." },
];

export default function WebPage() {
  return (
    <>
      <SubHero
        tag="제작서비스 · 홈페이지 제작"
        current="홈페이지 제작"
        parent={{ label: "제작서비스", href: "/production" }}
        siblings={PRODUCTION_LINKS}
        title={
          <>
            홈페이지와 랜딩페이지,
            <br />
            <span className="text-accent">신청폼까지</span> 만들고 연결합니다
          </>
        }
        desc="회사를 소개하는 홈페이지, 광고에서 연결되는 랜딩페이지, 상담 신청폼과 예약 접수 페이지를 PC와 모바일에 맞춰 만듭니다. 신청이 들어오면 담당자에게 알림이 가도록 연결할 수 있습니다."
        actions={
          <>
            <Link href="/contact" className="btn btn-signal min-h-13 px-6">
              홈페이지 상담
              <ArrowIcon className="h-4.5 w-4.5" />
            </Link>
            <a href="#works" className="btn min-h-13 bg-white/12 px-6 text-white hover:bg-white/20">
              제작 사례 보기
            </a>
          </>
        }
      />
      <ProductionSubnav current="/production/web" />

      {/* 제작 사례 */}
      <section id="works" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="works-title">
        <div className="wrap">
          <PartHead id="works-title" label="제작 사례" title={<>업종과 목적에 맞춰 <span className="text-accent">만든 홈페이지</span></>} desc="기관·단체, 교육, 병원, 생활서비스, 전문 서비스까지 실제로 제작한 사이트입니다." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {WEB_WORKS.map((w, i) => (
              <li key={w.slug} className="flex flex-col overflow-hidden rounded-3xl border border-g200 bg-white" data-reveal style={delay((i % 4) * 0.06)}>
                <div className="bg-[#f4f4f4]">
                  <Image src={w.image} alt={`${w.title} 화면`} width={1000} height={1000} sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" className="h-auto w-full" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[13px] font-bold text-brand">
                    {w.type} · {w.industry}
                  </p>
                  <h3 className="mt-1.5 text-[18px] font-extrabold leading-snug tracking-[-0.035em] text-ink">{w.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-g700">{w.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 만드는 페이지 5가지 */}
      <section className="panel py-20 sm:py-28" aria-labelledby="pages-title">
        <div className="wrap">
          <PartHead id="pages-title" label="만드는 페이지" title={<>목적에 따라 <span className="text-accent">다섯 가지</span>로 나눠 봅니다</>} />
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PAGES.map((p, i) => (
              <li key={p.title} className="rounded-3xl bg-white p-6" data-reveal style={delay(i * 0.06)}>
                <span className="text-[15px] font-extrabold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[19px] font-extrabold leading-snug tracking-[-0.035em] text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-g700">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 예약 기능의 구분 */}
      <section id="reserve" className="py-20 sm:py-28" aria-labelledby="reserve-title">
        <div className="wrap">
          <PartHead id="reserve-title" label="예약 기능의 구분" title={<>예약 요청 접수와 <span className="text-accent">실시간 예약</span>은 다릅니다</>} desc="예약 접수 페이지의 기본은 신청을 받는 기능입니다. 빈 시간을 실시간으로 보여주고 바로 확정하거나 결제까지 받으려면 별도 시스템과 계약이 필요해 따로 협의합니다." />
          <div className="mt-12">
            <CompareTable
              caption="예약 요청 접수와 실시간 예약 확정·결제 비교"
              columns={[
                <>
                  예약 요청 접수 <span className="ml-1 rounded-full bg-g100 px-2 py-0.5 text-[12px] font-bold text-g600">기본</span>
                </>,
                <>
                  실시간 예약 확정·결제 <span className="ml-1 rounded-full bg-brand-50 px-2 py-0.5 text-[12px] font-bold text-brand">별도 협의</span>
                </>,
              ]}
              rows={[
                ["고객이 하는 일", "희망 날짜·시간을 골라 요청을 보냄", "남은 시간을 보고 바로 예약하고 결제"],
                ["확정 방식", "담당자가 확인 후 연락·문자로 확정", "시스템이 즉시 확정"],
                ["필요한 것", "신청폼, 접수 알림, 관리 시트", "예약 관리 솔루션 또는 개발, 결제대행(PG) 계약, 취소·환불 규정"],
                ["함께 연결", "접수 확인 문자·알림톡 (고객관리·자동화)", "솔루션 조건에 따라 검토"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* 제작과 유지관리의 구분 */}
      <section className="panel py-20 sm:py-28" aria-labelledby="maintain-title">
        <div className="wrap">
          <PartHead id="maintain-title" label="제작과 유지관리의 구분" title={<>만드는 일과 <span className="text-accent">관리하는 일</span>을 나눠 정합니다</>} />
          <div className="mt-12">
            <CompareTable
              caption="홈페이지 제작과 유지관리 비교"
              columns={["홈페이지 제작", "유지관리 (별도 협의)"]}
              rows={[
                ["하는 일", "구성 설계, 디자인, 구축, 신청폼·접수 알림 설정, 공개", "내용 수정, 기능 추가, 오류 대응, 도메인·호스팅 관리"],
                ["받는 것", "PC·모바일 웹페이지, 관리 방법 안내", "합의한 범위의 수정·관리"],
                ["상담 시 확정", "페이지 수, 기능, 일정, 측정 코드 설치", "관리 범위, 기간, 요청 방식"],
                ["별도 비용", "도메인·호스팅, 유료 플러그인·외부 서비스 이용료, 실시간 예약·결제 연동", "관리 범위에 따라"],
              ]}
            />
          </div>
        </div>
      </section>

      <ClosingCTA title={<>새로 만들까요, 고칠까요?</>} desc="신규 제작인지 개편인지와 필요한 기능을 알려 주시면 구성안을 함께 잡아 드립니다." buttonText="홈페이지 상담" />
    </>
  );
}
