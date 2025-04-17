import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './Component/Header/Home/Home'
import About from './Component/Header/About/About'
import Skills from './Component/Header/Skills/Skills'
import Notes from './Component/Header/Notes/Notes'
import Project from './Component/Header/Projects/Project'
import Contact from './Component/Header/Contact/Contact'
// import Githubapi from './Component/Header/Githubapi/GIhutbapi'
// import Dynamicuser from './Component/Dynamicuser/Myparam'   
import Roposetory from './Component/Header/Roposetory/Roposetory'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='notes' element={<Notes />} />
          <Route path='projects' element={<Project />} />
          <Route path='contact' element={<Contact />} />
          <Route path='roposetory' element={<Roposetory />} />

          {/* <Route path='github' element={<Githubapi />} /> */}
          {/* <Route path='user/:name' element={<Dynamicuser />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
