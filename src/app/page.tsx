import { AgendaKontak } from "@/components/home/agenda-kontak";
import { BeritaTerbaru } from "@/components/home/berita-terbaru";
import { Hero } from "@/components/home/hero";
import { LayananCepat } from "@/components/home/layanan-cepat";
import { PotensiUnggulan } from "@/components/home/potensi-unggulan";
import { Sambutan } from "@/components/home/sambutan";
import { StatsSection } from "@/components/home/stats";

export default function BerandaPage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Sambutan />
      <LayananCepat />
      <BeritaTerbaru />
      <PotensiUnggulan />
      <AgendaKontak />
    </>
  );
}
