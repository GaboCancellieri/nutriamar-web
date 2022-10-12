import React from "react";
import { Card, Icon, Shape, Typography } from "@ccomponents";
import { COLOR_PRIMARY, PRIMARY, SECONDARY_LIGHT } from "@constants/colors";
import { DOSIS, UPPERCASE } from "@constants/fonts";
import styles from "./needItem.module.scss";
import { NeedItemProps } from "./types";
import { MT_05, MT_1, MT_2 } from "@constants/margins";
import { POSITION_TOP, SHAPE_BUBBLE } from "@constants/shapes";
import classNames from "classnames";

const NeedItem = ({ needItem, index }: NeedItemProps) => {
  const titleLines = needItem.title.length / 21;
  console.log({ titleLines });
  return (
    <Card
      className={styles.needItemCard}
      key={index}
      containerLimit={320}
      contentLimit={220}
      cardsPerRow={3}
      height={"fit-content"}
      vAlign={POSITION_TOP}
    >
      <Shape color={SECONDARY_LIGHT} width={224} height={120}>
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
          color={COLOR_PRIMARY}
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
