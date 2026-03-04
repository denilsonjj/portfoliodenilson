import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openTrackedLink } from "@/lib/analytics";

const WhatsAppButton = () => {
  const whatsappNumber = "5581973319128";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Vim pelo portfólio e quero conversar sobre um projeto.`;

  return (
    <Button
      onClick={() => openTrackedLink(whatsappUrl, "cta_click", { cta: "floating_whatsapp_button" })}
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full border border-emerald-300/40 bg-emerald-500 text-white shadow-[0_12px_30px_-12px_rgba(16,185,129,0.9)] transition-all hover:scale-105 hover:bg-emerald-600"
      size="icon"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
