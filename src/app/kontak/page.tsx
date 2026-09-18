import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Alamat kantor, jam pelayanan, nomor telepon, email, dan peta lokasi Kalurahan Girisuko.",
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Kontak Kalurahan Girisuko"
        description="Sampaikan pertanyaan, aspirasi, atau kebutuhan layanan Anda. Kami siap membantu pada jam kerja."
        breadcrumbs={[{ label: "Kontak" }]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <Card className="p-6">
              <h2 className="text-lg font-bold">Informasi Kontak</h2>
              <ul className="mt-4 flex flex-col gap-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.region}
                    <br />
                    {site.address.province} {site.address.postalCode}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{site.contact.phone}</span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>WhatsApp: {site.contact.whatsapp}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="transition-colors hover:text-primary"
                  >
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <Clock className="size-5 text-primary" />
                Jam Pelayanan
              </h2>
              <ul className="mt-4 divide-y divide-border text-sm">
                {site.contact.jamPelayanan.map((j) => (
                  <li
                    key={j.hari}
                    className="flex items-center justify-between py-2.5"
                  >
                    <span className="font-medium">{j.hari}</span>
                    <span className="text-muted-foreground">{j.jam}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Peta lokasi Kantor Kalurahan Girisuko"
              src={site.maps.embedSrc}
              loading="lazy"
              className="h-full min-h-[420px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
