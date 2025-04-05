import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-h-screen bg-blue-500">
      <NavLink className="font-bold hover:bg-red-500 p-4 m-2" to="/about">About</NavLink>
      <NavLink className="font-bold hover:bg-red-500 p-4 m-2" to="/projects">Projects</NavLink>
      <NavLink className="font-bold hover:bg-red-500 p-4 m-2" to="/contact">Contact</NavLink>
      <NavLink className="font-bold hover:bg-red-500 p-4 m-2" to="/skills">Skills</NavLink>
      <NavLink className="font-bold hover:bg-red-500 p-4 m-2" to="/experience">Experience</NavLink>
      <NavLink className="font-bold hover:bg-red-500 p-4 m-2" to="/achievements">Achievements</NavLink>
    </div>
  );
}

export default Header;
// Compare this snippet from UpdatePortfolio/src/Component/Header/Header.jsx: