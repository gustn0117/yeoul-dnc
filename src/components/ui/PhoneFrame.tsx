import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/* 광고 화면 캡처(/images/0515/*-phone-*.png, 9:16)를 휴대폰 테두리에 담아 보여줌.
   모서리는 폭에 비례(가로 12% / 세로 6.75% = 9:16 상자에서 원형)라 작은 폰도 알약처럼 보이지 않는다. */
export default function PhoneFrame({ src, alt, className = "", sizes = "(min-width: 1024px) 260px, 40vw", priority = false }: PhoneFrameProps) {
  return (
    <div className={`relative aspect-9/16 rounded-[12%/6.75%] bg-ink p-1.5 shadow-pop ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[10%/5.6%] bg-white">
        <Image src={src} alt={alt} fill sizes={sizes} preload={priority} className="object-cover object-top" />
      </div>
    </div>
  );
}
