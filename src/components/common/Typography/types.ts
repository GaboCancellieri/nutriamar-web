import { ChangeEventHandler, ReactNode } from "react";
import {
  fontFamilyTypes,
  fontVariantTypes,
  textAlignTypes,
  textTransformTypes,
} from "./constants";
export interface TypographyProps {
  align?: keyof typeof textAlignTypes;
  className?: string;
  children: ReactNode;
  color?: string;
  enableEdit?: boolean;
  fontFamily?: keyof typeof fontFamilyTypes;
  lineHeight?: string;
  maxHeight?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  textTransform?: keyof typeof textTransformTypes;
  size?: number;
  variant?: keyof typeof fontVariantTypes;
}
