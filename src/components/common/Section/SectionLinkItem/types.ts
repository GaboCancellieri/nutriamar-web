import { ICON_DESIGN_VARIANTS } from "@constants/icons";

export type SectionLinkType = {
  url: string;
  iconId?: string;
  iconDesign?: keyof typeof ICON_DESIGN_VARIANTS;
  title: string;
  subtitle: string;
};

export interface SectionLinkItemProps {
  link: SectionLinkType;
  index: number;
}
