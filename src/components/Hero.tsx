import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const benefits = [
    "Dashboards que geram resultados",
    "Automação de processos",
    "Decisões baseadas em dados"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in border border-primary/30">
            Soluções em Dados & Desenvolvimento
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Transforme seus dados em{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              resultados reais
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Ajudo empresas a tomarem decisões mais inteligentes com análise de dados, 
            dashboards interativos e soluções web personalizadas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-delay">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button
              onClick={() => window.open("https://wa.me/5581973319128?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
              size="lg"
              className="gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary hover:border-primary/50"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
