import React from "react";
import { buttonAlign, buttonVariant } from "./constants";
import { ButtonProps } from "./types";
import style from "./button.module.scss";
import classNames from "classnames";

const Button = ({
  align = "center",
  children,
  onClick,
  rounded = true,
  size = "normal",
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        style.button,
        style[size],
        style[buttonAlign[align]],
        {
          [style.rounded]: rounded,
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
