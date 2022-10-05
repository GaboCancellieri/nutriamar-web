import classNames from "classnames";
import { useEffect, useState } from "react";
import { getRandomUser } from "../../api/randomUser";
import Loader from "../Loader";
import Image from "../Image";
import styles from "./homeBanner.module.scss";
import Typography from "../Typography";
import Button from "../Button";

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
      className={classNames(styles.homeBannerContainer, {
        [styles.isLoading]: isLoading,
      })}
    >
      {isLoading && <Loader />}
      <Image height="100%" width="100%" url="/img/homebanner/image-test.jpg" altText="HomeBanner" />
      <div className={styles.centered}>
        <Typography size={30} variant="bold" >Bienvenidos!</Typography>
        <Typography>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</Typography>
        <Button variant="secondary" text="Empezar ahora" />
      </div>
    </div>
  );
};

export default HomeBanner;
