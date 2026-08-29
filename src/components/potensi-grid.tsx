"use client";

import { useMemo, useState } from "react";
import { PotensiCard } from "@/components/potensi-card";
import { kategoriPotensi } from "@/data/potensi";
import type { Potensi } from "@/types";
import { cn } from "@/lib/utils";

export function PotensiGrid({ items }: { items: Potensi[] }) {
  const [filter, setFilter] = useState<string>("Semua");

  const filtered = useMemo(
    () =>
      filter === "Semua" ? items : items.filter((p) => p.kategori === filter),
    [items, filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {kategoriPotensi.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setFilter(k)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
              filter === k
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
            )}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <PotensiCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
