import HeroSection from "@/components/Hero";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <NavBar />
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
    </main>
  );
}
