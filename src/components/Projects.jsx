"use client"
import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import aadhya from "./images/aadhya.png";
import grs from "./images/grs.jpg";
import api from "./images/api.png";
import Hug from "./images/Hug.png";
import ai from "./images/ai.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
{
title: "Vehicle Rental System",
date: "October 2023",
description: [
"Developed a comprehensive vehicle rental management system in C",
"Implemented user authentication and booking functionality using file handling",
"Created efficient data structures and memory management",
"Built robust error handling and input validation with C standard library"
],
image: grs,
liveLink: "#",
githubLink: "https://github.com/Ramjirv32/Vehicle-Rental-System",
technologies: ["C", "Data Structures", "File I/O", "Memory Management"]
},
{
title: "Weather API Integration",
date: "July 2023",
description: [
"Built a weather application using Node.js and Open Weather API",
"Implemented real-time weather data fetching and display",
"Created responsive UI for multiple device compatibility",
"Integrated error handling and loading states"
],
image: api,
liveLink: "https://weather-api-in-react-js.vercel.app/",
githubLink: "https://github.com/Ramjirv32/Weather-API-in-REACT-JS",
technologies: ["React", "Node.js", "API", "Tailwind CSS"]
},
{
title: "Smart Parking System",
date: "April 2023 - July 2023",
description: [
"Led development of a full-stack parking system website",
"Implemented real-time parking space tracking with IoT",
"Designed booking and reservation management system",
"Coordinated with team for seamless integration"
],
image: aadhya,
liveLink: "https://parking-orcin-tau.vercel.app/",
githubLink: "https://github.com/Ramjirv32/Smart-Parking-System",
technologies: ["React", "Node.js", "IoT", "PostgreSQL"]
},
{
title: "AI Image Generator",
date: "September 2023",
description: [
"Developed AI-powered text-to-image generation system",
"Integrated Hugging Face API for image processing",
"Optimized response times and error handling",
"Implemented secure API authentication"
],
image: Hug,
liveLink: "https://ai-image-generator-hugging-face.vercel.app/",
githubLink: "https://github.com/Ramjirv32/AI-image-Generator-HUGGING-FACE",
technologies: ["Node.js", "Hugging Face API", "React", "Express"]
},
{
title: "AI-Integrated Application",
date: "October 2023 - Present",
description: [
"Building advanced AI features and integrations",
"Implementing modern UI/UX design principles",
"Developing scalable backend architecture",
"Optimizing performance and user experience"
],
image: ai,
liveLink: "https://ai-intergrated-application-qwuv.vercel.app/",
githubLink: "https://github.com/Ramjirv32/AI-Intergrated-Application",
technologies: ["React", "AI APIs", "Node.js", "PostgreSQL"]
}
];

