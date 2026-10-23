"use client";

import { useEffect, useState } from "react";
import { adminApi, formatPhone } from "@/components/admin/api";
import { Card, Field, Notice, inputCls } from "@/components/admin/ui";

type Status = { mode: "alimtalk" | "sms" | "off"; hasMake: boolean };
type Message = { tone: "success" | "error" | "warning"; text: string } | null;

const MODE_TEXT: Record<Status["mode"], string> = {
  alimtalk: "새 접수가 들어오면 카카오 알림톡으로 보냅니다.",
  sms: "알림톡 템플릿 승인 전이라, 새 접수가 들어오면 문자(LMS)로 보냅니다.",
  off: "아직 카카오톡 발송 설정 전입니다. 접수 내역은 '상담 접수' 탭에서 확인할 수 있습니다.",
};

/* 알림·계정 설정 — 알림 받을 번호·테스트 알림, 관리자 아이디·비밀번호 변경 */
export default function SettingsPanel({ username, onAccountChanged }: { username: string; onAccountChanged: (username: string) => void }) {
  const [status, setStatus] = useState<Status | null>(null);
  const [numbers, setNumbers] = useState<string[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [numberMsg, setNumberMsg] = useState<Message>(null);
  const [testMsg, setTestMsg] = useState<Message>(null);
  const [accountMsg, setAccountMsg] = useState<Message>(null);
  const [busy, setBusy] = useState<"numbers" | "test" | "account" | null>(null);
  const [account, setAccount] = useState({ username, next: "", confirm: "", current: "" });

  useEffect(() => {
    adminApi<{ status: Status; recipients: string[] }>("/api/admin/notify").then(({ ok, data }) => {
      if (!ok || !data.status) return setLoadError(data.error ?? "알림 설정을 불러오지 못했습니다.");
      setStatus(data.status);
      setNumbers((data.recipients ?? []).map(formatPhone));
    });
  }, []);

  async function saveNumbers() {
    setBusy("numbers");
    const { ok, data } = await adminApi<{ recipients: string[] }>("/api/admin/notify", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipients: numbers.filter((n) => n.trim()) }),
    });
    setBusy(null);
    if (!ok || !data.recipients) return setNumberMsg({ tone: "error", text: data.error ?? "저장하지 못했습니다." });
    setNumbers(data.recipients.map(formatPhone));
    setNumberMsg(data.recipients.length ? { tone: "success", text: "알림 받을 번호를 저장했습니다." } : { tone: "warning", text: "등록된 번호가 없어 새 접수 알림이 가지 않습니다." });
  }

  async function sendTest() {
    setBusy("test");
    const { data } = await adminApi<{ ok: boolean; message: string }>("/api/admin/notify", { method: "POST" });
    setBusy(null);
    setTestMsg({ tone: data.ok ? "success" : "error", text: data.message ?? data.error ?? "테스트 알림을 보내지 못했습니다." });
  }

  const idChanged = account.username.trim().toLowerCase() !== username;

  async function saveAccount() {
    if (account.next !== account.confirm) return setAccountMsg({ tone: "error", text: "새 비밀번호와 확인이 다릅니다." });
    setBusy("account");
    const { ok, data } = await adminApi<{ username: string }>("/api/admin/session", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: account.username, next: account.next, current: account.current }),
    });
    setBusy(null);
    if (!ok || !data.username) return setAccountMsg({ tone: "error", text: data.error ?? "계정을 저장하지 못했습니다." });
    const changed = idChanged && account.next ? `새 아이디(${data.username})와 새 비밀번호` : idChanged ? `새 아이디(${data.username})` : "새 비밀번호";
    setAccount({ username: data.username, next: "", confirm: "", current: "" });
    setAccountMsg({ tone: "success", text: `계정을 저장했습니다. 다음 로그인부터 ${changed}를 쓰세요.` });
    onAccountChanged(data.username);
  }

  if (loadError) return <Notice tone="error">{loadError}</Notice>;
  if (!status) return <p className="rounded-2xl border border-g200 bg-white py-16 text-center text-[16px] text-g500">불러오는 중…</p>;
  const canTest = (status.mode !== "off" && numbers.some((n) => n.trim())) || status.hasMake;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="space-y-5">
        <Card title="새 상담 접수 알림" desc="홈페이지로 상담 신청이 들어오면 아래 번호로 카카오톡 알림을 보냅니다.">
          <p className={`rounded-xl px-4 py-3 text-[15px] font-semibold ${status.mode === "off" ? "bg-g50 text-g700" : "bg-emerald-50 text-emerald-800"}`}>{MODE_TEXT[status.mode]}</p>

          <div className="mt-5 space-y-3">
            {numbers.map((n, i) => (
              <div key={i} className="flex gap-2">
                <label htmlFor={`notify-${i}`} className="sr-only">
                  알림 받을 번호 {i + 1}
                </label>
                <input id={`notify-${i}`} inputMode="tel" value={n} onChange={(e) => setNumbers((list) => list.map((v, j) => (j === i ? e.target.value : v)))} placeholder="010-0000-0000" className={inputCls} />
                <button type="button" onClick={() => setNumbers((list) => list.filter((_, j) => j !== i))} className="min-h-12 shrink-0 rounded-xl border border-g200 px-4 text-[15px] font-semibold text-g600 hover:bg-g50">
                  삭제
                </button>
              </div>
            ))}
            {numbers.length === 0 && <p className="text-[15px] text-g500">등록된 번호가 없습니다.</p>}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {numbers.length < 3 && (
              <button type="button" onClick={() => setNumbers((list) => [...list, ""])} className="min-h-11 rounded-full border border-g200 px-4 text-[15px] font-bold text-g700 hover:bg-g50">
                + 번호 추가 (최대 3개)
              </button>
            )}
            <button type="button" onClick={saveNumbers} disabled={busy !== null} className="btn btn-brand min-h-11 px-5 text-[15px] disabled:opacity-50">
              {busy === "numbers" ? "저장 중…" : "번호 저장"}
            </button>
          </div>
          {numberMsg && (
            <div className="mt-3">
              <Notice tone={numberMsg.tone}>{numberMsg.text}</Notice>
            </div>
          )}

          <div className="mt-6 border-t border-g200 pt-5">
            <button type="button" onClick={sendTest} disabled={!canTest || busy !== null} className="min-h-11 rounded-full bg-ink px-5 text-[15px] font-bold text-white disabled:opacity-40">
              {busy === "test" ? "보내는 중…" : "테스트 알림 보내기"}
            </button>
            <p className="mt-2 text-[14px] text-g500">{canTest ? "등록된 번호로 '테스트 업체' 예시 알림을 보냅니다. (10분에 3번까지)" : "카카오톡 발송 설정이 끝나면 눌러서 확인할 수 있습니다."}</p>
            {testMsg && (
              <div className="mt-3">
                <Notice tone={testMsg.tone}>{testMsg.text}</Notice>
              </div>
            )}
          </div>
        </Card>
      </div>

      <div className="space-y-5">
        <Card title="관리자 계정" desc="로그인 아이디와 비밀번호를 바꿉니다. 비밀번호는 암호화해서 저장되며, 잊어버리면 개발 담당에게 초기화를 요청하세요.">
          <p className="rounded-xl bg-g50 px-4 py-3 text-[15px] text-g700">
            현재 아이디 <b className="ml-1 font-extrabold text-ink">{username}</b>
          </p>
          <div className="mt-5 space-y-3">
            <Field id="account-username" label="아이디" hint="영문 소문자·숫자 4~20자 (. _ - 사용 가능)">
              <input id="account-username" autoComplete="username" autoCapitalize="none" spellCheck={false} value={account.username} onChange={(e) => setAccount((a) => ({ ...a, username: e.target.value }))} className={inputCls} />
            </Field>
            <Field id="account-next" label="새 비밀번호" hint="6자 이상 · 아이디만 바꿀 때는 비워 두세요">
              <input id="account-next" type="password" autoComplete="new-password" value={account.next} onChange={(e) => setAccount((a) => ({ ...a, next: e.target.value }))} className={inputCls} />
            </Field>
            <Field id="account-confirm" label="새 비밀번호 확인">
              <input id="account-confirm" type="password" autoComplete="new-password" value={account.confirm} onChange={(e) => setAccount((a) => ({ ...a, confirm: e.target.value }))} className={inputCls} />
            </Field>
            <div className="border-t border-g200 pt-4">
              <Field id="account-current" label="현재 비밀번호" hint="저장하려면 지금 쓰는 비밀번호를 입력해 주세요.">
                <input id="account-current" type="password" autoComplete="current-password" value={account.current} onChange={(e) => setAccount((a) => ({ ...a, current: e.target.value }))} className={inputCls} />
              </Field>
            </div>
            <button
              type="button"
              onClick={saveAccount}
              disabled={busy !== null || !account.current || !(idChanged || account.next) || (account.next !== "" && account.next.length < 6)}
              className="btn btn-brand min-h-11 px-5 text-[15px] disabled:opacity-50"
            >
              {busy === "account" ? "저장 중…" : "계정 저장"}
            </button>
            {accountMsg && <Notice tone={accountMsg.tone}>{accountMsg.text}</Notice>}
          </div>
        </Card>
      </div>
    </div>
  );
}
