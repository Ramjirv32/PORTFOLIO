import React from 'react';

function Body() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-between px-6 md:px-16">
      {/* Left Section: Name and Title */}
      <div className="flex flex-col space-y-6 max-w-md">
        <h1 className="text-4xl md:text-6xl font-bold">Ramji B</h1>
        <p className="text-2xl">Software Engineer</p>
        <button className="mt-4 py-2 px-6 bg-purple-600 hover:bg-purple-800 text-white font-medium rounded-full transition-colors">
          More Info
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="hidden md:block">
        <img
          src="https://picsum.photos/400/400?random=20"
          alt="Profile"
          className="rounded-full border-4 border-purple-600"
        />
      </div>
    </div>
  );
}

export default Body;
