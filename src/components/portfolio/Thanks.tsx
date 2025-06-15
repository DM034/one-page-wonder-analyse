
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Thanks() {
  return (
    <section
      id="thanks"
      className="slide-section flex flex-col items-center justify-center text-center"
    >
      <div className="w-full flex justify-between items-center mb-6">
        <div></div>
        <div className="font-oswald text-[2.7rem] uppercase font-bold tracking-tight">
          Thank You
        </div>
        <div className="text-xs text-muted">dm034.github.io</div>
      </div>
      {/* Contact module inspired by your screenshot */}
      <div className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Contact info */}
        <div className="flex flex-col items-start text-left px-4 md:px-10">
          <div className="text-2xl font-semibold mb-2 text-beige">
            Get in touch
          </div>
          <div className="h-1 w-12 bg-beige rounded-full mb-6" />
          <ul className="text-left text-base space-y-3 mb-7">
            <li>
              <span className="font-semibold">Phone :</span>{" "}
              <span className="text-muted">+261 32 49 084 09</span>
            </li>
            <li>
              <span className="font-semibold">Address :</span>{" "}
              <span className="text-muted">
                IVC 153 bis Ambodivoanjo Ankaraboato, Antananarivo, Madagascar.
              </span>
            </li>
            <li>
              <span className="font-semibold">Email :</span>{" "}
              <a
                href="mailto:michaeldm034@gmail.com"
                className="text-muted underline hover:text-beige"
              >
                michaeldm034@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex flex-row items-center gap-4 mt-1 text-muted">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
              className="hover:text-beige transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
              className="hover:text-beige transition"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className="hover:text-beige transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              className="hover:text-beige transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className="hover:text-beige transition"
            >
              <Github size={22} />
            </a>
          </div>
        </div>
        {/* Simple contact form (HTML only, no JS) */}
        <form
          className="bg-dark/70 rounded-xl px-4 md:px-10 py-7 flex flex-col gap-4 shadow border border-[#272421]"
          autoComplete="off"
        >
          <div className="text-2xl font-semibold mb-2 text-beige text-left">Send a message</div>
          <div className="h-1 w-12 bg-beige rounded-full mb-3" />
          <input
            required
            type="text"
            placeholder="Name *"
            className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige"
            name="name"
          />
          <input
            required
            type="email"
            placeholder="Email *"
            className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige"
            name="email"
          />
          <input
            required
            type="text"
            placeholder="Subject *"
            className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige"
            name="subject"
          />
          <textarea
            required
            placeholder="Your message *"
            rows={4}
            className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige"
            name="message"
          />
          <button
            type="submit"
            className="btn-beige mt-3 w-full"
            disabled
            aria-disabled="true"
            title="For demo only"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-10 text-xs text-muted">Michael Raharison</div>
    </section>
  );
}

