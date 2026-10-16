"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/Logo";
import InquiriesPanel from "@/components/admin/InquiriesPanel";
import PopupPanel from "@/components/admin/PopupPanel";
import SettingsPanel from "@/components/admin/SettingsPanel";
import { UNAUTHORIZED_EVENT, adminApi } from "@/components/admin/api";
import { Notice, inputCls } from "@/components/admin/ui";

type Session = { authenticated: boolean; defaultPassword?: boolean };
type Tab = "inquiries" | "popup" | "settings";

const loadSession = () => adminApi<Session>("/api/admin/session").then(({ data }): Session => ({ authenticated: Boolean(data.authenticated), defaultPassword: data.defaultPassword }));

const TABS: { id: Tab; label: string }[] = [
  { id: "inquiries", label: "상담 접수" },
  { id: "popup", label: "팝업 관리" },
  { id: "settings", label: "알림·계정 설정" },
];

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { ok, data } = await adminApi("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (!ok) return setError(data.error ?? "로그인하지 못했습니다.");
    onSuccess();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-g50 px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl border border-g200 bg-white p-7 shadow-soft sm:p-9">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-g100">
          <LogoMark className="w-12" alt="" />
        </div>
        <h1 className="mt-5 text-center text-[24px] font-extrabold tracking-[-0.04em] text-ink">관리자 로그인</h1>
        <p className="mt-1 text-center text-[15px] text-g600">여울디앤씨 홈페이지 관리</p>
        <label htmlFor="admin-password" className="mt-7 block text-[15px] font-bold text-g800">
          비밀번호
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null);
          }}
          className={`${inputCls} mt-2`}
          autoFocus
        />
        {error && (
          <div className="mt-3">
            <Notice tone="error">{error}</Notice>
          </div>
        )}
        <button type="submit" disabled={busy || !password} className="btn btn-brand mt-5 min-h-13 w-full text-[16px] disabled:opacity-50">
          {busy ? "확인 중…" : "로그인"}
        </button>
      </form>
    </main>
  );
}

/* 관리자 — 비밀번호는 서버에서 확인하고 로그인 쿠키(12시간)로 유지 */
export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [tab, setTab] = useState<Tab>("inquiries");
  const [newCount, setNewCount] = useState<number | null>(null);

  const refresh = () => loadSession().then(setSession);

  useEffect(() => {
    loadSession()
      .then(setSession)
      .catch(() => setSession({ authenticated: false }));
    const onUnauthorized = () => setSession({ authenticated: false });
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
    return () => window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
  }, []);

  async function logout() {
    await adminApi("/api/admin/session", { method: "DELETE" });
    setSession({ authenticated: false });
  }

  if (!session) return <main className="min-h-screen bg-g50" aria-busy="true" />;
  if (!session.authenticated) return <LoginForm onSuccess={refresh} />;

  return (
    <div className="min-h-screen bg-g50">
      <header className="sticky top-0 z-30 border-b border-g200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <LogoMark className="w-9" alt="" />
          <h1 className="text-[17px] font-extrabold tracking-[-0.03em] text-ink">여울디앤씨 관리자</h1>
          <div className="ml-auto flex items-center gap-1">
            <Link href="/" target="_blank" rel="noopener noreferrer" className="hidden min-h-10 items-center rounded-full px-3 text-[15px] font-semibold text-g600 hover:bg-g100 sm:inline-flex">
              사이트 보기 ↗
            </Link>
            <button type="button" onClick={logout} className="min-h-10 rounded-full px-3 text-[15px] font-semibold text-g600 hover:bg-g100">
              로그아웃
            </button>
          </div>
        </div>
        <nav aria-label="관리 메뉴" className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="no-scrollbar -mb-px flex gap-1 overflow-x-auto">
            {TABS.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setTab(t.id)}
                  aria-current={tab === t.id ? "page" : undefined}
                  className={`flex min-h-12 items-center gap-1.5 whitespace-nowrap border-b-[3px] px-3 text-[16px] font-bold transition-colors ${tab === t.id ? "border-brand text-ink" : "border-transparent text-g500 hover:text-g800"}`}
                >
                  {t.label}
                  {t.id === "inquiries" && newCount ? <span className="rounded-full bg-signal px-2 py-0.5 text-[12px] font-extrabold tabular-nums text-white">{newCount}</span> : null}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {session.defaultPassword && (
        <div className="border-b border-amber-200 bg-amber-50">
          <p className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3 text-[15px] font-semibold text-amber-900 sm:px-6">
            초기 비밀번호(1234)를 사용 중입니다. 누구나 추측하기 쉬우니 바꿔 주세요.
            <button type="button" onClick={() => setTab("settings")} className="underline underline-offset-4">
              비밀번호 바꾸기
            </button>
          </p>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {tab === "inquiries" && <InquiriesPanel onNewCount={setNewCount} />}
        {tab === "popup" && <PopupPanel />}
        {tab === "settings" && <SettingsPanel onPasswordChanged={() => setSession((s) => (s ? { ...s, defaultPassword: false } : s))} />}
      </main>
    </div>
  );
}
