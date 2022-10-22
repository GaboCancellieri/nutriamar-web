import {
  COLOR_BLACK,
  COLOR_DANGER,
  COLOR_SUCCESS,
  COLOR_WARNING,
  SUCCESS,
} from "@constants/colors";
import { FONT_AWESOME } from "@constants/icons";
import { AlertVariant } from "./types";

export const ALERT_VARIANTS = {
  success: {
    title: {
      text: "Éxito!",
      size: 50,
      color: COLOR_SUCCESS,
    },
    description: {
      text: "Operacion exitosa!",
      size: 16,
      color: COLOR_BLACK,
    },
    icon: {
      size: "10x",
      id: "FaRegCheckCircle",
      design: FONT_AWESOME,
      color: SUCCESS,
    },
  } as AlertVariant,
  error: {
    title: {
      text: "Uupps...",
      size: 30,
      color: COLOR_DANGER,
    },
  },
  warning: {
    title: {
      text: "Atención!",
      size: 30,
      color: COLOR_WARNING,
    },
  },
  info: {
    title: null,
  },
};
