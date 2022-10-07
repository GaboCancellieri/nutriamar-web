import { MouseEventHandler, ReactNode } from "react";
import { buttonVariant } from "./constants";

export interface ButtonProps {
  align?: "center" | "right" | "left";
  children: ReactNode;
  rounded?: boolean;
  size?: "tiny" | "small" | "normal" | "large" | "fit";
  variant?: keyof typeof buttonVariant;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
