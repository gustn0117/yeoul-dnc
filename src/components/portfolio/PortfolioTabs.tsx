"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { KeyboardEvent } from "react";
import { AdLightboxView } from "@/components/portfolio/AdViews";
import Lightbox from "@/components/portfolio/Lightbox";
import VideoPreview from "@/components/portfolio/VideoPreview";
import { WEB_WORKS } from "@/lib/offerings";
import { AD_GROUPS, AD_INDUSTRIES, AD_KINDS, DOC_WORKS, PORTFOLIO_VIDEOS, adImage, type AdGroup, type AdKind } from "@/lib/portfolio";

const TABS = [
  { id: "web", label: "홈페이지·랜딩", count: WEB_WORKS.length },
  { id: "brand", label: "브랜드형 광고", count: AD_INDUSTRIES.length },
  { id: "info", label: "정보형 광고", count: AD_INDUSTRIES.length },
  { id: "video", label: "영상 제작", count: PORTFOLIO_VIDEOS.length },
  { id: "docs", label: "문서·제안서", count: DOC_WORKS.length },
] as const;
type TabId = (typeof TABS)[number]["id"];

const isTab = (id: string): id is TabId => TABS.some((t) => t.id === id);

// 주소의 #web·#brand… 가 고른 분야 — 다른 페이지에서 /cases#video 처럼 바로 열 수 있게
const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const readHash = () => window.location.hash.slice(1);

function selectTab(id: TabId) {
  history.replaceState(null, "", `#${id}`);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="rounded-2xl bg-g50 px-5 py-4 text-[15px] leading-relaxed text-g600">{children}</p>;
}

