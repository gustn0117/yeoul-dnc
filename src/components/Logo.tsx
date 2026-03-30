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
