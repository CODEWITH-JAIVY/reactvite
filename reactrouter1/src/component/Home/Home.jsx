import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 px-4">
      {/* Profile Image */}
      <img 
          src="/src/assets/jaivy.jpg" 
          alt="Jaivy Roy" 
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
            />


      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mt-6">Welcome to My Portfolio</h1>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-700 text-center max-w-lg">
        I am a passionate developer skilled in MERN stack, front-end development, and problem-solving. 
        Explore my projects and journey in the coding world.
      </p>

      {/* Call to Action using NavLink */}
      <div className="mt-6">
        <NavLink 
          to="/about"
          className="px-6 py-2 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
        >
          Learn More About Me
        </NavLink>
      </div>
    </div>
  );
}
