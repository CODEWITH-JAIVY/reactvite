import { useCallback, useState  , useEffect } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);

  const PasswordGeneraotr = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (characterAllow) str += "~!@#$%^&*()_+}{";
  
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, characterAllow]);
  
   
  useEffect ( () => {
    PasswordGeneraotr() 
  } , [length , numberAllow , characterAllow ] )

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };
  


  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          🔐 Password Generator
        </h1>

        <div className="flex mb-4 shadow rounded overflow-hidden">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="Your Password..."
            className="flex-grow px-4 py-2 text-white-100 outline-none"
          />
          <button
           onClick={copyToClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4">
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Password Length: <span className="text-indigo-600 font-semibold">{length}</span>
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>

        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="numbers"
            checked={numberAllow}
            onChange={() => setNumberAllow((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="numbers" className="text-gray-700">Include Numbers</label>
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="characters"
            checked={characterAllow}
            onChange={() => setCharacterAllow((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="characters" className="text-gray-700">Include Special Characters</label>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition">
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
