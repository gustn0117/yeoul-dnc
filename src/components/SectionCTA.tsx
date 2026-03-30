import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@/components/Icons";

interface SectionCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "light" | "dark";
}

export default function SectionCTA({
  title,
  description,
  buttonText = "광고 문의하기",
  buttonHref = "/contact",
  variant = "light",
}: SectionCTAProps) {
  const isDark = variant === "dark";

  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? "" : "bg-slate-50"}`}>
      {isDark && (
        <>
          <Image
            src="/images/stock/team-strategy.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#070d1a]/90" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)" }} />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl lg:text-3xl font-extrabold mb-4 ${isDark ? "text-white" : "text-deep-navy"}`}>
          {title}
        </h2>
        <p className={`text-sm lg:text-base mb-10 max-w-md mx-auto ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {description}
        </p>
        <Link
          href={buttonHref}
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-linear-to-r from-cta-orange to-orange-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-cta-orange/25 transition-all duration-300"
        >
          {buttonText}
          <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
