import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
