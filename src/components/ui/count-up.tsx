import { useEffect, useMemo, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  useGrouping?: boolean;
  animate?: boolean;
  className?: string;
};

export const CountUp = ({ value, prefix = "", suffix = "", decimals = 0, useGrouping = true, animate = true, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const format = useMemo(() => new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  }), [decimals, useGrouping]);
  const finalText = `${prefix}${format.format(value)}${suffix}`;

  useEffect(() => {
    const counter = ref.current;
    if (!counter || !animate || typeof IntersectionObserver === "undefined"
      || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let start: number | undefined;
    const tick = (time: number) => {
      start ??= time;
      const progress = Math.min((time - start) / 650, 1);
      const visibleValue = value * (1 - (1 - progress) ** 3);
      counter.textContent = `${prefix}${format.format(visibleValue)}${suffix}`;
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      frame = requestAnimationFrame(tick);
    }, { rootMargin: "0px 0px 12% 0px" });
    observer.observe(counter);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      counter.textContent = finalText;
    };
  }, [animate, finalText, format, prefix, suffix, value]);

  return (
    <span className={className} style={{ display: "inline-grid", fontVariantNumeric: "tabular-nums" }}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">{finalText}</span>
      <span ref={ref} className="col-start-1 row-start-1" aria-hidden="true">{finalText}</span>
      <span className="sr-only">{finalText}</span>
    </span>
  );
};
