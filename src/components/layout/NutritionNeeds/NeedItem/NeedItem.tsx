import React from "react";
import { Card, Icon, Shape, Typography } from "@ccomponents";
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  PRIMARY,
  SECONDARY,
  SECONDARY_LIGHT,
  WHITE,
} from "@constants/colors";
import { DOSIS, UPPERCASE } from "@constants/fonts";
import styles from "./needItem.module.scss";
import { NeedItemProps } from "./types";
import { MT_05, MT_1, MT_2 } from "@constants/margins";
import { POSITION_TOP, SHAPE_BUBBLE } from "@constants/shapes";
import classNames from "classnames";

const NeedItem = ({ needItem, index }: NeedItemProps) => {
  const titleLines = needItem.title.length / 21;

  return (
    <Card
      className={styles.needItemCard}
      key={index}
      containerLimit={320}
      contentLimit={220}
      cardsPerRow={3}
      height={"270px"}
      hAlign={POSITION_TOP}
      vAlign={POSITION_TOP}
    >
      <Shape color={PRIMARY} width={340} height={120} top={"-0.7rem"}>
        <Shape
          type={SHAPE_BUBBLE}
          fly
          width={84}
          height={84}
          top={"-3.2rem"}
          color={PRIMARY}
        >
          <Icon iconId={needItem.icon} iconDesign={needItem.iconDesign} />
        </Shape>
        <Typography
          className={classNames(styles.needsTitle, {
            [MT_1]: titleLines > 1 && titleLines < 1.5,
            [MT_2]: titleLines >= 1.5,
          })}
          color={COLOR_WHITE}
          size={21}
          textTransform={UPPERCASE}
          fontFamily={DOSIS}
        >
          {needItem.title}
        </Typography>
      </Shape>
      <Typography className={MT_05}>{needItem.description}</Typography>
    </Card>
  );
};

export default NeedItem;
