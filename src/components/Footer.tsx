import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="font-heading text-lg font-bold">Denilson Junior</p>
          <p className="text-sm text-muted-foreground">Projetos em dados, BI e desenvolvimento web</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/denilsonjj"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("contact_click", { channel: "footer_linkedin" })}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:juniordenilson363@gmail.com"
            onClick={() => trackEvent("contact_click", { channel: "footer_email" })}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5581973319128"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("contact_click", { channel: "footer_whatsapp" })}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="container mt-6 border-t border-border/50 pt-5">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Denilson Junior. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
