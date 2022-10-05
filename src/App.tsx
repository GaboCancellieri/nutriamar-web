import "./App.scss";
import { NavBar } from "./components";
import HomeBanner from "./components/HomeBanner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HomeBanner />
      </header>
    </div>
  );
}

export default App;
