import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in">
          Sobre Mim
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-hover animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Sou apaixonado por transformar dados em insights que fazem a diferença. Com uma 
              base sólida em Ciência de Dados, trabalho diariamente com Python (pandas, NumPy), 
              SQL e Power BI para extrair, limpar e visualizar dados de forma clara e estratégica. 
              Adoro criar dashboards interativos que realmente ajudam as pessoas a tomar decisões 
              melhores e mais rápidas.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Estou sempre estudando e me aprimorando em estatística e Machine Learning, porque 
              acredito que sempre há algo novo para aprender nesse mundo de dados. Minha experiência 
              em ambientes industriais me ensinou a criar soluções práticas que otimizam processos 
              e impactam diretamente nos resultados do negócio.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Além de trabalhar com análise de dados, também desenvolvo aplicações web usando Python 
              no backend e React no frontend. Gosto de unir o melhor dos dois mundos: a precisão 
              analítica dos dados com a criatividade do desenvolvimento web, criando soluções 
              completas e modernas.
            </p>
            
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv-caio-cerqueira.pdf';
                  link.download = 'CV-Caio-Cerqueira.pdf';
                  link.click();
                }}
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
