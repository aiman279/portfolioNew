import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const EMAIL = "aimanasmui332@gmail.com";

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aiman-asmui",
    href: "https://www.linkedin.com/in/aiman-asmui/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/aiman279",
    href: "https://github.com/aiman279",
    icon: Github,
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-topo">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-light text-white mb-4">
          Get In <span className="text-teal">Touch</span>
        </h2>
        <p className="text-center text-zinc-400 mb-14 max-w-xl mx-auto">
          I'm always open to discussing new opportunities, interesting
          projects, or just having a friendly chat about technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-5">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="teal-card p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-[#2ee6b6] text-teal flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-zinc-500">{label}</p>
                  <p className="text-white font-medium truncate group-hover:text-teal transition-colors">
                    {value}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-500 group-hover:text-teal transition-colors shrink-0"
                />
              </a>
            ))}
          </div>

          <div className="teal-card p-8 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Let's work <span className="text-teal">together</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, send me an email and I'll get back to you as
              soon as possible.
            </p>
            <div>
              <a href={`mailto:${EMAIL}`} className="btn-teal inline-block">
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
