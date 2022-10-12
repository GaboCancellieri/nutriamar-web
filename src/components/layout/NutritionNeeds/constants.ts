import { FONT_AWESOME, GAME_ICONS, MATERIAL_DESIGN } from "@constants/icons";
import { NeedItemType } from "./NeedItem/types";

export const NUTRITION_NEEDS_TITLE = "Nutrición según tus necesidades!";

export const NUTRITION_NEEDS: NeedItemType[] = [
  {
    icon: "GiWeightLiftingUp",
    iconDesign: GAME_ICONS,
    title: "Nutrición en el Deporte",
    description: `Mejorar inconvenientes y patologías gastrointestinales. Disminuir o eliminar dolores recurrentes, evitar lesiones y mejorar rendimiento deportivo.`,
  },
  {
    icon: "MdChildCare",
    iconDesign: MATERIAL_DESIGN,
    title: "Nutrición Pediátrica",
    description: `Enfoque familiar, coaching nutricional para la familia.`,
  },
  {
    icon: "MdElderly",
    iconDesign: MATERIAL_DESIGN,
    title: "Nutrición en Gerontes",
    description: `Enfoque familiar, coaching nutricional para la familia.`,
  },
  {
    icon: "GiStomach",
    iconDesign: GAME_ICONS,
    title: "Nutrición en desordenes endocrino metabolicos",
    description: `Mejorar inconvenientes y patologías gastrointestinales. Disminuir o eliminar dolores recurrentes. Limpiezas Hepaticas y tratamientos depurativos.`,
  },
  {
    icon: "FaRegHeart",
    iconDesign: FONT_AWESOME,
    title: "Nutrición en Cancer",
    description: `Mejorar inconvenientes y patologías gastrointestinales. Disminuir o eliminar dolores recurrentes. Limpiezas Hepaticas y tratamientos depurativos.`,
  },
  {
    icon: "FaBacterium",
    iconDesign: FONT_AWESOME,
    title: "Nutrición enfermedades autoinmunes",
    description: `Mejorar inconvenientes y patologías gastrointestinales. Disminuir o eliminar dolores recurrentes. Limpiezas Hepaticas y tratamientos depurativos.`,
  },
];

export const CONTACT_BUTTON_TEXT = "Enviar una consulta!";
