import { ICON_DESIGN_VARIANTS } from "@constants/icons";

export type NeedItemType = {
  title: string;
  description: string;
  icon: string;
  iconDesign: keyof typeof ICON_DESIGN_VARIANTS;
};

export interface NeedItemProps {
  needItem: NeedItemType;
  index: number;
}
