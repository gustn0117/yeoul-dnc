import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import ClosingCTA from "@/components/ClosingCTA";
import { ExampleTag } from "@/components/mocks/Mocks";
import SubHero from "@/components/ui/SubHero";
import { ArrowIcon } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "고객관리·자동화 | 여울디앤씨",
  "문의가 들어오면 고객 정보를 시트에 정리하고, 담당자 알림과 고객 안내 메시지를 자동으로 보냅니다. SNS 댓글·DM 자동화, 홈페이지 기능 개선, 알림톡·문자 발송.",
  "/automation",
);

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as CSSProperties;

/* 문의 한 건이 들어왔을 때의 흐름 — 각 단계의 화면은 구성 예시 */
const FLOW: { title: string; desc: string; screen: ReactNode }[] = [
  {
    title: "문의가 들어오면",
    desc: "홈페이지 신청서, 광고 신청서, SNS DM으로 상담 문의가 들어옵니다.",
    screen: (
      <div className="space-y-2">
        <p className="text-[12px] font-bold text-g500">상담 신청</p>
        {["이름", "연락처", "문의 항목"].map((f) => (
          <span key={f} className="flex h-8 items-center rounded-lg border border-g200 bg-white px-2.5 text-[12px] text-g400">
            {f}
          </span>
        ))}
        <span className="flex h-8 items-center justify-center rounded-lg bg-brand text-[12px] font-bold text-white">신청하기</span>
      </div>
    ),
  },
  {
    title: "고객 정보가 정리되고",
    desc: "이름·연락처·문의 내용이 고객관리 시트에 한 줄씩 자동으로 쌓입니다.",
    screen: (
      <div className="overflow-hidden rounded-lg border border-g200 bg-white text-[11.5px]">
        <div className="grid grid-cols-[1fr_1fr_0.9fr] bg-g50 px-2 py-1.5 font-bold text-g500">
          <span>접수</span>
          <span>이름</span>
          <span>상태</span>
        </div>
        {[
          ["오늘", "고객 C", "신규", "bg-blue-100 text-blue-700"],
          ["어제", "고객 B", "연락 중", "bg-amber-100 text-amber-800"],
          ["10/20", "고객 A", "완료", "bg-emerald-100 text-emerald-700"],
        ].map(([day, name, state, cls]) => (
          <div key={name} className="grid grid-cols-[1fr_1fr_0.9fr] items-center border-t border-g100 px-2 py-1.5 text-g700">
            <span>{day}</span>
            <span>{name}</span>
            <span className={`justify-self-start rounded px-1.5 py-0.5 text-[10.5px] font-bold ${cls}`}>{state}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "담당자에게 바로 알리고",
    desc: "담당자 휴대폰으로 새 문의 알림이 가서, 놓치지 않고 바로 연락할 수 있습니다.",
    screen: (
      <div className="rounded-xl bg-[#fee500]/25 p-3">
        <p className="text-[11px] font-bold text-g600">알림톡 · 지금</p>
        <p className="mt-1.5 text-[12.5px] font-bold leading-snug text-ink">새 상담 신청이 접수되었습니다.</p>
        <p className="mt-1 text-[11.5px] leading-snug text-g700">업체명 · 담당자 · 연락처 · 문의 내용</p>
        <span className="mt-2 flex h-7 items-center justify-center rounded-md bg-white text-[11.5px] font-bold text-g700">관리자 페이지 열기</span>
      </div>
    ),
  },
  {
    title: "고객에게 안내를 보냅니다",
    desc: "고객에게는 접수 확인과 다음 안내가 자동으로 전달됩니다. 예약 전날 일정 알림도 보낼 수 있습니다.",
    screen: (
      <div className="space-y-2">
        <p className="text-center text-[10.5px] text-g500">오전 11:20</p>
        <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white p-2.5 text-[12px] leading-relaxed text-g800 shadow-sm">
          [업체명] 상담 신청이 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.
        </div>
      </div>
    ),
  },
];

const ITEMS = [
  { title: "SNS 댓글·DM 자동화", desc: "특정 댓글에 자동으로 답글과 DM을 보내고, 상품 정보나 상담·예약 링크를 안내합니다.", eg: "게시물에 ‘가격’ 댓글이 달리면 답글과 함께 상품 안내·상담 링크를 DM으로 보냅니다." },
  { title: "홈페이지 기능 추가·개선", desc: "상담 신청, 예약, 고객관리 등 필요한 기능을 추가하고 기존 홈페이지의 불편한 부분을 개선합니다.", eg: "상담 신청·예약 요청 기능을 붙이고, 모바일에서 신청 버튼이 잘 보이게 고칩니다." },
  { title: "고객관리·시트 연동", desc: "여러 경로로 들어오는 고객 정보를 엑셀·구글 시트에 자동으로 모아 상담 이력과 진행 상태를 관리합니다.", eg: "홈페이지·광고 신청서·전화 문의를 한 시트에 모으고 상담 상태를 표시합니다." },
  { title: "알림톡·문자 자동 발송", desc: "접수 확인, 예약 안내, 일정 알림, 후속 안내를 필요한 시점에 자동으로 전달합니다.", eg: "접수 즉시 확인 문자, 예약 전날 일정 알림, 상담 후 후속 안내를 보냅니다." },
  { title: "맞춤 업무 자동화", desc: "담당자 알림, 일정 관리, 자료 취합, 보고서 정리 등 반복되는 업무를 회사의 운영 방식에 맞춰 자동화합니다.", eg: "매일 아침 전날 들어온 문의를 정리해 담당자에게 보내고, 주간 정리를 자동으로 만듭니다." },
];

export default function AutomationPage() {
  return (
    <>
      <SubHero
        tag="고객관리·자동화"
        current="고객관리·자동화"
        title={
          <>
            반복 업무는 줄이고,
            <br />
            <span className="text-accent">고객 관리는 더 간편하게.</span>
          </>
        }
        desc="업종과 업무 방식에 맞춰 필요한 기능을 추가하고, 흩어진 업무를 연결합니다."
        actions={
          <Link href="/contact" className="btn btn-signal min-h-13 px-6">
            맞춤 자동화 상담하기
            <ArrowIcon className="h-4.5 w-4.5" />
          </Link>
        }
      />

      {/* 활용 장면: 문의 한 건이 들어오면 */}
      <section className="py-20 sm:py-28" aria-labelledby="flow-title">
        <div className="wrap">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2.5 text-[15px] font-bold text-brand" data-reveal>
              <span className="h-0.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              이렇게 쓰입니다
            </p>
            <h2 id="flow-title" className="mt-4 text-h2" data-reveal style={delay(0.06)}>
              문의 한 건이 들어오면,
              <br />
              <span className="text-accent">그다음 일은 자동으로</span>
            </h2>
            <p className="mt-5 text-lead text-g700" data-reveal style={delay(0.12)}>
              고객 정보를 정리하고, 담당자에게 알리고, 고객에게 안내 메시지를 보내는 일을 사람이 하나하나 챙기지 않아도 되게 연결합니다.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16" data-draw>
            {/* 데스크톱: 네 단계를 잇는 흐름 선 */}
            <svg aria-hidden="true" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none" className="absolute inset-x-[10%] top-[4.25rem] hidden h-10 w-[80%] lg:block">
              <path d="M0 20 C 150 0, 250 40, 400 20 S 650 0, 800 20 S 1050 40, 1200 20" pathLength={1} className="flow-path" stroke="#2563eb" strokeOpacity={0.35} strokeWidth={3} strokeLinecap="round" />
            </svg>
            <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FLOW.map((step, i) => (
                <li key={step.title} className="flex flex-col" data-reveal style={delay(i * 0.1)}>
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-night text-[18px] font-extrabold text-white ring-8 ring-white">{i + 1}</span>
                  <div className="relative mt-5 flex-1 rounded-3xl border border-g200 bg-g50 p-4 pt-11">
                    <ExampleTag />
                    {step.screen}
                  </div>
                  <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.035em] text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-g700">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5가지 기능 */}
      <section className="panel py-20 sm:py-28" aria-labelledby="items-title">
        <div className="wrap">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2.5 text-[15px] font-bold text-brand">
              <span className="h-0.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              맡길 수 있는 일
            </p>
            <h2 id="items-title" className="mt-4 text-h2">
              필요한 기능만 골라 <span className="text-accent">연결합니다</span>
            </h2>
          </div>
          <ol className="mt-12 divide-y divide-g200 rounded-4xl bg-white px-5 sm:px-8">
            {ITEMS.map((item, i) => (
              <li key={item.title} className="grid gap-3 py-7 lg:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8" data-reveal style={delay(i * 0.05)}>
                <span className="text-[28px] font-extrabold leading-none tracking-[-0.04em] text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[22px] font-extrabold tracking-[-0.04em] text-ink sm:text-[24px]">{item.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-g700">{item.desc}</p>
                </div>
                <p className="self-center rounded-2xl bg-brand-50 px-5 py-4 text-[16px] leading-relaxed text-g800">
                  <b className="mr-1.5 font-bold text-brand">예를 들면</b>
                  {item.eg}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[15px] text-g600">적용 가능한 기능과 연동 범위는 사용 중인 서비스와 계정 환경에 따라 달라질 수 있습니다.</p>
        </div>
      </section>

      <ClosingCTA
        title={<>우리 업무에는 어떻게 적용할 수 있을까요?</>}
        desc="지금 하고 계신 업무를 알려주시면 필요한 기능과 연결 방법을 제안합니다."
        buttonText="맞춤 자동화 상담하기"
      />
    </>
  );
}
