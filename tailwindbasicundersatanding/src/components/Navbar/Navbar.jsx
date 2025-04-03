import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-800 py-3 px-6 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-blue-400">Jaivy Roy</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-300">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-gray-300 text-2xl cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="absolute top-14 left-0 w-full bg-gray-800 flex flex-col items-center space-y-6 py-6">
          <li><Link to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setNavOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setNavOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
