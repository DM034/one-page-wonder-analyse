
const profileImg = "/lovable-uploads/c58de510-be2f-4999-b017-6fa9ffabe1bb.png";

export default function About() {
  return (
    <section id="about" className="slide-section flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-oswald text-[2.9rem] sm:text-[4.2rem] uppercase font-bold tracking-tight mb-2">
          MICHAEL<br />RAHARISON
        </div>
        <div className="text-[0.92rem] text-beige/80 font-medium mb-4 ml-1">
          Full-stack Developer
        </div>
        <div className="text-muted mb-7 max-w-xl text-base">
          A passionate full-stack developer based in Madagascar, skilled in modern technologies and always seeking new challenges.
        </div>
      </div>
      <img src={profileImg} alt="Michael Raharison Portrait" className="slide-img object-cover drop-shadow-md" />
    </section>
  );
}
