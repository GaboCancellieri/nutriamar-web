import { buttonVariant, textColorVariant } from "./constants";
import { ButtonProps } from "./types";
import style from "./button.module.css";
import Typography from "../Typography";

const Button = ({
  rounded = true,
  size = "normal",
  variant = "primary",
  type = "button",
  text,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${style.button} ${style[size]} ${rounded && [style.rounded]}`}
      type={type}
      style={{ backgroundColor: buttonVariant[variant] }}
      onClick={onClick}
    >
      <Typography color={textColorVariant[variant]}>{text}</Typography>
    </button>
  );
};

export default Button;
