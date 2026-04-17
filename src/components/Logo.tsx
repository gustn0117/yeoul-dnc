import Link from "next/link";
import Image from "next/image";

export function LogoFull({ className = "h-9", variant = "color" }: { className?: string; variant?: "color" | "white" }) {
  const src = variant === "white" ? "/images/logo-header-white.png" : "/images/logo-header.png";

  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src={src}
        alt="여울디앤씨 Yeoul D&C"
        width={800}
        height={300}
        className="h-full w-auto object-contain"
        priority
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
  const src = variant === "white" ? "/images/logo-mark-white.png" : "/images/logo-mark-color.png";
  // Files are now square canvases: white 909×909, color 651×651
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
