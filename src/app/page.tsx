import { BeritaTerbaru } from "@/components/home/berita-terbaru";
import { Hero } from "@/components/home/hero";
import { KontakSection } from "@/components/home/kontak-section";
import { PotensiUnggulan } from "@/components/home/potensi-unggulan";
import { Sambutan } from "@/components/home/sambutan";
import { StatsSection } from "@/components/home/stats";

export default function BerandaPage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Sambutan />
      <BeritaTerbaru />
      <PotensiUnggulan />
      <KontakSection />
    </>
  );
}
