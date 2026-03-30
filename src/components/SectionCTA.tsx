import Link from "next/link";
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
    <section className={`relative py-24 lg:py-32 overflow-hidden ${isDark ? "bg-[#0a1425]" : "bg-slate-50"}`}>
      {isDark && (
        <>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
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
