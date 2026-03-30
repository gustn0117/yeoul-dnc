import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";
import {
  IconKakao, IconSearch, IconMeta, IconYoutube, IconGlobe, IconMail, IconCarrot, IconBuilding, IconCheck, IconCode,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "광고상품 / 서비스 | 여울디앤씨",
  description: "다양한 온라인 광고 채널을 업종과 목적에 맞게 제안합니다. 검색형, SNS형, 영상형, 메시지형 광고까지 전환 중심으로 운영합니다.",
};

const services = [
  {
    name: "카카오 광고",
    Icon: IconKakao,
    accent: "text-yellow-500",
    accentBg: "bg-yellow-50",
    desc: "카카오톡 기반으로 상담 유입과 재접촉에 강한 광고입니다.",
    products: ["키워드 광고", "성과형 디스플레이 광고", "보장형 디스플레이 광고", "카카오톡 채널 메시지", "비즈메시지"],
    points: ["상담 유입이 중요한 업종", "기존 고객 재접촉이 필요한 업종", "빠른 커뮤니케이션이 중요한 업종"],
  },
  {
    name: "네이버 광고",
    Icon: IconSearch,
    accent: "text-green-500",
    accentBg: "bg-green-50",
    desc: "검색 의도가 높은 고객을 직접 확보할 수 있는 대표 광고입니다.",
    products: ["파워링크", "브랜드검색", "성과형 디스플레이 광고"],
    points: ["이미 관심 있는 고객을 잡고 싶은 경우", "검색 기반 문의 유입이 중요한 업종", "병원, 부동산, 서비스업 등과 잘 맞는 채널"],
  },
  {
    name: "메타 광고",
    Icon: IconMeta,
    accent: "text-blue-500",
    accentBg: "bg-blue-50",
    desc: "인스타그램 페이스북 기반 관심사 타겟팅 광고입니다.",
    products: ["인스타그램 피드 광고", "인스타그램 스토리 광고", "인스타그램 릴스 광고", "페이스북 피드 광고", "리드폼 광고"],
    points: ["잠재고객에게 먼저 노출하고 싶은 경우", "DB 수집, 상담 문의 유도에 적합", "시각적인 소재 활용이 중요한 업종"],
  },
  {
    name: "유튜브 광고",
    Icon: IconYoutube,
    accent: "text-red-500",
    accentBg: "bg-red-50",
    desc: "영상 중심으로 브랜드 인지도와 신뢰를 높이는 광고입니다.",
    products: ["인스트림 광고", "범퍼 광고", "인피드 광고", "Shorts 광고"],
    points: ["브랜드 인지도를 높이고 싶은 경우", "영상 콘텐츠 활용이 가능한 경우", "신뢰감 형성이 중요한 업종"],
  },
  {
    name: "구글 광고",
    Icon: IconGlobe,
    accent: "text-sky-500",
    accentBg: "bg-sky-50",
    desc: "검색 디스플레이 자동 최적화를 함께 활용하는 확장형 광고입니다.",
    products: ["검색 광고", "디스플레이 광고", "디맨드젠 광고", "실적 최대화 캠페인"],
    points: ["다양한 지면에서 광고를 확장하고 싶은 경우", "리타겟팅이 필요한 경우", "자동 최적화 기반 운영을 원하는 경우"],
  },
  {
    name: "문자 마케팅",
    Icon: IconMail,
    accent: "text-violet-500",
    accentBg: "bg-violet-50",
    desc: "기존 고객이나 확보된 DB를 대상으로 직접 전달하는 광고입니다.",
    products: ["SMS", "LMS", "MMS"],
    points: ["재문의 유도", "방문 안내 / 예약 안내", "기존 고객 재접촉"],
  },
  {
    name: "당근 광고",
    Icon: IconCarrot,
    accent: "text-orange-500",
    accentBg: "bg-orange-50",
    desc: "지역 기반 고객 유입에 강한 로컬 광고입니다.",
    products: ["피드 광고", "검색 광고", "카탈로그 광고"],
    points: ["지역 상권 업종", "생활권 고객이 중요한 업종", "근거리 유입이 중요한 서비스"],
  },
  {
    name: "부동산 특화 광고",
    Icon: IconBuilding,
    accent: "text-teal-500",
    accentBg: "bg-teal-50",
    desc: "부동산 관심 고객이 모여 있는 플랫폼 기반 광고입니다.",
    products: ["호갱노노 광고", "직방 광고", "다방 광고", "네모 광고"],
    points: ["분양 / 임대 / 상가", "지역 부동산 마케팅"],
  },
  {
    name: "홈페이지 제작",
    Icon: IconCode,
    accent: "text-indigo-500",
    accentBg: "bg-indigo-50",
    desc: "광고 유입 후 전환까지 연결되는 랜딩페이지 및 홈페이지를 제작합니다.",
    products: ["기업 홈페이지", "랜딩페이지", "모바일 최적화 페이지"],
    points: ["광고와 연동되는 전환형 페이지 필요 시", "기존 홈페이지가 없거나 리뉴얼이 필요한 경우", "모바일에서의 문의 전환이 중요한 업종"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">광고상품 / 서비스</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">
            다양한 온라인 광고 채널을 업종과 목적에 맞게 제안합니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3">
            검색형, SNS형, 영상형, 메시지형 광고까지 전환 중심으로 운영합니다
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-10">
            {services.map((svc, i) => (
              <div
                key={i}
                id={svc.name.replace(/\s/g, "-")}
                className="group p-7 lg:p-10 rounded-3xl border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${svc.accentBg} rounded-2xl flex items-center justify-center`}>
                    <svc.Icon className={`w-6 h-6 ${svc.accent}`} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-extrabold text-deep-navy">{svc.name}</h2>
                </div>
                <p className="text-slate-600 mb-8">{svc.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Products */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">운영 상품</h3>
                    <div className="flex flex-wrap gap-2">
                      {svc.products.map((p) => (
                        <span key={p} className="px-4 py-2 bg-slate-50 text-slate-700 text-sm rounded-xl border border-slate-100 font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Points */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">추천 포인트</h3>
                    <ul className="space-y-3">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-sm text-slate-600">
                          <div className="w-5 h-5 bg-accent-blue/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                            <IconCheck className="w-3 h-3 text-accent-blue" />
                          </div>
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

      {/* CTA */}
      <SectionCTA
        title="어떤 광고가 우리 업종에 맞는지 모르셔도 괜찮습니다"
        description="업종과 예산에 맞는 광고 방향부터 제안해드립니다"
        buttonText="맞는 광고 제안 받기"
        variant="dark"
      />
    </>
  );
}
