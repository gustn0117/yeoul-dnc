import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import PortfolioTabs from "@/components/portfolio/PortfolioTabs";
import SectionHead from "@/components/ui/SectionHead";
import SubHero from "@/components/ui/SubHero";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "포트폴리오 | 여울디앤씨",
  "홈페이지·랜딩, 브랜드형·정보형 광고 디자인, 영상 제작, 문서·제안서까지 여울디앤씨가 만든 결과물을 분야별로 보여드립니다.",
  "/cases",
);

// 분야 구성은 고객사 최종 요청(2026-11-02): 홈페이지·랜딩 / 브랜드형 광고 / 정보형 광고 / 영상 제작 / 문서·제안서
export default function CasesPage() {
  return (
    <>
      <SubHero
        tag="포트폴리오 · Portfolio"
        current="포트폴리오"
        title={
          <>
            필요했던 일과 담당한 일을
            <br />
            <span className="text-accent">결과물로</span> 보여드립니다
          </>
        }
        desc="홈페이지·랜딩, 광고 디자인, 영상, 문서·제안서까지 여울디앤씨가 만든 결과물을 분야별로 모았습니다."
      />

      <section className="py-16 sm:py-24" aria-labelledby="works-title">
        <div className="wrap">
          <SectionHead
            align="split"
            label="분야별 작업물"
            title={
              <span id="works-title">
                보고 싶은 분야를
                <br />
                <span className="text-accent">골라 보세요</span>
              </span>
            }
            desc="광고 디자인은 업종별로, 영상은 5초 미리보기로 보여드립니다. 작업물은 들어오는 대로 계속 추가합니다."
          />
          <div className="mt-10 sm:mt-12">
            <PortfolioTabs />
          </div>
        </div>
      </section>

      <ClosingCTA
        title={<>비슷한 작업이 필요하신가요?</>}
        desc="참고하고 싶은 작업을 알려 주시면 범위와 일정을 함께 정리해 드립니다."
        buttonText="상담 신청"
      />
    </>
  );
}
