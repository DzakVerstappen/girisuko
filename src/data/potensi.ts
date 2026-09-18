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
    slug: "penginapan-kopi-panggang",
    nama: "Penginapan & Kedai Kopi Panggang",
    kategori: "Wisata",
    deskripsi:
      "Penginapan sekaligus kedai kopi dengan pemandangan perbukitan, menjadi titik singgah wisatawan yang berkeliling destinasi Girisuko.",
    lokasi: "Padukuhan Gebang",
    gambar: "/potensi/kopi panggang.jpeg",
  },
  {
    slug: "peyek-temuireng",
    nama: "Industri Peyek Temuireng",
    kategori: "UMKM",
    deskripsi:
      "Sentra produksi peyek (rempeyek) rumahan yang dikelola warga, dipasarkan sebagai oleh-oleh khas dan pengisi warung di sekitar destinasi wisata.",
    lokasi: "Padukuhan Temuireng 1",
    gambar: "/potensi/peyek.jpeg",
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
    gambar: "/potensi/Peternakan sapi dan kambing.JPG",
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
    gambar: "/potensi/tradisi tilik dusun.jpeg",
  },
  {
    slug: "seni-tradisional",
    nama: "Seni Tradisional",
    kategori: "Budaya",
    deskripsi:
      "Kelompok kesenian warga seperti jathilan dan karawitan yang tampil pada hajatan, peringatan hari besar, dan penyambutan tamu wisata.",
    lokasi: "Tersebar di beberapa padukuhan",
    gambar: "/potensi/seni tradisional.jpeg",
  },
];

export const kategoriPotensi = [
  "Semua",
  "Wisata",
  "UMKM",
  "Pertanian",
  "Budaya",
] as const;
