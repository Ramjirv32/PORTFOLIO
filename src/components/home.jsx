"use client"

import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import full from "./images/cloud.webp";
import food from "./images/f1.png";
import motion from "./images/motion.png";
import grs from "./images/i.png";
import api from "./images/api.png";
import door from "./images/door.jpg";
import v from "./images/v.mp4";
import console from "./images/console.mp4";
import "./styles/home.css";
import { FaHtml5, FaReact, FaCss3Alt, FaJsSquare, FaNodeJs, FaServer, FaAws, FaFire, FaGithub, FaLinkedin, FaTwitter, FaStar, FaMailBulk, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 size={32} /> },
  { name: 'React', icon: <FaReact size={32} /> },
  { name: 'CSS', icon: <FaCss3Alt size={32} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={32} /> },
  { name: 'Node.js', icon: <FaNodeJs size={32} /> },
  { name: 'Express', icon: <FaServer size={32} /> },
  { name: 'AWS', icon: <FaAws size={32} /> },
  { name: 'Firebase', icon: <FaFire size={32} /> },
];

const Home = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  const smoothScroll = (targetRef) => {
    const targetPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollProgress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * scrollProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      smoothScroll(aboutRef);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-purple-900 opacity-20 rounded-full blur-3xl transform -translate-y-1/2"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full max-w-4xl">
        <div className="relative w-full h-96">
          <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute inset-0">
            {technologies.map((tech, index) => {
              const angle = (index / technologies.length) * 2 * Math.PI;
              const radius = 40;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <div
                  key={tech.name}
                  className="absolute w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-purple-700"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    animation: `rotate-icon 20s linear infinite`,
                    animationDelay: `${-index * (20 / technologies.length)}s`
                  }}
                >
                  {tech.icon}
                </div>
              );
            })}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
            &lt;/&gt;
          </div>
        </div>

        <div className="text-center space-y-6 mt-8">
          <span className="inline-block bg-purple-900 text-white px-4 py-2 rounded-full text-sm mb-4 animate-bounce" data-aos="zoom-in">
            Hey I'm Ramji
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse" data-aos="fade-down">
            Fullstack Developer
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            I build things for the web.
          </h2>

          <p className="text-lg mb-8 max-w-2xl text-gray-300 mx-auto">
            I'm a Full Stack Software Engineer with experience in Website and Mobile App development. Check out my projects below.
          </p>

          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg border border-purple-500 transition-colors transform hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {[ 
          { name: 'Twitter', icon: <FaTwitter size={20} /> },
          { name: 'LinkedIn', icon: <FaLinkedin size={20} /> },
          { name: 'GitHub', icon: <FaGithub size={20} /> },
        ].map((social) => (
          <div
            key={social.name}
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors cursor-pointer"
          >
            {social.icon}
          </div>
        ))} 
      </div>

      <section id="about" ref={aboutRef} className="container mx-auto py-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-gray-900 opacity-40 rounded-full blur-3xl"></div>
        <h2 className="text-3xl font-bold text-center mb-8 relative z-20">About Me</h2>
        <div className="md:flex md:items-center md:space-x-8 relative z-20">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src={full} alt="Ramji" className="w-full rounded-lg" />
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

      <section id="projects" className=" py-16 relative">
        <div className="absolute inset-0 bg-purple-900 opacity-40 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-none bg-opacity-70 border border-white rounded-lg overflow-hidden shadow-lg">
              <img src={food} alt="Project 1" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '70px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Project 1</h3>
                <p className="text-gray-400 mb-4">My first Demo project done using Bootstrap</p>
                <a
                  className="text-purple-400 hover:text-purple-300"
                  href="https://ramjirv32.github.io/projectone/first"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-none bg-opacity-70 border border-white rounded-lg overflow-hidden shadow-lg">
              <img src={motion} alt="Project 2" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '90px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Project 2</h3>
                <p className="text-gray-400 mb-4">Project on motion detection security camera</p>
                <a
                  className="text-purple-400 hover:text-purple-300"
                  href="U" 
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-none bg-opacity-70 border border-white rounded-lg overflow-hidden shadow-lg">
              <img src={grs} alt="Project 3" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '80px', marginTop: '20px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Project 3</h3>
                <p className="text-gray-400 mb-4">Innocence project on automatic Lamp using Gestures + Console Application on Vehicle Rental system</p>
                <a
                  className="text-purple-400 hover:text-purple-300"
                  href={console} 
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-none bg-opacity-70 border border-white rounded-lg overflow-hidden shadow-lg">
              <img src={api} alt="Project 4" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '60px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Project 4</h3>
                <p className="text-gray-400 mb-4">Weather API using Node and Open Weather</p>
                <a
                  className="text-purple-400 hover:text-purple-300"
                  href="https://weather-api-893w.onrender.com/"
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-transparent bg-opacity-70 border border-white rounded-lg overflow-hidden shadow-lg">
              <img src={door} alt="Project 5" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '90px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Project 5</h3>
                <p className="text-gray-400 mb-4">Telegram Door control</p>
                <a
                  className="text-purple-400 hover:text-purple-300"
                  href={v} 
                >
                  View Details
                </a>
              </div>
            </div>

            <div className="bg-none bg-opacity-70 border border-white rounded-lg overflow-hidden shadow-lg">
              <img src="" alt="Project 4" className="w-full h-48 object-cover" style={{ width: '300px', marginLeft: '90px' }} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">Project 5</h3>
                <p className="text-gray-400 mb-4"></p>
                <a
                  className="text-purple-400 hover:text-purple-300"
                  href="https://weather-api-893w.onrender.com/"
                >
                  Future PlaceHolder
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
            <div key={index} className="flex items-center space-x-2 animate-pulse text-bold">

              <FaStar className="text-purple-400" size={20} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative bg-gray-800 py-16">
  <div className="absolute inset-0 bg-purple-900 opacity-40 rounded-full blur-3xl z-0"></div>

  <div className="container relative mx-auto px-6 z-10">
    <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
    <div className="md:flex md:space-x-8">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-gray-700 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 bg-gray-700 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-500"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="md:w-1/2">
        <div className="space-y-4">
          <div className="flex items-center space-x-4 z-20">
            <FaMailBulk className="text-purple-400" size={24} />
            <span>ramjib2311@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 z-20">
            <FaPhoneAlt className="text-purple-400" size={24} />
            <span>+91 6386667872</span>
          </div>
          <div className="flex items-center space-x-4 z-20">
            <FaMapMarkerAlt className="text-purple-400" size={24} />
            <span>KPRIET, Coimbatore, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;