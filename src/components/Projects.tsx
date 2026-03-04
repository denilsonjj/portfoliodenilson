import { Button } from "@/components/ui/button";
import { ExternalLink, Github, LineChart, MonitorSmartphone } from "lucide-react";
import { openTrackedLink } from "@/lib/analytics";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

type PortfolioProject = {
  title: string;
  year: string;
  summary: string;
  impact: string;
  stack: string[];
  projectUrl?: string;
  githubUrl?: string;
  caseStudy: {
    title: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
  };
};

const projects: PortfolioProject[] = [
  {
    title: "Migração de App para React + Supabase",
    year: "2026",
    summary: "Evolução de um app prototipado no Google AI Studio para uma aplicação real e escalável.",
    impact: "Entrega elogiada pela agilidade, suporte no pós-projeto e facilidade de negociação.",
    stack: ["React", "Supabase", "TypeScript", "UX"],
    caseStudy: {
      title: "Migração de App para React + Supabase",
      description: "Transição de protótipo para produto funcional em stack moderna",
      challenge:
        "O app inicial em Google AI Studio precisava virar um produto real, com banco de dados, autenticação e estrutura de manutenção.",
      solution:
        "Migrei o fluxo para React + Supabase, organizando telas, dados e lógica de negócio para garantir estabilidade e evolução contínua.",
      results: [
        "Aplicação pronta para uso real",
        "Base técnica escalável para novas features",
        "Suporte ao cliente mesmo após entrega",
      ],
      technologies: ["React", "Supabase", "TypeScript", "Modelagem de dados"],
    },
  },
  {
    title: "CRUD em Python para Geração de Etiquetas",
    year: "2026",
    summary: "Sistema de cadastro e geração de etiquetas para operação com padrão e consistência.",
    impact: "Projeto elogiado por organização e qualidade técnica da entrega.",
    stack: ["Python", "CRUD", "Automação"],
    caseStudy: {
      title: "CRUD de Etiquetas",
      description: "Aplicação para padronizar geração e controle de etiquetas",
      challenge:
        "O cliente precisava controlar dados de etiquetas sem depender de processos manuais dispersos.",
      solution:
        "Foi desenvolvido um CRUD em Python para cadastro, atualização e emissão de etiquetas com fluxo simples e seguro.",
      results: [
        "Padronização operacional no cadastro",
        "Melhor controle do ciclo de etiquetagem",
        "Entrega reconhecida por competência e organização",
      ],
      technologies: ["Python", "CRUD", "Gestão de dados"],
    },
  },
  {
    title: "Dashboard em Excel para Rede de Supermercados",
    year: "2026",
    summary: "Painel de acompanhamento com foco em leitura rápida para apoiar decisões comerciais.",
    impact: "Cliente destacou entrega acima da expectativa e alto valor percebido.",
    stack: ["Excel", "Dashboard", "Indicadores"],
    caseStudy: {
      title: "Dashboard Excel para Supermercados",
      description: "Consolidação de indicadores para tomada de decisão comercial",
      challenge:
        "A operação precisava de visão consolidada para acompanhar desempenho sem depender de múltiplas planilhas.",
      solution:
        "Foi desenvolvido um dashboard em Excel com estrutura de indicadores e visão clara para comparação de resultados.",
      results: [
        "Decisão mais rápida no dia a dia",
        "Melhor comunicação entre áreas",
        "Entrega avaliada acima do esperado",
      ],
      technologies: ["Excel", "Dashboarding", "KPIs"],
    },
  },
  {
    title: "Sistema Financeiro para Escritório de Advocacia",
    year: "2026",
    summary: "Solução para organizar fluxo financeiro e reduzir gargalos de controle.",
    impact: "Projeto recomendado pelo cliente por resolver dor crítica de gestão financeira.",
    stack: ["Excel VBA", "Financeiro", "Automação"],
    caseStudy: {
      title: "Gestão Financeira para Advocacia",
      description: "Sistema para controle e previsibilidade financeira",
      challenge:
        "O escritório tinha dificuldade para controlar rotina financeira de forma simples e confiável.",
      solution:
        "Foi criada uma ferramenta personalizada para entrada, consulta e consolidação de informações financeiras.",
      results: [
        "Redução de gargalos na operação financeira",
        "Controle mais claro para decisão",
        "Cliente recomendou o trabalho publicamente",
      ],
      technologies: ["Excel VBA", "Automação", "Processo financeiro"],
    },
  },
  {
    title: "Sistema de Avaliação (Case autoral)",
    year: "2025",
    summary: "Plataforma full-stack com board de atividades e visão operacional para fábrica.",
    impact: "Centralizou tarefas, melhorou acompanhamento e acelerou comunicação entre equipes.",
    stack: ["Node.js", "React", "Dashboard", "Kanban"],
    projectUrl: "https://sistema-de-avalia-o-one.vercel.app/",
    githubUrl: "https://github.com/denilsonjj/sistema-de-avalia-o",
    caseStudy: {
      title: "Sistema de Avaliação",
      description: "Gestão operacional em ambiente único",
      challenge:
        "A operação precisava de um fluxo único para organizar atividades e acompanhar indicadores sem dependência de planilhas isoladas.",
      solution:
        "Foi desenvolvido um sistema com board de tarefas e dashboard operacional para leitura rápida e acompanhamento contínuo.",
      results: [
        "Mais previsibilidade de execução",
        "Visibilidade de status em tempo real",
        "Padronização do processo operacional",
      ],
      technologies: ["Node.js", "React", "REST API", "Charts"],
    },
  },
];

