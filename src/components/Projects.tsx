import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Code, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard de Empreendedores",
      description: "Análise de empreendedores cadastrados em plataforma de cursos. Desenvolvido com modelo em estrela, fornece insights sobre cursos com maior e menor número de inscrições, análise por raça e nível de ensino.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      link: "https://app.powerbi.com/view?r=eyJrIjoiNWEyZmNmNTctODBiNS00OGY0LWE2OGYtNTk0N2E4MzE0ZWI2IiwidCI6IjM4MjNhYzRiLWY1MDEtNDBjOS1hYWNjLTU4M2NhNGVjNzk4MCJ9&pageName=1b8dd58ffb53b81adab6",
      type: "Power BI",
    },
    {
      title: "Dashboard Operacional de OEE",
      description: "Dashboard operacional focado em análise de OEE (Overall Equipment Effectiveness), monitorando vida útil de máquinas, componentes com maior número de paradas e desempenho por linhas de produção.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      link: "#",
      type: "Power BI",
    },
    {
      title: "Sistema de Avaliação",
      description: "Sistema completo desenvolvido em Node.js com quadro de atividades (realizadas, a realizar e em andamento) e dashboard inicial com detalhes operacionais de fábrica. Acesso demo: admin@gmail.com / Admin",
      icon: <Code className="w-8 h-8 text-accent" />,
      link: "https://sistema-de-avalia-o-one.vercel.app/",
      type: "Node.js",
      githubLink: "https://github.com/denilsonjj/sistema-de-avalia-o",
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
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    Ver Projeto <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  {'githubLink' in project && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(project.githubLink as string, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
