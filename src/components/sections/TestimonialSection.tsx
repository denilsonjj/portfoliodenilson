import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

export const TestimonialSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="surface-alt pb-14 pt-8 md:pb-16 md:pt-10" aria-label="Depoimentos">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.38 }}
          transition={{ duration: 0.34 }}
          className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(140deg,rgba(14,20,31,0.94),rgba(9,13,20,0.96))] px-6 py-10 sm:px-10 sm:py-14"
        >
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-cyan-200/10 blur-3xl" />
          <div className="relative z-10">
            <Quote size={42} className="text-cyan-200" />
            <blockquote className="mt-6 max-w-5xl font-heading text-2xl font-medium leading-tight text-white sm:text-[2.2rem]">
              "{siteContent.testimonial.main.quote}"
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_35%_30%,rgba(151,247,255,0.35),transparent_63%),#0b1320]" />
              <div>
                <p className="font-heading text-lg font-semibold text-white">{siteContent.testimonial.main.person}</p>
                <p className="muted-copy text-sm">{siteContent.testimonial.main.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {siteContent.testimonial.supporting.map((item, index) => (
            <motion.article
              key={item.person}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="rounded-md border border-white/10 bg-[linear-gradient(160deg,rgba(16,23,35,0.88),rgba(10,14,22,0.92))] p-5"
            >
              <p className="text-sm leading-relaxed text-slate-200">"{item.quote}"</p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-cyan-200/80">{item.person}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
