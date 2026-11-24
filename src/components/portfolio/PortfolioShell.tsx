import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { siteContent } from "@/data/siteContent";
import "@/styles/portfolio.css";
import { PortfolioQuoteLink, type QuoteContext } from "./PortfolioQuoteLink";

const sectionLinks = [
  { id: "cases", label: "Projetos" },
  { id: "avaliacoes", label: "Avaliações", mobileOnly: true },
  { id: "solucoes", label: "Serviços" },
  { id: "metodologia", label: "Processo" },
  { id: "faq", label: "Dúvidas comuns", mobileOnly: true },
  { id: "contato", label: "Contato", mobileOnly: true },
];

export const PortfolioHeader = ({ home = false, quote }: { home?: boolean; quote?: QuoteContext }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="portfolio-header"
      data-menu-open={menuOpen || undefined}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !menuOpen) return;
        setMenuOpen(false);
        menuButton.current?.focus();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <a className="portfolio-skip" href="#main-content">Pular para o conteúdo</a>
      <div className="portfolio-container portfolio-header-inner">
        <a className="portfolio-brand" href={home ? "#inicio" : "/"} onClick={() => setMenuOpen(false)}>
          <span className="portfolio-brand-name">{siteContent.brand.name}</span>
          <span className="portfolio-brand-descriptor">{siteContent.brand.descriptor}</span>
        </a>
        <button
          type="button"
          ref={menuButton}
          className="portfolio-menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="portfolio-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <nav id="portfolio-navigation" aria-label="Navegação principal">
          {sectionLinks.map(({ id, label, mobileOnly }) => (
            <a
              key={id}
              className={mobileOnly ? "portfolio-mobile-nav-link" : undefined}
              href={`${home ? "" : "/"}#${id}`}
              onClick={(event) => {
                if (menuOpen && home && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                  const section = document.getElementById(id);
                  section?.setAttribute("tabindex", "-1");
                  section?.focus({ preventScroll: true });
                }
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <PortfolioQuoteLink source="header" context={quote} className="portfolio-button portfolio-button-small" compact />
      </div>
    </header>
  );
};

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
