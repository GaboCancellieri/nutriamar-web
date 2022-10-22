import React, { createContext } from "react";
import Provider from "../Store";
import { screenReducer, screenInitialState } from "./reducer";
import { ScreenProviderProps } from "./types";

const ScreenStateContext = createContext(screenInitialState);
ScreenStateContext.displayName = "ScreenStateContext";

const ScreenDispatchContext = createContext(undefined);
ScreenDispatchContext.displayName = "ScreenDispatchContext";

const ScreenProvider = ({ children }: ScreenProviderProps) => (
  <Provider
    stateContext={ScreenStateContext}
    dispatchContext={ScreenDispatchContext}
    reducer={screenReducer}
    initialState={screenInitialState}
  >
    {children}
  </Provider>
);

export { ScreenStateContext, ScreenDispatchContext, ScreenProvider };
