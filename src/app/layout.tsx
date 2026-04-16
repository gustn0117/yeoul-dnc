import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "여울디앤씨 | 온라인 광고 실행 파트너",
  description:
    "유입부터 상담 전환까지 설계하는 온라인 광고 실행사. 카카오, 네이버, 메타, 유튜브, 구글 등 다양한 광고 채널을 업종에 맞게 운영합니다.",
  keywords: "온라인광고, 광고대행사, 네이버광고, 메타광고, 카카오광고, 구글광고, 여울디앤씨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
