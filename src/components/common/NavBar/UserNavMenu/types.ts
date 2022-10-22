import { ICON_DESIGN_VARIANTS } from "@constants/icons";
import { MouseEventHandler } from "react";
import { IUser } from "src/context/UserContext/types";

export interface UserNavMenuProps {
  screenDispatcher: any;
  userDispatcher: any;
  currentUser: IUser;
}

export interface IUserMenuElement {
  name: string;
  iconId: string;
  iconDesign: keyof typeof ICON_DESIGN_VARIANTS;
}

export interface UserMenuElementProps {
  element: IUserMenuElement;
  isEditMode: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