function Projects() {
useEffect(() => {
AOS.init({
duration: 1000,
easing: 'ease-out-back',
once: false,
mirror: true,
anchorPlacement: 'top-center',
offset: 30
});

const style = document.createElement('style');
style.textContent = `
.flip-animation-left {
transform-origin: right center;
transform: perspective(1000px) rotateY(-90deg) translateX(-50%);
opacity: 0;
transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.flip-animation-right {
transform-origin: left center;
transform: perspective(1000px) rotateY(90deg) translateX(50%);
opacity: 0;
transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.aos-animate .flip-animation-left {
transform: perspective(1000px) rotateY(0) translateX(0);
opacity: 1;
}
.aos-animate .flip-animation-right {
transform: perspective(1000px) rotateY(0) translateX(0);
opacity: 1;
}
.project-container {
perspective: 1000px;
}
.project-card {
transform-style: preserve-3d;
backface-visibility: hidden;
}
@media (max-width: 768px) {
.project-timeline {
padding-left: 1.5rem;
}
.timeline-circle {
left: 0;
transform: translateX(-50%);
width: 2rem !important;
height: 2rem !important;
}
.project-content {
margin-left: 0.5rem;
width: calc(100% - 2rem) !important;
}
.project-card {
padding: 0.75rem !important;
}
}
`;
document.head.appendChild(style);

return () => {
document.head.removeChild(style);
};
}, []);

return (
<section id="projects" className="py-8 md:py-16 px-4 md:px-6 relative w-full bg-black min-h-screen">
<div className="absolute inset-0 bg-purple-800 opacity-30 rounded-full blur-3xl"></div>
<div className="container mx-auto px-4 md:px-6 relative z-10">
<h2 
className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white"
data-aos="fade-down"
>
Experience & Projects
</h2>
<div className="relative project-timeline">
<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-purple-500/50 rounded-full transform md:-translate-x-1/2"></div>
{projects.map((project, index) => {
const isEven = index % 2 === 0;
return (
<div
key={index}
className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-16 project-container ${
isEven ? 'md:flex-row' : 'md:flex-row-reverse'
}`}
>
<div 
className="timeline-circle absolute left-0 md:left-1/2 w-10 h-10 md:w-16 md:h-16 bg-purple-500 rounded-full border-2 border-black z-20 overflow-hidden hover:scale-125 transition-transform duration-300"
data-aos="zoom-in"
data-aos-duration="600"
id={`circle-${index}`}
style={{
transform: 'translate(-50%, 0)',
}}
>
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover"
/>
</div>
<div 
className={`project-content w-full md:w-5/12 ${isEven ? 'md:pr-6' : 'md:pl-6'}`}
>
<div 
className={`project-card bg-gray-900/80 rounded-md md:rounded-lg p-4 md:p-6 backdrop-blur-sm border border-purple-500/20 hover:shadow-lg ${
isEven ? 'flip-animation-left' : 'flip-animation-right'
}`}
data-aos="fade"
data-aos-duration="1000"
data-aos-delay="200"
style={{
transformOrigin: isEven ? `calc(100% + 2.5rem) center` : `-2.5rem center`
}}
>
<div className="space-y-3 md:space-y-4">
<div>
<h3 
className="text-base md:text-xl font-bold text-white mb-1"
data-aos="fade-up"
data-aos-delay="400"
>
{project.title}
</h3>
<p 
className="text-xs md:text-base text-gray-400"
data-aos="fade-up"
data-aos-delay="600"
>
{project.date}
</p>
</div>
<ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-300">
{project.description.map((point, i) => (
<li 
key={i} 
className="text-sm md:text-lg"
data-aos="fade-up"
data-aos-delay={700 + (i * 100)}
>
{point}
</li>
))}
</ul>
<div className="flex flex-wrap gap-1.5 md:gap-2">
{project.technologies.map((tech, i) => (
<span
key={i}
className="px-2 md:px-3 py-0.5 md:py-1 bg-purple-900/30 rounded-full text-xs md:text-base text-purple-300"
data-aos="zoom-in"
data-aos-delay={1100 + (i * 100)}
>
{tech}
</span>
))}
</div>
<div 
className="flex space-x-3 md:space-x-4 pt-2"
data-aos="fade-up"
data-aos-delay="1500"
>
{project.liveLink && project.liveLink !== "#" && (
<a
href={project.liveLink}
target="_blank"
rel="noopener noreferrer"
className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:scale-105 transform text-xs md:text-base"
>
<FaExternalLinkAlt className="mr-1.5 md:mr-2 text-xs md:text-base" />
Live Demo
</a>
)}
{project.githubLink && (
<a
href={project.githubLink}
target="_blank"
rel="noopener noreferrer"
className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:scale-105 transform text-xs md:text-base"
>
<FaGithub className="mr-1.5 md:mr-2 text-xs md:text-base" />
GitHub
</a>
)}
</div>
</div>
</div>
</div>
<div className="hidden md:block md:w-5/12"></div>
</div>
);
})}
</div>
</div>
</section>
);
}

export default Projects;


















