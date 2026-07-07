import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { siteContent } from "@/data/siteContent";
import { motion, useReducedMotion } from "framer-motion";

export const ProofBarSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={siteContent.proof.id} className="border-y border-white/10 bg-black/55 py-9" aria-label="Provas de confiança">
      <Container>
        <div className="grid grid-cols-2 gap-x-2 gap-y-7 sm:grid-cols-4 sm:gap-x-4">
          {siteContent.proof.items.map((item, index) => (
            <motion.article
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.32, delay: index * 0.05 }}
              className="min-w-0 px-1 text-center"
            >
              <CountUp
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                decimals={item.decimals}
                useGrouping={item.useGrouping}
                animate={item.animate}
                className="metric-value block whitespace-nowrap text-[clamp(1.65rem,7.2vw,2.25rem)] font-bold leading-none tabular-nums sm:text-4xl md:text-5xl"
              />
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-400 md:text-xs">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
