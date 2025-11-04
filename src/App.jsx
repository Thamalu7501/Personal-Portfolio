import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail,Container, CloudUpload, Code, Database, Globe, MapPin, Phone, ToolCase, Server } from 'lucide-react';
import Profile from './assets/profile1.png'
import Projects from './components/Projects';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const skills = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Springboot', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'MySql', level: 80},
    { name: 'Express Js', level: 65 },
    { name: 'Node Js', level: 65 },
    { name: 'Mongo DB', level: 60 },
    { name: 'Docker', level: 70 },
    { name: 'Kubernetes', level: 50 },
    { name: 'Cloud ', level: 60 },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates, team chat, and progress tracking',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather forecast with data visualization, maps, and 7-day predictions',
      tech: ['React', 'API Integration', 'Chart.js'],
      gradient: 'from-green-400 to-teal-500',
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform with real-time messaging and content sharing',
      tech: ['React', 'Socket.io', 'Express'],
      gradient: 'from-orange-400 to-red-500',
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio creator with customizable templates and themes',
      tech: ['React', 'DnD Kit', 'Tailwind'],
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics platform with advanced data visualization and reporting',
      tech: ['React', 'D3.js', 'Node.js'],
      gradient: 'from-cyan-400 to-blue-500',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Home Section */}
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

      {/* About Section */}
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

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-right mt-2 text-gray-600 font-medium text-sm sm:text-base">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    {/* Projects */}
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.gradient}`} />
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Get In Touch
          </h2>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <a href="#" className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base">© 2025 Thamalu Amarasingha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;