import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  BarChart,
  Code,
  FileSpreadsheet,
  TrendingUp,
  Layers,
} from "lucide-react";

const Skills = () => {
  const dataSkills = [
    {
      name: "Power BI",
      icon: <BarChart className="w-8 h-8" />,
      description: "Dashboards e visualizações",
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8" />,
      description: "Consultas e modelagem",
    },
    {
      name: "Python",
      icon: <Code className="w-8 h-8" />,
      description: "Análise e automação",
    },
    {
      name: "Excel Avançado",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      description: "Análise e relatórios",
    },
    {
      name: "Tableau",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Visualização de dados",
    },
    {
      name: "ETL",
      icon: <Layers className="w-8 h-8" />,
      description: "Integração de dados",
    },
  ];

  const devSkills = [
    {
      name: "React.js",
      icon: <Code className="w-8 h-8" />,
      description: "Interfaces modernas",
    },
    {
      name: "Node.js",
      icon: <Code className="w-8 h-8" />,
      description: "Backend escalável",
    },
    {
      name: "Python",
      icon: <Code className="w-8 h-8" />,
      description: "Desenvolvimento web",
    },
    {
      name: "HTML/CSS",
      icon: <Code className="w-8 h-8" />,
      description: "Estrutura e estilo",
    },
    {
      name: "JavaScript",
      icon: <Code className="w-8 h-8" />,
      description: "Interatividade web",
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in">
          Minhas Habilidades
        </h2>
        <p className="text-center text-white/80 mb-16 text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Ferramentas e tecnologias que domino
        </p>
        
        {/* Análise de Dados / IA */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12 text-white animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Análise de Dados / IA
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {dataSkills.map((skill, index) => (
              <Card
                key={index}
                className="group bg-black/40 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-purple-400 mb-3 group-hover:scale-110 group-hover:text-purple-300 transition-all">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-sm text-white/70">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desenvolvimento */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-12 text-white animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Desenvolvimento
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {devSkills.map((skill, index) => (
              <Card
                key={index}
                className="group bg-black/40 backdrop-blur-sm border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-violet-400 mb-3 group-hover:scale-110 group-hover:text-violet-300 transition-all">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-sm text-white/70">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
