import type { AnggaranTahun } from "@/types";

/**
 * Data APBKal (Anggaran Pendapatan dan Belanja Kalurahan) CONTOH.
 * Angka bersifat ilustratif untuk pengembangan frontend.
 */
export const apbkal: AnggaranTahun[] = [
  {
    tahun: 2026,
    pendapatan: [
      { nama: "Dana Desa (APBN)", nilai: 1_120_000_000 },
      { nama: "Alokasi Dana Kalurahan (ADK)", nilai: 780_000_000 },
      { nama: "Bagi Hasil Pajak & Retribusi", nilai: 96_000_000 },
      { nama: "Bantuan Keuangan Provinsi (Danais)", nilai: 420_000_000 },
      { nama: "Pendapatan Asli Kalurahan", nilai: 145_000_000 },
      { nama: "Lain-lain Pendapatan yang Sah", nilai: 39_000_000 },
    ],
    belanja: [
      { nama: "Penyelenggaraan Pemerintahan", nilai: 820_000_000 },
      { nama: "Pelaksanaan Pembangunan", nilai: 1_180_000_000 },
      { nama: "Pembinaan Kemasyarakatan", nilai: 240_000_000 },
      { nama: "Pemberdayaan Masyarakat", nilai: 305_000_000 },
      { nama: "Penanggulangan Bencana & Mendesak", nilai: 55_000_000 },
    ],
  },
  {
    tahun: 2025,
    pendapatan: [
      { nama: "Dana Desa (APBN)", nilai: 1_075_000_000 },
      { nama: "Alokasi Dana Kalurahan (ADK)", nilai: 745_000_000 },
      { nama: "Bagi Hasil Pajak & Retribusi", nilai: 88_000_000 },
      { nama: "Bantuan Keuangan Provinsi (Danais)", nilai: 390_000_000 },
      { nama: "Pendapatan Asli Kalurahan", nilai: 128_000_000 },
      { nama: "Lain-lain Pendapatan yang Sah", nilai: 34_000_000 },
    ],
    belanja: [
      { nama: "Penyelenggaraan Pemerintahan", nilai: 790_000_000 },
      { nama: "Pelaksanaan Pembangunan", nilai: 1_090_000_000 },
      { nama: "Pembinaan Kemasyarakatan", nilai: 215_000_000 },
      { nama: "Pemberdayaan Masyarakat", nilai: 278_000_000 },
      { nama: "Penanggulangan Bencana & Mendesak", nilai: 77_000_000 },
    ],
  },
  {
    tahun: 2024,
    pendapatan: [
      { nama: "Dana Desa (APBN)", nilai: 1_010_000_000 },
      { nama: "Alokasi Dana Kalurahan (ADK)", nilai: 712_000_000 },
      { nama: "Bagi Hasil Pajak & Retribusi", nilai: 81_000_000 },
      { nama: "Bantuan Keuangan Provinsi (Danais)", nilai: 360_000_000 },
      { nama: "Pendapatan Asli Kalurahan", nilai: 119_000_000 },
      { nama: "Lain-lain Pendapatan yang Sah", nilai: 28_000_000 },
    ],
    belanja: [
      { nama: "Penyelenggaraan Pemerintahan", nilai: 760_000_000 },
      { nama: "Pelaksanaan Pembangunan", nilai: 1_005_000_000 },
      { nama: "Pembinaan Kemasyarakatan", nilai: 198_000_000 },
      { nama: "Pemberdayaan Masyarakat", nilai: 252_000_000 },
      { nama: "Penanggulangan Bencana & Mendesak", nilai: 95_000_000 },
    ],
  },
];

export const catatanApbkal = [
  "Angka pada halaman ini adalah ilustrasi untuk pengembangan situs dan bukan data resmi.",
  "Rincian APBKal resmi ditetapkan melalui Peraturan Kalurahan dan Musyawarah Kalurahan.",
  "Dokumen lengkap dapat diminta di kantor kalurahan sesuai ketentuan keterbukaan informasi publik.",
];

export function totalPendapatan(t: AnggaranTahun) {
  return t.pendapatan.reduce((s, x) => s + x.nilai, 0);
}
export function totalBelanja(t: AnggaranTahun) {
  return t.belanja.reduce((s, x) => s + x.nilai, 0);
}
