import type { Pamong } from "@/types";

const potret = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=480&q=70`;

/**
 * Nama dan foto di bawah ini adalah CONTOH (placeholder) semata dan tidak
 * merujuk pada individu nyata. Ganti dengan data Pamong Kalurahan Girisuko.
 */
export const pamong: Pamong[] = [
  {
    nama: "R. Ngt. Sasangka Aji",
    jabatan: "Lurah",
    kelompok: "Pimpinan",
    foto: potret("photo-1560250097-0b93528c311a"),
  },
  {
    nama: "Widarta Nugraha",
    jabatan: "Carik (Sekretaris Kalurahan)",
    kelompok: "Pimpinan",
    foto: potret("photo-1544005313-94ddf0286df2"),
  },
  {
    nama: "Sri Lestari Handayani",
    jabatan: "Kaur Tata Laksana",
    kelompok: "Pelaksana Teknis",
    foto: potret("photo-1573496359142-b8d87734a5a2"),
  },
  {
    nama: "Bambang Setiawan",
    jabatan: "Kaur Danarta (Keuangan)",
    kelompok: "Pelaksana Teknis",
    foto: potret("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    nama: "Muhammad Fikri",
    jabatan: "Kaur Pangripta (Perencanaan)",
    kelompok: "Pelaksana Teknis",
    foto: potret("photo-1500648767791-00dcc994a43e"),
  },
  {
    nama: "Retno Wulandari",
    jabatan: "Jagabaya (Kasi Keamanan & Ketertiban)",
    kelompok: "Pelaksana Teknis",
    foto: potret("photo-1580489944761-15a19d654956"),
  },
  {
    nama: "Danang Prasetya",
    jabatan: "Ulu-ulu (Kasi Pembangunan & Pengairan)",
    kelompok: "Pelaksana Teknis",
    foto: potret("photo-1535713875002-d1d0cf377fde"),
  },
  {
    nama: "Nur Aini Rahmawati",
    jabatan: "Kamituwa (Kasi Kesejahteraan Rakyat)",
    kelompok: "Pelaksana Teknis",
    foto: potret("photo-1487412720507-e7ab37603c6f"),
  },
  {
    nama: "Sukiman",
    jabatan: "Dukuh Padukuhan Sumber",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1519085360753-af0119f7cbe7"),
  },
  {
    nama: "Yohanes Tri Atmojo",
    jabatan: "Dukuh Padukuhan Turunan",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1506794778202-cad84cf45f1d"),
  },
  {
    nama: "Painem",
    jabatan: "Dukuh Padukuhan Sanglor 1",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1517841905240-472988babdf9"),
  },
  {
    nama: "Slamet Riyadi",
    jabatan: "Dukuh Padukuhan Sanglor 2",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1633332755192-727a05c4013d"),
  },
  {
    nama: "Mujiyana",
    jabatan: "Dukuh Padukuhan Pacar 1",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1502685104226-ee32379fefbe"),
  },
  {
    nama: "Sugeng Riyanto",
    jabatan: "Dukuh Padukuhan Pacar 2",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1508214751196-bcfd4ca60f91"),
  },
  {
    nama: "Tukiran",
    jabatan: "Dukuh Padukuhan Temuireng 1",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1519345182560-3f2917c472ef"),
  },
  {
    nama: "Warsini",
    jabatan: "Dukuh Padukuhan Temuireng 2",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1500835556837-99ac94a94552"),
  },
  {
    nama: "Ngadiman",
    jabatan: "Dukuh Padukuhan Gebang",
    kelompok: "Pelaksana Kewilayahan",
    foto: potret("photo-1547425260-76bcadfb4f2c"),
  },
];

export const kelompokPamong = [
  "Pimpinan",
  "Pelaksana Teknis",
  "Pelaksana Kewilayahan",
] as const;

export const lembaga = [
  {
    nama: "Badan Permusyawaratan Kalurahan (BPK)",
    peran:
      "Menyalurkan aspirasi warga, membahas dan menyepakati rancangan peraturan kalurahan, serta mengawasi kinerja pemerintah kalurahan.",
    jumlah: "9 anggota",
  },
  {
    nama: "Lembaga Pemberdayaan Masyarakat Kalurahan (LPMK)",
    peran:
      "Menyusun rencana pembangunan partisipatif dan menggerakkan swadaya gotong royong masyarakat.",
    jumlah: "15 pengurus",
  },
  {
    nama: "PKK Kalurahan",
    peran:
      "Pemberdayaan dan kesejahteraan keluarga melalui 10 program pokok PKK.",
    jumlah: "Tim penggerak tingkat kalurahan & padukuhan",
  },
  {
    nama: "Karang Taruna “Taruna Bhakti”",
    peran:
      "Wadah pengembangan generasi muda di bidang sosial, ekonomi kreatif, dan kepedulian lingkungan.",
    jumlah: "Pengurus inti + perwakilan padukuhan",
  },
  {
    nama: "Kelompok Tani, Gapoktan & Kelompok Wanita Tani “Suko Dadi”",
    peran:
      "Koordinasi usaha tani jagung dan palawija, distribusi sarana produksi, pengembangan pekarangan pangan lestari, dan penguatan ketahanan pangan.",
    jumlah: "Tersebar di 9 padukuhan",
  },
  {
    nama: "Pokdarwis (Kelompok Sadar Wisata)",
    peran:
      "Mengelola dan mengembangkan destinasi Watu Payung, Bukit Roso Wulan, Stone Park, dan Telogo Moto Indro sebagai bagian dari Desa Wisata Girisuko.",
    jumlah: "Pengurus + anggota per destinasi",
  },
  {
    nama: "Relawan Destana / FPRB",
    peran:
      "Kesiapsiagaan dan penanggulangan bencana berbasis masyarakat di kawasan perbukitan karst.",
    jumlah: "Relawan terlatih tingkat kalurahan",
  },
];
