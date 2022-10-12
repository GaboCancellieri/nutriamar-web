import { COLOR_BLACK_HOVER, COLOR_SECONDARY_HOVER } from "@constants/colors";
import { DOSIS, JUSTIFY, UPPERCASE } from "@constants/fonts";
import { MT_1 } from "@constants/margins";
import classNames from "classnames";
import { SectionType } from "src/components/common/Section/types";
import styles from "./aboutMe.module.scss";

// TEXT
export const ABOUT_BE_SECTIONS: SectionType[] = [
  {
    title: {
      text: `Sobre Mí`,
      color: COLOR_SECONDARY_HOVER,
      size: 21,
      textTransform: UPPERCASE,
    },
    subtitle: {
      text: "Mi nombre es Sofia Daniela Perez, soy Licenciada en Nutrición.",
      color: COLOR_BLACK_HOVER,
      size: 21,
      fontFamily: DOSIS,
      classname: classNames(styles.subtitle1, MT_1),
    },
    description: {
      text: `Me dedico a reparar al organismo con los alimentos a través de la educación alimentaria, coaching nutricional y 
    del empoderamiento de la salud propia de cada persona. Trabajo con Agua de Mar, nutrición orgánica y molecular.`,
      color: COLOR_BLACK_HOVER,
      size: 14,
      classname: MT_1,
    },
    image: {
      url: "./public/img/aboutme/about_me_img_1.png",
      altText: `Sobre Mí`,
      width: "357px",
      height: "441px",
    },
  },
  {
    title: {
      text: `Empoderá tu salud`,
      color: COLOR_SECONDARY_HOVER,
      size: 21,
      textTransform: UPPERCASE,
    },
    description: {
      text: `¡Te invito a adquirir un mayor control sobre las decisiones y acciones que afectan tu salud! Conocer nuestro propio organismo con sus virtudes y vicios, n
      os ayuda a poder abordar un tratamiento de forma más personal e individualizada. Cada persona es distinta a otra, por más que la biológica humana sea la misma. 
      Es por ello que cada tratamiento se aborda de manera personalizada e individualizada para que la persona interesada en resolver su problema pueda aprender a 
      mejorar o resolver aquello que busca trabajar en el tratamiento nutricional.`,
      color: COLOR_BLACK_HOVER,
      size: 14,
      classname: classNames(MT_1, styles.description2),
      align: JUSTIFY,
    },
    image: {
      url: "./public/img/aboutme/about_me_img_2.png",
      altText: `Sobre Mí`,
      width: "467px",
      height: "314px",
    },
  },
];
