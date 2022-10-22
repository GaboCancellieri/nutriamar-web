import { IHomeBannerImage, IHomeBannerInfo } from "./types";

export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const TOGGLE_EDITING_IMAGE = "TOGGLE_EDITING_IMAGE";
export const SET_HOMEBANNER_INFO_AUX = "SET_HOMEBANNER_INFO_AUX";
export const SET_HOMEBANNER_INFO = "SET_HOMEBANNER_INFO";
export const SET_HOMEBANNER_IMAGE = "SET_HOMEBANNER_IMAGE";
export const SET_HOMEBANNER_TITLE = "SET_HOMEBANNER_TITLE";
export const SET_HOMEBANNER_SUBTITLE = "SET_HOMEBANNER_SUBTITLE";
export const SET_HOMEBANNER_BUTTON_TEXT = "SET_HOMEBANNER_BUTTON_TEXT";
export const RESET_HOMEBANNER_INFO = "RESET_HOMEBANNER_INFO";

export const toggleEdit = () => ({ action: TOGGLE_EDIT });
export const toggleEditingImage = () => ({ action: TOGGLE_EDITING_IMAGE });
export const setHomeBannerInfoAux = (homeBannerInfoAux: IHomeBannerInfo) => ({
  action: SET_HOMEBANNER_INFO_AUX,
  payload: { homeBannerInfoAux },
});
export const setHomeBannerInfo = (homeBannerInfo: IHomeBannerInfo) => ({
  action: SET_HOMEBANNER_INFO,
  payload: { homeBannerInfo },
});
export const setHomeBannerImage = (image: IHomeBannerImage) => ({
  action: SET_HOMEBANNER_IMAGE,
  payload: { image },
});
export const setHomeBannerTitle = (title: string) => ({
  action: SET_HOMEBANNER_TITLE,
  payload: { title },
});
export const setHomeBannerSubtitle = (subtitle: string) => ({
  action: SET_HOMEBANNER_SUBTITLE,
  payload: { subtitle },
});
export const setHomeBannerButtonText = (buttonText: string) => ({
  action: SET_HOMEBANNER_BUTTON_TEXT,
  payload: { buttonText },
});
export const resetHomeBannerInfo = () => ({
  action: RESET_HOMEBANNER_INFO,
});
