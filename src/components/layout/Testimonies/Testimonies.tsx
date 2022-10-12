import { Card, Image, Typography } from "@ccomponents";
import { DOSIS, JUSTIFY } from "@constants/fonts";
import { MT_1 } from "@constants/margins";
import React, { LegacyRef } from "react";
import { TESTIMONIES_ALL } from "./constants";
import styles from "./testimonies.module.scss";
import "./testimonies.module.scss";
import { Carousel } from "react-responsive-carousel";

const Testimonies = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      className={styles.testimoniesContainer}
    >
      <Carousel
        width={"1281px"}
        centerMode
        centerSlidePercentage={30}
        swipeable
        showStatus={false}
        showIndicators={false}
      >
        {TESTIMONIES_ALL.map((item, index) => {
          return (
            <Card
              key={index}
              className={styles.cardClass}
              contentClassName={styles.cardContentClass}
              containerLimit={365}
              contentLimit={365}
              height="205px"
              cardsPerRow={3}
            >
              <div className={styles.textSection}>
                <Typography size={21} fontFamily={DOSIS}>
                  {item.name}, {item.age}
                </Typography>
                <Typography className={MT_1} size={14} align={JUSTIFY}>
                  {item.comment}
                </Typography>
              </div>
              <div className={styles.profilePicSection}>
                <Image
                  width={"93px"}
                  height={"93px"}
                  altText={"profile_pic"}
                  url={"https://cdn-icons-png.flaticon.com/512/219/219969.png"}
                />
              </div>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
});

export default Testimonies;
