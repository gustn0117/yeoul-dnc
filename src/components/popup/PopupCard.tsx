import Link from "next/link";
import type { ReactNode } from "react";
import { LogoMark } from "@/components/Logo";
import { splitAccent, type PublicPopup } from "@/lib/popup";

type PopupCardProps = {
  popup: PublicPopup;
  onClose?: () => void;
  onCloseToday?: () => void;
  /** 대화상자 제목·설명 연결용 id */
  ids?: { title: string; desc: string };
  /** 관리자 미리보기: 링크를 눌러도 이동하지 않고, 강조 표시는 바로 보이게 */
  preview?: boolean;
};

function PopupLink({ href, preview, onNavigate, className, children }: { href: string; preview?: boolean; onNavigate?: () => void; className: string; children: ReactNode }) {
  if (preview) return <span className={className}>{children}</span>;
  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={onNavigate} className={className}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} onClick={onNavigate} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

/* 메인 팝업 카드 — 메인 화면과 관리자 미리보기가 같이 쓴다.
   이미지만 / 글자만 / 이미지 + 글자 모두 가능. 버튼 문구 없이 링크만 있으면 이미지를 누르면 이동 */
export default function PopupCard({ popup, onClose, onCloseToday, ids, preview = false }: PopupCardProps) {
  const { title, body, buttonLabel, linkUrl, image } = popup;
  const hasText = Boolean(title.trim() || body.trim());
  const button = buttonLabel && linkUrl && (
    <PopupLink href={linkUrl} preview={preview} onNavigate={onClose} className="btn btn-brand mt-6 min-h-12 w-full text-[17px]">
      {buttonLabel}
    </PopupLink>
  );
  const imageEl = image && (
    // 관리자가 올린 이미지를 API로 내려주는 것이라 next/image 최적화 대상이 아님 (가로세로 크기를 넣어 자리 흔들림 방지)
    // eslint-disable-next-line @next/next/no-img-element
    <img src={image.src} alt={title ? "" : "공지 이미지"} width={image.width} height={image.height} className="block h-auto max-h-[60dvh] w-full bg-g50 object-contain" />
  );

  return (
    <div className="w-full overflow-hidden rounded-[1.75rem] bg-white shadow-pop">
      {imageEl &&
        (linkUrl && !buttonLabel ? (
          <PopupLink href={linkUrl} preview={preview} onNavigate={onClose} className="block">
            {imageEl}
          </PopupLink>
        ) : (
          imageEl
        ))}

      {(hasText || button) && (
        <div className={`px-6 text-center sm:px-9 ${hasText ? "pb-8" : "pb-6"} ${image ? "pt-7" : "pt-10"}`}>
          {!image && (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-g100">
                <LogoMark className="w-14" alt="" />
              </div>
              <span className="pill mt-5">공지</span>
            </>
          )}
          {title && (
            <h2 id={ids?.title} className={`${image ? "" : "mt-3"} text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] text-ink sm:text-[26px]`}>
              {splitAccent(title).map((part, i) =>
                part.accent ? (
                  <span key={i} className={`text-accent ${preview ? "is-in" : ""}`}>
                    {part.text}
                  </span>
                ) : (
                  part.text
                ),
              )}
            </h2>
          )}
          {body && (
            <p id={ids?.desc} className="mt-3 whitespace-pre-line text-[16px] leading-[1.7] text-g700">
              {body}
            </p>
          )}
          {button}
        </div>
      )}

      <div className="grid grid-cols-2 border-t border-g200 text-[16px] font-bold">
        <button
          type="button"
          onClick={onCloseToday}
          className="h-14 border-r border-g200 text-g600 transition-colors hover:bg-g50 hover:text-g800 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        >
          오늘 하루 보지 않기
        </button>
        <button
          type="button"
          onClick={onClose}
          className="h-14 text-brand transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
