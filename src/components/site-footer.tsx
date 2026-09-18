import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Brand } from "@/components/brand";
import { Container } from "@/components/ui/container";
import { footerNav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Brand />
          <p className="max-w-xs text-sm text-muted-foreground">
            {site.description}
          </p>
          <div className="flex gap-2">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {footerNav.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              {col.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Kontak
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span>
                {site.address.street}, {site.address.region},{" "}
                {site.address.province} {site.address.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-primary" />
              <span>{site.contact.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-primary" />
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-primary"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Seluruh konten pada situs
            ini merupakan contoh untuk pengembangan.
          </p>
          <p>Kapanewon Panggang, Gunungkidul, D.I. Yogyakarta</p>
        </Container>
      </div>

      <div className="border-t border-border/60">
        <Container className="py-4 text-center text-[11px] leading-relaxed text-muted-foreground/80">
          <p>
            Dirancang dan dikembangkan dengan penuh dedikasi oleh{" "}
            <span className="font-semibold text-foreground/80">
              Tim KKN Universitas Islam Indonesia Angkatan 73
            </span>
            , sebagai kontribusi bagi kemajuan digital{" "}
            <span className="font-semibold text-foreground/80">
              Kalurahan Girisuko
            </span>
            .
          </p>
          <p className="mt-1">
            oleh{" "}
            <span className="font-semibold text-foreground/80">
              Alfonso Fiter Ferdiansyah
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-foreground/80">
              Syahru Dzaki Muhammad
            </span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
