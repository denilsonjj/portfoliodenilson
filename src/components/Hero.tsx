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
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6 animate-fade-in border border-purple-500/30">
            Soluções em Dados & Desenvolvimento
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Transforme seus dados em{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              resultados reais
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Ajudo empresas a tomarem decisões mais inteligentes com análise de dados, 
            dashboards interativos e soluções web personalizadas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-delay">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white border-0 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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
