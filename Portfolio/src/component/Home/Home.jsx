import React from "react";

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-semibold text-gray-800">Welcome to My Portfolio</h2>
      <p className="mt-4 text-gray-600">I am a Full-Stack Developer skilled in MERN, C++, and DSA.</p>
      <div className="mt-6 space-x-4">
        <a href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Projects</a>
        <a href="/contact" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
