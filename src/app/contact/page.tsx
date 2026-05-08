"use client";

import { useEffect, useRef, useState } from "react";
import { IconPhone, IconClock, IconCheck, IconArrowRight, IconMail, IconBuilding } from "@/components/Icons";

type ChannelOption = {
  value: string;
  logo?: string;
  icon?: "mail" | "building" | "help";
  tone: string; // tailwind color token for ring/dot
};

const channelOptions: ChannelOption[] = [
  { value: "카카오 광고", logo: "kakaotalk", tone: "amber" },
  { value: "네이버 광고", logo: "naver", tone: "emerald" },
  { value: "메타 광고", logo: "meta", tone: "blue" },
  { value: "유튜브 광고", logo: "youtube", tone: "red" },
  { value: "구글 광고", logo: "google", tone: "sky" },
  { value: "문자 마케팅", icon: "mail", tone: "violet" },
  { value: "당근 광고", logo: "danggeun", tone: "orange" },
  { value: "부동산 특화 광고", icon: "building", tone: "teal" },
  { value: "잘 모르겠음", icon: "help", tone: "slate" },
];

const budgetOptions = [
  { value: "100만원 미만", level: 1 },
  { value: "100~300만원", level: 2 },
  { value: "300~500만원", level: 3 },
  { value: "500~1,000만원", level: 4 },
  { value: "1,000만원 이상", level: 5 },
  { value: "미정 / 상담 후 결정", level: 0 },
];

const toneMap: Record<string, { dot: string; ring: string; bg: string; text: string }> = {
  amber:   { dot: "bg-amber-400",   ring: "ring-amber-200",   bg: "bg-amber-50",   text: "text-amber-700" },
  emerald: { dot: "bg-emerald-500", ring: "ring-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700" },
  blue:    { dot: "bg-blue-500",    ring: "ring-blue-200",    bg: "bg-blue-50",    text: "text-blue-700" },
  red:     { dot: "bg-red-500",     ring: "ring-red-200",     bg: "bg-red-50",     text: "text-red-700" },
  sky:     { dot: "bg-sky-500",     ring: "ring-sky-200",     bg: "bg-sky-50",     text: "text-sky-700" },
  violet:  { dot: "bg-violet-500",  ring: "ring-violet-200",  bg: "bg-violet-50",  text: "text-violet-700" },
  orange:  { dot: "bg-orange-500",  ring: "ring-orange-200",  bg: "bg-orange-50",  text: "text-orange-700" },
  teal:    { dot: "bg-teal-500",    ring: "ring-teal-200",    bg: "bg-teal-50",    text: "text-teal-700" },
  slate:   { dot: "bg-slate-400",   ring: "ring-slate-200",   bg: "bg-slate-50",   text: "text-slate-600" },
};

