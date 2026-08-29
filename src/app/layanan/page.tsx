import type { Metadata } from "next";
import { Clock, Coins, FileCheck2, ListChecks } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { Stepper } from "@/components/stepper";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { layanan } from "@/data/layanan";

export const metadata: Metadata = {
  title: "Layanan Publik",
  description:
    "Persyaratan, alur, estimasi waktu, dan biaya layanan administrasi di Kalurahan Girisuko.",
};

const kategoriList = [
  "Kependudukan",
  "Surat Keterangan",
  "Pertanahan",
  "Usaha",
] as const;

export default function LayananPage() {
  return (
    <>
      <PageHero
        eyebrow="Pelayanan"
        title="Layanan Administrasi Kalurahan"
        description="Siapkan berkas sesuai persyaratan agar pelayanan di kantor kalurahan berjalan cepat. Semua layanan tidak dipungut biaya."
        breadcrumbs={[{ label: "Layanan" }]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: FileCheck2, label: `${layanan.length} jenis layanan` },
            { icon: Coins, label: "Gratis / tanpa pungutan" },
            { icon: Clock, label: "Rata-rata selesai < 1 hari" },
            { icon: ListChecks, label: "Alur & syarat transparan" },
          ].map((x) => (
            <Card key={x.label} className="flex items-center gap-3 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                <x.icon className="size-5" />
              </span>
              <span className="text-sm font-medium">{x.label}</span>
            </Card>
          ))}
        </div>

        {kategoriList.map((kat) => {
          const list = layanan.filter((l) => l.kategori === kat);
          if (!list.length) return null;
          return (
            <section key={kat} className="mt-14">
              <SectionHeading eyebrow="Kategori" title={kat} />
              <Accordion type="multiple" className="mt-6 flex flex-col gap-3">
                {list.map((l) => (
                  <div key={l.slug} id={l.slug} className="scroll-mt-24">
                    <AccordionItem value={l.slug}>
                      <AccordionTrigger>
                        <span className="flex flex-col gap-1 text-left">
                          <span>{l.nama}</span>
                          <span className="text-sm font-normal text-muted-foreground">
                            {l.ringkasan}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold text-foreground">
                              Persyaratan
                            </h4>
                            <ul className="mt-3 flex flex-col gap-2 text-sm">
                              {l.syarat.map((s, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                                  {s}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Badge variant="outline">
                                <Clock className="size-3.5" />
                                {l.waktu}
                              </Badge>
                              <Badge variant="outline">
                                <Coins className="size-3.5" />
                                {l.biaya}
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              Alur pelayanan
                            </h4>
                            <div className="mt-3">
                              <Stepper steps={l.alur} />
                            </div>
                          </div>
                        </div>
                        <p className="mt-5 text-xs">
                          Formulir dapat diambil di loket kalurahan. Tombol unduh
                          formulir akan tersedia setelah sistem backend
                          terpasang.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </section>
          );
        })}
      </Container>
    </>
  );
}
