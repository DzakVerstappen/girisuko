import type { Potensi } from "@/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=70`;

/** Konten CONTOH untuk pengembangan frontend. */
export const potensi: Potensi[] = [
  {
    slug: "bukit-panorama-girisuko",
    nama: "Bukit Panorama Girisuko",
    kategori: "Wisata",
    deskripsi:
      "Spot matahari terbit dengan latar barisan perbukitan karst dan hamparan ladang. Dilengkapi gardu pandang dan area kemah sederhana yang dikelola pokdarwis.",
    lokasi: "Padukuhan Wiloso",
    gambar: img("photo-1464822759023-fed622ff2c3b"),
  },
  {
    slug: "goa-sumber-air",
    nama: "Goa & Sumber Mata Air Sendang",
    kategori: "Wisata",
    deskripsi:
      "Kawasan sumber air abadi yang menjadi tumpuan warga sekaligus tujuan wisata minat khusus dan edukasi konservasi air.",
    lokasi: "Padukuhan Bacak",
    gambar: img("photo-1502537362081-b571a8d4e5a3"),
  },
  {
    slug: "desa-wisata-budaya",
    nama: "Kampung Budaya Girisuko",
    kategori: "Wisata",
    deskripsi:
      "Paket wisata belajar membatik, karawitan, dan kuliner tradisional bersama warga dengan homestay rumah joglo.",
    lokasi: "Padukuhan Bulu",
    gambar: img("photo-1528181304800-259b08848526"),
  },
  {
    slug: "keripik-singkong-mekar",
    nama: "Keripik Singkong “Mekar Rasa”",
    kategori: "UMKM",
    deskripsi:
      "Olahan singkong lokal aneka rasa yang dikelola kelompok perempuan. Sudah memiliki izin PIRT dan menembus pasar oleh-oleh Gunungkidul.",
    lokasi: "Padukuhan Karangnongko",
    gambar: img("photo-1621939514649-280e2ee25f60"),
  },
  {
    slug: "gula-semut-jawa",
    nama: "Gula Semut Kelapa Organik",
    kategori: "UMKM",
    deskripsi:
      "Gula kelapa kristal tanpa bahan pengawet hasil penderes lokal, dikemas untuk pasar ritel dan ekspor skala kecil.",
    lokasi: "Padukuhan Wiloso",
    gambar: img("photo-1610725664285-7c57e6eeac3f"),
  },
  {
    slug: "anyaman-bambu",
    nama: "Kerajinan Anyaman Bambu",
    kategori: "UMKM",
    deskripsi:
      "Besek, tampah, dan perabot dekoratif dari bambu apus. Menyerap tenaga kerja perajin di waktu luang antar-musim tani.",
    lokasi: "Padukuhan Bacak",
    gambar: img("photo-1595964185029-45b32d5a03f0"),
  },
  {
    slug: "batik-tulis-girisuko",
    nama: "Batik Tulis Motif Karst",
    kategori: "UMKM",
    deskripsi:
      "Batik dengan motif terinspirasi bentang alam karst dan tanaman lokal, diproduksi sanggar batik warga.",
    lokasi: "Padukuhan Bulu",
    gambar: img("photo-1583846783214-7229a91b20ed"),
  },
  {
    slug: "padi-gogo-lahan-kering",
    nama: "Padi Gogo Lahan Kering",
    kategori: "Pertanian",
    deskripsi:
      "Varietas adaptif kekeringan yang jadi andalan pangan pokok. Dikembangkan bersama sekolah lapang kelompok tani.",
    lokasi: "Hamparan selatan kalurahan",
    gambar: img("photo-1574943320219-553eb213f72d"),
  },
  {
    slug: "ternak-kambing-pe",
    nama: "Ternak Kambing Peranakan Etawa",
    kategori: "Pertanian",
    deskripsi:
      "Budidaya kambing PE untuk susu dan penggemukan, terintegrasi dengan pengolahan pupuk organik.",
    lokasi: "Padukuhan Karangnongko",
    gambar: img("photo-1524024973431-2ad916746881"),
  },
  {
    slug: "kebun-empon-empon",
    nama: "Kebun Empon-empon",
    kategori: "Pertanian",
    deskripsi:
      "Jahe, kunyit, dan temulawak yang ditanam di pekarangan dan tegalan sebagai bahan baku jamu dan minuman herbal.",
    lokasi: "Tersebar di seluruh padukuhan",
    gambar: img("photo-1615485290382-441e4d049cb5"),
  },
  {
    slug: "jathilan-turonggo",
    nama: "Paguyuban Jathilan Turonggo Mudo",
    kategori: "Budaya",
    deskripsi:
      "Kesenian kuda lumping yang rutin pentas pada rasulan dan hajatan warga, dengan regenerasi penari usia sekolah.",
    lokasi: "Padukuhan Bulu",
    gambar: img("photo-1533174072545-7a4b6ad7a6c3"),
  },
  {
    slug: "gejog-lesung",
    nama: "Karawitan & Gejog Lesung Ibu-ibu",
    kategori: "Budaya",
    deskripsi:
      "Musik tradisional dari lesung penumbuk padi yang dilestarikan kelompok ibu-ibu sebagai atraksi wisata budaya.",
    lokasi: "Padukuhan Wiloso",
    gambar: img("photo-1471478331149-c72f17e33c73"),
  },
];

export const kategoriPotensi = [
  "Semua",
  "Wisata",
  "UMKM",
  "Pertanian",
  "Budaya",
] as const;
