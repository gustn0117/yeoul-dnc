/* 관리자 화면 → 관리자 API 호출. 로그인이 풀리면(401) 화면을 로그인으로 돌려보낸다 */
export const UNAUTHORIZED_EVENT = "admin:unauthorized";

export async function adminApi<T>(url: string, init?: RequestInit): Promise<{ ok: boolean; status: number; data: Partial<T> & { error?: string } }> {
  const res = await fetch(url, { ...init, cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
  return { ok: res.ok, status: res.status, data };
}

export const formatPhone = (digits: string) => digits.replace(/^(\d{3})(\d{3,4})(\d{4})$/, "$1-$2-$3");

export const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
