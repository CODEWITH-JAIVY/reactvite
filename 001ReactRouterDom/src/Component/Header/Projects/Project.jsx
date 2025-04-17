import React from 'react';

function Project() {
  return (
    <section className="min-h-screen px-4 py-10 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Portfolio Website</h3>
            <p className="text-gray-600 mb-4">A personal portfolio website built using React, Tailwind CSS, and deployed on Vercel.</p>
            <a
              href="https://github.com/CODEWITH-JAIVY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              View Code →
            </a>
          </div>

          {/* Add more cards as needed */}
        </div>
      </div>
    </section>
  );
}

export default Project;
