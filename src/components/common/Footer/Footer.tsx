import { Image, Typography } from "@ccomponents";
import {
  COLOR_BLACK,
  COLOR_BLACK_HOVER,
  COLOR_PRIMARY,
} from "@constants/colors";
import { CENTER, JUSTIFY, LEFT } from "@constants/fonts";
import { MT_05 } from "@constants/margins";
import React, { LegacyRef } from "react";
import connect from "src/context/Store/connect";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import {
  FOOTER_DESCRIPTION_1,
  FOOTER_SUBTITLE_1,
  FOOTER_TITLE_1,
} from "./constants";
import styles from "./footer.module.scss";

interface FooterProps {
  isMobile: boolean;
  isMobileOrTablet: boolean;
}

const Footer = React.forwardRef(
  ({ isMobile, isMobileOrTablet }: FooterProps, ref) => {
    return (
      <div
        ref={ref as LegacyRef<HTMLDivElement> | undefined}
        className={styles.footerContainer}
      >
        <div className={styles.footerContent}>
          <Image
            width={isMobile ? "250px" : "350px"}
            height={isMobile ? "130px" : "185px"}
            altText={"logo"}
            url={"./public/img/logos/logo-alternative.png"}
          />
          <div className={styles.textContainer}>
            <Typography align={LEFT} size={24} color={COLOR_PRIMARY}>
              {FOOTER_TITLE_1}
            </Typography>
            <Typography
              className={MT_05}
              align={isMobileOrTablet ? CENTER : JUSTIFY}
              size={21}
              color={COLOR_BLACK}
            >
              {FOOTER_SUBTITLE_1}
            </Typography>
            <Typography
              className={MT_05}
              align={isMobile ? CENTER : JUSTIFY}
              size={16}
              color={COLOR_BLACK_HOVER}
            >
              {FOOTER_DESCRIPTION_1}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
);

const mapStateToProps: any = [
  {
    context: WindowSizeStateContext,
    mapStateToProps: ({ isMobile, isMobileOrTablet }: IWindowSizeState) => ({
      isMobile,
      isMobileOrTablet,
    }),
  },
];

export default connect({ mapStateToProps })(Footer);
