"use client";

import { Dispatch, SetStateAction } from "react";
import TabButton from "./tab-button";
import data from "@/data";

export default function Tab({
  setSelected,
}: {
  setSelected: Dispatch<SetStateAction<number>>;
}) {
  const emptyArray = new Array(4).fill(null);
  const handleClick = (idx: number) => setSelected(idx);

  return (
    <div>
      {emptyArray.map((_, idx) => (
        <TabButton key={idx} onClick={() => handleClick(idx)}>
          {data[idx].title}
        </TabButton>
      ))}
    </div>
  );
}
