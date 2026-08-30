import type { Berita } from "@/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1280&q=70`;

/** Konten CONTOH untuk pengembangan frontend — narasi mengacu pada kondisi Girisuko. */
export const berita: Berita[] = [
  {
    slug: "musrenbangkal-prioritas-2027",
    judul: "Musrenbangkal 2027: Jalan Usaha Tani, Air Bersih, dan Penataan Wisata Jadi Prioritas",
    ringkasan:
      "Pemerintah Kalurahan Girisuko bersama BPK dan perwakilan 9 padukuhan menyepakati arah pembangunan tahun anggaran berikutnya.",
    konten: [
      "Musyawarah Perencanaan Pembangunan Kalurahan (Musrenbangkal) digelar di Balai Kalurahan Girisuko, dihadiri Lurah, Pamong Kalurahan, anggota Badan Permusyawaratan Kalurahan (BPK), para Dukuh, serta perwakilan kelompok perempuan dan pemuda dari sembilan padukuhan.",
      "Tiga prioritas disepakati, yakni perbaikan jalan usaha tani untuk memperlancar angkutan hasil panen jagung dan palawija, penguatan jaringan air bersih di padukuhan yang rawan kekeringan pada musim kemarau, serta penataan akses dan fasilitas destinasi wisata Watu Payung dan Stone Park.",
      "Lurah Girisuko menekankan seluruh usulan akan dituangkan secara transparan dalam APBKal dan dapat dipantau warga melalui papan informasi maupun situs resmi kalurahan.",
    ],
    kategori: "Pembangunan",
    tanggal: "2026-08-20",
    penulis: "Admin Kalurahan",
    gambar: img("photo-1552664730-d307ca884978"),
    unggulan: true,
  },
  {
    slug: "tilik-dusun-2026",
    judul: "Tilik Dusun 2026 Dimulai, Pemerintah Kalurahan Sambangi 9 Padukuhan",
    ringkasan:
      "Kunjungan bergilir tahunan ini menjadi ajang silaturahmi sekaligus menyerap aspirasi warga secara langsung.",
    konten: [
      "Tradisi Tilik Dusun kembali dijalankan Pemerintah Kalurahan Girisuko. Kegiatan ini berupa kunjungan bergilir ke tiap padukuhan — Sumber, Turunan, Sanglor 1, Sanglor 2, Pacar 1, Pacar 2, Temuireng 1, Temuireng 2, dan Gebang.",
      "Dalam setiap kunjungan, Lurah dan Pamong berdialog dengan warga membahas usulan pembangunan, persoalan air, jalan, pertanian, hingga pengembangan wisata dan UMKM setempat.",
      "Hasil serapan aspirasi Tilik Dusun menjadi salah satu bahan utama penyusunan rencana kerja dan anggaran kalurahan tahun berikutnya.",
    ],
    kategori: "Kegiatan",
    tanggal: "2026-08-12",
    penulis: "Admin Kalurahan",
    gambar: img("photo-1533174072545-7a4b6ad7a6c3"),
  },
  {
    slug: "girisuko-desa-wisata-jadesta",
    judul: "Girisuko Terdaftar sebagai Desa Wisata di Jadesta Kemenparekraf",
    ringkasan:
      "Paket kunjungan bentang karst — Watu Payung, Bukit Roso Wulan, Stone Park, dan Telogo Moto Indro — didorong sebagai daya tarik utama.",
    konten: [
      "Kalurahan Girisuko resmi tercatat sebagai Desa Wisata pada platform Jaringan Desa Wisata (Jadesta) Kementerian Pariwisata dan Ekonomi Kreatif.",
      "Pengelolaan destinasi digerakkan Kelompok Sadar Wisata (Pokdarwis) bersama warga, mencakup spot matahari terbit Stone Park, gardu pandang Watu Payung, Bukit Roso Wulan, serta Telogo Moto Indro. Wisatawan dapat bermalam di penginapan dan menikmati sajian di Kedai Kopi Panggang.",
      "Pemerintah kalurahan menyiapkan pembenahan papan penunjuk arah, area parkir, dan pelatihan pelayanan tamu bagi pengelola destinasi.",
    ],
    kategori: "Ekonomi",
    tanggal: "2026-07-30",
    penulis: "Pokdarwis Girisuko",
    gambar: img("photo-1464822759023-fed622ff2c3b"),
  },
  {
    slug: "panen-raya-jagung-palawija",
    judul: "Panen Raya Jagung, Gapoktan Dorong Perbaikan Pascapanen",
    ringkasan:
      "Hasil panen jagung sebagai komoditas utama Girisuko mulai dipetik. Fokus berikutnya pada pengeringan dan mutu simpan.",
    konten: [
      "Kelompok tani dan Gabungan Kelompok Tani (Gapoktan) Girisuko menggelar panen raya jagung di lahan tegalan. Jagung merupakan komoditas panen utama kalurahan, diselingi kacang-kacangan dan ketela sesuai musim.",
      "Pendamping pertanian mendorong perbaikan penanganan pascapanen, terutama pengeringan dan penyimpanan, agar mutu dan harga jual lebih baik.",
      "Kelompok Wanita Tani “Suko Dadi” turut memanfaatkan hasil kebun untuk diolah menjadi produk bernilai tambah bersama pelaku UMKM setempat.",
    ],
    kategori: "Ekonomi",
    tanggal: "2026-07-16",
    penulis: "Kontributor Warga",
    gambar: img("photo-1500937386664-56d1dfef3854"),
  },
  {
    slug: "posyandu-integrasi-layanan-primer",
    judul: "Posyandu Girisuko Terapkan Integrasi Layanan Primer",
    ringkasan:
      "Pos layanan terpadu kini melayani seluruh siklus hidup, dari ibu hamil hingga lansia, dalam satu hari layanan.",
    konten: [
      "Posyandu di padukuhan-padukuhan Kalurahan Girisuko mulai menerapkan pola Integrasi Layanan Primer (ILP). Dengan pola ini, pemeriksaan ibu hamil, balita, remaja, dewasa, dan lansia dilakukan pada hari layanan yang sama.",
      "Kader kesehatan telah mengikuti pelatihan pengukuran antropometri dan pencatatan digital. Layanan didukung Puskesmas wilayah Kapanewon Panggang.",
      "Kalurahan menyediakan insentif kader dan pengadaan alat ukur melalui anggaran bidang kesehatan.",
    ],
    kategori: "Kesehatan",
    tanggal: "2026-07-02",
    penulis: "Seksi Kesejahteraan",
    gambar: img("photo-1576091160550-2173dba999ef"),
  },
  {
    slug: "kerja-bakti-akses-destinasi",
    judul: "Gotong Royong Warga Perbaiki Akses Jalan Menuju Destinasi Wisata",
    ringkasan:
      "Warga Turunan dan Pacar 1 bahu-membahu memperbaiki jalan dan talud jelang musim hujan serta menyambut kunjungan wisata.",
    konten: [
      "Ratusan warga menggelar kerja bakti memperbaiki ruas jalan dan memperkuat talud pada jalur menuju Watu Payung dan Stone Park.",
      "Material sebagian berasal dari swadaya masyarakat dan bantuan anggaran kalurahan. Kegiatan sekaligus menjadi pemetaan titik rawan longsor bersama relawan penanggulangan bencana.",
      "Gotong royong seperti ronda, kerja bakti, dan kegiatan posyandu masih menjadi kekuatan sosial warga Girisuko.",
    ],
    kategori: "Sosial",
    tanggal: "2026-06-21",
    penulis: "Admin Kalurahan",
    gambar: img("photo-1469571486292-0ba58a3f068b"),
  },
];

export const kategoriBerita = [
  "Semua",
  "Pengumuman",
  "Pembangunan",
  "Kegiatan",
  "Sosial",
  "Ekonomi",
  "Kesehatan",
] as const;

export function getBerita(slug: string) {
  return berita.find((b) => b.slug === slug);
}
