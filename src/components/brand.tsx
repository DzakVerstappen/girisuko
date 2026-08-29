import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none">
        <path
          d="M3 20h18M5 20V10l7-5 7 5v10M9 20v-5h6v5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.5" r="1.4" fill="currentColor" />
      </svg>
    </span>
  );
}

export function Brand({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("flex items-center gap-3", className)}
    >
      <LogoMark />
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Pemerintah
        </span>
        <span className="font-display text-lg font-extrabold">
          {site.name}
        </span>
      </span>
    </Link>
  );
}
