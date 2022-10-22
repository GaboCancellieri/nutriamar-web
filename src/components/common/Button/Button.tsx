import React from "react";
import { buttonAlign, buttonVariant } from "./constants";
import { ButtonProps } from "./types";
import style from "./button.module.scss";
import classNames from "classnames";
import { BUTTON, NORMAL } from "@constants/buttons";
import { CENTER } from "@constants/fonts";

const Button = ({
  align = CENTER,
  className = "",
  children,
  onClick,
  rounded = true,
  size = NORMAL,
  type = BUTTON,
  variant = "primary",
  hover = false,
  focus = false,
  outline = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        style.button,
        className,
        style[size],
        style[buttonAlign[align]],
        {
          [style.rounded]: rounded,
          [style[`${variant}Hover`]]: hover,
          [style[`${variant}IsActive`]]: focus,
        }
      )}
      type={type}
      style={{ backgroundColor: buttonVariant[variant] }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
