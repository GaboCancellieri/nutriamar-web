import { ReactNode } from "react";

export interface EditWrapperProps {
  className: string;
  children: ReactNode;
  showEditWrapper: boolean;
  onEditSection: Function;
  onCancel: Function;
  onSave: Function;
}
