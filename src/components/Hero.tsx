import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] hero-animated-bg"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Analista de Dados & Desenvolvedor
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Transformando dados em insights estratégicos e desenvolvendo soluções completas para impulsionar decisões de negócio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Ver Projetos
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
