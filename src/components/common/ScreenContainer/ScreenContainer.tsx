import React from "react";
import styles from "./screenContainer.module.scss";
import { ScreenContainerProps } from "./types";

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return <div className={styles.screenContainer}>{children}</div>;
};

export default ScreenContainer;
