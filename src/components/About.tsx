import { BriefcaseBusiness, ChartNoAxesCombined, Handshake, Lightbulb } from "lucide-react";

const values = [
  {
    icon: BriefcaseBusiness,
    title: "Visão de negócio",
    description: "Soluções pensadas para gerar impacto em operação, vendas e tomada de decisão.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Dados aplicados",
    description: "Modelagem, indicadores e dashboards para transformar ruído em clareza.",
  },
  {
    icon: Handshake,
    title: "Parceria próxima",
    description: "Comunicação direta, checkpoints frequentes e ajuste rápido de rota.",
  },
  {
    icon: Lightbulb,
    title: "Execução prática",
    description: "Projeto bonito, performático e pronto para uso no dia a dia.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Sobre mim</span>
          <h2 className="section-title">Combino experiência industrial com produto digital.</h2>
          <p className="section-subtitle">
            Atuo entre negócio, dados e desenvolvimento para criar ferramentas que resolvem problemas reais com velocidade e qualidade.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="glass-card p-7 md:p-9">
            <h3 className="text-2xl font-bold">Quem é Denilson Junior?</h3>
            <p className="mt-4 text-muted-foreground">
              Sou desenvolvedor focado em BI, analytics e aplicações web. Minha base em manutenção industrial me deu repertório para entender operações complexas e construir soluções objetivas.
            </p>
            <p className="mt-4 text-muted-foreground">
              Trabalho com Power BI, Python, SQL, React e Node para entregar projetos completos, da análise inicial ao deploy.
            </p>

            <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-muted-foreground">Base</p>
                <p className="mt-1 font-semibold text-foreground">Dados + Produto Digital</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-muted-foreground">Atuação</p>
                <p className="mt-1 font-semibold text-foreground">Freelance e consultoria</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-muted-foreground">Disponibilidade</p>
                <p className="mt-1 font-semibold text-foreground">Projetos nacionais</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-muted-foreground">Contato</p>
                <p className="mt-1 break-all text-xs font-semibold text-foreground sm:text-sm">juniordenilson363@gmail.com</p>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="glass-card panel-hover flex items-start gap-4 p-6">
                  <div className="rounded-2xl border border-primary/30 bg-primary/15 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
