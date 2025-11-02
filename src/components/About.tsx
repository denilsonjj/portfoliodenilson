const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in">
          Sobre Mim
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Profissional proativo e organizado, com sólida base em Ciência de Dados e forte 
              aptidão para análise e visualização de dados. Possuo experiência prática em Python 
              (pandas, NumPy) para manipulação, limpeza e validação de dados, e em SQL para 
              consulta e extração. Sou especializado na criação e manutenção de dashboards 
              interativos em Power BI e na construção de análises exploratórias.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Tenho conhecimento em fundamentos de estatística e Machine Learning supervisionado, 
              e busco continuamente aprender novas técnicas e ferramentas de Data Science. Minha 
              vivência em ambientes industriais me permitiu desenvolver soluções baseadas em dados 
              que otimizaram a performance e apoiaram a tomada de decisão.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Além da análise de dados, possuo experiência em Desenvolvimento Web, utilizando Python 
              para backend e React para criação de interfaces modernas e responsivas, combinando 
              minhas habilidades analíticas com desenvolvimento full-stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
