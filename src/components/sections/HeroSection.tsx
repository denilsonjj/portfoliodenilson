import { Container } from "@/components/ui/container";
import { GradientButton } from "@/components/ui/gradient-button";
import { siteContent } from "@/data/siteContent";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const nodes = [
  { id: "n1", left: "17%", top: "26%", delay: 0 },
  { id: "n2", left: "48%", top: "32%", delay: 0.3 },
  { id: "n3", left: "78%", top: "38%", delay: 0.6 },
  { id: "n4", left: "30%", top: "62%", delay: 0.9 },
  { id: "n5", left: "63%", top: "69%", delay: 1.2 },
];

const panelPositions = ["left-4 top-16", "right-4 top-36", "left-8 bottom-[4.8rem]"];

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(sectionRef, { amount: 0.2 });
  const shouldAnimate = !reduceMotion && inView;
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 16, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 16, mass: 0.6 });

  const pointerGlow = useMotionTemplate`radial-gradient(430px circle at ${smoothX}% ${smoothY}%, rgba(151,247,255,0.2), rgba(151,247,255,0) 65%)`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const meshY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 26]);

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion || !sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    pointerX.set(x);
    pointerY.set(y);
  };

  return (
    <section
      id={siteContent.hero.id}
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-24"
      onMouseMove={onMove}
      aria-labelledby="hero-title"
    >
      <div className="hero-flow absolute inset-0" />
      <motion.div className="hero-mesh absolute inset-0 opacity-40" style={{ y: reduceMotion ? 0 : meshY }} />
      <motion.div className="absolute inset-0" style={{ background: pointerGlow }} />
      <div className="hero-orb-left" />
      <div className="hero-orb-right" />

      <Container className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center pb-16 pt-8 md:pb-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-3xl"
          >
            <span className="section-badge">{siteContent.hero.badge}</span>
            <h1 id="hero-title" className="headline-xl mt-6 text-white">
              {siteContent.hero.titleLineOne}
              <span className="accent-text block italic">{siteContent.hero.titleAccent}</span>
            </h1>
            <p className="muted-copy mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">{siteContent.hero.description}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GradientButton asChild size="large">
                <a href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label}</a>
              </GradientButton>
              <GradientButton asChild variant="secondary" size="large" className="group">
                <a href={siteContent.hero.secondaryCta.href}>
                  {siteContent.hero.secondaryCta.label}
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </GradientButton>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative hidden lg:block"
            style={{ y: reduceMotion ? 0 : panelY }}
          >
            <div className="hero-right-frame p-5">
              <div className="hero-system relative h-[34rem] rounded-md border border-white/10 bg-[#0a111d]/92 p-4">
                <motion.img
                  src={siteContent.hero.visual.image}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
                  style={{ y: reduceMotion ? 0 : imageY }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_35%,rgba(151,247,255,0.18),transparent_40%),linear-gradient(180deg,rgba(8,13,22,0.2),rgba(5,8,14,0.9))]" />

                <div className="hero-topbar absolute left-4 right-4 top-3 z-20 flex items-center justify-between rounded-sm border border-cyan-200/15 bg-[#0b1422]/90 px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-200/80" />
                    <span className="h-2 w-2 rounded-full bg-slate-500/70" />
                    <span className="h-2 w-2 rounded-full bg-slate-500/70" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-cyan-200/80">{siteContent.hero.visual.panelHeader}</p>
                </div>

                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 400 540"
                  className="pointer-events-none absolute inset-0 z-10 h-full w-full"
                >
                  <motion.path
                    d="M72 146 L182 174 L304 214"
                    stroke="rgba(151,247,255,0.45)"
                    strokeWidth="1.3"
                    strokeDasharray="7 9"
                    fill="none"
                    animate={reduceMotion ? {} : { strokeDashoffset: [0, -34] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                  />
                  <motion.path
                    d="M182 174 L124 322 L252 372"
                    stroke="rgba(151,247,255,0.35)"
                    strokeWidth="1.2"
                    strokeDasharray="6 10"
                    fill="none"
                    animate={reduceMotion ? {} : { strokeDashoffset: [0, -30] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  />
                  <motion.path
                    d="M304 214 L252 372"
                    stroke="rgba(151,247,255,0.3)"
                    strokeWidth="1.2"
                    strokeDasharray="8 10"
                    fill="none"
                    animate={reduceMotion ? {} : { strokeDashoffset: [0, -24] }}
                    transition={{ repeat: Infinity, duration: 2.1, ease: "linear" }}
                  />
                </motion.svg>

                <div className="absolute inset-0 z-20">
                  {nodes.map((node) => (
                    <motion.span
                      key={node.id}
                      className="hero-node"
                      style={{ left: node.left, top: node.top }}
                      animate={shouldAnimate ? { scale: [1, 1.35, 1], opacity: [0.45, 1, 0.45] } : {}}
                      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: node.delay }}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 z-20">
                  {siteContent.hero.panels.map((panel, index) => (
                    <motion.div
                      key={panel.label}
                      animate={shouldAnimate ? { y: [0, index % 2 === 0 ? -8 : 7, 0] } : {}}
                      transition={{ repeat: Infinity, duration: 3.4 + index * 0.25, ease: "easeInOut", delay: index * 0.25 }}
                      className={`hero-floating-card absolute ${panelPositions[index]}`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.15em] text-cyan-200/85">{panel.label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{panel.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute bottom-[5.4rem] right-4 z-20 rounded-sm border border-white/10 bg-[#0f1726]/90 p-3">
                  <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <span>{siteContent.hero.visual.signalTitle}</span>
                    <span>{siteContent.hero.visual.signalState}</span>
                  </div>
                  <div className="space-y-2">
                    {siteContent.hero.systemSignals.map((signal, index) => (
                      <div key={signal.label} className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">{signal.label}</span>
                        <motion.span
                          className="inline-flex items-center gap-1 text-cyan-200"
                          animate={shouldAnimate ? { opacity: [0.5, 1, 0.5] } : {}}
                          transition={{ repeat: Infinity, duration: 1.2, delay: index * 0.18 }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                          {signal.status}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-sm border border-white/10 bg-[#0f1726]/90 px-3 py-2">
                  <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <span>{siteContent.hero.visual.flowLabel}</span>
                    <span>{siteContent.hero.visual.connectorsLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {nodes.map((node) => (
                      <motion.span
                        key={`flow-${node.id}`}
                        className="h-2.5 w-2.5 rounded-full border border-cyan-200/50 bg-cyan-200/30"
                        animate={shouldAnimate ? { scale: [1, 1.25, 1], opacity: [0.4, 1, 0.4] } : {}}
                        transition={{ repeat: Infinity, duration: 1.3, delay: node.delay * 0.7 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
