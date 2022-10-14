import React, { LegacyRef, useEffect } from "react";
import { ABOUT_BE_SECTIONS } from "./constants";
import styles from "./aboutMe.module.scss";
import Section from "src/components/common/Section";

const AboutMe = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={styles.aboutMeContainer}
    >
      {ABOUT_BE_SECTIONS.map((item, index) => {
        return <Section key={index} section={item} index={index} />;
      })}
    </div>
  );
});

export default AboutMe;
