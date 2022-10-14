import React, { useEffect } from "react";
import "./App.scss";
import { HomeScreen } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import connect from "./context/Store/connect";
import { WindowSizeDispatchContext } from "./context/WindowSizeProvider/WindowSizeProvider";
import { setWindowSizeState } from "./context/WindowSizeProvider/actions";

function App({ windowSizeDispatch }: any) {
  useEffect(() => {
    const handleResize = () =>
      windowSizeDispatch(setWindowSizeState(window.outerWidth));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

const mapDispatchToProps = {
  windowSizeDispatch: WindowSizeDispatchContext,
};

export default connect({ mapDispatchToProps })(App);
