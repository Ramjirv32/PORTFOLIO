"use client"
import React from "react";
import food from "./images/f1.png";
import { FaExternalLinkAlt,FaGithub} from "react-icons/fa";
//import motion from "./images/motion.png";
import grs from "./images/grs.jpg";
import api from "./images/api.png";
//import door from "./images/door.jpg";

const projects = [
    {
      title: "Project 1",
      description: "My first Demo project done using Bootstrap",
      image: food,
      liveLink: "https://ramjirv32.github.io/First-WebPage-Bootstrap/first",
      githubLink: "https://github.com/Ramjirv32/First-WebPage-Bootstrap"
    },
    {
      title: "Project 2",
      description: "Project on motion detection security camera",
      image: "",
      liveLink: "",
      githubLink: "#"
    },
    {
      title: "Project 3",
      description: "Console Application on Vehicle Rental system",
      image: grs,
      liveLink: console,
      githubLink: "https://github.com/Ramjirv32/Vehicle-Rental-System"
    },
    {
      title: "Project 4",
      description: "Weather API using Node and Open Weather",
      image:api,
      liveLink: "https://weather-api-893w.onrender.com/",
      githubLink: "https://github.com/Ramjirv32/WEATHER-API"
    },
    {
      title: "Project 5",
      description: "Future PlaceHolder",
      image: 
      "",
      liveLink: "https://weather-api-893w.onrender.com/",
      githubLink: "#"
    }
  ];
  
function Projects(){
    
    return (
        <section id="projects" className="py-16 relative w-full">
        <div className="absolute inset-0 bg-purple-900 opacity-40 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 border border-purple-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        <FaGithub className="mr-2" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}
export default Projects;