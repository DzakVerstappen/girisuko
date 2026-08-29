import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { NewsCard } from "@/components/news-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { berita } from "@/data/berita";

export function BeritaTerbaru() {
  const items = [...berita]
    .sort((a, b) => +new Date(b.tanggal) - +new Date(a.tanggal))
    .slice(0, 3);

  return (
    <section className="border-t border-border bg-card py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Kabar Kalurahan"
            title="Berita & Pengumuman Terbaru"
            description="Informasi kegiatan, pembangunan, dan pengumuman resmi dari Pemerintah Kalurahan Girisuko."
          />
          <Link
            href="/berita"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Semua berita
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08} as="div">
              <NewsCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
