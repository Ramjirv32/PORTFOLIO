import React, { useState } from 'react';
import './styles/home.css'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-purple-900 to-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-8">
        <div className="flex items-center">
          <img src="https://picsum.photos/100/50?random=6" alt="Wiigy" className="h-8 rounded-full" />
          <nav className="ml-8 hidden md:flex space-x-6">
            {['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'].map((item) => (
              <a key={item} href="/" className="text-sm font-medium hover:text-purple-300 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto md:hidden flex items-center space-x-2 focus:outline-none"
            aria-label="Open user menu"
          >
            <img src="https://picsum.photos/32/32?random=7" alt="Profile" className="h-8 w-8 rounded-full border-2 border-purple-400" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 right-0 mt-2 w-48 bg-purple-800 rounded-lg overflow-hidden md:hidden">
            {['Account', 'Help Center', 'Sign out of Wiigy'].map((item) => (
              <a key={item} href="/" className="block px-4 py-2 text-sm hover:bg-purple-700 transition-colors">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
