"use client";

import { useEffect, useRef, useState } from "react";
import PopupCard from "@/components/popup/PopupCard";
import type { PublicPopup } from "@/lib/popup";

/* 메인 팝업 — 내용은 관리자 화면(/admin → 팝업 관리)에서 바꾸고, 여기서는 받아서 띄우기만 한다.
   '오늘 하루 보지 않기'는 이 기기(브라우저)에만 기억하며, 관리자가 내용을 바꾸면 다시 보인다. */

const HIDE_KEY = "yeoul:popup:hidden";

function hiddenToday(version: string) {
  try {
    const saved = JSON.parse(localStorage.getItem(HIDE_KEY) || "null") as { version?: string; until?: number } | null;
    return saved?.version === version && Date.now() < Number(saved.until);
  } catch {
    return false;
  }
}

function hideForToday(version: string) {
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  try {
    localStorage.setItem(HIDE_KEY, JSON.stringify({ version, until: midnight.getTime() }));
  } catch {
    // 시크릿 모드 등 저장소 차단 시 이번 방문에서만 닫힘
  }
}

export default function SitePopup() {
  const [popup, setPopup] = useState<PublicPopup | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = popup !== null;

  useEffect(() => {
    const ctrl = new AbortController();
    fetch("/api/popup", { cache: "no-store", signal: ctrl.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { popup: PublicPopup | null } | null) => {
        if (data?.popup && !hiddenToday(data.popup.version)) setPopup(data.popup);
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  const close = () => setPopup(null);
  const closeForToday = () => {
    if (popup) hideForToday(popup.version);
    setPopup(null);
  };

  // 열려 있는 동안: 배경 스크롤 잠금 + Esc 닫기 + 포커스 가두기
  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    dialog?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setPopup(null);
        return;
      }
      if (e.key !== "Tab" || !dialog) return;
      const items = dialog.querySelectorAll<HTMLElement>("a[href], button");
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!popup) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
      <div className="animate-fade-in absolute inset-0 bg-ink/50 backdrop-blur-[2px]" onClick={close} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={popup.title ? "site-popup-title" : undefined}
        aria-label={popup.title ? undefined : "공지"}
        aria-describedby={popup.body ? "site-popup-desc" : undefined}
        tabIndex={-1}
        className="animate-pop-in relative max-h-[calc(100dvh-2rem)] w-full max-w-100 overflow-y-auto rounded-[1.75rem] outline-none"
      >
        <PopupCard popup={popup} onClose={close} onCloseToday={closeForToday} ids={{ title: "site-popup-title", desc: "site-popup-desc" }} />
      </div>
    </div>
  );
}
