
export default function Portfolio() {
  return (
    <section id="portfolio" className="slide-section flex flex-col md:flex-row items-center gap-8 justify-between">
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-oswald text-[2.8rem] sm:text-[3.3rem] uppercase font-bold mb-3 tracking-tight">Project Portfolio</div>
        <div className="text-muted max-w-md mb-8 text-base">
          Various projects completed in web and software development. Please contact me for details and demos of my best work.
        </div>
      </div>
    </section>
  );
}
