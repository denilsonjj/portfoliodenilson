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
    title: "Migracao de App para React + Supabase",
    year: "2026",
    summary: "Evolucao de um app prototipado no Google AI Studio para uma aplicacao real e escalavel.",
    impact: "Entrega elogiada pela agilidade, suporte no pos-projeto e facilidade de negociacao.",
    stack: ["React", "Supabase", "TypeScript", "UX"],
    caseStudy: {
      title: "Migracao de App para React + Supabase",
      description: "Transicao de prototipo para produto funcional em stack moderna",
      challenge:
        "O app inicial em Google AI Studio precisava virar um produto real, com banco de dados, autenticacao e estrutura de manutencao.",
      solution:
        "Migrei o fluxo para React + Supabase, organizando telas, dados e logica de negocio para garantir estabilidade e evolucao continua.",
      results: [
        "Aplicacao pronta para uso real",
        "Base tecnica escalavel para novas features",
        "Suporte ao cliente mesmo apos entrega",
      ],
      technologies: ["React", "Supabase", "TypeScript", "Modelagem de dados"],
    },
  },
  {
    title: "CRUD em Python para Geracao de Etiquetas",
    year: "2026",
    summary: "Sistema de cadastro e geracao de etiquetas para operacao com padrao e consistencia.",
    impact: "Projeto elogiado por organizacao e qualidade tecnica da entrega.",
    stack: ["Python", "CRUD", "Automacao"],
    caseStudy: {
      title: "CRUD de Etiquetas",
      description: "Aplicacao para padronizar geracao e controle de etiquetas",
      challenge:
        "O cliente precisava controlar dados de etiquetas sem depender de processos manuais dispersos.",
      solution:
        "Foi desenvolvido um CRUD em Python para cadastro, atualizacao e emissao de etiquetas com fluxo simples e seguro.",
      results: [
        "Padronizacao operacional no cadastro",
        "Melhor controle do ciclo de etiquetagem",
        "Entrega reconhecida por competencia e organizacao",
      ],
      technologies: ["Python", "CRUD", "Gestao de dados"],
    },
  },
  {
    title: "Dashboard em Excel para Rede de Supermercados",
    year: "2026",
    summary: "Painel de acompanhamento com foco em leitura rapida para apoiar decisoes comerciais.",
    impact: "Cliente destacou entrega acima da expectativa e alto valor percebido.",
    stack: ["Excel", "Dashboard", "Indicadores"],
    caseStudy: {
      title: "Dashboard Excel para Supermercados",
      description: "Consolidacao de indicadores para tomada de decisao comercial",
      challenge:
        "A operacao precisava de visao consolidada para acompanhar desempenho sem depender de multiplas planilhas.",
      solution:
        "Foi desenvolvido um dashboard em Excel com estrutura de indicadores e visao clara para comparacao de resultados.",
      results: [
        "Decisao mais rapida no dia a dia",
        "Melhor comunicacao entre areas",
        "Entrega avaliada acima do esperado",
      ],
      technologies: ["Excel", "Dashboarding", "KPIs"],
    },
  },
  {
    title: "Sistema Financeiro para Escritorio de Advocacia",
    year: "2026",
    summary: "Solucao para organizar fluxo financeiro e reduzir gargalos de controle.",
    impact: "Projeto recomendado pelo cliente por resolver dor critica de gestao financeira.",
    stack: ["Excel VBA", "Financeiro", "Automacao"],
    caseStudy: {
      title: "Gestao Financeira para Advocacia",
      description: "Sistema para controle e previsibilidade financeira",
      challenge:
        "O escritorio tinha dificuldade para controlar rotina financeira de forma simples e confiavel.",
      solution:
        "Foi criada uma ferramenta personalizada para entrada, consulta e consolidacao de informacoes financeiras.",
      results: [
        "Reducao de gargalos na operacao financeira",
        "Controle mais claro para decisao",
        "Cliente recomendou o trabalho publicamente",
      ],
      technologies: ["Excel VBA", "Automacao", "Processo financeiro"],
    },
  },
  {
    title: "Sistema de Avaliacao (Case autoral)",
    year: "2025",
    summary: "Plataforma full-stack com board de atividades e visao operacional para fabrica.",
    impact: "Centralizou tarefas, melhorou acompanhamento e acelerou comunicacao entre equipes.",
    stack: ["Node.js", "React", "Dashboard", "Kanban"],
    projectUrl: "https://sistema-de-avalia-o-one.vercel.app/",
    githubUrl: "https://github.com/denilsonjj/sistema-de-avalia-o",
    caseStudy: {
      title: "Sistema de Avaliacao",
      description: "Gestao operacional em ambiente unico",
      challenge:
        "A operacao precisava de um fluxo unico para organizar atividades e acompanhar indicadores sem dependencia de planilhas isoladas.",
      solution:
        "Foi desenvolvido um sistema com board de tarefas e dashboard operacional para leitura rapida e acompanhamento continuo.",
      results: [
        "Mais previsibilidade de execucao",
        "Visibilidade de status em tempo real",
        "Padronizacao do processo operacional",
      ],
      technologies: ["Node.js", "React", "REST API", "Charts"],
    },
  },
];

const CASE_DETAILS_URL = "https://wa.me/5581973319128?text=Oi! Quero ver mais detalhes desse case do portfolio.";
const PROPOSAL_URL = "https://wa.me/5581973319128?text=Ola! Quero conversar sobre um projeto parecido com esses cases.";

const Projects = () => {
  const openWhatsApp = () => {
    openTrackedLink(PROPOSAL_URL, "cta_click", { cta: "projects_bottom_proposal" });
  };

  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projetos recentes</span>
          <h2 className="section-title">Cases reais com foco em impacto, clareza e execucao.</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Proximo passo</p>
            <h3 className="mt-2 text-2xl font-bold">Quer aplicar essa mesma logica no seu negocio?</h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Me passe contexto, objetivo e prazo. Eu retorno com uma proposta pratica e um caminho claro de execucao.
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
