"use client";

import { useState } from "react";
import Tab from "./tab";
import data from "@/data";
import ExampleItem from "./example-item";

export default function Examples() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-8">
      <h2 className="text-[#a18aba] text-2xl font-bold mb-4">Examples</h2>
      <Tab setSelected={setSelected} selected={selected} />
      <article className="leading-loose p-4 rounded-md bg-[#2f1d43] shadow-example">
        {data.map((el, idx) => (
          <ExampleItem key={idx} content={el.example} selected={idx===selected} />
        ))}
      </article>
    </section>
  );
}
