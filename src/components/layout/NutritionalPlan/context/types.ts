import { SectionType } from "src/components/common/Section/types";

export interface INutritionalPlanInfo {
  id: string;
  section1: SectionType;
  section2: SectionType;
}

export interface INutritionalPlanState {
  nutritionalPlanInfoAux: INutritionalPlanInfo | null;
  nutritionalPlanInfo: INutritionalPlanInfo | null;
  enableNutritionalPlanEdit: boolean;
  selectedSection: number | null;
  isEditingIFrame: boolean;
  isEditingImage: boolean;
}
