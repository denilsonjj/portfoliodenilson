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
              Sou um profissional apaixonado por transformar dados em insights valiosos. 
              Com experiência em análise de dados e Business Intelligence, atuo desenvolvendo 
              soluções que auxiliam na tomada de decisões estratégicas.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Minha abordagem combina habilidades técnicas em ferramentas de análise e 
              visualização de dados com uma visão de negócio, permitindo traduzir números 
              complexos em histórias compreensíveis e acionáveis.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              Estou sempre em busca de novos desafios que me permitam aplicar e expandir 
              minhas habilidades em análise de dados, contribuindo para o crescimento e 
              sucesso dos projetos em que me envolvo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
