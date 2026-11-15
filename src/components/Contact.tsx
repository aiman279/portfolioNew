import { ArrowUpRight } from "lucide-react";

const inputClass =
  "w-full bg-transparent border-b border-black/30 py-3 placeholder:text-black/40 focus:outline-none focus:border-[#ff4d2e] transition-colors duration-200";

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-[#f4f1ea] border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] accent mb-10">
          03 — Contact
        </p>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-serif-display text-5xl sm:text-7xl leading-[1] mb-10">
              Let's work <span className="italic accent">together.</span>
            </h2>
            <p className="text-lg text-black/70 max-w-lg leading-relaxed mb-10">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a friendly chat about technology.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:aimanasmui332@gmail.com"
                className="group flex items-center gap-2 font-serif-display text-3xl sm:text-4xl hover:text-[#ff4d2e] transition-colors"
              >
                aimanasmui332@gmail.com
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="tel:+60172209598"
                className="block text-lg text-black/70 link-underline w-fit"
              >
                (+60) 17-220 9598
              </a>
            </div>
          </div>

          <form className="lg:col-span-5 space-y-8">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-black/50">
                Name
              </label>
              <input type="text" id="name" className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-black/50">
                Email
              </label>
              <input type="email" id="email" className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-black/50">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-[#141414] text-[#f4f1ea] font-medium hover:bg-[#ff4d2e] transition-colors duration-200"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
