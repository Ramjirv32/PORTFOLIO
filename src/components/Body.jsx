'use client'

import React from 'react';
import { Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';



export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="flex space-x-4 mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/ramji-b-613539308/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          </a>
        </motion.div>
        <motion.div
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          © 2024 Ramji. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}