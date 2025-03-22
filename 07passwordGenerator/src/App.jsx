import { useCallback, useState } from 'react';

function App() {
  const [password, setPassword] = useState('password');
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+{}[]?>/`/-+-";
    
    if (numberAllowed) str += numbers;
    if (charAllowed) str += special;
    
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      generatedPassword += str[randomIndex];
    }

    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-bold text-center text-xl mb-4">Password Generator</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Generated password"
          value={password}
          readOnly
          className="border p-2 w-full"
        />
        <button
          onClick={() => navigator.clipboard.writeText(password)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Copy
        </button>
      </div>

      <div className="mt-4">
        <label className="block">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />
          <span> Length: {length} </span>
        </label>
      </div>

      <div className="mt-2">
        <label className="mr-4">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          Include Special Characters
        </label>
      </div>

      <button
        onClick={passwordGenerator}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
