"use client";

import { useEffect, useState } from "react";
import { adminApi, formatDateTime } from "@/components/admin/api";
import { Notice, inputCls } from "@/components/admin/ui";
import type { Inquiry, InquiryStatus } from "@/lib/inquiry";

const STATUS: Record<InquiryStatus, { label: string; badge: string }> = {
  new: { label: "신규", badge: "bg-blue-100 text-blue-700" },
  in_progress: { label: "진행중", badge: "bg-amber-100 text-amber-800" },
  completed: { label: "완료", badge: "bg-emerald-100 text-emerald-700" },
  cancelled: { label: "취소", badge: "bg-g100 text-g600" },
};
const FILTERS: { value: "all" | InquiryStatus; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "new", label: "신규" },
  { value: "in_progress", label: "진행중" },
  { value: "completed", label: "완료" },
  { value: "cancelled", label: "취소" },
];

type ListResult = { key: string; items: Inquiry[]; count: number; newCount: number; limit: number; error?: string };

/* 상담 접수 내역 — 목록(필터·쪽수) + 선택한 건의 상세·상태 변경·메모·삭제 */
export default function InquiriesPanel({ onNewCount }: { onNewCount: (n: number) => void }) {
  const [query, setQuery] = useState<{ status: "all" | InquiryStatus; page: number; nonce: number }>({ status: "all", page: 1, nonce: 0 });
  const [result, setResult] = useState<ListResult | null>(null);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [memo, setMemo] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ tone: "success" | "error"; text: string } | null>(null);

  const key = `${query.status}:${query.page}:${query.nonce}`;
  const loading = result?.key !== key;

  useEffect(() => {
    const ctrl = new AbortController();
    adminApi<{ data: Inquiry[]; count: number; newCount: number; limit: number }>(`/api/inquiries?status=${query.status}&page=${query.page}`, { signal: ctrl.signal })
      .then(({ ok, data }) => {
        setResult({ key, items: ok ? (data.data ?? []) : [], count: data.count ?? 0, newCount: data.newCount ?? 0, limit: data.limit ?? 20, error: ok ? undefined : data.error });
        if (ok) onNewCount(data.newCount ?? 0);
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [key, query.status, query.page, onNewCount]);

  const reload = () => setQuery((q) => ({ ...q, nonce: q.nonce + 1 }));
  const select = (inq: Inquiry) => {
    setSelected(inq);
    setMemo(inq.admin_memo ?? "");
    setMessage(null);
  };

  async function update(id: number, patch: Partial<Pick<Inquiry, "status" | "admin_memo">>, done: string) {
    setBusy(true);
    const { ok, data } = await adminApi<{ data: Inquiry }>(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    setBusy(false);
    if (!ok || !data.data) return setMessage({ tone: "error", text: data.error ?? "저장하지 못했습니다." });
    setSelected(data.data);
    setMessage({ tone: "success", text: done });
    reload();
  }

  async function remove(inq: Inquiry) {
    if (!confirm(`'${inq.company_name}' 접수를 삭제할까요? 삭제하면 되돌릴 수 없습니다.`)) return;
    setBusy(true);
    const { ok, data } = await adminApi(`/api/inquiries/${inq.id}`, { method: "DELETE" });
    setBusy(false);
    if (!ok) return setMessage({ tone: "error", text: data.error ?? "삭제하지 못했습니다." });
    setSelected(null);
    reload();
  }

  const items = result?.items ?? [];
  const totalPages = result ? Math.max(1, Math.ceil(result.count / result.limit)) : 1;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setQuery({ status: f.value, page: 1, nonce: query.nonce })}
            aria-pressed={query.status === f.value}
            className={`min-h-10 rounded-full px-4 text-[15px] font-bold transition-colors ${query.status === f.value ? "bg-ink text-white" : "border border-g200 bg-white text-g700 hover:bg-g50"}`}
          >
            {f.label}
            {f.value === "new" && result && result.newCount > 0 && <span className="ml-1.5 tabular-nums">{result.newCount}</span>}
          </button>
        ))}
        <span className="ml-auto text-[15px] text-g600">{result ? `총 ${result.count}건` : ""}</span>
        <button type="button" onClick={reload} className="min-h-10 rounded-full border border-g200 bg-white px-4 text-[15px] font-bold text-g700 hover:bg-g50">
          새로고침
        </button>
      </div>

      {result?.error && <Notice tone="error">{result.error}</Notice>}

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div className="space-y-2">
          {loading && !result ? (
            <p className="rounded-2xl border border-g200 bg-white py-16 text-center text-[16px] text-g500">불러오는 중…</p>
          ) : items.length === 0 ? (
            <div className="rounded-2xl border border-g200 bg-white px-6 py-16 text-center">
              <p className="text-[17px] font-bold text-g700">{query.status === "all" ? "아직 접수된 상담이 없습니다" : "이 상태의 접수가 없습니다"}</p>
              <p className="mt-1.5 text-[15px] text-g500">홈페이지 상담 신청이 들어오면 여기에 바로 쌓입니다.</p>
            </div>
          ) : (
            items.map((inq) => (
              <button
                key={inq.id}
                type="button"
                onClick={() => select(inq)}
                className={`w-full rounded-2xl border bg-white p-4 text-left transition-colors sm:p-5 ${selected?.id === inq.id ? "border-brand ring-4 ring-brand/10" : "border-g200 hover:border-g300"}`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className={`shrink-0 rounded-md px-2 py-0.5 text-[13px] font-bold ${STATUS[inq.status]?.badge ?? STATUS.cancelled.badge}`}>{STATUS[inq.status]?.label ?? inq.status}</span>
                      <span className="truncate text-[17px] font-extrabold tracking-[-0.02em] text-ink">{inq.company_name}</span>
                    </span>
                    <span className="mt-1 block truncate text-[15px] text-g600">
                      {inq.contact_name} · {inq.phone} · {inq.industry}
                    </span>
                  </span>
                  <span className="shrink-0 text-[13px] tabular-nums text-g500">{formatDateTime(inq.created_at)}</span>
                </span>
              </button>
            ))
          )}

          {totalPages > 1 && (
            <nav aria-label="쪽 이동" className="flex flex-wrap justify-center gap-1.5 pt-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setQuery((q) => ({ ...q, page: p }))}
                  aria-current={p === query.page ? "page" : undefined}
                  className={`h-10 min-w-10 rounded-lg text-[15px] font-bold ${p === query.page ? "bg-ink text-white" : "border border-g200 bg-white text-g600"}`}
                >
                  {p}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* 상세: 데스크톱은 오른쪽 고정, 모바일은 화면 전체로 덮음 */}
        {selected ? (
          <div className="fixed inset-0 z-40 overflow-y-auto bg-g50 p-4 lg:static lg:z-auto lg:bg-transparent lg:p-0">
            <div className="rounded-2xl border border-g200 bg-white p-5 sm:p-6 lg:sticky lg:top-24">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[14px] text-g500">{formatDateTime(selected.created_at)} 접수</p>
                  <h2 className="mt-1 text-[21px] font-extrabold tracking-[-0.03em] text-ink">{selected.company_name}</h2>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="min-h-10 shrink-0 rounded-full border border-g200 px-4 text-[15px] font-bold text-g700 hover:bg-g50 lg:hidden">
                  목록
                </button>
              </div>

              <dl className="mt-5 space-y-2.5 text-[16px]">
                {[
                  ["담당자", selected.contact_name],
                  ["연락처", selected.phone],
                  ["업종", selected.industry],
                  ["희망 채널", selected.channel || "-"],
                  ["월 예산", selected.budget || "-"],
                  ["홈페이지", selected.has_website || "-"],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-3">
                    <dt className="w-20 shrink-0 font-semibold text-g500">{label}</dt>
                    <dd className="min-w-0 break-words text-g800">
                      {label === "연락처" ? (
                        <a href={`tel:${selected.phone.replace(/[^0-9+]/g, "")}`} className="font-bold text-brand underline underline-offset-4">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-xl bg-g50 p-4">
                <p className="text-[14px] font-bold text-g500">문의 내용</p>
                <p className="mt-1.5 whitespace-pre-wrap break-words text-[16px] leading-relaxed text-g800">{selected.message}</p>
              </div>

              <div className="mt-5">
                <p className="text-[14px] font-bold text-g500">진행 상태</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {(Object.keys(STATUS) as InquiryStatus[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      disabled={busy || selected.status === s}
                      onClick={() => update(selected.id, { status: s }, `상태를 '${STATUS[s].label}'(으)로 바꿨습니다.`)}
                      aria-pressed={selected.status === s}
                      className={`min-h-10 rounded-lg px-3.5 text-[15px] font-bold transition-colors disabled:cursor-default ${selected.status === s ? STATUS[s].badge : "bg-g50 text-g600 hover:bg-g100"}`}
                    >
                      {STATUS[s].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="admin-memo" className="text-[14px] font-bold text-g500">
                  관리자 메모
                </label>
                <textarea id="admin-memo" value={memo} onChange={(e) => setMemo(e.target.value)} rows={3} maxLength={2000} placeholder="통화 내용, 다음 연락 일정 등 내부 메모" className={`${inputCls} mt-2 resize-y`} />
                <button
                  type="button"
                  disabled={busy || memo === (selected.admin_memo ?? "")}
                  onClick={() => update(selected.id, { admin_memo: memo }, "메모를 저장했습니다.")}
                  className="btn btn-brand mt-2 min-h-11 w-full text-[15px] disabled:opacity-50"
                >
                  메모 저장
                </button>
              </div>

              {message && (
                <div className="mt-4">
                  <Notice tone={message.tone}>{message.text}</Notice>
                </div>
              )}

              <button type="button" disabled={busy} onClick={() => remove(selected)} className="mt-5 min-h-10 text-[15px] font-semibold text-red-600 hover:underline">
                이 접수 삭제
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden rounded-2xl border border-dashed border-g300 p-10 text-center text-[16px] text-g500 lg:block">왼쪽 목록에서 접수를 고르면 내용이 보입니다.</div>
        )}
      </div>
    </div>
  );
}
