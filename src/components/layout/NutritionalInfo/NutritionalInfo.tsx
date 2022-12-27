import { Section } from "@ccomponents";
import React from "react";
import { NUTRITIONAL_INFO_SECTIONS } from "./constants";
import styles from "./nutritionalInfo.module.scss";
import "./nutritionalInfo.module.scss";

const NutritionalInfo = ({}) => {
  return (
    <div className={styles.nutritionalInfoContainer}>
      {NUTRITIONAL_INFO_SECTIONS.map((item, index) => {
        return (
          <Section
            key={index}
            section={item}
            index={index}
            columnMargin="4rem"
            enableScrollAnimation
          />
        );
      })}
    </div>
  );
};

export default NutritionalInfo;
