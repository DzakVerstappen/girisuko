import { MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Potensi } from "@/types";

export function PotensiCard({ item }: { item: Potensi }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.gambar}
          alt={item.nama}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3">
          <Badge variant="solid">{item.kategori}</Badge>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug">{item.nama}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5 text-primary" />
          {item.lokasi}
        </p>
        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
          {item.deskripsi}
        </p>
      </div>
    </article>
  );
}
