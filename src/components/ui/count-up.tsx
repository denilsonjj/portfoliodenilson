import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

const formatNumber = (value: number, decimals: number) => {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const CountUp = ({ value, prefix = "", suffix = "", decimals = 0, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  const base = useMotionValue(0);
  const smooth = useSpring(base, { damping: 30, stiffness: 110, mass: 0.6 });

  useEffect(() => {
    if (!inView) return;

    base.set(value);
  }, [base, inView, value]);

  useEffect(() => {
    if (!ref.current) return;

    return smooth.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${prefix}${formatNumber(latest, decimals)}${suffix}`;
    });
  }, [decimals, prefix, smooth, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${formatNumber(0, decimals)}${suffix}`}
    </span>
  );
};
