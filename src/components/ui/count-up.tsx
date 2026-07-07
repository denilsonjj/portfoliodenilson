import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  useGrouping?: boolean;
  animate?: boolean;
  className?: string;
};

const formatNumber = (value: number, decimals: number, useGrouping: boolean) => {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });
};

export const CountUp = ({ value, prefix = "", suffix = "", decimals = 0, useGrouping = true, animate = true, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px 25% 0px" });

  const base = useMotionValue(0);
  const smooth = useSpring(base, { damping: 30, stiffness: 110, mass: 0.6 });

  useEffect(() => {
    if (!ref.current) return;

    return smooth.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${prefix}${formatNumber(latest, decimals, useGrouping)}${suffix}`;
    });
  }, [decimals, prefix, smooth, suffix, useGrouping]);

  const finalText = `${prefix}${formatNumber(value, decimals, useGrouping)}${suffix}`;

  useEffect(() => {
    if (!inView && animate) return;

    if (reduceMotion || !animate) {
      smooth.jump(value);
      if (ref.current) ref.current.textContent = finalText;
      return;
    }

    base.set(value);
  }, [animate, base, finalText, inView, reduceMotion, smooth, value]);

  return (
    <span ref={ref} className={className} aria-label={finalText}>
      {animate ? `${prefix}${formatNumber(0, decimals, useGrouping)}${suffix}` : finalText}
    </span>
  );
};
