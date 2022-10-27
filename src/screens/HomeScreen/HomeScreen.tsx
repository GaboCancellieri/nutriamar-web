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
  const homeBannerRef = useRef<any>(null);
  const aboutMeRef = useRef<any>(null);
  const methodologyRef = useRef<any>(null);
  const nutritionalPlanRef = useRef<any>(null);
  const nutritionNeedsRef = useRef<any>(null);
  const nutritionalInfoRef = useRef<any>(null);
  const contactMeRef = useRef<any>(null);
  const testimoniesRef = useRef<any>(null);
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
