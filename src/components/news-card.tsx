import { ArrowUpRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Berita } from "@/types";
import { cn, formatTanggal } from "@/lib/utils";

export function NewsCard({
  item,
  className,
  priority,
}: {
  item: Berita;
  className?: string;
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <Link
        href={`/berita/${item.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <span className="absolute left-3 top-3">
          <Badge variant="solid">{item.kategori}</Badge>
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" />
          {formatTanggal(item.tanggal)}
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug">
          <Link
            href={`/berita/${item.slug}`}
            className="transition-colors after:absolute after:inset-0 group-hover:text-primary"
          >
            {item.judul}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {item.ringkasan}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Baca selengkapnya
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
