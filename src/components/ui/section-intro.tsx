import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionIntroProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const SectionIntro = ({ badge, title, description, align = "left", className, ...props }: SectionIntroProps) => {
  return (
    <header
      className={cn(
        "space-y-5",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className,
      )}
      {...props}
    >
      {badge ? <p className="section-badge">{badge}</p> : null}
      <h2 className="text-balance font-heading text-3xl font-semibold leading-[1.05] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="text-pretty text-base text-muted-ink sm:text-lg">{description}</p> : null}
    </header>
  );
};
