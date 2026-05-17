import type { Metadata } from "next";
import Image from "next/image";
import SectionCTA from "@/components/SectionCTA";
import { IllustLaptop } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: "포트폴리오 | 여울디앤씨",
  description: "업종에 맞는 채널 조합과 운영 구조를 보여드립니다.",
};

const industries = ["분양", "병원", "교육", "지역 자영업", "상담형 서비스"];

const operations = [
  {
    no: "01",
    industry: "분양 광고",
    title: "메타 리드폼 + LMS 후속 운영",
    desc: "분양 광고는 빠른 DB 확보와 관심 고객 재접촉 구조가 중요합니다. 메타 광고와 LMS 후속 시스템을 통해 방문 상담 전환까지 연결합니다.",
    logos: ["meta", "kakaotalk"],
    point: "DB 유입 → 상담 전환",
    target: "관심 고객 확보",
    img: "/images/0515/op-apartment.png",
  },
  {
    no: "02",
    industry: "병원 광고",
    title: "네이버 검색형 + 메타 노출형",
    desc: "병원 광고는 검색 신뢰도와 반복 노출 분배율이 중요합니다. 플레이스·검색·블로그·메타 운영을 통해 예약 문의 전환율을 높입니다.",
    logos: ["naver", "instagram"],
    point: "검색 유입 → 신뢰 형성",
    target: "예약 문의 확보",
    img: "/images/0515/op-clinic.png",
  },
  {
    no: "03",
    industry: "교육 광고",
    title: "상담 유입 · 카카오 채널 전환",
    desc: "교육 업종은 상담 연결과 지속적인 상담 고객 관리가 중요합니다. 메타 광고와 카카오 채널 운영으로 수강 문의 전환율을 강화합니다.",
    logos: ["meta", "kakaotalk"],
    point: "문의 유입 → 상담 연결",
    target: "수강생 모집",
    img: "/images/0515/op-education.png",
  },
  {
    no: "04",
    industry: "지역 자영업",
    title: "플레이스 기반 지역 타겟 광고",
    desc: "지역 자영업 광고는 생활권 노출과 실제 방문 고객 확보가 중요합니다. 네이버 플레이스와 메타 광고를 활용해 빠른 유입을 확보합니다.",
    logos: ["naver", "meta"],
    point: "지역 노출 강화",
    target: "방문 고객 확보",
    img: "/images/0515/op-store.png",
  },
  {
    no: "05",
    industry: "상담형 서비스",
    title: "문의 전환 중심 퍼포먼스 광고",
    desc: "상담형 서비스는 고객 문의 확보와 전환 관리 구조가 중요합니다. 검색광고·메타·리드 수집 운영을 통해 실질적인 상담 문의를 유도합니다.",
    logos: ["naver", "meta", "kakaotalk"],
    point: "문의 확보 → 상담 전환",
    target: "리드 고객 확보",
    img: "/images/0515/op-consult.png",
  },
];

