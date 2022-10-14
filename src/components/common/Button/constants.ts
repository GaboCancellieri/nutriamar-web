import {
  ALGIN_LEFT,
  ALIGN_CENTER,
  ALIGN_RIGHT,
  BUTTON,
  FIT,
  FULL,
  LARGE,
  NORMAL,
  SMALL,
  SUBMIT,
  TINY,
} from "@constants/buttons";
import {
  COLOR_TRANSPARENT,
  COLOR_DANGER,
  COLOR_HELP,
  COLOR_INFO,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_WARNING,
  COLOR_SECONDARY_LIGHT,
  COLOR_PRIMARY_LIGHT,
  COLOR_GRAY_LIGHT,
} from "@constants/colors";

export const buttonVariant = {
  primary: COLOR_PRIMARY,
  primaryLight: COLOR_PRIMARY_LIGHT,
  secondary: COLOR_SECONDARY,
  secondaryLight: COLOR_SECONDARY_LIGHT,
  success: COLOR_SUCCESS,
  info: COLOR_INFO,
  warning: COLOR_WARNING,
  help: COLOR_HELP,
  danger: COLOR_DANGER,
  blank: COLOR_TRANSPARENT,
  grayLight: COLOR_GRAY_LIGHT,
};

export const buttonAlign = {
  center: ALIGN_CENTER,
  right: ALIGN_RIGHT,
  left: ALGIN_LEFT,
};

export const buttonSize = {
  tiny: TINY,
  small: SMALL,
  normal: NORMAL,
  large: LARGE,
  fit: FIT,
  full: FULL,
};

export const buttonType = {
  button: BUTTON,
  submit: SUBMIT,
};
