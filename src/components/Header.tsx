import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Dropdown } from "@rewind-ui/core";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5 border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-all"
          >
            Denilson Junior
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Tecnologias
            </button>
            
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Alternar tema"
              >
                {theme === "dark" ? (
                  <Moon className="w-5 h-5 text-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-foreground" />
                )}
              </button>
            )}
            
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
            >
              Fale Comigo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Alternar tema"
              >
                {theme === "dark" ? (
                  <Moon className="w-5 h-5 text-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-foreground" />
                )}
              </button>
            )}
            
            <Dropdown>
              <Dropdown.Trigger>
                <button className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground">
                  <Menu size={24} />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content className="bg-card border border-border shadow-lg z-[100]">
                <Dropdown.Label className="text-muted-foreground">Navegação</Dropdown.Label>
                <Dropdown.Divider />
                <Dropdown.Item 
                  onClick={() => scrollToSection("services")}
                  className="cursor-pointer hover:bg-secondary"
                >
                  Serviços
                </Dropdown.Item>
                <Dropdown.Item 
                  onClick={() => scrollToSection("projects")}
                  className="cursor-pointer hover:bg-secondary"
                >
                  Portfólio
                </Dropdown.Item>
                <Dropdown.Item 
                  onClick={() => scrollToSection("skills")}
                  className="cursor-pointer hover:bg-secondary"
                >
                  Tecnologias
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item 
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer hover:bg-primary text-primary font-medium"
                >
                  Fale Comigo
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
