/**
 * Data statistik Kalurahan Girisuko.
 * Angka total mengacu pada ± 5.500 jiwa; rincian per kelompok masih berupa
 * perkiraan proporsional dan perlu dimutakhirkan dengan data resmi.
 */

export const ringkasanStatistik = {
  totalPenduduk: 5500,
  kepalaKeluarga: 1762,
  jumlahPadukuhan: 9,
  luasWilayahKm2: 12.4,
  curahHujanMmTahun: 1382,
  lakiLaki: 2755,
  perempuan: 2745,
  wajibKtp: 4180,
  penerimaBantuan: 540,
};

export const pendudukPerTahun = [
  { tahun: "2021", jiwa: 5372 },
  { tahun: "2022", jiwa: 5408 },
  { tahun: "2023", jiwa: 5447 },
  { tahun: "2024", jiwa: 5479 },
  { tahun: "2025", jiwa: 5500 },
];

export const kelompokUmur = [
  { kelompok: "0–4", lakiLaki: 150, perempuan: 143 },
  { kelompok: "5–14", lakiLaki: 430, perempuan: 410 },
  { kelompok: "15–24", lakiLaki: 470, perempuan: 450 },
  { kelompok: "25–44", lakiLaki: 820, perempuan: 800 },
  { kelompok: "45–64", lakiLaki: 610, perempuan: 625 },
  { kelompok: "65+", lakiLaki: 275, perempuan: 317 },
];

export const mataPencaharian = [
  { nama: "Petani / Pekebun", jumlah: 1520 },
  { nama: "Buruh Tani", jumlah: 540 },
  { nama: "Peternak", jumlah: 360 },
  { nama: "Buruh Harian Lepas", jumlah: 380 },
  { nama: "Wiraswasta / UMKM", jumlah: 430 },
  { nama: "Karyawan Swasta", jumlah: 300 },
  { nama: "PNS / TNI / Polri", jumlah: 70 },
  { nama: "Lainnya", jumlah: 250 },
];

export const pendidikan = [
  { jenjang: "Tidak/Belum Sekolah", jumlah: 640 },
  { jenjang: "SD / Sederajat", jumlah: 1780 },
  { jenjang: "SMP / Sederajat", jumlah: 1320 },
  { jenjang: "SMA / Sederajat", jumlah: 1180 },
  { jenjang: "Diploma / Sarjana", jumlah: 480 },
];

export const agama = [
  { nama: "Islam", jumlah: 5180 },
  { nama: "Kristen", jumlah: 210 },
  { nama: "Katolik", jumlah: 95 },
  { nama: "Hindu", jumlah: 10 },
  { nama: "Buddha", jumlah: 5 },
];
