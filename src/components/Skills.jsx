"use client"
import React from "react";
import {FaStar} from "react-icons/fa";

function Skills(){
        return (
          
            
<section id="skills" className="container mx-auto py-16 px-6">


<h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {['Web Development', 'UI Design', 'Full Stack', 'C', 'Python', 'Cloud Security', 'Figma', 'Responsive Design'].map((skill, index) => (
    <div key={index} className="flex items-center space-x-2 animate-pulse text-bold">
      <FaStar className="  text-purple-400 hover:text-white" size={20} />
      <span data-aos="flip-down" className="text-white">{skill}</span>
      </div>
  ))}
</div>
</section>
        )
        }
export default Skills;
