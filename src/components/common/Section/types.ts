import {
  fontFamilyTypes,
  textAlignTypes,
  textTransformTypes,
} from "../Typography/constants";
import { SectionLinkType } from "./SectionLinkItem/types";

export type TextType = {
  text: string;
  color?: string;
  size?: number;
  align?: keyof typeof textAlignTypes;
  fontFamily?: keyof typeof fontFamilyTypes;
  textTransform?: keyof typeof textTransformTypes;
  classname?: string;
};

export type ImageType = {
  url: string;
  altText: string;
  width: string;
  height: string;
};

export type SectionType = {
  title: TextType;
  subtitle?: TextType;
  description?: TextType;
  image?: ImageType;
  links?: SectionLinkType[];
};

export interface SectionProps {
  section: SectionType;
  textSectionClass?: string;
  index: number;
  enableInversion?: boolean;
  columnMargin?: string;
}
