import { siteContent } from "@/data/siteContent";

export const whatsappWithMessage = (message: string) => {
  const url = new URL(siteContent.contact.channels.whatsapp);
  url.search = `text=${encodeURIComponent(message)}`;
  return url.href;
};
