import { ReactNode } from "react";
import { typographyVariant } from "./constants";

export interface TypographyProps {
  className?: string;
  align?: "left" | "right" | "center" | "justify";
  color?: string;
  children: ReactNode;
  fontFamily?: "lato" | "dosis";
  size?: number;
  variant?:
    | "bold"
    | "extraBold"
    | "regular"
    | "italic"
    | "medium"
    | "black"
    | "blackItalic";
}
