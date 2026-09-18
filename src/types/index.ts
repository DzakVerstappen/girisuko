export type Pamong = {
  nama: string;
  jabatan: string;
  kelompok: "Pimpinan" | "Pelaksana Kewilayahan";
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

export type Padukuhan = {
  nama: string;
  dukuh: string;
  kk: number;
  jiwa: number;
  lakiLaki: number;
  perempuan: number;
};
