import { motion, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { BarChart3, Bot, Globe2, LayoutGrid, Workflow } from "lucide-react";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { EarthGlobe } from "@/components/ui/earth-globe";
import { webService } from "@/data/portfolio";
import { servicePath } from "@/data/servicePages";
import { trackEvent } from "@/lib/analytics";

const pins = [
  { id: "sistemas", label: "Softwares de gestão", icon: LayoutGrid, href: servicePath("sistemas"), left: "34%", top: "26%", delay: "0s", labelY: "20%" },
  { id: "dashboards", label: "Dashboards e indicadores", icon: BarChart3, href: servicePath("dashboards"), left: "67%", top: "36%", delay: "0.45s", labelY: "34%" },
  { id: "automacoes", label: "Automações de processos", icon: Workflow, href: servicePath("automacoes"), left: "30%", top: "50%", delay: "0.9s", labelY: "48%" },
  { id: "agentes-ia", label: "Agentes de IA", icon: Bot, href: "/?interesse=agentes-ia#contato", left: "71%", top: "62%", delay: "1.35s", labelY: "62%" },
  { id: webService.id, label: webService.title, icon: Globe2, href: webService.href, left: "44%", top: "76%", delay: "1.8s", labelY: "76%" },
];

export const PortfolioGlobe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string>();
  const [focusedNode, setFocusedNode] = useState<string>();
  const isInView = useInView(ref, { amount: 0.15 });
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(55);
  const smoothX = useSpring(x, { stiffness: 95, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 95, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(ellipse 42% 45% at ${smoothX}% ${smoothY}%, rgba(0, 189, 231, 0.21), transparent 100%)`;

  const moveGlow = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left) / bounds.width * 100);
    y.set((event.clientY - bounds.top) / bounds.height * 100);
  };

  return (
    <div className="portfolio-globe" ref={ref} onPointerDown={moveGlow} onPointerMove={moveGlow} onPointerLeave={() => { x.set(50); y.set(55); }}>
      <p className="portfolio-globe-caption">Explore as soluções</p>
      <motion.div className="portfolio-globe-glow" aria-hidden="true" style={{ background: glow }} />
      <EarthGlobe className={`portfolio-earth${isInView ? "" : " is-paused"}`} nodes={pins} activeNode={hoveredNode ?? focusedNode} />
      <ul className="globe-pins" aria-label="Soluções">
        {pins.map(({ id, label, icon: Icon, href, labelY }) => (
          <li key={id} style={{ "--pin-y": labelY } as CSSProperties}>
            <a
              href={href}
              onPointerEnter={() => setHoveredNode(id)}
              onPointerLeave={() => setHoveredNode(undefined)}
              onFocus={() => setFocusedNode(id)}
              onBlur={() => setFocusedNode(undefined)}
              onClick={() => trackEvent("service_open", { service: id, source: "globe" })}
            >
              <Icon size={16} aria-hidden="true" />{label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
