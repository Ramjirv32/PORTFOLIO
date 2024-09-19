import React, { useState } from 'react';
import img from "./styles/12.jpg";
import img1 from "./styles/c.avif";
import { Menu, X, Linkedin, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Star } from 'lucide-react';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">designer</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm hover:text-purple-400 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hidden md:block">
            Discuss for Projects
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

      {/* Hero Section */}
      <section id="home" className="container mx-auto pt-24 px-6 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            This is your designer <span className="text-purple-400">Esther Howard</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
              Discuss for Projects
            </button>
            <button className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full">
              View Portfolios
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img src={img} alt="Esther Howard" className="w-full rounded-lg" />
          <div className="absolute bottom-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            Skilled in 2023
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src={img1} alt="Esther Howard" className="w-full rounded-lg" />
          </div>
          <div className="md:w-2/3">
            <p>Ramji is a dedicated Full Stack Developer from II CSE B at KPRIET. With a robust foundation in both frontend and backend technologies, Ramji is passionate about extending his expertise into the realm of cloud engineering. His ambition is to leverage his development skills to design and implement scalable and efficient cloud-based solutions. As he pursues opportunities in the cloud computing domain, Ramji aspires to contribute to groundbreaking projects and drive technological advancements. His enthusiasm for continuous learning and adapting to emerging technologies highlights his commitment to staying at the forefront of innovation. Ramji actively engages with industry trends and best practices, positioning himself as a forward-thinking professional poised to excel in the dynamic field of cloud engineering. By integrating his development experience with cloud technologies, he aims to deliver impactful solutions and elevate his career to new heights.






</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="bg-gray-700 rounded-lg overflow-hidden">
                <img src={`/placeholder.svg?height=200&width=300&text=Project ${project}`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">Brief description of the project and its key features.</p>
                  <button className="text-purple-400 hover:text-purple-300">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Sketch', 'UI/UX Design', 'Responsive Design', 'Typography', 'Color Theory'].map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Star className="text-purple-400" size={20} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
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
                  <span>esther.howard@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-purple-400" size={24} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-purple-400" size={24} />
                  <span>123 Design Street, Creativity City, 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="www.google.com"><Linkedin size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          <Facebook size={24} className="text-gray-400 hover:text-white cursor-pointer" /></a>  
            <Twitter size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <Youtube size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <div className="text-gray-400 text-sm">
            © 2023 Esther Howard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}