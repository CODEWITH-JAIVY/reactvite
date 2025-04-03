import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/projects" className="hover:text-gray-400">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
