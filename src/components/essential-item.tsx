"use client";

import Image from "next/image";
import { EssentialProps } from "@/types/data";

export default function EssentialItem(props: EssentialProps) {
  const { image, title, description } = props;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <figure className="relative h-40 w-40 mx-auto">
        <Image src={image} alt={title} fill={true} className="object-cover" />
      </figure>
      <figcaption className="text-2xl font-bold mb-3">{title}</figcaption>
      <p>{description}</p>
    </div>
  );
}
