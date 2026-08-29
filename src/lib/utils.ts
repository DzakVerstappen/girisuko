import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTanggal(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatRupiah(nilai: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

export function formatRupiahSingkat(nilai: number) {
  if (nilai >= 1_000_000_000) return `Rp ${(nilai / 1_000_000_000).toFixed(2)} M`;
  if (nilai >= 1_000_000) return `Rp ${(nilai / 1_000_000).toFixed(1)} Jt`;
  return formatRupiah(nilai);
}
