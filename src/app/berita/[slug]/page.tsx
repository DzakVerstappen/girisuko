import type { Metadata } from "next";
import { CalendarDays, ChevronLeft, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/news-card";
import { Container } from "@/components/ui/container";
import { berita, getBerita } from "@/data/berita";
import { site } from "@/data/site";
import { formatTanggal } from "@/lib/utils";

export function generateStaticParams() {
  return berita.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/berita/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getBerita(slug);
  if (!item) return { title: "Berita tidak ditemukan" };
  return {
    title: item.judul,
    description: item.ringkasan,
    openGraph: {
      type: "article",
      title: item.judul,
      description: item.ringkasan,
      publishedTime: item.tanggal,
      images: [item.gambar],
    },
  };
}

export default async function BeritaDetailPage({
  params,
}: PageProps<"/berita/[slug]">) {
  const { slug } = await params;
  const item = getBerita(slug);
  if (!item) notFound();

  const terkait = berita
    .filter((b) => b.slug !== item.slug && b.kategori === item.kategori)
    .slice(0, 3);
  const fallback = berita.filter((b) => b.slug !== item.slug).slice(0, 3);
  const related = terkait.length ? terkait : fallback;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.judul,
    datePublished: item.tanggal,
    author: { "@type": "Organization", name: item.penulis },
    publisher: { "@type": "Organization", name: site.name },
    image: [item.gambar],
    description: item.ringkasan,
  };

  return (
    <article>
      <div className="relative h-[42vh] min-h-72 w-full overflow-hidden">
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <Container className="absolute inset-x-0 bottom-0 pb-8 text-white">
          <Link
            href="/berita"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
          >
            <ChevronLeft className="size-4" />
            Kembali ke berita
          </Link>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
            {item.judul}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" />
              {formatTanggal(item.tanggal)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="size-4" />
              {item.penulis}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Tag className="size-4" />
              {item.kategori}
            </span>
          </div>
        </Container>
      </div>

      <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_280px]">
        <div className="max-w-2xl">
          <p className="text-lg font-medium text-foreground">{item.ringkasan}</p>
          <div className="mt-6 flex flex-col gap-5 leading-relaxed text-muted-foreground">
            {item.konten.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-border bg-card p-5 text-sm text-muted-foreground">
            Artikel ini merupakan konten contoh untuk pengembangan tampilan
            situs Kalurahan Girisuko.
          </div>
        </div>

        <aside className="lg:pt-1">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Bagikan
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {["WhatsApp", "Facebook", "Salin Tautan"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Tombol berbagi belum aktif pada tahap frontend.
            </p>
          </div>
        </aside>
      </Container>

      {related.length ? (
        <section className="border-t border-border bg-card py-14">
          <Container>
            <h2 className="text-2xl font-bold">Berita Terkait</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <NewsCard key={r.slug} item={r} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
