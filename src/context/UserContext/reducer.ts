import { getUserAccessToken } from "src/utils/user";
import { IReducerOptions } from "../Store/types";
import * as Actions from "./actions";
import { IUserState } from "./types";

export const userInitialState = {
  currentUser: getUserAccessToken(localStorage.getItem("accessToken")),
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  geoCountryCode: "US",
};

export const userReducer = (state: IUserState, options: IReducerOptions) => {
  const { action, payload } = options;

  switch (action.toUpperCase()) {
    case Actions.LOG_IN_USER:
      return {
        ...state,
        currentUser: payload.user,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };
    case Actions.LOG_OUT_USER:
      return {
        ...state,
        currentUser: null,
        accessToken: null,
        refreshToken: null,
      };
    case Actions.SET_USER_COUNTRY:
      return {
        ...state,
        geoCountryCode: payload.countryCode,
      };
    default:
      return state;
  }
};
