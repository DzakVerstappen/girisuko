export function Stepper({ steps }: { steps: string[] }) {
  return (
    <ol className="relative flex flex-col gap-0">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4 pb-6 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            {i < steps.length - 1 ? (
              <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
            ) : null}
          </div>
          <p className="pt-1 text-sm text-foreground">{step}</p>
        </li>
      ))}
    </ol>
  );
}
