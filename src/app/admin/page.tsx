"use client";

import { useState, useEffect, useCallback } from "react";
import type { Inquiry } from "@/lib/supabase";

const statusMap: Record<string, { label: string; color: string }> = {
  new: { label: "신규", color: "bg-blue-100 text-blue-700" },
  in_progress: { label: "진행중", color: "bg-amber-100 text-amber-700" },
  completed: { label: "완료", color: "bg-emerald-100 text-emerald-700" },
  cancelled: { label: "취소", color: "bg-slate-100 text-slate-500" },
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [memo, setMemo] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/inquiries?password=${password}&status=${statusFilter}&page=${page}`);
      if (!res.ok) { setAuthed(false); return; }
      const data = await res.json();
      setInquiries(data.data || []);
      setCount(data.count || 0);
    } catch { /* ignore */ }
    setLoading(false);
  }, [password, statusFilter, page]);

  useEffect(() => {
    if (authed) fetchInquiries();
  }, [authed, fetchInquiries]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === "1234") {
      setAuthed(true);
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  }

  async function updateStatus(id: number, newStatus: string) {
    setSaving(true);
    await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, status: newStatus }),
    });
    await fetchInquiries();
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, status: newStatus as Inquiry["status"] } : null);
    setSaving(false);
  }

  async function saveMemo() {
    if (!selected) return;
    setSaving(true);
    await fetch(`/api/inquiries/${selected.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, admin_memo: memo }),
    });
    await fetchInquiries();
    setSelected((prev) => prev ? { ...prev, admin_memo: memo } : null);
    setSaving(false);
  }

  async function deleteInquiry(id: number) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await fetch(`/api/inquiries/${id}?password=${password}`, { method: "DELETE" });
    setSelected(null);
    await fetchInquiries();
  }

  function formatDate(d: string) {
    return new Date(d).toLocaleString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  }

  const totalPages = Math.ceil(count / 20);

  // ── Login screen ──
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
          <h1 className="text-xl font-extrabold text-deep-navy mb-1 text-center">관리자 로그인</h1>
          <p className="text-xs text-slate-400 text-center mb-6">여울디앤씨 문의 관리 시스템</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/15 outline-none text-sm mb-4" autoFocus />
          <button type="submit" className="w-full py-3 bg-deep-navy text-white text-sm font-bold rounded-xl hover:bg-deep-navy/90 transition-colors">
            로그인
          </button>
        </form>
      </div>
    );
  }

  // ── Admin dashboard ──
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <h1 className="text-sm font-bold text-deep-navy">여울디앤씨 관리자</h1>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">총 {count}건</span>
            <button onClick={() => setAuthed(false)} className="text-xs text-slate-400 hover:text-red-500 transition-colors">로그아웃</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { value: "all", label: "전체" },
            { value: "new", label: "신규" },
            { value: "in_progress", label: "진행중" },
            { value: "completed", label: "완료" },
            { value: "cancelled", label: "취소" },
          ].map((f) => (
            <button key={f.value} onClick={() => { setStatusFilter(f.value); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${statusFilter === f.value ? "bg-deep-navy text-white" : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"}`}>
              {f.label}
            </button>
          ))}
          <button onClick={fetchInquiries} className="ml-auto px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-500 border border-slate-200 hover:bg-slate-50">
            새로고침
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-5 lg:gap-6">
          {/* List */}
          <div className="lg:col-span-3 space-y-2 mb-6 lg:mb-0">
            {loading ? (
              <div className="text-center py-16 text-sm text-slate-400">불러오는 중...</div>
            ) : inquiries.length === 0 ? (
              <div className="text-center py-16 text-sm text-slate-400 bg-white rounded-2xl border border-slate-100">문의 내역이 없습니다</div>
            ) : (
              <>
                {inquiries.map((inq) => (
                  <button key={inq.id} onClick={() => { setSelected(inq); setMemo(inq.admin_memo || ""); }}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${selected?.id === inq.id ? "border-accent-blue bg-accent-blue/4 shadow-sm" : "border-slate-100 bg-white hover:border-slate-200"}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${statusMap[inq.status]?.color || "bg-slate-100 text-slate-500"}`}>
                            {statusMap[inq.status]?.label || inq.status}
                          </span>
                          <span className="text-xs font-bold text-deep-navy truncate">{inq.company_name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">{inq.contact_name} / {inq.phone} / {inq.industry}</p>
                      </div>
                      <span className="text-[10px] text-slate-300 shrink-0">{formatDate(inq.created_at)}</span>
                    </div>
                  </button>
                ))}
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-1 pt-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button key={p} onClick={() => setPage(p)}
                        className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${p === page ? "bg-deep-navy text-white" : "bg-white text-slate-400 border border-slate-200"}`}>
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-5 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-deep-navy">{selected.company_name}</h2>
                  <button onClick={() => deleteInquiry(selected.id)} className="text-[10px] text-red-400 hover:text-red-600">삭제</button>
                </div>

                <div className="space-y-2.5 text-xs mb-5">
                  {[
                    { label: "담당자", value: selected.contact_name },
                    { label: "연락처", value: selected.phone },
                    { label: "업종", value: selected.industry },
                    { label: "희망채널", value: selected.channel || "-" },
                    { label: "예산", value: selected.budget || "-" },
                    { label: "홈페이지", value: selected.has_website || "-" },
                    { label: "접수일", value: formatDate(selected.created_at) },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <span className="text-slate-400 shrink-0 w-14 font-medium">{row.label}</span>
                      <span className="text-slate-700">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">문의 내용</p>
                  <p className="text-xs text-slate-700 whitespace-pre-wrap">{selected.message}</p>
                </div>

                {/* Status change */}
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">상태 변경</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(["new", "in_progress", "completed", "cancelled"] as const).map((s) => (
                      <button key={s} onClick={() => updateStatus(selected.id, s)} disabled={saving}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${selected.status === s ? statusMap[s].color : "bg-slate-50 text-slate-400 hover:bg-slate-100"}`}>
                        {statusMap[s].label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Memo */}
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">관리자 메모</p>
                  <textarea value={memo} onChange={(e) => setMemo(e.target.value)} rows={3}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-accent-blue outline-none text-xs resize-none" placeholder="내부 메모를 남겨주세요" />
                  <button onClick={saveMemo} disabled={saving}
                    className="mt-2 w-full py-2 bg-accent-blue text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50">
                    {saving ? "저장 중..." : "메모 저장"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center text-xs text-slate-400">
                좌측에서 문의를 선택하세요
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
