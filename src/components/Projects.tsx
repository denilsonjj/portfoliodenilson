import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Code, Github } from "lucide-react";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard de Empreendedores",
      description: "Análise de empreendedores cadastrados em plataforma de cursos. Desenvolvido com modelo em estrela, fornece insights sobre cursos com maior e menor número de inscrições, análise por raça e nível de ensino.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      link: "https://app.powerbi.com/view?r=eyJrIjoiNWEyZmNmNTctODBiNS00OGY0LWE2OGYtNTk0N2E4MzE0ZWI2IiwidCI6IjM4MjNhYzRiLWY1MDEtNDBjOS1hYWNjLTU4M2NhNGVjNzk4MCJ9&pageName=1b8dd58ffb53b81adab6",
      type: "Power BI",
      caseStudy: {
        title: "Dashboard de Empreendedores",
        description: "Análise completa de dados educacionais usando Power BI",
        challenge: "A plataforma de cursos precisava entender melhor o perfil dos empreendedores cadastrados e identificar padrões de inscrição para otimizar a oferta de cursos.",
        solution: "Desenvolvi um dashboard em Power BI utilizando modelo em estrela (star schema) para otimizar o desempenho e facilitar análises multidimensionais. O dashboard fornece visualizações interativas sobre cursos, demografia dos estudantes e padrões de inscrição.",
        results: [
          "Identificação dos cursos com maior e menor demanda",
          "Análise demográfica por raça e nível de ensino",
          "Insights para tomada de decisão estratégica na oferta de cursos",
          "Melhoria na compreensão do perfil dos empreendedores"
        ],
        technologies: ["Power BI", "DAX", "Star Schema", "Data Modeling"]
      }
    },
    {
      title: "Dashboard Operacional de OEE",
      description: "Dashboard operacional focado em análise de OEE (Overall Equipment Effectiveness), monitorando vida útil de máquinas, componentes com maior número de paradas e desempenho por linhas de produção.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      link: "https://app.powerbi.com/view?r=eyJrIjoiYzdmNWJlYjYtMTAxZS00OTU1LTk4MDAtOTAxMGY3ZjkzODY4IiwidCI6IjM4MjNhYzRiLWY1MDEtNDBjOS1hYWNjLTU4M2NhNGVjNzk4MCJ9",
      type: "Power BI",
      caseStudy: {
        title: "Dashboard Operacional de OEE",
        description: "Análise de eficiência operacional e manutenção industrial",
        challenge: "A área de manutenção industrial precisava de visibilidade em tempo real sobre a eficiência dos equipamentos, identificar gargalos e prever necessidades de manutenção.",
        solution: "Criei um dashboard operacional focado em OEE (Overall Equipment Effectiveness) que monitora indicadores-chave como disponibilidade, performance e qualidade. O sistema rastreia a vida útil de máquinas e identifica componentes críticos com maior frequência de paradas.",
        results: [
          "Monitoramento em tempo real do OEE por linha de produção",
          "Redução do tempo de parada através da identificação proativa de componentes críticos",
          "Melhoria na tomada de decisão sobre manutenção preventiva",
          "Aumento da eficiência operacional geral"
        ],
        technologies: ["Power BI", "DAX", "KPI Monitoring", "Industrial Data Analysis"]
      }
    },
    {
      title: "GEMBA APP",
      description: "Aplicação web desenvolvida para otimizar reuniões diárias de manutenção industrial. Permite registro em tempo real de problemas identificados durante caminhadas pela fábrica (GEMBA walks), categorizando questões de manutenção e facilitando o acompanhamento de ações.",
      icon: <Code className="w-8 h-8 text-accent" />,
      link: "https://github.com/denilsonjj/GEMBA-APP",
      type: "React + Python",
      githubLink: "https://github.com/denilsonjj/GEMBA-APP",
      caseStudy: {
        title: "GEMBA APP",
        description: "Digitalização de reuniões diárias de manutenção industrial",
        challenge: "As reuniões diárias (daily meetings) consumiam muito tempo com anotações manuais durante as caminhadas pela fábrica. Era difícil rastrear problemas identificados, categorizar adequadamente as questões de manutenção e garantir follow-up efetivo das ações.",
        solution: "Desenvolvi uma aplicação web completa usando React no frontend e Python no backend. O app permite registro em tempo real durante as GEMBA walks, com categorização automática de problemas focados em manutenção industrial, sistema de priorização e dashboard de acompanhamento.",
        results: [
          "Redução significativa do tempo das reuniões diárias",
          "Melhoria no rastreamento e follow-up de problemas",
          "Categorização estruturada de questões de manutenção",
          "Histórico completo de problemas e soluções implementadas",
          "Maior eficiência na gestão de manutenção preventiva e corretiva"
        ],
        technologies: ["React.js", "Python", "REST API", "Industrial Maintenance Systems"]
      }
    },
    {
      title: "Sistema de Avaliação",
      description: "Sistema completo desenvolvido em Node.js com quadro de atividades (realizadas, a realizar e em andamento) e dashboard inicial com detalhes operacionais de fábrica. Acesso demo: admin@gmail.com / Admin",
      icon: <Code className="w-8 h-8 text-accent" />,
      link: "https://sistema-de-avalia-o-one.vercel.app/",
      type: "Node.js + React.js",
      githubLink: "https://github.com/denilsonjj/sistema-de-avalia-o",
      caseStudy: {
        title: "Sistema de Avaliação",
        description: "Plataforma de gestão de atividades e KPIs operacionais",
        challenge: "A fábrica precisava de uma ferramenta centralizada para gerenciar atividades, acompanhar status de tarefas e visualizar indicadores operacionais em tempo real.",
        solution: "Desenvolvi um sistema full-stack usando Node.js no backend e React.js no frontend. O sistema conta com um quadro Kanban para gestão de atividades (a fazer, em andamento, concluídas) e um dashboard com métricas operacionais relevantes para a gestão da fábrica.",
        results: [
          "Centralização do acompanhamento de atividades operacionais",
          "Visibilidade em tempo real do status de tarefas",
          "Dashboard com KPIs operacionais para tomada de decisão",
          "Melhoria na comunicação entre equipes",
          "Aumento da produtividade e accountability"
        ],
        technologies: ["Node.js", "React.js", "REST API", "Kanban Board", "Dashboard Analytics"]
      }
    },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in">
          Meus Projetos
        </h2>
        <p className="text-center text-white/80 mb-16 text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Algumas soluções que desenvolvi
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-black/40 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-sm font-medium text-purple-300 px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                    {project.type}
                  </span>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-base text-white/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:text-white transition-colors"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      Ver Projeto <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                    {'githubLink' in project && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:text-white transition-colors"
                        onClick={() => window.open(project.githubLink as string, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  {'caseStudy' in project && (
                    <ProjectCaseStudy
                      title={project.caseStudy.title}
                      description={project.caseStudy.description}
                      challenge={project.caseStudy.challenge}
                      solution={project.caseStudy.solution}
                      results={project.caseStudy.results}
                      technologies={project.caseStudy.technologies}
                    />
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
