import HeroSection from "@/app/components/Hero";
import Contact from "@/app/components/Contact";
import Skills from "@/app/components/Skills";
// import NavBar from "@/app/components/NavBar";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
export default function Home() {
  return (
    <div className="container mx-auto px-12 py-4">
      {/* <NavBar /> */}
      <div className="container mt-24 mx-auto">
        <HeroSection />
        <About />
        <br />
        <Skills />
        <br />
        <Projects />
        <br />
        <Contact />
      </div>
    </div>
  );
}
