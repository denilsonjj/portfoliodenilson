import { BarChart4, Database, Globe, Layers3, Wrench } from "lucide-react";

const skillTracks = [
  {
    icon: BarChart4,
    title: "BI e Visualização",
    focus: "Dashboards e leitura executiva",
    tools: ["Power BI", "Looker Studio", "Tableau"],
  },
  {
    icon: Database,
    title: "Dados e modelagem",
    focus: "Estruturação e consulta de dados",
    tools: ["SQL", "ETL", "Data Modeling"],
  },
  {
    icon: Globe,
    title: "Front-end",
    focus: "Interfaces modernas e performáticas",
    tools: ["React", "TypeScript", "Tailwind"],
  },
  {
    icon: Wrench,
    title: "Back-end",
    focus: "APIs e regras de negócio",
    tools: ["Node.js", "Python", "Supabase"],
  },
  {
    icon: Layers3,
    title: "Processo e operação",
    focus: "Melhoria contínua e KPI operacional",
    tools: ["Manutenção", "KPIs industriais", "Melhoria contínua"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Stack</span>
          <h2 className="section-title">Tecnologias que sustentam as entregas</h2>
          <p className="section-subtitle">Combino ferramentas de dados e produto para criar soluções completas.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillTracks.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title} className="glass-card panel-hover p-6">
                <div className="flex items-start">
                  <div className="inline-flex rounded-xl border border-primary/30 bg-primary/15 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold">{track.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{track.focus}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {track.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
