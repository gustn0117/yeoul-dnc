import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";
import { IconCheck, IconArrowRight } from "@/components/Icons";

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
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white font-extrabold text-sm">N</div>
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
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </div>
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
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#FEE500] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" /></svg>
                  </div>
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
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
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
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-7 h-7" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
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
