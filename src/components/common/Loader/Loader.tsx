import React from "react";
import { PRIMARY } from "@constants/colors";
import styles from "./loader.module.scss";
import { Icon } from "@ccomponents";
import { LoaderProps } from "./types";

const Loader = ({ height = "100%", width = "100%" }: LoaderProps) => {
  return (
    <div className={styles.loaderContainer} style={{ width, height }}>
      <div className={styles.iconSpin}>
        <Icon
          color={PRIMARY}
          iconId={"AiOutlineLoading3Quarters"}
          iconDesign={"ant"}
        />
      </div>
    </div>
  );
};

export default Loader;
