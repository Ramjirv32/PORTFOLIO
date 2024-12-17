"use client"

import React, { useState } from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useScroll } from "./scroll"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { handleClick } = useScroll()

  const navItems = ["About", "Projects", "Skills", "Certificates", "Contact"]

  const handleNavClick = (e, item) => {
    e.preventDefault()
    handleClick(item.toLowerCase())
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="bg-[#0a0118] text-gray-300 py-4 px-6 fixed w-full z-50"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: { y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
        hidden: { y: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-none">
          <a href="/" className="text-3xl font-bold animate-pulse" onClick={(e) => handleNavClick(e, "home")}>
            Ramji
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 flex-grow justify-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex-none">
          <a
            href="/assets/Ramji-REsume.pdf"
            download="Ramji_Resume.pdf"
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
        <motion.div
          className="md:hidden mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="block py-2 px-4 text-sm relative text-gray-300 hover:text-white transition-colors duration-300 group"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="mt-4 px-4">
            <a
              href="/assets/finalresume.pdf"
              download="Ramji_Resume.pdf"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}