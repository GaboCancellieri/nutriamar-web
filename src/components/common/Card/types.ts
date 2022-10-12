import { OBJECT_ALIGN_VARIANTS } from "@constants/shapes";
import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  contentClassName?: string;
  children: ReactNode;
  containerLimit: number;
  contentLimit: number;
  cardsPerRow: 1 | 2 | 3 | 4 | 5;
  height?: string;
  hAlign?: keyof typeof OBJECT_ALIGN_VARIANTS;
  vAlign?: keyof typeof OBJECT_ALIGN_VARIANTS;
}
