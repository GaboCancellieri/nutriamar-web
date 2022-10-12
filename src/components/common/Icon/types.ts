import { ICON_DESIGN_VARIANTS } from "@constants/icons";
import { ICON_COLORS_VARIANTS, ICON_SIZE_VARIANTS } from "./constants";

export interface IconProps {
  iconId: string;
  iconDesign: keyof typeof ICON_DESIGN_VARIANTS;
  color?: keyof typeof ICON_COLORS_VARIANTS;
  size?: keyof typeof ICON_SIZE_VARIANTS;
}
