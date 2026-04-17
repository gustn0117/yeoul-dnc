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
    <section className={`relative py-20 sm:py-24 lg:py-32 overflow-hidden ${isDark ? "" : "bg-slate-50"}`}>
      {isDark && (
        <>
          <Image src="/images/stock/meeting.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#060e1e]/92" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent-blue/8 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta-orange/5 rounded-full blur-[120px]" />
        </>
      )}
      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 ${isDark ? "text-white" : "text-deep-navy"}`}>
          {title}
        </h2>
        <p className={`text-[13px] sm:text-sm mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href={buttonHref}
            className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 bg-linear-to-r from-cta-orange to-orange-500 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-cta-orange/30 transition-all duration-300"
          >
            {buttonText}
            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#"
            className={`inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold rounded-xl border transition-all duration-300 ${
              isDark
                ? "text-white/80 border-white/15 hover:bg-white/5"
                : "text-slate-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            카카오톡 상담
          </a>
        </div>
      </div>
    </section>
  );
}
