const runtimeOrigin = typeof window !== "undefined" ? window.location.origin : "";
const configuredOrigin = (import.meta.env.VITE_SITE_URL ?? "").trim();
const siteUrl = (configuredOrigin || runtimeOrigin || "https://denilsonjr.com.br").replace(/\/+$/, "");

export const siteContent = {
  seo: {
    title: "Denilson Junior | Sistemas, Dashboards e Automação",
    description:
      "Desenvolvo sistemas sob medida, dashboards executivos e automação para empresas em Recife, Olinda, Paulista, Abreu e Lima e Igarassu.",
    siteUrl,
    canonicalPath: "/",
    ogImagePath: "/og-denilson.jpg",
    instagram: "https://www.instagram.com/dsolucoes/",
    localServiceLine: "Atendimento remoto e visitas em Recife, Olinda, Paulista, Abreu e Lima e Igarassu.",
    serviceDescription:
      "Desenvolvimento de sistemas, dashboards executivos, planilhas inteligentes e automação de processos para empresas na Grande Recife.",
    areaServed: ["Recife", "Olinda", "Paulista", "Abreu e Lima", "Igarassu", "Grande Recife"],
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  brand: {
    name: "Denilson Junior",
    descriptor: "Sistemas, Dados e Automação",
  },
  nav: {
    links: [
      { id: "solucoes", label: "Soluções" },
      { id: "cases", label: "Cases" },
      { id: "servicos", label: "Pacotes", href: "/servicos" },
      { id: "metodologia", label: "Processo" },
      { id: "faq", label: "FAQ" },
    ],
    cta: { label: "Quero uma proposta", href: "#contato" },
    mobileCta: { label: "Falar sobre meu projeto", href: "#contato" },
  },
  hero: {
    id: "inicio",
    badge: "TECNOLOGIA PARA EMPRESAS",
    titleLineOne: "Sistemas que tornam seu negócio",
    titleAccent: "mais simples e eficiente",
    description:
      "Crio sistemas, painéis e automações sob medida para organizar processos, reduzir tarefas manuais e facilitar decisões.",
    primaryCta: { label: "Conversar sobre um projeto", href: "#contato" },
    secondaryCta: { label: "Ver soluções", href: "#solucoes" },
    visual: {
      panelHeader: "Sistema funcionando",
      signalTitle: "Acompanhamento",
      signalState: "Ativo",
      flowLabel: "Processos conectados",
      connectorsLabel: "Integrações ativas",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtEzFXS0zLRSkq1N8Bog6mvkesdae238_vNF6vWI_W7ysFx7UsKLsvNWHjCAtKW6B4SrLPwZ4l2qgQCYLZn5lH6VlNLZroBF5o94LiwL9oSEcyQ5Ah-qg4JnSRpb4V9x8CBCeDbjuDbv1JztcvCT98xjXyCbxDkpwsKpKpQ5-Ay3YBOToodKq6FV2CaP7UsxhIsxCJlefsBkxBm-7bN1eYS_0TONzfttQ8XypT7PaVgkGcwjjwywGMyuPE6IyCqmkcwW0d-dACy3o",
    },
    panels: [
      { label: "Visão do negócio", value: "Informações importantes em um só lugar" },
      { label: "Processos automáticos", value: "Menos tarefas manuais e retrabalho" },
      { label: "Melhoria contínua", value: "Soluções que evoluem com sua empresa" },
    ],
    systemSignals: [
      { label: "Dados atualizados", status: "Estável" },
      { label: "Qualidade das informações", status: "Acompanhada" },
      { label: "Funcionamento", status: "Ativo" },
    ],
  },
  proof: {
    id: "provas",
      items: [
        { value: 50, prefix: "", suffix: "+", decimals: 0, label: "Projetos entregues", useGrouping: true, animate: true },
        { value: 30, prefix: "", suffix: "+", decimals: 0, label: "Avaliações Positivas e Públicas", useGrouping: true, animate: true },
        { value: 2025, prefix: "Desde ", suffix: "", decimals: 0, label: "Atuação Freelancer", useGrouping: false, animate: false },
        { value: 4, prefix: "", suffix: "+", decimals: 0, label: "Especializações", useGrouping: true, animate: true },
      ],
    },
  pain: {
    id: "dores",
    badge: "PROBLEMAS QUE ATRASAM SUA EMPRESA",
    title: "O que está impedindo seu negócio de avançar?",
    description:
      "Tarefas manuais, informações espalhadas e falta de controle consomem tempo e dinheiro. O resultado é retrabalho, atrasos e decisões sem segurança.",
    items: [
      {
        title: "Tarefas Manuais",
        description: "Sua equipe perde tempo repetindo atividades que poderiam ser automáticas.",
      },
      {
        title: "Processos Demorados",
        description: "A demora para encontrar informações atrasa decisões e entregas.",
      },
      {
        title: "Falta de Controle",
        description: "Sem informações confiáveis, fica difícil saber o que está funcionando e o que precisa melhorar.",
      },
      {
        title: "Retrabalho",
        description: "Ferramentas e informações desconectadas fazem a equipe executar a mesma tarefa mais de uma vez.",
      },
      {
        title: "Problemas Difíceis de Identificar",
        description: "A falta de acompanhamento esconde falhas que prejudicam o crescimento da empresa.",
      },
    ],
  },
  solutions: {
    id: "solucoes",
    title: "Soluções para facilitar o dia a dia",
    subtitle: "Tecnologia feita para organizar sua empresa, economizar tempo e melhorar resultados.",
    cardCtaLabel: "Conhecer",
    items: [
      {
        title: "Painéis de Controle",
        description: "Acompanhe os principais números da empresa em uma tela simples e atualizada.",
        gain: "Mais clareza para tomar decisões",
      },
      {
        title: "Automação de Processos",
        description: "Automatize tarefas repetitivas para reduzir erros, atrasos e trabalho manual.",
        gain: "Mais produtividade e menos retrabalho",
      },
      {
        title: "Sistemas Sob Medida",
        description: "Sistemas criados de acordo com as necessidades e a rotina da sua empresa.",
        gain: "Uma solução que realmente combina com seu negócio",
      },
      {
        title: "Organização e Análise de Dados",
        description: "Organize informações importantes e transforme dados em respostas úteis para a empresa.",
        gain: "Decisões mais rápidas e seguras",
      },
    ],
  },
  cases: {
    id: "cases",
    badge: "PROJETOS REAIS",
    title: "Problemas reais transformados em soluções práticas.",
    description:
      "Alguns exemplos de entregas realizadas para organizar operações, automatizar rotinas e facilitar decisões — com escopo adaptado à realidade de cada cliente.",
    items: [
      {
        title: "Aplicação React + Supabase",
        challenge: "Transformar um protótipo em um produto estável, com dados organizados e estrutura pronta para evoluir.",
        solution: "Migração do fluxo para React e Supabase, com organização das telas, dados e regras do produto.",
        result: "Base funcional e escalável, pronta para uso real e novas funcionalidades.",
      },
      {
        title: "Etiquetas médicas em Python",
        challenge: "Substituir um processo manual e disperso de cadastro e geração de etiquetas.",
        solution: "Sistema em Python para cadastrar, atualizar e emitir etiquetas com um fluxo simples e padronizado.",
        result: "Mais consistência operacional e controle do ciclo de etiquetagem.",
      },
      {
        title: "Dashboard para supermercados",
        challenge: "Consolidar indicadores que estavam espalhados em diferentes planilhas.",
        solution: "Painel em Excel com leitura rápida, comparação de resultados e visão dos indicadores principais.",
        result: "Informações mais claras para apoiar decisões comerciais no dia a dia.",
      },
    ],
  },
  methodology: {
    id: "metodologia",
    badge: "COMO O PROJETO FUNCIONA",
    title: "Um processo claro do início à entrega.",
    description:
      "Cada etapa é conduzida com comunicação simples, validação e foco no problema que sua empresa precisa resolver.",
    visualImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAngDTSzArReLnZBQb7wC8gt26QXfsuvT8DlhpbPVnjAOEss5yN3AwoxNDE4vZ8Bfci_qEVvGpxz_c2tvlZDSG1sg0NbkvL6DujKPNhB9crckazBfMWtzDzTE3_2-s5RudoI1nhYaZ6Q-el8RzIvJOa4g4v3yR7coxpc4fVtsYStAw0sbaUnc5LPcVV0tlggAHzxjQXS9ovF6ogMwqxWfvIkncy8YwON4kc1FQxQuiBj_oyMcxC6t2AZ7foU3eG375uGhZzhQr5dro",
    steps: [
      {
        title: "Entendimento",
        description: "Entendimento da rotina, das dificuldades e do resultado que você deseja alcançar.",
      },
      {
        title: "Planejamento",
        description: "Definição da solução, das ferramentas, do prazo e das prioridades do projeto.",
      },
      {
        title: "Execução",
        description: "Desenvolvimento da solução com acompanhamento e validações durante o trabalho.",
      },
      {
        title: "Ajustes",
        description: "Melhorias de velocidade, facilidade de uso e funcionamento antes da entrega.",
      },
      {
        title: "Entrega",
        description: "Orientação de uso, documentação e suporte para começar com segurança.",
      },
    ],
  },
  productEvolution: {
    id: "comandativa",
    sprint: "CICLO 07",
    projectName: "Comandativa",
    status: "Ao vivo",
    deliveryLabel: "Fase atual",
    deliveryTitle: "Preparação para operação real",
    progressLabel: "4 / 6 marcos principais",
    progress: 67,
    milestones: [
      {
        title: "Fundação segura do SaaS e design system",
        status: "done",
        source: "Build secure product foundation and design system",
        url: "https://github.com/denilsonjj/rotamesa/commit/0a54ea6a749e49a52f72c62d4458960e2721b466",
      },
      {
        title: "Fluxos locais, comandas e operação offline",
        status: "done",
        source: "Complete local SaaS product flows",
        url: "https://github.com/denilsonjj/rotamesa/commit/5b592b037c6f85a450a7f0584773179c183c0e0e",
      },
      {
        title: "Pagamentos, assinaturas e notificações",
        status: "done",
        source: "Implement production payment and notification flows",
        url: "https://github.com/denilsonjj/rotamesa/commit/53662929f418ca48a33f3de1dbb108ed5c586bb8",
      },
      {
        title: "Hardening de webhooks, tokens e produção",
        status: "done",
        source: "Harden Mercado Pago token refresh and webhooks",
        url: "https://github.com/denilsonjj/rotamesa/commit/55c419f99980b2b20d7a27416ef7bee7251d8504",
      },
      {
        title: "Deploy Cloudflare Workers e build de produção",
        status: "active",
        source: "Add Cloudflare Workers configuration",
        url: "https://github.com/denilsonjj/rotamesa/commit/034d2e9f00573ec5ab5b01c1d2a07f539beabd97",
      },
      {
        title: "Responsividade, tema claro e dashboards operacionais",
        status: "active",
        source: "Fix table sales dashboard and light theme",
        url: "https://github.com/denilsonjj/rotamesa/commit/3ae9e993c46e0093d21c05f26a7e92e60309c3a4",
      },
    ],
  },
  testimonial: {
    main: {
      quote:
        "Entrega muito acima da expectativa, com comunicação clara durante todo o projeto e uma solução funcional que resolveu nosso problema real.",
      person: "Cliente de projeto entregue",
      role: "Avaliação pública em plataforma freelance",
    },
    supporting: [
      {
        quote:
          "Profissional extremamente técnico e comprometido. O projeto ficou organizado, estável e fácil de evoluir.",
        person: "Cliente - Migração React + Supabase",
      },
      {
        quote:
          "Atendimento direto, prazo cumprido e solução prática para a operação. Trabalho recomendado.",
        person: "Cliente - Sistema Financeiro",
      },
    ],
  },
  faq: {
    id: "faq",
    title: "Dúvidas frequentes",
    items: [
      {
        question: "Qual o tempo médio de implementação?",
        answer:
          "Dependendo da complexidade, os projetos variam entre 4 e 12 semanas. Nas primeiras semanas, já entregamos uma camada funcional para validação.",
      },
      {
        question: "Quais tecnologias você utiliza?",
        answer:
          "Escolho as ferramentas mais adequadas para cada projeto, considerando segurança, facilidade de manutenção e possibilidade de crescimento.",
      },
      {
        question: "Existe suporte após a entrega?",
        answer:
          "Sim. Oferecemos suporte contínuo, ajustes evolutivos e monitoramento para garantir estabilidade e evolução da operação.",
      },
    ],
  },
  contact: {
    id: "contato",
    titleLineOne: "Seu negócio não precisa de mais complexidade.",
    titleAccent: "Precisa de organização e soluções práticas.",
    description:
      "Conte o que sua empresa precisa e descubra como um sistema, painel ou automação pode facilitar sua rotina.",
    reassurance: [
      "Resposta técnica em até 24h",
      "Atendimento direto",
      "Conversa clara e objetiva",
    ],
    form: {
      nameLabel: "Nome",
      emailLabel: "E-mail corporativo",
      challengeLabel: "Desafio principal",
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "nome@empresa.com",
      challengePlaceholder: "Descreva o principal problema ou necessidade da sua empresa",
      submit: "Conversar sobre meu projeto",
      helper: "Sem compromisso. Retorno claro e objetivo.",
      loading: "Enviando solicitação...",
      successTitle: "Solicitação recebida",
      successMessage: "Resposta técnica enviada em até 24h úteis.",
      errorRequired: "Preencha nome, e-mail corporativo e desafio principal.",
      errorEmail: "Informe um e-mail corporativo válido.",
      errorSend: "Não foi possível enviar agora. Use um canal direto abaixo.",
    },
    channels: {
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      email: "juniordenilson363@gmail.com",
      phone: "+55 81 97331-9128",
      whatsapp:
        "https://wa.me/5581973319128?text=Olá! Quero conversar sobre um serviço ou projeto.",
      instagram: "https://www.instagram.com/dsolucoes/",
    },
  },
  footer: {
    note: "Soluções em dados, automação e sistemas para empresas que precisam de mais organização e produtividade.",
    links: [
      { label: "Privacidade", href: "/privacidade" },
      { label: "Termos", href: "/termos" },
      { label: "Cookies", href: "/cookies" },
      { label: "Instagram", href: "https://www.instagram.com/dsolucoes/" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;

