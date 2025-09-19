import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
