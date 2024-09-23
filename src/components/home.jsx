import React, { useState } from 'react';
 //import img from "./styles/12.jpg";
import food from "./images/f1.png";
import motion from "./images/motion.png";
import grs from "./images/i.png";
import port from "./images/KPR.png";
import api from "./images/api.png";
import door from "./images/door.jpg";
import v from "./images/v.mp4";
import PRF from "./images/R.png";
import console from "./images/console.mp4";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


import { Menu, X, Linkedin, Twitter, Mail, Phone, MapPin, Star } from 'lucide-react';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">Ramji</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm hover:text-purple-400 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hidden md:block">
            Discuss Projects
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-2">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-6 py-2 hover:bg-gray-700">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>
      <section id="home" className="container mx-auto pt-24 px-6 md:flex md:items-center md:justify-between">
  <div className="md:w-1/2 mb-8 md:mb-0">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      This is your developer <span className="text-purple-400">Ramji</span>
    </h1>
    <p className="text-gray-400 mb-6">
      Passionate full-stack developer and UI designer with a growing interest in cloud security. Committed to creating innovative and efficient solutions.
    </p>
    <div className="flex space-x-4">
      <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
        Discuss Projects
      </button>
      <button className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full">
        View Portfolio
      </button>
    </div>
  </div>
  <div className="md:w-1/2 relative">
    <img src={PRF} alt="Ramji" className="w-1/2 rounded-lg transform translate-x-36" />
    <div className="absolute bottom-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
      Skilled in 2023
    </div>
  </div>
</section>


      <section id="about" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src={port} alt="Ramji" className="w-full rounded-lg" />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Ramji, a dedicated Full Stack Developer currently pursuing my II CSE B at KPRIET. My journey in the world of technology has been driven by a passion for creating innovative solutions and a constant desire to learn and grow.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              With a strong foundation in both frontend and backend technologies, I'm always excited to take on new challenges. My recent focus has been on expanding my expertise into cloud security, as I believe it's crucial for building robust and secure applications in today's digital landscape.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or brainstorming ideas for my next big project. I'm always open to collaborations and new opportunities to push the boundaries of what's possible in web development and cloud technologies.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <img src={food} alt="Project 1" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '70px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-400 mb-4">My first Demo project done using Bootstrap</p>
                <button className="text-purple-400 hover:text-purple-300" onClick={() => window.open('https://ramjirv32.github.io/projectone/first', '_blank')}>
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <img src={motion} alt="Project 2" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '90px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-400 mb-4">Project on motion detection security camera</p>
                <button className="text-purple-400 hover:text-purple-300" onClick={() => window.open('', '_blank')}>
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <img src={grs} alt="Project 3" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '80px', marginTop: '20px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-400 mb-4">Innoscence project on automatic Lamp using Gestures + Console Application on Vehicle Reantal system</p>
                <a className="text-purple-400 hover:text-purple-300" href={console}>
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <img src={api} alt="Project 4" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '90px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 4</h3>
                <p className="text-gray-400 mb-4">Weather API using Node and Open Weather</p>
                <button className="text-purple-400 hover:text-purple-300" onClick={() => window.open('https://weather-api-893w.onrender.com/', '_blank')}>
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <img src={door} alt="Project 5" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '90px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 5</h3>
                <p className="text-gray-400 mb-4">Telegram Door control</p>
               
                <a className="text-purple-400 hover:text-purple-300"  href={v}>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section id="skills" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {['Web Development', 'UI Design', 'Full Stack', 'C', 'Python', 'Cloud Security', 'Figma', 'Responsive Design'].map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Star className="text-purple-400" size={20} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="md:flex md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-700 rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-700 rounded" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-2 bg-gray-700 rounded"></textarea>
                <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-full">Send Message</button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-purple-400" size={24} />
                  <span>ramjib2311@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-purple-400" size={24} />
                  <span>+91 6386667872</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-purple-400" size={24} />
                  <span>KPRIET, Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
    <div className="flex space-x-4 mb-4 md:mb-0">
      <a href="https://www.linkedin.com/in/ramji-b-613539308/" target="_blank" rel="noopener noreferrer">
        <Linkedin size={24} className="text-gray-400 hover:text-white cursor-pointer" />
      </a>
      <a href="https://github.com/Ramjirv32" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} className="text-gray-400 hover:text-white cursor-pointer" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter size={24} className="text-gray-400 hover:text-white cursor-pointer" />
      </a>
      <a href="https://leetcode.com/u/RAMJI____B/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode size={24} className="text-gray-400 hover:text-white cursor-pointer" />
      </a>
    </div>
    <div className="text-gray-400 text-sm">
      © 2024 Ramji. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}
