import { Home, Landmark, Ruler, Users } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StatCard } from "@/components/stat-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ringkasanStatistik as s } from "@/data/statistik";

export function StatsSection() {
  const items = [
    { icon: <Users />, value: s.totalPenduduk, label: "Jumlah penduduk" },
    { icon: <Home />, value: s.kepalaKeluarga, label: "Kepala keluarga" },
    { icon: <Landmark />, value: s.jumlahPadukuhan, label: "Padukuhan" },
    {
      icon: <Ruler />,
      value: s.luasWilayahKm2,
      label: "Luas wilayah (km²)",
      decimals: 1,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Data Ringkas"
          title="Girisuko dalam Angka"
          description="Gambaran singkat kondisi kependudukan dan wilayah Kalurahan Girisuko berdasarkan data terakhir."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.06}>
              <StatCard {...item} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
