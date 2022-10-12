import React from "react";
import { ShapeProps } from "./types";
import styles from "./shape.module.scss";
import { PRIMARY_LIGHT } from "@constants/colors";
import { ICON_COLORS_VARIANTS } from "../Icon/constants";
import classNames from "classnames";
import { CENTER } from "@constants/fonts";
import { OBJECT_ALIGN_VARIANTS } from "@constants/shapes";

const Shape = ({
  align = CENTER,
  children,
  width,
  height,
  type = "rectangle",
  color = PRIMARY_LIGHT,
  fly = false,
  top = "-0.5rem",
  flexDirection = "column",
}: ShapeProps) => {
  return (
    <div
      className={classNames(styles[`${type}Container`], { [styles.fly]: fly })}
      style={{
        background: ICON_COLORS_VARIANTS[color],
        width: `${width}px`,
        height: `${height}px`,
        alignSelf: OBJECT_ALIGN_VARIANTS[align],
        flexDirection,
        top,
      }}
    >
      {children}
    </div>
  );
};

export default Shape;
