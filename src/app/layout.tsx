import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Next.js Essentials",
  description: "Next.js의 핵심 기능을 소개하는 페이지",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
