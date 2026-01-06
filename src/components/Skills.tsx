import { 
  Database, 
  BarChart, 
  Code, 
  FileSpreadsheet, 
  TrendingUp, 
  Layers,
  Cpu,
  Globe
} from "lucide-react";

const Skills = () => {
  const technologies = [
    { name: "Power BI", icon: BarChart, category: "BI" },
    { name: "Python", icon: Code, category: "Dados" },
    { name: "SQL", icon: Database, category: "Dados" },
    { name: "Excel", icon: FileSpreadsheet, category: "Análise" },
    { name: "Tableau", icon: TrendingUp, category: "BI" },
    { name: "React", icon: Globe, category: "Web" },
    { name: "Machine Learning", icon: Cpu, category: "IA" },
    { name: "ETL", icon: Layers, category: "Dados" },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ferramentas que utilizo para entregar soluções de qualidade
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-3 bg-card backdrop-blur-sm rounded-full border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                <span className="text-foreground font-medium">{tech.name}</span>
                <span className="text-xs text-primary/70 px-2 py-0.5 bg-primary/10 rounded-full">
                  {tech.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
