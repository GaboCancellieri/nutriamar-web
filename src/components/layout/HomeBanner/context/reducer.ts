import { IReducerOptions } from "src/context/Store/types";
import { IHomeBannerState } from "./types";
import * as Actions from "./actions";

export const homeBannerInitialState: IHomeBannerState = {
  isEditingImage: false,
  isEdit: false,
  homeBannerInfoAux: null,
  homeBannerInfo: null,
};

export const homeBannerReducer = (
  state: IHomeBannerState,
  options: IReducerOptions
) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SET_HOMEBANNER_INFO_AUX:
      return {
        ...state,
        homeBannerInfoAux: Object.assign(payload.homeBannerInfoAux),
      };
    case Actions.SET_HOMEBANNER_INFO:
      return {
        ...state,
        homeBannerInfo: Object.assign(payload.homeBannerInfo),
      };
    case Actions.SET_HOMEBANNER_IMAGE:
      return {
        ...state,
        homeBannerInfo: {
          ...state.homeBannerInfo,
          image: payload.image,
        },
      };
    case Actions.SET_HOMEBANNER_TITLE:
      return {
        ...state,
        homeBannerInfo: {
          ...state.homeBannerInfo,
          title: payload.title,
        },
      };
    case Actions.SET_HOMEBANNER_SUBTITLE:
      return {
        ...state,
        homeBannerInfo: {
          ...state.homeBannerInfo,
          subtitle: payload.subtitle,
        },
      };
    case Actions.SET_HOMEBANNER_BUTTON_TEXT:
      return {
        ...state,
        homeBannerInfo: {
          ...state.homeBannerInfo,
          buttonText: payload.buttonText,
        },
      };
    case Actions.TOGGLE_EDIT:
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    case Actions.TOGGLE_EDITING_IMAGE:
      return {
        ...state,
        isEditingImage: !state.isEditingImage,
      };
    case Actions.RESET_HOMEBANNER_INFO:
      return {
        ...state,
        homeBannerInfo: state.homeBannerInfoAux,
      };
    default:
      return state;
  }
};
