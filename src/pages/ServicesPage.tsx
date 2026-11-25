import { Container } from "@/components/ui/container";
import { GradientButton } from "@/components/ui/gradient-button";
import { FooterSection } from "@/components/sections/FooterSection";
import { SeoHead } from "@/components/seo/SeoHead";
import { budgetOptions, services } from "@/data/portfolio";
import { servicePath, servicesCatalogSeo } from "@/data/servicePages";
import { siteContent } from "@/data/siteContent";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { formatWhatsAppBrief, isLocalWhatsAppPreview, whatsappWithMessage } from "@/lib/whatsapp";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileSpreadsheet,
  Globe2,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";

type ServicePackage = {
  name: string;
  price: string;
  deadline: string;
  summary: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
};

type ServiceCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  selectorCopy: string;
  entryPrice: string;
  accent: string;
  icon: typeof Globe2;
  packages: ServicePackage[];
};

type FormValues = {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  packageName: string;
  budget: string;
  deadline: string;
  brief: string;
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "landing-pages",
    label: "Landing pages",
    title: "Landing pages para validar, vender e captar leads",
    description: "Pacotes claros para quem precisa sair do improviso e colocar uma oferta profissional no ar.",
    selectorCopy: "Oferta no ar com CTA direto",
    entryPrice: "desde R$ 399",
    icon: Globe2,
    accent: "text-cyan-200 bg-cyan-200/10 border-cyan-200/24",
    packages: [
      {
        name: "Essencial",
        price: "A partir de R$ 399",
        deadline: "1 a 3 dias",
        summary: "Página simples com mensagem objetiva e botão de WhatsApp.",
        bestFor: "Profissionais que precisam apresentar uma oferta de forma rápida.",
        features: ["Página única responsiva", "Mensagem principal organizada", "Botão direto para WhatsApp", "Publicação em produção"],
      },
      {
        name: "Profissional",
        price: "A partir de R$ 599",
        deadline: "3 a 7 dias",
        summary: "Experiência mais robusta, com estrutura comercial e medição.",
        bestFor: "Negócios que precisam transmitir mais confiança e converter melhor.",
        features: ["Design refinado por seções", "Formulário integrado", "SEO técnico básico", "Analytics e eventos principais"],
        highlighted: true,
      },
      {
        name: "Completa",
        price: "Gerar orçamento",
        deadline: "7 a 14 dias",
        summary: "Landing premium com tecnologia moderna, animações e integrações.",
        bestFor: "Lançamentos, campanhas pagas e ofertas de maior valor.",
        features: ["Animações e microinterações premium", "Captação organizada de contatos", "Domínio .com.br por 1 ano", "Painel simples para acompanhar leads"],
      },
    ],
  },
  {
    id: "sistemas",
    label: "Sistemas",
    title: "Sistemas web para organizar operação e atendimento",
    description: "Do painel interno ao fluxo completo, com escopo controlado e evolução planejada.",
    selectorCopy: "Fluxo, pagamento e área admin",
    entryPrice: "desde R$ 900",
    icon: Code2,
    accent: "text-emerald-200 bg-emerald-200/10 border-emerald-200/24",
    packages: [
      {
        name: "Loja Inicial",
        price: "A partir de R$ 900",
        deadline: "7 a 15 dias",
        summary: "Estrutura inicial para vender, receber pedidos ou apresentar produtos.",
        bestFor: "Lojas pequenas, cardápios, catálogos e pedidos pelo WhatsApp.",
        features: ["Vitrine de produtos ou serviços", "Fluxo de pedido simples", "Botões de contato e pagamento", "Publicação em produção"],
      },
      {
        name: "Loja com Admin",
        price: "A partir de R$ 1.500",
        deadline: "15 a 30 dias",
        summary: "Loja com pagamento, gestão de pedidos e painel para administrar.",
        bestFor: "Negócios que precisam vender com mais controle e autonomia.",
        features: ["Pagamento online", "Painel administrativo", "Gestão de pedidos", "Menu ou catálogo editável"],
        highlighted: true,
      },
      {
        name: "Sob Medida",
        price: "Gerar orçamento",
        deadline: "A definir",
        summary: "Projeto desenhado com diagnóstico, arquitetura e roadmap.",
        bestFor: "Produtos internos, portais e fluxos com regras de negócio específicas.",
        features: ["Mapeamento de requisitos", "Arquitetura de dados", "Integrações externas", "Plano de evolução"],
      },
    ],
  },
  {
    id: "planilhas",
    label: "Planilhas",
    title: "Planilhas inteligentes para controle e decisão diária",
    description: "Estruturas práticas para reduzir retrabalho e deixar a gestão mais clara.",
    selectorCopy: "Controle rápido com clareza",
    entryPrice: "desde R$ 200",
    icon: FileSpreadsheet,
    accent: "text-lime-200 bg-lime-200/10 border-lime-200/24",
    packages: [
      {
        name: "Controle Essencial",
        price: "R$ 200",
        deadline: "2 a 4 dias",
        summary: "Planilha limpa, validada e organizada para controle de rotina.",
        bestFor: "Financeiro simples, estoque, produção ou agenda operacional.",
        features: ["Estrutura de abas", "Validações e listas", "Fórmulas principais", "Orientação de uso"],
      },
      {
        name: "Com Dashboard",
        price: "A partir de R$ 350",
        deadline: "5 a 8 dias",
        summary: "Controle com indicadores visuais para leitura rápida do negócio.",
        bestFor: "Gestores que precisam acompanhar metas, volumes e desempenho.",
        features: ["Dashboard visual", "Indicadores principais", "Filtros e segmentações", "Resumo executivo"],
        highlighted: true,
      },
      {
        name: "Automatizada",
        price: "A partir de R$ 500",
        deadline: "8 a 15 dias",
        summary: "Planilha com automações para diminuir lançamentos manuais.",
        bestFor: "Rotinas repetitivas, consolidação de dados e alertas.",
        features: ["Macros ou Apps Script quando fizer sentido", "Alertas e rotinas", "Importação ou consolidação", "Manual de operação"],
      },
    ],
  },
  {
    id: "dashboards",
    label: "Dashboards",
    title: "Dashboards para enxergar números sem perder tempo",
    description: "Painéis com foco em decisão, não em enfeite: indicador certo, no lugar certo.",
    selectorCopy: "Indicadores sob medida",
    entryPrice: "gerar orçamento",
    icon: BarChart3,
    accent: "text-amber-200 bg-amber-200/10 border-amber-200/24",
    packages: [
      {
        name: "Visão Inicial",
        price: "Gerar orçamento",
        deadline: "4 a 7 dias",
        summary: "Painel objetivo para um conjunto pequeno de indicadores.",
        bestFor: "Negócios que querem começar a acompanhar resultados.",
        features: ["Até uma fonte de dados", "Indicadores principais", "Filtros básicos", "Entrega guiada"],
      },
      {
        name: "Gerencial",
        price: "Gerar orçamento",
        deadline: "8 a 14 dias",
        summary: "Dashboard com leitura executiva, segmentações e narrativa de dados.",
        bestFor: "Gestão comercial, financeira, estoque ou produção.",
        features: ["Modelagem de métricas", "Múltiplas visões", "Filtros avançados", "Checklist de qualidade de dados"],
        highlighted: true,
      },
      {
        name: "Executivo",
        price: "Gerar orçamento",
        deadline: "15 a 25 dias",
        summary: "Painel estratégico com atualização e governança mais fortes.",
        bestFor: "Empresas que dependem de dados confiáveis para rotina decisória.",
        features: ["Integração com bases", "Atualização recorrente", "Camada de validação", "Documentação de indicadores"],
      },
    ],
  },
  {
    id: "automacoes",
    label: "Automações",
    title: "Automações para cortar tarefas repetitivas",
    description: "Fluxos conectando ferramentas, dados e alertas para ganhar velocidade operacional.",
    selectorCopy: "Menos tarefa manual",
    entryPrice: "gerar orçamento",
    icon: Bot,
    accent: "text-rose-200 bg-rose-200/10 border-rose-200/24",
    packages: [
      {
        name: "Fluxo Único",
        price: "Gerar orçamento",
        deadline: "3 a 6 dias",
        summary: "Uma automação bem definida para resolver um gargalo claro.",
        bestFor: "Avisos, cadastros, e-mails, planilhas e atualizações simples.",
        features: ["Mapeamento do fluxo", "Conexão entre ferramentas", "Teste assistido", "Registro do funcionamento"],
      },
      {
        name: "Rotina Automatizada",
        price: "Gerar orçamento",
        deadline: "8 a 14 dias",
        summary: "Conjunto de automações para uma rotina operacional completa.",
        bestFor: "Times que fazem o mesmo trabalho manual todos os dias.",
        features: ["Até três fluxos conectados", "Alertas e logs", "Tratamento de erro", "Treinamento rápido"],
        highlighted: true,
      },
      {
        name: "Operação Integrada",
        price: "Gerar orçamento",
        deadline: "A definir",
        summary: "Automação mais profunda com integrações e regras de negócio.",
        bestFor: "Processos com múltiplas áreas, aprovações e dados sensíveis.",
        features: ["Desenho do fluxo ideal", "Integrações entre ferramentas", "Monitoramento", "Plano de manutenção"],
      },
    ],
  },
];

