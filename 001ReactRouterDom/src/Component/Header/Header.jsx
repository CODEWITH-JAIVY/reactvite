import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../../assets/jaivyImage.jpg';
import logo from '../../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Define the navigation paths and their corresponding labels
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/soposetory', label : 'Roposetory'} ,
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <NavLink to="/" className="text-2xl font-bold hover:text-yellow-300 transition">
            Jaivy.dev
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg">
          {navLinks.map(({ path, label }, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                isActive ? 'font-semibold text-yellow-300' : 'hover:text-yellow-200 transition'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4 text-sm md:text-base">
          <NavLink
            to="/login"
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded hover:bg-yellow-200 transition"
          >
            Log In
          </NavLink>

          <NavLink
            to="/notes"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Notes 📘
          </NavLink>

          {/* Profile Dropdown */}
          <div className="relative group cursor-pointer">
            <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white" />
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg w-40">
              <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</NavLink>
              <NavLink to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</NavLink>
              <NavLink to="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;