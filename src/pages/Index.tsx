import { ChevronDown, MapPin, Plus, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioQuoteLink } from "@/components/portfolio/PortfolioQuoteLink";
import { PortfolioGlobe } from "@/components/portfolio/PortfolioGlobe";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/PortfolioShell";
import { ProjectVisual, projectIcons } from "@/components/portfolio/ProjectVisual";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SeoHead } from "@/components/seo/SeoHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountUp } from "@/components/ui/count-up";
import { contactInterests, featuredProjects, pastProjects, portfolioSeo, projectLabel, projectPath, projects, services, webService, type ContactInterestId } from "@/data/portfolio";
import { servicePath } from "@/data/servicePages";
import { siteContent } from "@/data/siteContent";
import { trackEvent } from "@/lib/analytics";

const proof = siteContent.proof.items.slice(0, 2);
const reviewedProjects = projects.filter((project) => project.review).slice(0, 3);
const homepageServices = [...services.map((item) => ({ ...item, href: servicePath(item.id) })), webService];
const faqs = [
  { question: "Quanto custa um projeto sob medida?", answer: "Depende do escopo, das integrações e das fontes de dados. Depois de entender sua rotina, monto uma proposta com o que será entregue, prazo e investimento." },
  { question: "Dá para aproveitar minhas planilhas e ferramentas atuais?", answer: "Sim. Primeiro avalio as planilhas, sistemas e integrações que você já usa. A proposta indica o que dá para reaproveitar e o que precisa ser ajustado." },
  { question: "Como funciona o atendimento fora de Recife?", answer: "O projeto pode ser conduzido online, do levantamento à entrega. Também faço visitas na Grande Recife quando o projeto pede acompanhamento presencial." },
  siteContent.faq.items[2],
];

