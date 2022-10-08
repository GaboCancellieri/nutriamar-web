import React, { LegacyRef } from "react";
import { Image, Typography } from "@ccomponents";
import {
  ABOUT_ME_DESCRIPTION_1,
  ABOUT_ME_DESCRIPTION_2,
  ABOUT_ME_SUBTITLE_1,
  ABOUT_ME_TITLE_1,
  ABOUT_ME_TITLE_2,
} from "./constants";
import styles from "./aboutMe.module.scss";
import classNames from "classnames";
import { COLOR_BLACK_HOVER, COLOR_SECONDARY_HOVER } from "@constants/colors";
import { MT_2 } from "@constants/margins";
import { DOSIS, JUSTIFY, UPPERCASE } from "@constants/fonts";

const AboutMe = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={styles.aboutMeContainer}
    >
      <div className={styles.section}>
        <Image
          width="357px"
          height="441px"
          url="./public/img/aboutme/about_me_img_1.png"
          altText={ABOUT_ME_TITLE_1}
        />
        <div className={styles.textSection}>
          <Typography
            textTransform={UPPERCASE}
            color={COLOR_SECONDARY_HOVER}
            size={21}
            lineHeight="25px"
          >
            {ABOUT_ME_TITLE_1}
          </Typography>
          <Typography
            className={classNames(MT_2, styles.subtitle1)}
            color={COLOR_BLACK_HOVER}
            fontFamily={DOSIS}
            size={21}
            lineHeight="25px"
          >
            {ABOUT_ME_SUBTITLE_1}
          </Typography>
          <Typography
            className={MT_2}
            color={COLOR_BLACK_HOVER}
            size={14}
            lineHeight="25px"
          >
            {ABOUT_ME_DESCRIPTION_1}
          </Typography>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textSection2}>
          <Typography
            textTransform={UPPERCASE}
            color={COLOR_SECONDARY_HOVER}
            size={21}
            lineHeight="25px"
          >
            {ABOUT_ME_TITLE_2}
          </Typography>
          <Typography
            className={MT_2}
            color={COLOR_BLACK_HOVER}
            size={14}
            lineHeight="25px"
            align={JUSTIFY}
          >
            {ABOUT_ME_DESCRIPTION_2}
          </Typography>
        </div>
        <Image
          width="467px"
          height="314px"
          url="./public/img/aboutme/about_me_img_2.png"
          altText={ABOUT_ME_TITLE_2}
        />
      </div>
    </div>
  );
});

export default AboutMe;
