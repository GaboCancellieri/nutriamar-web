import { ReactNode } from "react";

export interface ScreenProviderProps {
  children: ReactNode;
}

export interface IScreenState {
  isEditMode: boolean;
}
