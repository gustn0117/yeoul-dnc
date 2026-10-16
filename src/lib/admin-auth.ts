import "server-only";
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSetting, setSetting } from "@/lib/settings";

/* 관리자 로그인: 비밀번호는 서버에서만 확인하고, 통과하면 서명된 쿠키(12시간)를 준다.
   쿠키는 httpOnly + SameSite=Strict라 스크립트로 읽을 수 없고 다른 사이트에서 보낸 요청에는 붙지 않는다. */

export const ADMIN_COOKIE = "yeoul_admin";
const SESSION_SECONDS = 12 * 60 * 60;
const DEFAULT_PASSWORD = "1234";

const secret = () => process.env.ADMIN_SESSION_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function canIssueSession() {
  return Boolean(secret());
}

export function sessionCookie() {
  const exp = Date.now() + SESSION_SECONDS * 1000;
  return {
    name: ADMIN_COOKIE,
    value: `${exp}.${sign(`admin:${exp}`)}`,
    options: { httpOnly: true, sameSite: "strict" as const, secure: process.env.NODE_ENV === "production", path: "/", maxAge: SESSION_SECONDS },
  };
}

function verify(token: string | undefined) {
  if (!token || !secret()) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || !(Number(exp) > Date.now())) return false;
  return safeEqual(sig, sign(`admin:${exp}`));
}

export async function isAdmin() {
  return verify((await cookies()).get(ADMIN_COOKIE)?.value);
}

/** 관리자 API 맨 앞에서: 로그인 안 됐으면 401 응답, 됐으면 null */
export async function requireAdmin() {
  return (await isAdmin()) ? null : NextResponse.json({ error: "로그인이 필요합니다. 다시 로그인해 주세요." }, { status: 401 });
}

// 비밀번호: 관리자 화면에서 바꾼 값(DB, scrypt 해시)이 우선, 없으면 서버 환경변수 ADMIN_PASSWORD(기본 1234)
type StoredPassword = { salt?: string; hash?: string };

export async function checkPassword(input: string) {
  const stored = await getSetting<StoredPassword>("admin_password");
  if (stored?.salt && stored.hash) return safeEqual(scryptSync(input, stored.salt, 32).toString("hex"), stored.hash);
  return safeEqual(input, process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD);
}

export async function changePassword(next: string) {
  const salt = randomBytes(16).toString("hex");
  await setSetting("admin_password", { salt, hash: scryptSync(next, salt, 32).toString("hex") });
}

/** 아직 초기 비밀번호(1234)를 쓰는 중인지 — 관리자 화면에 변경 안내를 띄운다 */
export async function usingDefaultPassword() {
  const stored = await getSetting<StoredPassword>("admin_password");
  if (stored?.salt && stored.hash) return false;
  return (process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD) === DEFAULT_PASSWORD;
}
