import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-xl mb-10 text-muted-foreground">
            Estou disponível para novos projetos e oportunidades
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/denilsonjj", "_blank")}
              className="gap-2 transition-all hover:scale-105"
              variant="secondary"
            >
              <Linkedin size={20} />
              LinkedIn
            </Button>
            <Button
              size="lg"
              onClick={() => window.location.href = "mailto:juniordenilson363@gmail.com"}
              className="gap-2 transition-all hover:scale-105"
              variant="outline"
            >
              <Mail size={20} />
              E-mail
            </Button>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Denilson Junior - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
