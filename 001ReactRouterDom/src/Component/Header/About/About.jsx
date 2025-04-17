import React from 'react';
import profileImg from '../../../assets/jaivyImage.jpg';

//  src="./src/assets/jaivyImage.jpg"

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-800 to-black text-white py-10 px-4">
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img 
            src={profileImg} 
            alt="Jaivy Roy" 
            className="w-60 h-60 object-cover rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi! I’m <span className="text-yellow-300 font-semibold">Jaivy Roy</span>, a passionate full-stack developer with a strong foundation in
            frontend and backend technologies like React.js, Node.js, MongoDB, and Express. I love solving real-world problems and building impactful
            projects that make life easier and cooler. 
          </p>
          <p className="mt-4 text-base text-gray-300">
            Apart from coding, I enjoy writing poetry, exploring new tech trends, and sharing knowledge via my YouTube channel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
