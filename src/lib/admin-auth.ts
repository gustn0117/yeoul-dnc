import "server-only";
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSetting, setSetting } from "@/lib/settings";

/* 관리자 로그인: 아이디·비밀번호는 서버에서만 확인하고, 통과하면 서명된 쿠키(12시간)를 준다.
   쿠키는 httpOnly + SameSite=Strict라 스크립트로 읽을 수 없고 다른 사이트에서 보낸 요청에는 붙지 않는다. */

export const ADMIN_COOKIE = "yeoul_admin";
const SESSION_SECONDS = 12 * 60 * 60;
const DEFAULT_USERNAME = "admin";
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

/* 계정: 관리자 화면에서 바꾼 값(DB admin_account — 아이디 + scrypt 해시)이 우선.
   없으면 아이디는 서버 환경변수 ADMIN_USERNAME(기본 admin), 비밀번호는 아이디 도입 전에 바꿔 둔 값(DB admin_password),
   그것도 없으면 ADMIN_PASSWORD(기본 1234) */
type Hashed = { salt: string; hash: string };
type Account = { username: string } & (Hashed | { password: string });

export const USERNAME_RULE = /^[a-z0-9._-]{4,20}$/;
export const normalizeUsername = (value: string) => value.trim().toLowerCase();
const hashPassword = (password: string, salt: string) => scryptSync(password, salt, 32).toString("hex");

async function loadAccount(): Promise<Account> {
  const stored = await getSetting<Partial<Hashed> & { username?: string }>("admin_account");
  if (stored?.username && stored.salt && stored.hash) return { username: stored.username, salt: stored.salt, hash: stored.hash };
  const username = normalizeUsername(process.env.ADMIN_USERNAME || DEFAULT_USERNAME);
  const legacy = await getSetting<Partial<Hashed>>("admin_password");
  if (legacy?.salt && legacy.hash) return { username, salt: legacy.salt, hash: legacy.hash };
  return { username, password: process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD };
}

const passwordMatches = (account: Account, input: string) =>
  "hash" in account ? safeEqual(hashPassword(input, account.salt), account.hash) : safeEqual(input, account.password);

/** 로그인 확인 — 아이디가 틀려도 비밀번호 확인까지 똑같이 거쳐, 응답 시간으로 아이디를 짐작하지 못하게 한다 */
export async function checkLogin(username: string, password: string) {
  const account = await loadAccount();
  const passwordOk = passwordMatches(account, password);
  return safeEqual(normalizeUsername(username), account.username) && passwordOk;
}

/** 계정을 바꾸기 전 현재 비밀번호 확인 */
export async function checkPassword(password: string) {
  return passwordMatches(await loadAccount(), password);
}

export async function changeAccount(username: string, password: string) {
  const salt = randomBytes(16).toString("hex");
  await setSetting("admin_account", { username: normalizeUsername(username), salt, hash: hashPassword(password, salt) });
}

/** 관리자 화면 표시용 — 현재 아이디, 아직 초기 비밀번호(1234)를 쓰는지(변경 안내를 띄움) */
export async function accountInfo() {
  const account = await loadAccount();
  return { username: account.username, defaultPassword: "password" in account && account.password === DEFAULT_PASSWORD };
}
