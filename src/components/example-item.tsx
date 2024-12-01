"use client";

import { ExampleProps } from "@/types/data";

export default function ExampleItem(props: ExampleProps) {
  const { content, selected } = props;

  return selected && <p className="h-full">{content}</p>;
}
