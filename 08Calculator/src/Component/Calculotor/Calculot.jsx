import React, { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';

function Calculot() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (value) => {
    if (value === 'c') {
      setInput('');
    } else if (value === '=') {
      try {
        const result = evaluate(input);
        setHistory((prev) => [...prev, `${input} = ${result}`]);
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const allowedKeys = '0123456789+-*/.=';
      if (allowedKeys.includes(e.key)) {
        handleClick(e.key);
      } else if (e.key === 'Enter') {
        handleClick('=');
      } else if (e.key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key.toLowerCase() === 'c') {
        handleClick('c');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const themeClasses = darkMode
    ? 'bg-gradient-to-tr from-zinc-800 to-gray-900 text-white'
    : 'bg-gradient-to-tr from-white to-gray-100 text-black';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 ${themeClasses}`}>

      {/* Theme Toggle */}
      <button
        className='mb-6 px-5 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition'
        onClick={toggleTheme}
      >
        {darkMode ? 'Switch to Light Mode 🌞' : 'Switch to Dark Mode 🌙'}
      </button>

      {/* Calculator & History Container */}
      <div className='flex flex-row gap-6'>
        {/* Calculator */}
        <div className='w-full max-w-sm bg-black bg-opacity-20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl'>
          <h1 className='text-center text-3xl font-bold mb-6'>🧮 Calculator</h1>
          <div className='bg-gray-200 text-black rounded-xl px-4 py-3 text-right text-2xl mb-4 shadow-inner min-h-[3rem]'>
            {input || '0'}
          </div>
          <div className='grid grid-cols-4 gap-3'>
            {[ '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+', '=', 'c' ].map((but) => (
              <button
                key={but}
                onClick={() => handleClick(but)}
                className={`p-4 rounded-xl text-xl font-semibold transition shadow-lg ${
                  but === '='
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : but === 'c'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-zinc-700 text-white hover:bg-zinc-800'
                }`}
              >
                {but.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* History */}
        <div className='w-64 bg-black bg-opacity-20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl'>
          <h2 className='text-xl font-semibold mb-4'>📝 History</h2>
          <ul className='bg-white/20 backdrop-blur p-3 rounded-xl shadow max-h-[500px] overflow-y-auto space-y-2 text-sm'>
            {history.length === 0 ? (
              <li className='text-gray-400 italic'>No history yet</li>
            ) : (
              history.map((item, index) => (
                <li key={index} className='text-white/80'>
                  {item}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculot;
