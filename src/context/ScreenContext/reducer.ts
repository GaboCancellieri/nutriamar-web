import { IReducerOptions } from "../Store/types";
import * as Actions from "./actions";
import { IScreenState } from "./types";

export const screenInitialState = {
  isEditMode: false,
};

export const screenReducer = (
  state: IScreenState,
  options: IReducerOptions
) => {
  const { action, payload } = options;

  switch (action.toUpperCase()) {
    case Actions.TOGGLE_EDIT_MODE:
      return {
        ...state,
        isEditMode: !state.isEditMode,
      };
    default:
      return state;
  }
};
