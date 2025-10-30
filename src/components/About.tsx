const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Sobre Mim
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Profissional proativo e organizado, com sólida base em Ciência de Dados e forte 
              aptidão para análise e visualização de dados. Possuo experiência prática em Python 
              (pandas, NumPy) para manipulação, limpeza e validação de dados, e em SQL para 
              consulta e extração. Sou especializado na criação e manutenção de dashboards 
              interativos em Power BI e na construção de análises exploratórias.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Tenho conhecimento em fundamentos de estatística e Machine Learning supervisionado, 
              e busco continuamente aprender novas técnicas e ferramentas de Data Science. Minha 
              vivência em ambientes industriais me permitiu desenvolver soluções baseadas em dados 
              que otimizaram a performance e apoiaram a tomada de decisão.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
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
