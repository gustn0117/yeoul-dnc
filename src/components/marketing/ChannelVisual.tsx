import Image from "next/image";
import ChannelLogo from "@/components/ui/ChannelLogo";
import FlowLine from "@/components/ui/FlowLine";
import PhoneFrame from "@/components/ui/PhoneFrame";
import { YOUTUBE_FORMATS, type ChannelVisual as Visual } from "@/components/marketing/data";

const panel = "on-dark relative isolate overflow-hidden rounded-[28px] bg-night sm:rounded-panel";
// 광고 캡처는 9:16(941×1672)이라 기본 9/18.5 프레임이면 좌우가 잘려 글자가 끊긴다

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
  if (visual.kind === "google") return <GooglePanel />;

  const [center, left, right] = visual.shots;
  return (
    <div className={`${panel} flex items-center justify-center gap-[3%] px-[4%] py-12 sm:py-16 lg:py-20`}>
      <Backdrop />
      <PhoneFrame src={left.src} alt={left.alt} sizes="(min-width: 1024px) 170px, 30vw" className="w-[29%] translate-y-[7%]" />
      <PhoneFrame src={center.src} alt={center.alt} sizes="(min-width: 1024px) 200px, 34vw" className="z-10 w-[34%]" />
      <PhoneFrame src={right.src} alt={right.alt} sizes="(min-width: 1024px) 170px, 30vw" className="w-[29%] translate-y-[7%]" />
    </div>
  );
}

/* 유튜브: 큰 영상 1 + 작은 2 — 포맷 이름(모바일)과 길이·형태(데스크톱)를 이미지 위 캡션으로 */
function YoutubePanel() {
  return (
    <div className={`${panel} grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-8 lg:p-10`}>
      <Backdrop />
      {YOUTUBE_FORMATS.map((f, i) => (
        <figure key={f.name} className={`relative overflow-hidden rounded-2xl bg-white/10 sm:rounded-3xl ${i === 0 ? "col-span-2 aspect-video" : "aspect-4/3"}`}>
          <Image src={f.image} alt={f.alt} fill sizes={i === 0 ? "(min-width: 1024px) 520px, 90vw" : "(min-width: 1024px) 250px, 45vw"} className="object-cover" />
          {i === 0 && (
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-pop sm:h-18 sm:w-18" aria-hidden="true">
              <svg className="ml-1 h-6 w-6 text-ink sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4.8v14.4a1 1 0 0 0 1.52.85l11.5-7.2a1 1 0 0 0 0-1.7L8.52 3.95A1 1 0 0 0 7 4.8Z" />
              </svg>
            </span>
          )}
          <figcaption className="absolute bottom-2.5 left-2.5 rounded-full bg-white px-3 py-1.5 text-[15px] font-bold tracking-[-0.02em] text-ink sm:bottom-4 sm:left-4 sm:px-3.5">
            {f.name}
            <span className="hidden font-semibold text-g600 sm:inline"> · {f.detail}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* 구글: 운영 장면 사진 + 검색 결과 상단 '스폰서' 광고가 어떻게 보이는지 보여주는 예시 카드 */
function GooglePanel() {
  return (
    <div className={`${panel} p-4 sm:p-8 lg:p-10`}>
      <Backdrop />
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white/10 sm:rounded-3xl">
        <Image src="/images/0515/team-presentation-3.png" alt="광고 성과 그래프를 띄워 놓고 분석하는 팀" fill sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" />
      </div>
      <div role="img" aria-label="구글 검색 결과에 노출되는 스폰서 광고 예시" className="relative mx-2 -mt-16 rounded-2xl bg-white p-5 shadow-pop sm:mx-8 sm:-mt-20 sm:p-6">
        <p className="flex items-center gap-2 text-[15px] text-g600">
          <ChannelLogo name="google" size={20} className="h-5 w-5" />
          <span className="font-bold text-ink">스폰서</span>
          <span aria-hidden="true">·</span>
          yeouldnc.com
        </p>
        <p className="mt-2 text-[19px] font-bold tracking-[-0.03em] text-accent sm:text-[21px]">여울디앤씨 마케팅 파트너</p>
        <p className="mt-1 text-[16px] leading-relaxed text-g700">검색, 디스플레이, 유튜브까지 통합 캠페인으로 비즈니스 성장을 함께합니다.</p>
      </div>
    </div>
  );
}
