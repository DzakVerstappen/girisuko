"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { NewsCard } from "@/components/news-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/field";
import { kategoriBerita } from "@/data/berita";
import type { Berita } from "@/types";
import { cn } from "@/lib/utils";

const PER_PAGE = 6;

export function BeritaList({ items }: { items: Berita[] }) {
  const [kategori, setKategori] = useState<string>("Semua");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const byCat =
      kategori === "Semua"
        ? items
        : items.filter((b) => b.kategori === kategori);
    const term = q.trim().toLowerCase();
    const bySearch = term
      ? byCat.filter(
          (b) =>
            b.judul.toLowerCase().includes(term) ||
            b.ringkasan.toLowerCase().includes(term),
        )
      : byCat;
    return [...bySearch].sort(
      (a, b) => +new Date(b.tanggal) - +new Date(a.tanggal),
    );
  }, [items, kategori, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const shown = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const resetPage = () => setPage(1);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {kategoriBerita.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                setKategori(k);
                resetPage();
              }}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
                kategori === k
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {k}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              resetPage();
            }}
            placeholder="Cari berita…"
            className="pl-9"
            aria-label="Cari berita"
          />
        </div>
      </div>

      {shown.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-12 text-center">
          <p className="font-semibold">Tidak ada berita yang cocok</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Coba ubah kata kunci atau pilih kategori lain.
          </p>
        </div>
      )}

      {totalPages > 1 ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={current === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Sebelumnya
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === current ? "page" : undefined}
              className={cn(
                "size-9 rounded-lg border text-sm font-semibold transition-colors",
                n === current
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-muted",
              )}
            >
              {n}
            </button>
          ))}
          <Button
            variant="outline"
            size="sm"
            disabled={current === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Berikutnya
          </Button>
        </div>
      ) : null}
    </div>
  );
}
