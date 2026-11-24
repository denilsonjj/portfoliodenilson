import type { ServiceId } from "./portfolio";

export const servicesCatalogSeo = {
  title: "Criação de sites e lojas virtuais em Recife | Denilson Junior",
  description: "Criação de sites, lojas virtuais e landing pages em Recife, Olinda, Paulista, Abreu e Lima e Igarassu. Veja pacotes e peça um orçamento.",
};

type ServicePageContent = {
  slug: string;
  title: string;
  description: string;
  lead: string;
  situations: readonly { title: string; description: string }[];
  projectSlugs: readonly string[];
  questions: readonly { question: string; answer: string }[];
  briefing: string;
};

export const servicePages: Record<ServiceId, ServicePageContent> = {
  sistemas: {
    slug: "sistemas-sob-medida-recife",
    title: "Desenvolvimento de sistemas sob medida em Recife",
    description: "Sistemas web e ferramentas de gestão sob medida em Recife e atendimento remoto. Veja projetos para assistência técnica, finanças e modernização de protótipos.",
    lead: "Transformo regras da sua operação em um sistema que a equipe consegue usar no dia a dia. Atendo presencialmente na Grande Recife e conduzo projetos online em todo o Brasil.",
    situations: [
      { title: "O processo já tem regras próprias", description: "Vale mapear quem usa o sistema, quais informações cada pessoa precisa consultar e quais tarefas dependem de aprovação ou validação." },
      { title: "O protótipo precisa evoluir", description: "Avalio telas, dados e regras existentes para definir o que pode ser mantido e quais partes precisam ser reestruturadas antes de ampliar o uso." },
      { title: "A gestão depende de várias ferramentas", description: "O escopo pode incluir cadastros, integrações ou uma ferramenta de gestão em planilha, conforme o volume e a rotina da equipe." },
    ],
    projectSlugs: ["sistema-assistencia-tecnica", "sistema-financeiro-google-sheets", "sistema-web"],
    questions: [
      { question: "Quando compensa migrar da planilha para um sistema web?", answer: "Quando muitas pessoas precisam editar ao mesmo tempo, permissões ficam difíceis de controlar ou erros em fórmulas colocam a operação em risco, vale avaliar a migração. Se a rotina ainda é enxuta, a própria planilha pode ser uma boa base." },
      { question: "Dá para aproveitar o sistema que já existe?", answer: "Sim. Começo avaliando o que está em uso, como os dados são armazenados e onde aparecem os gargalos. A proposta define as partes que serão reaproveitadas e as que precisam de evolução." },
    ],
    briefing: "Conte quem vai usar o sistema, o que cada pessoa precisa fazer e como esse processo funciona hoje.",
  },
  dashboards: {
    slug: "dashboards-power-bi-looker-studio",
    title: "Dashboards em Power BI e Looker Studio",
    description: "Desenvolvimento de dashboards em Power BI, Looker Studio e Excel para acompanhar vendas, estoque e outros indicadores. Atendimento em Recife e online.",
    lead: "Desenvolvo painéis para acompanhar resultados por período, unidade ou área. O projeto começa pelas decisões que o painel precisa apoiar e pelas fontes de dados que você já tem.",
    situations: [
      { title: "O fechamento consome horas", description: "Mapeio as planilhas e relatórios usados no fechamento para entender quais dados precisam ser consolidados e quais totais precisam ser conferidos." },
      { title: "Cada equipe acompanha um número diferente", description: "Definimos como cada indicador é calculado e quais filtros fazem sentido para quem acompanha vendas, estoque ou desempenho." },
      { title: "O painel precisa caber na rotina da equipe", description: "A escolha entre Power BI, Looker Studio ou Excel considera as fontes, o acesso de quem vai consultar e a frequência de atualização." },
    ],
    projectSlugs: ["dashboards-revenda-ambev", "dashboards-looker-studio", "dashboard-vendas-power-bi"],
    questions: [
      { question: "Posso começar com os dados que já tenho no Excel?", answer: "Sim. Uma amostra sem dados sensíveis ajuda a identificar colunas, períodos e problemas de qualidade. Esse diagnóstico orienta o trabalho de preparação e o escopo do painel." },
      { question: "Como o dashboard será atualizado?", answer: "Isso depende de onde os dados estão, das permissões de acesso e da frequência necessária. Defino com você se a atualização será feita por arquivo, conexão ou integração." },
    ],
    briefing: "Envie o objetivo do painel, os indicadores que você quer acompanhar e onde esses dados estão hoje.",
  },
  automacoes: {
    slug: "automacao-google-sheets-apps-script",
    title: "Automação de planilhas no Google Sheets com Apps Script",
    description: "Automação de planilhas para empresas em Recife e online. Desenvolvo rotinas em Google Sheets e Apps Script para RH, envio de e-mails e gestão.",
    lead: "Transformo planilhas que a equipe já usa em ferramentas que executam rotinas repetitivas, como preparar comunicações ou manter um planner atualizado. Também avalio projetos em Excel quando a operação já usa essa ferramenta.",
    situations: [
      { title: "A planilha dispara uma ação recorrente", description: "Mapeio quais registros pedem uma ação, quem precisa receber a informação e em que momento ela deve acontecer." },
      { title: "O time usa a mesma planilha todos os dias", description: "Estruturo o arquivo para facilitar manutenção e combino quais campos o time edita e quais tarefas fazem sentido automatizar." },
      { title: "A automação precisa conviver com exceções", description: "Antes de ativar a rotina, defino com você como tratar registros incompletos, exceções e conferências manuais." },
    ],
    projectSlugs: ["planner-rh-apps-script", "automacao-emails-vagas", "sistema-financeiro-google-sheets"],
    questions: [
      { question: "Preciso refazer toda a planilha?", answer: "Primeiro avalio a estrutura que já existe. Se os dados e as regras estiverem claros, dá para automatizar uma parte do fluxo e validar o resultado com a equipe antes de ampliar." },
      { question: "Dá para enviar e-mails a partir de uma planilha?", answer: "Dá. O projeto define os registros elegíveis, os destinatários, o modelo da mensagem e o momento de envio. A validação pode começar com dados de teste antes de usar a lista real." },
    ],
    briefing: "Descreva a tarefa repetida, quem usa a planilha e o que deve acontecer quando um registro é incluído ou atualizado.",
  },
};

export const servicePath = (id: ServiceId) => `/servicos/${servicePages[id].slug}`;

export const serviceSeo = (id: ServiceId) => ({
  title: `${servicePages[id].title} | Denilson Junior`,
  description: servicePages[id].description,
});
