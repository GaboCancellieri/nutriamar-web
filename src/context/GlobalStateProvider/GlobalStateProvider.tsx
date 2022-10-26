import React from "react";
import { AlertProvider } from "../AlertContext/AlertContext";
import ScreenProvider from "../ScreenContext";
import UserProvider from "../UserContext";
import { WindowSizeProvider } from "../WindowSizeProvider/WindowSizeProvider";
import { GlobalStateProviderProps } from "./types";

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  return (
    <WindowSizeProvider>
      <ScreenProvider>
        <UserProvider>
          <AlertProvider>{children}</AlertProvider>
        </UserProvider>
      </ScreenProvider>
    </WindowSizeProvider>
  );
};

export default GlobalStateProvider;
