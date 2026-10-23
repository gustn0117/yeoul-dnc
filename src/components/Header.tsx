"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogoFull } from "@/components/Logo";
import { ArrowIcon, ChevronIcon, CloseIcon, KakaoIcon, PhoneIcon } from "@/components/ui/icons";
import { COMPANY, KAKAO_URL, NAV, TEL_HREF, navMatches, type NavGroup, type NavItem } from "@/lib/site";

/* 하위 메뉴 묶음 하나 (제목 + 링크 목록) */
function DropdownGroup({ group }: { group: NavGroup }) {
  return (
    <div className="min-w-0">
      {group.title && <p className="mb-1 px-3 text-[13px] font-bold text-g500">{group.title}</p>}
      <ul>
        {group.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="block rounded-xl px-3 py-2 transition-colors hover:bg-g50 focus-visible:bg-g50">
              <span className="block text-[15px] font-bold tracking-[-0.02em] text-ink">{link.label}</span>
              {link.desc && <span className="mt-0.5 block text-[13px] leading-snug text-g500">{link.desc}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* 데스크톱 하위 메뉴 — 마우스를 올리거나 키보드로 상위 메뉴에 들어오면 펼쳐짐 (상위 메뉴 자체도 개요 페이지 링크) */
function Dropdown({ item }: { item: NavItem }) {
  const groups = item.groups ?? [];
  const [first, ...rest] = groups;
  const wide = groups.length > 1;
  return (
    <div className="pointer-events-none invisible absolute left-1/2 top-full z-10 -translate-x-1/2 pt-1 opacity-0 transition-[opacity,visibility] duration-200 group-hover/nav:pointer-events-auto group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:visible group-focus-within/nav:opacity-100">
      <div className={`grid gap-3 rounded-2xl border border-g200 bg-white p-3 shadow-pop ${wide ? "w-md grid-cols-2" : "w-84"}`}>
        {wide ? (
          <>
            <DropdownGroup group={first} />
            <div className="space-y-3">
              {rest.map((group) => (
                <DropdownGroup key={group.title} group={group} />
              ))}
            </div>
          </>
        ) : (
          groups.map((group, i) => <DropdownGroup key={i} group={group} />)
        )}
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoverHref, setHoverHref] = useState<string | null>(null);
  // 메뉴를 연 경로를 기억 → 경로가 바뀌면 자동으로 닫힌 상태가 됨 (effect에서 setState 불필요)
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const navRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuPath(null);

  // 스크롤 상태 + 헤더 아래 진행선 (프레임당 한 번만 계산)
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const progress = progressRef.current;
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 메뉴 아래 파란 막대: 마우스를 올린 항목 → 없으면 현재 페이지가 속한 항목으로 미끄러지듯 이동
  useEffect(() => {
    const place = () => {
      const bar = barRef.current;
      const nav = navRef.current;
      if (!bar || !nav) return;
      const target = hoverHref ?? NAV.find((item) => navMatches(item, pathname))?.href;
      const link = target ? nav.querySelector<HTMLElement>(`[data-href="${target}"]`) : null;
      if (!link) {
        bar.style.opacity = "0";
        return;
      }
      bar.style.opacity = "1";
      bar.style.width = `${link.offsetWidth - 24}px`;
      // 링크의 offsetParent는 드롭다운 기준인 li라서, 메뉴 목록 왼쪽 끝을 기준으로 위치를 잰다
      bar.style.transform = `translateX(${link.getBoundingClientRect().left - nav.getBoundingClientRect().left + 12}px)`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [hoverHref, pathname]);

  // 서랍 메뉴: 스크롤 잠금 + Esc 닫기 + 포커스 가두기
  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    const toggle = toggleRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawer?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuPath(null);
        return;
      }
      if (e.key !== "Tab" || !drawer) return;
      const items = drawer.querySelectorAll<HTMLElement>("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      toggle?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          scrolled ? "border-g200 bg-white/90 backdrop-blur-xl" : "border-transparent bg-white"
        }`}
      >
        <div className="wrap-wide flex h-16 items-center justify-between gap-6 lg:h-19">
          <LogoFull className="h-8 shrink-0 sm:h-9 lg:h-10" variant="color" />

          <nav aria-label="주 메뉴" className="relative hidden h-full lg:block" onMouseLeave={() => setHoverHref(null)}>
            <ul ref={navRef} className="flex h-full items-center">
              {NAV.map((item) => {
                const active = navMatches(item, pathname);
                return (
                  <li key={item.href} className="group/nav relative h-full">
                    <Link
                      href={item.href}
                      data-href={item.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => setHoverHref(item.href)}
                      onFocus={() => setHoverHref(item.href)}
                      onBlur={() => setHoverHref(null)}
                      className={`flex h-full items-center gap-1 px-3 text-[16px] tracking-[-0.02em] transition-colors duration-200 xl:px-4 ${
                        active ? "font-bold text-ink" : "font-semibold text-g600 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      {item.groups && <ChevronIcon className="h-3.5 w-3.5 rotate-90 text-g400 transition-transform duration-200 group-hover/nav:-rotate-90" />}
                    </Link>
                    {item.groups && <Dropdown item={item} />}
                  </li>
                );
              })}
            </ul>
            <span
              ref={barRef}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-0.75 rounded-full bg-accent opacity-0 transition-[transform,width,opacity] duration-400 ease-soft"
            />
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href={TEL_HREF} className="hidden items-center gap-2 text-[17px] font-bold tracking-tight text-ink transition-colors hover:text-brand 2xl:flex" aria-label={`전화 상담 ${COMPANY.tel}`}>
              <PhoneIcon className="h-4.5 w-4.5 text-brand" />
              {COMPANY.tel}
            </a>
            {/* 메뉴가 6개라 1024~1279px에서는 상담 버튼을 숨겨 한 줄을 지킴 (메뉴의 '상담문의'로 대신) */}
            <Link href="/contact" className="btn btn-signal hidden min-h-11 rounded-full px-5 text-[16px] md:inline-flex lg:hidden xl:inline-flex">
              무료 상담받기
            </Link>
            <a href={TEL_HREF} className="flex h-11 w-11 items-center justify-center rounded-full text-g800 md:hidden" aria-label={`전화 상담 ${COMPANY.tel}`}>
              <PhoneIcon className="h-5.5 w-5.5" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuPath(menuOpen ? null : pathname)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label="메뉴 열기"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-g100 lg:hidden"
            >
              <span className="flex w-5.5 flex-col gap-1.5" aria-hidden="true">
                <span className="h-0.5 w-full rounded-full bg-current" />
                <span className="h-0.5 w-3/4 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        {/* 읽은 만큼 차오르는 진행선 */}
        <span
          ref={progressRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </header>

      {/* 모바일·태블릿 서랍 메뉴 — 헤더 밖에 둬서 헤더의 흐림 효과(backdrop-filter)와 상관없이 화면 전체를 덮음 */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <div className="animate-fade-in absolute inset-0 bg-ink/40" onClick={closeMenu} aria-hidden="true" />
          <div
            ref={drawerRef}
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="전체 메뉴"
            className="drawer-in absolute inset-y-0 right-0 flex w-[min(88vw,24rem)] flex-col overflow-y-auto bg-white"
          >
            <div className="flex h-16 shrink-0 items-center justify-between px-5">
              <span className="text-[15px] font-bold text-g600">메뉴</span>
              <button type="button" onClick={closeMenu} aria-label="메뉴 닫기" className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-g100">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <nav aria-label="전체 메뉴 링크" className="px-5">
              <ul>
                {[{ label: "메인", href: "/" } as NavItem, ...NAV].map((item) => {
                  const active = item.href === "/" ? pathname === "/" : navMatches(item, pathname);
                  const expanded = openGroup === item.href;
                  const itemCls = `flex w-full items-center justify-between py-4.5 text-left text-[22px] font-extrabold tracking-[-0.04em] ${active ? "text-brand" : "text-ink"}`;
                  return (
                    <li key={item.href} className="border-b border-g100">
                      {item.groups ? (
                        <>
                          <button type="button" aria-expanded={expanded} onClick={() => setOpenGroup(expanded ? null : item.href)} className={itemCls}>
                            {item.label}
                            <ChevronIcon className={`h-5 w-5 transition-transform duration-200 ${expanded ? "-rotate-90" : "rotate-90"} ${active ? "text-brand" : "text-g400"}`} />
                          </button>
                          {expanded && (
                            <div className="space-y-3 pb-4">
                              <Link href={item.href} onClick={closeMenu} className="inline-flex min-h-10 items-center gap-1.5 text-[16px] font-bold text-brand">
                                {item.label} 전체 보기
                                <ArrowIcon className="h-4 w-4" />
                              </Link>
                              {item.groups.map((group, gi) => (
                                <div key={group.title ?? gi}>
                                  {group.title && <p className="text-[13px] font-bold text-g500">{group.title}</p>}
                                  <ul className="mt-1">
                                    {group.links
                                      .filter((link) => link.href !== item.href)
                                      .map((link) => (
                                        <li key={link.href}>
                                          <Link href={link.href} onClick={closeMenu} className="flex min-h-11 items-center text-[17px] font-semibold text-g800">
                                            {link.label}
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link href={item.href} onClick={closeMenu} aria-current={active ? "page" : undefined} className={itemCls}>
                          {item.label}
                          <ArrowIcon className={`h-5 w-5 ${active ? "text-brand" : "text-g400"}`} />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-5">
              <a href={TEL_HREF} className="rounded-card bg-g50 px-5 py-4">
                <span className="block text-[15px] font-semibold text-g600">전화 상담 · {COMPANY.hours}</span>
                <span className="mt-0.5 block text-[28px] font-extrabold tracking-[-0.04em] text-ink">{COMPANY.tel}</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/contact" onClick={closeMenu} className="btn btn-signal min-h-13">
                  무료 상담받기
                </Link>
                <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-soft min-h-13">
                  <KakaoIcon className="h-5 w-5" />
                  카톡 상담
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
