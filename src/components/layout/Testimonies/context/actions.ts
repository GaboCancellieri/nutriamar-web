import { ITestimony } from "./types";

export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const TOGGLE_EDITING_IMAGE = "TOGGLE_EDITING_IMAGE";
export const TOGGLE_EDITING_TESTIMONY = "TOGGLE_EDITING_TESTIMONY";
export const SET_TESTIMONIES_INFO_AUX = "SET_TESTIMONIES_INFO_AUX";
export const SET_TESTIMONIES_INFO = "SET_TESTIMONIES_INFO";
export const SET_TESTIMONIES_TITLE = "SET_TESTIMONIES_TITLE";
export const SET_TESTIMONIES_SUBTITLE = "SET_TESTIMONIES_SUBTITLE";
export const SET_TESTIMONIES_BUTTON_TEXT = "SET_TESTIMONIES_BUTTON_TEXT";
export const RESET_TESTIMONIES_INFO = "RESET_TESTIMONIES_INFO";

export const toggleEdit = () => ({ action: TOGGLE_EDIT });
export const toggleEditingImage = () => ({ action: TOGGLE_EDITING_IMAGE });
export const toggleEditingTestimony = (selectedTestimony?: ITestimony) => ({
  action: TOGGLE_EDITING_TESTIMONY,
  payload: { selectedTestimony },
});
export const setTestimoniesInfoAux = (testimoniesInfoAux: ITestimony[]) => ({
  action: SET_TESTIMONIES_INFO_AUX,
  payload: { testimoniesInfoAux },
});
export const setTestimoniesInfo = (testimoniesInfo: ITestimony[]) => ({
  action: SET_TESTIMONIES_INFO,
  payload: { testimoniesInfo },
});
export const setTestimoniesTitle = (title: string) => ({
  action: SET_TESTIMONIES_TITLE,
  payload: { title },
});
export const setTestimoniesSubtitle = (subtitle: string) => ({
  action: SET_TESTIMONIES_SUBTITLE,
  payload: { subtitle },
});
export const setTestimoniesButtonText = (buttonText: string) => ({
  action: SET_TESTIMONIES_BUTTON_TEXT,
  payload: { buttonText },
});
export const resetTestimoniesInfo = () => ({
  action: RESET_TESTIMONIES_INFO,
});
