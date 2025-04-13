import React, { useState } from 'react';

const colors = ["white", "black", "red", "orange", "green"];

const ColorButton = ({ color, onClick }) => (
  <button
    className={`w-24 h-10 rounded-xl m-1 text-sm shadow-md ${
      color === "white" ? "bg-white border text-black" :
      color === "black" ? "bg-black text-white" :
      `bg-${color}-500 text-white`
    }`}
    onClick={() => onClick(color)}
  >
    {color.charAt(0).toUpperCase() + color.slice(1)}
  </button>
);

function App() {
  const [bgColor, setBgColor] = useState("white");
  const [customColor, setCustomColor] = useState("#ffffff");
  const [darkMode, setDarkMode] = useState(false);

  const handleColorChange = (color) => setBgColor(color);
  const handleCustomColorChange = (e) => {
    const color = e.target.value;
    setCustomColor(color);
    setBgColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        width: "100vw",
        transition: "background-color 0.3s ease",
      }}
      className={`p-4 ${darkMode ? "text-white" : "text-black"}`}
    >
      <h1 className="text-2xl font-semibold mb-4">
        🎨 Current Color: <span className="italic">{bgColor}</span>
      </h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {colors.map((color) => (
          <ColorButton key={color} color={color} onClick={handleColorChange} />
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="color"
          value={customColor}
          onChange={handleCustomColorChange}
          className="w-10 h-10 border rounded"
        />
        <span>Pick a Custom Color</span>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-2 px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
