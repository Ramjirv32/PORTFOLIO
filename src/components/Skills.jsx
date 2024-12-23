

"use client";
import React from "react";
import { FaHtml5, FaJsSquare, FaNode, FaCode, FaCloud, FaJava } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";

function Skills() {
const skills = [
{ name: 'HTML', icon: <FaHtml5 className="text-purple-400 hover:text-white" size={16} /> },
{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-purple-400 hover:text-white" size={16} /> },
{ name: 'JavaScript', icon: <FaJsSquare className="text-purple-400 hover:text-white" size={16} /> },
{ name: 'Node.js', icon: <FaNode className="text-purple-400 hover:text-white" size={16} /> },
{ name: 'Express', icon: <FaCode className="text-purple-400 hover:text-white" size={16} /> },
{ name: 'PostgreSQL', icon: <SiPostgresql className="text-purple-400 hover:text-white" size={16} /> },
{ name: 'Java', icon: <FaJava className="text-purple-400 hover:text-white" size={16} /> },
{ name: ' Learning Cloud ', icon: <FaCloud className="text-purple-400 hover:text-white" size={16} /> },
];

return (
<section id="skills" className="w-full py-8 md:py-16 px-4 md:px-6 bg-black">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">My Skills</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
{skills.map((skill, index) => (
<div key={index} className="flex items-center space-x-2 animate-pulse text-bold">
<div className="transform scale-75 md:scale-100">
{skill.icon}
</div>
<span data-aos="flip-down" className="text-white text-base md:text-lg">{skill.name}</span>
</div>
))}
</div>
</section>
);
}

export default Skills;





