import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-purple-500/10 border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-fuchsia-300 transition-all"
          >
            Denilson Junior
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-purple-300 transition-colors font-medium"
            >
              Meus Projetos
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white/80 hover:text-purple-300 transition-colors font-medium"
            >
              Minhas Habilidades
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 transition-all hover:scale-105"
            >
              Fale Comigo
            </Button>
            
            {/* Theme Toggle */}
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-primary" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
              <Moon className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-500/20 bg-black/40 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white/80 hover:text-purple-300 transition-colors text-left px-4"
              >
                Meus Projetos
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white/80 hover:text-purple-300 transition-colors text-left px-4"
              >
                Minhas Habilidades
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="w-full mx-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40"
              >
                Fale Comigo
              </Button>
              
              {/* Theme Toggle Mobile */}
              <div className="flex items-center justify-center gap-2 px-4 mt-2">
                <Sun className="h-4 w-4 text-primary" />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
                <Moon className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
