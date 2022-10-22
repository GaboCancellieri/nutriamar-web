import React from "react";
import { CENTER, LATO, NONE, REGULAR } from "@constants/fonts";
import { typographyVariant } from "./constants";
import { TypographyProps } from "./types";
import { COLOR_BLACK } from "@constants/colors";
import TextArea from "../TextArea";

const Typography = ({
  align = CENTER,
  className,
  children,
  color = COLOR_BLACK,
  enableEdit = false,
  fontFamily = LATO,
  lineHeight = "24px",
  onChange = () => {},
  maxHeight = "",
  textTransform = NONE,
  size = 14,
  variant = REGULAR,
}: TypographyProps) => {
  if (enableEdit) {
    return (
      <TextArea
        className={className}
        style={{
          color,
          fontSize: size,
          fontFamily: typographyVariant[fontFamily][variant],
          textAlign: align,
          textTransform,
          lineHeight,
          height: maxHeight,
          maxHeight,
        }}
        onChange={onChange}
        value={children?.valueOf().toString()}
      ></TextArea>
    );
  }
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
