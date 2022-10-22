import { ScrollAnimationWrapper, Typography } from "@ccomponents";
import { COLOR_WHITE } from "@constants/colors";
import { UPPERCASE } from "@constants/fonts";
import React, { LegacyRef } from "react";
import { METHODOLOGY_TITLE, METHODOLOGY_STEPS } from "./constants";
import styles from "./methodology.module.scss";
import StepItem from "./StepItem/StepItem";

const Methodology = React.forwardRef(({}, ref) => {
  return (
    <div
      className={styles.methodologyContainer}
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
    >
      <Typography size={25} textTransform={UPPERCASE} color={COLOR_WHITE}>
        {METHODOLOGY_TITLE}
      </Typography>
      <div className={styles.stepsContainer}>
        {METHODOLOGY_STEPS.map((step, index) => {
          return (
            <ScrollAnimationWrapper key={index} effectValue={0}>
              <StepItem step={step} index={index} />
            </ScrollAnimationWrapper>
          );
        })}
      </div>
    </div>
  );
});

export default Methodology;
