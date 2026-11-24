import { SeoHead } from "@/components/seo/SeoHead";

export const notFoundSeo = {
  title: "Página não encontrada | Denilson Junior",
  description: "Esta página não está disponível. Acesse os serviços e projetos de Denilson Junior.",
};

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#06080d] p-6 text-white">
      <SeoHead {...notFoundSeo} indexable={false} />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Página não encontrada</h1>
        <p className="mb-5 text-slate-300">Confira os serviços ou volte ao início do portfólio.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="text-cyan-200 underline hover:text-white">Página inicial</a>
          <a href="/servicos" className="text-cyan-200 underline hover:text-white">Ver serviços</a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
