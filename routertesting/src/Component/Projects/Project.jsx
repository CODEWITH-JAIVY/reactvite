import React from "react";

const Projects = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <div className="mt-4 space-y-4">
        <div className="p-5 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-600">Description of the project.</p>
        </div>
        <div className="p-5 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-600">Description of the project.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
