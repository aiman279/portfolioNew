import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Atlas (North OS)",
      year: "2026",
      description:
        "An AI-powered personal life operating system to track life balance, goals, knowledge and yearly evolution in one place.",
      tech: ["React", "TypeScript", "Vite", "Framer Motion"],
      github: "https://github.com/aiman279/atlas",
      live: "https://atlas-orcin-beta.vercel.app",
    },
    {
      title: "Asmu'i Vault",
      year: "2026",
      description:
        "A minimalist installable (PWA) money tracker with income, expenses, savings goals and a dedicated Grab earnings tracker.",
      tech: ["React", "TypeScript", "Vite", "PWA"],
      github: "https://github.com/aiman279/asmui-vault",
      live: "https://asmui-vault-three.vercel.app",
    },
    {
      title: "LifeFlow",
      year: "2026",
      description:
        "A full-stack personal operating system for schedules, routines and reminders, with browser push notifications and weekly review insights.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "PWA"],
      github: "https://github.com/aiman279/lifeflow",
      live: "#",
    },
    {
      title: "BookItSports (FYP)",
      year: "2025",
      description:
        "A responsive web and mobile application to streamline booking and management of sports facilities.",
      tech: ["React", "Tailwind CSS", "Flutter (Dart)", "Firebase"],
      github: "https://github.com/aiman279/BOOKITSPORTS_FYP-WEB",
      live: "#",
    },
    {
      title: "Credit Transfer System",
      year: "2025",
      description:
        "A web-based system to manage and process student credit transfer requests between academic institutions.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
      github: "https://github.com/aiman279/Credit_Transfer_System",
      live: "#",
    },
    {
      title: "Task Love",
      year: "2025",
      description:
        "A responsive web application using React.js for managing personal and team tasks.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/aiman279/Task-Management",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-28 bg-[#f4f1ea]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] accent mb-10">
          02 — Selected work
        </p>
        <h2 className="font-serif-display text-5xl sm:text-7xl leading-[1] mb-16">
          Things I've <span className="italic">built</span>
        </h2>

        <div className="border-t border-black">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-black/20 hover:bg-white/60 transition-colors duration-300"
            >
              <div className="md:col-span-1 text-sm font-medium text-black/40 pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif-display text-3xl sm:text-4xl group-hover:text-[#ff4d2e] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-black/50 mt-1">{project.year}</p>
              </div>

              <div className="md:col-span-5">
                <p className="text-black/70 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-black/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex md:flex-col md:items-end gap-4 md:gap-2 text-sm font-medium pt-1">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 accent hover:underline"
                  >
                    Live <ArrowUpRight size={16} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
