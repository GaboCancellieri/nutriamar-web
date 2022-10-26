import {
  COLOR_BLACK,
  COLOR_DANGER,
  COLOR_SUCCESS,
  COLOR_WARNING,
  DANGER,
  INFO,
  SUCCESS,
  WARNING,
} from "@constants/colors";
import { FONT_AWESOME } from "@constants/icons";

export const ALERT_VARIANTS = {
  success: {
    title: {
      text: "Éxito!",
      size: 50,
      color: COLOR_SUCCESS,
    },
    description: {
      size: 16,
      color: COLOR_BLACK,
    },
    icon: {
      size: "10x",
      id: "FaRegCheckCircle",
      design: FONT_AWESOME,
      color: SUCCESS,
    },
  },
  error: {
    title: {
      text: "Uupps...",
      size: 30,
      color: COLOR_DANGER,
    },
    description: {
      size: 16,
      color: COLOR_BLACK,
    },
    icon: {
      size: "10x",
      id: "FaExclamationCircle",
      design: FONT_AWESOME,
      color: DANGER,
    },
  },
  warning: {
    title: {
      text: "Atención!",
      size: 30,
      color: COLOR_WARNING,
    },
    description: {
      size: 16,
      color: COLOR_BLACK,
    },
    icon: {
      size: "10x",
      id: "FaExclamationTriangle",
      design: FONT_AWESOME,
      color: WARNING,
    },
  },
  info: {
    title: null,
    description: {
      size: 16,
      color: COLOR_BLACK,
    },
    icon: {
      size: "10x",
      id: "FaInfoCircle",
      design: FONT_AWESOME,
      color: INFO,
    },
  },
};
