import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Denilson Junior</h3>
            <p className="text-muted-foreground text-sm">Soluções em Dados & Desenvolvimento</p>
          </div>
          
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => window.open("https://www.linkedin.com/in/denilsonjj", "_blank")}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              <Linkedin size={18} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => window.location.href = "mailto:juniordenilson363@gmail.com"}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              <Mail size={18} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => window.open("https://wa.me/5581973319128", "_blank")}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              <MessageCircle size={18} />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
