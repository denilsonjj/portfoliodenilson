import { siteContent } from "./siteContent";

export const portfolioSeo = {
  title: "Sistemas, dashboards e automação em Recife | Denilson Junior",
  description: "Denilson Junior desenvolve sistemas, dashboards e automações na Grande Recife. Veja projetos entregues para RH, logística, gestão financeira e vendas.",
};

export const services = [
  { id: "sistemas", title: "Sistemas sob medida", description: "Cadastros, permissões e rotinas reunidos em um sistema que acompanha o jeito da sua empresa trabalhar." },
  { id: "dashboards", title: "Dashboards e dados", description: "Indicadores de vendas, estoque ou finanças em um painel que facilita a leitura e a comparação." },
  { id: "automacoes", title: "Automação de processos", description: "Integrações e rotinas que reduzem a digitação repetitiva e mantêm suas ferramentas sincronizadas." },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const webService = {
  id: "sites",
  title: "Sites e lojas virtuais",
  description: "Sites institucionais, landing pages e lojas virtuais para apresentar sua empresa, captar contatos ou vender online.",
  href: "/servicos#catalogo",
} as const;

export const contactInterests = [
  ...services,
  { id: "agentes-ia", title: "Agentes de IA" },
  webService,
] as const;

export type ContactInterestId = (typeof contactInterests)[number]["id"];

export const budgetOptions = [
  "Até R$ 400",
  "R$ 400 a R$ 700",
  "R$ 700 a R$ 1.500",
  "R$ 1.500 a R$ 3.000",
  "Acima de R$ 3.000",
  "Ainda não defini",
] as const;

type ProjectVisual = "finance" | "sales" | "logistics" | "planner" | "email" | "support" | "recruiting" | "system" | "labels";

export type Project = {
  slug: string;
  service: ServiceId;
  category: string;
  title: string;
  searchTitle?: string;
  summary: string;
  stack: readonly string[];
  visual: ProjectVisual;
  challenge: string;
  solution: string;
  result?: string;
  review?: { quote: string; rating: number };
};

export const featuredProjects: readonly Project[] = [
  {
    slug: "sistema-financeiro-google-sheets",
    service: "sistemas",
    category: "Gestão financeira",
    title: "Sistema financeiro gerencial no Google Sheets",
    summary: "Uma solução de gestão financeira construída em Google Sheets para acompanhar a operação em uma ferramenta familiar.",
    stack: ["Google Sheets"],
    visual: "finance",
    challenge: "Organizar o acompanhamento financeiro em uma ferramenta que pudesse fazer parte da rotina de gestão.",
    solution: "Desenvolvimento de um sistema financeiro gerencial em Google Sheets.",
  },
  {
    slug: "dashboards-revenda-ambev",
    service: "dashboards",
    category: "Gestão logística",
    title: "Dashboard de gestão logística",
    searchTitle: "Dashboard de logística para revenda Ambev",
    summary: "Painel de indicadores logísticos desenvolvido para acompanhar a operação de uma revenda Ambev.",
    stack: [],
    visual: "logistics",
    challenge: "Dar à equipe da revenda uma visão dos indicadores usados no acompanhamento da operação logística.",
    solution: "Desenvolvimento de um dashboard de gestão logística para a rotina de acompanhamento da revenda Ambev.",
  },
  {
    slug: "planner-rh-apps-script",
    service: "automacoes",
    category: "Automação de RH",
    title: "Planner de RH com Apps Script",
    summary: "Planner de RH entregue como planilha automatizada no Google Sheets com Apps Script.",
    stack: ["Google Sheets", "Apps Script"],
    visual: "planner",
    challenge: "Estruturar o planejamento de RH em uma planilha que pudesse incorporar automações à rotina.",
    solution: "Criação de um planner em Google Sheets com automações implementadas em Apps Script.",
  },
  {
    slug: "automacao-emails-vagas",
    service: "automacoes",
    category: "Automação de processos",
    title: "Automação de envio de e-mails baseada em dados",
    searchTitle: "Automação de envio de e-mails a partir de planilha",
    summary: "Fluxo de envio de e-mails que usa os registros de uma planilha como fonte de dados.",
    stack: [],
    visual: "email",
    challenge: "Usar os dados de uma planilha para acionar comunicações por e-mail. Neste projeto, a fonte era uma planilha de vagas.",
    solution: "Implementação de um fluxo que lê os registros e automatiza o envio dos e-mails correspondentes.",
  },
  {
    slug: "sistema-assistencia-tecnica",
    service: "sistemas",
    category: "Sistema sob medida",
    title: "Sistema para assistência técnica",
    summary: "Sistema sob medida para a operação de assistência técnica, com ajustes conforme as solicitações do cliente.",
    stack: [],
    visual: "support",
    challenge: "Atender às necessidades específicas da assistência técnica com uma solução adaptada à operação.",
    solution: "Desenvolvimento do sistema e implementação dos ajustes solicitados durante o projeto.",
    review: { quote: "Atendeu todas as expectativas, foi atencioso e fez todas as mudanças solicitadas", rating: 5 },
  },
  {
    slug: "dashboards-looker-studio",
    service: "dashboards",
    category: "Indicadores de RH",
    title: "Dashboard de recrutamento e seleção",
    searchTitle: "Dashboard de recrutamento e seleção em Looker Studio",
    summary: "Painéis em Looker Studio para acompanhar o funil de contratação, da triagem à contratação final, com métricas de SLA e geolocalização.",
    stack: ["Looker Studio"],
    visual: "recruiting",
    challenge: "Dar ao RH visibilidade sobre o andamento dos candidatos e os prazos de cada etapa, da triagem à contratação.",
    solution: "Desenvolvimento de painéis no Looker Studio que reúnem o funil de seleção, métricas de SLA e a distribuição geográfica dos candidatos.",
    review: { quote: "entendeu minha necessidade extremamente rápido, sem precisar de muitas explicações, me entregou no prazo", rating: 5 },
  },
];

export const pastProjects: readonly Project[] = [
  {
    ...siteContent.cases.items[0],
    slug: "sistema-web",
    service: "sistemas",
    category: "Sistema web",
    title: "De protótipo a sistema web",
    summary: "Migração para React e Supabase com telas, regras e dados organizados para o uso diário.",
    stack: ["React", "Supabase"],
    visual: "system",
  },
  {
    ...siteContent.cases.items[1],
    slug: "etiquetas-medicas",
    service: "automacoes",
    category: "Automação",
    title: "Emissão de etiquetas médicas",
    summary: "Cadastro e emissão de etiquetas reunidos em um fluxo padronizado em Python.",
    stack: ["Python"],
    visual: "labels",
  },
  {
    ...siteContent.cases.items[2],
    slug: "dashboard-supermercados",
    service: "dashboards",
    category: "Dashboard",
    title: "Indicadores para supermercados",
    summary: "Um painel em Excel para comparar resultados que antes estavam espalhados em planilhas.",
    stack: ["Excel"],
    visual: "sales",
  },
  {
    slug: "financeiro-escritorio-advocacia",
    service: "sistemas",
    category: "Gestão financeira",
    title: "Solução financeira para escritório de advocacia",
    summary: "Ferramenta de gestão desenvolvida para organizar a rotina financeira de um escritório de advocacia.",
    stack: [],
    visual: "finance",
    challenge: "Resolver um gargalo na gestão financeira do escritório.",
    solution: "Desenvolvimento de uma ferramenta de gestão financeira para a rotina do escritório.",
    review: { quote: "Resolveu meu gargalo em relação a gestão financeira com o aplicativo/planilha desenvolvida por ele.", rating: 5 },
  },
  {
    slug: "dashboard-vendas-power-bi",
    service: "dashboards",
    category: "Business intelligence",
    title: "Dashboard de vendas em Power BI",
    summary: "Painel de vendas desenvolvido em Power BI para uma demanda com prazo urgente.",
    stack: ["Power BI"],
    visual: "sales",
    challenge: "Montar um painel de vendas em Power BI com prazo curto para a entrega.",
    solution: "Desenvolvimento de um dashboard em Power BI para consulta dos indicadores de vendas.",
    review: { quote: "Gostei demais.", rating: 5 },
  },
];

export const projects = [...featuredProjects, ...pastProjects];

export const projectLabel = ({ category, stack }: Project) => [category, stack.join(" + ")].filter(Boolean).join(" · ");

export const projectPath = (project: Project) => `/projetos/${project.slug}`;

export const projectSeo = (project: Project) => ({
  title: `${project.searchTitle ?? project.title} | Denilson Junior`,
  description: project.summary,
});