const works = [
  {
    title: "홈페이지 제작",
    type: "Website",
    desc: "브랜드의 첫 인상을 책임지는 홈페이지를 기획부터 디자인, 개발까지 맞춤형으로 제작합니다.",
    point: "브랜드 신뢰 + 정보 전달",
    img: "/images/stock/landing-page.jpg",
  },
  {
    title: "홍보영상 제작",
    type: "Video",
    desc: "브랜드의 메시지를 영상으로 전달하여 신뢰감과 전문성을 높이는 고퀄리티 홍보영상을 제작합니다.",
    point: "브랜드 이미지 + 인지도 상승",
    img: "/images/stock/creative-design.jpg",
  },
  {
    title: "릴스·쇼츠영상 제작",
    type: "Reels",
    desc: "짧은 시간 안에 강한 인상을 남기는 숏폼 콘텐츠로 SNS 노출과 문의 확보를 극대화합니다.",
    point: "유입 강화 + 문의 확보",
    img: "/images/stock/mobile-ads.jpg",
  },
  {
    title: "광고이미지 제작",
    type: "Ad Image",
    desc: "시선을 사로잡는 디자인으로 클릭률과 전환율을 높이는 광고 배너 이미지를 제작합니다.",
    point: "시선 집중 + 클릭 유도 + 광고 성과 향상",
    img: "/images/stock/monitor-data.jpg",
  },
];

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#060e1e]">
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e] via-[#0a1428]/95 to-[#060e1e]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent-blue/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-[12px] font-bold text-slate-300 tracking-wider uppercase">Portfolio · 실적</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold leading-hero text-white mb-4 sm:mb-5 tracking-tight">
                성과는 광고비보다<br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">구조에서 달라</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
                집니다
              </h1>
              <p className="text-[14px] sm:text-base text-slate-300/90 max-w-md leading-relaxed mb-6">
                업종별 고민에 맞춰<br className="sm:hidden" />
                {" "}<span className="font-semibold text-white">채널 조합과 운영 흐름을 설계</span>합니다.
              </p>
              {/* Stat strip - 4 stats with icons (PDF page 21 변경시안 매칭) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {[
                  {
                    value: "5+", label: "주요 업종", sub: "다양한 업종 경험",
                    icon: <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87m-4-12a4 4 0 110 7.75M9 20H4v-2a4 4 0 014-4h.5a4 4 0 014 4v2zm0-12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
                  },
                  {
                    value: "100+", label: "누적 캠페인", sub: "성과 기반 운영",
                    icon: <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" /></svg>,
                  },
                  {
                    value: "6개", label: "운영 채널", sub: "통합 마케팅 운영",
                    icon: <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
                  },
                  {
                    value: "성과 중심", label: "퍼포먼스 마케팅", sub: "데이터 기반 최적화",
                    icon: <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
                  },
                ].map((s, i) => (
                  <div key={i} className="relative">
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/20" />
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-7 h-7 rounded-lg bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center shrink-0">
                          {s.icon}
                        </div>
                        <p className="text-base sm:text-lg font-extrabold bg-linear-to-br from-white to-accent-blue bg-clip-text text-transparent leading-none">{s.value}</p>
                      </div>
                      <p className="text-[11px] sm:text-[12px] text-white font-bold">{s.label}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Isometric laptop visual */}
            <div className="hidden lg:flex lg:col-span-5 justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />
                <IllustLaptop className="relative w-80 h-auto animate-float-slow" />
              </div>
            </div>
          </div>

          {/* 4 features bar (PDF page 45) */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: "실제 운영 경험",
                desc: "검증된 운영 노하우",
                icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
              {
                title: "정확한 분석",
                desc: "데이터 기반 인사이트",
                icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="7" strokeLinecap="round" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>,
              },
              {
                title: "전략 설계",
                desc: "업종 맞춤 전략 수립",
                icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>,
              },
              {
                title: "실행 및 최적화",
                desc: "지속적인 성과 개선",
                icon: <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
              },
            ].map((f, idx) => (
              <div key={idx} className="relative h-full">
                <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/20" />
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3 sm:p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] sm:text-[14px] font-extrabold text-white mb-0.5 leading-tight">{f.title}</p>
                    <p className="text-[11px] text-slate-400 leading-snug">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. 업종 + 제작 카테고리 카드 */}
      <section className="relative py-14 sm:py-18 lg:py-24 bg-linear-to-b from-white via-[#f5f9ff] to-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">INDUSTRIES</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-3 leading-tight">
              다양한 업종의 광고 운영과 제작 경험을 바탕으로<br className="hidden sm:inline" />
              {" "}<span className="relative inline-block">
                <span className="relative z-10">방향을 제안</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              합니다
            </h2>
            <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed">
              업종별 특성에 맞는 최적의 채널 조합과 운영 전략을 제공합니다.
            </p>
          </div>

          {/* 5 업종 row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-5">
            {[
              { name: "분양", icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 21V7l9-4 9 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" /></svg> },
              { name: "병원", icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v1.5M21 7.5H3m9 4.5v6m-3-3h6" /></svg> },
              { name: "교육", icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg> },
              { name: "지역 자영업", icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.25h3v-3h-3v3z" /></svg> },
              { name: "상담형 서비스", icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M9.879 16.121A3 3 0 1012.015 11L11.288 9.273M16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg> },
            ].map((it) => (
              <div key={it.name} className="relative group">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/15 blur-[2px]" />
                <div className="relative bg-white rounded-2xl border border-white shadow-3d py-5 sm:py-6 px-4 text-center group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-2.5 sm:mb-3">
                    {it.icon}
                  </div>
                  <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy">{it.name}</p>
                  <div className="w-6 h-0.5 bg-accent-blue/40 mx-auto mt-2" />
                </div>
              </div>
            ))}
          </div>

          {/* 4 제작 카테고리 row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: "홈페이지", icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg> },
              { name: "홍보영상", icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg> },
              { name: "릴스·쇼츠영상", icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" /></svg> },
              { name: "광고이미지", icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg> },
            ].map((it) => (
              <div key={it.name} className="relative group">
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/15 blur-[2px]" />
                <div className="relative bg-white rounded-2xl border border-white shadow-3d py-5 sm:py-6 px-4 text-center group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-2.5 sm:mb-3">
                    {it.icon}
                  </div>
                  <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy">{it.name}</p>
                  <div className="w-6 h-0.5 bg-accent-blue/40 mx-auto mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 운영 방식 예시 - 3D isometric cards */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white via-[#f5f9ff] to-slate-50 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">OPERATIONS</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              업종에 맞는<br className="sm:hidden" />
              {" "}<span className="relative inline-block">
                <span className="relative z-10">채널 조합과 운영 흐름</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {operations.map((op, i) => (
              <div
                key={op.industry}
                className="group relative"
                style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s backwards` }}
              >
                <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-2xl sm:rounded-3xl bg-accent-blue/15 blur-[2px]" />

                <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white rounded-2xl sm:rounded-3xl border border-white shadow-3d overflow-hidden group-hover:-translate-y-1 transition-transform duration-300`}>
                  {/* Image side */}
                  <div className={`relative aspect-video lg:aspect-auto lg:min-h-72 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image src={op.img} alt={op.industry} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-br from-deep-navy/30 via-transparent to-transparent" />
                    {/* Big number watermark */}
                    <div className="absolute top-3 right-4 text-6xl sm:text-7xl font-black text-white/30 leading-none">
                      {op.no}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`relative p-6 sm:p-8 lg:p-10 flex flex-col ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    {/* Industry badge + logos */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                        <span className="w-1 h-1 rounded-full bg-accent-blue" />
                        <span className="text-[11px] font-extrabold text-accent-blue tracking-wider uppercase">{op.industry}</span>
                      </span>
                      <div className="flex items-center gap-1.5 bg-slate-50 rounded-full px-2 py-1 border border-slate-100">
                        {op.logos.map((logo) => (
                          <img key={logo} src={`/images/logos/${logo}.svg`} alt={logo} className="h-3.5 sm:h-4 w-auto" />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-deep-navy mb-2 sm:mb-3 leading-tight">{op.title}</h3>
                    <p className="text-[14px] sm:text-sm text-slate-500 mb-5 sm:mb-6 leading-relaxed">{op.desc}</p>

                    {/* KPI badges */}
                    <div className="mt-auto grid grid-cols-2 gap-3">
                      <div className="relative">
                        <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/15" />
                        <div className="relative bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                            <p className="text-[11px] text-slate-400 font-bold tracking-wider uppercase">핵심</p>
                          </div>
                          <p className="text-[12px] sm:text-xs text-deep-navy font-extrabold leading-tight">{op.point}</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-accent-blue/15" />
                        <div className="relative bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                            <p className="text-[11px] text-slate-400 font-bold tracking-wider uppercase">목표</p>
                          </div>
                          <p className="text-[12px] sm:text-xs text-deep-navy font-extrabold leading-tight">{op.target}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 작업물 갤러리 (3D isometric) */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.025]" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #2563eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.3em] text-accent-blue mb-3">WORKS</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4 leading-tight">
              광고는 결과도 중요하지만,<br />
              시작은 <span className="relative inline-block">
                <span className="relative z-10">퀄리티 있는 작업물</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/15 z-0 rounded-sm" />
              </span>
              에서 달라집니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {works.map((w, i) => (
              <div
                key={w.title}
                className="group relative flex"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s backwards` }}
              >
                <div className="absolute inset-0 translate-x-0.5 translate-y-1 rounded-2xl bg-accent-blue/15 blur-[2px]" />

                <div className="relative w-full rounded-2xl overflow-hidden border border-white bg-white shadow-3d group-hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-4/3 relative overflow-hidden">
                    <Image src={w.img} alt={w.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-deep-navy/70 via-deep-navy/20 to-transparent" />
                    {/* Big number watermark */}
                    <div className="absolute top-2 right-3 text-3xl font-black text-white/40 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-accent-blue/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />}
                        {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />}
                        {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5m-2.25-13.5h16.5l-2.25 4.5h-12l-2.25-4.5zm5.25 6h6m-3-3v6" />}
                        {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />}
                      </svg>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <p className="text-sm sm:text-base font-extrabold text-deep-navy leading-tight">{w.title}</p>
                    <p className="text-[12px] sm:text-xs text-slate-500 mt-1.5 sm:mt-2 leading-relaxed flex-1">{w.desc}</p>

                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-1">핵심 포인트</p>
                      <p className="text-[12px] sm:text-xs text-accent-blue font-bold">{w.point}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold text-accent-blue tracking-widest">
                        WORK {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-accent-blue flex items-center justify-center transition-colors">
                        <svg className="w-2.5 h-2.5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] sm:text-xs text-slate-400 mt-8 sm:mt-12 leading-relaxed">
            포트폴리오는 지속적으로 업데이트됩니다.<br className="sm:hidden" />
            {" "}업종에 따라 필요한 방식은 다르게 제안됩니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="성과는 광고비보다 구조에서 달라집니다"
        description="우리 업종에 맞는 채널 조합과 운영 흐름부터 정리해드립니다. 광고가 처음이셔도 부담 없이 상황만 남겨주세요."
        buttonText="무료 광고 상담받기"
        variant="dark"
      />
    </>
  );
}
