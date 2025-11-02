import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
