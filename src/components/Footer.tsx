import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-lg mb-8 opacity-90">
            Estou disponível para novos projetos e oportunidades
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/", "_blank")}
              className="gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = "mailto:seu.email@exemplo.com"}
              className="gap-2"
            >
              <Mail size={20} />
              E-mail
            </Button>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Portfolio - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
