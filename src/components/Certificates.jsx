import React from 'react';

const certificates = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "July 2024",
    credential: "/assets/UdemyWeb.pdf",
    image: "/assets/UdemyWeb.png"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
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
    <section className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8 relative bg-black min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/50 to-black"></div>
      
      <div className="container mx-auto relative max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
          Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className={`
                w-full max-w-[280px] sm:max-w-sm
                ${cert.isPlaceholder 
                  ? 'bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 border border-dashed border-purple-500/50 opacity-75'
                  : 'bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 border border-purple-500/20'
                }
              `}
            >
              {!cert.isPlaceholder ? (
                <div className="block h-full">
                  <div className="relative aspect-[16/9]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6 flex flex-col justify-between h-[180px] sm:h-[200px]">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{cert.title}</h3>
                      <p className="text-base sm:text-lg text-purple-200 mb-1 sm:mb-2">{cert.issuer}</p>
                      <p className="text-sm sm:text-base text-purple-300">{cert.date}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <a
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-center text-sm sm:text-base font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative aspect-[16/9]">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <div className="text-purple-400 text-4xl">🎓</div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 h-[180px] sm:h-[200px]">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{cert.title}</h3>
                    <p className="text-base sm:text-lg text-purple-200 mb-1 sm:mb-2">{cert.issuer}</p>
                    <p className="text-sm sm:text-base text-purple-300">{cert.date}</p>
                    <p className="text-purple-400 text-sm sm:text-base mt-4 text-center italic">
                      Coming Soon...
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

