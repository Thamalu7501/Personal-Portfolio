import React from 'react';
import Profile from '../assets/profile1.png';
const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Hi, I'm Thamalu Amarasingha
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                A Full Stack Developer
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
                Crafting excellence with simplicity, precision, and purpose
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('Projects')}
                  className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('Contact')}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 sm:border-8 border-white shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;