import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={cn("layout-container", className)} {...props}>
      {children}
    </div>
  );
};
