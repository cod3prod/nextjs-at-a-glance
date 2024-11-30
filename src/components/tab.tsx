"use client";

import { Dispatch, SetStateAction } from "react";
import TabButton from "./tab-button";
import data from "@/data";

export default function Tab({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) {
  const emptyArray = new Array(4).fill(null);
  const handleClick = (idx: number) => setSelected(idx);

  return (
    <div className="mb-4 flex flex-col sm:block">
      {emptyArray.map((_, idx) => (
        <TabButton key={idx} onClick={() => handleClick(idx)} selected={idx === selected}>
          {data[idx].title}
        </TabButton>
      ))}
    </div>
  );
}
