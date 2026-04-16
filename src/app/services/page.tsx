import type { Metadata } from "next";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";
import {
  IconKakao, IconSearch, IconMeta, IconYoutube, IconGlobe, IconMail, IconCarrot, IconBuilding, IconCheck, IconCode, IconArrowRight,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "광고상품 / 서비스 | 여울디앤씨",
  description: "필요한 채널만 골라, 업종에 맞게 설계합니다. 메타, 네이버, 카카오, 유튜브, 구글 등 다양한 채널을 목적에 맞게 조합해 운영합니다.",
};

const categories = [
  { name: "퍼포먼스 광고", desc: "문의/상담/DB 수집 등 전환 목적에 집중하는 광고" },
  { name: "브랜드 인지도 광고", desc: "영상·노출 기반으로 브랜드를 알리는 광고" },
  { name: "DB 수집 광고", desc: "리드폼/랜딩 기반으로 관심 고객 DB를 확보하는 광고" },
  { name: "재접촉 마케팅", desc: "기존 고객·이탈 고객에게 다시 접근하는 광고" },
  { name: "업종 특화 광고", desc: "부동산/병원/지역 등 업종에 맞는 전문 채널 운영" },
];

const services = [
  {
    name: "메타 광고",
    Icon: IconMeta,
    oneLiner: "관심사 기반 타겟팅과 리드 수집에 강한 광고",
    products: ["인스타그램 피드/스토리/릴스", "페이스북 피드", "리드폼 광고"],
    points: ["잠재고객 먼저 노출", "DB 수집/상담 유도에 적합", "시각 소재 활용 업종에 강함"],
  },
  {
    name: "네이버 광고",
    Icon: IconSearch,
    oneLiner: "검색 수요 기반 문의 확보에 강한 광고",
    products: ["파워링크", "브랜드검색", "성과형 디스플레이"],
    points: ["이미 관심 있는 고객 확보", "검색 기반 문의 유입", "병원/부동산/서비스업에 적합"],
  },
  {
    name: "카카오 광고",
    Icon: IconKakao,
    oneLiner: "상담 유입과 재접촉 운영에 강한 광고",
    products: ["키워드 광고", "디스플레이 광고", "카카오톡 채널 메시지", "비즈메시지"],
    points: ["상담 유입이 중요한 업종", "기존 고객 재접촉", "빠른 커뮤니케이션"],
  },
  {
    name: "유튜브 광고",
    Icon: IconYoutube,
    oneLiner: "브랜드 인지도와 신뢰 형성에 강한 광고",
    products: ["인스트림", "범퍼", "인피드", "Shorts 광고"],
    points: ["브랜드 인지도 향상", "영상 콘텐츠 활용", "신뢰 형성이 중요한 업종"],
  },
  {
    name: "구글 광고",
    Icon: IconGlobe,
    oneLiner: "검색+디스플레이+리타겟팅 확장형 광고",
    products: ["검색 광고", "디스플레이", "디맨드젠", "실적 최대화"],
    points: ["다양한 지면 확장", "리타겟팅 필요 시", "자동 최적화 기반"],
  },
  {
    name: "문자 마케팅",
    Icon: IconMail,
    oneLiner: "기존 고객/확보 DB 대상 직접 전달 광고",
    products: ["SMS", "LMS", "MMS"],
    points: ["재문의 유도", "방문/예약 안내", "기존 고객 재접촉"],
  },
  {
    name: "당근/지역 광고",
    Icon: IconCarrot,
    oneLiner: "지역 기반 고객 유입에 강한 로컬 광고",
    products: ["피드 광고", "검색 광고", "카탈로그 광고"],
    points: ["지역 상권 업종", "생활권 고객 유입", "근거리 서비스"],
  },
  {
    name: "부동산 특화 광고",
    Icon: IconBuilding,
    oneLiner: "부동산 관심 고객이 모인 플랫폼 기반 광고",
    products: ["호갱노노", "직방", "다방", "네모"],
    points: ["분양/임대/상가", "지역 부동산 마케팅"],
  },
  {
    name: "홈페이지 제작",
    Icon: IconCode,
    oneLiner: "광고와 연동되는 전환형 랜딩/홈페이지 제작",
    products: ["기업 홈페이지", "랜딩페이지", "모바일 최적화"],
    points: ["전환형 페이지 필요 시", "홈페이지 리뉴얼", "모바일 문의 전환 중요 시"],
  },
];

