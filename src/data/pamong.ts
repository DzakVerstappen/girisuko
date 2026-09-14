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

export const kelompokPamong = ["Pimpinan", "Pelaksana Kewilayahan"] as const;
