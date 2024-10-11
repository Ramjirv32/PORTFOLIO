"use client"

import React, { useState } from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["About", "Projects", "Skills", "Contact"]

  return (
    <motion.header
      className="bg-[#0a0118] text-gray-300 py-4 px-6"
      variants={{
        visible: { y: 0, transition: { type: "just" } },
        hidden: { y: "-150%", transition: { type: "just" } },
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-none">
          <a href="/" className="text-3xl font-bold animate-pulse">
            Ramji
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 flex-grow justify-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex-none">
          <a
            href="/cv.pdf"
            download
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Download CV
          </a>
        </div>
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="block py-2 px-4 text-sm relative text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="mt-4 px-4">
            <a
              href="./images/c.docx"
              download
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
