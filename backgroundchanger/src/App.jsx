import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-yellow-600 text-white p-4 rounded-lg text-center">
        Color Changer
      </h1>
      <div className='flex justify-center items-center h-screen'>
        <button className='bg-blue-600'> blue </button>
        <button className='bg-yellow-600'> yellow </button>
        <button className='bg-indigo-600'> indigo </button>
        <button className='bg-red-600'> red </button>
        <button className='bg-purple-600'> purple </button>
        <button className='bg-green-600'> green </button>
        <button className='bg-white'> white </button>
        <button className='bg-black'> black  </button>
      </div>
    </>
  );
}

export default App;
