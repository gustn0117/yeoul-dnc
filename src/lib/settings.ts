import "server-only";
import { db } from "@/lib/supabase";

/* 사이트 설정(yeoul_dnc.site_settings) — key 하나에 JSON 값 하나 (popup, popup_image, notify, admin_account, admin_password) */

export async function getSetting<T>(key: string): Promise<T | null> {
  const { data, error } = await db.from("site_settings").select("value").eq("key", key).maybeSingle();
  if (error) throw new Error(`설정 조회 실패(${key}): ${error.message}`);
  return (data?.value as T | undefined) ?? null;
}

export async function setSetting<T>(key: string, value: T) {
  const { error } = await db.from("site_settings").upsert({ key, value, updated_at: new Date().toISOString() });
  if (error) throw new Error(`설정 저장 실패(${key}): ${error.message}`);
}
