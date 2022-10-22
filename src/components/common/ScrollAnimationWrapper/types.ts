import { ReactNode } from "react";
import { SCROLL_EFFECT_VARIANTS } from "./constants";

export interface ScrollAnimationWrapperProps {
  children: ReactNode;
  effectDirection?: keyof typeof SCROLL_EFFECT_VARIANTS;
  effectValue?: number;
  isEditMode: boolean;
  disabled?: boolean;
}