const CASE_DETAILS_URL = "https://wa.me/5581973319128?text=Oi! Quero ver mais detalhes desse case do portfólio.";
const PROPOSAL_URL = "https://wa.me/5581973319128?text=Olá! Quero conversar sobre um projeto parecido com esses cases.";

const Projects = () => {
  const openWhatsApp = () => {
    openTrackedLink(PROPOSAL_URL, "cta_click", { cta: "projects_bottom_proposal" });
  };

  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projetos recentes</span>
          <h2 className="section-title">Cases reais com foco em impacto, clareza e execução.</h2>
          <p className="section-subtitle">Veja como eu resolvi problemas parecidos com os que muitas empresas enfrentam no dia a dia.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="glass-card panel-hover p-6 md:p-7">
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-2xl border border-primary/30 bg-primary/15 p-3 text-primary">
                  {project.stack.some((item) => item.includes("Dashboard") || item.includes("Excel")) ? (
                    <LineChart className="h-5 w-5" />
                  ) : (
                    <MonitorSmartphone className="h-5 w-5" />
                  )}
                </div>
                <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">{project.summary}</p>

              <p className="mt-4 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground">{project.impact}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.projectUrl ? (
                  <Button
                    onClick={() => openTrackedLink(project.projectUrl!, "case_open", { project: project.title })}
                    className="rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Abrir case
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => openTrackedLink(CASE_DETAILS_URL, "cta_click", { cta: "projects_case_details", project: project.title })}
                    className="rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Quero detalhes desse case
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => openTrackedLink(project.githubUrl!, "case_repo_open", { project: project.title })}
                    className="rounded-full border-border bg-card/30 px-4"
                    aria-label={`Abrir github do projeto ${project.title}`}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                )}
                <ProjectCaseStudy
                  title={project.caseStudy.title}
                  description={project.caseStudy.description}
                  challenge={project.caseStudy.challenge}
                  solution={project.caseStudy.solution}
                  results={project.caseStudy.results}
                  technologies={project.caseStudy.technologies}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 glass-card flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Próximo passo</p>
            <h3 className="mt-2 text-2xl font-bold">Quer aplicar essa mesma lógica no seu negócio?</h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Me passe contexto, objetivo e prazo. Eu retorno com uma proposta prática e um caminho claro de execução.
            </p>
          </div>
          <Button onClick={openWhatsApp} className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
            Receber proposta
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
