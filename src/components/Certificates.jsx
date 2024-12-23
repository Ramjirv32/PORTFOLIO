import React from 'react';

const certificates = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: " July 2024",
    credential: "/assets/UdemyWeb.pdf",
    image: "/assets/UdemyWeb.png"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: " Dec 2024",
    credential: "/assets/aws.pdf",
    image: "/assets/aws.png"
  },
  {
    title: "Coming Soon",
    issuer: "Future Certification",
    date: "2025",
    isPlaceholder: true
  }
];

export default function Certificates() {
  return (
    <section className="py-4 md:py-16 px-2 md:px-6 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/50 to-black"></div>
      
      <div className="container mx-auto relative">
        <h2 className="text-lg md:text-3xl font-bold text-center mb-4 md:mb-12 text-white">
          Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className={`${
                cert.isPlaceholder 
                  ? 'bg-gradient-to-br from-gray-900 to-purple-900 rounded-md md:rounded-lg overflow-hidden shadow-sm md:shadow-lg transition-all duration-300 hover:scale-105 border border-dashed border-purple-500/50 opacity-75 max-w-[280px] md:max-w-none mx-auto'
                  : 'bg-gradient-to-br from-gray-900 to-purple-900 rounded-md md:rounded-lg overflow-hidden shadow-sm md:shadow-lg transition-all duration-300 hover:scale-105 border border-purple-500/20 max-w-[280px] md:max-w-none mx-auto'
              }`}
            >
              <div className="relative h-32 md:h-48">
                {cert.isPlaceholder ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <div className="text-purple-400 text-2xl md:text-4xl">🎓</div>
                  </div>
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-2 md:p-6 flex flex-col justify-between h-24 md:h-48">
                <div>
                  <h3 className="text-xs md:text-xl font-semibold text-white mb-0.5 md:mb-3 truncate">{cert.title}</h3>
                  <p className="text-[10px] md:text-lg text-purple-200 mb-0.5 md:mb-2 truncate">{cert.issuer}</p>
                  <p className="text-[8px] md:text-base text-purple-300">{cert.date}</p>
                </div>
                {!cert.isPlaceholder && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white w-full md:w-auto px-2 md:px-6 py-1 md:py-3 rounded-sm md:rounded-lg text-[10px] md:text-base hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-center mt-1 md:mt-4"
                  >
                    View Certificate
                  </a>
                )}
                {cert.isPlaceholder && (
                  <p className="text-purple-400 text-[10px] md:text-base mt-0.5 md:mt-3 italic">certifications</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 