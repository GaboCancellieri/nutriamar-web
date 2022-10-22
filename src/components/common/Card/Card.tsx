import React from "react";
import { CardProps } from "./types";
import styles from "./card.module.scss";
import { CARDS_PER_ROW_VARIANTS } from "./constants";
import { CENTER } from "@constants/fonts";
import classNames from "classnames";

const Card = ({
  className,
  contentClassName,
  children,
  containerLimit,
  contentLimit,
  cardsPerRow,
  height,
  hAlign = CENTER,
  vAlign = CENTER,
}: CardProps) => {
  return (
    <div
      className={classNames(styles.cardContainer, className)}
      style={{
        flex: `0 0 ${CARDS_PER_ROW_VARIANTS[cardsPerRow]}`,
        maxWidth: `${containerLimit}px`,
        height,
        alignItems: hAlign,
        justifyContent: vAlign,
      }}
    >
      <div
        className={classNames(contentClassName, styles.cardContent)}
        style={{ maxWidth: `${contentLimit}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
