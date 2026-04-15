import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const MethodologySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.3"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.55 });
  const routeTravel = useTransform(scrollYProgress, [0, 0.45, 0.78, 1], [0, 24, 150, 300]);
  const routeY = useSpring(routeTravel, { stiffness: 96, damping: 22, mass: 0.72 });
  const stepsCount = siteContent.methodology.steps.length;

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const clamped = Math.min(1, Math.max(0, value));
    const index = Math.min(stepsCount - 1, Math.max(0, Math.round(clamped * (stepsCount - 1))));
    setActiveIndex((current) => (current === index ? current : index));
  });

  return (
    <section
      id={siteContent.methodology.id}
      className="surface-base scroll-mt-24 pb-12 pt-16 md:pb-16 md:pt-20"
      aria-labelledby="method-title"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative">
            <div className="lg:sticky lg:top-20">
              <span className="section-badge">{siteContent.methodology.badge}</span>
              <h2 id="method-title" className="headline-lg mt-5 text-white">
                {siteContent.methodology.title}
              </h2>
              <p className="muted-copy mt-5 max-w-md text-base leading-relaxed">{siteContent.methodology.description}</p>

              <div className="mt-9 hidden lg:block">
                <motion.div style={reduceMotion ? undefined : { y: routeY }}>
                  <div className="rounded-[0.95rem] border border-cyan-200/14 bg-[radial-gradient(circle_at_50%_0%,rgba(0,224,255,0.14),rgba(6,14,26,0.94)_50%),linear-gradient(180deg,#060f1d_0%,#050b14_100%)] p-5 shadow-[0_24px_52px_-30px_rgba(0,0,0,0.9),0_0_26px_-20px_rgba(0,224,255,0.35)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-200/90">Rota de execução</p>

                    <div className="mt-4 space-y-2.5">
                      {siteContent.methodology.steps.map((step, index) => (
                        <div key={step.title} className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              "h-2.5 w-2.5 rounded-full border border-slate-500 bg-slate-600/55 transition-all duration-300",
                              activeIndex >= index && "border-cyan-200 bg-cyan-200 shadow-[0_0_14px_rgba(151,247,255,0.55)]",
                            )}
                          />
                          <p
                            className={cn(
                              "text-xs font-medium uppercase tracking-[0.11em] text-slate-400 transition-colors duration-300",
                              activeIndex >= index && "text-cyan-100",
                            )}
                          >
                            {String(index + 1).padStart(2, "0")} · {step.title}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-5 gap-1.5">
                      {siteContent.methodology.steps.map((step, index) => (
                        <div
                          key={step.title}
                          className={cn("h-1 rounded-full transition-colors duration-300", activeIndex >= index ? "bg-cyan-200/85" : "bg-slate-500/35")}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                      Etapa ativa: {String(activeIndex + 1).padStart(2, "0")} · {siteContent.methodology.steps[activeIndex]?.title}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div ref={timelineRef} className="relative pb-10 pl-10 sm:pl-12">
            <div className="absolute bottom-5 left-4 top-2 w-px bg-slate-700/55">
              <motion.div className="w-full origin-top bg-cyan-200" style={reduceMotion ? { scaleY: 1 } : { scaleY: progress }} />
            </div>

            <div className="space-y-8 lg:space-y-9">
              {siteContent.methodology.steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  viewport={{ amount: 0.6 }}
                  initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={
                    reduceMotion
                      ? {}
                      : { type: "spring", stiffness: 130, damping: 20, mass: 0.5, delay: index * 0.04 }
                  }
                  className={cn(
                    "method-card relative z-10 p-5 shadow-[0_14px_30px_-22px_rgba(0,0,0,0.85)] sm:p-6",
                    activeIndex === index && "border-cyan-200/42 bg-[#122033]",
                  )}
                >
                  <span
                    className={cn(
                      "absolute -left-[35px] top-7 h-4 w-4 rounded-full border border-slate-600 bg-[#0c1420]",
                      activeIndex === index && "border-cyan-200 bg-cyan-200 shadow-[0_0_18px_rgba(151,247,255,0.5)]",
                    )}
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200/75">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
