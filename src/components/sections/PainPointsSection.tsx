import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Gauge, Layers3, Repeat2, ScanSearch, Workflow } from "lucide-react";
import { useRef } from "react";
import { EarthGlobe } from "@/components/ui/earth-globe";

const icons = [Workflow, Gauge, ScanSearch, Repeat2, Layers3];
export const PainPointsSection = () => {
  const reduceMotion = useReducedMotion();
  const { lowPower } = usePerformanceMode();
  const globeRef = useRef<HTMLDivElement>(null);
  const shouldRenderGlobe = useInView(globeRef, { once: true, margin: "320px 0px" });

  return (
    <section id="dores" className="section-wrap surface-alt scroll-mt-24" aria-labelledby="pain-title">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <span className="section-badge">{siteContent.pain.badge}</span>
            <h2 id="pain-title" className="headline-lg mt-5 text-white">
              {siteContent.pain.title}
            </h2>
            <p className="muted-copy mt-5 max-w-xl text-base leading-relaxed">{siteContent.pain.description}</p>

            <div
              ref={globeRef}
              className="relative mt-9 h-[330px] overflow-hidden rounded-[0.9rem] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(6,14,25,0.5),rgba(5,11,20,0.22))] sm:h-[390px] lg:mt-10 lg:h-[470px] xl:h-[500px]"
              aria-label="Rede global animada representando sistemas conectados"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_30%,rgba(0,224,255,0.12),transparent_44%)]" />
              {shouldRenderGlobe ? (
                <EarthGlobe
                  className="absolute inset-1 sm:inset-2 xl:inset-3"
                  reduceMotion={reduceMotion ?? false}
                  lowPower={lowPower}
                />
              ) : null}
              <motion.div
                className="pointer-events-none absolute left-1/2 top-[53%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,224,255,0.25),transparent_72%)] blur-[28px]"
                animate={reduceMotion ? {} : { opacity: [0.24, 0.5, 0.24], scale: [0.96, 1.06, 0.96] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="pointer-events-none absolute inset-5 rounded-[0.86rem] border border-cyan-200/14" />
              <div className="pointer-events-none absolute inset-0 hero-mesh opacity-[0.09]" />
              <div className="pointer-events-none absolute inset-x-8 bottom-8 h-16 rounded-full bg-[radial-gradient(circle,rgba(0,224,255,0.18),transparent_68%)] blur-2xl" />
            </div>
          </div>

          <div className="relative pt-2 lg:pt-3">
            <div className="relative z-10 space-y-4">
              {siteContent.pain.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                const indent = index % 2 === 1 ? "md:ml-10" : "";

                return (
                  <motion.article
                    key={item.title}
                    initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{ duration: 0.34, delay: index * 0.05 }}
                    className={`pain-card p-5 sm:p-6 ${indent}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cyan-200/20 bg-cyan-200/10 text-cyan-200">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                        <p className="muted-copy mt-2 text-sm leading-relaxed sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
