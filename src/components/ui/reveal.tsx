import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export const Reveal = ({ className, delay = 0, y = 18, children, ...props }: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
