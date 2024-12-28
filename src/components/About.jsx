"use client"

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import full from "./images/cloud.webp"
import "./styles/3d-effects.css"

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })

    const cards = document.querySelectorAll('.card-3d')
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = -(x - centerX) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
  }

  return (
    <section id="about" className="bg-black py-8 px-4 md:px-6 relative w-full">
      <div className="absolute inset-0 bg-purple-900 opacity-30 rounded-full blur-3xl"></div>
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-white">About Me</h2>
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/3 mb-4 md:mb-0 card-3d max-w-[350px] md:max-w-none mx-auto">
            <img src={full} alt="Development Setup" className="w-full rounded-lg" />
          </div>
          <div className="md:w-2/3">
            <div className="space-y-2 md:space-y-4 card-3d p-3 md:p-6 bg-gray-900/80 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed" data-aos="fade-up">
                My name is Ramji, and I am a Full Stack Developer currently studying in II CSE B at KPRIET. There has always been a burning passion for creating new things and a constant urge to learn, which has driven me into the technology industry.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2 md:mt-4" data-aos="fade-up">
                I have experience in both frontend and backend development, and I am looking for more new opportunities. Recently, I have been working on integrating cloud technologies into applications because I believe they are essential for building strong applications in the modern world.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2 md:mt-4" data-aos="fade-up">
                If I am not working on code, I love browsing for new tech, working on open-source projects, or thinking about my next move. I am always ready for collaboration and new opportunities in web development and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}