function WebPanel() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {WEB_WORKS.map((w) => (
        <li key={w.slug} className="flex flex-col overflow-hidden rounded-4xl border border-g200 bg-white">
          <div className="bg-[#f4f4f4]">
            <Image src={w.image} alt={`${w.title} 화면`} width={1000} height={1000} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="h-auto w-full" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-[13px] font-bold text-brand">
              {w.industry} · {w.type}
            </p>
            <h3 className="mt-1.5 text-[21px] font-extrabold leading-snug tracking-[-0.04em] text-ink">{w.title}</h3>
            <p className="mt-3 border-t border-g100 pt-3 text-[15px] leading-relaxed text-g700">{w.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* 광고 29업종 — 업종 묶음으로 거르고, 누르면 같은 시안의 세 비율을 크게 */
function AdPanel({ kind }: { kind: AdKind }) {
  const [group, setGroup] = useState<AdGroup | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const list = group ? AD_INDUSTRIES.filter((i) => i.group === group) : AD_INDUSTRIES;
  const item = open === null ? null : list[open];
  const move = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + list.length) % list.length));
  const chip = (on: boolean) => `min-h-11 rounded-full px-4 text-[15px] font-bold transition-colors ${on ? "bg-night text-white" : "bg-white text-g700 ring-1 ring-g200 hover:ring-g400"}`;

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-8">
        <p className="text-[17px] leading-relaxed text-g700">{AD_KINDS[kind].desc} 한 시안을 1:1·9:16·16:9 세 가지 비율로 만들었습니다.</p>
        <Note>가상 브랜드로 만든 업종별 광고 디자인 예시입니다. 이미지를 누르면 세 가지 비율을 함께 볼 수 있습니다.</Note>
      </div>

      <div className="no-scrollbar -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 py-1 md:-mx-8 md:px-8 lg:mx-0 lg:flex-wrap lg:px-0" role="group" aria-label="업종 묶음">
        <button type="button" aria-pressed={group === null} onClick={() => setGroup(null)} className={`${chip(group === null)} shrink-0`}>
          전체 {AD_INDUSTRIES.length}
        </button>
        {AD_GROUPS.map((g) => (
          <button key={g} type="button" aria-pressed={group === g} onClick={() => setGroup(g)} className={`${chip(group === g)} shrink-0 whitespace-nowrap`}>
            {g}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-7">
        {list.map((ind, i) => (
          <li key={ind.slug}>
            <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left" aria-label={`${ind.name} ${AD_KINDS[kind].label} 크게 보기`}>
              <span className="relative block aspect-square overflow-hidden rounded-2xl bg-g100 ring-1 ring-black/5">
                <Image src={adImage(kind, ind, "1x1")} alt="" fill sizes="(min-width: 1024px) 290px, (min-width: 640px) 31vw, 46vw" className="object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]" />
              </span>
              <span className="mt-2.5 flex items-baseline justify-between gap-2">
                <span className="text-[16px] font-bold tracking-[-0.03em] text-ink">{ind.name}</span>
                <span className="text-[13px] font-semibold text-g500">3비율</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {item && (
        <Lightbox title={`${item.name} · ${AD_KINDS[kind].label}`} counter={`${(open ?? 0) + 1} / ${list.length}`} onClose={() => setOpen(null)} onPrev={() => move(-1)} onNext={() => move(1)}>
          <AdLightboxView key={item.slug} kind={kind} item={item} />
        </Lightbox>
      )}
    </div>
  );
}

function VideoPanel() {
  return (
    <div>
      <Note>영상마다 가장 보기 좋은 5초를 골라 소리 없이 보여드립니다. 전체 영상은 상담에서 확인하실 수 있습니다.</Note>
      <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
        {PORTFOLIO_VIDEOS.map((v) => (
          <li key={v.slug}>
            <VideoPreview slug={v.slug} label={v.title} className="aspect-9/16 rounded-2xl" />
            <p className="mt-2.5 flex items-baseline justify-between gap-2">
              <span className="text-[16px] font-bold tracking-[-0.03em] text-ink">{v.title}</span>
              <span className="shrink-0 text-[13px] font-semibold text-g500">{v.tag}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocPanel() {
  const [open, setOpen] = useState<number | null>(null);
  const doc = open === null ? null : DOC_WORKS[open];
  const move = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + DOC_WORKS.length) % DOC_WORKS.length));
  return (
    <div>
      <Note>PPT 발표 자료, 사업제안서, 회사소개서의 표지와 본문 페이지를 모았습니다. 이미지를 누르면 크게 볼 수 있습니다.</Note>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {DOC_WORKS.map((d, i) => (
          <li key={d.id}>
            <button type="button" onClick={() => setOpen(i)} className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-g100 ring-1 ring-black/5" aria-label={`${d.alt} 크게 보기`}>
              <Image src={d.src} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]" />
            </button>
          </li>
        ))}
      </ul>
      {doc && (
        <Lightbox title="문서·제안서" counter={`${(open ?? 0) + 1} / ${DOC_WORKS.length}`} onClose={() => setOpen(null)} onPrev={() => move(-1)} onNext={() => move(1)}>
          <figure className="relative aspect-video w-[min(100%,calc((100dvh-11rem)*16/9))] overflow-hidden rounded-xl bg-white/6">
            <Image key={doc.id} src={doc.src} alt={doc.alt} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-contain" />
          </figure>
        </Lightbox>
      )}
    </div>
  );
}

/* 포트폴리오 5개 분야 탭 — 고른 분야만 보이고(나머지 이미지는 내려받지 않음), 주소 #으로 기억 */
export default function PortfolioTabs() {
  const hash = useSyncExternalStore(subscribeHash, readHash, () => "");
  const active: TabId = isTab(hash) ? hash : "web";

  // 다른 페이지에서 /cases#video 로 들어오면 탭 위치로 스크롤
  useEffect(() => {
    if (isTab(readHash())) document.getElementById("portfolio-tabs")?.scrollIntoView({ block: "start" });
  }, []);

  const onKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = TABS[(i + dir + TABS.length) % TABS.length];
    selectTab(next.id);
    document.getElementById(`portfolio-tab-${next.id}`)?.focus();
  };

  return (
    <div id="portfolio-tabs" className="scroll-mt-20 lg:scroll-mt-24">
      <div className="sticky top-(--header-h) z-20 -mx-5 border-b border-g200 bg-white/95 px-5 py-3 backdrop-blur md:-mx-8 md:px-8 lg:mx-0 lg:rounded-full lg:border lg:px-2 lg:py-2">
        <div role="tablist" aria-label="포트폴리오 분야" className="no-scrollbar flex gap-2 overflow-x-auto lg:justify-center">
          {TABS.map((t, i) => {
            const on = t.id === active;
            return (
              <button
                key={t.id}
                id={`portfolio-tab-${t.id}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`portfolio-panel-${t.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => selectTab(t.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[16px] font-bold transition-colors sm:px-5 ${on ? "bg-night text-white" : "text-g600 hover:bg-g100 hover:text-ink"}`}
              >
                {t.label}
                <span className={`text-[13px] tabular-nums ${on ? "text-white/60" : "text-g400"}`}>{t.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {TABS.map((t) => (
        <div key={t.id} id={`portfolio-panel-${t.id}`} role="tabpanel" aria-labelledby={`portfolio-tab-${t.id}`} hidden={t.id !== active} className="pt-8 sm:pt-10">
          {t.id === "web" && <WebPanel />}
          {(t.id === "brand" || t.id === "info") && <AdPanel kind={t.id} />}
          {t.id === "video" && <VideoPanel />}
          {t.id === "docs" && <DocPanel />}
        </div>
      ))}
    </div>
  );
}
