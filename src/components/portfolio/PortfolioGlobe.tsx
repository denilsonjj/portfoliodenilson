import { BarChart3, Bot, Globe2, LayoutGrid, Pause, Play, Workflow } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
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
  const glow = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string>();
  const [focusedNode, setFocusedNode] = useState<string>();
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const globe = ref.current;
    if (!globe || typeof IntersectionObserver === "undefined") {
      globe?.removeAttribute("data-paused");
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      globe.toggleAttribute("data-paused", !entry.isIntersecting);
    }, { threshold: 0.15 });
    observer.observe(globe);
    return () => observer.disconnect();
  }, []);

  const moveGlow = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !glow.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    glow.current.style.setProperty("--globe-x", `${(event.clientX - bounds.left - bounds.width / 2) * 0.48}px`);
    glow.current.style.setProperty("--globe-y", `${(event.clientY - bounds.top - bounds.height / 2) * 0.48}px`);
  };

  const resetGlow = () => {
    glow.current?.style.removeProperty("--globe-x");
    glow.current?.style.removeProperty("--globe-y");
  };

  return (
    <div className="portfolio-globe" ref={ref} data-paused="" data-user-paused={paused || undefined} onPointerMove={moveGlow} onPointerLeave={resetGlow}>
      <div className="portfolio-globe-glow" ref={glow} aria-hidden="true" />
      <EarthGlobe className="portfolio-earth" nodes={pins} activeNode={hoveredNode ?? focusedNode} />
      <button
        type="button"
        className="portfolio-globe-pause"
        aria-label={paused ? "Retomar animação do globo" : "Pausar animação do globo"}
        onClick={() => setPaused((current) => !current)}
      >
        {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      </button>
      <ul className="globe-pins" aria-label="Soluções">
        {pins.map(({ id, label, icon: Icon, href, labelY }, index) => (
          <li key={id} style={{ "--pin-y": labelY, "--pin-delay": `${120 + index * 62}ms` } as CSSProperties}>
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
