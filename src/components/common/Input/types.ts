import { ChangeEventHandler } from "react";
import { INPUT_TYPE_VARIANTS } from "./constants";

export interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  state?: "normal" | "success" | "error";
  type?: keyof typeof INPUT_TYPE_VARIANTS;
}
