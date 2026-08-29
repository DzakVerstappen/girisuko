import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="border-b border-border bg-card py-14">
        <Container>
          <div className="h-4 w-40 rounded bg-muted" />
          <div className="mt-5 h-10 w-2/3 max-w-xl rounded bg-muted" />
          <div className="mt-4 h-4 w-full max-w-lg rounded bg-muted" />
        </Container>
      </div>
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[16/10] bg-muted" />
              <div className="space-y-3 p-5">
                <div className="h-3 w-24 rounded bg-muted" />
                <div className="h-5 w-full rounded bg-muted" />
                <div className="h-4 w-3/4 rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
