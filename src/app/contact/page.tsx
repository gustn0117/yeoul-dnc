"use client";

import { useState } from "react";
import { IconPhone, IconClock, IconCheck, IconArrowRight } from "@/components/Icons";

const channelOptions = ["카카오 광고", "네이버 광고", "메타 광고", "유튜브 광고", "구글 광고", "문자 마케팅", "당근 광고", "부동산 특화 광고", "잘 모르겠음"];
const budgetOptions = ["100만원 미만", "100~300만원", "300~500만원", "500~1,000만원", "1,000만원 이상", "미정 / 상담 후 결정"];

export default function ContactPage() {
  const [form, setForm] = useState({
    company_name: "", contact_name: "", phone: "", industry: "", message: "",
    channel: "", budget: "", has_website: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) { setError("개인정보 수집 및 이용에 동의해주세요."); return; }
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "오류가 발생했습니다.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "문의 접수 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/15 outline-none transition-all text-sm bg-white";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#060d1b] via-deep-navy to-[#0d2240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="section-label text-accent-blue font-semibold text-xs tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-4 tracking-tight">문의하기</h1>
          <p className="text-base lg:text-lg text-slate-300/90">광고가 처음이셔도 괜찮습니다</p>
          <p className="text-sm text-slate-400/80 mt-2">업종, 예산, 현재 고민을 남겨주시면 맞는 방향부터 정리해드립니다</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <IconCheck className="w-7 h-7 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-deep-navy mb-3">문의가 접수되었습니다</h2>
              <p className="text-slate-500 text-sm mb-8">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
              <button onClick={() => { setSubmitted(false); setForm({ company_name: "", contact_name: "", phone: "", industry: "", message: "", channel: "", budget: "", has_website: "" }); }}
                className="px-6 py-3 bg-accent-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                추가 문의하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 lg:p-10">
              {/* Required */}
              <div className="mb-8">
                <h2 className="text-base font-extrabold text-deep-navy mb-1">기본 정보</h2>
                <p className="text-xs text-cta-orange mb-6">* 표시 항목은 필수입니다</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">업체명 *</label>
                    <input type="text" required value={form.company_name} onChange={(e) => updateField("company_name", e.target.value)} className={inputClass} placeholder="업체명" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">담당자명 *</label>
                    <input type="text" required value={form.contact_name} onChange={(e) => updateField("contact_name", e.target.value)} className={inputClass} placeholder="담당자명" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">연락처 *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass} placeholder="010-0000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">업종 *</label>
                    <input type="text" required value={form.industry} onChange={(e) => updateField("industry", e.target.value)} className={inputClass} placeholder="예: 병원, 부동산, 음식점" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">문의내용 *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => updateField("message", e.target.value)} className={`${inputClass} resize-none`} placeholder="현재 상황, 고민, 원하시는 방향 등을 자유롭게 적어주세요" />
                </div>
              </div>

              {/* Optional */}
              <div className="pt-6 border-t border-slate-100 mb-8">
                <h2 className="text-base font-extrabold text-deep-navy mb-1">추가 정보</h2>
                <p className="text-xs text-slate-400 mb-6">선택 항목입니다</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">희망 광고 채널</label>
                    <select value={form.channel} onChange={(e) => updateField("channel", e.target.value)} className={inputClass}>
                      <option value="">선택해주세요</option>
                      {channelOptions.map((ch) => <option key={ch} value={ch}>{ch}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">월 광고 예산</label>
                    <select value={form.budget} onChange={(e) => updateField("budget", e.target.value)} className={inputClass}>
                      <option value="">선택해주세요</option>
                      {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">홈페이지/랜딩페이지 보유 여부</label>
                    <div className="flex gap-4">
                      {["보유", "미보유", "제작 예정"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                          <input type="radio" name="hasWebsite" value={opt} checked={form.has_website === opt} onChange={(e) => updateField("has_website", e.target.value)} className="accent-accent-blue w-4 h-4" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div className="pt-6 border-t border-slate-100 mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 accent-accent-blue w-4 h-4" />
                  <span className="text-xs text-slate-500">
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
                  </span>
                </label>
              </div>

              {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

              <button type="submit" disabled={submitting}
                className="w-full py-4 bg-linear-to-r from-cta-orange to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cta-orange/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {submitting ? "접수 중..." : <>상담 요청하기 <IconArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <IconPhone className="w-5 h-5 text-accent-blue" />, bg: "bg-accent-blue/8", title: "전화 상담", sub: "OOO-OOOO-OOOO" },
              { icon: <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" /></svg>, bg: "bg-amber-50", title: "카카오톡 상담", sub: "빠른 상담 가능" },
              { icon: <IconClock className="w-5 h-5 text-accent-blue" />, bg: "bg-accent-blue/8", title: "운영시간", sub: "평일 09:00 - 18:00" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-2xl border border-slate-100 text-center">
                <div className={`w-11 h-11 mx-auto ${item.bg} rounded-xl flex items-center justify-center mb-3`}>
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
