
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      gradient: "from-blue-500 to-cyan-500",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "📋",
      gradient: "from-purple-500 to-pink-500",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions and forecasts with beautiful visualizations and location-based services.",
      tech: ["JavaScript", "CSS3", "OpenWeather API", "Chart.js"],
      image: "🌤️",
      gradient: "from-orange-500 to-red-500",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking with real-time data visualization and reporting features.",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      image: "📊",
      gradient: "from-emerald-500 to-teal-500",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 border border-gray-200/50 mb-6">
            🚀 My work
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl card-hover overflow-hidden border border-white/50 relative"
            >
              <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    Featured
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200/50 hover:shadow-md transition-shadow duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-3 px-6 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className={`flex-1 text-center py-3 px-6 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="group bg-white/50 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl card-hover overflow-hidden border border-white/30"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl relative`}>
                <span className="group-hover:scale-110 transition-transform duration-300">{project.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className={`flex-1 text-center py-2 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow duration-200`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
