import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Online Shopping Solution',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management. Features include user authentication, product catalog, shopping cart, and secure checkout process.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Deployed',
      gradient: 'from-purple-400 to-pink-500',
      frontend: 'https://github.com/yourusername/ecommerce-frontend',
      backend: 'https://github.com/yourusername/ecommerce-backend',
      demo: 'https://demo-ecommerce.com',
      image: null
    },
    {
      title: 'Task Management App',
      subtitle: 'Collaborative Project Manager',
      category: 'Web Development',
      description: 'Collaborative task manager with real-time updates, team chat, and progress tracking. Built with modern tech stack for seamless team collaboration.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      status: 'Developing',
      gradient: 'from-blue-400 to-cyan-500',
      frontend: 'https://github.com/yourusername/task-manager',
      demo: 'https://demo-taskmanager.com',
      image: null
    },
    {
      title: 'Weather Dashboard',
      subtitle: 'Real-Time Weather Analytics',
      category: 'Web Development',
      description: 'Interactive weather forecast with data visualization, maps, and 7-day predictions. Features location-based weather data and beautiful UI.',
      tech: ['React', 'API Integration', 'Chart.js'],
      status: 'Done',
      gradient: 'from-green-400 to-teal-500',
      frontend: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://demo-weather.com',
      image: null
    },
    {
      title: 'Mobile Banking App',
      subtitle: 'Secure Financial Management',
      category: 'Mobile App',
      description: 'A secure mobile banking application with account management, transaction history, and bill payments. Built with React Native for cross-platform compatibility.',
      tech: ['React Native', 'Node.js', 'PostgreSQL'],
      status: 'Done',
      gradient: 'from-indigo-400 to-purple-500',
      frontend: 'https://github.com/yourusername/banking-app',
      backend: 'https://github.com/yourusername/banking-backend',
      image: null
    },
    {
      title: 'Inventory System',
      subtitle: 'Desktop Management Solution',
      category: 'Desktop App',
      description: 'A comprehensive inventory management system for retail stores. Features include stock tracking, sales reports, and supplier management.',
      tech: ['Electron', 'React', 'SQLite'],
      status: 'Done',
      gradient: 'from-orange-400 to-red-500',
      frontend: 'https://github.com/yourusername/inventory-system',
      image: null
    },
    {
      title: 'CRM Platform',
      subtitle: 'Enterprise Customer Management',
      category: 'Enterprise',
      description: 'Enterprise-level CRM platform with sales pipeline management, customer analytics, and automated email campaigns. Scalable architecture for large organizations.',
      tech: ['React', 'Spring Boot', 'MySQL', 'Redis'],
      status: 'Deployed',
      gradient: 'from-cyan-400 to-blue-500',
      frontend: 'https://github.com/yourusername/crm-platform',
      backend: 'https://github.com/yourusername/crm-backend',
      demo: 'https://demo-crm.com',
      image: null
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Desktop App', 'Enterprise'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Portfolio</span>
          </h2>
          <p className="text-gray-600">Check out my latest projects</p>
        </div>

        <div className="flex gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
                )}
                
                {project.status && (
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === "Deployed"
                          ? "bg-green-500/90 text-white"
                          : project.status === "Developing"
                          ? "bg-yellow-400/90 text-gray-900"
                          : "bg-blue-500/90 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                )}

                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-2.5 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {project.subtitle}
                </p>

                <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                  {project.description}
                </p>
                <button
                  onClick={() => openModal(project)}
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium mb-4"
                >
                  Read more...
                </button>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-xs font-medium transition-all"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-xs font-medium transition-all"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-1 transform hover:scale-105"
          >
            <Github size={20} />
            <span>Visit My GitHub</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;