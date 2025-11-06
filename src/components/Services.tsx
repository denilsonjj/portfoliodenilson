import { Code, Database, BarChart3, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Análise de Dados",
    description: "Transformo dados brutos em insights estratégicos utilizando Python, SQL e ferramentas modernas de análise.",
    highlights: ["Python & SQL", "ETL & Data Pipeline", "Análise Exploratória"]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Desenvolvimento de dashboards interativos em Power BI para visualização clara e tomada de decisões informadas.",
    highlights: ["Power BI", "Dashboards Interativos", "KPIs & Métricas"]
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Criação de aplicações web modernas e responsivas com React no frontend e Python no backend.",
    highlights: ["React & TypeScript", "Python Backend", "APIs RESTful"]
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Implementação de modelos de ML supervisionados para predições e otimização de processos industriais.",
    highlights: ["Scikit-learn", "Modelos Preditivos", "Otimização"]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Meus Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em dados e desenvolvimento para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/50">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;