import { ArrowRight, Compass, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { ringkasanStatistik } from "@/data/statistik";

const chips = [
  { label: "Penduduk", value: ringkasanStatistik.totalPenduduk.toLocaleString("id-ID") },
  { label: "Padukuhan", value: String(ringkasanStatistik.jumlahPadukuhan) },
  { label: "Luas wilayah", value: `${ringkasanStatistik.luasWilayahKm2} km²` },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=70"
          alt="Bentang alam perbukitan dan ladang di Kalurahan Girisuko"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <Container className="flex min-h-[88vh] flex-col justify-center py-24 text-white">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium backdrop-blur">
          <MapPin className="size-4" />
          Kapanewon Panggang · Kabupaten Gunungkidul · D.I. Yogyakarta
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] text-balance sm:text-6xl">
          Selamat Datang di Website Resmi {site.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">
          {site.tagline}. Temukan informasi pemerintahan, layanan publik, potensi
          desa, dan transparansi anggaran dalam satu tempat.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/layanan">
              <Compass className="size-5" />
              Layanan Publik
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
          >
            <Link href="/potensi">
              Jelajahi Potensi Desa
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          {chips.map((c) => (
            <div key={c.label}>
              <dt className="text-xs uppercase tracking-wider text-white/60">
                {c.label}
              </dt>
              <dd className="font-display text-2xl font-bold">{c.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