const industryFit = [
  { industry: "분양", desc: "DB 유입과 후속 문자, 재접촉 구조가 중요" },
  { industry: "병원", desc: "예약 문의와 신뢰 형성, 검색+노출 병행" },
  { industry: "교육", desc: "수강 상담 유도, 카카오 채널 연결" },
  { industry: "지역 자영업", desc: "생활권 고객 유입, 당근+메타 조합" },
  { industry: "상담형 서비스", desc: "문의 전환 중심, 리드폼+검색형" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">광고상품 / 서비스</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">
            필요한 채널만 골라, 업종에 맞게 설계합니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3 max-w-2xl">
            메타/네이버/카카오/유튜브/구글을 비롯해, 지역/지도/문자/부동산 특화 채널까지 예산과 목적에 맞게 조합합니다.
          </p>
        </div>
      </section>

      {/* 1. 서비스 카테고리 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Categories</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              광고 상품은 많아 보여야 하는 것이 아니라, 이해가 쉬워야 합니다
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {categories.map((c) => (
              <div key={c.name} className="p-5 rounded-2xl border border-slate-100 text-center">
                <h3 className="text-sm font-bold text-deep-navy mb-1">{c.name}</h3>
                <p className="text-[11px] text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 채널별 카드 */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((svc) => (
              <div key={svc.name} className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/8 flex items-center justify-center">
                    <svc.Icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-deep-navy">{svc.name}</h3>
                    <p className="text-xs text-slate-500">{svc.oneLiner}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">운영 상품</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.products.map((p) => (
                        <span key={p} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-100">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">이런 경우에 적합</p>
                    <ul className="space-y-2">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-slate-600">
                          <IconCheck className="w-3 h-3 text-accent-blue shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 운영 방식 요약 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Process</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
            분석부터 제작, 운영, 보완까지 한 번에 연결됩니다
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            업종과 예산을 먼저 확인한 뒤, 목표에 맞는 채널과 문구 방향을 정리하고, 소재 제작 및 세팅 후 운영/최적화까지 이어집니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["전략 수립", "소재 제작", "채널 세팅", "운영 및 최적화", "결과 체크"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 bg-accent-blue/8 text-accent-blue text-xs font-semibold rounded-lg">{step}</span>
                {i < 4 && <span className="text-slate-300">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 차별화 포인트 */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Difference</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              불필요한 채널 권유보다, 필요한 채널 조합이 더 중요합니다
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              여울디앤씨는 무조건 많은 플랫폼을 제안하기보다 업종/목표/예산에 맞는 현실적인 채널 조합을 우선합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {["업종 맞춤 운영", "제작과 운영 통합", "상담 전환 중심", "장기 운영 가능 구조"].map((t) => (
              <div key={t} className="bg-white p-5 rounded-2xl border border-slate-100 text-center">
                <p className="text-sm font-bold text-deep-navy">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 업종 맞춤 설계 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-blue font-semibold text-xs tracking-widest uppercase mb-3">Industry</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
              같은 광고라도, 업종이 다르면 설계 방식이 달라집니다
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {industryFit.map((item) => (
              <div key={item.industry} className="p-5 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-accent-blue tracking-wider uppercase mb-2">{item.industry}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <SectionCTA
        title="정해진 틀보다, 업종에 맞는 구성으로 제안드립니다"
        description="패키지를 획일적으로 보여주기보다 업종과 목표에 맞춰 설계하는 방식이 가장 자연스럽습니다."
        buttonText="맞춤 상담 받기"
        variant="dark"
      />
    </>
  );
}
