import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Jaivy Roy</h1>
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
