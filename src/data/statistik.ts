/**
 * Data statistik Kalurahan Girisuko.
 * Angka total mengacu pada ± 5.500 jiwa; rincian per kelompok masih berupa
 * perkiraan proporsional dan perlu dimutakhirkan dengan data resmi.
 */

export const ringkasanStatistik = {
  totalPenduduk: 6561,
  kepalaKeluarga: 2170,
  jumlahPadukuhan: 9,
  luasWilayahKm2: 12.4,
  curahHujanMmTahun: 1382,
  lakiLaki: 3194,
  perempuan: 3367,
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
  { kelompok: "0–4", lakiLaki: 33, perempuan: 38 },
  { kelompok: "5–14", lakiLaki: 283, perempuan: 288 },
  { kelompok: "15–24", lakiLaki: 441, perempuan: 402 },
  { kelompok: "25–44", lakiLaki: 949, perempuan: 893 },
  { kelompok: "45–64", lakiLaki: 785, perempuan: 876 },
  { kelompok: "65+", lakiLaki: 701, perempuan: 909 },
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
