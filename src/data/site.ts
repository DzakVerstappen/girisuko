/**
 * Data identitas situs. Semua nilai di sini adalah CONTOH untuk keperluan
 * pengembangan frontend — mohon verifikasi dengan data resmi Kalurahan
 * Girisuko sebelum dipublikasikan.
 */

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const site = {
  name: "Kalurahan Girisuko",
  shortName: "Girisuko",
  tagline: "Guyub, Gotong Royong, dan Lestari di Perbukitan Karst Panggang",
  founded: "15 Agustus 1944",
  desaWisata: true,
  jadestaUrl: "https://jadesta.kemenparekraf.go.id",
  description:
    "Website resmi Kalurahan Girisuko, Kapanewon Panggang, Kabupaten Gunungkidul, " +
    "Daerah Istimewa Yogyakarta. Informasi pemerintahan, layanan publik, potensi " +
    "wisata karst, ekonomi warga, dan transparansi anggaran kalurahan. Girisuko " +
    "terdaftar sebagai Desa Wisata pada Jadesta Kemenparekraf.",
  url: "https://girisuko.example.id",
  locale: "id-ID",
  address: {
    street: "Kompleks Balai Kalurahan Girisuko",
    region: "Kapanewon Panggang, Kabupaten Gunungkidul",
    province: "Daerah Istimewa Yogyakarta",
    postalCode: "55872",
  },
  contact: {
    phone: "(0274) 000-0000",
    whatsapp: "+62 812-0000-0000",
    email: "kalurahangirisuko@example.id",
    jamPelayanan: [
      { hari: "Senin – Kamis", jam: "08.00 – 15.00 WIB" },
      { hari: "Jumat", jam: "08.00 – 11.00 WIB" },
      { hari: "Sabtu – Minggu", jam: "Tutup" },
    ],
  },
  maps: {
    // Perkiraan titik untuk keperluan tampilan — ganti dengan embed resmi.
    embedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=110.32%2C-8.03%2C110.38%2C-7.98&layer=mapnik",
    lat: -8.0,
    lng: 110.35,
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    children: [
      { label: "Sejarah & Visi Misi", href: "/profil#sejarah" },
      { label: "Kondisi Geografis", href: "/profil#geografis" },
      { label: "Data Demografi", href: "/profil#demografi" },
      { label: "Daftar Padukuhan", href: "/profil#padukuhan" },
    ],
  },
  {
    label: "Pemerintahan",
    href: "/pemerintahan",
    children: [
      { label: "Struktur Organisasi", href: "/pemerintahan#struktur" },
      { label: "Pamong Kalurahan", href: "/pemerintahan#pamong" },
      { label: "Badan Permusyawaratan (BPK)", href: "/pemerintahan#bpk" },
      { label: "Lembaga Kemasyarakatan", href: "/pemerintahan#lembaga" },
    ],
  },
  { label: "Berita", href: "/berita" },
  { label: "Layanan", href: "/layanan" },
  { label: "Potensi", href: "/potensi" },
  { label: "APBKal", href: "/apbdes" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export const footerNav = [
  {
    title: "Jelajahi",
    links: [
      { label: "Profil Kalurahan", href: "/profil" },
      { label: "Pemerintahan", href: "/pemerintahan" },
      { label: "Berita & Pengumuman", href: "/berita" },
      { label: "Galeri", href: "/galeri" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "Layanan Administrasi", href: "/layanan" },
      { label: "Potensi Desa", href: "/potensi" },
      { label: "Transparansi APBKal", href: "/apbdes" },
      { label: "Hubungi Kami", href: "/kontak" },
    ],
  },
];
