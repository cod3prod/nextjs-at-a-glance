"use client";

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
