import { updateNutritionalPlanInfo } from "@webApi/nutritionalPlanApi";
import { IFrameBackgroundType } from "src/components/common/IFrame/types";
import {
  resetNutritionalPlanInfo,
  selectEditSection,
  setNutritionalPlanInfoAux,
  setNutritionalPlanSection1,
  setNutritionalPlanSection2,
  toggleIsEditingIFrame,
  toggleIsEditingImage,
  toggleNutritionalPlanEdit,
} from "./context/actions";
import { INutritionalPlanState } from "./context/types";

export const cancelNutritionalPlanEdit = (dispatch: any) => {
  dispatch(toggleNutritionalPlanEdit());
  dispatch(resetNutritionalPlanInfo());
};

export const toggleIFrameEdit = (index: number, dispatch: any) => {
  dispatch(selectEditSection(index));
  dispatch(toggleIsEditingIFrame());
};

export const toggleImageEdit = (index: number, dispatch: any) => {
  dispatch(selectEditSection(index));
  dispatch(toggleIsEditingImage());
};

export const onSaveIFrame = async (
  url: string,
  background: IFrameBackgroundType,
  state: INutritionalPlanState,
  dispatch: any
) => {
  if (state.nutritionalPlanInfo) {
    if (state.selectedSection === 0) {
      dispatch(
        setNutritionalPlanSection1({
          ...state.nutritionalPlanInfo.section1,
          iframe: {
            url,
            background,
          },
        })
      );
    } else {
      dispatch(
        setNutritionalPlanSection2({
          ...state.nutritionalPlanInfo.section2,
          iframe: {
            url,
            background,
          },
        })
      );
    }
  }
  dispatch(toggleIsEditingIFrame());
};

export const handleNutritionalPlanSave = async (
  state: INutritionalPlanState,
  dispatch: any
) => {
  try {
    if (state && state.nutritionalPlanInfo) {
      await updateNutritionalPlanInfo(
        state.nutritionalPlanInfo.id,
        state.nutritionalPlanInfo
      );
      dispatch(toggleNutritionalPlanEdit());
      dispatch(setNutritionalPlanInfoAux(state.nutritionalPlanInfo));
    }
  } catch (error) {
    console.error(error);
  }
};
