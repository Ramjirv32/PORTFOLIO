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
      className="bg-[#0a0118] text-gray-300 py-2 md:py-4 px-3 md:px-6 fixed w-full z-50"
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
          <a href="/" className="text-xl md:text-3xl font-bold animate-pulse" onClick={(e) => handleNavClick(e, "home")}>
            Ramji
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 flex-grow justify-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-sm md:text-base hover:text-white transition-colors"
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
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-base transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Download CV
          </a>
        </div>
        <button
          className="md:hidden text-white ml-2 md:ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0118] border-t border-gray-800">
          <nav className="flex flex-col space-y-2 p-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-sm hover:text-white transition-colors py-1"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  )
}