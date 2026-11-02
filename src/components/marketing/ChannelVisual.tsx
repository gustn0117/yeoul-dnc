import Image from "next/image";
import FlowLine from "@/components/ui/FlowLine";
import { YOUTUBE_FORMATS, type ChannelVisual as Visual } from "@/components/marketing/data";

const panel = "on-dark relative isolate overflow-hidden rounded-[28px] bg-night sm:rounded-panel";

/* 네이비 패널 바탕: 아래쪽 은은한 파란 빛 + 흐름 선 (화면에 들어오면 그려짐) */
function Backdrop() {
  return (
    <>
      <span className="pointer-events-none absolute inset-x-[12%] -bottom-1/4 -z-10 h-2/3 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
      <FlowLine tone="dark" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />
    </>
  );
}

export default function ChannelVisual({ visual }: { visual: Visual }) {
  if (visual.kind === "youtube") return <YoutubePanel />;

  // 휴대폰 테두리까지 그려진 이미지(1:2, 배경 투명)라 별도 프레임 없이 놓는다
  const [center, left, right] = visual.shots;
  const phone = (s: { src: string; alt: string }, cls: string, sizes: string) => (
    <Image src={s.src} alt={s.alt} width={600} height={1200} sizes={sizes} className={`h-auto drop-shadow-2xl ${cls}`} />
  );
  return (
    <div className={`${panel} flex items-center justify-center gap-[1%] px-[3%] py-10 sm:py-14 lg:py-16`}>
      <Backdrop />
      {phone(left, "w-[31%] translate-y-[6%]", "(min-width: 1024px) 180px, 31vw")}
      {phone(center, "z-10 w-[36%]", "(min-width: 1024px) 210px, 36vw")}
      {phone(right, "w-[31%] translate-y-[6%]", "(min-width: 1024px) 180px, 31vw")}
    </div>
  );
}

/* 유튜브: 큰 화면 1 + 작은 2 — 광고 형식 이름은 오른쪽 위에 (왼쪽 위 브랜드명·아래쪽 재생 막대를 가리지 않게) */
function YoutubePanel() {
  return (
    <div className={`${panel} grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-8 lg:p-10`}>
      <Backdrop />
      {YOUTUBE_FORMATS.map((f, i) => (
        <figure key={f.name} className={`relative overflow-hidden rounded-2xl bg-white/10 sm:rounded-3xl ${i === 0 ? "col-span-2 aspect-video" : "aspect-4/3"}`}>
          <Image src={f.image} alt={f.alt} fill sizes={i === 0 ? "(min-width: 1024px) 520px, 90vw" : "(min-width: 1024px) 250px, 45vw"} className="object-cover" />
          <figcaption className="absolute right-2.5 top-2.5 rounded-full bg-white px-3 py-1.5 text-[15px] font-bold tracking-[-0.02em] text-ink shadow-soft sm:right-4 sm:top-4 sm:px-3.5">
            {f.name}
            <span className="hidden font-semibold text-g600 sm:inline"> · {f.detail}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
