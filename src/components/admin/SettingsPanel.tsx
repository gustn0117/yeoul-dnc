"use client";

import { useEffect, useState } from "react";
import { adminApi, formatPhone } from "@/components/admin/api";
import { Card, Field, Notice, inputCls } from "@/components/admin/ui";

type Status = { mode: "alimtalk" | "sms" | "off"; hasKey: boolean; hasChannel: boolean; hasTemplate: boolean; hasSender: boolean; hasMake: boolean };
type Message = { tone: "success" | "error" | "warning"; text: string } | null;

const MODE_TEXT: Record<Status["mode"], string> = {
  alimtalk: "새 접수가 들어오면 카카오 알림톡으로 보냅니다.",
  sms: "알림톡 템플릿 승인 전이라, 새 접수가 들어오면 문자(LMS)로 보냅니다.",
  off: "아직 카카오톡 발송 설정 전입니다. 접수 내역은 '상담 접수' 탭에서 확인할 수 있습니다.",
};

function Check({ ok, label, note }: { ok: boolean; label: string; note: string }) {
  return (
    <li className="flex items-start gap-3 py-2.5">
      <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold ${ok ? "bg-emerald-100 text-emerald-700" : "bg-g100 text-g500"}`} aria-hidden="true">
        {ok ? "✓" : "–"}
      </span>
      <span>
        <span className="block text-[16px] font-bold text-g800">
          {label} <span className={`text-[14px] font-semibold ${ok ? "text-emerald-700" : "text-g500"}`}>{ok ? "연결됨" : "미설정"}</span>
        </span>
        <span className="block text-[14px] leading-relaxed text-g500">{note}</span>
      </span>
    </li>
  );
}

/* 알림·계정 설정 — 알림 받을 번호, 카카오톡 연동 상태·테스트, 관리자 비밀번호 변경 */
export default function SettingsPanel({ onPasswordChanged }: { onPasswordChanged: () => void }) {
  const [status, setStatus] = useState<Status | null>(null);
  const [numbers, setNumbers] = useState<string[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [numberMsg, setNumberMsg] = useState<Message>(null);
  const [testMsg, setTestMsg] = useState<Message>(null);
  const [pwMsg, setPwMsg] = useState<Message>(null);
  const [busy, setBusy] = useState<"numbers" | "test" | "password" | null>(null);
  const [pw, setPw] = useState({ current: "", next: "", confirm: "" });

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

  async function changePassword() {
    if (pw.next !== pw.confirm) return setPwMsg({ tone: "error", text: "새 비밀번호와 확인이 다릅니다." });
    setBusy("password");
    const { ok, data } = await adminApi("/api/admin/session", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ current: pw.current, next: pw.next }),
    });
    setBusy(null);
    if (!ok) return setPwMsg({ tone: "error", text: data.error ?? "비밀번호를 바꾸지 못했습니다." });
    setPw({ current: "", next: "", confirm: "" });
    setPwMsg({ tone: "success", text: "비밀번호를 바꿨습니다. 다음 로그인부터 새 비밀번호를 쓰세요." });
    onPasswordChanged();
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
        <Card title="카카오톡 연동 상태" desc="솔라피(SOLAPI)로 카카오 알림톡을 보냅니다. 값은 보안을 위해 서버에만 저장되며 여기서는 연결 여부만 보입니다.">
          <ul className="divide-y divide-g100">
            <Check ok={status.hasKey} label="솔라피 API 키" note="솔라피 가입 후 [개발/연동 → API Key 관리]에서 발급" />
            <Check ok={status.hasChannel} label="카카오톡 채널 연결" note="솔라피 [카카오 채널 연동]에 여울디앤씨 채널(@검색용 아이디)을 등록 — 채널 관리자 휴대폰 인증 필요" />
            <Check ok={status.hasTemplate} label="알림톡 템플릿" note="'새 상담 접수' 템플릿 등록 후 카카오 검수 승인(영업일 1~3일)" />
            <Check ok={status.hasSender} label="문자 발신번호" note="알림톡이 실패하면 문자로 대신 보냅니다. 템플릿 승인 전에는 문자로 알림" />
            <Check ok={status.hasMake} label="Make 웹훅 (선택)" note="Make 시나리오로도 받고 싶을 때만" />
          </ul>
        </Card>

        <Card title="관리자 비밀번호 변경" desc="바꾼 비밀번호는 암호화해서 저장됩니다. 잊어버리면 개발 담당에게 초기화를 요청하세요.">
          <div className="space-y-3">
            <Field id="pw-current" label="현재 비밀번호">
              <input id="pw-current" type="password" autoComplete="current-password" value={pw.current} onChange={(e) => setPw((p) => ({ ...p, current: e.target.value }))} className={inputCls} />
            </Field>
            <Field id="pw-next" label="새 비밀번호" hint="6자 이상">
              <input id="pw-next" type="password" autoComplete="new-password" value={pw.next} onChange={(e) => setPw((p) => ({ ...p, next: e.target.value }))} className={inputCls} />
            </Field>
            <Field id="pw-confirm" label="새 비밀번호 확인">
              <input id="pw-confirm" type="password" autoComplete="new-password" value={pw.confirm} onChange={(e) => setPw((p) => ({ ...p, confirm: e.target.value }))} className={inputCls} />
            </Field>
            <button type="button" onClick={changePassword} disabled={busy !== null || !pw.current || pw.next.length < 6} className="btn btn-brand min-h-11 px-5 text-[15px] disabled:opacity-50">
              {busy === "password" ? "바꾸는 중…" : "비밀번호 바꾸기"}
            </button>
            {pwMsg && <Notice tone={pwMsg.tone}>{pwMsg.text}</Notice>}
          </div>
        </Card>
      </div>
    </div>
  );
}
