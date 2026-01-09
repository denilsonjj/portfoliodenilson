import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "5581973319128";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre seus serviços.`;

  return (
    <Button
      onClick={() => window.open(whatsappUrl, "_blank")}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-all hover:scale-110"
      size="icon"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
