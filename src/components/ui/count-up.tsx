import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  useGrouping?: boolean;
  className?: string;
};

const formatNumber = (value: number, decimals: number, useGrouping: boolean) => {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });
};

export const CountUp = ({ value, prefix = "", suffix = "", decimals = 0, useGrouping = true, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

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
      ref.current.textContent = `${prefix}${formatNumber(latest, decimals, useGrouping)}${suffix}`;
    });
  }, [decimals, prefix, smooth, suffix, useGrouping]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${formatNumber(0, decimals, useGrouping)}${suffix}`}
    </span>
  );
};
