import { cn } from "@/lib/utils";

type EarthNode = {
  id: string;
  left: string;
  top: string;
  delay: string;
};

type EarthGlobeProps = {
  className?: string;
  reduceMotion?: boolean;
  lowPower?: boolean;
  nodes?: readonly EarthNode[];
  activeNode?: string;
};

const defaultNodes = [
  { id: "northwest", left: "27%", top: "36%", delay: "0s" },
  { id: "southwest", left: "39%", top: "61%", delay: "0.45s" },
  { id: "north", left: "53%", top: "34%", delay: "0.9s" },
  { id: "east", left: "66%", top: "49%", delay: "1.35s" },
  { id: "southeast", left: "73%", top: "66%", delay: "1.8s" },
];

export const EarthGlobe = ({ className, reduceMotion = false, lowPower = false, nodes = defaultNodes, activeNode }: EarthGlobeProps) => {
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
        {nodes.map((node) => (
          <span
            key={node.id}
            className="earth-network-node"
            data-node={node.id}
            data-active={activeNode === node.id || undefined}
            style={{ left: node.left, top: node.top, animationDelay: node.delay }}
          />
        ))}
      </div>
      <div className="earth-floor-glow" />
    </div>
  );
};
