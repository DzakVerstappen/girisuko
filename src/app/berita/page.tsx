import type { Metadata } from "next";
import { BeritaList } from "@/components/berita-list";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { berita } from "@/data/berita";

export const metadata: Metadata = {
  title: "Berita & Pengumuman",
  description:
    "Kabar terbaru seputar kegiatan, pembangunan, dan pengumuman resmi Pemerintah Kalurahan Girisuko.",
};

export default function BeritaPage() {
  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="Berita & Pengumuman"
        description="Ikuti perkembangan terbaru dari Kalurahan Girisuko."
        breadcrumbs={[{ label: "Berita" }]}
      />
      <Container className="py-16 sm:py-20">
        <BeritaList items={berita} />
      </Container>
    </>
  );
}
