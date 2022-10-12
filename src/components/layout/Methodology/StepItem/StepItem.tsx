import React from "react";
import { FONT_AWESOME } from "@constants/icons";
import classNames from "classnames";
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  GRAY_EXTRA_LIGHT,
} from "@constants/colors";
import { SHAPE_BUBBLE } from "@constants/shapes";
import { Card, Icon, Shape, Typography } from "@ccomponents";
import { BOLD, CENTER, JUSTIFY, LEFT, UPPERCASE } from "@constants/fonts";
import { MT_1 } from "@constants/margins";
import styles from "./stepItem.module.scss";
import { StepItemProps } from "./types";

const StepItem = ({ step, index }: StepItemProps) => {
  return (
    <Card key={index} containerLimit={450} contentLimit={450} cardsPerRow={2}>
      <Shape type={SHAPE_BUBBLE} width={154} height={154}>
        <div className={styles.bubbleContent}>
          <Shape
            align={LEFT}
            type={SHAPE_BUBBLE}
            fly={true}
            width={38}
            height={38}
            color={GRAY_EXTRA_LIGHT}
          >
            <Typography color={COLOR_PRIMARY} variant={BOLD} size={16}>
              {index + 1}
            </Typography>
          </Shape>
          <Icon iconDesign={FONT_AWESOME} iconId={step.icon} />
          <Typography
            align={CENTER}
            className={classNames(styles.methodologyStepTitle, MT_1)}
            size={16}
            textTransform={UPPERCASE}
            color={COLOR_WHITE}
          >
            {step.title}
          </Typography>
        </div>
      </Shape>
      <Typography className={MT_1} align={JUSTIFY}>
        {step.description}
      </Typography>
    </Card>
  );
};

export default StepItem;
