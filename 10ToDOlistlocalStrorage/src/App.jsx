import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className=' bg-slate-600 max-w-full h-screen'>TO do list </h1>
    </>
  )
}

export default App
