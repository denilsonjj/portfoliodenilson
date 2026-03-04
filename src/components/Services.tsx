import { BarChart3, Code, Database, Workflow } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Consultoria de dados",
    description: "Estruturo base, modelo e análise para você tomar decisões com mais segurança.",
    items: ["Mapeamento de indicadores", "Análise exploratória", "Modelagem SQL e ETL"],
  },
  {
    icon: BarChart3,
    title: "Dashboards executivos",
    description: "Painéis orientados a negócio, com foco em leitura rápida e ação.",
    items: ["Power BI", "Storytelling com dados", "KPIs de operação e vendas"],
  },
  {
    icon: Code,
    title: "Aplicações web",
    description: "Sistemas sob medida para digitalizar processos e reduzir atrito no trabalho diário.",
    items: ["React + TypeScript", "Backend Node/Python", "Integração com APIs"],
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    description: "Fluxos inteligentes para diminuir retrabalho e acelerar entregas internas.",
    items: ["Rotinas de dados", "Alertas e monitoramento", "Padronização operacional"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-shell">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Serviços</span>
          <h2 className="section-title">Como eu posso ajudar seu negócio hoje</h2>
          <p className="section-subtitle">Atuação ponta a ponta, da identificação do problema até a entrega em produção.</p>
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
