import React from "react";

const Projects = () => {
  return (
    <section className="py-20 text-center px-6">
      <h2 className="text-3xl font-bold text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold">Portfolio Website</h3>
          <p className="text-gray-400 mt-2">A sleek and modern portfolio website built with React and Tailwind CSS.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold">E-commerce Platform</h3>
          <p className="text-gray-400 mt-2">An online shopping site with authentication, payment gateway, and a smooth UI.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold">AI Chatbot</h3>
          <p className="text-gray-400 mt-2">An AI-powered chatbot built using Node.js and OpenAI API.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
