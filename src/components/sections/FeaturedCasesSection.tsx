import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/siteContent";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const FeaturedCasesSection = () => {
  const reduceMotion = useReducedMotion();
  const { flagship, side } = siteContent.cases;
  const sideCases = side.slice(0, 2);
  const sectionRef = useRef<HTMLElement>(null);
  const mainCardRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mainImageY = useTransform(scrollYProgress, [0, 1], [22, -20]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -14]);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, { stiffness: 170, damping: 20, mass: 0.45 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 170, damping: 20, mass: 0.45 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, rgba(151,247,255,0.16), rgba(151,247,255,0) 62%)`;

  const handleMainMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion || !mainCardRef.current) return;
    const rect = mainCardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const clampedX = Math.min(Math.max(px, 0), 1);
    const clampedY = Math.min(Math.max(py, 0), 1);

    glowX.set(clampedX * 100);
    glowY.set(clampedY * 100);
    rotateX.set((0.5 - clampedY) * 7.2);
    rotateY.set((clampedX - 0.5) * 7.2);
  };

  const resetMainTilt = () => {
    if (reduceMotion) return;
    animate(rotateX, 0, { type: "spring", stiffness: 160, damping: 18 });
    animate(rotateY, 0, { type: "spring", stiffness: 160, damping: 18 });
  };

  return (
    <section ref={sectionRef} id={siteContent.cases.id} className="section-wrap bg-black/70 scroll-mt-24" aria-labelledby="cases-title">
      <Container>
        <div className="mb-10 max-w-3xl">
          <h2 id="cases-title" className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {siteContent.cases.title}
          </h2>
          <p className="muted-copy mt-3 text-sm leading-relaxed sm:text-base">{siteContent.cases.subtitle}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <motion.article
            ref={mainCardRef}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            whileHover={reduceMotion ? {} : { y: -4 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.34 }}
            className="case-card case-main-card relative isolate overflow-hidden lg:col-span-8"
            style={
              reduceMotion
                ? {}
                : {
                    rotateX: smoothRotateX,
                    rotateY: smoothRotateY,
                    transformPerspective: 1200,
                    transformStyle: "preserve-3d",
                  }
            }
            onMouseMove={handleMainMove}
            onMouseLeave={resetMainTilt}
            onBlur={resetMainTilt}
          >
            <motion.img
              src={flagship.image}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
              style={{ y: reduceMotion ? 0 : mainImageY }}
            />
            <motion.div
              style={{ y: reduceMotion ? 0 : overlayY }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(0,228,255,0.25),transparent_35%),radial-gradient(circle_at_82%_14%,rgba(34,84,172,0.35),transparent_28%),linear-gradient(145deg,rgba(11,23,44,0.92),rgba(6,13,24,0.94))]"
            />
            <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
            <div className="absolute inset-0 hero-mesh opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a12] via-[#050a12]/30 to-transparent" />

            <div className="relative z-10 flex min-h-[390px] flex-col justify-end p-6 sm:min-h-[410px] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">{flagship.badge}</p>
              <h3 className="mt-3 max-w-2xl font-heading text-3xl font-semibold text-white">{flagship.title}</h3>

              <div className="mt-5 grid gap-3 text-sm sm:text-[15px]">
                <p className="rounded-sm border border-white/10 bg-black/25 px-3 py-2 text-slate-200">
                  <span className="font-semibold text-cyan-200">{siteContent.cases.labels.context}:</span> {flagship.context}
                </p>
                <p className="muted-copy leading-relaxed">
                  <span className="font-semibold text-slate-200">{siteContent.cases.labels.problem}:</span> {flagship.problem}
                </p>
                <p className="muted-copy leading-relaxed">
                  <span className="font-semibold text-slate-200">{siteContent.cases.labels.solution}:</span> {flagship.solution}
                </p>
                <p className="muted-copy leading-relaxed">
                  <span className="font-semibold text-slate-200">{siteContent.cases.labels.stack}:</span> {flagship.stack}
                </p>
                <p className="text-slate-200 leading-relaxed">
                  <span className="font-semibold text-cyan-200">{siteContent.cases.labels.impact}:</span> {flagship.impact}
                </p>
              </div>

              <div className="mt-6">
                <p className="mb-2 text-[10px] uppercase tracking-[0.14em] text-slate-400">{siteContent.cases.labels.chips}</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {flagship.chips.map((chip, index) => (
                    <motion.div
                      key={chip.label}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.55 }}
                      transition={{ duration: 0.24, delay: index * 0.05 }}
                      className="rounded-sm border border-cyan-200/20 bg-[#0c1524]/85 px-3 py-2"
                    >
                      <p className="text-[10px] uppercase tracking-[0.13em] text-cyan-200/75">{chip.label}</p>
                      <p className="mt-1 text-xs text-slate-200">{chip.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 lg:col-span-4">
            {sideCases.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.24, delay: index * 0.04 }}
                className="case-card case-side-card p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">{item.badge}</p>
                <h4 className="mt-2 font-heading text-lg font-semibold text-white">{item.title}</h4>

                <div className="mt-3 space-y-2 text-sm">
                  <p className="text-slate-300">
                    <span className="font-semibold text-slate-200">{siteContent.cases.labels.context}:</span> {item.context}
                  </p>
                  <p className="muted-copy">
                    <span className="font-semibold text-slate-200">{siteContent.cases.labels.problem}:</span> {item.problem}
                  </p>
                  <p className="muted-copy">
                    <span className="font-semibold text-slate-200">{siteContent.cases.labels.solution}:</span> {item.solution}
                  </p>
                  <p className="muted-copy">
                    <span className="font-semibold text-slate-200">{siteContent.cases.labels.stack}:</span> {item.stack}
                  </p>
                  <p className="text-slate-300">
                    <span className="font-semibold text-cyan-200">{siteContent.cases.labels.impact}:</span> {item.impact}
                  </p>
                </div>

                <a
                  href="#contato"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200"
                >
                  {siteContent.cases.cardCtaLabel}
                  <ArrowRight size={13} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
