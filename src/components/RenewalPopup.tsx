"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { LogoMark } from "@/components/Logo";

/* 리뉴얼 안내 팝업 — 메인(/) 진입 시 노출.
   리뉴얼이 끝나면 src/app/page.tsx 의 <RenewalPopup /> 한 줄만 지우면 됩니다. */

const HIDE_UNTIL_KEY = "yeoul:renewal-popup:hide-until";

function isHiddenToday() {
  try {
    return Date.now() < Number(localStorage.getItem(HIDE_UNTIL_KEY));
  } catch {
    return false;
  }
}

function hideUntilMidnight() {
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  try {
    localStorage.setItem(HIDE_UNTIL_KEY, String(midnight.getTime()));
  } catch {
    // 시크릿 모드 등 저장소 차단 시 이번 방문에서만 닫힘
  }
}

const noopSubscribe = () => () => {};

export default function RenewalPopup() {
  // SSR에선 숨김 → 클라이언트에서 "오늘 하루 보지 않기" 여부 확인 후 노출 (hydration 불일치 방지)
  const hiddenToday = useSyncExternalStore(noopSubscribe, isHiddenToday, () => true);
  const [closed, setClosed] = useState(false);
  const open = !hiddenToday && !closed;
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = () => setClosed(true);
  const closeForToday = () => {
    hideUntilMidnight();
    setClosed(true);
  };

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    dialog?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setClosed(true); return; }
      if (e.key !== "Tab" || !dialog) return;
      const buttons = dialog.querySelectorAll<HTMLButtonElement>("button");
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialog)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
      <div className="animate-fade-in absolute inset-0 bg-ink/50 backdrop-blur-[2px]" onClick={close} aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="renewal-popup-title"
        aria-describedby="renewal-popup-desc"
        tabIndex={-1}
        className="animate-pop-in relative max-h-[calc(100dvh-2rem)] w-full max-w-100 overflow-y-auto rounded-[1.75rem] bg-white shadow-pop outline-none"
      >
        <div className="px-6 pb-8 pt-10 text-center sm:px-9">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-g100">
            <LogoMark className="w-14" alt="" />
          </div>
          <span className="pill mt-5">공지</span>
          <h2 id="renewal-popup-title" className="mt-3 text-[26px] font-extrabold tracking-[-0.04em]">
            홈페이지 <span className="text-accent">리뉴얼 중</span>입니다
          </h2>
          <div id="renewal-popup-desc" className="mt-3 space-y-2 text-[16px] text-g700">
            <p>
              더 나은 서비스를 위해 홈페이지를 새롭게 단장하고 있습니다.
              일부 내용이 변경되거나 이용이 원활하지 않을 수 있는 점 양해 부탁드립니다.
            </p>
            <p className="text-[15px] text-g600">상담 문의는 카카오톡 또는 문의하기로 언제든 가능합니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-g200 text-[16px] font-bold">
          <button
            type="button"
            onClick={closeForToday}
            className="h-14 border-r border-g200 text-g600 transition-colors hover:bg-g50 hover:text-g800 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
          >
            오늘 하루 보지 않기
          </button>
          <button
            type="button"
            onClick={close}
            className="h-14 text-brand transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
