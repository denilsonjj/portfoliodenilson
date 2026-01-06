import { Target, Users, Zap, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com objetivos claros e mensuráveis."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Trabalho lado a lado com você para entender suas necessidades."
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entregas rápidas sem comprometer a qualidade."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Soluções robustas e bem documentadas."
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in">
            Por Que Me Escolher?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Com experiência em ambientes industriais e projetos reais, entrego soluções 
            que fazem a diferença no seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] text-center animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-purple-500/30 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-2xl font-bold text-white mb-4">Minha Abordagem</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Combino conhecimento técnico em <strong className="text-purple-300">Ciência de Dados</strong> e{" "}
              <strong className="text-purple-300">Desenvolvimento Web</strong> para criar soluções completas. 
              Utilizo Python, SQL, Power BI e React para entregar desde análises exploratórias 
              até sistemas web completos.
            </p>
            <p className="text-white/80 leading-relaxed">
              Minha experiência em ambientes industriais me ensinou a criar soluções 
              práticas que realmente impactam os resultados do negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
