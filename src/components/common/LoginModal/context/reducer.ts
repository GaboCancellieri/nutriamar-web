import { IReducerOptions, LoginState } from "./types";
import * as Actions from "./actions";

export const loginInitialState = {
  email: null,
  password: null,
  isSubmitted: false,
  isError: false,
};

export const loginReducer = (state: LoginState, options: IReducerOptions) => {
  const { action, payload } = options;

  switch (action.toUpperCase()) {
    case Actions.SET_LOGIN_EMAIL:
      return { ...state, email: payload.email };
    case Actions.SET_LOGIN_PASSWORD:
      return { ...state, password: payload.password };
    case Actions.SET_LOGIN_IS_SUBMITTED:
      return { ...state, isSubmitted: payload.isSubmitted };
    case Actions.SET_LOGIN_IS_ERROR:
      return { ...state, isError: payload.isError };
    case Actions.RESET_LOGIN_INPUTS:
      return { ...loginInitialState };
    default:
      return state;
  }
};
