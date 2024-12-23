import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function ContactComponent() {
const [displayText, setDisplayText] = useState('');
const fullText = "Let's work together!";
const [showCursor, setShowCursor] = useState(true);
const [isDeleting, setIsDeleting] = useState(false);
const [loopNum, setLoopNum] = useState(0);
const [typingSpeed, setTypingSpeed] = useState(150);

useEffect(() => {
const typingInterval = setInterval(() => {
// Create the infinite loop
const i = loopNum % fullText.length;
if (!isDeleting) {
setDisplayText(fullText.slice(0, displayText.length + 1));
setTypingSpeed(150);

if (displayText === fullText) {
setIsDeleting(true);
setTypingSpeed(100); // Faster deletion
setTimeout(() => {}, 2000); // Pause at complete text
}
} else {
setDisplayText(fullText.slice(0, displayText.length - 1));

if (displayText === '') {
setIsDeleting(false);
setLoopNum(loopNum + 1);
setTypingSpeed(500); // Pause before retyping
}
}
}, typingSpeed);

// Cursor blinking
const cursorInterval = setInterval(() => {
setShowCursor(prev => !prev);
}, 500);

// Initialize AOS
AOS.init({
duration: 1000,
easing: 'ease-in-out',
once: true,
});

return () => {
clearInterval(typingInterval);
clearInterval(cursorInterval);
};
}, [displayText, isDeleting, loopNum, typingSpeed, fullText]);

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
<section className="relative bg-black py-4 md:py-16 w-full min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-purple-900 opacity-40 rounded-full blur-3xl"></div>
{/* Social Links - Hidden on very small screens */}
<div className="hidden sm:flex fixed md:absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 flex-col gap-2 md:gap-3 z-50 md:z-0">
{[ 
{ name: 'Twitter', icon: <FaTwitter size={12} className="md:text-xl" />, href: '#' },
{ name: 'LinkedIn', icon: <FaLinkedin size={12} className="md:text-xl" />, href: 'https://www.linkedin.com/in/ramji-b-613539308/' },
{ name: 'GitHub', icon: <FaGithub size={12} className="md:text-xl" />, href: 'https://github.com/Ramjirv32' },
].map((social) => (
<a
key={social.name}
href={social.href}
target="_blank"
rel="noopener noreferrer" 
className="w-6 h-6 md:w-10 md:h-10 animate-bounce bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors cursor-pointer"
>
{social.icon}
</a>
))}
</div>

<div className="container relative mx-auto px-3 md:px-4 max-w-6xl">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-12">
{/* Left Section */}
<div className="w-full md:w-1/2 mb-4 md:mb-0">
<h2 
className="text-xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-6 text-white inline-block"
data-aos="zoom-out"
>
{displayText}
<span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
</h2>
<p className="text-sm md:text-2xl text-gray-300 mb-4 md:mb-8" data-aos="fade-up">
I'm always interested in hearing about new projects and opportunities.
</p>
<div className="flex flex-col space-y-2 md:space-y-4" data-aos="fade-up">
<div className="flex items-center space-x-2">
<FaEnvelope className="text-purple-400 text-base md:text-3xl" />
<span className="text-xs md:text-2xl text-gray-300">ramjib2311@gmail.com</span>
</div>
</div>
</div>

{/* Right Section - Contact Form */}
<div className="w-full md:w-1/2">
<form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
<input 
type="text" 
name="user_name"
required
placeholder="Your Name" 
className="w-full bg-gray-900/50 text-white placeholder-gray-400 text-xs md:text-xl px-3 md:px-4 py-2 md:py-3 rounded-md md:rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
/>
<input 
type="email" 
name="user_email"
required
placeholder="Your Email" 
className="w-full bg-gray-900/50 text-white placeholder-gray-400 text-xs md:text-xl px-3 md:px-4 py-2 md:py-3 rounded-md md:rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
/>
<textarea 
name="message"
required
placeholder="Your Message" 
rows="4"
className="w-full bg-gray-900/50 text-white placeholder-gray-400 text-xs md:text-xl px-3 md:px-4 py-2 md:py-3 rounded-md md:rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
></textarea>
<button 
type="submit"
className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs md:text-xl px-3 md:px-6 py-2 md:py-3 rounded-md md:rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-105"
>
Send Message
</button>
</form>
</div>
</div>
</div>
</section>
</>
);
}
