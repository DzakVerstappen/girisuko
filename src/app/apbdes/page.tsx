import type { Metadata } from "next";
import { Info } from "lucide-react";
import { ApbkalView } from "@/components/apbkal-view";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { catatanApbkal } from "@/data/apbdes";

export const metadata: Metadata = {
  title: "Transparansi APBKal",
  description:
    "Ringkasan Anggaran Pendapatan dan Belanja Kalurahan (APBKal) Girisuko beserta rincian pendapatan dan belanja per tahun.",
};

export default function ApbkalPage() {
  return (
    <>
      <PageHero
        eyebrow="Keterbukaan Informasi"
        title="Transparansi APBKal"
        description="Anggaran Pendapatan dan Belanja Kalurahan Girisuko disajikan secara ringkas agar mudah dipahami dan diawasi bersama warga."
        breadcrumbs={[{ label: "APBKal" }]}
      />

      <Container className="py-16 sm:py-20">
        <ApbkalView />

        <div className="mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 font-bold">
            <Info className="size-4 text-primary" />
            Catatan
          </h2>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
            {catatanApbkal.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
