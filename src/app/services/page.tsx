import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionCTA from "@/components/SectionCTA";
import { IconCheck, IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "광고상품 / 서비스 | 여울디앤씨",
  description: "필요한 채널만 골라, 업종에 맞게 설계합니다.",
};

function Logo({ name, className = "h-6 w-auto" }: { name: string; className?: string }) {
  return <img src={`/images/logos/${name}.svg`} alt={name} className={className} />;
}

function Bullet({ children, color = "text-accent-blue" }: { children: React.ReactNode; color?: string }) {
  return (
    <li className={`flex items-start gap-2.5 ${color}`}>
      <div className="w-5 h-5 rounded-full bg-current/10 flex items-center justify-center shrink-0 mt-0.5">
        <IconCheck className="w-3 h-3" />
      </div>
      <span className="text-sm">{children}</span>
    </li>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="px-3 py-1 bg-white text-xs text-slate-600 rounded-lg border border-slate-100 font-medium">{children}</span>;
}

export default function ServicesPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">광고상품 / 서비스</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">필요한 채널만 골라, 업종에 맞게 설계합니다</p>
          <p className="text-sm text-slate-400/80 mt-3 max-w-2xl">플랫폼 기능 설명이 아니라, 무엇을 맡길 수 있는지 명확히 보여드립니다.</p>
          {/* Platform logos bar */}
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            {["naver", "kakaotalk", "meta", "instagram", "youtube", "google", "facebook"].map((n) => (
              <img key={n} src={`/images/logos/${n}.svg`} alt={n} className="h-4 w-auto brightness-0 invert opacity-40" />
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 서비스 카테고리 오버뷰 ━━ */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "퍼포먼스 광고", desc: "전환 목적", color: "bg-blue-50 text-blue-700 border-blue-100" },
              { label: "브랜드 인지도", desc: "노출·신뢰", color: "bg-red-50 text-red-700 border-red-100" },
              { label: "DB 수집", desc: "리드 확보", color: "bg-violet-50 text-violet-700 border-violet-100" },
              { label: "재접촉 마케팅", desc: "기존 고객", color: "bg-amber-50 text-amber-700 border-amber-100" },
              { label: "업종 특화", desc: "부동산·지역", color: "bg-teal-50 text-teal-700 border-teal-100" },
            ].map((c) => (
              <div key={c.label} className={`px-5 py-3 rounded-xl border ${c.color} text-center`}>
                <p className="text-xs font-bold">{c.label}</p>
                <p className="text-[10px] opacity-70">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ 네이버 ━━━━ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Visual */}
            <div className="relative mb-12 lg:mb-0">
              <div className="bg-linear-to-br from-green-50 to-emerald-50/30 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <Logo name="naver" className="h-6 w-auto" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold text-green-700">퍼포먼스 마케팅</span>
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-deep-navy mb-3">국내 최대 포털에서<br />검색 기반 문의 확보</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/naver-search.jpg" alt="네이버 검색 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden lg:block animate-float gradient-border">
                <p className="text-[10px] text-slate-400">검색 전환</p>
                <p className="text-lg font-extrabold text-green-600">높음 <span className="text-xs">↑</span></p>
              </div>
            </div>
            {/* Info */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">네이버 광고</h2>
              <p className="text-sm text-slate-500 mb-6">한국 사용자의 대부분이 사용하는 포털사이트로, 검색하는 순간부터 고객과 브랜드의 접점을 확보할 수 있습니다.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                  <div className="flex flex-wrap gap-1.5"><Tag>파워링크</Tag><Tag>브랜드검색</Tag><Tag>성과형 디스플레이</Tag></div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">추천 업종</p>
                  <p className="text-xs text-slate-600">병원, 부동산, 서비스업 등 검색 기반 문의 업종</p>
                </div>
              </div>
              <ul className="space-y-2 text-green-700 mb-6">
                <Bullet color="text-green-700">정보를 찾는 고객 대상, 리서치 단계 공략에 유리</Bullet>
                <Bullet color="text-green-700">제품/서비스뿐 아니라 지역 중심 마케팅도 용이</Bullet>
                <Bullet color="text-green-700">검색 기반 문의 유입이 중요한 업종에 최적화</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-green-600 font-semibold hover:gap-3 transition-all">
                네이버 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 메타 ━━━━ */}
      <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Info (left on desktop) */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">메타 광고</h2>
              <p className="text-sm text-slate-500 mb-6">Instagram/Facebook 플랫폼에 노출되는 맞춤형 광고로, 타겟의 관심사와 행동 데이터를 기반으로 높은 전환을 유도합니다.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                  <div className="flex flex-wrap gap-1.5"><Tag>피드 광고</Tag><Tag>스토리 광고</Tag><Tag>릴스 광고</Tag><Tag>리드폼</Tag></div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">핵심 강점</p>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p>관심사/행동 기반 정밀 타겟팅</p>
                    <p>최대 규모 SNS 브랜드 노출</p>
                    <p>높은 전환율의 리드 수집</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-blue-700 mb-6">
                <Bullet color="text-blue-700">잠재고객에게 먼저 노출, DB 수집에 최적화</Bullet>
                <Bullet color="text-blue-700">시각적 소재 활용이 중요한 업종에 강함</Bullet>
                <Bullet color="text-blue-700">상담 문의 유도와 리마케팅까지 연결</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-blue-600 font-semibold hover:gap-3 transition-all">
                메타 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            {/* Visual */}
            <div className="relative mb-12 lg:mb-0 order-1 lg:order-2">
              <div className="bg-linear-to-br from-blue-50 to-indigo-50/30 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <Logo name="instagram" className="h-7 w-auto" />
                  <Logo name="facebook" className="h-7 w-auto" />
                  <Logo name="meta" className="h-5 w-auto opacity-40" />
                </div>
                <h3 className="text-lg font-extrabold text-deep-navy mb-3">브랜드 홍보부터<br />매출 증대까지</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/meta-social.jpg" alt="메타 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 카카오 ━━━━ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className="bg-linear-to-br from-yellow-50 to-amber-50/30 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <Logo name="kakaotalk" className="h-7 w-auto" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-bold text-amber-700">상담 유입형</span>
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-deep-navy mb-3">카카오톡 기반<br />상담 유입과 재접촉</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/kakao-chat.jpg" alt="카카오 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">카카오 광고</h2>
              <p className="text-sm text-slate-500 mb-6">빠른 커뮤니케이션이 중요한 업종에서 카카오톡 채널을 활용해 상담 유입부터 기존 고객 재접촉까지 운영합니다.</p>
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5"><Tag>키워드 광고</Tag><Tag>디스플레이 광고</Tag><Tag>카카오톡 채널 메시지</Tag><Tag>비즈메시지</Tag></div>
              </div>
              <ul className="space-y-2 text-amber-700 mb-6">
                <Bullet color="text-amber-700">상담 유입이 중요한 업종에 최적화</Bullet>
                <Bullet color="text-amber-700">기존 고객 재접촉 및 후속 메시지 발송</Bullet>
                <Bullet color="text-amber-700">카카오톡 채널 연동으로 빠른 커뮤니케이션</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-amber-600 font-semibold hover:gap-3 transition-all">
                카카오 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 유튜브 ━━━━ */}
      <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">유튜브 광고</h2>
              <p className="text-sm text-slate-500 mb-6">영상 중심으로 브랜드를 알리고 신뢰를 쌓는 광고입니다. 인스트림, 범퍼, Shorts 등 다양한 형태로 운영합니다.</p>
              <div className="bg-white rounded-xl p-4 border border-slate-100 mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5"><Tag>인스트림 광고</Tag><Tag>범퍼 광고</Tag><Tag>인피드 광고</Tag><Tag>Shorts 광고</Tag></div>
              </div>
              <ul className="space-y-2 text-red-700 mb-6">
                <Bullet color="text-red-700">브랜드 인지도를 높이고 싶은 경우</Bullet>
                <Bullet color="text-red-700">영상 콘텐츠 활용이 가능한 업종</Bullet>
                <Bullet color="text-red-700">신뢰감 형성이 중요한 업종에 효과적</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-red-600 font-semibold hover:gap-3 transition-all">
                유튜브 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="relative mb-12 lg:mb-0 order-1 lg:order-2">
              <div className="bg-linear-to-br from-red-50 to-rose-50/30 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <Logo name="youtube" className="h-5 w-auto" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-[10px] font-bold text-red-700">브랜드 인지도</span>
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-deep-navy mb-3">영상으로 전하는<br />브랜드 신뢰</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/youtube-video.jpg" alt="유튜브 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 구글 ━━━━ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className="bg-linear-to-br from-sky-50 to-cyan-50/30 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <Logo name="google" className="h-5 w-auto" />
                  <Logo name="google-ads" className="h-5 w-auto" />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="text-[10px] font-bold text-sky-700">확장형 광고</span>
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-deep-navy mb-3">검색+디스플레이+<br />리타겟팅 확장</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/stock/google-analytics.jpg" alt="구글 광고" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">구글 광고</h2>
              <p className="text-sm text-slate-500 mb-6">다양한 지면에서 광고를 확장하고, 리타겟팅과 자동 최적화 기반으로 효율적으로 운영합니다.</p>
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">운영 상품</p>
                <div className="flex flex-wrap gap-1.5"><Tag>검색 광고</Tag><Tag>디스플레이 광고</Tag><Tag>디맨드젠</Tag><Tag>실적 최대화 캠페인</Tag></div>
              </div>
              <ul className="space-y-2 text-sky-700 mb-6">
                <Bullet color="text-sky-700">다양한 지면에서 광고 확장이 필요한 경우</Bullet>
                <Bullet color="text-sky-700">이탈 고객 리타겟팅이 필요한 경우</Bullet>
                <Bullet color="text-sky-700">자동 최적화 기반 효율적 운영</Bullet>
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm text-sky-600 font-semibold hover:gap-3 transition-all">
                구글 광고 상담받기 <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 문자 + 당근 + 부동산 ━━━━ */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4 justify-center">More</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">그 외 운영 가능한 광고 채널</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 문자 */}
            <div className="bg-white rounded-2xl overflow-hidden card-3d gradient-border">
              <div className="relative aspect-video">
                <Image src="/images/stock/sms-marketing.jpg" alt="문자 마케팅" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-violet-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span className="text-[10px] font-bold text-white">재접촉 마케팅</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">문자 마케팅</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 mb-4">확보된 DB를 대상으로 직접 전달하는 SMS/LMS/MMS 광고</p>
                <ul className="space-y-2 text-violet-700">
                  <Bullet color="text-violet-700">재문의 유도 / 방문·예약 안내</Bullet>
                  <Bullet color="text-violet-700">기존 고객 재접촉에 효과적</Bullet>
                </ul>
              </div>
            </div>

            {/* 당근 */}
            <div className="bg-white rounded-2xl overflow-hidden card-3d gradient-border">
              <div className="relative aspect-video">
                <Image src="/images/stock/local-store.jpg" alt="당근 광고" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-orange-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Logo name="danggeun" className="h-4 w-auto brightness-0 invert" />
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-[10px] font-bold text-white">지역 특화</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">당근/지역 광고</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 mb-4">지역 기반 피드/검색/카탈로그 광고로 생활권 고객을 확보</p>
                <ul className="space-y-2 text-orange-700">
                  <Bullet color="text-orange-700">지역 상권 업종에 최적화</Bullet>
                  <Bullet color="text-orange-700">생활권 고객이 중요한 서비스</Bullet>
                </ul>
              </div>
            </div>

            {/* 부동산 */}
            <div className="bg-white rounded-2xl overflow-hidden card-3d gradient-border">
              <div className="relative aspect-video">
                <Image src="/images/stock/real-estate.jpg" alt="부동산 광고" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="text-[10px] font-bold text-white">업종 특화</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">부동산 특화 광고</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 mb-4">호갱노노, 직방, 다방, 네모 등 부동산 전문 플랫폼 광고</p>
                <ul className="space-y-2 text-teal-700">
                  <Bullet color="text-teal-700">분양 / 임대 / 상가</Bullet>
                  <Bullet color="text-teal-700">지역 부동산 마케팅</Bullet>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 업종별 맞춤 + 운영방식 요약 ━━━━ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* 업종별 */}
            <div className="mb-12 lg:mb-0">
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Industry</p>
              <h2 className="text-xl lg:text-2xl font-extrabold text-deep-navy mb-6">같은 광고라도, 업종이 다르면 설계가 달라집니다</h2>
              <div className="space-y-3">
                {[
                  { industry: "분양", desc: "DB 유입과 후속 문자 구조", logos: ["meta"] },
                  { industry: "병원", desc: "예약 문의와 신뢰 형성", logos: ["naver", "instagram"] },
                  { industry: "교육", desc: "수강 상담, 카카오 채널 연결", logos: ["kakaotalk"] },
                  { industry: "지역 자영업", desc: "생활권 고객 유입", logos: ["danggeun"] },
                  { industry: "상담형 서비스", desc: "문의 전환, 리드폼 활용", logos: ["google"] },
                ].map((item) => (
                  <div key={item.industry} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-accent-blue/15 transition-all duration-300">
                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.logos.map((l) => <img key={l} src={`/images/logos/${l}.svg`} alt={l} className="h-4 w-auto" />)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-deep-navy">{item.industry}</p>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 운영방식 */}
            <div>
              <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Process</p>
              <h2 className="text-xl lg:text-2xl font-extrabold text-deep-navy mb-6">분석부터 제작, 운영, 보완까지 한 번에</h2>
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <Image src="/images/stock/monitor-data.jpg" alt="데이터 모니터링" width={800} height={500} className="w-full h-auto" />
              </div>
              <div className="flex flex-wrap gap-2">
                {["전략 수립", "소재 제작", "채널 세팅", "운영 및 최적화", "결과 체크"].map((step, i) => (
                  <div key={step} className="flex items-center gap-1.5">
                    <span className="px-3 py-1.5 bg-accent-blue/8 text-accent-blue text-xs font-semibold rounded-lg">{step}</span>
                    {i < 4 && <span className="text-slate-300 text-xs">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ CTA ━━━━ */}
      <SectionCTA
        title="정해진 틀보다, 업종에 맞는 구성으로 제안드립니다"
        description="어떤 채널이 맞는지 모르셔도 괜찮습니다. 업종과 예산을 알려주시면 맞는 방향부터 정리해드립니다."
        buttonText="맞춤 상담 받기"
        variant="dark"
      />
    </>
  );
}
