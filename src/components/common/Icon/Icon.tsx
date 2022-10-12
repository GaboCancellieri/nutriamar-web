import React from "react";
import { IconProps } from "./types";
import { ICON_COLORS_VARIANTS, ICON_SIZE_VARIANTS } from "./constants";
import { WHITE } from "@constants/colors";
import styles from "./icon.module.scss";
import { ICON_DESIGN_VARIANTS, ICON_SIZE_NORMAL } from "@constants/icons";

const Icon = ({
  iconId,
  iconDesign,
  size = ICON_SIZE_NORMAL,
  color = WHITE,
}: IconProps) => {
  const design: any = ICON_DESIGN_VARIANTS[iconDesign];
  const Icon: any = design[iconId] ?? undefined;
  if (!Icon) {
    return <></>;
  }
  return (
    <Icon
      className={styles[size]}
      style={{ color: ICON_COLORS_VARIANTS[color] }}
      size={ICON_SIZE_VARIANTS[size]}
    />
  );
};

export default Icon;
