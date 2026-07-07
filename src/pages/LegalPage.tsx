import { FooterSection } from "@/components/sections/FooterSection";
import { SeoHead } from "@/components/seo/SeoHead";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";

const legalContent = {
  privacidade: {
    title: "Política de Privacidade",
    description: "Como os dados enviados pelo site de Denilson Junior são coletados, utilizados e protegidos.",
    sections: [
      ["Dados coletados", "Quando você envia o formulário de contato, podemos coletar nome, e-mail e a descrição do desafio informado. Também podem ser registrados dados técnicos e eventos de navegação quando você autoriza o uso de analytics."],
      ["Como os dados são utilizados", "As informações são usadas para responder ao contato, entender a necessidade apresentada, preparar propostas e melhorar a experiência do site. Não comercializamos dados pessoais."],
      ["Armazenamento e fornecedores", "As mensagens podem ser processadas e armazenadas por serviços de infraestrutura, banco de dados e e-mail utilizados na operação do site, incluindo Supabase e Vercel, conforme suas próprias políticas e medidas de segurança."],
      ["Seus direitos", "Você pode solicitar acesso, correção ou exclusão dos dados enviados, além de retirar consentimentos aplicáveis, pelo e-mail juniordenilson363@gmail.com."],
      ["Prazo e atualizações", "Os dados são mantidos pelo período necessário para atender ao contato e cumprir obrigações aplicáveis. Esta política pode ser atualizada para refletir mudanças no site ou nos serviços utilizados."],
    ],
  },
  termos: {
    title: "Termos de Uso",
    description: "Condições gerais para navegação e contato por meio deste site.",
    sections: [
      ["Finalidade do site", "Este site apresenta serviços, experiências profissionais e canais de contato de Denilson Junior. O conteúdo possui caráter informativo e não representa proposta comercial definitiva."],
      ["Propostas e contratação", "Escopo, valores, prazos, responsabilidades e condições de cada projeto serão definidos em proposta ou contrato específico aceito pelas partes."],
      ["Conteúdo e propriedade intelectual", "Textos, identidade visual e elementos próprios do portfólio não podem ser reproduzidos comercialmente sem autorização. Marcas e serviços de terceiros pertencem aos respectivos titulares."],
      ["Links externos", "O site pode direcionar para WhatsApp, Instagram, GitHub e outros serviços externos. O uso desses ambientes está sujeito às regras e políticas de cada plataforma."],
      ["Disponibilidade e alterações", "Buscamos manter as informações corretas e o site disponível, mas podem ocorrer interrupções ou atualizações. Estes termos podem ser revisados quando necessário."],
    ],
  },
  cookies: {
    title: "Política de Cookies",
    description: "Entenda quais preferências e tecnologias de medição podem ser utilizadas neste site.",
    sections: [
      ["Preferência de consentimento", "O site guarda no seu navegador a escolha feita no aviso de cookies para não solicitar a mesma decisão a cada visita."],
      ["Analytics opcionais", "Quando você aceita, ferramentas de medição podem registrar páginas visitadas e interações de forma agregada para ajudar a melhorar o site. O Google Analytics, quando configurado, utiliza anonimização de IP."],
      ["Recusar ou alterar", "Você pode recusar analytics no aviso inicial. Também pode apagar os dados do site nas configurações do navegador para escolher novamente em uma próxima visita."],
      ["Serviços externos", "Ao abrir links para outras plataformas, esses serviços podem aplicar suas próprias tecnologias e políticas de cookies."],
    ],
  },
} as const;

export default function LegalPage() {
  const { pathname } = useLocation();
  const document = pathname.slice(1) as keyof typeof legalContent;
  const content = legalContent[document];

  if (!content) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-[#06080d] text-white">
      <SeoHead
        title={`${content.title} | ${siteContent.brand.name}`}
        description={content.description}
        siteUrl={siteContent.seo.siteUrl}
        canonicalPath={`/${document}`}
        ogImagePath={siteContent.seo.ogImagePath}
        instagram={siteContent.seo.instagram}
        brandName={siteContent.brand.name}
        serviceDescription={siteContent.seo.serviceDescription}
        areaServed={siteContent.seo.areaServed}
        addressLocality={siteContent.seo.addressLocality}
        addressRegion={siteContent.seo.addressRegion}
        addressCountry={siteContent.seo.addressCountry}
      />
      <header className="border-b border-white/10 bg-[#070b12]/95">
        <Container className="flex h-20 items-center justify-between">
          <Link to="/" className="font-heading text-xl font-semibold text-white">{siteContent.brand.name}</Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-white"><ArrowLeft size={16} /> Voltar ao site</Link>
        </Container>
      </header>
      <main id="main-content" className="section-wrap">
        <Container className="max-w-4xl">
          <span className="section-badge">TRANSPARÊNCIA</span>
          <h1 className="headline-lg mt-5 text-white">{content.title}</h1>
          <p className="muted-copy mt-4 max-w-2xl leading-relaxed">{content.description}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.12em] text-slate-500">Atualizado em 7 de julho de 2026</p>
          <div className="mt-10 space-y-4">
            {content.sections.map(([title, body]) => (
              <section key={title} className="rounded-md border border-white/10 bg-[#0d1522]/80 p-5 sm:p-6">
                <h2 className="font-heading text-xl font-semibold text-white">{title}</h2>
                <p className="muted-copy mt-3 leading-relaxed">{body}</p>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
}
