import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
