import { useParams } from "react-router-dom";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/PortfolioShell";
import { PortfolioQuoteLink } from "@/components/portfolio/PortfolioQuoteLink";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { SeoHead } from "@/components/seo/SeoHead";
import { projectLabel, projectPath, projectSeo, projects, type Project } from "@/data/portfolio";
import { servicePages, servicePath } from "@/data/servicePages";
import { siteContent } from "@/data/siteContent";
import NotFound from "./NotFound";

export const ProjectDetail = ({ project }: { project: Project }) => (
  <div className="portfolio">
    <SeoHead {...projectSeo(project)} canonicalPath={projectPath(project)} />
    <PortfolioHeader quote={{ project }} />
    <main id="main-content" tabIndex={-1}>
      <section className="portfolio-section project-detail" aria-labelledby="project-title">
        <div className="portfolio-container">
          <a className="portfolio-text-link project-back" href="/#cases">Todos os projetos</a>
          <div className="project-detail-grid">
            <div><p className="portfolio-eyebrow">{projectLabel(project)}</p><h1 id="project-title">{project.searchTitle ?? project.title}</h1><p className="portfolio-section-copy">{project.summary}</p></div>
            <figure><ProjectVisual project={project} /><figcaption>Ilustração do fluxo do projeto</figcaption></figure>
          </div>
          <dl className="project-story">
            <div><dt>O desafio</dt><dd>{project.challenge}</dd></div>
            <div><dt>A entrega</dt><dd>{project.solution}</dd></div>
            {project.result && <div><dt>O que mudou</dt><dd>{project.result}</dd></div>}
          </dl>
          {project.review && (
            <figure className="project-review">
              <blockquote>“{project.review.quote}”</blockquote>
              <figcaption>
                <span>{project.review.rating}/5 · Avaliação na 99Freelas</span>
                <a className="portfolio-text-link" href={siteContent.testimonial.profileUrl} target="_blank" rel="noopener noreferrer">
                  Ver perfil e avaliações na 99Freelas
                </a>
              </figcaption>
            </figure>
          )}
          <div className="project-cta">
            <h2>Tem um desafio parecido?</h2>
            <div className="project-cta-actions">
              <PortfolioQuoteLink source="case" context={{ project }} />
              <a className="portfolio-text-link" href={`/?interesse=${project.service}#formulario-contato`}>Enviar pelo formulário</a>
            </div>
          </div>
          <nav className="project-related" aria-label="Outros projetos">
            <a className="portfolio-text-link" href={servicePath(project.service)}>{servicePages[project.service].title}</a>
            {projects.filter((item) => item.service === project.service && item.slug !== project.slug).slice(0, 2).map((item) => <a className="portfolio-text-link" key={item.slug} href={projectPath(item)}>{item.title}</a>)}
          </nav>
        </div>
      </section>
    </main>
    <PortfolioFooter />
  </div>
);

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  return project ? <ProjectDetail project={project} /> : <NotFound />;
};

export default ProjectPage;
