import Image from "next/image";
import { AD_RATIOS, adImage, type AdIndustry, type AdKind, type AdRatio } from "@/lib/portfolio";

const ratio = (id: AdRatio) => AD_RATIOS.find((r) => r.id === id)!;
const aspect: Record<AdRatio, string> = { "1x1": "aspect-square", "9x16": "aspect-9/16", "16x9": "aspect-video" };

/* 이미지 + 아래 비율 표시(높이 26px: 간격 6 + 글자 20) — 광고의 로고·문구를 가리지 않게 이미지 밖에 둔다 */
function AdFigure({ kind, item, id, sizes, className = "", dark = false }: { kind: AdKind; item: AdIndustry; id: AdRatio; sizes: string; className?: string; dark?: boolean }) {
  const r = ratio(id);
  return (
    <figure className={className}>
      <span className={`relative block overflow-hidden rounded-xl ${dark ? "bg-white/6" : "bg-g100 shadow-soft"} ${aspect[id]}`}>
        <Image src={adImage(kind, item, id)} alt={`${item.name} ${r.label} 비율 광고 디자인`} fill sizes={sizes} className="object-cover" />
      </span>
      <figcaption className={`mt-1.5 h-5 text-[13px] font-semibold leading-5 ${dark ? "text-white/70" : "text-g600"}`}>
        {r.label} · {r.use}
      </figcaption>
    </figure>
  );
}

/* 한 시안의 세 비율 — 왼쪽 9:16, 오른쪽 1:1 위·16:9 아래 */
export function AdTrio({ kind, item, className = "" }: { kind: AdKind; item: AdIndustry; className?: string }) {
  return (
    <div className={`grid grid-cols-[0.88fr_1fr] items-center gap-3 ${className}`}>
      <AdFigure kind={kind} item={item} id="9x16" sizes="(min-width: 1024px) 260px, 44vw" />
      <div className="grid gap-3">
        <AdFigure kind={kind} item={item} id="1x1" sizes="(min-width: 1024px) 300px, 50vw" />
        <AdFigure kind={kind} item={item} id="16x9" sizes="(min-width: 1024px) 300px, 50vw" />
      </div>
    </div>
  );
}

/* 크게 보기: 데스크톱은 화면 높이(H)에 맞춘 좌우 배치, 모바일은 세로로 쌓아 스크롤.
   왼쪽 폭 = (H − 표시 26px) × 9/16, 오른쪽 폭 = (H − 표시 26px×2 − 간격 12px) ÷ (1 + 9/16) → 두 열의 높이가 같다 */
export function AdLightboxView({ kind, item }: { kind: AdKind; item: AdIndustry }) {
  return (
    <div className="flex max-h-full w-full max-w-md flex-col items-center gap-3 overflow-y-auto lg:h-[min(76vh,760px)] lg:w-auto lg:max-w-none lg:flex-row lg:items-start lg:overflow-visible">
      <AdFigure kind={kind} item={item} id="9x16" dark sizes="(min-width: 1024px) 420px, 70vw" className="w-[70%] shrink-0 lg:w-[calc((min(76vh,760px)-26px)*0.5625)]" />
      <div className="flex w-full shrink-0 flex-col gap-3 lg:w-[calc((min(76vh,760px)-64px)/1.5625)]">
        <AdFigure kind={kind} item={item} id="1x1" dark sizes="(min-width: 1024px) 460px, 92vw" />
        <AdFigure kind={kind} item={item} id="16x9" dark sizes="(min-width: 1024px) 460px, 92vw" />
      </div>
    </div>
  );
}
