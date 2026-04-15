import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, Bot, Code2, Database } from "lucide-react";

const icons = [BarChart3, Bot, Code2, Database];

export const SolutionsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={siteContent.solutions.id} className="section-wrap surface-base scroll-mt-24" aria-labelledby="solutions-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="solutions-title" className="headline-lg text-white">
            {siteContent.solutions.title}
          </h2>
          <p className="muted-copy mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            {siteContent.solutions.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.solutions.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                viewport={{ once: true, amount: 0.26 }}
                transition={{ duration: 0.32, delay: index * 0.05 }}
                className="solution-card flex h-full flex-col justify-between p-6"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cyan-200/20 bg-cyan-200/10 text-cyan-200">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="muted-copy mt-3 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200/80">{item.gain}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-200">
                    {siteContent.solutions.cardCtaLabel} <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
