import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PotensiCard } from "@/components/potensi-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { potensi } from "@/data/potensi";

export function PotensiUnggulan() {
  const items = [
    potensi.find((p) => p.kategori === "Wisata"),
    potensi.find((p) => p.kategori === "UMKM"),
    potensi.find((p) => p.kategori === "Pertanian"),
  ].filter(Boolean) as typeof potensi;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Potensi Desa"
            title="Kekayaan Girisuko"
            description="Dari wisata alam dan budaya hingga produk UMKM dan hasil bumi yang menggerakkan ekonomi warga."
          />
          <Link
            href="/potensi"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Lihat semua potensi
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <PotensiCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
