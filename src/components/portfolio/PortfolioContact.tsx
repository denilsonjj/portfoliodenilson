import { Check, Mail, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { budgetOptions, contactInterests, type ContactInterestId } from "@/data/portfolio";
import { siteContent } from "@/data/siteContent";
import { trackEvent } from "@/lib/analytics";

const { channels } = siteContent.contact;
const isLocalPreview = () => import.meta.env.DEV || ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);

type Submission = { type: "success" | "error"; text: string };

export const PortfolioContact = ({ service, setService }: { service: ContactInterestId | ""; setService: (value: ContactInterestId | "") => void }) => {
  const [isPreview, setIsPreview] = useState<boolean | null>(null);
  const [pending, setPending] = useState(false);
  const [submission, setSubmission] = useState<Submission>();
  const submitting = useRef(false);

  useEffect(() => {
    setIsPreview(isLocalPreview());
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const brief = String(values.get("message") ?? "").trim();
    const budget = budgetOptions.find((option) => option === values.get("budget"));
    const serviceName = contactInterests.find((item) => item.id === service)?.title;
    const analytics = { source: "homepage_cta", service: service || "unspecified" };

    if (!name || !email || brief.length < 10) {
      setSubmission({ type: "error", text: "Informe seu nome, e-mail e descreva o projeto em pelo menos 10 caracteres." });
      return;
    }
    if (isLocalPreview()) {
      setSubmission({ type: "success", text: "Teste concluído. O briefing foi validado localmente." });
      return;
    }

    submitting.current = true;
    setPending(true);
    setSubmission(undefined);
    trackEvent("lead_submit_attempt", analytics);
    let stored = false;

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const details = [serviceName && `Interesse: ${serviceName}`, budget && `Faixa de investimento: ${budget}`].filter(Boolean);
      const message = details.length ? `${details.join("\n")}\n\n${brief}` : brief;
      const payload = { name, email, message };
      const { error } = await supabase.from("contact_messages").insert([payload]);
      if (error) throw error;
      stored = true;

      trackEvent("generate_lead", analytics);
      setSubmission({ type: "success", text: "Briefing recebido. Vou responder pelo e-mail que você informou." });
      form.reset();
      setService("");

      // The database already accepted the lead. A notification failure must not prompt a duplicate submission.
      const { data, error: notificationError } = await supabase.functions.invoke("send-contact-email", {
        body: { ...payload, service: serviceName, source: "homepage_cta", budget, brief },
      });
      if (notificationError || !data?.success) trackEvent("lead_notification_error", analytics);
    } catch {
      if (stored) {
        trackEvent("lead_notification_error", analytics);
      } else {
        trackEvent("lead_submit_error", analytics);
        setSubmission({ type: "error", text: "O envio falhou. Seus dados continuam no formulário. Tente novamente ou fale comigo pelo WhatsApp." });
      }
    } finally {
      submitting.current = false;
      setPending(false);
    }
  };

  return (
    <section id="contato" className="portfolio-contact" aria-labelledby="portfolio-contact-title">
      <div className="portfolio-container portfolio-contact-grid">
        <div className="portfolio-contact-intro">
          <p className="portfolio-eyebrow">Contato</p>
          <h2 id="portfolio-contact-title">O que você quer resolver?</h2>
          <p>Conte como funciona sua operação hoje e o que precisa melhorar. Eu retorno para alinhar escopo, prazo e investimento.</p>
          <div className="portfolio-contact-links">
            <a href={channels.whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("contact_click", { channel: "whatsapp", source: "homepage_cta" })}><MessageCircle size={19} /> WhatsApp</a>
            <a href="#formulario-contato" onClick={() => trackEvent("contact_click", { channel: "form", source: "homepage_cta" })}><Mail size={19} aria-hidden="true" /> Enviar pelo formulário</a>
          </div>
          <div className="portfolio-service-area">
            <p id="portfolio-service-area" className="scroll-mt-24"><MapPin size={16} aria-hidden="true" /> Atendimento presencial na Grande Recife</p>
            <ul aria-labelledby="portfolio-service-area">
              {siteContent.seo.serviceCities.map((city) => <li key={city}>{city}</li>)}
            </ul>
            <p className="mt-3">{siteContent.seo.remoteServiceLine}</p>
          </div>
        </div>
        <form id="formulario-contato" className="portfolio-form" onSubmit={onSubmit} aria-busy={pending}>
          <div className="portfolio-form-top"><h3>Conte sobre seu projeto</h3>{isPreview && <p>Prévia local · envio simulado</p>}</div>
          <fieldset disabled={pending || isPreview === null}>
            <div className="portfolio-fields">
              <label>Seu nome<input name="name" autoComplete="name" placeholder="Como posso te chamar?" maxLength={120} required /></label>
              <label>Seu e-mail<input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" maxLength={254} required /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label>O que você procura?
                <select name="service" value={service} onChange={(event) => setService(event.target.value as ContactInterestId | "")}>
                  <option value="">Ainda estou definindo</option>
                  {contactInterests.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
                </select>
              </label>
              <label>Faixa de investimento (opcional)
                <select name="budget" defaultValue="">
                  <option value="">Selecione uma faixa</option>
                  {budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <label>Sobre o projeto<textarea name="message" rows={4} placeholder="Ex.: hoje consolido as vendas de três lojas manualmente e quero acompanhar tudo em um painel." required minLength={10} maxLength={4000} /></label>
            <button className="portfolio-button" type="submit">{pending ? "Enviando…" : "Enviar briefing"}</button>
          </fieldset>
          <p className="portfolio-form-note">Sem compromisso. Seus dados serão usados para responder ao contato. <a href="/privacidade">Privacidade</a></p>
          <div role="status" aria-live="polite">
            {submission && <p className={`portfolio-form-feedback is-${submission.type}`}>{submission.type === "success" && <Check size={17} />} {submission.text}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};
