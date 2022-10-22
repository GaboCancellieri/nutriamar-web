import { ICON_DESIGN_VARIANTS } from "@constants/icons";
import { ICON_COLORS_VARIANTS, ICON_SIZE_VARIANTS } from "../Icon/constants";

export interface AlertProps {
  type: "urgent" | "light";
  variant: "success" | "warning" | "error" | "info";
}

export interface AlertVariant {
  title?: {
    text: string;
    color: string;
    size: number;
  } | null;
  description?: {
    text: string;
    color: string;
    size: number;
  } | null;
  icon?: {
    id: string;
    color: keyof typeof ICON_COLORS_VARIANTS;
    design: keyof typeof ICON_DESIGN_VARIANTS;
    size: keyof typeof ICON_SIZE_VARIANTS;
  } | null;
}
