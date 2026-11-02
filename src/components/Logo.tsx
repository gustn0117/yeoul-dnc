import Link from "next/link";
import Image from "next/image";

export function LogoFull({ className = "h-9", variant = "color" }: { className?: string; variant?: "color" | "white" }) {
  // 컬러 로고는 고객사 원본(2026-11)을 여백 없이 잘라 높이만큼 꽉 차게 보임
  const src = variant === "white" ? "/images/logo-header-white-transparent.png" : "/images/logo-header-2026.png";
  const size = variant === "white" ? { w: 706, h: 203 } : { w: 1281, h: 379 };

  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src={src}
        alt="여울디앤씨 Yeoul D&C"
        width={size.w}
        height={size.h}
        className="h-full w-auto object-contain"
        preload
      />
    </Link>
  );
}

/** Mark-only logo (symbol, no text) — square canvas with generous safe padding */
export function LogoMark({
  className = "w-10",
  variant = "color",
  alt = "여울디앤씨",
}: {
  className?: string;
  variant?: "color" | "white";
  alt?: string;
}) {
  const src = variant === "white" ? "/images/logo-mark-white-transparent.png" : "/images/logo-mark-color.png";
  // White mark cropped to bbox (transparent bg); color is square canvas 651×651
  const size = variant === "white" ? 909 : 651;
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`${className} h-auto object-contain block`}
      unoptimized
    />
  );
}
