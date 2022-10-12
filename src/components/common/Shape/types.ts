import { OBJECT_ALIGN_VARIANTS } from "@constants/shapes";
import { ReactNode } from "react";
import { ICON_COLORS_VARIANTS } from "../Icon/constants";
import { SHAPE_TYPE_VARIANTS } from "./constants";

export interface ShapeProps {
  align?: keyof typeof OBJECT_ALIGN_VARIANTS;
  children: ReactNode;
  num?: number;
  width: number;
  height: number;
  type?: keyof typeof SHAPE_TYPE_VARIANTS;
  color?: keyof typeof ICON_COLORS_VARIANTS;
  fly?: boolean;
  top?: string;
  flexDirection?: "column" | "row" | undefined;
}
