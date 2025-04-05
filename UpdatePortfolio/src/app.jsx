import { useState } from 'react';
import Header from './Component/Header/Header';
import './app.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}
