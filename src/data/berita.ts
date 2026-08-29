import type { Berita } from "@/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1280&q=70`;

/** Konten CONTOH untuk pengembangan frontend. */
export const berita: Berita[] = [
  {
    slug: "musyawarah-kalurahan-rkp-2027",
    judul: "Musyawarah Kalurahan Bahas Prioritas Pembangunan Tahun 2027",
    ringkasan:
      "Pemerintah Kalurahan Girisuko bersama BPK dan perwakilan warga menetapkan tiga prioritas utama pembangunan untuk tahun anggaran berikutnya.",
    konten: [
      "Bertempat di Balai Kalurahan Girisuko, musyawarah kalurahan (Muskal) penyusunan Rencana Kerja Pemerintah Kalurahan Tahun 2027 dihadiri oleh Lurah, jajaran Pamong Kalurahan, anggota Badan Permusyawaratan Kalurahan (BPK), Ketua RT/RW, serta perwakilan kelompok perempuan dan pemuda.",
      "Dari hasil pembahasan, disepakati tiga prioritas utama, yakni perbaikan jalan usaha tani di wilayah selatan, penguatan jaringan air bersih untuk tiga padukuhan, serta pengembangan kapasitas pelaku UMKM lokal.",
      "Lurah Girisuko menekankan bahwa seluruh usulan akan dituangkan secara transparan dalam dokumen APBKal dan dapat dipantau warga melalui papan informasi maupun situs resmi kalurahan.",
    ],
    kategori: "Pembangunan",
    tanggal: "2026-08-18",
    penulis: "Admin Kalurahan",
    gambar: img("photo-1552664730-d307ca884978"),
    unggulan: true,
  },
  {
    slug: "pelayanan-adminduk-keliling",
    judul: "Pelayanan Administrasi Kependudukan Keliling Sasar Padukuhan Terjauh",
    ringkasan:
      "Program jemput bola perekaman KTP-el dan pembaruan Kartu Keluarga menjangkau warga lansia dan penyandang disabilitas.",
    konten: [
      "Kalurahan Girisuko bekerja sama dengan Dinas Kependudukan dan Pencatatan Sipil menggelar pelayanan administrasi kependudukan keliling selama tiga hari.",
      "Layanan ini memprioritaskan warga lanjut usia, penyandang disabilitas, serta warga yang terkendala jarak menuju kantor kapanewon.",
      "Warga cukup membawa dokumen pendukung seperti kartu keluarga lama dan surat pengantar RT. Petugas kalurahan membantu proses pengisian formulir di lokasi.",
    ],
    kategori: "Pengumuman",
    tanggal: "2026-08-11",
    penulis: "Seksi Pelayanan Umum",
    gambar: img("photo-1521791136064-7986c2920216"),
  },
  {
    slug: "panen-raya-kelompok-tani",
    judul: "Panen Raya Kelompok Tani Ngudi Makmur, Produktivitas Naik 12 Persen",
    ringkasan:
      "Penerapan pupuk organik dan pengaturan pola tanam mendorong kenaikan hasil panen padi gogo di lahan kering Girisuko.",
    konten: [
      "Kelompok Tani Ngudi Makmur menggelar panen raya padi gogo di lahan seluas kurang lebih 8 hektare. Hasil ubinan menunjukkan kenaikan produktivitas sekitar 12 persen dibanding musim tanam sebelumnya.",
      "Pendamping pertanian menyebut kombinasi pupuk organik, benih unggul lokal, dan pengaturan jarak tanam menjadi faktor utama peningkatan hasil.",
      "Pemerintah kalurahan mendorong replikasi praktik ini ke kelompok tani lain melalui sekolah lapang yang difasilitasi anggaran ketahanan pangan.",
    ],
    kategori: "Ekonomi",
    tanggal: "2026-07-29",
    penulis: "Kontributor Warga",
    gambar: img("photo-1500937386664-56d1dfef3854"),
  },
  {
    slug: "posyandu-integrasi-layanan-primer",
    judul: "Posyandu Girisuko Terapkan Integrasi Layanan Primer",
    ringkasan:
      "Enam pos layanan terpadu kini melayani seluruh siklus hidup, dari ibu hamil hingga lansia, dalam satu hari layanan.",
    konten: [
      "Seluruh posyandu di Kalurahan Girisuko mulai menerapkan pola Integrasi Layanan Primer (ILP). Dengan pola ini, pemeriksaan ibu hamil, balita, remaja, dewasa, dan lansia dilakukan pada hari layanan yang sama.",
      "Kader kesehatan telah mengikuti pelatihan pengukuran antropometri dan penggunaan aplikasi pencatatan digital.",
      "Kalurahan menyediakan insentif kader dan pengadaan alat ukur baru melalui anggaran bidang kesehatan.",
    ],
    kategori: "Kesehatan",
    tanggal: "2026-07-15",
    penulis: "Seksi Kesejahteraan",
    gambar: img("photo-1576091160550-2173dba999ef"),
  },
  {
    slug: "gotong-royong-talud-sungai",
    judul: "Gotong Royong Warga Perkuat Talud Sungai Jelang Musim Hujan",
    ringkasan:
      "Ratusan warga dari empat padukuhan bahu-membahu memperkuat talud sepanjang 300 meter untuk mencegah longsor.",
    konten: [
      "Menjelang musim hujan, warga empat padukuhan menggelar kerja bakti memperkuat talud sungai yang rawan tergerus air.",
      "Material batu dan semen disediakan dari swadaya masyarakat dan bantuan anggaran penanggulangan bencana kalurahan.",
      "Kegiatan ini juga menjadi sarana pemetaan titik-titik rawan bencana bersama relawan destana (desa tangguh bencana).",
    ],
    kategori: "Sosial",
    tanggal: "2026-06-30",
    penulis: "Admin Kalurahan",
    gambar: img("photo-1469571486292-0ba58a3f068b"),
  },
  {
    slug: "festival-budaya-rasulan",
    judul: "Festival Rasulan Girisuko Angkat Tema Pelestarian Sumber Air",
    ringkasan:
      "Kirab budaya, pentas seni, dan bersih sumber menjadi rangkaian syukuran hasil bumi tahunan warga.",
    konten: [
      "Tradisi rasulan atau bersih dusun kembali digelar dengan rangkaian kirab gunungan hasil bumi, pentas jathilan, dan pagelaran wayang kulit semalam suntuk.",
      "Tahun ini panitia mengangkat tema pelestarian sumber air, ditandai dengan aksi bersih mata air dan penanaman pohon di sekitar sumber.",
      "Festival ini diharapkan memperkuat identitas budaya sekaligus menarik kunjungan wisata ke Girisuko.",
    ],
    kategori: "Kegiatan",
    tanggal: "2026-06-12",
    penulis: "Karang Taruna",
    gambar: img("photo-1533174072545-7a4b6ad7a6c3"),
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
