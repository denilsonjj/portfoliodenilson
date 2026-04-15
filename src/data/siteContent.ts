const runtimeOrigin = typeof window !== "undefined" ? window.location.origin : "";
const configuredOrigin = (import.meta.env.VITE_SITE_URL ?? "").trim();
const siteUrl = (configuredOrigin || runtimeOrigin).replace(/\/+$/, "");

export const siteContent = {
  seo: {
    title: "Denilson Junior | Sistemas, Dashboards e Automação",
    description:
      "Desenvolvo sistemas sob medida, dashboards executivos e automação de processos para empresas. Atendimento remoto e possibilidade de visitas na Grande Recife.",
    siteUrl,
    canonicalPath: "/",
    ogImagePath: "/placeholder.svg",
    instagram: "https://www.instagram.com/denilsonbdev/",
    localServiceLine: "Atendimento remoto e possibilidade de visitas na Grande Recife.",
    serviceDescription: "Desenvolvimento de sistemas, dashboards executivos e automação de processos.",
    areaServed: "Grande Recife",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  brand: {
    name: "Denilson Junior",
    descriptor: "Data + Web Specialist",
  },
  nav: {
    links: [
      { id: "solucoes", label: "Soluções" },
      { id: "cases", label: "Cases" },
      { id: "metodologia", label: "Processo" },
      { id: "faq", label: "FAQ" },
    ],
    cta: { label: "Quero uma proposta", href: "#contato" },
    mobileCta: { label: "Iniciar diagnóstico", href: "#contato" },
  },
  hero: {
    id: "inicio",
    badge: "ENGENHARIA DE ALTO IMPACTO",
    titleLineOne: "Sistemas que respiram",
    titleAccent: "eficiência absoluta",
    description:
      "Transformo desafios de negócio em dashboards, automação e sistemas sob medida para dar visibilidade, reduzir gargalos e acelerar execução.",
    primaryCta: { label: "Iniciar Consultoria", href: "#contato" },
    secondaryCta: { label: "Ver Cases Reais", href: "#cases" },
    visual: {
      panelHeader: "Sistema Operacional Ativo",
      signalTitle: "Sinais operacionais",
      signalState: "Live",
      flowLabel: "Fluxo sincronizado",
      connectorsLabel: "Conectores ativos",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtEzFXS0zLRSkq1N8Bog6mvkesdae238_vNF6vWI_W7ysFx7UsKLsvNWHjCAtKW6B4SrLPwZ4l2qgQCYLZn5lH6VlNLZroBF5o94LiwL9oSEcyQ5Ah-qg4JnSRpb4V9x8CBCeDbjuDbv1JztcvCT98xjXyCbxDkpwsKpKpQ5-Ay3YBOToodKq6FV2CaP7UsxhIsxCJlefsBkxBm-7bN1eYS_0TONzfttQ8XypT7PaVgkGcwjjwywGMyuPE6IyCqmkcwW0d-dACy3o",
    },
    panels: [
      { label: "Visão operacional", value: "Indicadores críticos em tempo real" },
      { label: "Fluxos automatizados", value: "Menos tarefas manuais, mais execução" },
      { label: "Entrega contínua", value: "Evolução técnica com foco em resultado" },
    ],
    systemSignals: [
      { label: "Sincronização", status: "Estável" },
      { label: "Qualidade de dados", status: "Monitorada" },
      { label: "Pipeline", status: "Ativo" },
    ],
  },
  proof: {
    id: "provas",
      items: [
        { value: 30, suffix: "+", label: "Projetos entregues" },
        { value: 30, suffix: "+", label: "Avaliações Positivas e Públicas" },
        { value: 2025, prefix: "Desde ", label: "Atuação Freelancer" },
        { value: 4, suffix: "+", label: "Especializações" },
      ],
    },
  pain: {
    id: "dores",
    badge: "O CUSTO DA INÉRCIA",
    title: "Bottlenecks que matam sua escala operacional.",
    description:
      "Processos manuais, lentidão operacional e falta de visibilidade drenam margem diariamente. O resultado é retrabalho, gargalos invisíveis e execução inconsistente.",
    items: [
      {
        title: "Processos Manuais",
        description: "Capital humano desperdiçado em tarefas repetitivas e suscetíveis a falhas críticas.",
      },
      {
        title: "Lentidão Operacional",
        description: "Decisões tomadas tarde demais para um mercado que exige respostas imediatas.",
      },
      {
        title: "Falta de Visibilidade",
        description: "Sem indicadores confiáveis, a liderança opera sem clareza sobre riscos e desempenho.",
      },
      {
        title: "Retrabalho Contínuo",
        description: "Fluxos desconectados geram retrabalho, desperdício e queda de produtividade.",
      },
      {
        title: "Gargalos Invisíveis",
        description: "Dependências ocultas comprometem a execução e bloqueiam crescimento sustentável.",
      },
    ],
  },
  solutions: {
    id: "solucoes",
    title: "Arquitetura de Soluções",
    subtitle: "Estrutura técnica orientada a negócio para transformar operação em resultado mensurável.",
    cardCtaLabel: "Explorar",
    items: [
      {
        title: "Dashboards Executivos",
        description: "Controle total da operação em uma única visão com indicadores de negócio atualizados.",
        gain: "Visão estratégica com clareza para liderança",
      },
      {
        title: "Automação de Processos",
        description: "Workflows inteligentes que eliminam tarefas manuais e reduzem risco operacional.",
        gain: "Escala com execução consistente",
      },
      {
        title: "Sistemas Customizados",
        description: "Plataformas construídas para o seu contexto real, sem limitações de soluções genéricas.",
        gain: "Vantagem operacional com software sob medida",
      },
      {
        title: "Consultoria de Dados",
        description: "Estratégia analítica aplicada para decisões de negócio com menor incerteza.",
        gain: "Inteligência aplicada à execução",
      },
    ],
  },
  cases: {
    id: "cases",
    title: "Cases Reais de Projeto",
    subtitle:
      "Projetos reais entregues em diferentes contextos operacionais, sem métricas fabricadas e com foco em impacto prático.",
    cardCtaLabel: "Conversar sobre este case",
    labels: {
      context: "Contexto",
      problem: "Problema",
      solution: "Solução",
      stack: "Ferramenta usada",
      impact: "Impacto",
      chips: "Sinais do projeto",
    },
    flagship: {
      badge: "PROJETO EM DESTAQUE",
      title: "Sistema de Avaliação (Casa Autoral)",
      context: "Gestão operacional em ambiente único.",
      problem:
        "As atividades e decisões ficavam espalhadas, sem visão clara do andamento da operação.",
      solution:
        "Foi criado um sistema centralizado para acompanhar tarefas, status e indicadores em um único fluxo de trabalho.",
      stack: "Sistema web sob medida",
      impact:
        "Mais previsibilidade de execução, comunicação mais rápida e controle operacional em tempo real.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYiEM1izlB6iNV5crm_wJTsSh1UQAsy5PSB-WBBJ6EBD3AcOmPIuG67CnE3CZdDuEJhAZ1rBRWmXKdRUMarRUa5gMo9tE_EI4dwp2AT62vE3H6XT2YmlIHghGMXJsF1hew3_5oM9KDNLCeLFbjDbVu7LYQ7m0Nxaqyok0TaeIc4t60jMDrc6n9gwlMgDnQgPe6fLqgXTeyQNNCf3vck0nR-VZFg9q-SS82MdJ5G27fHCZcCTak1OxBJM6DNMc57WTvu0Rp0NzlUko",
      chips: [
        { label: "Escopo", value: "Centralização da operação" },
        { label: "Entrega", value: "Painel e fluxo em um único sistema" },
        { label: "Resultado", value: "Acompanhamento contínuo da equipe" },
      ],
    },
    side: [
      {
        badge: "Projeto Real",
        title: "Dashboard em Excel para Rede de Supermercados",
        context: "Visão consolidada para decisão comercial.",
        problem: "Leitura de desempenho fragmentada em múltiplas planilhas.",
        solution: "Dashboard com visão clara dos indicadores principais para facilitar decisões diárias.",
        stack: "Dashboard gerencial",
        impact: "Mais rapidez na tomada de decisão e alinhamento entre áreas.",
      },
      {
        badge: "Projeto Real",
        title: "Planilha Automatizada para Fábrica (Produção e Envase)",
        context: "Gestão diária de produção, envase, estoque e vendas dentro de uma única planilha.",
        problem:
          "Os lançamentos de produção, envase, estoque e vendas estavam separados, dificultando o controle e atrasando decisões.",
        solution:
          "Planilha automatizada com rotinas de lançamento e dashboard integrado para acompanhar operação e desempenho em tempo real.",
        stack: "Planilha automatizada com dashboard",
        impact: "Processo mais organizado, menos retrabalho e leitura clara da operação para agir com rapidez.",
      },
    ],
  },
  methodology: {
    id: "metodologia",
    badge: "METODOLOGIA APLICADA",
    title: "O Caminho para a Eficiência Absoluta.",
    description:
      "Uma jornada técnica para transformar caos operacional em estrutura de alta performance, com previsibilidade de entrega.",
    visualImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAngDTSzArReLnZBQb7wC8gt26QXfsuvT8DlhpbPVnjAOEss5yN3AwoxNDE4vZ8Bfci_qEVvGpxz_c2tvlZDSG1sg0NbkvL6DujKPNhB9crckazBfMWtzDzTE3_2-s5RudoI1nhYaZ6Q-el8RzIvJOa4g4v3yR7coxpc4fVtsYStAw0sbaUnc5LPcVV0tlggAHzxjQXS9ovF6ogMwqxWfvIkncy8YwON4kc1FQxQuiBj_oyMcxC6t2AZ7foU3eG375uGhZzhQr5dro",
    steps: [
      {
        title: "Diagnóstico",
        description: "Mapeamento profundo de fluxos, gargalos técnicos e desperdícios de operação.",
      },
      {
        title: "Blueprint",
        description: "Arquitetura da solução, stack recomendada e definição de metas de resultado.",
      },
      {
        title: "Execução",
        description: "Desenvolvimento iterativo com entregas visíveis e validação contínua.",
      },
      {
        title: "Refinamento",
        description: "Otimização de performance, usabilidade e robustez da operação digital.",
      },
      {
        title: "Entrega",
        description: "Onboarding, documentação e suporte para continuidade estratégica.",
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
    title: "Respostas para Estrategistas",
    items: [
      {
        question: "Qual o tempo médio de implementação?",
        answer:
          "Dependendo da complexidade, os projetos variam entre 4 e 12 semanas. Nas primeiras semanas, já entregamos uma camada funcional para validação.",
      },
      {
        question: "Vocês trabalham com stacks específicas?",
        answer:
          "Escolhemos a stack ideal para seu contexto de negócio, priorizando confiabilidade, escalabilidade e governança técnica.",
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
    titleAccent: "Precisa de estrutura e execução.",
    description:
      "Agende uma análise estratégica e descubra onde sua operação está perdendo velocidade, margem e capacidade de decisão.",
    reassurance: [
      "Resposta técnica em até 24h",
      "Atendimento direto",
      "Conversa objetiva e estratégica",
    ],
    form: {
      nameLabel: "Nome",
      emailLabel: "E-mail corporativo",
      challengeLabel: "Desafio principal",
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "nome@empresa.com",
      challengePlaceholder: "Descreva o principal gargalo da sua operação",
      submit: "Solicitar Diagnóstico Técnico",
      helper: "Sem compromisso inicial. Retorno técnico e objetivo.",
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
        "https://wa.me/5581973319128?text=Olá! Quero conversar sobre estrutura, automação e clareza operacional.",
      instagram: "https://www.instagram.com/denilsonbdev/",
    },
  },
  footer: {
    note: "Soluções reais em dados, automação e sistemas para operações que precisam de clareza e execução.",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Instagram", href: "https://www.instagram.com/denilsonbdev/" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;

