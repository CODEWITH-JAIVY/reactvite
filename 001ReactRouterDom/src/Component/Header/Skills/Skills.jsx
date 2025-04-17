import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiCplusplus, SiPython } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, level: 80 },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 75 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 65 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 80 },
  { name: 'C++', icon: <SiCplusplus className="text-indigo-600" />, level: 85 },
  { name: 'Python', icon: <SiPython className="text-yellow-600" />, level: 60 },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" />, level: 70 },
];

function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">🛠️ My Skills</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-3xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded">
                <div
                  className="h-3 rounded bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-right text-gray-600 mt-1">{skill.level}% proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
