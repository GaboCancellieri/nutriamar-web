import { updateHomeBannerInfo } from "@webApi/homeBannerApi";
import {
  resetHomeBannerInfo,
  setHomeBannerButtonText,
  setHomeBannerImage,
  setHomeBannerInfoAux,
  setHomeBannerSubtitle,
  setHomeBannerTitle,
  toggleEdit,
} from "./context/actions";
import { IHomeBannerImage, IHomeBannerState } from "./context/types";

export const handleChangeImage = (image: IHomeBannerImage, dispatch: any) => {
  dispatch(setHomeBannerImage(image));
};

export const handleEditSection = (dispatch: any) => {
  dispatch(toggleEdit());
};

export const handleChangeTitle = (event: any, dispatch: any) => {
  dispatch(setHomeBannerTitle(event?.target?.value));
};

export const handleChangeSubtitle = (event: any, dispatch: any) => {
  dispatch(setHomeBannerSubtitle(event?.target?.value));
};

export const handleChangeButtonText = (event: any, dispatch: any) => {
  dispatch(setHomeBannerButtonText(event?.target?.value));
};

export const handleSave = async (state: IHomeBannerState, dispatch: any) => {
  try {
    if (state && state.homeBannerInfo) {
      await updateHomeBannerInfo(state.homeBannerInfo.id, state.homeBannerInfo);
      dispatch(toggleEdit());
      dispatch(setHomeBannerInfoAux(state.homeBannerInfo));
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleCancelEdit = (dispatch: any) => {
  dispatch(resetHomeBannerInfo());
  dispatch(toggleEdit());
};
