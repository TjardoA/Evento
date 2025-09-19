import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import PopularEvents from "./components/PopularEvents.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <PopularEvents />
    </BrowserRouter>
  );
}

export default App;
