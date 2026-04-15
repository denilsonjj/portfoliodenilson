import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";

export const FooterSection = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-10" aria-label="Rodapé">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-xl font-semibold text-cyan-200">{siteContent.brand.name}</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">{siteContent.footer.note}</p>
          <p className="mt-2 max-w-md text-xs text-slate-500">{siteContent.seo.localServiceLine}</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          {siteContent.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};
