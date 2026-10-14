"use client";

import { useEffect, useRef } from "react";

// key: 파랗게 강조할 구절
const PHRASES = [
  { text: "유입이 끝이 아니라," },
  { text: "상담 전환까지 설계합니다.", key: true },
  { text: "여울디앤씨는 업종과 목표에 따라 채널을 선별하고," },
  { text: "문의 전환까지", key: true },
  { text: "광고를 운영합니다." },
];
const WORDS = PHRASES.flatMap((p) => p.text.split(" ").map((w) => ({ w, key: !!p.key })));

/* 스크롤하는 만큼 단어가 회색 → 진하게 차오르는 문장 (고정 없이, 섹션을 지나는 동안).
   매 프레임 리렌더를 피하려고 단어 요소의 클래스만 직접 바꾼다. */
export default function WordFill() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = [...el.querySelectorAll<HTMLElement>(".w")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 문장 윗부분이 화면 아래 85% 지점에 닿을 때 시작 → 문장 아랫부분이 화면 45% 지점에 오면 전부 채움
      const start = vh * 0.85;
      const end = vh * 0.45 - rect.height;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const lit = Math.round(progress * words.length);
      words.forEach((w, i) => w.classList.toggle("on", i < lit));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="py-28 sm:py-36 lg:py-44" aria-label="여울디앤씨가 일하는 방식">
      <div className="wrap max-w-6xl">
        <p ref={ref} className="word-fill text-[clamp(28px,3.6vw,56px)] font-extrabold leading-[1.42] tracking-[-0.045em]">
          {WORDS.map((item, i) => (
            <span key={i} className={`w ${item.key ? "key" : ""}`}>
              {item.w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
