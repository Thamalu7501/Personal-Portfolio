import React, { useEffect } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative">
          <div className="aspect-[2/1] overflow-hidden rounded-t-2xl">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
            )}
          </div>
          
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1.5 rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.status && (
              <span
                className={`px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm ${
                  project.status === "Deployed"
                    ? "bg-green-500/90 text-white"
                    : project.status === "Developing"
                    ? "bg-yellow-400/90 text-gray-900"
                    : "bg-blue-500/90 text-white"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-lg sm:text-xl text-gray-600">{project.subtitle}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-purple-600 mb-3">Project Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.frontend && (
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all"
              >
                <Github size={20} />
                <span>Frontend Code</span>
              </a>
            )}

            {project.backend && (
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all"
              >
                <Github size={20} />
                <span>Backend Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all shadow-lg"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;