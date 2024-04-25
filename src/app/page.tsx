import HeroSection from "@/components/Hero";
import Contact from "@/components/Contact";
// import Skills from "@/components/Skills";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <NavBar />
        <div className="container mt-24 mx-auto">
          <HeroSection />
          <Contact />
        </div>
      </div>
    </main>
  );
}
