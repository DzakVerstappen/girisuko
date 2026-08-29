import type { ItemGaleri } from "@/types";

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

/** Galeri CONTOH untuk pengembangan frontend. */
export const galeri: ItemGaleri[] = [
  { id: "g1", judul: "Kirab budaya rasulan", kategori: "Budaya", gambar: img("photo-1533174072545-7a4b6ad7a6c3") },
  { id: "g2", judul: "Panen raya kelompok tani", kategori: "Kegiatan", gambar: img("photo-1500937386664-56d1dfef3854") },
  { id: "g3", judul: "Bentang perbukitan Girisuko", kategori: "Alam", gambar: img("photo-1464822759023-fed622ff2c3b") },
  { id: "g4", judul: "Pengecoran jalan usaha tani", kategori: "Pembangunan", gambar: img("photo-1503387762-592deb58ef4e") },
  { id: "g5", judul: "Senam bersama ibu-ibu PKK", kategori: "Kegiatan", gambar: img("photo-1518611012118-696072aa579a") },
  { id: "g6", judul: "Sumber mata air sendang", kategori: "Alam", gambar: img("photo-1502537362081-b571a8d4e5a3") },
  { id: "g7", judul: "Pentas jathilan Turonggo Mudo", kategori: "Budaya", gambar: img("photo-1516307365426-bea591f05011") },
  { id: "g8", judul: "Pembangunan talud sungai", kategori: "Pembangunan", gambar: img("photo-1469571486292-0ba58a3f068b") },
  { id: "g9", judul: "Posyandu terintegrasi", kategori: "Kegiatan", gambar: img("photo-1576091160550-2173dba999ef") },
  { id: "g10", judul: "Hamparan ladang saat kabut pagi", kategori: "Alam", gambar: img("photo-1470071459604-3b5ec3a7fe05") },
  { id: "g11", judul: "Kerja bakti pembangunan pos ronda", kategori: "Pembangunan", gambar: img("photo-1541888946425-d81bb19240f5") },
  { id: "g12", judul: "Latihan karawitan sanggar warga", kategori: "Budaya", gambar: img("photo-1519892300165-cb5542fb47c7") },
];

export const kategoriGaleri = ["Semua", "Kegiatan", "Pembangunan", "Alam", "Budaya"] as const;
