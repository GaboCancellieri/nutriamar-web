import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Alert, Footer } from "@ccomponents";
import GlobalStateProvider from "./context/GlobalStateProvider/GlobalStateProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Alert type={"urgent"} variant={"success"} />
      <App />
      <Footer />
    </GlobalStateProvider>
  </React.StrictMode>
);
