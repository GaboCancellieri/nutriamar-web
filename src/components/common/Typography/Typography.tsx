import React from "react";
import { typographyVariant } from "./constants";
import { TypographyProps } from "./types";

const Typography = ({
  align = "center",
  className = "",
  children,
  color = "#000000",
  fontFamily = "lato",
  lineHeight = "24px",
  size = 14,
  variant = "regular",
}: TypographyProps) => {
  return (
    <div
      className={className}
      style={{
        color,
        fontSize: size,
        fontFamily: typographyVariant[fontFamily][variant],
        textAlign: align,
        lineHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
