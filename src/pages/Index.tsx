
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const softBeige = "var(--portfolio-accent)";

const logoDM = "/lovable-uploads/04f18d19-7b27-4ed5-b066-e546dbc3f338.png";
const photoPortrait = "/lovable-uploads/2e76c297-e10b-4279-9ebc-c464ce2203fb.png";

// === Ajout de toutes les images manquantes ===
const fotoIntro = "/lovable-uploads/2e76c297-e10b-4279-9ebc-c464ce2203fb.png"; // À remplacer si besoin
const fotoFace = "/lovable-uploads/2e76c297-e10b-4279-9ebc-c464ce2203fb.png";
const fotoEdu = "/lovable-uploads/5c34d011-7c7a-4874-848f-e618c7d5e561.png";
const fotoSkills1 = "/lovable-uploads/c0e20d4f-b7c3-42f6-b7db-a4dae33a4b22.png";
const fotoSkills2 = "/lovable-uploads/9187a298-b425-4db9-8c96-a891cb1213de.png";
const fotoHero = "/lovable-uploads/b67e9741-2ae1-45cb-9b1d-74322f80e261.png";
const fotoExp = "/lovable-uploads/719aa570-3b86-4e1e-b430-50add1afdfdd.png";
const fotoPortfolio = "/lovable-uploads/b06683ee-3c79-4a48-8c6b-588d31c29350.png";
const fotoFirstProject = "/lovable-uploads/4f95c9f7-d58f-45c6-8a70-745fc1e49a85.png";
const fotoSecondProject = "/lovable-uploads/5c235a24-1b2d-4bea-bed0-34c124690090.png";

// Social links
const socialLinks = [
  { href: "https://www.facebook.com/dmrhrsn", icon: Facebook, label: "Facebook" },
  { href: "https://x.com/dm_michael23", icon: Twitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/michael-raharison-215901288", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/dm_rhrsn_/", icon: Instagram, label: "Instagram" },
  { href: "https://github.com/DM034", icon: Github, label: "GitHub" },
];

