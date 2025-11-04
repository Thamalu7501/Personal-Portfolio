import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Skills= () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    { name: 'React', level: 80 , logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
    { name: 'JavaScript', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Springboot', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Java', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MySql', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
    { name: 'Express Js', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Node Js', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Mongo DB', level: 60, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', level: 50, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'},
    { name: 'Cloud ', level: 60,logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  
  ];
  const displayedSkills = (isMobile && !showAllSkills) ? skills.slice(0, 6) : skills;

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {displayedSkills.map((skill) => (
            <div key={skill.name} className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center mb-2 sm:mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1 sm:mt-2">
                  {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>

        {isMobile && !showAllSkills && skills.length > 6 && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAllSkills(true)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-1 transform hover:scale-105"
            >
              <span>See More Skills</span>
              <ChevronDown size={20} />
            </button>
          </div>
        )}

        {isMobile && showAllSkills && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAllSkills(false)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-1 transform hover:scale-105"
            >
              <span>Show Less</span>
              <ChevronDown size={20} className="rotate-180" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;