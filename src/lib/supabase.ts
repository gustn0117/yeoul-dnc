import "server-only";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://api.hsweb.pics";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/* 서버 전용 DB 클라이언트 — yeoul_dnc 테이블은 RLS로 외부(anon) 접근을 막고, 서버만 service_role 키로 읽고 쓴다.
   키는 서버의 .env.production(로컬은 .env.local)에만 둔다. 코드·브라우저에 두지 않는다. */
export const db = createClient(url, serviceKey || "missing-service-role-key", {
  db: { schema: "yeoul_dnc" },
  auth: { persistSession: false, autoRefreshToken: false },
});

export const hasServiceKey = Boolean(serviceKey);
