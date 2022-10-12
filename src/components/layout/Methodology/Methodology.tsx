import { Typography } from "@ccomponents";
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
      <Typography size={24} textTransform={UPPERCASE}>
        {METHODOLOGY_TITLE}
      </Typography>
      <div className={styles.stepsContainer}>
        {METHODOLOGY_STEPS.map((step, index) => {
          return <StepItem key={index} step={step} index={index} />;
        })}
      </div>
    </div>
  );
});

export default Methodology;
