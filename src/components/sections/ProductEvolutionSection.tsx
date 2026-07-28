import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Circle, Radio, Rocket } from "lucide-react";

const statusStyles = {
  done: {
    icon: CheckCircle2,
    label: "Concluído",
    item: "border-cyan-200/10 text-slate-400 line-through decoration-cyan-200/40",
    iconWrap: "border-emerald-400/30 bg-emerald-400/12 text-emerald-300",
  },
  active: {
    icon: Radio,
    label: "Em evolução",
    item: "border-cyan-200/16 text-white",
    iconWrap: "border-cyan-200/45 bg-cyan-200/12 text-cyan-200 shadow-[0_0_18px_rgba(151,247,255,0.18)]",
  },
  planned: {
    icon: Circle,
    label: "Planejado",
    item: "border-white/8 text-slate-500",
    iconWrap: "border-slate-500/45 bg-slate-700/15 text-slate-500",
  },
} as const;

export const ProductEvolutionSection = () => {
  const reduceMotion = useReducedMotion();
  const content = siteContent.productEvolution;

  return (
    <section id={content.id} className="surface-alt scroll-mt-24 py-16 md:py-24" aria-label="Evolu??o do produto Comandativa">
      <Container>
        <div className="mx-auto grid max-w-3xl gap-8">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.44 }}
            className="case-card relative overflow-hidden p-4 sm:p-6"
          >
            <div className="absolute inset-0 hero-mesh opacity-20" aria-hidden="true" />
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-200/12 blur-3xl" aria-hidden="true" />

            <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                  <Rocket size={19} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{content.sprint}</p>
                  <h3 className="font-heading text-2xl font-semibold text-white">{content.projectName}</h3>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.7)]" />
                {content.status}
              </span>
            </div>

            <div className="relative mt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200/80">{content.deliveryLabel}</p>
              <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">{content.deliveryTitle}</p>
                <p className="font-mono text-sm text-slate-400">{content.progress}%</p>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#97f7ff,#4f8dff)]"
                  initial={reduceMotion ? false : { width: 0 }}
                  whileInView={{ width: content.progress + "%" }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                />
              </div>
              <p className="mt-3 font-mono text-sm text-slate-500">{content.progressLabel}</p>
            </div>

            <div className="relative mt-7 divide-y divide-white/8 rounded-md border border-white/8 bg-black/12">
              {content.milestones.map((milestone) => {
                const status = statusStyles[milestone.status];
                const Icon = status.icon;

                return (
                  <a
                    key={milestone.title}
                    href={milestone.url}
                    target="_blank"
                    rel="noreferrer"
                    title={milestone.source}
                    className={cn(
                      "group flex items-center gap-3 px-3 py-3.5 transition hover:bg-white/[0.035] sm:px-4",
                      status.item,
                    )}
                  >
                    <span className={cn("inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border", status.iconWrap)}>
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-snug sm:text-base">{milestone.title}</span>
                      <span className="mt-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 no-underline">
                        {status.label}
                        <ArrowUpRight size={12} className="opacity-0 transition group-hover:opacity-100" />
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
};
