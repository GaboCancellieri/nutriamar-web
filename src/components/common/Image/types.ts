import { ChangeEventHandler, MouseEventHandler } from "react";

export interface ImageProps {
  className?: string;
  width: string;
  height: string;
  altText: string;
  url: string;
  isFixed?: boolean;
  enableEdit?: boolean;
  onEdit?: MouseEventHandler<HTMLButtonElement>;
}
