import { useState } from 'react'
import UseOfuseState from './Component/useOfuseState'
// import UseEffectsE from './Component/UseEffectsEX'


import './App.css'

function App() {
  const [color , setColor ] = useState("red")
  
  return (
    <>
        {/* <UseEffectsE/> */}
       <UseOfuseState/>

    </>
  )
}

export default App
