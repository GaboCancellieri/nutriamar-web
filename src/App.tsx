import React from "react";
import "./App.scss";
import { NavBar } from "@ccomponents";
import { HomeScreen } from "./screens";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HomeScreen></HomeScreen>
      </header>
    </div>
  );
}

export default App;
