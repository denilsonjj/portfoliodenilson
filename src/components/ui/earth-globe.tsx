import { cn } from "@/lib/utils";

type EarthGlobeProps = {
  className?: string;
  reduceMotion?: boolean;
  lowPower?: boolean;
};

const nodes = [
  { left: "27%", top: "36%", delay: "0s" },
  { left: "39%", top: "61%", delay: "0.45s" },
  { left: "53%", top: "34%", delay: "0.9s" },
  { left: "66%", top: "49%", delay: "1.35s" },
  { left: "73%", top: "66%", delay: "1.8s" },
];

export const EarthGlobe = ({ className, reduceMotion = false, lowPower = false }: EarthGlobeProps) => {
  return (
    <div
      className={cn("earth-globe-stage", reduceMotion && "earth-globe-reduced", lowPower && "earth-globe-low-power", className)}
      aria-hidden="true"
    >
      <div className="earth-stars" />
      <div className="earth-sphere-shell">
        <div className="earth-texture" />
        <div className="earth-shade" />
        <div className="earth-sweep" />
        {nodes.map((node, index) => (
          <span
            key={`${node.left}-${node.top}`}
            className="earth-network-node"
            style={{ left: node.left, top: node.top, animationDelay: node.delay }}
          >
            <span className="sr-only">Ponto conectado {index + 1}</span>
          </span>
        ))}
      </div>
      <div className="earth-floor-glow" />
    </div>
  );
};
