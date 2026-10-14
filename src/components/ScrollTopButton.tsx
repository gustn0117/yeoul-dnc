"use client";

type ScrollTopButtonProps = {
  className?: string;
  children: React.ReactNode;
  label?: string;
};

export default function ScrollTopButton({ className = "", children, label = "맨 위로" }: ScrollTopButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={className}
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
    >
      {children}
    </button>
  );
}
