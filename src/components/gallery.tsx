"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { kategoriGaleri } from "@/data/galeri";
import type { ItemGaleri } from "@/types";
import { cn } from "@/lib/utils";

export function Gallery({ items }: { items: ItemGaleri[] }) {
  const [filter, setFilter] = useState<(typeof kategoriGaleri)[number]>("Semua");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "Semua"
        ? items
        : items.filter((i) => i.kategori === filter),
    [items, filter],
  );

  const show = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) => {
        if (cur === null) return cur;
        return (cur + dir + filtered.length) % filtered.length;
      }),
    [filtered.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, show]);

  const current = active !== null ? filtered[active] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {kategoriGaleri.map((k) => (
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

      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-xl border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src={item.gambar}
              alt={item.judul}
              width={900}
              height={i % 3 === 0 ? 1100 : 700}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3 text-left text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {item.judul}
            </span>
          </button>
        ))}
      </div>

      <Dialog.Root
        open={active !== null}
        onOpenChange={(o) => !o && setActive(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-[fade-in_0.2s_ease-out]" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 focus:outline-none sm:p-8"
          >
            <Dialog.Title className="sr-only">
              {current?.judul ?? "Pratinjau gambar"}
            </Dialog.Title>
            <Dialog.Close
              aria-label="Tutup"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-5" />
            </Dialog.Close>

            {current ? (
              <div className="relative flex max-h-full w-full max-w-4xl flex-col items-center">
                <div className="relative w-full">
                  <Image
                    src={current.gambar.replace("w=900", "w=1600")}
                    alt={current.judul}
                    width={1600}
                    height={1000}
                    className="h-auto max-h-[75vh] w-full rounded-xl object-contain"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-white">
                  <Badge variant="solid">{current.kategori}</Badge>
                  <span className="text-sm">{current.judul}</span>
                </div>
              </div>
            ) : null}

            <button
              type="button"
              aria-label="Sebelumnya"
              onClick={() => show(-1)}
              className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Berikutnya"
              onClick={() => show(1)}
              className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-6" />
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
