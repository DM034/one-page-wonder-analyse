
import { Download } from "lucide-react";

export default function FreelanceSection() {
  return (
    <section className="w-full rounded-xl my-8 max-w-6xl mx-auto px-6 py-14 lg:py-20 flex flex-col items-center justify-center bg-dark">
      <div className="text-3xl md:text-4xl font-semibold mb-7 text-beige text-center">I Am Available For Freelance</div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center mb-8">
        <a
          href="mailto:michaeldm034@gmail.com"
          className="btn-beige text-lg px-12"
        >
          Hire me
        </a>
        <a
          href="/cv.pdf"
          download
          className="btn-outline flex items-center gap-2 text-lg px-9"
        >
          <Download size={20} />
          Download CV
        </a>
      </div>
      <form
        className="bg-dark/70 rounded-xl px-4 md:px-10 py-7 flex flex-col gap-4 shadow border border-[#272421] w-full max-w-lg"
        autoComplete="off"
      >
        <div className="text-xl font-semibold mb-2 text-beige text-left text-center md:text-left">Send me a message</div>
        <div className="h-1 w-12 bg-beige rounded-full mb-4 mx-auto md:mx-0" />
        <input
          required
          type="email"
          placeholder="Your email *"
          className="border border-outline rounded px-4 py-2 bg-transparent text-beige placeholder:text-muted text-base focus:outline-none focus:border-beige"
          name="email"
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
          className="btn-beige mt-2 w-full"
          disabled
          aria-disabled="true"
          title="For demo only"
        >
          Send Email
        </button>
      </form>
    </section>
  );
}
