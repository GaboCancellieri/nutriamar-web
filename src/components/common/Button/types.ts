import { MouseEventHandler, ReactNode } from "react";
import {
  buttonAlign,
  buttonSize,
  buttonType,
  buttonVariant,
} from "./constants";

export interface ButtonProps {
  align?: keyof typeof buttonAlign;
  className?: string;
  children: ReactNode;
  rounded?: boolean;
  size?: keyof typeof buttonSize;
  variant?: keyof typeof buttonVariant;
  type?: keyof typeof buttonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  hover?: boolean;
  focus?: boolean;
  outline?: boolean;
  disabled?: boolean;
}
