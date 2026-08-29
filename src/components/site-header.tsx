"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/utils";

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4 py-3">
        <Brand />

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/80",
                  )}
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  ) : null}
                </Link>

                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-10 w-64 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-border bg-card p-1.5 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/kontak">
              <Phone className="size-4" />
              Hubungi Kami
            </Link>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Buka menu navigasi"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm data-[state=open]:animate-[fade-in_0.2s_ease-out]" />
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-background shadow-2xl data-[state=open]:animate-[slide-in_0.25s_ease-out] focus:outline-none"
              >
                <div className="flex items-center justify-between border-b border-border p-4">
                  <Dialog.Title className="font-display text-base font-bold">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close
                    aria-label="Tutup menu"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card"
                  >
                    <X className="size-5" />
                  </Dialog.Close>
                </div>
                <nav
                  aria-label="Navigasi seluler"
                  className="flex-1 overflow-y-auto p-4"
                >
                  <ul className="flex flex-col gap-1">
                    {mainNav.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-muted",
                            isActive(item.href) && "text-primary",
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.children ? (
                          <ul className="ml-3 border-l border-border pl-3">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-t border-border p-4">
                  <Button asChild className="w-full">
                    <Link href="/kontak" onClick={closeMenu}>
                      Hubungi Kami
                    </Link>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
