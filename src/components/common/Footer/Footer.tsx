import { Image, Typography } from "@ccomponents";
import {
  COLOR_BLACK,
  COLOR_BLACK_HOVER,
  COLOR_PRIMARY,
} from "@constants/colors";
import { JUSTIFY, LEFT } from "@constants/fonts";
import { MT_05 } from "@constants/margins";
import React, { LegacyRef } from "react";
import {
  FOOTER_DESCRIPTION_1,
  FOOTER_SUBTITLE_1,
  FOOTER_TITLE_1,
} from "./constants";
import styles from "./footer.module.scss";

const Footer = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={styles.footerContainer}
    >
      <div className={styles.footerContent}>
        <Image
          width={"350px"}
          height={"185px"}
          altText={"logo"}
          url={"./public/img/logos/Logo-Alt.png"}
        />
        <div className={styles.textContainer}>
          <Typography align={LEFT} size={24} color={COLOR_PRIMARY}>
            {FOOTER_TITLE_1}
          </Typography>
          <Typography
            className={MT_05}
            align={JUSTIFY}
            size={21}
            color={COLOR_BLACK}
          >
            {FOOTER_SUBTITLE_1}
          </Typography>
          <Typography
            className={MT_05}
            align={JUSTIFY}
            size={16}
            color={COLOR_BLACK_HOVER}
          >
            {FOOTER_DESCRIPTION_1}
          </Typography>
        </div>
      </div>
    </div>
  );
});

export default Footer;
