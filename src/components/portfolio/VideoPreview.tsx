"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/ui/icons";
import { videoPoster, videoSrc } from "@/lib/portfolio";

/* 영상 미리보기(5초 클립) — 화면에 보일 때만 소리 없이 반복 재생하고, 벗어나면 멈춘다.
   동작 줄이기 설정이면 자동 재생하지 않는다. 언제든 버튼으로 재생·일시정지할 수 있다. */
export default function VideoPreview({ slug, label, className = "" }: { slug: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const stopped = useRef(false); // 사용자가 직접 멈춘 영상은 다시 자동 재생하지 않음
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !stopped.current) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      stopped.current = false;
      video.play().catch(() => {});
    } else {
      stopped.current = true;
      video.pause();
    }
  };

  return (
    <div className={`relative overflow-hidden bg-night ${className}`}>
      <video
        ref={ref}
        src={videoSrc(slug)}
        poster={videoPoster(slug)}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${label} 미리보기`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `${label} 미리보기 일시정지` : `${label} 미리보기 재생`}
        className="absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
      >
        {playing ? <PauseIcon className="h-4.5 w-4.5" /> : <PlayIcon className="ml-0.5 h-4.5 w-4.5" />}
      </button>
    </div>
  );
}