function ChannelIcon({ item, className = "w-5 h-5" }: { item: ChannelOption; className?: string }) {
  if (item.logo) {
    return <img src={`/images/logos/${item.logo}.svg`} alt="" className={`${className} object-contain`} />;
  }
  if (item.icon === "mail") return <IconMail className={`${className} text-violet-600`} />;
  if (item.icon === "building") return <IconBuilding className={`${className} text-teal-600`} />;
  return (
    <svg className={`${className} text-slate-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.5v.2M12 17h.01" />
    </svg>
  );
}

/** ── Custom channel dropdown ─────────────────────────── */
function ChannelSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selected = channelOptions.find((o) => o.value === value);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => (i + 1) % channelOptions.length); }
      if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => (i - 1 + channelOptions.length) % channelOptions.length); }
      if (e.key === "Enter") { e.preventDefault(); onChange(channelOptions[activeIndex].value); setOpen(false); }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDocClick); document.removeEventListener("keydown", onKey); };
  }, [open, activeIndex, onChange]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`group w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border bg-white text-left transition-all duration-200 outline-none ${
          open
            ? "border-accent-blue ring-2 ring-accent-blue/15"
            : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <span className="flex items-center gap-2.5 min-w-0">
          {selected ? (
            <>
              <span className={`w-8 h-8 rounded-lg ${toneMap[selected.tone].bg} flex items-center justify-center shrink-0`}>
                <ChannelIcon item={selected} className="w-4 h-4" />
              </span>
              <span className="text-sm font-semibold text-deep-navy truncate">{selected.value}</span>
            </>
          ) : (
            <>
              <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </span>
              <span className="text-sm text-slate-400">광고 채널을 선택해주세요</span>
            </>
          )}
        </span>
        <svg className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-deep-navy/8 z-30 overflow-hidden animate-fade-in-up">
          <div className="max-h-80 overflow-y-auto py-1.5">
            <p className="px-4 pt-2 pb-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">광고 채널</p>
            <ul role="listbox" className="grid grid-cols-2 gap-1 px-1.5 pb-1.5">
              {channelOptions.map((opt, i) => {
                const isSelected = opt.value === value;
                const isActive = i === activeIndex;
                const t = toneMap[opt.tone];
                return (
                  <li key={opt.value} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => { onChange(opt.value); setOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl transition-all duration-150 ${
                        isSelected
                          ? `${t.bg} ring-2 ${t.ring}`
                          : isActive
                          ? "bg-slate-50"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-lg ${t.bg} flex items-center justify-center shrink-0`}>
                        <ChannelIcon item={opt} className="w-4 h-4" />
                      </span>
                      <span className={`text-[12px] font-semibold text-left truncate ${isSelected ? t.text : "text-slate-700"}`}>
                        {opt.value}
                      </span>
                      {isSelected && (
                        <span className={`ml-auto w-4 h-4 rounded-full ${t.dot} flex items-center justify-center shrink-0`}>
                          <IconCheck className="w-2.5 h-2.5 text-white" />
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/** ── Custom budget selector (segmented chip grid) ─────── */
function BudgetSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {budgetOptions.map((opt) => {
        const isSelected = opt.value === value;
        const isTBD = opt.level === 0;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`relative group flex flex-col items-start gap-1.5 px-3.5 py-3 rounded-xl border text-left transition-all duration-200 ${
              isSelected
                ? "border-accent-blue bg-accent-blue/5 ring-2 ring-accent-blue/15"
                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
            }`}
          >
            {!isTBD ? (
              <span className="flex items-end gap-0.5 h-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`w-1 rounded-sm transition-all duration-200 ${
                      n <= opt.level
                        ? isSelected ? "bg-accent-blue" : "bg-slate-300 group-hover:bg-slate-400"
                        : "bg-slate-100"
                    }`}
                    style={{ height: `${4 + n * 1.5}px` }}
                  />
                ))}
              </span>
            ) : (
              <svg className={`w-3.5 h-3.5 ${isSelected ? "text-accent-blue" : "text-slate-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
              </svg>
            )}
            <span className={`text-[12.5px] font-bold ${isSelected ? "text-accent-blue" : "text-deep-navy"}`}>
              {opt.value}
            </span>
            {isSelected && (
              <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-accent-blue flex items-center justify-center">
                <IconCheck className="w-2.5 h-2.5 text-white" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/** ── Radio-card for website presence ─────────────────── */
function WebsiteSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const opts = [
    { v: "보유", sub: "현재 운영 중", color: "from-emerald-500 to-emerald-600" },
    { v: "미보유", sub: "없습니다", color: "from-slate-500 to-slate-600" },
    { v: "제작 예정", sub: "준비 중", color: "from-blue-500 to-blue-600" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {opts.map((o) => {
        const isSelected = o.v === value;
        return (
          <button
            key={o.v}
            type="button"
            onClick={() => onChange(o.v)}
            className={`relative flex flex-col items-center justify-center gap-1 px-2 py-3 rounded-xl border text-center transition-all duration-200 ${
              isSelected
                ? "border-accent-blue bg-accent-blue/5 ring-2 ring-accent-blue/15"
                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
            }`}
          >
            <span className={`text-[13px] font-bold ${isSelected ? "text-accent-blue" : "text-deep-navy"}`}>
              {o.v}
            </span>
            <span className="text-[10px] text-slate-400">{o.sub}</span>
            {isSelected && (
              <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-accent-blue flex items-center justify-center">
                <IconCheck className="w-2.5 h-2.5 text-white" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

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
      <section className="relative overflow-hidden bg-[#060e1e]">
        <div className="absolute inset-0 bg-linear-to-br from-[#060e1e] via-[#0a1428]/95 to-[#060e1e]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-accent-blue/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cta-orange/10 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase">CONTACT · 무료 상담</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-hero text-white mb-3 sm:mb-4 tracking-tight">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">문의하기</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 sm:h-3 bg-accent-blue/25 z-0 rounded-sm" />
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 font-semibold">광고가 처음이셔도 괜찮습니다</p>
              <p className="text-[13px] sm:text-sm text-slate-400 mt-2 leading-relaxed mb-6">
                업종, 예산, 현재 고민을 남겨주시면<br className="sm:hidden" />
                {" "}맞는 방향부터 정리해드립니다
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  {
                    label: "무료 상담",
                    icon: (
                      <svg className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ),
                  },
                  {
                    label: "24시간 응답",
                    icon: (
                      <svg className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                  },
                  {
                    label: "맞춤 제안",
                    icon: (
                      <svg className="w-3.5 h-3.5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    ),
                  },
                ].map((b) => (
                  <div key={b.label} className="relative">
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-full bg-accent-blue/20" />
                    <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                      {b.icon}
                      <span className="text-[11px] font-bold text-slate-200">{b.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Floating contact card */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-2xl bg-accent-blue/30 blur-[3px]" />
                <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-extrabold text-accent-blue tracking-[0.2em] uppercase">QUICK CONTACT</p>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse-soft" />
                      <span className="text-[9px] font-bold text-emerald-400">LIVE</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    {[
                      {
                        label: "전화",
                        value: "OOO-OOOO-OOOO",
                        color: "from-accent-blue to-blue-600",
                        icon: (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        ),
                      },
                      {
                        label: "카카오톡",
                        value: "실시간 상담",
                        color: "from-yellow-400 to-amber-500",
                        icon: (
                          <svg className="w-4 h-4 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                          </svg>
                        ),
                      },
                      {
                        label: "이메일",
                        value: "OOO@OOO.com",
                        color: "from-violet-500 to-purple-600",
                        icon: (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                      },
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="relative w-10 h-10 shrink-0">
                          <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-linear-to-br ${c.color} opacity-50 blur-[1px]`} />
                          <div className={`relative w-full h-full rounded-xl bg-linear-to-br ${c.color} flex items-center justify-center shadow-md`}>
                            {c.icon}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400">{c.label}</p>
                          <p className="text-sm font-extrabold text-white">{c.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                    {[
                      { v: "100+", l: "누적 캠페인" },
                      { v: "2~4x", l: "목표 ROAS" },
                      { v: "24h", l: "빠른 응답" },
                    ].map((s, i) => (
                      <div key={i}>
                        <p className="text-base font-extrabold bg-linear-to-br from-white to-accent-blue bg-clip-text text-transparent">{s.v}</p>
                        <p className="text-[9px] text-slate-500">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16 lg:py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-16 sm:py-20 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm px-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <IconCheck className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-deep-navy mb-2.5 sm:mb-3">
                문의가 접수되었습니다
              </h2>
              <p className="text-slate-500 text-[13px] sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                빠른 시일 내에<br className="sm:hidden" />
                {" "}담당자가 연락드리겠습니다.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ company_name: "", contact_name: "", phone: "", industry: "", message: "", channel: "", budget: "", has_website: "" }); }}
                className="px-6 py-3 bg-accent-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                추가 문의하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm p-5 sm:p-8 lg:p-10">
              {/* Required */}
              <div className="mb-7 sm:mb-8">
                <h2 className="text-base font-extrabold text-deep-navy mb-1">기본 정보</h2>
                <p className="text-xs text-cta-orange mb-5 sm:mb-6">* 표시 항목은 필수입니다</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                <div className="mt-3 sm:mt-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">문의내용 *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => updateField("message", e.target.value)} className={`${inputClass} resize-none`} placeholder="현재 상황, 고민, 원하시는 방향 등을 자유롭게 적어주세요" />
                </div>
              </div>

              {/* Optional */}
              <div className="pt-5 sm:pt-6 border-t border-slate-100 mb-7 sm:mb-8">
                <h2 className="text-base font-extrabold text-deep-navy mb-1">추가 정보</h2>
                <p className="text-xs text-slate-400 mb-5 sm:mb-6">선택 항목입니다</p>
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                      <span>희망 광고 채널</span>
                      {form.channel && (
                        <button type="button" onClick={() => updateField("channel", "")} className="text-[11px] text-slate-400 hover:text-slate-600 font-medium">
                          초기화
                        </button>
                      )}
                    </label>
                    <ChannelSelect value={form.channel} onChange={(v) => updateField("channel", v)} />
                  </div>
                  <div>
                    <label className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                      <span>월 광고 예산</span>
                      {form.budget && (
                        <button type="button" onClick={() => updateField("budget", "")} className="text-[11px] text-slate-400 hover:text-slate-600 font-medium">
                          초기화
                        </button>
                      )}
                    </label>
                    <BudgetSelect value={form.budget} onChange={(v) => updateField("budget", v)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">홈페이지/랜딩페이지 보유 여부</label>
                    <WebsiteSelect value={form.has_website} onChange={(v) => updateField("has_website", v)} />
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div className="pt-5 sm:pt-6 border-t border-slate-100 mb-5 sm:mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 accent-accent-blue w-4 h-4 shrink-0" />
                  <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    개인정보 수집 및 이용에 동의합니다.<br className="sm:hidden" />
                    {" "}수집된 정보는 상담 목적으로만 사용되며,<br className="sm:hidden" />
                    {" "}상담 완료 후 즉시 파기됩니다.
                  </span>
                </label>
              </div>

              {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

              <button type="submit" disabled={submitting}
                className="w-full py-3.5 sm:py-4 bg-linear-to-r from-cta-orange to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cta-orange/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {submitting ? "접수 중..." : <>상담 요청하기 <IconArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          )}

          {/* Contact Info (3D isometric cards) */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: <IconPhone className="w-5 h-5 text-white" />,
                title: "전화 상담",
                sub: "OOO-OOOO-OOOO",
                hint: "빠른 답변",
                color: "from-accent-blue to-blue-600",
              },
              {
                icon: <svg className="w-5 h-5 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.82 3.06-.13.52.19.51.4.37.17-.11 2.69-1.83 3.78-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" /></svg>,
                title: "카카오톡 상담",
                sub: "실시간 상담 가능",
                hint: "추천",
                color: "from-yellow-400 to-amber-500",
                special: true,
              },
              {
                icon: <IconClock className="w-5 h-5 text-white" />,
                title: "운영시간",
                sub: "평일 09:00 - 18:00",
                hint: "주말 다음 영업일",
                color: "from-violet-500 to-purple-600",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group relative"
                style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s backwards` }}
              >
                <div className={`absolute inset-0 translate-x-1 translate-y-1.5 rounded-2xl bg-linear-to-br ${item.color} opacity-25 blur-[2px]`} />

                <div className="relative bg-white p-5 sm:p-6 rounded-2xl border border-white shadow-lg shadow-deep-navy/5 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden text-center">
                  <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-linear-to-br ${item.color} opacity-10 blur-xl`} />

                  {item.special && (
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-linear-to-br from-amber-400 to-amber-500 text-white text-[9px] font-extrabold shadow-md">
                        <span className="w-1 h-1 rounded-full bg-white animate-pulse-soft" />
                        {item.hint}
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    <div className="relative w-12 h-12 mx-auto mb-3">
                      <div className={`absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-xl bg-linear-to-br ${item.color} opacity-60 blur-[1px]`} />
                      <div className={`relative w-full h-full rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-md`}>
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-[13px] sm:text-sm font-extrabold text-deep-navy">{item.title}</p>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1">{item.sub}</p>
                    {!item.special && (
                      <p className="text-[10px] text-slate-400 mt-1.5 font-medium">{item.hint}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
