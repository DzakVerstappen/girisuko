export type Kategori =
  | "Pengumuman"
  | "Pembangunan"
  | "Kegiatan"
  | "Sosial"
  | "Ekonomi"
  | "Kesehatan";

export type Berita = {
  slug: string;
  judul: string;
  ringkasan: string;
  konten: string[];
  kategori: Kategori;
  tanggal: string;
  penulis: string;
  gambar: string;
  unggulan?: boolean;
};

export type Layanan = {
  slug: string;
  nama: string;
  ringkasan: string;
  kategori: "Kependudukan" | "Surat Keterangan" | "Pertanahan" | "Usaha";
  syarat: string[];
  alur: string[];
  waktu: string;
  biaya: string;
};

export type Pamong = {
  nama: string;
  jabatan: string;
  kelompok: "Pimpinan" | "Pelaksana Teknis" | "Pelaksana Kewilayahan";
  foto: string;
};

export type Potensi = {
  slug: string;
  nama: string;
  kategori: "Wisata" | "UMKM" | "Pertanian" | "Budaya";
  deskripsi: string;
  lokasi: string;
  gambar: string;
};

export type ItemGaleri = {
  id: string;
  judul: string;
  kategori: "Kegiatan" | "Pembangunan" | "Alam" | "Budaya";
  gambar: string;
};

export type Padukuhan = {
  nama: string;
  dukuh: string;
  kk: number;
  jiwa: number;
};

export type Agenda = {
  judul: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
};

export type AnggaranTahun = {
  tahun: number;
  pendapatan: { nama: string; nilai: number }[];
  belanja: { nama: string; nilai: number }[];
};
