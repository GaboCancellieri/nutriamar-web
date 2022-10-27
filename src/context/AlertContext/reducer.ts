import { IReducerOptions } from "../Store/types";
import { IAlertState } from "./types";
import * as Actions from "./actions";
import { ALERT_VARIANTS } from "./constants";

export const alertInitialState = {
  currentAlert: null,
};

export const alertReducer = (state: IAlertState, options: IReducerOptions) => {
  const { action, payload } = options;
  switch (action.toUpperCase()) {
    case Actions.SHOW_ALERT:
      const {
        type,
        variant,
        message,
      }: {
        type: string;
        variant: "success" | "error" | "warning" | "info";
        message: string;
      } = payload;
      return {
        ...state,
        currentAlert: {
          message,
          type,
          variant: ALERT_VARIANTS[variant],
        },
      };
    case Actions.CLOSE_ALERT:
      return {
        ...state,
        currentAlert: null,
      };
    default:
      return state;
  }
};
