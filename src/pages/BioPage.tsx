import { SeoHead } from "@/components/seo/SeoHead";
import { Container } from "@/components/ui/container";
import { GradientButton } from "@/components/ui/gradient-button";
import { siteContent } from "@/data/siteContent";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  FileSpreadsheet,
  Github,
  Globe2,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

type BioLink = {
  label: string;
  description: string;
  href: string;
  icon: typeof MessageCircle;
  primary?: boolean;
  external?: boolean;
  event: string;
};

const whatsappUrl =
  "https://wa.me/5581973319128?text=Olá! Vim pela bio e quero conversar sobre um projeto.";

const bioLinks: BioLink[] = [
  {
    label: "Pedir orçamento no WhatsApp",
    description: "Conversa direta para entender seu projeto.",
    href: whatsappUrl,
    icon: MessageCircle,
    primary: true,
    external: true,
    event: "bio_whatsapp_click",
  },
  {
    label: "Ver pacotes de serviços",
    description: "Landing pages, planilhas, sistemas e automações.",
    href: "/servicos",
    icon: PackageCheck,
    event: "bio_services_click",
  },
  {
    label: "Conhecer projetos reais",
    description: "Cases entregues com foco em resultado prático.",
    href: "/#cases",
    icon: BriefcaseBusiness,
    event: "bio_cases_click",
  },
];

const quickOffers = [
  {
    title: "Landing pages",
    price: "a partir de R$ 399",
    href: "/servicos#catalogo",
    icon: Globe2,
  },
  {
    title: "Planilhas inteligentes",
    price: "a partir de R$ 200",
    href: "/servicos#catalogo",
    icon: FileSpreadsheet,
  },
  {
    title: "Sistemas e lojas",
    price: "a partir de R$ 900",
    href: "/servicos#catalogo",
    icon: BriefcaseBusiness,
  },
  {
    title: "Dashboards e automações",
    price: "gerar orçamento",
    href: "/servicos#catalogo",
    icon: BarChart3,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: siteContent.seo.instagram,
    icon: Instagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/denilsonjj",
    icon: Github,
  },
  {
    label: "E-mail",
    href: `mailto:${siteContent.contact.channels.email}`,
    icon: Mail,
  },
];

const BioPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06080d] text-white">
      <SeoHead
        title="Denilson Junior | Links e Serviços"
        description="Acesse os principais links de Denilson Junior: orçamento, pacotes de serviços, projetos, Instagram, GitHub e contato."
        siteUrl={siteContent.seo.siteUrl}
        canonicalPath="/bio"
        ogImagePath={siteContent.seo.ogImagePath}
        instagram={siteContent.seo.instagram}
        brandName={siteContent.brand.name}
        serviceDescription={siteContent.seo.serviceDescription}
        areaServed={siteContent.seo.areaServed}
        addressLocality={siteContent.seo.addressLocality}
        addressRegion={siteContent.seo.addressRegion}
        addressCountry={siteContent.seo.addressCountry}
      />

      <main className="relative min-h-screen overflow-hidden py-6 sm:py-8">
        <div className="hero-flow absolute inset-0" />
        <div className="hero-mesh absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(151,247,255,0.18),transparent_58%)]" />

        <Container className="relative z-10">
          <header className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <Link to="/" className="text-left transition-opacity hover:opacity-85" aria-label="Ir para a página inicial">
              <p className="font-heading text-lg font-semibold text-white">{siteContent.brand.name}</p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Links oficiais</p>
            </Link>

            <Link
              to="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-[#0d1522]/84 text-slate-200 transition hover:border-cyan-200/35 hover:text-cyan-100"
              aria-label="Voltar para o site"
            >
              <Home size={17} />
            </Link>
          </header>

          <section className="mx-auto grid max-w-5xl gap-5 pb-10 pt-8 md:pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="form-card relative overflow-hidden p-5 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-200/16 blur-[90px]" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[0.7rem] border border-cyan-200/28 bg-cyan-200/10 shadow-[0_0_36px_-18px_rgba(151,247,255,0.95)]">
                    <span className="font-heading text-2xl font-semibold text-cyan-100">DJ</span>
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border border-cyan-100/70 bg-cyan-200" />
                  </div>
                  <div>
                    <span className="section-badge">DATA + WEB SPECIALIST</span>
                    <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      Soluções digitais para vender, controlar e decidir melhor.
                    </h1>
                  </div>
                </div>

                <p className="muted-copy mt-5 text-sm leading-relaxed sm:text-base">
                  Crio landing pages, sistemas, planilhas, dashboards e automações para transformar operação solta em
                  execução com clareza.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[
                    ["30+", "Projetos"],
                    ["30+", "Avaliações"],
                    ["24h", "Retorno"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-sm border border-white/10 bg-[#08111d]/82 p-3 text-center">
                      <p className="font-heading text-lg font-semibold text-cyan-100">{value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {bioLinks.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <span
                          className={cn(
                            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border",
                            item.primary
                              ? "border-slate-950/10 bg-slate-950/10 text-slate-950"
                              : "border-cyan-200/20 bg-cyan-200/10 text-cyan-100",
                          )}
                        >
                          <Icon size={18} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-heading text-base font-semibold">{item.label}</span>
                          <span className={cn("mt-1 block text-xs leading-relaxed", item.primary ? "text-slate-950/70" : "text-slate-400")}>
                            {item.description}
                          </span>
                        </span>
                        <ArrowRight size={17} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    );
                    const className = cn(
                      "group flex min-h-[74px] w-full items-center gap-3 rounded-[0.55rem] border px-4 py-3 text-left transition-all duration-300",
                      item.primary
                        ? "border-cyan-200/55 bg-cyan-200 text-slate-950 shadow-[0_0_34px_-18px_rgba(151,247,255,0.95)] hover:bg-cyan-100"
                        : "border-white/10 bg-[#0b1422]/78 text-slate-100 hover:border-cyan-200/35 hover:bg-[#101a2a]",
                    );

                    if (item.external) {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className={className}
                          onClick={() => trackEvent(item.event, { source: "bio" })}
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <Link key={item.label} to={item.href} className={className} onClick={() => trackEvent(item.event, { source: "bio" })}>
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06 }}
              className="space-y-5"
            >
              <div className="solution-card p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200/80">Escolha rápida</p>
                    <h2 className="mt-2 font-heading text-2xl font-semibold text-white">Comece pelo que você precisa agora</h2>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                    <Sparkles size={18} />
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {quickOffers.map((offer) => {
                    const Icon = offer.icon;
                    return (
                      <Link
                        key={offer.title}
                        to={offer.href}
                        className="group flex items-center gap-3 rounded-[0.55rem] border border-white/10 bg-[#08111d]/82 p-4 transition hover:border-cyan-200/35 hover:bg-[#101a2a]"
                        onClick={() => trackEvent("bio_offer_click", { offer: offer.title })}
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                          <Icon size={17} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-heading text-base font-semibold text-white">{offer.title}</span>
                          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">{offer.price}</span>
                        </span>
                        <ArrowRight size={16} className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-cyan-100" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="method-card p-5 sm:p-6">
                <h2 className="font-heading text-xl font-semibold text-white">Links diretos</h2>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex min-h-[78px] flex-col items-center justify-center gap-2 rounded-sm border border-white/10 bg-[#08111d]/82 text-xs font-semibold text-slate-200 transition hover:border-cyan-200/35 hover:text-cyan-100"
                        onClick={() => trackEvent("bio_social_click", { social: link.label })}
                      >
                        <Icon size={18} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-sm border border-cyan-200/20 bg-cyan-200/8 p-4">
                  <div className="flex gap-2 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-100" />
                    <p>Atendimento remoto e possibilidade de visitas na Grande Recife.</p>
                  </div>
                </div>
              </div>

              <GradientButton asChild variant="secondary" size="large" className="w-full">
                <Link to="/">Abrir site completo</Link>
              </GradientButton>
            </motion.aside>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default BioPage;
