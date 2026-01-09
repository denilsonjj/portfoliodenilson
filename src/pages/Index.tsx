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
      {/* Theme gradient overlay - dark by default */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_25%_12%)_0%,transparent_50%)] light:bg-[radial-gradient(ellipse_at_top,hsl(270_20%_92%)_0%,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(280_30%_10%)_0%,transparent_40%)] light:bg-[radial-gradient(ellipse_at_bottom_right,hsl(270_15%_88%)_0%,transparent_40%)] pointer-events-none" />
      
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
