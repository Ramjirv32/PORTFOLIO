"use client"

import React, { useRef, useEffect } from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaJsSquare, FaNodeJs, FaServer, FaAws, FaFire } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import full from "./images/cloud.webp"
import "./styles/home.css"

const technologies = [
  { name: 'HTML', icon: <FaHtml5 size={32} /> },
  { name: 'React', icon: <FaReact size={32} /> },
  { name: 'CSS', icon: <FaCss3Alt size={32} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={32} /> },
  { name: 'Node.js', icon: <FaNodeJs size={32} /> },
  { name: 'Express', icon: <FaServer size={32} /> },
  { name: 'AWS', icon: <FaAws size={32} /> },
  { name: 'Firebase', icon: <FaFire size={32} /> },
]

export default function Home() {
  const aboutRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const smoothScroll = (targetRef) => {
    const targetPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000
    let startTime = null

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const scrollProgress = Math.min(timeElapsed / duration, 1)
      window.scrollTo(0, startPosition + distance * scrollProgress)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  const scrollToAbout = () => {
    if (aboutRef.current) {
      smoothScroll(aboutRef)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-purple-900 opacity-30 rounded-full blur-3xl transform -translate-y-1/2"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full max-w-4xl mt-20">
        <div className="relative w-full h-96">
          <div className="absolute inset-0 bg-purple-600 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute inset-0 mt-12">
            {technologies.map((tech, index) => {
              const angle = (index / technologies.length) * 2 * Math.PI
              const radius = 42
              const x = 50 + radius * Math.cos(angle)
              const y = 50 + radius * Math.sin(angle)
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
              )
            })}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 w-24 h-24 bg-purple-700 bg-opacity-50 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-inner shadow-black">
            &lt;/&gt;
          </div>
        </div>

        <div className="text-center space-y-6 mt-8">
          <span className="inline-block bg-purple-800 text-white px-4 py-2 rounded-full text-sm mb-4 animate-bounce" data-aos="zoom-in">
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

      <section id="about" ref={aboutRef} className="container mx-auto py-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-purple-900 opacity-40 rounded-full blur-3xl"></div>
        <h2 className="text-3xl font-bold text-center mb-8 relative z-20">About Me</h2>
        <div className="md:flex md:items-center md:space-x-8 relative z-20">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src={full} alt="Ramji" className="w-full rounded-lg" />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-300 leading-relaxed" data-aos="fade-up">
              Hello! I'm Ramji, a dedicated Full Stack Developer currently pursuing my II CSE B at KPRIET. My journey in the world of technology has been driven by a passion for creating innovative solutions and a constant desire to learn and grow.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4" data-aos="fade-up">
              With a strong foundation in both frontend and backend technologies, I'm always excited to take on new challenges. My recent focus has been on expanding my expertise into cloud security, as I believe it's crucial for building robust and secure applications in today's digital landscape.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4" data-aos="fade-up">
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or brainstorming ideas for my next big project. I'm always open to collaborations and new opportunities to push the boundaries of what's possible in web development and cloud technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}