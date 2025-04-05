import { useState } from 'react'
import Calculot from './Component/Calculotor/Calculot'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calculot/>
    </>
  )
}

export default App
