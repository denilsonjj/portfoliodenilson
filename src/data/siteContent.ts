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
    ogImagePath: "/placeholder.svg",
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
        { value: 50, suffix: "+", label: "Projetos entregues" },
        { value: 30, suffix: "+", label: "Avaliações Positivas e Públicas" },
        { value: 2025, prefix: "Desde ", label: "Atuação Freelancer", useGrouping: false },
        { value: 4, suffix: "+", label: "Especializações" },
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
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Instagram", href: "https://www.instagram.com/dsolucoes/" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;

