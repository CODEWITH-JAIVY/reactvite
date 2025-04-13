import { useState } from 'react';
import './App.css';

function App() {
   let [counter ,setcounter ] = useState( 0 )  
     
    const addvalue =()=>{
      if ( counter  < 20 ) {
         setcounter(counter+1) 
      }
    } 

    const decreaseVAlue = ()=>{
      if(counter > 0 ) {
      setcounter(counter-1) 
    }
  }
  return (
    <>
      <h1>Counter Preoject </h1>
      <p>counter value {counter}</p>
      <button
       onClick={addvalue}
      > coutner increase value {counter}
       </button>
       <br />
       <button 
        onClick={decreaseVAlue}
       >
        counter to decrese {counter}
       </button>

    </>
  );
}

export default App;
