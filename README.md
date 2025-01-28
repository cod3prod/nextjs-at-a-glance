# Next.js at a glance

**Next.js의 주요 기농을 소개하는 랜딩 페이지**

## 🎯 **Project Purpose**

**핵심 목표**

- **Next.js 프로젝트 설치**: Next.js 프로젝트를 초기화하고 기본 구조를 이해합니다.
- **이미지 최적화**: Next.js의 `next/image` 컴포넌트를 사용하여 이미지를 최적화합니다.
- **폰트 최적화**: Google Fonts를 Next.js에 적용하고, 폰트 로딩 성능을 개선합니다.

## 🔨 **Tech Stack**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS

## 📝 **Key Learnings**

### 1. 이미지 최적화

Next.js의 `next/image` 컴포넌트를 사용하여 이미지를 최적화했습니다. `fill` 속성을 사용하여 부모 요소에 맞게 이미지를 조정하고, `object-cover`를 통해 비율을 유지하며 채웁니다.

```tsx
import Image from "next/image";
import HeaderImage from "@/assets/header.png";

export default function Header() {
  return (
    <header className="text-center mb-4 mt-8">
      <div className="flex justify-center">
        <div className="relative h-20 w-40">
          <Image
            src={HeaderImage}
            alt="Header Image"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <h1 className="header-title text-4xl">Next.js Essentials</h1>
      <p className="header-subtitle">Next.js project를 만들기 위한 핵심 요소</p>
    </header>
  );
}
```

### 2. 폰트 최적화

Google Fonts(Noto Sans KR)를 Next.js에 적용했습니다. next/font/google을 사용하여 폰트를 최적화하고, display: swap을 통해 폰트 로딩 중에도 텍스트가 표시되도록 했습니다.

```tsx
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
```

## ⚙️ **Setup**

```bash
# 설치
npm i

# 로컬 환경 실행
npm run dev
```
