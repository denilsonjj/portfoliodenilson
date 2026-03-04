import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 mesh-overlay opacity-40" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.2),transparent_40%),radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.1),transparent_45%)]" />

      <WhatsAppButton />

      <div className="relative z-10">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
