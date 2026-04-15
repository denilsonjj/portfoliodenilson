import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-[0.38rem] border text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-cyan-200/30 bg-cyan-300 px-5 py-2.5 text-slate-950 shadow-[0_0_20px_rgba(0,230,247,0.26)] hover:-translate-y-0.5 hover:bg-cyan-200",
        secondary:
          "border-slate-600/55 bg-[#0e1624] px-5 py-2.5 text-slate-100 hover:border-cyan-200/45 hover:bg-[#111b2b]",
        ghost: "border-transparent bg-transparent px-2 py-2 text-slate-300 hover:text-white",
      },
      size: {
        default: "h-10",
        large: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

export const GradientButton = ({ className, variant, size, asChild, ...props }: GradientButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonStyles({ variant, size }), className)} {...props} />;
};
