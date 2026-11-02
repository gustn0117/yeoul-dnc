"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowIcon, CloseIcon } from "@/components/ui/icons";

type LightboxProps = {
  title: string;
  counter?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  children: ReactNode;
};

const navBtn = "flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/24";

/* 크게 보기 창 — Esc 닫기, ←/→ 이전·다음, 포커스 가두기, 닫으면 누른 자리로 포커스 복귀.
   [data-reveal]의 transform 안에서 열려도 화면 기준으로 뜨도록 body에 붙인다 */
export default function Lightbox({ title, counter, onClose, onPrev, onNext, children }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const handlers = useRef({ onClose, onPrev, onNext });

  useEffect(() => {
    handlers.current = { onClose, onPrev, onNext };
  });

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      const { onClose, onPrev, onNext } = handlers.current;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft" && onPrev) {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight" && onNext) {
        e.preventDefault();
        onNext();
      } else if (e.key === "Tab" && dialogRef.current) {
        const items = [...dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]")].filter((el) => el.offsetParent !== null);
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus({ preventScroll: true });
    };
  }, []);

  // 내용 바깥(여백)을 누르면 닫힘
  const closeOnBackdrop = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={title} className="animate-fade-in fixed inset-0 z-[70] flex flex-col bg-night/92 backdrop-blur-sm">
      <div className="flex items-center gap-3 px-4 py-3 text-white sm:px-6 sm:py-4">
        <p className="min-w-0 flex-1 truncate text-[17px] font-bold tracking-[-0.02em]">{title}</p>
        {counter && <span className="text-[15px] font-semibold tabular-nums text-white/60">{counter}</span>}
        <button ref={closeRef} type="button" onClick={onClose} aria-label="닫기" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 transition-colors hover:bg-white/24">
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>

      <div onClick={closeOnBackdrop} className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-20 sm:pb-8">
        {children}
        {onPrev && (
          <button type="button" onClick={onPrev} aria-label="이전" className={`${navBtn} absolute left-4 top-1/2 hidden -translate-y-1/2 sm:flex`}>
            <ArrowIcon className="h-5 w-5 rotate-180" />
          </button>
        )}
        {onNext && (
          <button type="button" onClick={onNext} aria-label="다음" className={`${navBtn} absolute right-4 top-1/2 hidden -translate-y-1/2 sm:flex`}>
            <ArrowIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {(onPrev || onNext) && (
        <div className="flex justify-center gap-3 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:hidden">
          {onPrev && (
            <button type="button" onClick={onPrev} aria-label="이전" className={navBtn}>
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </button>
          )}
          {onNext && (
            <button type="button" onClick={onNext} aria-label="다음" className={navBtn}>
              <ArrowIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      )}
    </div>,
    document.body,
  );
}