const Index = () => {
  const [service, setService] = useState<ContactInterestId | "">("");
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interesse");
    const selected = contactInterests.find((item) => item.id === interest);
    if (selected) setService(selected.id);
    const { hash } = window.location;
    if (hash === "#contato" || hash === "#formulario-contato") {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (!main.current || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("portfolio-entering");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    main.current.querySelectorAll("[data-portfolio-reveal]").forEach((element) => {
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <SeoHead {...portfolioSeo} />
      <PortfolioHeader home />
      <main id="main-content" tabIndex={-1} ref={main}>
        <section className="portfolio-hero" id="inicio" aria-labelledby="portfolio-title">
          <div className="portfolio-container portfolio-hero-grid">
            <div className="portfolio-hero-copy">
              <p className="portfolio-eyebrow"><span /> Desenvolvimento sob medida na Grande Recife</p>
              <h1 id="portfolio-title">Sistemas, dados <em>e automação.</em></h1>
              <p className="portfolio-hero-description">Desenvolvo sistemas web, sites, dashboards e planilhas automatizadas para empresas que querem vender online, organizar a operação ou reduzir o trabalho manual.</p>
              <div className="portfolio-actions">
                <PortfolioQuoteLink source="hero" />
                <a className="portfolio-button portfolio-button-outline" href="#cases" onClick={() => trackEvent("portfolio_click", { source: "hero" })}>Ver projetos <ChevronDown size={17} aria-hidden="true" /></a>
              </div>
              <a className="portfolio-text-link portfolio-form-shortcut" href="#formulario-contato">Enviar pelo formulário</a>
              <p className="portfolio-location"><MapPin size={17} aria-hidden="true" /> <a className="underline underline-offset-4 hover:text-white" href="#portfolio-service-area">Atendimento na Grande Recife</a> <span aria-hidden="true">·</span> Remoto em todo o Brasil</p>
            </div>
            <PortfolioGlobe />
          </div>
        </section>

        <section id="cases" className="portfolio-section portfolio-projects" aria-labelledby="portfolio-projects-title">
          <div className="portfolio-container">
            <div className="portfolio-section-heading" data-portfolio-reveal>
              <div><p className="portfolio-eyebrow">Portfólio selecionado</p><h2 id="portfolio-projects-title">Projetos entregues.</h2></div>
              <dl className="portfolio-proof" aria-label="Experiência profissional">
                {proof.map(({ label, ...metric }) => <div key={label}><dt>{label}</dt><dd><CountUp {...metric} /></dd></div>)}
              </dl>
            </div>
            <div className="portfolio-project-grid">
              {featuredProjects.map((item) => (
                <article className="portfolio-project-card" id={item.slug} key={item.slug} data-portfolio-reveal>
                  <a className="portfolio-project-link" href={projectPath(item)} onClick={() => trackEvent("case_open", { project: item.slug, source: "home" })}>
                    <ProjectVisual project={item} />
                    <div className="portfolio-project-copy">
                      <p className="portfolio-category">{projectLabel(item)}</p>
                      <h3>{item.title}</h3><p>{item.summary}</p>
                      <span className="portfolio-text-link">Ver projeto <Plus size={16} aria-hidden="true" /></span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
            <details className="portfolio-more-projects">
              <summary>Ver outras entregas <Plus size={16} aria-hidden="true" /></summary>
              <ul>{pastProjects.map((item) => <li key={item.slug} id={item.slug}><a className="portfolio-text-link" href={projectPath(item)}>{item.title}</a></li>)}</ul>
            </details>
          </div>
        </section>

        <section id="avaliacoes" className="portfolio-reviews" aria-labelledby="portfolio-reviews-title">
          <div className="portfolio-container" data-portfolio-reveal>
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <h2 id="portfolio-reviews-title">O que dizem os clientes.</h2>
              <a className="portfolio-text-link" href={siteContent.testimonial.profileUrl} target="_blank" rel="noopener noreferrer">
                Ver perfil e avaliações na 99Freelas
              </a>
            </div>
            <div className="portfolio-review-grid">
              {reviewedProjects.map(({ slug, title, review }) => review && (
                <figure key={slug}>
                  <Quote size={23} aria-hidden="true" />
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption><strong>{title}</strong><span>{review.rating}/5 · Avaliação na 99Freelas</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="solucoes" className="portfolio-section portfolio-services" aria-labelledby="portfolio-services-title">
          <div className="portfolio-container portfolio-split">
            <div><p className="portfolio-eyebrow">Serviços</p><h2 id="portfolio-services-title">Onde posso<br /> ajudar.</h2><p className="portfolio-section-copy">De uma rotina que ocupa horas até um sistema inteiro para a equipe.</p><a className="portfolio-text-link" href="/servicos">Ver pacotes e preços <Plus size={16} aria-hidden="true" /></a></div>
            <div className="portfolio-service-list">
              {homepageServices.map((item) => {
                const Icon = projectIcons[item.id];
                return (
                  <article key={item.id} className="portfolio-service" data-portfolio-reveal>
                    <span className="portfolio-service-icon"><Icon size={22} aria-hidden="true" /></span>
                    <div><h3><a className="portfolio-service-title" href={item.href}>{item.title} <Plus size={17} aria-hidden="true" /></a></h3><p>{item.description}</p>
                      <PortfolioQuoteLink source="service" context={{ service: item }} className="portfolio-text-link" />
                    </div>
                  </article>
                );
                })}
              </div>
            </div>
          </section>

          <MethodologySection />

          <section id="faq" className="portfolio-section" aria-labelledby="portfolio-faq-title">
            <div className="portfolio-container portfolio-split">
              <div><p className="portfolio-eyebrow">FAQ</p><h2 id="portfolio-faq-title">Dúvidas comuns.</h2></div>
              <Accordion type="single" collapsible className="portfolio-faq">
              {faqs.map(({ question, answer }, index) => (
                  <AccordionItem value={question} key={question}>
                  <AccordionTrigger id={`faq-question-${index}`} aria-controls={`faq-answer-${index}`}>{question}</AccordionTrigger>
                  <AccordionContent id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`}><p>{answer}</p></AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <PortfolioContact service={service} setService={setService} />
        </main>
        <PortfolioFooter />
      </div>
  );
};

export default Index;
