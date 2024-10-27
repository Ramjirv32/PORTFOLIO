"use client";
import React from "react";
import { FaStar, FaHtml5, FaJsSquare, FaNode, FaCode, FaCloud } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiC } from "react-icons/si";

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-purple-400 hover:text-white" size={20} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-purple-400 hover:text-white" size={20} /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-purple-400 hover:text-white" size={20} /> },
    { name: 'Node.js', icon: <FaNode className="text-purple-400 hover:text-white" size={20} /> },
    { name: 'Express', icon: <FaCode className="text-purple-400 hover:text-white" size={20} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-purple-400 hover:text-white" size={20} /> },
    { name: 'C Programming', icon: <SiC className="text-purple-400 hover:text-white" size={20} /> },
    { name: ' Learning Cloud ', icon: <FaCloud className="text-purple-400 hover:text-white" size={20} /> },
  ];

  return (
    <section id="skills" className="w-full py-16 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2 animate-pulse text-bold">
            {skill.icon}
            <span data-aos="flip-down" className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