// Section links (noms en anglais pour l'esprit design)
const tocLinks = [
  { text: "Introduction", to: "#introduction", filled: false },
  { text: "Education", to: "#education", filled: false },
  { text: "Experience", to: "#experience", filled: false },
  { text: "First project", to: "#first-project", filled: false },
  { text: "Contact", to: "#contact", filled: false },
  { text: "About me", to: "#about", filled: true },
  { text: "Personal skill", to: "#skills", filled: true },
  { text: "Project portfolio", to: "#portfolio", filled: true },
  { text: "Second project", to: "#second-project", filled: true },
  { text: "Thank you", to: "#contact", filled: true }
];

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-dark text-beige" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
      {/* Brand/Logo section */}
      <div className="w-full flex items-center justify-between px-4 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <img src={logoDM} alt="DM Logo" className="w-14 h-14 rounded-xl bg-white shadow" />
          <span className="font-oswald text-xl font-bold tracking-tight uppercase">
            Michael Raharison
          </span>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:scale-110 transition-transform text-beige opacity-80 hover:opacity-100"
            >
              <Icon size={24} strokeWidth={1.7} />
            </a>
          ))}
        </div>
      </div>

      {/* Cover Section / Présentation principale */}
      <section className="slide-section flex flex-col items-stretch justify-center relative overflow-hidden" style={{minHeight:420}}>
        <div className="absolute left-4 top-6 text-sm text-muted">Portfolio · Developer</div>
        {/* Arrow right, peut-être à garder ? */}
        <a href="#table-of-contents" className="absolute right-10 top-7 hidden md:inline-flex">
          <ArrowRight size={30} strokeWidth={1.5} />
        </a>
        <div className="w-full flex flex-col md:flex-row items-center justify-center z-10">
          {/* Main title and info */}
          <div className="relative z-20 flex flex-col items-center md:items-start flex-shrink-0">
            <span className="font-oswald text-[5vw] md:text-[5.6vw] lg:text-[6vw] uppercase tracking-wide leading-[0.95] font-bold select-none"
              style={{ color: softBeige, textShadow: "1px 2px 0 rgba(0,0,0,0.10)" }}>
              Michael
              <span className="opacity-80 outline outline-2 outline-beige pl-2 pr-1">Raharison</span>
            </span>
            <span className="block text-lg md:text-xl mt-2 font-semibold tracking-wide text-beige/80" style={{letterSpacing:'0.03em'}}>Développeur full stack passionné</span>
            <span className="block mt-1 text-muted text-sm">"Chaque idée mérite sa solution numérique !"</span>
          </div>
          {/* Main portrait */}
          <img
            src={photoPortrait}
            alt="Michael Raharison portrait"
            className="slide-img ml-0 md:ml-[-18px] -mt-5 md:-mt-10 w-[345px] max-w-[95vw] h-auto object-cover shadow-xl md:mr-3 z-10 rounded-2xl"
          />
        </div>
        <footer className="flex justify-between items-center w-full px-2 mt-7 text-xs">
          <div>Michael Raharison</div>
          <div className="hidden md:block">dm034.github.io</div>
        </footer>
      </section>

      {/* Table of contents */}
      <section id="table-of-contents" className="slide-section flex flex-col md:flex-row items-center md:items-stretch gap-6">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-muted text-sm mb-3">Creative Presentation</div>
          <div className="font-oswald text-[3.8vw] md:text-[4vw] lg:text-[4.6vw] uppercase mb-2 font-bold tracking-tight leading-[0.97]">
            TABLE OF<br />CONTENTS
          </div>
          <p className="text-muted mb-6 max-w-lg text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <div className="text-xs text-muted mt-auto hidden md:block">Anna Katrina Marchesi</div>
        </div>
        <div className="w-full md:w-[400px] flex flex-col gap-4 justify-center">
          <div className="grid grid-cols-2 gap-4">
            {tocLinks.slice(0,6).map((l, i) => (
              <a href={l.to} key={l.text} className={l.filled ? "btn-beige text-[1rem]" : "btn-outline text-[1rem]"}>
                {l.text}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {tocLinks.slice(6,10).map((l, i) => (
              <a href={l.to} key={l.text} className={l.filled ? "btn-beige text-[1rem]" : "btn-outline text-[1rem]"}>
                {l.text}
              </a>
            ))}
          </div>
        </div>
        <a href="#introduction" className="absolute right-10 top-7 md:hidden block"><ArrowRight size={30} strokeWidth={1.5} /></a>
        <div className="hidden md:block text-xs text-muted absolute right-10 bottom-7">www.reallygreatsite.com</div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="slide-section flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="text-muted text-sm mb-3 self-start">Creative Presentation</div>
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full flex justify-center">
              <img src={fotoIntro} alt="Introduction" className="mx-auto slide-img" />
              <div className="absolute left-4 bottom-3 text-xs text-muted">Anna Katrina Marchesi</div>
              <div className="absolute right-4 top-3 text-xs text-muted hidden sm:block">www.reallygreatsite.com</div>
            </div>
            <div className="-mt-12 sm:-mt-16 z-10 px-2 pb-2 w-full text-center">
              <span className="font-oswald text-[2.9rem] sm:text-[4.2rem] uppercase font-bold tracking-tight">INTRODUCTION</span>
              <div className="mt-4 mx-auto max-w-2xl text-muted text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About (Name section) */}
      <section id="about" className="slide-section flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-muted text-sm mb-2">Creative Presentation</div>
          <div>
            <div className="font-oswald text-[2.9rem] sm:text-[4.2rem] uppercase font-bold tracking-tight mb-4">ANNA KATRINA<br/>MARCHESI</div>
            <div className="text-muted mb-7 max-w-xl text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
          <div className="text-xs text-muted mt-auto">Anna Katrina Marchesi</div>
        </div>
        <img src={fotoFace} alt="Anna Katrina Marchesi Portrait" className="slide-img object-cover drop-shadow-md" />
      </section>

      {/* Education */}
      <section id="education" className="slide-section flex flex-col md:flex-row items-start gap-8 justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-muted text-sm mb-2">Creative Presentation</div>
          <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold tracking-tight mb-5">EDUCATION</div>
          <div className="flex flex-row gap-8 text-base">
            <div>
              <div className="font-bold text-beige text-[1.09rem] mb-1">2019<br /><span className="font-normal">Borcelle University</span></div>
              <div className="text-muted text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div>
              <div className="font-bold text-beige text-[1.09rem] mb-1">2020<br /><span className="font-normal">Giggling University</span></div>
              <div className="text-muted text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div>
              <div className="font-bold text-beige text-[1.09rem] mb-1">2021<br /><span className="font-normal">Rimberio University</span></div>
              <div className="text-muted text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div className="text-xs text-muted mt-9">Anna Katrina Marchesi</div>
        </div>
        <img src={fotoEdu} alt="Education Photo" className="slide-img object-cover min-w-[200px]" />
        <div className="hidden md:block text-xs text-muted absolute right-10 bottom-7">www.reallygreatsite.com</div>
      </section>

      {/* Personal Skills */}
      <section id="skills" className="slide-section flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex-1">
          <div className="text-muted text-sm mb-2">Creative Presentation</div>
          <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold mb-7 tracking-tight">PERSONAL SKILLS</div>
          <div className="flex">
            <div className="flex flex-col items-center mr-7">
              <img src={fotoSkills1} alt="Photography" className="slide-img max-w-[160px] mb-2" />
              <span className="font-semibold text-sm text-beige">Photography</span>
              <p className="text-muted text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center ml-7">
              <img src={fotoSkills2} alt="Videography" className="slide-img max-w-[160px] mb-2" />
              <span className="font-semibold text-sm text-beige">Videography</span>
              <p className="text-muted text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block min-w-[190px]">
          <img src={fotoHero} alt="Decoration" className="slide-img" />
        </div>
        <div className="hidden md:block text-xs text-muted absolute right-10 bottom-7">www.reallygreatsite.com</div>
      </section>

      {/* Experience */}
      <section id="experience" className="slide-section flex flex-col md:flex-row items-start gap-8 justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-muted text-sm mb-2">Creative Presentation</div>
          <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold mb-6 tracking-tight">WORK<br/>EXPERIENCE</div>
          <div className="flex flex-row gap-10">
            <div>
              <div className="font-bold text-beige text-[1.09rem] mb-1">2019<br /><span className="font-normal">Project Manager</span></div>
              <div className="text-muted text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div>
              <div className="font-bold text-beige text-[1.09rem] mb-1">2019<br /><span className="font-normal">Designer</span></div>
              <div className="text-muted text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div>
              <div className="font-bold text-beige text-[1.09rem] mb-1">2019<br /><span className="font-normal">CEO Company</span></div>
              <div className="text-muted text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div className="text-xs text-muted mt-9">Anna Katrina Marchesi</div>
        </div>
        <img src={fotoExp} alt="Experience Photo" className="slide-img object-cover min-w-[220px]" />
        <div className="hidden md:block text-xs text-muted absolute right-10 bottom-7">www.reallygreatsite.com</div>
      </section>

      {/* Project Portfolio */}
      <section id="portfolio" className="slide-section flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-muted text-sm mb-2">Creative Presentation</div>
          <div className="font-oswald text-[2.8rem] sm:text-[3.3rem] uppercase font-bold mb-3 tracking-tight">PROJECT<br/>PORTFOLIO</div>
          <div className="text-muted max-w-md mb-8 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="text-xs text-muted mt-auto">Anna Katrina Marchesi</div>
        </div>
        <img src={fotoPortfolio} alt="Portfolio" className="slide-img object-cover min-w-[220px]" />
      </section>

      {/* Project 1 */}
      <section id="first-project" className="slide-section flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-muted text-sm mb-2">Creative Presentation</div>
          <div className="font-oswald text-[2.8rem] sm:text-[3.3rem] uppercase font-bold mb-3 tracking-tight">FIRST<br/>PROJECT</div>
          <div className="bg-beige text-dark max-w-lg px-8 py-4 mt-2 mb-6 rounded-xl text-base font-medium shadow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="text-xs text-muted mt-2">Anna Katrina Marchesi</div>
        </div>
        <img src={fotoFirstProject} alt="First Project" className="slide-img object-cover min-w-[240px]" />
      </section>

      {/* Project 2 */}
      <section id="second-project" className="slide-section flex flex-col md:flex-row-reverse items-center gap-8 justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-muted text-sm mb-2">Creative Presentation</div>
          <div className="font-oswald text-[2.8rem] sm:text-[3.3rem] uppercase font-bold mb-3 tracking-tight">SECOND<br/>PROJECT</div>
          <div className="bg-beige text-dark max-w-lg px-8 py-4 mt-2 mb-6 rounded-xl text-base font-medium shadow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="text-xs text-muted mt-2">Anna Katrina Marchesi</div>
        </div>
        <img src={fotoSecondProject} alt="Second Project" className="slide-img object-cover min-w-[240px]" />
      </section>

      {/* Footer/Contact */}
      <footer id="contact" className="w-full py-10 md:py-14 flex flex-col items-center justify-center text-center text-muted">
        <div className="flex flex-row justify-between w-full max-w-6xl px-6 mb-5">
          <div>
            Anna Katrina Marchesi
          </div>
          <div>
            www.reallygreatsite.com
          </div>
        </div>
        <div className="text-xs font-thin">
          Creative Presentation Portfolio. Inspired by your references.<br />
          Made with React, Tailwind CSS, and ❤️
        </div>
      </footer>
    </div>
  );
}
