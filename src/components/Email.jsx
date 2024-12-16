import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function ContactComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const userMessage = formData.get("message");

    const messageBody = `You got a new message from:\n\nName: ${userName}\nEmail: ${userEmail}\nMessage: ${userMessage}`;

    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
            from_name: userName,
            from_email: userEmail,
            message: messageBody
        },
        process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
        Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Your message has been sent successfully.',
            confirmButtonText: 'OK',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#purple-600'
        });
    }, (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Failed to Send',
            text: 'There was an error sending your message. Please try again later.',
            confirmButtonText: 'OK',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#purple-600'
        });
    });

    e.target.reset(); 
  };

  return (
    <>
      <section className="relative bg-black py-16 w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-purple-900 opacity-40 rounded-full blur-3xl"></div>
        <div className="fixed md:absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50 md:z-0">
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
              className="w-10 h-10 animate-bounce bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors cursor-pointer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white" data-aos="zoom-out">Let's work together!</h2>
              <p className="text-gray-300 mb-8 max-w-lg text-lg" data-aos="fade-up">
                "If you need a developer, have a question, or want to collaborate on exciting projects, don’t hesitate to reach out!"
              </p>
              <div className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-md border border-[#3a3a3a] max-w-md">
                <FaEnvelope className="text-purple-400" size={24} />
                <span className="text-white text-lg" data-aos="zoom-in">ramjib2311@gmail.com</span>
              </div>
            </div>
            <div className="md:w-1/2 w-full max-w-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  data-aos="fade-right"
                  type="text" 
                  name="user_name"
                  placeholder="Name" 
                  className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white p-4 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
                  required
                />
                <input 
                  type="email" 
                  name="user_email"
                  data-aos="fade-right"
                  placeholder="Email" 
                  className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white p-4 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message" 
                  data-aos="fade-right"
                  className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white p-4 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
                  rows={6}
                  required
                />
                <button 
                  data-aos="zoom-in" 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-md focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black text-lg font-semibold transition duration-300 ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
