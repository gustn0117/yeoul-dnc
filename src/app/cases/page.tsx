import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "광고사례 | 여울디앤씨",
  description: "실제 운영 사례를 통해 광고 진행 방식을 확인하실 수 있습니다.",
};

const cases = [
  {
    industry: "분양 광고",
    goal: "관심 고객 DB 확보",
    channels: "메타 광고 + 문자 마케팅",
    method: "리드폼 광고 후 후속 문자 발송",
    result: "문의 흐름 개선 및 재접촉 효율 확보",
    comment: "유입 이후 후속 관리까지 연결한 구조",
    accent: "from-blue-500 to-blue-600",
  },
  {
    industry: "병원 광고",
    goal: "상담 예약 유입",
    channels: "네이버 광고 + 메타 광고",
    method: "검색 유입과 관심사 타겟팅 병행",
    result: "예약 문의 확보 중심 운영",
    comment: "검색형과 노출형 광고를 함께 운영한 사례",
    accent: "from-green-500 to-green-600",
  },
  {
    industry: "지역 자영업 광고",
    goal: "방문 및 전화 문의 유도",
    channels: "당근 광고 + 메타 광고",
    method: "지역 타겟팅 기반 생활권 노출 강화",
    result: "생활권 고객 유입 확대",
    comment: "지역 광고에 맞는 조합형 운영 사례",
    accent: "from-orange-500 to-orange-600",
  },
  {
    industry: "교육 광고",
    goal: "수강 상담 문의 유도",
    channels: "카카오 광고 + 네이버 광고",
    method: "카카오 채널 추가 유도 + 검색 광고 병행",
    result: "카카오 채널 기반 상담 전환 증가",
    comment: "검색 유입과 카카오 채널을 연결한 운영",
    accent: "from-purple-500 to-purple-600",
  },
  {
    industry: "인테리어 광고",
    goal: "견적 문의 확보",
    channels: "메타 광고 + 구글 광고",
    method: "관심사 타겟팅 + 리타겟팅 병행 운영",
    result: "견적 문의 전환율 개선",
    comment: "노출형과 리타겟팅을 조합한 전환 중심 운영",
    accent: "from-teal-500 to-teal-600",
  },
  {
    industry: "프랜차이즈 광고",
    goal: "가맹 문의 유입",
    channels: "유튜브 광고 + 메타 광고",
    method: "영상 기반 브랜드 인지 + 리드폼 수집",
    result: "브랜드 인지도 상승 및 가맹 문의 확보",
    comment: "영상과 DB 수집을 단계별로 연결한 사례",
    accent: "from-amber-500 to-amber-600",
  },
];

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-4">Cases</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">광고사례</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">
            실제 운영 사례를 통해 광고 진행 방식을 확인하실 수 있습니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3">
            업종별로 어떤 채널을 활용했고 어떤 방향으로 운영했는지 보여드립니다
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cases.map((c, i) => (
              <div
                key={i}
                className="group p-7 lg:p-9 rounded-3xl border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1.5 h-8 rounded-full bg-linear-to-b ${c.accent}`} />
                  <span className="text-deep-navy font-bold text-lg">{c.industry}</span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "목표", value: c.goal },
                    { label: "채널", value: c.channels },
                    { label: "운영 방식", value: c.method },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 text-sm">
                      <span className="text-slate-400 shrink-0 w-20 font-medium">{row.label}</span>
                      <span className="text-slate-700">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex gap-4 text-sm">
                    <span className="text-slate-400 shrink-0 w-20 font-medium">결과</span>
                    <span className="text-accent-blue font-semibold">{c.result}</span>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <p className="text-sm text-slate-500 italic">&ldquo;{c.comment}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="우리 업종도 비슷한 방식으로 진행 가능한가요?"
        description="맞는 채널과 운영 방향부터 상담해드립니다"
        buttonText="상담 요청하기"
        variant="dark"
      />
    </>
  );
}
