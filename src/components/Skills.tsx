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
  const skills = [
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

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Minhas Habilidades
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Ferramentas e tecnologias que domino
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-primary/50"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
