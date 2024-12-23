"use client"

import React, { useRef, useEffect } from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaJsSquare, FaNodeJs, FaServer, FaAws, FaFire } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import full from "./images/cloud.webp"
import "./styles/home.css"
import { useScroll } from "./scroll"

const technologies = [
  { name: 'HTML', icon: <FaHtml5 size={24} /> },
  { name: 'React', icon: <FaReact size={24} /> },
  { name: 'CSS', icon: <FaCss3Alt size={24} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={24} /> },
  { name: 'Node.js', icon: <FaNodeJs size={24} /> },
  { name: 'Express', icon: <FaServer size={24} /> },
  { name: 'AWS', icon: <FaAws size={24} /> },
  { name: 'Firebase', icon: <FaFire size={24} /> },
]

export default function Home() {
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const { handleClick } = useScroll()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const scrollToContact = () => {
    handleClick('contact')
  }

  return (
    <div className="min-h-screen bg-black text-white p-2 md:p-8 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-purple-900 opacity-30 rounded-full blur-3xl transform -translate-y-1/2"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:gap-8 w-full max-w-4xl mt-16 md:mt-20">
        <div className="relative w-full h-[20rem] md:h-[40rem]">
          <div className="absolute inset-0 bg-purple-600 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute inset-0">
            {technologies.map((tech, index) => {
              return (
                <div
                  key={tech.name}
                  className="absolute w-8 h-8 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-purple-700"
                  style={{
                    left: '50%',
                    top: '50%',
                    animation: `rotate-icon 20s linear infinite`,
                    animationDelay: `${-index * (20 / technologies.length)}s`,
                    transformOrigin: 'center'
                  }}
                >
                  <div className="transform scale-75 md:scale-100">
                    {tech.icon}
                  </div>
                </div>
              )
            })}
          </div>
          <div 
            className="absolute ml-6 mt-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-32 md:h-32 bg-purple-700 bg-opacity-50 rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-4xl shadow-inner shadow-black"
          >
            &lt;/&gt;
          </div>
        </div>

        <div className="text-center space-y-3 md:space-y-6 mt-4 md:mt-8">
          <span className="inline-block bg-purple-800 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm mb-2 md:mb-4 animate-bounce" data-aos="zoom-in">
            Hey I'm Ramji
          </span>

          <h1 className="text-2xl md:text-6xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse" data-aos="fade-down">
            Fullstack Developer
          </h1>

          <h2 className="text-xl md:text-4xl font-semibold mb-3 md:mb-6">
            I build things for the web.
          </h2>

          <p className="text-sm md:text-lg mb-4 md:mb-8 max-w-2xl text-gray-300 mx-auto px-2">
            I'm a Full Stack Software Engineer with experience in Website Development. Check out my projects below.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-lg font-semibold shadow-lg border border-purple-500 transition-colors transform hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  )
}