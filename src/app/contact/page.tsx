"use client";

import { useState } from "react";
import { IconPhone, IconClock, IconCheck } from "@/components/Icons";

const channelOptions = [
  "카카오 광고",
  "네이버 광고",
  "메타 광고",
  "유튜브 광고",
  "구글 광고",
  "문자 마케팅",
  "당근 광고",
  "부동산 특화 광고",
  "잘 모르겠음",
];

const budgetOptions = [
  "100만원 미만",
  "100~300만원",
  "300~500만원",
  "500~1,000만원",
  "1,000만원 이상",
  "미정 / 상담 후 결정",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-accent-blue font-semibold text-sm tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-5 tracking-tight">문의하기</h1>
          <p className="text-lg text-slate-300/90 max-w-2xl">
            광고가 처음이셔도 괜찮습니다
          </p>
          <p className="text-sm text-slate-400/80 mt-3">
            업종, 예산, 현재 고민을 남겨주시면 맞는 방향부터 정리해드립니다
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto bg-green-50 rounded-3xl flex items-center justify-center mb-8">
                <IconCheck className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-deep-navy mb-4">문의가 접수되었습니다</h2>
              <p className="text-slate-500 mb-8">
                빠른 시일 내에 담당자가 연락드리겠습니다.<br />
                감사합니다.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-4 bg-accent-blue text-white font-semibold rounded-2xl hover:bg-blue-600 transition-colors duration-300"
              >
                추가 문의하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Required Fields */}
              <div>
                <h2 className="text-lg font-extrabold text-deep-navy mb-6 flex items-center gap-2">
                  기본 정보
                  <span className="text-xs text-cta-orange font-medium">* 필수</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      업체명 <span className="text-cta-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                      placeholder="업체명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      담당자명 <span className="text-cta-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                      placeholder="담당자명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      연락처 <span className="text-cta-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      업종 <span className="text-cta-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                      placeholder="예: 병원, 부동산, 음식점 등"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    문의내용 <span className="text-cta-orange">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm resize-none bg-slate-50/50 focus:bg-white"
                    placeholder="현재 상황, 고민, 원하시는 방향 등을 자유롭게 적어주세요"
                  />
                </div>
              </div>

              {/* Optional Fields */}
              <div className="pt-8 border-t border-slate-100">
                <h2 className="text-lg font-extrabold text-deep-navy mb-6">
                  추가 정보 <span className="text-xs text-slate-400 font-medium">선택</span>
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">희망 광고 채널</label>
                    <select className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white">
                      <option value="">선택해주세요</option>
                      {channelOptions.map((ch) => (
                        <option key={ch} value={ch}>{ch}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">월 광고 예산</label>
                    <select className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white">
                      <option value="">선택해주세요</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">홈페이지 또는 랜딩페이지 보유 여부</label>
                    <div className="flex gap-5">
                      {["보유", "미보유", "제작 예정"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer">
                          <input type="radio" name="hasWebsite" value={opt} className="accent-accent-blue w-4 h-4" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div className="pt-8 border-t border-slate-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 accent-accent-blue w-4 h-4" />
                  <span className="text-sm text-slate-500">
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4.5 bg-linear-to-r from-cta-orange to-orange-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-cta-orange/25 transition-all duration-300 text-base"
              >
                상담 요청하기
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-100">
                <div className="w-12 h-12 mx-auto bg-accent-blue/10 rounded-2xl flex items-center justify-center mb-3">
                  <IconPhone className="w-5 h-5 text-accent-blue" />
                </div>
                <p className="text-sm font-semibold text-slate-700">전화 상담</p>
                <p className="text-xs text-slate-500 mt-1">OOO-OOOO-OOOO</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-100">
                <div className="w-12 h-12 mx-auto bg-yellow-50 rounded-2xl flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-700">카카오톡 상담</p>
                <p className="text-xs text-slate-500 mt-1">빠른 상담 가능</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-100">
                <div className="w-12 h-12 mx-auto bg-accent-blue/10 rounded-2xl flex items-center justify-center mb-3">
                  <IconClock className="w-5 h-5 text-accent-blue" />
                </div>
                <p className="text-sm font-semibold text-slate-700">운영시간</p>
                <p className="text-xs text-slate-500 mt-1">평일 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
