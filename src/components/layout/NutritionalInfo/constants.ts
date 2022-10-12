import { COLOR_BLACK_HOVER, COLOR_SECONDARY_HOVER } from "@constants/colors";
import { JUSTIFY, UPPERCASE } from "@constants/fonts";
import { BOOTSTRAP_ICONS, FEATHER_ICONS } from "@constants/icons";
import { MT_05 } from "@constants/margins";
import { SectionType } from "src/components/common/Section/types";

export const NUTRITIONAL_INFO_SECTIONS: SectionType[] = [
  {
    title: {
      text: `Agua de Mar`,
      color: COLOR_SECONDARY_HOVER,
      textTransform: UPPERCASE,
      size: 21,
    },
    description: {
      text: `El agua de mar tiene una infinidad de usos y aplicaciones para la salud de las personas, los animales y las plantas. Es conocida por tener todos los elementos de la Tabla Periódica. Esto quiere decir que a partir del agua de mar podemos nutrirnos de muchos micronutrientes que actualmente no logramos obtener a partir de nuestra propia alimentación más allá que busquemos una alimentación sin procesados.
      La investigación ha demostrado que puede ayudar a superar problemas de salud especialmente relacionados con enfermedades asociadas al estilo de vida, como enfermedades cardiovasculares, diabetes, obesidad, cáncer y problemas de la piel.
      Gracias al francés Rene Quintón y a nuestros actuales investigadores referentes mundiales sobre el agua de mar Angel Gracia y Griselda Donatucci. Hoy tenemos pruebas suficientes para saber que el agua de mar es efectiva y eficiente para tratar muchas dolencias y carencias nutritivas por falta de nutrientes orgánicos.`,
      color: COLOR_BLACK_HOVER,
      align: JUSTIFY,
      classname: MT_05,
    },
    image: {
      url: `./public/img/nutritionalinfo/image1.png`,
      altText: `Agua de Mar`,
      width: `462px`,
      height: `403px`,
    },
    links: [
      {
        url: `https://www.google.com`,
        title: `Ángel García`,
        subtitle: `Más Información`,
        iconId: `BsArrowUpRightSquare`,
        iconDesign: BOOTSTRAP_ICONS,
      },
      {
        url: `https://www.youtube.com`,
        title: `Ángel García`,
        subtitle: `Canal de Youtube`,
        iconId: `FiYoutube`,
        iconDesign: FEATHER_ICONS,
      },
      {
        url: `https://www.google.com`,
        title: `Griselda Donatucci`,
        subtitle: `Más Información`,
        iconId: `BsArrowUpRightSquare`,
        iconDesign: BOOTSTRAP_ICONS,
      },
      {
        url: `https://www.youtube.com`,
        title: `Griselda Donatucci`,
        subtitle: `Canal de Youtube`,
        iconId: `FiYoutube`,
        iconDesign: FEATHER_ICONS,
      },
    ],
  },
  {
    title: {
      text: `limpiezas hepáticas`,
      color: COLOR_SECONDARY_HOVER,
      textTransform: UPPERCASE,
      size: 21,
    },
    description: {
      text: `La limpieza del hígado y de los conductos biliares es una de las maneras más efectivas de revitalizar un metabolismo y de eliminar grasa del cuerpo debido a la mejoría substancial que esto causa en un sistema digestivo. 
      Muchas personas tienen los conductos biliares tapados con piedras compuestas de colesterol y bilis endurecida. La bilis es esencial para el metabolismo y la digestión correcta de las grasas y proteínas que consumimos. Cuando los conductos biliares se tapan con piedras, el metabolismo y la digestión se vuelven deficientes. Esta es una de las grandes causas del ESTANCAMIENTO DE PESO, sobre todo en mujeres.
      El tratamiento de limpieza hepática que ofrezco puede hacerse online o presencial.`,
      color: COLOR_BLACK_HOVER,
      align: JUSTIFY,
      classname: MT_05,
    },
    image: {
      url: `./public/img/nutritionalinfo/image2.png`,
      altText: `Agua de Mar`,
      width: `461px`,
      height: `326px`,
    },
    links: [
      {
        url: `https://www.google.com`,
        title: `Quiero leer más!`,
        subtitle: `Ver más Información`,
      },
      {
        url: `https://www.youtube.com`,
        title: `Video explicativo`,
        subtitle: `Click para ver!`,
      },
      {
        url: `https://www.google.com`,
        title: `Quiero comenzar!`,
        subtitle: `Dejame un mensaje`,
      },
      {
        url: `https://www.youtube.com`,
        title: `Testimonios`,
        subtitle: `Leer más!`,
      },
    ],
  },
];
