"use client";

import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function TabButton(props: ComponentPropsWithoutRef<"button"> & { selected: boolean }) {
  const { children, selected, ...rest } = props;

  return (
    <button
      className={twMerge("px-3 py-2 h-10 rounded-md text-[#a18aba] transition duration-200 hover:bg-[#140524]", selected && "bg-[#7925d3] text-[#ebe7ef]")}
      {...rest}
    >
      {children}
    </button>
  );
}

// background-color: #7925d3;
// color: #ebe7ef;