import { siteContent } from "@/data/siteContent";

export const whatsappWithMessage = (message: string) => {
  const url = new URL(siteContent.contact.channels.whatsapp);
  url.search = `text=${encodeURIComponent(message)}`;
  return url.href;
};

type ProjectBrief = {
  name: string;
  email: string;
  brief: string;
  phone?: string;
  service?: string;
  packageName?: string;
  budget?: string;
  deadline?: string;
};

export const formatWhatsAppBrief = ({ name, email, brief, phone, service, packageName, budget, deadline }: ProjectBrief) => {
  const fields = [
    ["Nome", name],
    ["E-mail", email],
    ["WhatsApp", phone],
    ["Serviço", service],
    ["Pacote", packageName],
    ["Faixa de investimento", budget],
    ["Prazo", deadline],
  ].flatMap(([label, value]) => {
    const text = value?.trim().replace(/\s+/g, " ");
    return text ? [`*${label}:* ${text}`] : [];
  });

  return ["*Pedido de orçamento*", "", ...fields, "", "*Sobre o projeto*", brief.trim().replace(/\r\n?/g, "\n")].join("\n");
};

export const isLocalWhatsAppPreview = () =>
  import.meta.env.DEV || ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);
