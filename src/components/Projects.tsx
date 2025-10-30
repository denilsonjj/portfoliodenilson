import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard de Vendas",
      description: "Dashboard interativo para análise de vendas, com métricas de performance, tendências e KPIs estratégicos.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      link: "#",
      type: "Power BI",
    },
    {
      title: "Dashboard Financeiro",
      description: "Análise financeira completa com visualizações de receita, despesas, fluxo de caixa e projeções.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      link: "#",
      type: "Tableau",
    },
    {
      title: "Sistema de Análise",
      description: "Aplicação desenvolvida para automatizar processos de análise de dados e geração de relatórios.",
      icon: <Code className="w-8 h-8 text-accent" />,
      link: "#",
      type: "Python",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Projetos Principais
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Conheça alguns dos meus trabalhos mais relevantes
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  {project.icon}
                  <span className="text-sm font-medium text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                    {project.type}
                  </span>
                </div>
                <CardTitle className="text-2xl text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Ver Projeto <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
