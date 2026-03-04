import { MessageCircle, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openTrackedLink } from "@/lib/analytics";

const testimonials = [
  {
    name: "Cliente",
    role: "Migração de app para React + Supabase",
    text: "Denilson foi ágil, fácil de negociar e deu suporte mesmo após a finalização do projeto.",
    rating: 5,
  },
  {
    name: "Cliente",
    role: "CRUD Python para etiquetas",
    text: "Competente e organizado. Fiquei satisfeito com o trabalho desenvolvido.",
    rating: 5,
  },
  {
    name: "Cliente",
    role: "Sistema para assistência técnica",
    text: "Atendeu expectativas, fez todas as mudanças solicitadas e entregou um ótimo trabalho.",
    rating: 5,
  },
  {
    name: "Cliente",
    role: "Automação com Microsoft Lists",
    text: "Fantástico. Recomendo a todos.",
    rating: 5,
  },
  {
    name: "Cliente",
    role: "Gestão financeira para advocacia",
    text: "Resolveu meu gargalo de gestão financeira. Recomendo para quem busca expertise.",
    rating: 5,
  },
  {
    name: "Cliente",
    role: "Dashboard Excel para supermercados",
    text: "Entregou muito além do que eu pedi e esperava. Valeu a pena.",
    rating: 5,
  },
];

const TESTIMONIALS_WHATSAPP_URL = "https://wa.me/5581973319128?text=Olá! Vi os depoimentos no portfólio e quero conversar sobre um projeto.";

const Testimonials = () => {
  const openWhatsApp = () => {
    openTrackedLink(TESTIMONIALS_WHATSAPP_URL, "cta_click", { cta: "testimonials_whatsapp" });
  };

  return (
    <section id="testimonials" className="section-shell">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Avaliações</span>
          <h2 className="section-title">Prova social de quem já contratou</h2>
          <p className="section-subtitle">Feedback real de clientes sobre entrega, comunicação e qualidade técnica.</p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <article className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">5.0</p>
            <p className="text-sm text-muted-foreground">Nota geral na 99Freelas</p>
          </article>
          <article className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">20+</p>
            <p className="text-sm text-muted-foreground">Projetos entregues</p>
          </article>
          <article className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">13+</p>
            <p className="text-sm text-muted-foreground">Avaliações públicas</p>
          </article>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name + item.role} className="glass-card panel-hover p-6">
              <div className="flex items-center justify-between">
                <Quote className="h-5 w-5 text-primary" />
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground md:text-base">"{item.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={openWhatsApp} variant="outline" className="rounded-full border-border bg-card/30 px-6">
            Quero um projeto com esse nível
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
