
import { Facebook, Twitter, Linkedin, Instagram, Github, Download, Phone, Whatsapp } from "lucide-react";

export default function Thanks() {
  return (
    <section
      id="thanks"
      className="slide-section flex flex-col items-center justify-center text-center"
    >
      <div className="w-full flex flex-col items-center gap-2 mb-6">
        <div className="font-oswald text-[2.7rem] uppercase font-bold tracking-tight">
          Thank You
        </div>
        <div className="text-xs text-muted">dm034.github.io</div>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Contact info */}
        <div className="flex flex-col items-start text-left px-4 md:px-10">
          <div className="text-2xl font-semibold mb-2 text-beige">
            Get in touch
          </div>
          <div className="h-1 w-12 bg-beige rounded-full mb-6" />
          <ul className="text-left text-base space-y-3 mb-7">
            <li className="flex items-center gap-2">
              <span className="font-semibold">Phone :</span>
              <a
                href="tel:+261324908409"
                className="text-muted underline hover:text-beige flex items-center gap-1"
              >
                <Phone size={17} /> +261 32 49 084 09
              </a>
              <a
                href="https://wa.me/261324908409"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="ml-2 text-muted hover:text-green-500 transition"
                title="WhatsApp"
              >
                <Whatsapp size={19} />
              </a>
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
              href="https://www.facebook.com/dmrhrsn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
              className="hover:text-beige transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://x.com/dm_michael23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
              className="hover:text-beige transition"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-raharison-215901288"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className="hover:text-beige transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/dm_rhrsn_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              className="hover:text-beige transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://github.com/DM034"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className="hover:text-beige transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://wa.me/261324908409"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
              className="hover:text-green-500 transition"
              title="WhatsApp"
            >
              <Whatsapp size={22} />
            </a>
          </div>
          <a
            href="/cv.pdf"
            download
            className="btn-outline flex items-center gap-2 mt-8"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
        {/* Contact form */}
        <form
          action="https://formspree.io/f/xovvgzqj"
          method="POST"
          id="contactForm"
          className="bg-dark/70 rounded-xl px-4 md:px-10 py-7 flex flex-col gap-5 shadow border border-[#272421] w-full"
          autoComplete="off"
        >
          <div className="text-2xl font-semibold mb-2 text-beige text-left">
            Send a message
          </div>
          <div className="h-1 w-12 bg-beige rounded-full mb-3" />
          <div className="form-group">
            <input
              className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige w-full"
              type="text"
              name="name"
              placeholder="Name *"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige w-full"
              type="email"
              name="email"
              placeholder="Email *"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige w-full"
              type="text"
              name="subject"
              placeholder="Subject *"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige w-full"
              name="message"
              rows={7}
              placeholder="Your Message *"
              required
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn-beige w-full"
              id="submitBtn"
            >
              <span className="button-text">Send Message</span>
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 text-xs text-muted">Michael Raharison</div>
    </section>
  );
}
