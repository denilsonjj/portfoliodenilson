import { BarChart3, Code, Database, Workflow } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Consultoria de dados",
    description: "Estruturo base, modelo e analise para voce tomar decisoes com mais seguranca.",
    items: ["Mapeamento de indicadores", "Analise exploratoria", "Modelagem SQL e ETL"],
  },
  {
    icon: BarChart3,
    title: "Dashboards executivos",
    description: "Paineis orientados a negocio, com foco em leitura rapida e acao.",
    items: ["Power BI", "Storytelling com dados", "KPIs de operacao e vendas"],
  },
  {
    icon: Code,
    title: "Aplicacoes web",
    description: "Sistemas sob medida para digitalizar processos e reduzir atrito no trabalho diario.",
    items: ["React + TypeScript", "Backend Node/Python", "Integracao com APIs"],
  },
  {
    icon: Workflow,
    title: "Automacao de processos",
    description: "Fluxos inteligentes para diminuir retrabalho e acelerar entregas internas.",
    items: ["Rotinas de dados", "Alertas e monitoramento", "Padronizacao operacional"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-shell">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Servicos</span>
          <h2 className="section-title">Como eu posso ajudar seu negocio hoje</h2>
          <p className="section-subtitle">Atuacao ponta a ponta, da identificacao do problema ate a entrega em producao.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="glass-card panel-hover p-6 md:p-7">
                <div className="inline-flex rounded-2xl border border-primary/30 bg-primary/15 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
