import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openTrackedLink, trackEvent } from "@/lib/analytics";

const navItems = [
  { id: "about", label: "Sobre" },
  { id: "services", label: "Servicos" },
  { id: "projects", label: "Projetos" },
  { id: "testimonials", label: "Avaliacoes" },
  { id: "contact", label: "Contato" },
];

const MOBILE_MENU_ANIMATION_MS = 320;
const WHATSAPP_PROPOSAL_URL = "https://wa.me/5581973319128?text=Ola! Quero conversar sobre um projeto.";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) return;
    if (!isMobileMenuVisible) return;

    const timer = window.setTimeout(() => {
      setIsMobileMenuVisible(false);
    }, MOBILE_MENU_ANIMATION_MS);

    return () => window.clearTimeout(timer);
  }, [isMobileMenuOpen, isMobileMenuVisible]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileMenuVisible(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuVisible(true);
    window.requestAnimationFrame(() => {
      setIsMobileMenuOpen(true);
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    trackEvent("menu_toggle", { state: isMobileMenuOpen ? "close" : "open" });

    if (isMobileMenuOpen) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      trackEvent("nav_click", { section: id });
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Pular para o conteudo
      </a>

      <nav className="container py-4" aria-label="Navegacao principal">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-left transition-opacity hover:opacity-85"
            aria-label="Ir para inicio"
          >
            <span className="block font-heading text-xl font-bold">Denilson Junior</span>
            <span className="block text-xs text-muted-foreground">Data + Web Specialist</span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => openTrackedLink(WHATSAPP_PROPOSAL_URL, "cta_click", { cta: "header_proposal" })}
              className="rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] hover:bg-primary/90"
            >
              Quero uma proposta
            </Button>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-colors duration-300 hover:border-primary/60 md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="relative h-5 w-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>

        {isMobileMenuVisible && (
          <div
            className={`mt-4 overflow-hidden rounded-2xl border border-border bg-card/95 p-4 shadow-xl transition-all duration-300 ease-out md:hidden ${
              isMobileMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{ transitionDelay: isMobileMenuOpen ? `${80 + index * 55}ms` : "0ms" }}
                  className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary ${
                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <Button
                onClick={() => {
                  openTrackedLink(WHATSAPP_PROPOSAL_URL, "cta_click", { cta: "mobile_menu_proposal" });
                  closeMobileMenu();
                }}
                style={{ transitionDelay: isMobileMenuOpen ? `${100 + navItems.length * 55}ms` : "0ms" }}
                className={`mt-2 w-full rounded-xl bg-primary text-primary-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                Pedir proposta
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
