import HeroSection from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
export default function Home() {
  return (
    <div className="container mx-auto px-12 py-4">
      <div className="container mt-24 mx-auto">
        <HeroSection />
        <About />
        <br />
        <Projects />
        <br />
        <Skills />
        <br />
      </div>
    </div>
  );
}
