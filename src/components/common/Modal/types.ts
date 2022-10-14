import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isActive?: boolean;
  onCancel: Function;
  width: string;
  height: string;
}
