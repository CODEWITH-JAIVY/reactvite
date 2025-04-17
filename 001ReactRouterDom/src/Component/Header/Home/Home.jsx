import React from 'react';

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 w-full min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500
  ">

      {/* Profile Image with Shadow and Border */}
      <div className="rounded-full p-2 bg-white shadow-2xl">
        <img
          src="./src/assets/jaivyImage.jpg"
          alt="Developer"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* About Me Text */}
      <div className="text-white max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Jaivy Roy</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          I'm a passionate <strong>Full-Stack Developer</strong> with a love for crafting stunning and performant web apps.
          My stack includes <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>MERN</strong>. I also enjoy solving DSA and creating coding content on <strong>YouTube</strong>.
        </p>
      </div>

    </div>
  );
}

export default Home;
