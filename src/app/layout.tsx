import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "AI 퍼포먼스 마케팅 실행사, 여울디앤씨",
  description:
    "홈페이지, 랜딩페이지 제작 및 광고 운영과 콘텐츠 제작, 분양 광고 마케팅, DB 자동화 서비스 제공.",
  keywords: "AI 퍼포먼스 마케팅, 홈페이지 제작, 랜딩페이지, 광고 운영, 콘텐츠 제작, 분양 광고, DB 자동화, 여울디앤씨",
  verification: {
    google: "Jgb5fVHXF8BK-kUW2N1GDfnIWm5cYGYJnQMiAEDZWjE",
    other: {
      "naver-site-verification": "62a58f20ebf5bdf2d9fd14618b6ddbdf5fd36caf",
    },
  },
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
