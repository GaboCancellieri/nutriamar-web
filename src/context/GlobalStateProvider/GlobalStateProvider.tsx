import React from "react";
import ScreenProvider from "../ScreenContext";
import UserProvider from "../UserContext";
import { WindowSizeProvider } from "../WindowSizeProvider/WindowSizeProvider";
import { GlobalStateProviderProps } from "./types";

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  return (
    <WindowSizeProvider>
      <ScreenProvider>
        <UserProvider>{children}</UserProvider>
      </ScreenProvider>
    </WindowSizeProvider>
  );
};

export default GlobalStateProvider;
