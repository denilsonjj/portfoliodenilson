import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";
import AIChat from "@/components/AIChat";
import ContactForm from "@/components/ContactForm";
import Analytics from "@/components/Analytics";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background">
      <MatrixBackground />
      <Analytics />
      <AIChat />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
