import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Estou disponível para novos projetos e oportunidades
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/denilsonjj", "_blank")}
              className="gap-2 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </Button>
            <Button
              size="lg"
              onClick={() => window.location.href = "mailto:juniordenilson363@gmail.com"}
              className="gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105"
            >
              <Mail size={20} />
              E-mail
            </Button>
          </div>
          <div className="border-t border-purple-500/30 pt-8">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Denilson Junior - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
