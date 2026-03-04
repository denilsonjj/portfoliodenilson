import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha nome, e-mail e mensagem.",
        variant: "destructive",
      });
      return;
    }

    trackEvent("lead_submit_attempt", { source: "contact_form" });
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase.from("contact_messages").insert([{ name, email, message }]);

      if (dbError) {
        console.error("DB Error:", dbError);
        throw new Error("Não foi possível salvar sua mensagem no banco.");
      }

      const { data: emailData, error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: { name, email, message },
      });

      if (emailError) {
        console.error("Email Error:", emailError);
        throw new Error("Não foi possível enviar o e-mail de contato.");
      }

      if (!emailData?.success) {
        throw new Error("A função de e-mail não confirmou envio.");
      }

      trackEvent("generate_lead", { source: "contact_form" });
      toast({
        title: "Briefing recebido",
        description: "Perfeito. Vou analisar e retornar com os próximos passos.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      trackEvent("lead_submit_error", { source: "contact_form" });
      console.error("Error:", error);
      toast({
        title: "Não foi possível enviar agora",
        description: "Tente novamente ou me chame direto no WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contato</span>
          <h2 className="section-title">Vamos tirar seu projeto do papel</h2>
          <p className="section-subtitle">Preencha um briefing rápido e eu retorno com proposta e direcionamento técnico.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 rounded-xl border-border/80 bg-background/60"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="você@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 rounded-xl border-border/80 bg-background/60"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Briefing do projeto
                </label>
                <Textarea
                  id="message"
                  placeholder="Descreva objetivo, prazo, contexto e resultado esperado"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[180px] rounded-xl border-border/80 bg-background/60"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Enviando briefing..." : "Enviar briefing"}
              </Button>
            </form>
          </article>

          <aside className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-bold">Canais diretos</h3>
            <p className="mt-3 text-sm text-muted-foreground">Se preferir, fale comigo agora por WhatsApp, e-mail ou LinkedIn.</p>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href="mailto:juniordenilson363@gmail.com"
                onClick={() => trackEvent("contact_click", { channel: "email" })}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:border-primary/50"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>juniordenilson363@gmail.com</span>
              </a>
              <a
                href="tel:+5581973319128"
                onClick={() => trackEvent("contact_click", { channel: "phone" })}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:border-primary/50"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>(81) 97331-9128</span>
              </a>
              <a
                href="https://wa.me/5581973319128"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("contact_click", { channel: "whatsapp" })}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:border-primary/50"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>WhatsApp (resposta rápida)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/denilsonjj"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("contact_click", { channel: "linkedin" })}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:border-primary/50"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <span>linkedin.com/in/denilsonjj</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
