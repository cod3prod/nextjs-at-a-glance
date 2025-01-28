import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/styles/index.css";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Next.js Essentials",
  description: "Next.js의 핵심 기능을 소개하는 페이지",
  icons: {
    icon: "/favicon.ico",
  },
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={twMerge(
          "relative min-h-screen flex flex-col",
          notoSansKR.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
