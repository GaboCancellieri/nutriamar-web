import React, { LegacyRef } from "react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { getRandomUser } from "../../../api/randomUser";
import { Loader, Image, Button, Typography } from "@ccomponents";
import styles from "./homeBanner.module.scss";
import { HOME_BANNER_SUBTITLE, HOME_BANNER_TITLE } from "./constants";
import { COLOR_PRIMARY } from "@constants/colors";

const HomeBanner = React.forwardRef(
  (
    {
      /* PROPS */
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async () => {
        if (isLoading) {
          const data = await getRandomUser();
          setIsLoading(false);
          console.log({ data });
        }
      })();
    }, [isLoading]);
    return (
      <div
        ref={ref as LegacyRef<HTMLDivElement> | undefined}
        className={classNames(styles.homeBannerContainer, {
          [styles.isLoading]: isLoading,
        })}
      >
        {isLoading && <Loader />}
        <Image
          height="100%"
          width="100%"
          url="./public/img/homebanner/image-test.png"
          altText="HomeBanner"
        />
        <div className={styles.centered}>
          <Typography
            lineHeight="50px"
            color={COLOR_PRIMARY}
            size={30}
            variant="bold"
          >
            {HOME_BANNER_TITLE}
          </Typography>
          <Typography lineHeight="30px" size={16}>
            {HOME_BANNER_SUBTITLE}
          </Typography>
          <Button size="fit" variant="secondaryLight">
            <Typography size={21} variant="bold">
              Quiero comenzar!
            </Typography>
          </Button>
        </div>
      </div>
    );
  }
);

export default HomeBanner;
