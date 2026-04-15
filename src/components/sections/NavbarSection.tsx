import { Container } from "@/components/ui/container";
import { GradientButton } from "@/components/ui/gradient-button";
import { siteContent } from "@/data/siteContent";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useSectionSpy } from "@/hooks/useSectionSpy";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sectionIds = ["inicio", "dores", "solucoes", "cases", "metodologia", "faq", "contato"];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useSectionSpy(sectionIds);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = cn(
    "fixed inset-x-0 top-0 z-50 transition-all duration-300",
    isScrolled ? "border-b border-white/10 bg-[#070b12]/74 backdrop-blur-2xl" : "bg-transparent",
  );

  return (
    <header className={navClass}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-sm focus:bg-[#0a121f] focus:px-3 focus:py-2 focus:text-sm"
      >
        Pular para o conteúdo
      </a>

      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Navegação principal">
          <button onClick={() => scrollToSection("inicio")} className="text-left" aria-label="Ir para início">
            <p className="font-heading text-[1.35rem] font-semibold text-white">{siteContent.brand.name}</p>
            <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">{siteContent.brand.descriptor}</p>
          </button>

          <ul className="hidden items-center gap-9 md:flex">
            {siteContent.nav.links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-200",
                    activeSection === link.id && "text-cyan-200",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full bg-cyan-200 transition-transform duration-300",
                      activeSection === link.id ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <GradientButton asChild>
              <a href={siteContent.nav.cta.href}>{siteContent.nav.cta.label}</a>
            </GradientButton>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-700/70 bg-[#101826]/80 text-slate-100 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#070b12]/96 backdrop-blur-2xl md:hidden"
          >
            <Container className="py-4">
              <ul className="space-y-2">
                {siteContent.nav.links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        scrollToSection(link.id);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "w-full rounded-sm border border-transparent px-4 py-3 text-left text-sm text-slate-200 transition",
                        activeSection === link.id ? "border-cyan-200/35 bg-[#0f1726]" : "hover:border-cyan-200/25 hover:bg-[#0d1522]",
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <GradientButton
                asChild
                className="mt-3 w-full"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <a href={siteContent.nav.mobileCta.href}>{siteContent.nav.mobileCta.label}</a>
              </GradientButton>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
