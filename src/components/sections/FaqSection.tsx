import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={siteContent.faq.id} className="section-wrap surface-base scroll-mt-24" aria-labelledby="faq-title">
      <Container className="max-w-4xl">
        <h2 id="faq-title" className="text-center font-heading text-3xl font-bold text-white sm:text-4xl">
          {siteContent.faq.title}
        </h2>

        <div className="mt-10 space-y-3">
          {siteContent.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article key={item.question} className="faq-card overflow-hidden">
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-cyan-200 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden"
                    >
                      <p className="muted-copy border-t border-white/10 px-5 py-4 text-sm leading-relaxed sm:px-6 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
