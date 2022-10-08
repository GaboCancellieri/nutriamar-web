import React from "react";
import { CENTER, LATO, NONE, REGULAR } from "@constants/fonts";
import { typographyVariant } from "./constants";
import { TypographyProps } from "./types";
import { COLOR_BLACK } from "@constants/colors";

const Typography = ({
  align = CENTER,
  className,
  children,
  color = COLOR_BLACK,
  fontFamily = LATO,
  lineHeight = "24px",
  textTransform = NONE,
  size = 14,
  variant = REGULAR,
}: TypographyProps) => {
  return (
    <div
      className={className}
      style={{
        color,
        fontSize: size,
        fontFamily: typographyVariant[fontFamily][variant],
        textAlign: align,
        textTransform,
        lineHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
