import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Atlas (North OS)",
    description:
      "An AI-powered personal life operating system to track life balance, goals, knowledge and yearly evolution in one place.",
    tech: ["React", "TypeScript", "Vite", "Framer Motion"],
    image: "🧭",
    github: "https://github.com/aiman279/atlas",
    live: "https://atlas-orcin-beta.vercel.app",
  },
  {
    title: "Asmu'i Vault",
    description:
      "A minimalist installable (PWA) money tracker with income, expenses, savings goals and a dedicated Grab earnings tracker.",
    tech: ["React", "TypeScript", "Vite", "PWA"],
    image: "💰",
    github: "https://github.com/aiman279/asmui-vault",
    live: "https://asmui-vault-three.vercel.app",
  },
  {
    title: "LifeFlow",
    description:
      "A full-stack personal operating system for schedules, routines and reminders, with browser push notifications and weekly review insights.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "PWA"],
    image: "⏰",
    github: "https://github.com/aiman279/lifeflow",
    live: "#",
  },
  {
    title: "BookItSports (FYP)",
    description:
      "A responsive web and mobile application to streamline booking and management of sports facilities.",
    tech: ["React", "Tailwind CSS", "Flutter (Dart)", "Firebase"],
    image: "/booksports.png",
    github: "https://github.com/aiman279/BOOKITSPORTS_FYP-WEB",
    live: "#",
  },
  {
    title: "Credit Transfer System",
    description:
      "A web-based system to manage and process student credit transfer requests between academic institutions.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    image: "/transfer-system.png",
    github: "https://github.com/aiman279/Credit_Transfer_System",
    live: "#",
  },
  {
    title: "Task Love",
    description:
      "A responsive web application using React.js for managing personal and team tasks.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/task-management.png",
    github: "https://github.com/aiman279/Task-Management",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#16181b]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-light text-white mb-4">
          Featured <span className="text-teal">Projects</span>
        </h2>
        <p className="text-center text-zinc-400 mb-14 max-w-xl mx-auto">
          A few things I've built recently.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="teal-card p-4 flex gap-4">
              <div className="w-28 sm:w-36 shrink-0 rounded-xl overflow-hidden bg-[#23272c] flex items-center justify-center">
                {p.image.startsWith("/") ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl">{p.image}</span>
                )}
              </div>

              <div className="flex flex-col min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-5 text-sm font-medium">
                  {p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-teal hover:underline"
                    >
                      Live demo <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-300 hover:text-white"
                  >
                    GitHub <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
