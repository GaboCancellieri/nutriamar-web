import { ReactNode } from "react";
import { ICON_DESIGN_VARIANTS } from "@constants/icons";
import {
  ICON_COLORS_VARIANTS,
  ICON_SIZE_VARIANTS,
} from "src/components/common/Icon/constants";

export interface IAlertVariant {
  title?: {
    text: string;
    color: string;
    size: number;
  } | null;
  description?: {
    text: string;
    color: string;
    size: number;
  } | null;
  icon?: {
    id: string;
    color: keyof typeof ICON_COLORS_VARIANTS;
    design: keyof typeof ICON_DESIGN_VARIANTS;
    size: keyof typeof ICON_SIZE_VARIANTS;
  } | null;
}

export interface IAlert {
  message: string;
  type: "urgent" | "light";
  variant: IAlertVariant;
}

export interface IAlertState {
  currentAlert: IAlert;
}

export interface AlertProviderProps {
  children: ReactNode;
}
