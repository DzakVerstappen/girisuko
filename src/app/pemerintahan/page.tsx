import type { Metadata } from "next";
import { OfficialCard } from "@/components/official-card";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { kelompokPamong, lembaga, pamong } from "@/data/pamong";

export const metadata: Metadata = {
  title: "Pemerintahan",
  description:
    "Struktur organisasi, pamong kalurahan, Badan Permusyawaratan Kalurahan (BPK), dan lembaga kemasyarakatan Kalurahan Girisuko.",
};

const labelKelompok: Record<string, string> = {
  Pimpinan: "Pimpinan Kalurahan",
  "Pelaksana Teknis": "Pelaksana Teknis",
  "Pelaksana Kewilayahan": "Pelaksana Kewilayahan (Dukuh)",
};

export default function PemerintahanPage() {
  const lurah = pamong.find((p) => p.jabatan === "Lurah");
  const carik = pamong.find((p) => p.jabatan.startsWith("Carik"));

  return (
    <>
      <PageHero
        eyebrow="Organisasi"
        title="Pemerintah Kalurahan"
        description="Susunan pamong kalurahan dan lembaga yang bekerja melayani warga Girisuko."
        breadcrumbs={[{ label: "Pemerintahan" }]}
      />

      <Container className="py-16 sm:py-20">
        {/* Struktur */}
        <section id="struktur" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Struktur Organisasi"
            title="Bagan Pemerintah Kalurahan Girisuko"
          />
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="w-full max-w-xs rounded-xl bg-primary p-4 text-center text-primary-foreground shadow-sm">
              <p className="text-xs uppercase tracking-wider opacity-80">Lurah</p>
              <p className="font-display text-lg font-bold">{lurah?.nama}</p>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="w-full max-w-xs rounded-xl border border-border bg-card p-4 text-center shadow-sm">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Carik
              </p>
              <p className="font-display font-bold">{carik?.nama}</p>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {pamong
                .filter((p) => p.kelompok === "Pelaksana Teknis")
                .map((p) => (
                  <div
                    key={p.jabatan}
                    className="rounded-xl border border-border bg-card p-3 text-center text-sm shadow-sm"
                  >
                    <p className="font-semibold leading-tight">{p.jabatan}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.nama}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Pamong */}
        <section id="pamong" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Aparatur"
            title="Pamong Kalurahan"
            description="Nama dan foto merupakan placeholder untuk pengembangan dan tidak merujuk pada individu nyata."
          />
          {kelompokPamong.map((kel) => (
            <div key={kel} className="mt-10">
              <h3 className="text-lg font-bold">{labelKelompok[kel]}</h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {pamong
                  .filter((p) => p.kelompok === kel)
                  .map((person, i) => (
                    <ScrollReveal key={person.nama} delay={(i % 4) * 0.05}>
                      <OfficialCard person={person} />
                    </ScrollReveal>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* BPK + Lembaga */}
        <section id="bpk" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Kelembagaan"
            title="BPK & Lembaga Kemasyarakatan"
            description="Mitra pemerintah kalurahan dalam perencanaan, pengawasan, dan pemberdayaan masyarakat."
          />
          <div id="lembaga" className="mt-8 grid gap-5 scroll-mt-24 sm:grid-cols-2 lg:grid-cols-3">
            {lembaga.map((l, i) => (
              <ScrollReveal key={l.nama} delay={(i % 3) * 0.06}>
                <Card className="h-full p-6">
                  <h3 className="font-bold leading-snug">{l.nama}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{l.peran}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                    {l.jumlah}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
