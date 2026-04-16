import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";
import { IconCheck, IconArrowRight } from "@/components/Icons";

/* Platform logos as <img> for consistent rendering */
function PlatformLogo({ name, className = "h-6 w-auto" }: { name: string; className?: string }) {
  return <img src={`/images/logos/${name}.svg`} alt={name} className={className} />;
}

export const metadata: Metadata = {
  title: "광고상품 / 서비스 | 여울디앤씨",
  description: "필요한 채널만 골라, 업종에 맞게 설계합니다.",
};

function SectionHeader({ label, title, desc }: { label: string; title: string; desc: string }) {
  return (
    <div className="text-center mb-14 lg:mb-16">
      <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">{label}</p>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">{title}</h2>
      <p className="text-slate-500 text-sm max-w-lg mx-auto">{desc}</p>
    </div>
  );
}

function FeaturePoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="w-5 h-5 rounded-full bg-current/10 flex items-center justify-center shrink-0 mt-0.5">
        <IconCheck className="w-3 h-3" />
      </div>
      <span className="text-sm">{children}</span>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">광고상품 / 서비스</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">필요한 채널만 골라, 업종에 맞게 설계합니다</p>
          <p className="text-sm text-slate-400/80 mt-3 max-w-2xl">플랫폼 기능 설명보다 결과와 활용 목적 중심으로 안내합니다.</p>
        </div>
      </section>

      {/* ━━━━━━ 네이버 광고 ━━━━━━ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: Visual */}
            <div className="relative mb-12 lg:mb-0">
              <div className="relative bg-linear-to-br from-green-50 to-emerald-50/50 rounded-3xl p-8 lg:p-12">
                {/* Platform badge */}
                <div className="flex items-center gap-3 mb-6">
                  <PlatformLogo name="naver" className="h-5 w-auto" />
                  <span className="text-green-700 font-bold text-sm">네이버 마케팅</span>
                </div>
                <p className="text-xs text-slate-500 mb-6">고객에게 다방면으로 노출 가능</p>
                <h3 className="text-xl lg:text-2xl font-extrabold text-deep-navy mb-4">
                  국내 최대 포털사이트에<br />노출되어 효과적인
                </h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/stock/naver-search.jpg" alt="네이버 검색 광고" fill className="object-cover" />
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden lg:block" style={{ animation: "float 5s ease-in-out infinite" }}>
                <p className="text-[10px] text-slate-400 mb-1">검색 전환율</p>
                <p className="text-lg font-extrabold text-green-600">높음<span className="text-emerald-500 text-xs ml-1">↑</span></p>
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-green-700">퍼포먼스 마케팅</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
                검색 수요 기반<br />문의 확보에 강한 광고
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                한국 사용자의 대부분이 사용하는 포털사이트로, 고객이 검색을 하는 순간부터 고객과 브랜드의 접점을 확보할 수 있습니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["파워링크", "브랜드검색", "성과형 디스플레이"].map((p) => (
                      <span key={p} className="px-2.5 py-1 bg-white text-xs text-slate-600 rounded-md border border-slate-100">{p}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">추천 업종</p>
                  <p className="text-xs text-slate-600">병원, 부동산, 서비스업 등 검색 기반 문의가 중요한 업종</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-green-700 mb-8">
                <FeaturePoint>정보를 찾으러 오는 고객을 대상으로 구매 전 리서치 단계 공략에 유리</FeaturePoint>
                <FeaturePoint>제품, 서비스뿐 아니라 지역 중심 마케팅도 용이</FeaturePoint>
                <FeaturePoint>검색 기반 문의 유입이 중요한 업종에 최적화</FeaturePoint>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 메타 광고 ━━━━━━ */}
      <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: Info (reversed) */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-semibold text-blue-700">퍼포먼스 마케팅</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
                관심사 기반 타겟팅과<br />리드 수집에 강한 광고
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                Meta(인스타그램/페이스북) 플랫폼에 노출되는 맞춤형 광고로, 타겟의 관심사와 행동 데이터를 기반으로 높은 전환을 유도하는 성과 중심 광고입니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["피드 광고", "스토리 광고", "릴스 광고", "리드폼 광고"].map((p) => (
                      <span key={p} className="px-2.5 py-1 bg-slate-50 text-xs text-slate-600 rounded-md border border-slate-100">{p}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">핵심 포인트</p>
                  <div className="space-y-2">
                    {[
                      { icon: "👥", label: "관심사, 행동, 유사 기반 정밀 타겟팅 가능" },
                      { icon: "📱", label: "최대 규모의 SNS 브랜드 노출" },
                      { icon: "📈", label: "구매 가능성이 높은 고객에게 도달하여 높은 전환율" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-start gap-2">
                        <span className="text-sm shrink-0">{f.icon}</span>
                        <p className="text-[11px] text-slate-600">{f.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-blue-700 mb-8">
                <FeaturePoint>잠재고객에게 먼저 노출하고 싶은 경우에 적합</FeaturePoint>
                <FeaturePoint>DB 수집, 상담 문의 유도에 최적화</FeaturePoint>
                <FeaturePoint>시각적 소재 활용이 중요한 업종에 강함</FeaturePoint>
              </ul>
            </div>

            {/* Right: Visual */}
            <div className="relative mb-12 lg:mb-0 order-1 lg:order-2">
              <div className="relative bg-linear-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <PlatformLogo name="instagram" className="h-6 w-auto" />
                  <PlatformLogo name="facebook" className="h-6 w-auto" />
                  <span className="text-blue-700 font-bold text-sm">메타 마케팅</span>
                </div>
                <h3 className="text-lg font-extrabold text-deep-navy mb-2">브랜드 홍보부터 매출 증대까지!</h3>
                <p className="text-xs text-slate-500 mb-6">국내/해외 최대 규모의 SNS에 노출되는 메타 마케팅</p>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/stock/meta-social.jpg" alt="메타 광고" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 카카오 광고 ━━━━━━ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className="relative bg-linear-to-br from-yellow-50 to-amber-50/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <PlatformLogo name="kakaotalk" className="h-7 w-auto" />
                  <span className="text-amber-800 font-bold text-sm">카카오 마케팅</span>
                </div>
                <h3 className="text-xl font-extrabold text-deep-navy mb-4">상담 유입과 재접촉에<br />강한 카카오톡 기반 광고</h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/stock/kakao-chat.jpg" alt="카카오 광고" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-xs font-semibold text-amber-700">상담 유입형</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
                카카오톡 기반으로<br />상담 유입과 재접촉 운영
              </h2>
              <p className="text-sm text-slate-500 mb-8">빠른 커뮤니케이션이 중요한 업종에서 카카오톡 채널을 활용해 상담 유입, 기존 고객 재접촉까지 운영합니다.</p>
              <div className="bg-slate-50 rounded-xl p-4 mb-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5">
                  {["키워드 광고", "디스플레이 광고", "카카오톡 채널 메시지", "비즈메시지"].map((p) => (
                    <span key={p} className="px-2.5 py-1 bg-white text-xs text-slate-600 rounded-md border border-slate-100">{p}</span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2.5 text-amber-700">
                <FeaturePoint>상담 유입이 중요한 업종에 최적화</FeaturePoint>
                <FeaturePoint>기존 고객 재접촉 및 후속 메시지 발송</FeaturePoint>
                <FeaturePoint>빠른 커뮤니케이션이 가능한 채널</FeaturePoint>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 유튜브 광고 ━━━━━━ */}
      <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-xs font-semibold text-red-700">브랜드 인지도</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
                영상 중심으로<br />브랜드 인지도와 신뢰 형성
              </h2>
              <p className="text-sm text-slate-500 mb-8">영상 콘텐츠를 활용해 브랜드를 알리고 신뢰를 쌓는 광고입니다. 인스트림, 범퍼, Shorts 등 다양한 형태로 운영합니다.</p>
              <div className="bg-white rounded-xl p-4 border border-slate-100 mb-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5">
                  {["인스트림 광고", "범퍼 광고", "인피드 광고", "Shorts 광고"].map((p) => (
                    <span key={p} className="px-2.5 py-1 bg-slate-50 text-xs text-slate-600 rounded-md border border-slate-100">{p}</span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2.5 text-red-700">
                <FeaturePoint>브랜드 인지도를 높이고 싶은 경우</FeaturePoint>
                <FeaturePoint>영상 콘텐츠 활용이 가능한 업종</FeaturePoint>
                <FeaturePoint>신뢰감 형성이 중요한 업종에 효과적</FeaturePoint>
              </ul>
            </div>
            <div className="relative mb-12 lg:mb-0 order-1 lg:order-2">
              <div className="relative bg-linear-to-br from-red-50 to-rose-50/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <PlatformLogo name="youtube" className="h-5 w-auto" />
                  <span className="text-red-700 font-bold text-sm">유튜브 마케팅</span>
                </div>
                <h3 className="text-xl font-extrabold text-deep-navy mb-4">영상으로 전하는<br />브랜드 신뢰</h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/stock/youtube-video.jpg" alt="유튜브 광고" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 구글 광고 ━━━━━━ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className="relative bg-linear-to-br from-sky-50 to-blue-50/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <PlatformLogo name="google" className="h-5 w-auto" />
                  <PlatformLogo name="google-ads" className="h-5 w-auto" />
                  <span className="text-sky-700 font-bold text-sm">구글 마케팅</span>
                </div>
                <h3 className="text-xl font-extrabold text-deep-navy mb-4">검색+디스플레이+<br />리타겟팅 확장</h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/stock/google-analytics.jpg" alt="구글 광고" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-sky-500" />
                <span className="text-xs font-semibold text-sky-700">확장형 광고</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">
                검색/디스플레이/자동 최적화를<br />함께 활용하는 확장형 광고
              </h2>
              <p className="text-sm text-slate-500 mb-8">다양한 지면에서 광고를 확장하고 싶거나, 리타겟팅이 필요한 경우, 자동 최적화 기반 운영에 적합합니다.</p>
              <div className="bg-slate-50 rounded-xl p-4 mb-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5">
                  {["검색 광고", "디스플레이 광고", "디맨드젠 광고", "실적 최대화 캠페인"].map((p) => (
                    <span key={p} className="px-2.5 py-1 bg-white text-xs text-slate-600 rounded-md border border-slate-100">{p}</span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2.5 text-sky-700">
                <FeaturePoint>다양한 지면에서 광고를 확장하고 싶은 경우</FeaturePoint>
                <FeaturePoint>이탈 고객 리타겟팅이 필요한 경우</FeaturePoint>
                <FeaturePoint>자동 최적화 기반 효율적 운영</FeaturePoint>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 문자 + 당근 + 부동산 (compact) ━━━━━━ */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="More" title="그 외 운영 가능한 광고 채널" desc="업종과 목적에 따라 추가로 활용 가능한 채널입니다." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 문자 마케팅 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-xs font-semibold text-violet-700">문자 마케팅</span>
              </div>
              <h3 className="text-lg font-extrabold text-deep-navy mb-2">기존 고객 재접촉 및 안내</h3>
              <p className="text-xs text-slate-500 mb-5">확보된 DB를 대상으로 직접 전달하는 SMS/LMS/MMS 광고</p>
              <ul className="space-y-2 text-violet-700">
                <FeaturePoint>재문의 유도 / 방문 안내</FeaturePoint>
                <FeaturePoint>예약 안내 / 기존 고객 재접촉</FeaturePoint>
              </ul>
            </div>

            {/* 당근/지역 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold text-orange-700">당근/지역 광고</span>
              </div>
              <h3 className="text-lg font-extrabold text-deep-navy mb-2">생활권 고객 유입에 강한 로컬 광고</h3>
              <p className="text-xs text-slate-500 mb-5">지역 기반 피드/검색/카탈로그 광고로 근거리 고객을 확보</p>
              <ul className="space-y-2 text-orange-700">
                <FeaturePoint>지역 상권 업종에 최적화</FeaturePoint>
                <FeaturePoint>생활권 고객이 중요한 서비스</FeaturePoint>
              </ul>
            </div>

            {/* 부동산 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-xs font-semibold text-teal-700">부동산 특화 광고</span>
              </div>
              <h3 className="text-lg font-extrabold text-deep-navy mb-2">부동산 관심 고객이 모인 플랫폼</h3>
              <p className="text-xs text-slate-500 mb-5">호갱노노, 직방, 다방, 네모 등 부동산 전문 플랫폼 광고</p>
              <ul className="space-y-2 text-teal-700">
                <FeaturePoint>분양 / 임대 / 상가</FeaturePoint>
                <FeaturePoint>지역 부동산 마케팅</FeaturePoint>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ 업종별 맞춤 설계 ━━━━━━ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Industry" title="같은 광고라도, 업종이 다르면 설계 방식이 달라집니다" desc="여울디앤씨는 업종별 목적에 맞게 광고 구조를 설계합니다." />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { industry: "분양", desc: "DB 유입과 후속 문자 구조" },
              { industry: "병원", desc: "예약 문의와 신뢰 형성" },
              { industry: "교육", desc: "수강 상담, 카카오 채널 연결" },
              { industry: "지역 자영업", desc: "생활권 고객 유입" },
              { industry: "상담형 서비스", desc: "문의 전환, 리드폼 활용" },
            ].map((item) => (
              <div key={item.industry} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-accent-blue/15 transition-all duration-300">
                <p className="text-xs font-bold text-accent-blue mb-1.5">{item.industry}</p>
                <p className="text-[11px] text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ CTA ━━━━━━ */}
      <SectionCTA
        title="정해진 틀보다, 업종에 맞는 구성으로 제안드립니다"
        description="어떤 채널이 맞는지 모르셔도 괜찮습니다. 업종과 예산을 알려주시면 맞는 방향부터 정리해드립니다."
        buttonText="맞춤 상담 받기"
        variant="dark"
      />
    </>
  );
}
