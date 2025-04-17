import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white py-6 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left side: Brand */}
        <div className="text-xl font-bold">
          © {new Date().getFullYear()} Jaivy.dev
        </div>

        {/* Center: Navigation */}
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-300 transition">About</a></li>
          <li><a href="/skills" className="hover:text-yellow-300 transition">Skills</a></li>
          <li><a href="/projects" className="hover:text-yellow-300 transition">Projects</a></li>
          <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
        </ul>

        {/* Right side: Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a href="https://github.com/CODEWITH-JAIVY" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaGithub />
          </a>
          <a href=" https://www.linkedin.com/in/sanjeet-kumar-8a21171a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/codewithjaivy?igsh=MWJtY3hleGo5NWxkNg== " target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
