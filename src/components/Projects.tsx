const Projects = () => {
  const projects = [
    {
      title: "ATLAS (NORTH OS)",
      description:
        "Built an AI-powered personal life operating system to track life balance, goals, knowledge and yearly evolution in one place.",
      tech: ["React", "TypeScript", "Vite", "Framer Motion"],
      image: "🧭",
      gradient: "from-indigo-500/40 to-blue-500/20",
      github: "https://github.com/aiman279/atlas",
      live: "https://atlas-orcin-beta.vercel.app",
    },
    {
      title: "ASMU'I VAULT",
      description:
        "Built a minimalist installable (PWA) money tracker with income, expenses, savings goals and a dedicated Grab earnings tracker.",
      tech: ["React", "TypeScript", "Vite", "PWA"],
      image: "💰",
      gradient: "from-emerald-500/40 to-teal-500/20",
      github: "https://github.com/aiman279/asmui-vault",
      live: "https://asmui-vault-three.vercel.app",
    },
    {
      title: "LIFEFLOW",
      description:
        "Built a full-stack personal operating system for schedules, routines and reminders, with browser push notifications and weekly review insights.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "PWA"],
      image: "⏰",
      gradient: "from-orange-500/40 to-rose-500/20",
      github: "https://github.com/aiman279/lifeflow",
      live: "#",
    },
    {
      title: "BOOKITSPORTS (FYP Project)",
      description:
        "Developed a responsive web and mobile application to streamline booking and management of sports facilities.",
      tech: ["React", "Tailwind CSS", "Flutter (Dart)", "Firebase"],
      image: "/booksports.png",
      gradient: "from-blue-500/40 to-cyan-500/20",
      github: "https://github.com/aiman279/BOOKITSPORTS_FYP-WEB",
      live: "#",
    },
    {
      title: "CREDIT TRANSFER SYSTEM FOR UNIVERSITY",
      description:
        "Developed a web-based system to manage and process student credit transfer requests between academic institutions.",
      tech: ["PHP", "HTML", "CSS", "JAVASCRIPT", "SQL"],
      image: "/transfer-system.png",
      gradient: "from-purple-500/40 to-pink-500/20",
      github: "https://github.com/aiman279/Credit_Transfer_System",
      live: "#",
    },
    {
      title: "TASK LOVE",
      description:
        "Built a responsive web application using React.js for managing personal and team tasks.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "/task-management.png",
      gradient: "from-fuchsia-500/40 to-violet-500/20",
      github: "https://github.com/aiman279/Task-Management",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#07070b] overflow-hidden"
    >
      <div className="absolute top-20 -left-20 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase mb-3">
            My work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass glow-border rounded-3xl overflow-hidden flex flex-col"
            >
              <div
                className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                {project.image.startsWith("/") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070b]/70 to-transparent"></div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-5 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-zinc-300 rounded-full text-xs font-medium border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-5 text-white rounded-xl font-medium border border-white/15 hover:bg-white/10 transition-all duration-300"
                  >
                    GitHub
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 px-5 bg-gradient-to-r from-violet-500 to-cyan-400 text-[#07070b] rounded-xl font-bold hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.8)] transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
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
