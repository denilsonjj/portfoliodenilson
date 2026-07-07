import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BarChart3, CheckCircle2, Database, FileCode2 } from "lucide-react";

const icons = [Database, FileCode2, BarChart3];

const CaseVisual = ({ index }: { index: number }) => (
  <div className="relative h-48 overflow-hidden rounded-md border border-cyan-200/15 bg-[#07101c] p-4" aria-hidden="true">
    <div className="absolute inset-0 hero-mesh opacity-20" />
    <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
      <span className="h-2 w-20 rounded-full bg-cyan-200/30" />
      <span className="h-2 w-8 rounded-full bg-slate-600/60" />
    </div>
    {index === 0 ? (
      <div className="relative mt-4 grid grid-cols-3 gap-2">
        {[72, 48, 84].map((height, itemIndex) => (
          <div key={height} className="rounded-sm border border-white/10 bg-white/[0.03] p-2">
            <span className="block h-1.5 w-8 rounded-full bg-slate-600" />
            <span className="mt-2 block h-2 rounded-full bg-cyan-200/45" style={{ width: `${height}%` }} />
            <span className="mt-3 block h-8 rounded-sm bg-[linear-gradient(135deg,rgba(151,247,255,0.16),rgba(37,99,235,0.08))]" />
            <span className="sr-only">Indicador {itemIndex + 1}</span>
          </div>
        ))}
      </div>
    ) : index === 1 ? (
      <div className="relative mt-4 space-y-2">
        {["Cadastro validado", "Etiqueta gerada", "Arquivo organizado"].map((label) => (
          <div key={label} className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.03] px-3 py-2">
            <CheckCircle2 size={13} className="text-cyan-200" />
            <span className="text-[10px] uppercase tracking-[0.11em] text-slate-300">{label}</span>
          </div>
        ))}
      </div>
    ) : (
      <div className="relative mt-4 flex h-28 items-end gap-2 rounded-sm border border-white/10 bg-white/[0.025] px-3 pb-3">
        {[42, 64, 51, 82, 70, 94].map((height, itemIndex) => (
          <span
            key={`${height}-${itemIndex}`}
            className="flex-1 rounded-t-sm bg-[linear-gradient(180deg,#97f7ff,rgba(37,99,235,0.28))]"
            style={{ height: `${height}%`, opacity: 0.48 + itemIndex * 0.07 }}
          />
        ))}
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(151,247,255,0.13),transparent_38%)]" />
  </div>
);

export const CaseStudiesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={siteContent.cases.id} className="section-wrap surface-alt scroll-mt-24" aria-labelledby="cases-title">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <span className="section-badge">{siteContent.cases.badge}</span>
            <h2 id="cases-title" className="headline-lg mt-5 text-white">{siteContent.cases.title}</h2>
          </div>
          <p className="muted-copy max-w-2xl text-base leading-relaxed lg:justify-self-end">{siteContent.cases.description}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteContent.cases.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.36, delay: index * 0.06 }}
                className="case-card flex h-full flex-col overflow-hidden p-3"
              >
                <CaseVisual index={index} />
                <div className="flex flex-1 flex-col p-3 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-cyan-200/20 bg-cyan-200/10 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">Projeto entregue</span>
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="muted-copy mt-3 text-sm leading-relaxed"><strong className="text-slate-200">Desafio:</strong> {item.challenge}</p>
                  <p className="muted-copy mt-2 text-sm leading-relaxed"><strong className="text-slate-200">Solução:</strong> {item.solution}</p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200/85">{item.result}</p>
                  </div>
                  <a href="#contato" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white">
                    Quero uma solução parecida <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
