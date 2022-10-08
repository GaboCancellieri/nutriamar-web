import React from "react";
import { buttonAlign, buttonVariant } from "./constants";
import { ButtonProps } from "./types";
import style from "./button.module.scss";
import classNames from "classnames";
import { BUTTON, NORMAL } from "@constants/buttons";
import { CENTER } from "@constants/fonts";

const Button = ({
  align = CENTER,
  children,
  onClick,
  rounded = true,
  size = NORMAL,
  type = BUTTON,
  variant = "primary",
  hover = false,
  outline = false,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        style.button,
        style[size],
        style[buttonAlign[align]],
        {
          [style.rounded]: rounded,
          [style[`${variant}Hover`]]: hover,
        }
      )}
      type={type}
      style={{ backgroundColor: buttonVariant[variant] }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
