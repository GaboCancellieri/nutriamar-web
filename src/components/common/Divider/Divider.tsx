import React from "react";
import { DividerProps } from "./types";
import styles from "./divider.module.scss";
import { BLACK } from "@constants/colors";
import { DIVIDER_COLOR_VARIANTS } from "./constants";
import classNames from "classnames";

const Divider = ({
  className,
  color = BLACK,
  direction = "horizontal",
  length = "100%",
  width = "2px",
}: DividerProps) => {
  const dividerStyle =
    direction === "horizontal"
      ? { width: length, height: width }
      : { height: length, width };
  return (
    <div
      className={classNames(styles.dividerContainer, className)}
      style={{ background: DIVIDER_COLOR_VARIANTS[color], ...dividerStyle }}
    ></div>
  );
};

export default Divider;
