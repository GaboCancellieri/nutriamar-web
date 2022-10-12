import React, { LegacyRef } from "react";
import { Button, Icon, Typography } from "@ccomponents";
import {
  CONTACT_BUTTON_TEXT,
  NUTRITION_NEEDS,
  NUTRITION_NEEDS_TITLE,
} from "./constants";
import { UPPERCASE } from "@constants/fonts";
import { ML_1, MT_3 } from "@constants/margins";
import styles from "./nutritionNeeds.module.scss";
import NeedItem from "./NeedItem/NeedItem";
import { FULL } from "@constants/buttons";
import { NeedItemType } from "./NeedItem/types";
import { PRIMARY_LIGHT, WHITE } from "@constants/colors";
import { FONT_AWESOME } from "@constants/icons";

const NutritionNeeds = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={styles.nutritionNeedsContainer}
    >
      <Typography className={MT_3} size={21} textTransform={UPPERCASE}>
        {NUTRITION_NEEDS_TITLE}
      </Typography>
      <div className={styles.needsContainer}>
        {NUTRITION_NEEDS.map((item: NeedItemType, index) => {
          return <NeedItem key={index} needItem={item} index={index} />;
        })}
      </div>
      <div className={styles.buttonContainer}>
        <Button size={FULL} variant={PRIMARY_LIGHT}>
          <div className={styles.buttonContent}>
            <Icon iconId="FaRegEnvelope" iconDesign={FONT_AWESOME} size="2x" />
            <Typography className={ML_1} color={WHITE} size={16}>
              {CONTACT_BUTTON_TEXT}
            </Typography>
          </div>
        </Button>
      </div>
    </div>
  );
});

export default NutritionNeeds;
