const Projects = () => {
  const projects = [
    {
      title: "BOOKITSPORTS (FYP Project)",
      description:
        "Developed a responsive web and mobile application to streamline booking and management of sports facilities.",
      tech: ["React", "Tailwind CSS", "Flutter (Dart)", "Firebase"],
      image: "/booksports.png",
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/aiman279/BOOKITSPORTS_FYP-WEB",
      live: "#",
      featured: true,
    },
    {
      title: "CREDIT TRANSFER SYSTEM FOR UNIVERSITY",
      description:
        "Developed a web-based system to manage and process student credit transfer requests between academic institutions.",
      tech: ["PHP", "HTML", "CSS", "JAVASCRIPT", "SQL"],
      image: "/transfer-system.png",
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/aiman279/Credit_Transfer_System",
      live: "#",
      featured: true,
    },
    {
      title: "TASK LOVE",
      description:
        "Built a responsive web application usong React.js for managing personal and team tasks.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "/task-management.png",
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/aiman279/Task-Management",
      live: "#",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden"
    >
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
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl card-hover overflow-hidden border border-white/50 relative"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                  {project.image.endsWith(".png") ||
                  project.image.endsWith(".jpg") ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-6xl">{project.image}</span>
                  )}

                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      Featured
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

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
                      className="flex-1 text-center py-3 px-6 bg-white text-gray-800 rounded-xl font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      GitHub
                    </a>

                    <a
  href={project.live}
  className="flex-1 text-center py-3 px-6 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
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
