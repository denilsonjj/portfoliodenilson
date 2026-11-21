import { siteContent } from "@/data/siteContent";
import { PortfolioQuoteLink, type QuoteContext } from "./PortfolioQuoteLink";

export const PortfolioHeader = ({ home = false, quote }: { home?: boolean; quote?: QuoteContext }) => (
  <header className="portfolio-header">
    <a className="portfolio-skip" href="#main-content">Pular para o conteúdo</a>
    <div className="portfolio-container portfolio-header-inner">
      <a className="portfolio-brand" href={home ? "#inicio" : "/"}>
        <span className="portfolio-monogram" aria-hidden="true">dj<span>.</span></span>
        <span>Denilson Junior</span>
      </a>
      <nav aria-label="Navegação principal">
        <a href={home ? "#cases" : "/#cases"}>Projetos</a>
        <a href={home ? "#solucoes" : "/#solucoes"}>Serviços</a>
        <a href={home ? "#metodologia" : "/#metodologia"}>Processo</a>
      </nav>
      <PortfolioQuoteLink source="header" context={quote} className="portfolio-button portfolio-button-small" compact />
    </div>
  </header>
);

export const PortfolioFooter = () => (
  <footer className="portfolio-footer">
    <div className="portfolio-container portfolio-footer-inner">
      <div><strong>Denilson Junior</strong><p>{siteContent.seo.localServiceLine}</p></div>
      <nav aria-label="Links do rodapé">
        {siteContent.footer.links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
    </div>
  </footer>
);
