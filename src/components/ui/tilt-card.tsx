import { cn } from "@/lib/utils";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glow?: boolean;
};

const normalize = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

export const TiltCard = ({ children, className, maxTilt = 8, glow = true }: TiltCardProps) => {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.4 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.4 });

  const glowGradient = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(53, 231, 255, 0.16), rgba(53, 231, 255, 0) 62%)`;

  useEffect(() => {
    if (reduceMotion) return;

    return () => {
      rotateX.stop();
      rotateY.stop();
    };
  }, [reduceMotion, rotateX, rotateY]);

  const resetTilt = () => {
    if (reduceMotion) return;
    animate(rotateX, 0, { type: "spring", stiffness: 160, damping: 16 });
    animate(rotateY, 0, { type: "spring", stiffness: 160, damping: 16 });
  };

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const clampedX = normalize(px, 0, 1);
    const clampedY = normalize(py, 0, 1);

    mouseX.set(clampedX * 100);
    mouseY.set(clampedY * 100);

    rotateX.set((0.5 - clampedY) * maxTilt * 1.2);
    rotateY.set((clampedX - 0.5) * maxTilt * 1.2);
  };

  const cardMotionStyle: MotionStyle = reduceMotion
    ? {}
    : {
        rotateX: smoothRotateX as MotionValue<number>,
        rotateY: smoothRotateY as MotionValue<number>,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      };

  return (
    <motion.div
      ref={cardRef}
      style={cardMotionStyle}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      onBlur={resetTilt}
      className={cn("premium-card relative overflow-hidden", className)}
    >
      {glow ? <motion.div className="pointer-events-none absolute inset-0" style={{ background: glowGradient }} /> : null}
      <div className="relative z-[1] h-full">{children}</div>
    </motion.div>
  );
};
