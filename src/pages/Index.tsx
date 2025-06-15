
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Portfolio from "@/components/portfolio/Portfolio";
import BestProject from "@/components/portfolio/BestProject";
import Thanks from "@/components/portfolio/Thanks";
import Footer from "@/components/portfolio/Footer";

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-dark text-beige" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Portfolio />
      <BestProject />
      <Thanks />
      <Footer />
    </div>
  );
}
