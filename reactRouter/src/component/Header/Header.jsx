import React from "react";


const Header = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">YouLogo</h1>
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>Contact</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-gray-300"}>Login</NavLink>
          <NavLink to="/get-started" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
