import type { Metadata } from "next";

// 관리자 화면은 검색엔진에 노출하지 않음
export const metadata: Metadata = {
  title: "관리자 | 여울디앤씨",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
