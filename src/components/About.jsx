import React from 'react';
import { Menu, X, Github, Linkedin, Mail,Container, CloudUpload, Code, Database, Globe, MapPin, Phone, ToolCase, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Who I Am</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                I’m a passionate Full-Stack Developer with 2 years of experience building modern, scalable, and user-focused web applications. I enjoy turning ideas into clean, efficient solutions and take pride in writing quality code that delivers real impact.               </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Outside of development, I enjoy exploring new tools, contributing to community projects, and sharing insights with fellow developers. I’m always eager to learn, grow, and collaborate to create meaningful digital experiences and I believe in the value of collaboration, creativity, and craftsmanship which are principles that guide me in every project I take on.              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Code className="text-purple-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 text-sm sm:text-base">Front-End Development</span>
                </div>
                <div className="flex items-center group">
                  <Server className="text-purple-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 text-sm sm:text-base">Back-End Development</span>
                </div>
                <div className="flex items-center group">
                  <Database className="text-purple-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 text-sm sm:text-base">Database Management</span>
                </div>
                <div className="flex items-center group">
                  <Container className="text-purple-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 text-sm sm:text-base">Containerization</span>
                </div>
                <div className="flex items-center group">
                  <CloudUpload className="text-purple-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 text-sm sm:text-base">Cloud Deployement</span>
                </div>
                <div className="flex items-center group">
                  <ToolCase className="text-purple-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 text-sm sm:text-base">Maintainance</span>
                </div>
                <div className="flex items-center group">
                  <Github className="text-purple-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 text-sm sm:text-base">Open Source Contribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;