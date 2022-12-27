import { IReducerOptions } from "src/context/Store/types";
import { ITestimoniesState } from "./types";
import * as Actions from "./actions";

export const testimoniesInitialState: ITestimoniesState = {
  isEditingTestimony: false,
  selectedTestimony: null,
  testimoniesInfoAux: null,
  testimoniesInfo: null,
};

export const testimoniesReducer = (
  state: ITestimoniesState,
  options: IReducerOptions
) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_TESTIMONIES_INFO_AUX:
      return {
        ...state,
        testimoniesInfoAux: Object.assign(payload.testimoniesInfoAux),
      };
    case Actions.SET_TESTIMONIES_INFO:
      return {
        ...state,
        testimoniesInfo: Object.assign(payload.testimoniesInfo),
      };
    case Actions.SET_TESTIMONIES_TITLE:
      return {
        ...state,
        testimoniesInfo: {
          ...state.testimoniesInfo,
          title: payload.title,
        },
      };
    case Actions.SET_TESTIMONIES_SUBTITLE:
      return {
        ...state,
        testimoniesInfo: {
          ...state.testimoniesInfo,
          subtitle: payload.subtitle,
        },
      };
    case Actions.SET_TESTIMONIES_BUTTON_TEXT:
      return {
        ...state,
        testimoniesInfo: {
          ...state.testimoniesInfo,
          buttonText: payload.buttonText,
        },
      };
    case Actions.TOGGLE_EDITING_TESTIMONY:
      return {
        ...state,
        isEditingTestimony: !state.isEditingTestimony,
        selectedTestimony: payload.selectedTestimony,
      };
    case Actions.RESET_TESTIMONIES_INFO:
      return {
        ...state,
        testimoniesInfo: state.testimoniesInfoAux,
      };
    default:
      return state;
  }
};