const deadlineOptions = ["Urgente", "Até 7 dias", "Até 15 dias", "Até 30 dias", "Sem pressa definida"];

const initialValues: FormValues = {
  name: "",
  email: "",
  whatsapp: "",
  service: "",
  packageName: "",
  budget: "",
  deadline: "",
  brief: "",
};

const isValidEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);
const packageBrief = (service: string, packageName: string) => `Tenho interesse no pacote ${packageName} de ${service}.`;

const buildWhatsAppUrl = (values: Pick<FormValues, "service" | "packageName" | "brief">) => {
  const text = [
    "Olá! Quero conversar sobre um serviço ou projeto.",
    `Serviço: ${values.service}`,
    `Pacote: ${values.packageName}`,
    values.brief ? `Contexto: ${values.brief}` : "Pode me ajudar a escolher o melhor pacote?",
  ].join("\n");

  return whatsappWithMessage(text);
};

const ServicesPage = () => {
  const { hash } = useLocation();
  const [activeCategoryId, setActiveCategoryId] = useState(serviceCategories[0].id);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isPreview, setIsPreview] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setIsPreview(isLocalWhatsAppPreview()), []);

  useEffect(() => {
    if (hash === "#catalogo") document.getElementById("catalogo")?.scrollIntoView();
  }, [hash]);

  const activeCategory = useMemo(
    () => serviceCategories.find((category) => category.id === activeCategoryId) ?? serviceCategories[0],
    [activeCategoryId],
  );

  const setField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setError("");
    setPreview("");
  };

  const selectPackage = (category: ServiceCategory, item: ServicePackage) => {
    setError("");
    setPreview("");
    setActiveCategoryId(category.id);
    setValues((current) => ({
      ...current,
      service: category.label,
      packageName: item.name,
      brief: !current.brief || current.brief === packageBrief(current.service, current.packageName)
        ? packageBrief(category.label, item.name)
        : current.brief,
    }));
    trackEvent("service_package_select", { service: category.id, package: item.name });
    document.getElementById("orcamento")?.scrollIntoView({ block: "start" });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isPreview === null) return;

    if (!values.name.trim() || !values.email.trim() || !values.whatsapp.trim() || !values.brief.trim()) {
      setError("Preencha nome, e-mail, WhatsApp e um resumo do projeto.");
      return;
    }

    if (!isValidEmail(values.email.trim())) {
      setError("Informe um e-mail válido.");
      return;
    }

    const message = formatWhatsAppBrief({ ...values, phone: values.whatsapp });
    if (isPreview) {
      setPreview(message);
      return;
    }

    trackEvent("whatsapp_brief_open", { source: "services_page", service: values.service || "unspecified" });
    window.location.assign(whatsappWithMessage(message));
  };

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Pacotes", href: "#catalogo" },
    { label: "Fluxo", href: "#fluxo" },
    { label: "Formulário", href: "#orcamento" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06080d] text-white">
      <SeoHead {...servicesCatalogSeo} canonicalPath="/servicos" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b12]/78 backdrop-blur-2xl">
        <Container>
          <nav className="flex h-20 items-center justify-between" aria-label="Navegação de serviços">
            <Link to="/" className="text-left">
              <p className="font-heading text-[1.35rem] font-semibold text-white">{siteContent.brand.name}</p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Pacotes digitais</p>
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <GradientButton asChild>
                <a href={siteContent.contact.channels.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                  <MessageCircle size={15} />
                </a>
              </GradientButton>
            </div>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-700/70 bg-[#101826]/80 text-slate-100 md:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </Container>

        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-[#070b12]/96 md:hidden">
            <Container className="py-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-sm border border-transparent px-4 py-3 text-sm text-slate-200 hover:border-cyan-200/25 hover:bg-[#0d1522]"
                  >
                    {link.label}
                  </a>
                ))}
                <GradientButton asChild className="mt-3 w-full">
                  <a href={siteContent.contact.channels.whatsapp} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
                    Abrir WhatsApp
                  </a>
                </GradientButton>
              </div>
            </Container>
          </div>
        ) : null}
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden pt-32 md:pt-36" aria-labelledby="services-title">
          <div className="hero-flow absolute inset-0" />
          <div className="hero-mesh absolute inset-0 opacity-35" />
          <Container className="relative z-10 pb-16 md:pb-24">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="services-intro">
                <span className="section-badge">PACOTES DE SERVIÇOS</span>
                <h1 id="services-title" className="headline-xl mt-6 max-w-4xl text-white">
                  Sites, lojas virtuais e sistemas
                  <span className="accent-text block italic">na Grande Recife.</span>
                </h1>
                <p className="muted-copy mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
                  Criação de sites institucionais, landing pages e lojas virtuais, além de sistemas sob medida,
                  dashboards e automação de processos para empresas.
                </p>
                <p className="muted-copy mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                  {siteContent.seo.inPersonServiceLine} {siteContent.seo.remoteServiceLine}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <GradientButton asChild size="large">
                    <a href="#catalogo">
                      Ver pacotes
                      <ArrowRight size={16} />
                    </a>
                  </GradientButton>
                  <GradientButton asChild variant="secondary" size="large">
                    <a href={siteContent.contact.channels.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { source: "services_hero" })}>
                      Pedir orçamento no WhatsApp <MessageCircle size={16} aria-hidden="true" />
                    </a>
                  </GradientButton>
                </div>
                <a className="mt-3 inline-block text-sm font-semibold text-cyan-200 hover:underline" href="#orcamento">Enviar pelo formulário</a>
              </div>

              <aside className="services-intro services-intro-aside solution-card p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200/80">Contratação guiada</p>
                    <h2 className="mt-2 font-heading text-2xl font-semibold text-white">Do interesse à proposta</h2>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cyan-200/20 bg-cyan-200/10 text-cyan-200">
                    <ShieldCheck size={20} />
                  </span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Escolha", "Compare pacotes e encontre um bom ponto de partida"],
                    ["Briefing", "Envie o contexto essencial para análise"],
                    ["Alinhamento", "Tire dúvidas e ajuste detalhes pelo WhatsApp"],
                    ["Proposta", "Receba escopo, prazo e próximos passos"],
                  ].map(([title, detail]) => (
                    <div key={title} className="rounded-sm border border-white/10 bg-[#0b1422]/78 p-4">
                      <p className="font-heading text-base font-semibold text-white">{title}</p>
                      <p className="muted-copy mt-2 text-xs leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section id="catalogo" className="section-wrap surface-base scroll-mt-24" aria-labelledby="catalog-title">
          <Container>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="section-badge">CATÁLOGO</span>
                <h2 id="catalog-title" className="headline-lg mt-4 text-white">Pacotes com ponto de partida claro</h2>
                <p className="muted-copy mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
                  Os valores são faixas iniciais. Confirmo o escopo antes da contratação.
                </p>
              </div>
            </div>

            <ul aria-label="Detalhes dos serviços sob medida" className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-cyan-200">
              {services.map(({ id, title }) => (
                <li key={id}><a className="underline underline-offset-4 hover:text-white" href={servicePath(id)}>{title}</a></li>
              ))}
            </ul>

            <div className="mt-9 rounded-[0.7rem] border border-white/10 bg-[#080f1a]/86 p-2 shadow-[0_24px_70px_-46px_rgba(151,247,255,0.65)]">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {serviceCategories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = activeCategoryId === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategoryId(category.id);
                        setValues((current) => ({
                          ...current,
                          service: category.label,
                          packageName: category.packages.find((item) => item.highlighted)?.name ?? category.packages[0].name,
                        }));
                      }}
                      className={cn(
                        "group relative min-h-[104px] overflow-hidden rounded-[0.55rem] border p-4 text-left transition-all duration-300",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70",
                        isActive
                          ? "border-cyan-200/55 bg-cyan-200 text-slate-950 shadow-[0_0_34px_-18px_rgba(151,247,255,0.95)]"
                          : "border-white/10 bg-[#0b1422]/76 text-slate-200 hover:border-cyan-200/35 hover:bg-[#101a2a]",
                      )}
                      aria-pressed={isActive}
                      aria-controls="catalog-packages"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-0 top-0 h-px transition-opacity duration-300",
                          isActive
                            ? "bg-slate-950/20 opacity-100"
                            : "bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent opacity-0 group-hover:opacity-100",
                        )}
                      />
                      <span className="flex items-start justify-between gap-3">
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-sm border transition",
                            isActive ? "border-slate-950/15 bg-slate-950/10" : category.accent,
                          )}
                        >
                          <Icon size={17} />
                        </span>
                        <span
                          className={cn(
                            "font-heading text-[11px] font-semibold",
                            isActive ? "text-slate-950/50" : "text-slate-500",
                          )}
                        >
                          0{index + 1}
                        </span>
                      </span>
                      <span className="mt-4 block font-heading text-base font-semibold leading-tight">{category.label}</span>
                      <span className={cn("mt-1.5 block text-xs leading-relaxed", isActive ? "text-slate-950/68" : "text-slate-400")}>
                        {category.selectorCopy}
                      </span>
                      <span
                        className={cn(
                          "mt-3 inline-flex rounded-sm px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
                          isActive ? "bg-slate-950/10 text-slate-950" : "bg-white/5 text-cyan-100",
                        )}
                      >
                        {category.entryPrice}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p role="status" className="sr-only">{activeCategory.label} · {activeCategory.packages.length} pacotes</p>
            <div id="catalog-packages" key={activeCategory.id} className="catalog-package-panel mt-10">
              <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className={cn("inline-flex h-11 w-11 items-center justify-center rounded-sm border", activeCategory.accent)}>
                    <activeCategory.icon size={19} />
                  </div>
                  <h3 className="mt-4 font-heading text-3xl font-semibold text-white">{activeCategory.title}</h3>
                  <p className="muted-copy mt-3 max-w-2xl text-sm leading-relaxed">{activeCategory.description}</p>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {activeCategory.packages.map((item, index) => (
                  <article
                    key={item.name}
                    className={cn(
                      "catalog-package-card solution-card relative flex h-full flex-col p-6",
                      item.highlighted && "border-cyan-200/38 shadow-[0_0_38px_-28px_rgba(151,247,255,0.8)]",
                    )}
                    style={{ "--package-order": index } as CSSProperties}
                  >
                    {item.highlighted ? (
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-sm border border-cyan-200/30 bg-cyan-200/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-100">
                        <Sparkles size={12} />
                        Mais indicado
                      </span>
                    ) : null}
                    <div className="pr-20">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Pacote</p>
                      <h4 className="mt-2 font-heading text-2xl font-semibold text-white">{item.name}</h4>
                    </div>
                    <p className="muted-copy mt-4 text-sm leading-relaxed">{item.summary}</p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-sm border border-white/10 bg-[#0b1422]/78 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Investimento</p>
                        <p className="mt-1 text-sm font-semibold text-cyan-100">{item.price}</p>
                      </div>
                      <div className="rounded-sm border border-white/10 bg-[#0b1422]/78 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Prazo</p>
                        <p className="mt-1 text-sm font-semibold text-white">{item.deadline}</p>
                      </div>
                    </div>
                    <div className="mt-5 border-t border-white/10 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/80">Ideal para</p>
                      <p className="muted-copy mt-2 text-sm leading-relaxed">{item.bestFor}</p>
                    </div>
                    <ul className="mt-5 flex-1 space-y-3">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm leading-relaxed text-slate-200">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-200" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 grid gap-3">
                      <GradientButton asChild className="w-full">
                        <a
                          href={buildWhatsAppUrl({
                            service: activeCategory.label,
                            packageName: item.name,
                            brief: packageBrief(activeCategory.label, item.name),
                          })}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => trackEvent("whatsapp_click", { source: "service_package", service: activeCategory.id, package: item.name })}
                        >
                          Pedir orçamento no WhatsApp
                        </a>
                      </GradientButton>
                      <GradientButton variant="secondary" onClick={() => selectPackage(activeCategory, item)} className="w-full">
                        Enviar pelo formulário
                      </GradientButton>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="fluxo" className="section-wrap surface-alt scroll-mt-24" aria-labelledby="flow-title">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-badge">COMO FUNCIONA</span>
              <h2 id="flow-title" className="headline-lg mt-4 text-white">Venda simples, entrega responsável</h2>
              <p className="muted-copy mt-4 text-sm leading-relaxed sm:text-base">
                A página facilita a decisão do cliente, mas o escopo continua passando por validação técnica antes de virar cobrança.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {[
                ["Escolha", "O cliente compara pacotes e identifica o ponto de partida."],
                ["Briefing", "Você envia o contexto do projeto em poucas perguntas objetivas."],
                ["Alinhamento", "A conversa continua no WhatsApp para confirmar escopo, prazo e prioridade."],
                ["Proposta", "Depois do escopo validado, você recebe a melhor forma de contratação."],
              ].map(([title, description], index) => (
                <div key={title} className="method-card p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-cyan-200/20 bg-cyan-200/10 font-heading text-sm font-semibold text-cyan-200">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-white">{title}</h3>
                  <p className="muted-copy mt-3 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="orcamento" className="section-wrap relative overflow-hidden scroll-mt-24" aria-labelledby="quote-title">
          <div className="hero-mesh pointer-events-none absolute inset-0 opacity-20" />
          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <span className="section-badge">ORÇAMENTO</span>
                <h2 id="quote-title" className="headline-lg mt-4 text-white">Me diga o pacote e o contexto</h2>
                <p className="muted-copy mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
                  Use este briefing para eu responder com a melhor rota: pacote fechado, ajuste de escopo ou projeto sob medida.
                </p>
                <div className="mt-7 space-y-3">
                  {["Resposta objetiva em até 24h úteis", "Sem pagamento antes de validar escopo", "Briefing organizado para enviar no WhatsApp"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                      <BadgeCheck size={16} className="text-cyan-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={onSubmit} className="form-card p-5 sm:p-7" noValidate>
                {isPreview && <p className="mb-4 text-sm text-cyan-100">Prévia local · mensagem simulada</p>}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Nome</span>
                    <input
                      className="input-dark"
                      value={values.name}
                      onChange={(event) => setField("name", event.target.value)}
                      placeholder="Seu nome completo"
                      autoComplete="name"
                      maxLength={120}
                      required
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">E-mail</span>
                    <input
                      className="input-dark"
                      type="email"
                      value={values.email}
                      onChange={(event) => setField("email", event.target.value)}
                      placeholder="nome@empresa.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </label>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">WhatsApp</span>
                    <input
                      className="input-dark"
                      type="tel"
                      value={values.whatsapp}
                      onChange={(event) => setField("whatsapp", event.target.value)}
                      placeholder="(81) 99999-9999"
                      autoComplete="tel"
                      maxLength={40}
                      required
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Serviço</span>
                    <span className="relative block">
                      <select
                        className="input-dark appearance-none pr-10"
                        value={values.service}
                        onChange={(event) => setField("service", event.target.value)}
                      >
                        <option value="">Ainda estou definindo</option>
                        {serviceCategories.map((category) => (
                          <option key={category.id} value={category.label}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </span>
                  </label>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Pacote</span>
                    <input className="input-dark" value={values.packageName} onChange={(event) => setField("packageName", event.target.value)} placeholder="Se já escolheu" maxLength={120} />
                  </label>
                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Orçamento</span>
                    <span className="relative block">
                      <select className="input-dark appearance-none pr-10" value={values.budget} onChange={(event) => setField("budget", event.target.value)}>
                        <option value="">Selecione uma faixa</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </span>
                  </label>
                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Prazo</span>
                    <span className="relative block">
                      <select
                        className="input-dark appearance-none pr-10"
                        value={values.deadline}
                        onChange={(event) => setField("deadline", event.target.value)}
                      >
                        <option value="">Selecione um prazo</option>
                        {deadlineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </span>
                  </label>
                </div>

                <label className="mt-4 block space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Resumo do projeto</span>
                  <textarea
                    className="input-dark min-h-[150px] resize-none"
                    value={values.brief}
                    onChange={(event) => setField("brief", event.target.value)}
                    placeholder="Conte o que você quer vender, controlar, automatizar ou visualizar."
                    maxLength={4000}
                    required
                  />
                </label>

                <GradientButton type="submit" size="large" className="mt-5 w-full" disabled={isPreview === null}>
                  <MessageCircle size={18} aria-hidden="true" /> Continuar no WhatsApp
                </GradientButton>
                <p className="mt-3 text-sm text-slate-300">O briefing abre como mensagem pronta. Confira os dados e toque em Enviar no WhatsApp. <Link to="/privacidade" className="text-cyan-200 underline">Privacidade</Link></p>
                <div role="status" aria-live="polite">
                  {error && <p className="mt-4 rounded-sm border border-rose-400/35 bg-rose-400/10 px-3 py-2 text-sm text-rose-100">{error}</p>}
                  {preview && <pre aria-label="Prévia da mensagem do WhatsApp" className="mt-4 whitespace-pre-wrap break-words rounded-md border border-white/15 bg-[#0d1523] p-3 font-sans text-sm text-slate-100">{preview}</pre>}
                </div>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default ServicesPage;
