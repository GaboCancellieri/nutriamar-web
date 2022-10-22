import { IIFrameBackgroundTypeButton } from "./types";

// TEXT
export const IFRAME_MODAL_TITLE = "NUEVO VIDEO";
export const IFRAME_MODAL_URL_LABEL = "URL";
export const IFRAME_MODAL_PREVIEW_LABEL = "Vista Previa:";
export const IFRAME_MODAL_SAVE_BUTTON_TEXT = "Guardar";
export const IFRAME_MODAL_PREVIEW_NO_URL = "( Ingrese url del video )";

// VALUES
export const IFRAME_BACKGROUND_SIZE = {
  none: {
    width: 380,
    height: 230,
  },
  phone: {
    width: 172,
    height: 324,
  },
  tablet: {
    width: 255,
    height: 330,
  },
  desktop: {
    width: 380,
    height: 230,
  },
};

export const IFRAME_MODAL_BACKGROUND_TYPE_BUTTONS: IIFrameBackgroundTypeButton[] =
  [
    {
      icon: "FaBan",
      value: "none",
    },
    {
      icon: "FaMobileAlt",
      value: "phone",
    },
    {
      icon: "FaTabletAlt",
      value: "tablet",
    },
    {
      icon: "FaDesktop",
      value: "desktop",
    },
  ];
