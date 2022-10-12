import React, { LegacyRef } from "react";
import { Divider, Typography, Image } from "@ccomponents";
import styles from "./nutritionalPlan.module.scss";
import {
  COLOR_BLACK_HOVER,
  COLOR_SECONDARY,
  SECONDARY,
} from "@constants/colors";
import { NP_SECTIONS } from "./constants";
import { JUSTIFY, UPPERCASE } from "@constants/fonts";
import { MT_2 } from "@constants/margins";
import Section from "src/components/common/Section";

const NutritionalPlan = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={styles.nutritionalPlanContainer}
    >
      <Divider color={SECONDARY} length="955px" />
      {NP_SECTIONS.map((item, index) => {
        return <Section section={item} index={index} />;
      })}
      <Divider className={MT_2} color={SECONDARY} length="955px" />
    </div>
  );
});

export default NutritionalPlan;
