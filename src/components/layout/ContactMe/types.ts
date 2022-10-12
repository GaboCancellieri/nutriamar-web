import { ICON_DESIGN_VARIANTS } from "@constants/icons";

export type ContactLinkType = {
  title: string;
  iconId: string;
  iconDesign: keyof typeof ICON_DESIGN_VARIANTS;
  url: string;
};
