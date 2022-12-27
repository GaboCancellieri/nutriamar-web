import TestimoniesService from "@webApi/testimoniesApi.service";
import { useContext } from "react";
import { showAlert } from "src/context/AlertContext/actions";
import { AlertDispatchContext } from "src/context/AlertContext/AlertContext";
import { HomeBannerService, NutritionalPlanService } from "./Web";

export const useHomeBannerService = () => {
  return new HomeBannerService(useContext(AlertDispatchContext));
};

export const useNutritionalPlanService = () => {
  return new NutritionalPlanService(useContext(AlertDispatchContext));
};

export const useTestimoniesService = () => {
  return new TestimoniesService(useContext(AlertDispatchContext));
};

export const handleAlert = async (func: Function, dispatch: any) => {
  try {
    const { status, data } = await func();
    if (status === 200) {
      dispatch(
        showAlert({
          type: "urgent",
          variant: "success",
          message: "Operación exitosa!",
        })
      );
    }
    return data;
  } catch (error: any) {
    dispatch(
      showAlert({
        type: "urgent",
        variant: "error",
        message: error.message,
      })
    );
  }
};
