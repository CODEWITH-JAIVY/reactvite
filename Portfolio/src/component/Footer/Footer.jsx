import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 mt-10 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Jaivy Roy. All rights reserved.</p>
      <div className="space-x-4 mt-2">
        <NavLink to="/github" className="hover:text-yellow-400">GitHub</NavLink>
        <NavLink to="/linkedin" className="hover:text-yellow-400">LinkedIn</NavLink>
        <NavLink to="/contact" className="hover:text-yellow-400">Contact</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
