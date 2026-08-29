import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground",
        secondary:
          "bg-secondary/15 text-secondary-foreground dark:text-secondary",
        outline: "border border-border text-muted-foreground",
        solid: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
