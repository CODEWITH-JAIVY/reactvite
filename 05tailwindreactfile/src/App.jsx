import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Componet from "./Componet.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-yellow-200 text-center p-4 rounded-lg">
        1st page of React with Tailwind
      </h1>
      <Componet name="jaivy Roy "  founder=" roy pvt ltd"/>
      <Componet />
    </>
  );
}

export default App;
