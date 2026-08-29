import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { pamong } from "@/data/pamong";

export function Sambutan() {
  const lurah = pamong.find((p) => p.jabatan === "Lurah") ?? pamong[0];

  return (
    <section className="border-y border-border bg-card py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1fr]">
        <ScrollReveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-primary/10" />
            <Image
              src={lurah.foto}
              alt={`Foto ${lurah.nama}, ${lurah.jabatan}`}
              width={480}
              height={560}
              className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-lg"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-card/95 px-4 py-2 shadow-md backdrop-blur">
              <p className="font-display font-bold leading-tight">{lurah.nama}</p>
              <p className="text-xs text-muted-foreground">{lurah.jabatan}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sambutan Lurah
          </span>
          <Quote className="mt-4 size-9 text-primary/30" />
          <blockquote className="mt-2 text-xl font-medium leading-relaxed text-balance sm:text-2xl">
            “Website ini kami hadirkan sebagai jembatan informasi antara
            pemerintah kalurahan dan masyarakat. Harapan kami, pelayanan menjadi
            lebih terbuka, cepat, dan mudah diakses oleh seluruh warga Girisuko
            di mana pun berada.”
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            Mari bersama membangun Girisuko yang guyub, maju, dan lestari dengan
            semangat gotong royong.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/pemerintahan#pamong">Kenali Pamong Kalurahan</Link>
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
