import { CalendarClock, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { agenda } from "@/data/agenda";
import { site } from "@/data/site";
import { formatTanggal } from "@/lib/utils";

export function AgendaKontak() {
  return (
    <section className="border-t border-border bg-card py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <SectionHeading eyebrow="Agenda" title="Kegiatan Mendatang" />
          <ul className="mt-8 flex flex-col gap-3">
            {agenda.map((a) => (
              <li
                key={a.judul}
                className="flex gap-4 rounded-xl border border-border bg-background p-4"
              >
                <div className="flex w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <span className="text-lg font-extrabold leading-none">
                    {new Date(a.tanggal).getDate()}
                  </span>
                  <span className="text-[11px] uppercase">
                    {new Date(a.tanggal).toLocaleDateString("id-ID", {
                      month: "short",
                    })}
                  </span>
                </div>
                <div>
                  <p className="font-semibold leading-snug">{a.judul}</p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <CalendarClock className="size-3.5" />
                      {formatTanggal(a.tanggal)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {a.waktu}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {a.lokasi}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionHeading eyebrow="Kontak" title="Kunjungi Kantor Kalurahan" />
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Peta lokasi Kantor Kalurahan Girisuko"
              src={site.maps.embedSrc}
              loading="lazy"
              className="h-64 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid gap-3 bg-background p-5 text-sm sm:grid-cols-2">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {site.address.street}, {site.address.region}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                {site.contact.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                {site.contact.email}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-primary" />
                Senin–Jumat, jam kerja
              </p>
            </div>
          </div>
          <Button asChild className="mt-6">
            <Link href="/kontak">Halaman Kontak Lengkap</Link>
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
