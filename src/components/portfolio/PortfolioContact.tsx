import { FileText, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { budgetOptions, contactInterests, type ContactInterestId } from "@/data/portfolio";
import { siteContent } from "@/data/siteContent";
import { trackEvent } from "@/lib/analytics";
import { formatWhatsAppBrief, isLocalWhatsAppPreview, whatsappWithMessage } from "@/lib/whatsapp";

const { channels } = siteContent.contact;

export const PortfolioContact = ({ service, setService }: { service: ContactInterestId | ""; setService: (value: ContactInterestId | "") => void }) => {
  const [isPreview, setIsPreview] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setIsPreview(isLocalWhatsAppPreview());
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isPreview === null) return;
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const brief = String(values.get("message") ?? "").trim();
    const budget = budgetOptions.find((option) => option === values.get("budget"));
    const serviceName = contactInterests.find((item) => item.id === service)?.title;
    if (!name || !email || brief.length < 10) {
      setError("Informe seu nome, e-mail e descreva o projeto em pelo menos 10 caracteres.");
      return;
    }
    const message = formatWhatsAppBrief({ name, email, brief, budget, service: serviceName });
    if (isPreview) {
      setPreview(message);
      return;
    }

    trackEvent("whatsapp_brief_open", { source: "homepage_cta", service: service || "unspecified" });
    window.location.assign(whatsappWithMessage(message));
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
            <a href="#formulario-contato" onClick={() => trackEvent("contact_click", { channel: "form", source: "homepage_cta" })}><FileText size={19} aria-hidden="true" /> Preencher formulário</a>
          </div>
          <div className="portfolio-service-area">
            <p id="portfolio-service-area" className="scroll-mt-24"><MapPin size={16} aria-hidden="true" /> Atendimento presencial na Grande Recife</p>
            <ul aria-labelledby="portfolio-service-area">
              {siteContent.seo.serviceCities.map((city) => <li key={city}>{city}</li>)}
            </ul>
            <p className="mt-3">{siteContent.seo.remoteServiceLine}</p>
          </div>
        </div>
        <form id="formulario-contato" className="portfolio-form" onSubmit={onSubmit} onChange={() => { setError(""); setPreview(""); }}>
          <div className="portfolio-form-top"><h3>Conte sobre seu projeto</h3>{isPreview && <p>Prévia local · mensagem simulada</p>}</div>
          <fieldset disabled={isPreview === null}>
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
            <button className="portfolio-button" type="submit"><MessageCircle size={18} aria-hidden="true" /> Continuar no WhatsApp</button>
          </fieldset>
          <p className="portfolio-form-note">O briefing abre como mensagem pronta. Confira os dados e toque em Enviar no WhatsApp. <a href="/privacidade">Privacidade</a></p>
          <div role="status" aria-live="polite">
            {error && <p className="portfolio-form-feedback is-error">{error}</p>}
            {preview && <pre aria-label="Prévia da mensagem do WhatsApp" className="mt-4 whitespace-pre-wrap break-words rounded-lg border border-slate-200 bg-slate-50 p-3 font-sans text-sm">{preview}</pre>}
          </div>
        </form>
      </div>
    </section>
  );
};
