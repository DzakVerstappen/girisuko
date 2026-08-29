import type { ComponentProps, ElementType } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  as,
  ...props
}: ComponentProps<"div"> & { as?: ElementType }) {
  const Comp = as ?? "div";
  return (
    <Comp
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
