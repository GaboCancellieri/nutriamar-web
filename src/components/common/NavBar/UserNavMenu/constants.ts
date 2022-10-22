import { GAME_ICONS, ICO_MOON } from "@constants/icons";
import { IUserMenuElement } from "./types";

export const USER_MENU_ELEMENTS: IUserMenuElement[] = [
  {
    name: "Modo Edición",
    iconId: "GiPencilRuler",
    iconDesign: GAME_ICONS,
  },
  {
    name: "Cerrar Sesion",
    iconId: "ImExit",
    iconDesign: ICO_MOON,
  },
];
