import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

export function KontakSection() {
  return (
    <section className="border-t border-border bg-card py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Kontak"
            title="Kunjungi Kantor Kalurahan"
            description="Kami siap melayani warga pada jam kerja. Silakan datang langsung atau hubungi kami lebih dulu."
          />

          <ul className="mt-8 flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                {site.address.street}, {site.address.region},{" "}
                {site.address.province} {site.address.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-5 shrink-0 text-primary" />
              <span>{site.contact.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="size-5 shrink-0 text-primary" />
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-primary"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="flex flex-col gap-0.5">
                {site.contact.jamPelayanan.map((j) => (
                  <span key={j.hari}>
                    <span className="font-medium">{j.hari}</span>
                    <span className="text-muted-foreground"> · {j.jam}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <Button asChild className="mt-8">
            <Link href="/kontak">Halaman Kontak Lengkap</Link>
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Peta lokasi Kantor Kalurahan Girisuko"
              src={site.maps.embedSrc}
              loading="lazy"
              className="h-80 w-full border-0 lg:h-96"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
