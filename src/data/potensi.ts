import type { Potensi } from "@/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=70`;

/**
 * Potensi Kalurahan Girisuko. Nama objek sudah sesuai kondisi lapangan;
 * foto masih memakai gambar contoh (stok) dan lokasi padukuhan bersifat
 * indikatif — mohon sesuaikan dengan data resmi.
 */
export const potensi: Potensi[] = [
  {
    slug: "watu-payung",
    nama: "Watu Payung",
    kategori: "Wisata",
    deskripsi:
      "Gardu pandang dengan formasi batu menyerupai payung dan panorama lepas ke bentang perbukitan karst serta lembah Sungai Oyo. Populer untuk berburu foto dan menikmati senja.",
    lokasi: "Padukuhan Turunan",
    gambar: img("photo-1464822759023-fed622ff2c3b"),
  },
  {
    slug: "bukit-roso-wulan",
    nama: "Bukit Roso Wulan",
    kategori: "Wisata",
    deskripsi:
      "Puncak bukit untuk menikmati matahari terbit dan terbenam, hamparan awan pada pagi hari, serta area lapang untuk berkemah sederhana.",
    lokasi: "Padukuhan Sanglor 2",
    gambar: img("photo-1470071459604-3b5ec3a7fe05"),
  },
  {
    slug: "stone-park",
    nama: "Stone Park",
    kategori: "Wisata",
    deskripsi:
      "Spot sunrise dengan latar bentang karst yang khas. Tersedia gardu pandang, spot foto batuan, dan warung kelola warga.",
    lokasi: "Padukuhan Pacar 1",
    gambar: img("photo-1501785888041-af3ef285b470"),
  },
  {
    slug: "telogo-moto-indro",
    nama: "Telogo Moto Indro",
    kategori: "Wisata",
    deskripsi:
      "Telaga alami yang menjadi sumber air sekaligus ruang wisata santai dan edukasi konservasi air di kawasan karst.",
    lokasi: "Padukuhan Sumber",
    gambar: img("photo-1502537362081-b571a8d4e5a3"),
  },
  {
    slug: "penginapan-kopi-panggang",
    nama: "Penginapan & Kedai Kopi Panggang",
    kategori: "Wisata",
    deskripsi:
      "Penginapan sekaligus kedai kopi dengan pemandangan perbukitan, menjadi titik singgah wisatawan yang berkeliling destinasi Girisuko.",
    lokasi: "Padukuhan Gebang",
    gambar: img("photo-1447933601403-0c6688de566e"),
  },
  {
    slug: "peyek-temuireng",
    nama: "Industri Peyek Temuireng",
    kategori: "UMKM",
    deskripsi:
      "Sentra produksi peyek (rempeyek) rumahan yang dikelola warga, dipasarkan sebagai oleh-oleh khas dan pengisi warung di sekitar destinasi wisata.",
    lokasi: "Padukuhan Temuireng 1",
    gambar: img("photo-1621939514649-280e2ee25f60"),
  },
  {
    slug: "kerajinan-tas-temuireng",
    nama: "Kerajinan Tas Temuireng",
    kategori: "UMKM",
    deskripsi:
      "Perajin tas yang menyerap tenaga kerja warga di sela musim tani. Produk dijual untuk pasar lokal maupun pesanan dari luar daerah.",
    lokasi: "Padukuhan Temuireng 2",
    gambar: img("photo-1595964185029-45b32d5a03f0"),
  },
  {
    slug: "kwt-suko-dadi",
    nama: "Kelompok Wanita Tani “Suko Dadi”",
    kategori: "UMKM",
    deskripsi:
      "Kelompok perempuan yang mengembangkan pekarangan pangan lestari dan mengolah hasil kebun menjadi produk bernilai tambah.",
    lokasi: "Padukuhan Sumber",
    gambar: img("photo-1615485290382-441e4d049cb5"),
  },
  {
    slug: "jagung-palawija",
    nama: "Jagung & Palawija",
    kategori: "Pertanian",
    deskripsi:
      "Komoditas panen utama Girisuko. Lahan tegalan dan pekarangan didominasi tanaman jagung, diselingi kacang-kacangan dan ketela sesuai musim.",
    lokasi: "Hamparan tegalan seluruh padukuhan",
    gambar: img("photo-1500937386664-56d1dfef3854"),
  },
  {
    slug: "peternakan-warga",
    nama: "Peternakan Sapi & Kambing",
    kategori: "Pertanian",
    deskripsi:
      "Ternak sapi dan kambing menjadi tabungan hidup keluarga sekaligus sumber pupuk kandang untuk lahan kering. Dikelola secara individu maupun kelompok.",
    lokasi: "Tersebar di 9 padukuhan",
    gambar: img("photo-1524024973431-2ad916746881"),
  },
  {
    slug: "hortikultura-pekarangan",
    nama: "Hortikultura Pekarangan",
    kategori: "Pertanian",
    deskripsi:
      "Pemanfaatan pekarangan untuk sayur, empon-empon, dan buah guna menopang gizi keluarga dan menambah pendapatan.",
    lokasi: "Tersebar di seluruh padukuhan",
    gambar: img("photo-1574943320219-553eb213f72d"),
  },
  {
    slug: "tradisi-tilik-dusun",
    nama: "Tradisi Tilik Dusun",
    kategori: "Budaya",
    deskripsi:
      "Agenda tahunan berupa kunjungan bergilir pemerintah kalurahan ke tiap padukuhan sebagai ajang silaturahmi, menyerap aspirasi warga, dan memperkuat gotong royong.",
    lokasi: "Bergilir di 9 padukuhan",
    gambar: img("photo-1516307365426-bea591f05011"),
  },
  {
    slug: "seni-tradisional",
    nama: "Seni Tradisional",
    kategori: "Budaya",
    deskripsi:
      "Kelompok kesenian warga seperti jathilan dan karawitan yang tampil pada hajatan, peringatan hari besar, dan penyambutan tamu wisata.",
    lokasi: "Tersebar di beberapa padukuhan",
    gambar: img("photo-1533174072545-7a4b6ad7a6c3"),
  },
];

export const kategoriPotensi = [
  "Semua",
  "Wisata",
  "UMKM",
  "Pertanian",
  "Budaya",
] as const;
