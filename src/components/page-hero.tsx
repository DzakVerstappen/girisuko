import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/ui/container";

type Props = {
  title: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs: { label: string; href?: string }[];
  children?: ReactNode;
};

export function PageHero({
  title,
  description,
  eyebrow,
  breadcrumbs,
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-12 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-5 max-w-3xl">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-2 text-4xl font-extrabold text-balance sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
