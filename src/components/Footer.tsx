import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden border-t border-purple-500/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Denilson Junior</h3>
            <p className="text-white/60 text-sm">Soluções em Dados & Desenvolvimento</p>
          </div>
          
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => window.open("https://www.linkedin.com/in/denilsonjj", "_blank")}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <Linkedin size={18} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => window.location.href = "mailto:juniordenilson363@gmail.com"}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <Mail size={18} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => window.open("https://wa.me/5500000000000", "_blank")}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <MessageCircle size={18} />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-purple-500/10 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
