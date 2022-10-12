import { DIVIDER_COLOR_VARIANTS } from "./constants";

export interface DividerProps {
  className?: string;
  color?: keyof typeof DIVIDER_COLOR_VARIANTS;
  direction?: "horizontal" | "vertical";
  length?: string;
  width?: string;
}
