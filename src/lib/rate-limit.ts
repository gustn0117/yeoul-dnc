/* 단순 메모리 속도 제한 — 컨테이너 하나로 운영하므로 프로세스 메모리로 충분 (재시작 시 초기화) */
const buckets = new Map<string, number[]>();

const recent = (key: string, windowMs: number, now: number) => (buckets.get(key) ?? []).filter((t) => now - t < windowMs);

/** 창 안의 기록이 limit 이상이면 true (기록은 남기지 않음) */
export function isLimited(key: string, limit: number, windowMs: number) {
  return recent(key, windowMs, Date.now()).length >= limit;
}

/** 기록을 하나 남김 */
export function hit(key: string, windowMs: number) {
  const now = Date.now();
  buckets.set(key, [...recent(key, windowMs, now), now]);
  if (buckets.size > 5000) {
    for (const [k, times] of buckets) if (!times.some((t) => now - t < windowMs)) buckets.delete(k);
  }
}

/** 확인 + 기록을 한 번에: 허용되면 true */
export function rateLimit(key: string, limit: number, windowMs: number) {
  if (isLimited(key, limit, windowMs)) return false;
  hit(key, windowMs);
  return true;
}

/** Cloudflare 터널 뒤에서 실제 방문자 IP */
export function clientIp(headers: Headers) {
  return headers.get("cf-connecting-ip") || headers.get("x-forwarded-for")?.split(",")[0].trim() || headers.get("x-real-ip") || "unknown";
}
