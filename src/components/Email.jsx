import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Component() {
  return (
    <section className="relative bg-black py-16 w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-purple-900 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {[ 
          { name: 'Twitter', icon: <FaTwitter size={20} />, href: '#' },
          { name: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/ramji-b-613539308/' },
          { name: 'GitHub', icon: <FaGithub size={20} />, href: 'https://github.com/Ramjirv32' },
        ].map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors cursor-pointer"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="container relative mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Let's work together!</h2>
            <p className="text-gray-300 mb-8 max-w-lg text-lg">
            "If you need a developer, have a question, or want to collaborate on exciting projects, don’t hesitate to reach out!
            </p>
            <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-md border border-[#3a3a3a] max-w-md">
              <FaEnvelope className="text-purple-400" size={24} />
              <span className="text-white text-lg">ramjib2311@gmail.com</span>
            </div>
          </div>
          <div className="md:w-1/2 w-full max-w-md">
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white p-4 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white p-4 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
              />
              <textarea
                placeholder="Message"
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white p-4 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
                rows={6}
              />
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-md focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black text-lg font-semibold transition duration-300 ease-in-out">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}