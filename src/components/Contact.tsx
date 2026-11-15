import { Mail, Phone } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 bg-white/5 text-white placeholder:text-zinc-500 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#07070b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a friendly chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. Drop me a message
                and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#07070b]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email Me</p>
                  <a
                    href="mailto:aimanasmui332@gmail.com"
                    className="text-white font-semibold hover:text-violet-300 transition-colors duration-200"
                  >
                    aimanasmui332@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#07070b]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Call Me</p>
                  <a
                    href="tel:+60172209598"
                    className="text-white font-semibold hover:text-violet-300 transition-colors duration-200"
                  >
                    (+60) 17-220 9598
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={inputClass}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={inputClass}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-violet-500 to-cyan-400 text-[#07070b] rounded-lg font-bold hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.8)] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
