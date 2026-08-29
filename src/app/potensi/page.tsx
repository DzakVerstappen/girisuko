import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PotensiGrid } from "@/components/potensi-grid";
import { Container } from "@/components/ui/container";
import { potensi } from "@/data/potensi";

export const metadata: Metadata = {
  title: "Potensi Desa",
  description:
    "Wisata alam dan budaya, produk UMKM, serta hasil pertanian dan peternakan unggulan Kalurahan Girisuko.",
};

export default function PotensiPage() {
  const jml = (k: string) => potensi.filter((p) => p.kategori === k).length;

  return (
    <>
      <PageHero
        eyebrow="Ekonomi & Wisata"
        title="Potensi Kalurahan Girisuko"
        description="Beragam kekayaan alam, budaya, dan produk warga yang menjadi penggerak ekonomi lokal serta daya tarik kunjungan."
        breadcrumbs={[{ label: "Potensi" }]}
      >
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground">{jml("Wisata")}</strong> destinasi wisata
          </span>
          <span>
            <strong className="text-foreground">{jml("UMKM")}</strong> produk UMKM
          </span>
          <span>
            <strong className="text-foreground">{jml("Pertanian")}</strong> komoditas
          </span>
          <span>
            <strong className="text-foreground">{jml("Budaya")}</strong> kelompok budaya
          </span>
        </div>
      </PageHero>

      <Container className="py-16 sm:py-20">
        <PotensiGrid items={potensi} />
      </Container>
    </>
  );
}
