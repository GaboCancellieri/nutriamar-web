import React from "react";
import { SHAPE_RECTANGLE } from "@constants/shapes";
import { Icon, Shape, Typography } from "@ccomponents";
import {
  COLOR_BLACK_HOVER,
  COLOR_WHITE,
  PRIMARY_HOVER,
  SECONDARY_LIGHT,
} from "@constants/colors";
import styles from "./sectionLinkItem.module.scss";
import { SectionLinkItemProps } from "./types";
import classNames from "classnames";

const SectionLinkItem = ({ link, index }: SectionLinkItemProps) => {
  return (
    <a
      className={styles.linksContent}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Shape
        key={index}
        type={SHAPE_RECTANGLE}
        width={225}
        height={87}
        color={SECONDARY_LIGHT}
        flexDirection={"row"}
      >
        <div className={styles.shapeContent}>
          {link.iconId && link.iconDesign && (
            <Icon
              iconId={link.iconId}
              iconDesign={link.iconDesign}
              color={PRIMARY_HOVER}
              size={"2x"}
            />
          )}
          <div
            className={classNames(styles.textContent, {
              [styles.textContentCenter]: !link.iconId || !link.iconDesign,
            })}
          >
            <Typography color={COLOR_WHITE} size={20}>
              {link.title}
            </Typography>
            <Typography color={COLOR_BLACK_HOVER}>{link.subtitle}</Typography>
          </div>
        </div>
      </Shape>
    </a>
  );
};

export default SectionLinkItem;
