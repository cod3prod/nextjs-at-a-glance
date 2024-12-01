"use client";

import data from "@/data";
import EssentialItem from "./essential-item";

export default function Essentials() {
  return (
    <section className="p-8 rounded-md bg-[#140524] mb-8">
      <h2 className="text-[#a18aba] text-2xl font-bold">Essentials</h2>
      <div className="px-2 py-4 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {data.map((el, idx) => (
          <EssentialItem key={idx} {...el} />
        ))}
      </div>
    </section>
  );
}
