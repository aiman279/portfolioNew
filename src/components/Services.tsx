import { Globe, LayoutDashboard, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    text: "Fast, mobile-friendly websites and landing pages that present your business clearly and bring in enquiries.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Web Apps",
    text: "Booking systems, task and inventory tools, admin dashboards and other systems built around how you work.",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    icon: Layers,
    title: "Full-Stack & APIs",
    text: "Front end, back end and database in one hand: authentication, APIs, data models and deployment.",
    tags: ["NestJS", "PostgreSQL", "PHP", "SQL"],
  },
  {
    icon: Wrench,
    title: "Fixes & Improvements",
    text: "Bug fixes, new features, speed-ups and clean-up for a website or web app that already exists.",
    tags: ["Debugging", "Refactoring", "Performance"],
  },
];

const steps = [
  { n: "01", title: "Discuss", text: "Tell me what you need and who it is for." },
  { n: "02", title: "Quote", text: "I send a clear scope, timeline and price." },
  { n: "03", title: "Build", text: "I build it and share progress along the way." },
  { n: "04", title: "Launch", text: "We go live, and I stay available for fixes." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#16181b]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-light text-white mb-4">
          What I <span className="text-teal">Build</span>
        </h2>
        <p className="text-center text-zinc-400 mb-14 max-w-xl mx-auto">
          Web development for small businesses and individuals, from idea to
          launch.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {services.map(({ icon: Icon, title, text, tags }) => (
            <div key={title} className="teal-card p-7">
              <div className="w-12 h-12 rounded-xl border border-[#2ee6b6] text-teal flex items-center justify-center mb-5">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-5">{text}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-center text-2xl font-light text-white mb-10">
          How we <span className="text-teal">work together</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative pl-5 border-l border-[#2ee6b6]/40">
              <span className="font-mono-code text-teal text-sm">{s.n}</span>
              <h4 className="text-lg font-semibold text-white mt-1 mb-1">
                {s.title}
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
