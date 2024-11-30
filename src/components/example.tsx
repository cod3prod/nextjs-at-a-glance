"use client";

import { ExampleProps } from "@/types/data";

export default function Example(props: ExampleProps) {
  const { content, selected } = props;

  return selected && <p>{content}</p>;
}
