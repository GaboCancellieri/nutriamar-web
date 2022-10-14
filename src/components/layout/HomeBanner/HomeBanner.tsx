import React, { LegacyRef, useEffect, useState } from "react";
import classNames from "classnames";
import { Loader, Image, Button, Typography } from "@ccomponents";
import styles from "./homeBanner.module.scss";
import { COLOR_PRIMARY } from "@constants/colors";
import { getHomeBannerInfo } from "@webApi/homeBannerApi";

const HomeBanner = React.forwardRef(({}, ref) => {
  const [homeBannerInfoAux, setHomeBannerInfoAux] = useState<any>();
  const [homeBannerInfo, setHomeBannerInfo] = useState<any>();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    (async () => {
      if (!homeBannerInfo) {
        const response = await getHomeBannerInfo();
        setHomeBannerInfo(response.data);
        setHomeBannerInfoAux(response.data);
      }
    })();
  }, []);

  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={classNames(styles.homeBannerContainer, {
        [styles.isLoading]: !homeBannerInfo,
      })}
    >
      {!homeBannerInfo ? (
        <Loader height="415px" />
      ) : (
        <>
          <Image
            height="100%"
            width="100%"
            url={homeBannerInfo.imageURL}
            altText={homeBannerInfo.imageURL}
          />
          <div className={styles.centered}>
            <Typography
              lineHeight="50px"
              color={COLOR_PRIMARY}
              size={30}
              variant="bold"
            >
              {homeBannerInfo.title}
            </Typography>
            <Typography lineHeight="30px" size={16}>
              {homeBannerInfo.subtitle}
            </Typography>
            <Button size="fit" variant="secondaryLight">
              <Typography size={21} variant="bold">
                {homeBannerInfo.buttonText}
              </Typography>
            </Button>
          </div>
        </>
      )}
    </div>
  );
});

export default HomeBanner;
