import { SectionType } from "src/components/common/Section/types";
import { INutritionalPlanInfo } from "./types";

export const SET_NUTRITIONAL_PLAN_INFO_AUX = "SET_NUTRITIONAL_PLAN_INFO_AUX";
export const SET_NUTRITIONAL_PLAN_INFO = "SET_NUTRITIONAL_PLAN_INFO";
export const SET_NUTRITIONAL_PLAN_SECTION_1 = "SET_NUTRITIONAL_PLAN_SECTION_1";
export const SET_NUTRITIONAL_PLAN_SECTION_2 = "SET_NUTRITIONAL_PLAN_SECTION_2";
export const SELECT_EDIT_SECTION = "SELECT_EDIT_SECTION";
export const TOGGLE_NUTRITIONAL_PLAN_EDIT = "TOGGLE_NUTRITIONAL_PLAN_EDIT";
export const TOGGLE_IS_EDITING_IFRAME = "TOGGLE_IS_EDITING_IFRAME";
export const TOGGLE_IS_EDITING_IMAGE = "TOGGLE_IS_EDITING_IMAGE";
export const RESET_NUTRITIONAL_PLAN_INFO = "RESET_NUTRITIONAL_PLAN_INFO";

export const setNutritionalPlanInfoAux = (
  nutritionalPlanInfoAux: INutritionalPlanInfo
) => ({
  action: SET_NUTRITIONAL_PLAN_INFO_AUX,
  payload: { nutritionalPlanInfoAux },
});

export const setNutritionalPlanInfo = (
  nutritionalPlanInfo: INutritionalPlanInfo
) => ({
  action: SET_NUTRITIONAL_PLAN_INFO,
  payload: { nutritionalPlanInfo },
});

export const setNutritionalPlanSection1 = (section: SectionType) => ({
  action: SET_NUTRITIONAL_PLAN_SECTION_1,
  payload: { section },
});

export const setNutritionalPlanSection2 = (section: SectionType) => ({
  action: SET_NUTRITIONAL_PLAN_SECTION_2,
  payload: { section },
});

export const selectEditSection = (index: number) => ({
  action: SELECT_EDIT_SECTION,
  payload: { index },
});

export const toggleNutritionalPlanEdit = () => ({
  action: TOGGLE_NUTRITIONAL_PLAN_EDIT,
  payload: {},
});

export const toggleIsEditingIFrame = (index?: number) => ({
  action: TOGGLE_IS_EDITING_IFRAME,
  payload: { index },
});

export const toggleIsEditingImage = (index?: number) => ({
  action: TOGGLE_IS_EDITING_IMAGE,
  payload: { index },
});

export const resetNutritionalPlanInfo = () => ({
  action: RESET_NUTRITIONAL_PLAN_INFO,
});
