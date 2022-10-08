import {
  LATO_VARIANTS,
  DOSIS_VARIANTS,
  NONE,
  UPPERCASE,
  LOWERCASE,
  CAPITALIZE,
  LATO,
  DOSIS,
  CENTER,
  RIGHT,
  LEFT,
  JUSTIFY,
  BOLD,
  EXTRA_BOLD,
  REGULAR,
  ITALIC,
  MEDIUM,
  BLACK,
  BLACK_ITALIC,
} from "@constants/fonts";

export const typographyVariant = {
  lato: {
    extraBold: LATO_VARIANTS.LATO_BOLD,
    bold: LATO_VARIANTS.LATO_BOLD,
    regular: LATO_VARIANTS.LATO_REGULAR,
    black: LATO_VARIANTS.LATO_BLACK,
    blackItalic: LATO_VARIANTS.LATO_BLACK_ITALIC,
    italic: LATO_VARIANTS.LATO_ITALIC,
    medium: LATO_VARIANTS.LATO_REGULAR,
  },
  dosis: {
    extraBold: DOSIS_VARIANTS.DOSIS_EXTRA_BOLD,
    bold: DOSIS_VARIANTS.DOSIS_BOLD,
    regular: DOSIS_VARIANTS.DOSIS_REGULAR,
    black: DOSIS_VARIANTS.DOSIS_REGULAR,
    blackItalic: DOSIS_VARIANTS.DOSIS_REGULAR,
    italic: DOSIS_VARIANTS.DOSIS_REGULAR,
    medium: DOSIS_VARIANTS.DOSIS_MEDIUM,
  },
};

export const textTransformTypes = {
  none: NONE,
  uppercase: UPPERCASE,
  lowercase: LOWERCASE,
  capitalize: CAPITALIZE,
};

export const fontFamilyTypes = {
  lato: LATO,
  dosis: DOSIS,
};

export const textAlignTypes = {
  center: CENTER,
  right: RIGHT,
  left: LEFT,
  justify: JUSTIFY,
};

export const fontVariantTypes = {
  bold: BOLD,
  extraBold: EXTRA_BOLD,
  regular: REGULAR,
  italic: ITALIC,
  medium: MEDIUM,
  black: BLACK,
  blackItalic: BLACK_ITALIC,
};
