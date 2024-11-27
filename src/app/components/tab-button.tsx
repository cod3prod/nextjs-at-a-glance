"use client";

import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function TabButton(props: ComponentPropsWithoutRef<"button">) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge("px-3 py-2 h-10 rounded-md text-[#a18aba] transition duration-200 hover:bg-[#140524]", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
