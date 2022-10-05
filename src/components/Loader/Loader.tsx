import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PRIMARY_COLOR } from "../../constants/colors";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <AiOutlineLoading3Quarters
      className={styles.iconSpin}
      style={{ color: PRIMARY_COLOR }}
    />
  );
};

export default Loader;
