import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) {
      setCount(count+1);  
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count-1); 
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={addValue}>Add Value {count}</button>
      <br />
      <button onClick={decrease}>Decrease {count}</button>
      <br />
      <footer>Footer Count: {count}</footer>
    </>
  );
}

export default App;
