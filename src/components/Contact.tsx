import { Mail, Phone } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-[#16181b] text-white placeholder:text-zinc-500 border border-white/15 focus:outline-none focus:border-[#2ee6b6] transition-colors duration-200";

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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="teal-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#2ee6b6] text-teal flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-zinc-500">Email Me</p>
                <a
                  href="mailto:aimanasmui332@gmail.com"
                  className="text-white font-medium hover:text-teal transition-colors break-all"
                >
                  aimanasmui332@gmail.com
                </a>
              </div>
            </div>

            <div className="teal-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#2ee6b6] text-teal flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-zinc-500">Call Me</p>
                <a
                  href="tel:+60172209598"
                  className="text-white font-medium hover:text-teal transition-colors"
                >
                  (+60) 17-220 9598
                </a>
              </div>
            </div>
          </div>

          <form className="teal-card p-6 space-y-4">
            <input type="text" id="name" className={inputClass} placeholder="Your name" />
            <input type="email" id="email" className={inputClass} placeholder="your.email@example.com" />
            <textarea
              id="message"
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Tell me about your project or just say hello!"
            ></textarea>
            <button type="submit" className="btn-teal w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
