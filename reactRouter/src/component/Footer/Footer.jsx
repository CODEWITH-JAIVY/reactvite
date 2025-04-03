import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 mt-10 text-center text-white">
      <p>&copy; {new Date().getFullYear()} YouLogo. All rights reserved.</p>
      <div className="space-x-4 mt-2">
        <NavLink to="/instagram" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>Instagram</NavLink>
        <NavLink to="/github" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>GitHub</NavLink>
        <NavLink to="/linkedin" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>LinkedIn</NavLink>
        <NavLink to="/youtube" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>YouTube</NavLink>
      </div>
      <div className="space-x-4 mt-2">
        <NavLink to="/privacy-policy" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>Privacy Policy</NavLink>
        <NavLink to="/terms-of-service" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>Terms of Service</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
