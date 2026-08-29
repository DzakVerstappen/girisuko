import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { galeri } from "@/data/galeri";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi kegiatan, pembangunan, bentang alam, dan budaya Kalurahan Girisuko.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Dokumentasi"
        title="Galeri Kalurahan"
        description="Momen kegiatan warga, pembangunan, keindahan alam, dan pelestarian budaya Girisuko."
        breadcrumbs={[{ label: "Galeri" }]}
      />
      <Container className="py-16 sm:py-20">
        <Gallery items={galeri} />
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Seluruh foto pada halaman ini adalah gambar contoh (stok) untuk
          keperluan pengembangan tampilan.
        </p>
      </Container>
    </>
  );
}
