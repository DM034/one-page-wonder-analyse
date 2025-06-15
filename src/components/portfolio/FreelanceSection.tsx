
import { Download } from "lucide-react";

export default function FreelanceSection() {
  return (
    <section className="w-full rounded-xl my-8 max-w-6xl mx-auto px-6 py-14 lg:py-20 flex flex-col items-center justify-center bg-dark">
      <div className="text-3xl md:text-4xl font-semibold mb-7 text-beige text-center">
        I Am Available For Freelance
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center mb-8">
        <a
          href="mailto:michaeldm034@gmail.com"
          className="btn-beige text-lg px-12"
        >
          Hire me
        </a>
      </div>
    </section>
  );
}
