import { useParams } from "react-router-dom";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/PortfolioShell";
import { PortfolioQuoteLink } from "@/components/portfolio/PortfolioQuoteLink";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { SeoHead } from "@/components/seo/SeoHead";
import { projectLabel, projectPath, projects, services, type ServiceId } from "@/data/portfolio";
import { servicePages, servicePath, serviceSeo } from "@/data/servicePages";
import { siteContent } from "@/data/siteContent";
import { trackEvent } from "@/lib/analytics";
import NotFound from "./NotFound";

export const ServiceDetail = ({ id }: { id: ServiceId }) => {
  const service = servicePages[id];
  const related = projects.filter((project) => service.projectSlugs.includes(project.slug));
  const contact = `/?interesse=${id}#formulario-contato`;
  const quote = { service: { id, title: service.title } };

  return (
    <div className="portfolio">
      <SeoHead {...siteContent.seo} {...serviceSeo(id)} canonicalPath={servicePath(id)} brandName={siteContent.brand.name} />
      <PortfolioHeader quote={quote} />
      <main id="main-content" tabIndex={-1}>
        <section className="portfolio-section project-detail service-detail" aria-labelledby="service-title">
          <div className="portfolio-container">
            <nav className="service-breadcrumb" aria-label="Caminho da página"><a href="/">Início</a><span aria-hidden="true">/</span><a href="/servicos">Serviços</a></nav>
            <div className="service-detail-intro">
              <h1 id="service-title">{service.title}</h1>
              <p className="portfolio-section-copy">{service.lead}</p>
              <div className="portfolio-actions">
                <PortfolioQuoteLink source="service_page" context={quote} />
                <a className="portfolio-button portfolio-button-outline" href="#projetos-relacionados">Ver projetos relacionados</a>
              </div>
              <a className="portfolio-text-link portfolio-form-shortcut" href={contact}>Enviar pelo formulário</a>
            </div>
          </div>
        </section>
        <section className="portfolio-section service-situations" aria-labelledby="service-situations-title">
          <div className="portfolio-container">
            <h2 id="service-situations-title">Quando faz sentido?</h2>
            <div className="service-situation-grid">
              {service.situations.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
            </div>
          </div>
        </section>
        <section id="projetos-relacionados" className="portfolio-section service-cases" aria-labelledby="service-cases-title">
          <div className="portfolio-container">
            <h2 id="service-cases-title">Projetos relacionados.</h2>
            <div className="portfolio-project-grid">
              {related.map((project) => (
                <article key={project.slug} className="portfolio-project-card">
                  <a className="portfolio-project-link" href={projectPath(project)} onClick={() => trackEvent("case_open", { project: project.slug, source: "service_page" })}>
                    <ProjectVisual project={project} />
                    <div className="portfolio-project-copy">
                      <p className="portfolio-category">{projectLabel(project)}</p>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <span className="portfolio-text-link">Ver projeto</span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="portfolio-section" aria-labelledby="service-questions-title">
          <div className="portfolio-container">
            <div className="portfolio-split">
              <h2 id="service-questions-title">Perguntas antes de começar.</h2>
              <dl className="service-questions">
                {service.questions.map(({ question, answer }) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}
              </dl>
            </div>
            <div className="project-cta service-cta">
              <div><h2>Vamos definir o escopo?</h2><p>{service.briefing}</p></div>
              <div className="project-cta-actions">
                <PortfolioQuoteLink source="service_page" context={quote} />
                <a className="portfolio-text-link" href={contact}>Enviar pelo formulário</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PortfolioFooter />
    </div>
  );
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find(({ id }) => servicePages[id].slug === slug);
  return service ? <ServiceDetail id={service.id} /> : <NotFound />;
};

export default ServiceDetailPage;
