import {
  COLOR_BLACK,
  COLOR_BLACK_HOVER,
  COLOR_SECONDARY,
} from "@constants/colors";
import { JUSTIFY, UPPERCASE } from "@constants/fonts";
import { MT_05, MT_1 } from "@constants/margins";
import { SectionType } from "src/components/common/Section/types";

// TEXT
export const NP_SECTIONS: SectionType[] = [
  {
    title: {
      text: "¿Qué es un",
      size: 21,
      color: COLOR_BLACK,
    },
    subtitle: {
      text: "Plan Nutricional?",
      size: 21,
      color: COLOR_SECONDARY,
      textTransform: UPPERCASE,
      classname: MT_05,
    },
    description: {
      text: `Para elaborar un plan alimenticio individualizado, hay que tener en cuenta varios factores como la edad, sexo, 
      actividad física, problemas de salud, estilo de vida… Entender quién es el paciente, cómo se alimenta, 
      qué ejercicio hace, cuál es su estado mental, identificar factores de riesgo, evitar el desarrollo de patologías y proponer un plan personalizado, 
      potenciando el sistema inmune, el sistema digestivo y controlando el estrés para llevar una vida saludable.`,
      size: 14,
      color: COLOR_BLACK_HOVER,
      align: JUSTIFY,
      classname: MT_1,
    },
    image: {
      url: "./public/img/nutritionalplan/cellphone.png",
      altText: "cellphone",
      width: "172px",
      height: "324px",
    },
  },
  {
    title: {
      text: "¿En que consta el",
      size: 21,
      color: COLOR_BLACK,
    },
    subtitle: {
      text: "seguimiento?",
      size: 21,
      color: COLOR_SECONDARY,
      textTransform: UPPERCASE,
      classname: MT_05,
    },
    description: {
      text: `Los tratamientos son 100% personalizados, y como nutricionista me encargo personalmente de seguirte en todo tu proceso de cambio de hábitos a la hora de aprender a alimentarse.
      Mantengo contacto directo, para seguir el registro de tus comidas diarias y hacer una devolución como asi también resolver tus dudas. `,
      align: JUSTIFY,
      classname: MT_1,
    },
    image: {
      url: "./public/img/nutritionalplan/cellphone.png",
      altText: "cellphone",
      width: "172px",
      height: "324px",
    },
  },
];
