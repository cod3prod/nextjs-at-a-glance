"use client";

import { ExampleProps } from "@/types/data";

export default function Example(props: ExampleProps) {
  const { content, selected } = props;

  return selected && <p className="h-52 sm:h-auto">{content}</p>;
}
