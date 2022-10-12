import React, { useRef } from "react";
import {
  AboutMe,
  ContactMe,
  HomeBanner,
  Methodology,
  NutritionalInfo,
  NutritionalPlan,
  NutritionNeeds,
  Testimonies,
} from "@components";
import styles from "./homeScreen.module.scss";
import { NavBar, ScreenContainer } from "@ccomponents";

const HomeScreen = () => {
  const homeBannerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const methodologyRef = useRef(null);
  const nutritionalPlanRef = useRef(null);
  const nutritionNeedsRef = useRef(null);
  const nutritionalInfoRef = useRef(null);
  const contactMeRef = useRef(null);
  const testimoniesRef = useRef(null);
  return (
    <ScreenContainer>
      <div className={styles.homeScreenContainer}>
        <NavBar
          refs={[homeBannerRef, aboutMeRef, methodologyRef, nutritionalPlanRef]}
        />
        <div className={styles.screenContent}>
          <HomeBanner ref={homeBannerRef} />
          <AboutMe ref={aboutMeRef} />
          <Methodology ref={methodologyRef} />
          <NutritionalPlan ref={nutritionalPlanRef} />
          <NutritionNeeds ref={nutritionNeedsRef} />
          <NutritionalInfo ref={nutritionalInfoRef} />
          <ContactMe ref={contactMeRef} />
          <Testimonies ref={testimoniesRef} />
        </div>
      </div>
    </ScreenContainer>
  );
};

export default HomeScreen;
