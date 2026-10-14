import Image from "next/image";

export type ChannelKey =
  | "naver"
  | "kakaotalk"
  | "meta"
  | "instagram"
  | "facebook"
  | "youtube"
  | "google"
  | "google-ads"
  | "danggeun"
  | "tiktok"
  | "line";

/* /images/logos/*.svg 브랜드 마크 (SVG는 next/image가 자동으로 최적화 없이 제공).
   navermap·hogangnono·zigbang은 빈 파일/가짜 아이콘이라 목록에서 제외. */
export default function ChannelLogo({ name, size = 24, className = "", alt = "" }: { name: ChannelKey; size?: number; className?: string; alt?: string }) {
  return <Image src={`/images/logos/${name}.svg`} alt={alt} width={size} height={size} className={`object-contain ${className}`} />;
}
