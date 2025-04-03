import React from "react";
import { Link } from "react-router-dom";
import jaivyroy from "../../assets/jaivyroy.jpg"; // Ensure your image is in the assets folder

const Hero = () => {
  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-8 bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Left Section - Text */}
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          BCA Student <br /> & Full-Stack Developer
        </h1>
        <p className="text-gray-300 text-lg">
          Passionate about web development, problem-solving, and creating scalable applications.
          Currently exploring the MERN stack to build innovative digital solutions.
        </p>
        <div className="mt-6 flex space-x-4 justify-center lg:justify-start">
          <Link
            to="/projects"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            View Projects 🚀
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 border border-gray-400 text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
          >
            Contact Me 📩
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
        <img
          src={jaivyroy}
          alt="Jaivy Roy"
          className="h-72 w-72 object-cover rounded-full border-4 border-purple-500 shadow-lg transform hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
