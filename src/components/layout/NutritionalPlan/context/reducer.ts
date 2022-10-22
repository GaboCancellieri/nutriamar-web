import { IReducerOptions } from "src/context/Store/types";
import { INutritionalPlanState } from "./types";
import * as Actions from "./actions";

export const nutritionalPlanInitialState: INutritionalPlanState = {
  nutritionalPlanInfoAux: null,
  nutritionalPlanInfo: null,
  enableNutritionalPlanEdit: false,
  selectedSection: null,
  isEditingIFrame: false,
  isEditingImage: false,
};

export const nutritionalPlanReducer = (
  state: INutritionalPlanState,
  options: IReducerOptions
) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_NUTRITIONAL_PLAN_INFO_AUX:
      return {
        ...state,
        nutritionalPlanInfoAux: Object.assign(payload.nutritionalPlanInfoAux),
      };
    case Actions.SET_NUTRITIONAL_PLAN_INFO:
      return {
        ...state,
        nutritionalPlanInfo: Object.assign(payload.nutritionalPlanInfo),
      };
    case Actions.SET_NUTRITIONAL_PLAN_SECTION_1:
      return {
        ...state,
        nutritionalPlanInfo: {
          ...state.nutritionalPlanInfo,
          section1: Object.assign(payload.section),
        },
      };
    case Actions.SET_NUTRITIONAL_PLAN_SECTION_2:
      return {
        ...state,
        nutritionalPlanInfo: {
          ...state.nutritionalPlanInfo,
          section2: Object.assign(payload.section),
        },
      };
    case Actions.SELECT_EDIT_SECTION:
      return {
        ...state,
        selectedSection: payload.index,
      };
    case Actions.TOGGLE_NUTRITIONAL_PLAN_EDIT:
      return {
        ...state,
        enableNutritionalPlanEdit: !state.enableNutritionalPlanEdit,
      };
    case Actions.TOGGLE_IS_EDITING_IFRAME:
      return {
        ...state,
        isEditingIFrame: !state.isEditingIFrame,
      };
    case Actions.TOGGLE_IS_EDITING_IMAGE:
      return {
        ...state,
        isEditingImage: !state.isEditingImage,
      };
    case Actions.RESET_NUTRITIONAL_PLAN_INFO:
      return {
        ...state,
        nutritionalPlanInfo: state.nutritionalPlanInfoAux,
      };
    default:
      return state;
  }
};
