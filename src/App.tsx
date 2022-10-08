import React, { useRef } from "react";
import "./App.scss";
import { HomeScreen } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
