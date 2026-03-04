import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openTrackedLink, trackEvent } from "@/lib/analytics";
import heroBg from "@/assets/hero-bg-dark.jpg";

const highlights = [
  "Projetos orientados por resultado",
  "Escopo claro e execução pragmática",
  "Atendimento direto com o responsável técnico",
];

const HERO_WHATSAPP_URL = "https://wa.me/5581973319128?text=Olá! Quero solicitar um orçamento.";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      trackEvent("cta_click", { cta: "hero_view_cases", section: id });
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="section-shell overflow-hidden pt-36 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,hsl(var(--background)/0.85)_15%,hsl(var(--background)/0.55)_55%,hsl(var(--background)/0.88)_95%)]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-reveal">
            <span className="eyebrow">Portfólio 2026</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Transformo desafios de negócio em dashboards e sistemas que geram resultado.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Sou Denilson Junior, freelancer em BI, dados e desenvolvimento web. Entrego soluções sob medida para operação, serviços e negócios digitais.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => openTrackedLink(HERO_WHATSAPP_URL, "cta_click", { cta: "hero_primary_whatsapp" })}
                size="lg"
                className="rounded-full bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Quero meu orçamento
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-card/30 px-8"
              >
                Ver provas de resultado
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">Conversa inicial sem compromisso e com foco no seu contexto.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card panel-hover animate-float p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-primary">
              <Star className="h-4 w-4" />
              <span>Performance + Experiência de usuário</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
                <p className="text-3xl font-bold text-foreground">5.0/5</p>
                <p className="mt-1 text-sm text-muted-foreground">Avaliação média de clientes</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="mt-1 text-sm text-muted-foreground">Projetos entregues</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
                <p className="text-3xl font-bold text-foreground">13+</p>
                <p className="mt-1 text-sm text-muted-foreground">Avaliações públicas</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
                <p className="text-3xl font-bold text-foreground">Desde 2025</p>
                <p className="mt-1 text-sm text-muted-foreground">Início da atuação como freelancer</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
              "Meu foco é transformar necessidade de negócio em entrega funcional, com decisão orientada por dados e impacto real."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
