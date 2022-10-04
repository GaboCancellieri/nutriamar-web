import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, NavBar, Typography } from "./components";

function App() {
  const aprenderReact = () => {
    window.open("https://reactjs.org", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography color="#FFFFFF" size={40}>
          Edit src/App.tsx and save to reload.
        </Typography>
        <Button text="Learn React" onClick={aprenderReact} />
      </header>
    </div>
  );
}

export default App;
