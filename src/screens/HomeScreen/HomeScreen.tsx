import React, { useRef } from "react";
import { HomeBanner } from "@components";
import AboutMe from "src/components/layout/AboutMe";
import styles from "./homeScreen.module.scss";
import { NavBar, ScreenContainer } from "@ccomponents";

const HomeScreen = () => {
  const homeBannerRef = useRef(null);
  const aboutMeRef = useRef(null);

  return (
    <ScreenContainer>
      <div className={styles.homeScreenContainer}>
        <NavBar refs={[homeBannerRef, aboutMeRef]} />
        <HomeBanner ref={homeBannerRef} />
        <AboutMe ref={aboutMeRef} />
      </div>
    </ScreenContainer>
  );
};

export default HomeScreen;
