
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const arr = [1, 2, 3, 4, 5, 6];

  const handleSearch = () => {
    const num = parseInt(inputValue);
    if (arr.includes(num)) {
      setResult(`✅ Found: ${num}`);
    } else {
      setResult(`❌ Not found: ${num}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg">
        <input
          type="number"
          className="px-4 py-2 rounded text-black text-lg"
          placeholder="Search here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-slateblue hover:bg-indigo-700 text-white px-6 py-2 rounded text-lg"
          onClick={handleSearch}
        >
          Search
        </button>
        <div className="text-white text-xl">{result}</div>
      </div>
    </div>
  );
}
