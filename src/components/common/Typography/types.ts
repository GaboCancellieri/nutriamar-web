import { ReactNode } from "react";

export interface TypographyProps {
  align?: "left" | "right" | "center" | "justify";
  className?: string;
  children: ReactNode;
  color?: string;
  fontFamily?: "lato" | "dosis";
  lineHeight?: string;
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
