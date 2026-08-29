import {
  ArrowRight,
  Baby,
  BriefcaseBusiness,
  FileText,
  HandHeart,
  Heart,
  IdCard,
  ScrollText,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { layanan } from "@/data/layanan";

const ICONS = [IdCard, Users, FileText, HandHeart, BriefcaseBusiness, Heart, Baby, ScrollText];

export function LayananCepat() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Layanan Publik"
            title="Urus Keperluan Administrasi"
            description="Ketahui persyaratan dan alur setiap layanan sebelum datang ke kantor kalurahan agar prosesnya lebih cepat."
          />
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Semua layanan
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {layanan.map((l, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <ScrollReveal key={l.slug} delay={(i % 4) * 0.05}>
                <Link
                  href={`/layanan#${l.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold leading-snug">{l.nama}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                    {l.ringkasan}
                  </p>
                  <span className="mt-3 text-xs font-semibold text-primary">
                    {l.biaya} · {l.waktu}
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
