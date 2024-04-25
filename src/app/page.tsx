import HeroSection from "@/components/Hero";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <NavBar />
        <div className="container mt-24 mx-auto">
          <HeroSection />
          <About />
          <br />

          <Contact />
        </div>
      </div>
    </main>
  );
}
