import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, USERNAME_RULE, accountInfo, canIssueSession, changeAccount, checkLogin, checkPassword, isAdmin, normalizeUsername, requireAdmin, sessionCookie } from "@/lib/admin-auth";
import { clientIp, hit, isLimited } from "@/lib/rate-limit";

const FAIL_LIMIT = 10;
const FAIL_WINDOW = 15 * 60_000;

const text = (value: unknown) => (typeof value === "string" ? value : "");

/* 로그인 상태 확인 — 로그인했으면 현재 아이디와 초기 비밀번호 사용 여부도 */
export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ authenticated: false });
  const info = await accountInfo().catch(() => null);
  return NextResponse.json({ authenticated: true, username: info?.username, defaultPassword: info?.defaultPassword ?? false });
}

/* 로그인 — 같은 곳에서 15분에 10번 틀리면 잠시 막음 */
export async function POST(request: NextRequest) {
  const key = `admin-login:${clientIp(request.headers)}`;
  if (isLimited(key, FAIL_LIMIT, FAIL_WINDOW)) {
    return NextResponse.json({ error: "로그인을 여러 번 실패했습니다. 15분 뒤에 다시 시도해 주세요." }, { status: 429 });
  }
  if (!canIssueSession()) return NextResponse.json({ error: "서버 설정(ADMIN_SESSION_SECRET)이 필요합니다." }, { status: 503 });

  const body = await request.json().catch(() => null);
  const username = text(body?.username);
  const password = text(body?.password);
  try {
    if (username.length > 64 || password.length > 128 || !(await checkLogin(username, password))) {
      hit(key, FAIL_WINDOW);
      return NextResponse.json({ error: "아이디 또는 비밀번호가 올바르지 않습니다." }, { status: 401 });
    }
  } catch (err) {
    console.error("admin login error:", err);
    return NextResponse.json({ error: "로그인 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
  const cookie = sessionCookie();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookie.name, cookie.value, cookie.options);
  return res;
}

/* 계정 변경 — 현재 비밀번호를 확인한 뒤 아이디와 비밀번호(비우면 지금 비밀번호 유지)를 저장 */
export async function PUT(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const key = `admin-account:${clientIp(request.headers)}`;
  if (isLimited(key, FAIL_LIMIT, FAIL_WINDOW)) {
    return NextResponse.json({ error: "현재 비밀번호를 여러 번 틀렸습니다. 15분 뒤에 다시 시도해 주세요." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const current = text(body?.current);
  const username = normalizeUsername(text(body?.username));
  const password = text(body?.next) || current;
  if (!USERNAME_RULE.test(username)) return NextResponse.json({ error: "아이디는 영문 소문자·숫자 4~20자로 입력해 주세요. (. _ - 사용 가능)" }, { status: 400 });
  if (password.length < 6 || password.length > 64) return NextResponse.json({ error: "비밀번호는 6~64자여야 합니다. 새 비밀번호를 입력해 주세요." }, { status: 400 });
  try {
    if (!(await checkPassword(current))) {
      hit(key, FAIL_WINDOW);
      return NextResponse.json({ error: "현재 비밀번호가 올바르지 않습니다." }, { status: 400 });
    }
    await changeAccount(username, password);
    return NextResponse.json({ ok: true, username });
  } catch (err) {
    console.error("admin account change error:", err);
    return NextResponse.json({ error: "계정 변경 중 오류가 발생했습니다." }, { status: 500 });
  }
}

/* 로그아웃 */
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
