import { StaticImageData } from "next/image";

export type EssentialData = {
  image: StaticImageData;
  title: string;
  description: string;
  example: string;
};

export type EssentialProps = Omit<EssentialData, "example">;

export type ExampleProps = { 
  content: string;
  selected: boolean;
}