import { MessageCircle } from "lucide-react";
import type { ContactInterestId, Project } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";
import { whatsappWithMessage } from "@/lib/whatsapp";

export type QuoteContext = {
  project?: Pick<Project, "slug" | "title" | "service">;
  service?: { id: ContactInterestId; title: string };
};

type PortfolioQuoteLinkProps = {
  source: string;
  context?: QuoteContext;
  className?: string;
  compact?: boolean;
};

export const PortfolioQuoteLink = ({ source, context, className = "portfolio-button", compact = false }: PortfolioQuoteLinkProps) => {
  const { project, service } = context ?? {};
  const message = project
    ? `Olá, Denilson! Vi o projeto “${project.title}” no seu portfólio e tenho um desafio parecido. Podemos conversar sobre um orçamento?`
    : service
      ? `Olá, Denilson! Tenho interesse em “${service.title}”. Podemos conversar sobre um orçamento?`
      : "Olá, Denilson! Gostaria de conversar sobre um orçamento para um projeto.";

  return (
    <a
      className={className}
      href={whatsappWithMessage(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={service && !compact ? `Pedir orçamento no WhatsApp para ${service.title}` : "Pedir orçamento no WhatsApp"}
      onClick={() => trackEvent("cta_click", { source, channel: "whatsapp", project: project?.slug, service: project?.service ?? service?.id })}
    >
      <MessageCircle size={compact ? 15 : 18} aria-hidden="true" />
      {compact ? "Pedir orçamento" : "Pedir orçamento no WhatsApp"}
    </a>
  );
};
