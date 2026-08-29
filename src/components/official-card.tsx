import Image from "next/image";
import type { Pamong } from "@/types";

export function OfficialCard({ person }: { person: Pamong }) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-border bg-card text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={person.foto}
          alt={`Foto ${person.nama}`}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <figcaption className="p-4">
        <p className="font-display font-bold leading-tight">{person.nama}</p>
        <p className="mt-1 text-sm text-muted-foreground">{person.jabatan}</p>
      </figcaption>
    </figure>
  );
}
