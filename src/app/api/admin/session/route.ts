import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, canIssueSession, changePassword, checkPassword, isAdmin, requireAdmin, sessionCookie, usingDefaultPassword } from "@/lib/admin-auth";
import { clientIp, hit, isLimited } from "@/lib/rate-limit";

const FAIL_LIMIT = 10;
const FAIL_WINDOW = 15 * 60_000;

/* 로그인 상태 확인 */
export async function GET() {
  const authenticated = await isAdmin();
  return NextResponse.json({ authenticated, defaultPassword: authenticated ? await usingDefaultPassword().catch(() => false) : undefined });
}

/* 로그인 — 같은 곳에서 15분에 10번 틀리면 잠시 막음 */
export async function POST(request: NextRequest) {
  const key = `admin-login:${clientIp(request.headers)}`;
  if (isLimited(key, FAIL_LIMIT, FAIL_WINDOW)) {
    return NextResponse.json({ error: "비밀번호를 여러 번 틀렸습니다. 15분 뒤에 다시 시도해 주세요." }, { status: 429 });
  }
  if (!canIssueSession()) return NextResponse.json({ error: "서버 설정(ADMIN_SESSION_SECRET)이 필요합니다." }, { status: 503 });

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";
  try {
    if (!(await checkPassword(password))) {
      hit(key, FAIL_WINDOW);
      return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
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

/* 비밀번호 변경 — 현재 비밀번호 확인 후 6자 이상으로 */
export async function PUT(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const body = await request.json().catch(() => null);
  const current = typeof body?.current === "string" ? body.current : "";
  const next = typeof body?.next === "string" ? body.next : "";
  if (next.length < 6 || next.length > 64) return NextResponse.json({ error: "새 비밀번호는 6~64자로 입력해 주세요." }, { status: 400 });
  try {
    if (!(await checkPassword(current))) return NextResponse.json({ error: "현재 비밀번호가 올바르지 않습니다." }, { status: 400 });
    await changePassword(next);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("admin password change error:", err);
    return NextResponse.json({ error: "비밀번호 변경 중 오류가 발생했습니다." }, { status: 500 });
  }
}

/* 로그아웃 */
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
