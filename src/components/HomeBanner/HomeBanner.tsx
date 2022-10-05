import classNames from "classnames";
import { useEffect, useState } from "react";
import { getRandomUser } from "../../api/randomUser";
import Loader from "../Loader";
import styles from "./homeBanner.module.scss";

const HomeBanner = () => {
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
      className={classNames(styles.homeBanneContainer, {
        [styles.isLoading]: isLoading,
      })}
    >
      {isLoading && <Loader />}
    </div>
  );
};

export default HomeBanner;
