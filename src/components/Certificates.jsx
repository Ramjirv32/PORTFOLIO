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
    <section className="py-4 px-[50px] relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/50 to-black"></div>
      
      <div className="container mx-auto relative">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">
          Certificates
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className={`${
                cert.isPlaceholder 
                  ? 'bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 border border-dashed border-purple-500/50 opacity-75 max-w-[300px] mx-auto'
                  : 'bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 border border-purple-500/20 max-w-[300px] mx-auto'
              }`}
            >
              <div className="relative h-32">
                {cert.isPlaceholder ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <div className="text-purple-400 text-3xl">🎓</div>
                  </div>
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4 flex flex-col justify-between h-36">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-base text-purple-200 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-purple-300">{cert.date}</p>
                </div>
                                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-center mt-3"
                  >
                    View Certificate
                  </a>
                
                {cert.isPlaceholder && (
                  <p className="text-purple-400 text-sm mt-2 italic">certifications</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
