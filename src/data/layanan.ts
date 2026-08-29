import type { Layanan } from "@/types";

/** Konten CONTOH — sesuaikan dengan SOP resmi Kalurahan Girisuko. */
export const layanan: Layanan[] = [
  {
    slug: "surat-pengantar-ktp",
    nama: "Surat Pengantar KTP Elektronik",
    ringkasan:
      "Pengantar dari kalurahan untuk perekaman atau pencetakan KTP-el di kapanewon.",
    kategori: "Kependudukan",
    syarat: [
      "Fotokopi Kartu Keluarga",
      "Surat pengantar dari Ketua RT dan RW",
      "Fotokopi akta kelahiran (bagi pemohon pemula)",
    ],
    alur: [
      "Warga meminta pengantar RT/RW",
      "Datang ke loket pelayanan kalurahan",
      "Verifikasi berkas oleh petugas",
      "Penandatanganan dan pengesahan oleh Pamong",
      "Surat pengantar diterbitkan",
    ],
    waktu: "± 15 menit (berkas lengkap)",
    biaya: "Gratis",
  },
  {
    slug: "kartu-keluarga-baru",
    nama: "Pengantar Perubahan Kartu Keluarga",
    ringkasan:
      "Untuk penambahan anggota keluarga, pisah KK, atau perubahan data.",
    kategori: "Kependudukan",
    syarat: [
      "KK lama asli",
      "Surat pengantar RT/RW",
      "Dokumen pendukung (buku nikah, akta, ijazah) sesuai jenis perubahan",
    ],
    alur: [
      "Menyiapkan dokumen pendukung",
      "Pengantar RT/RW",
      "Pengajuan di loket kalurahan",
      "Verifikasi dan input data",
      "Pengesahan Pamong dan penerbitan pengantar",
    ],
    waktu: "± 20 menit",
    biaya: "Gratis",
  },
  {
    slug: "surat-keterangan-domisili",
    nama: "Surat Keterangan Domisili",
    ringkasan:
      "Menerangkan tempat tinggal seseorang atau lembaga di wilayah Girisuko.",
    kategori: "Surat Keterangan",
    syarat: [
      "Fotokopi KTP dan KK",
      "Surat pengantar RT/RW",
      "Untuk lembaga: akta pendirian dan SK pengurus",
    ],
    alur: [
      "Pengantar RT/RW",
      "Mengisi formulir permohonan",
      "Verifikasi data oleh petugas",
      "Pengesahan Pamong",
      "Surat keterangan diterbitkan",
    ],
    waktu: "± 15 menit",
    biaya: "Gratis",
  },
  {
    slug: "surat-keterangan-tidak-mampu",
    nama: "Surat Keterangan Tidak Mampu (SKTM)",
    ringkasan:
      "Untuk keperluan pendidikan, kesehatan, atau bantuan sosial.",
    kategori: "Surat Keterangan",
    syarat: [
      "Fotokopi KTP dan KK",
      "Surat pengantar RT/RW",
      "Keterangan peruntukan (nama sekolah / rumah sakit / instansi)",
    ],
    alur: [
      "Pengantar RT/RW yang mengetahui kondisi ekonomi pemohon",
      "Pengajuan di loket kalurahan",
      "Pengecekan data kesejahteraan",
      "Pengesahan Pamong",
      "Penerbitan surat",
    ],
    waktu: "± 20 menit",
    biaya: "Gratis",
  },
  {
    slug: "surat-keterangan-usaha",
    nama: "Surat Keterangan Usaha (SKU)",
    ringkasan:
      "Bukti keberadaan usaha mikro untuk pengajuan kredit atau perizinan.",
    kategori: "Usaha",
    syarat: [
      "Fotokopi KTP dan KK pemilik usaha",
      "Surat pengantar RT/RW",
      "Foto lokasi usaha",
    ],
    alur: [
      "Pengantar RT/RW",
      "Mengisi formulir data usaha",
      "Peninjauan lapangan bila diperlukan",
      "Pengesahan Pamong",
      "Penerbitan SKU",
    ],
    waktu: "± 1 hari kerja",
    biaya: "Gratis",
  },
  {
    slug: "surat-pengantar-nikah",
    nama: "Surat Pengantar Nikah (N1–N4)",
    ringkasan:
      "Berkas pengantar untuk pendaftaran pernikahan di KUA Kapanewon Panggang.",
    kategori: "Surat Keterangan",
    syarat: [
      "Fotokopi KTP, KK, dan akta kelahiran calon pengantin",
      "Surat pengantar RT/RW",
      "Pas foto latar biru ukuran 2x3 dan 4x6",
      "Akta cerai / surat kematian pasangan (bila pernah menikah)",
    ],
    alur: [
      "Pengantar RT/RW",
      "Pengisian formulir N1–N4 di kalurahan",
      "Verifikasi berkas",
      "Pengesahan Pamong",
      "Berkas dibawa ke KUA",
    ],
    waktu: "± 30 menit",
    biaya: "Gratis (biaya pencatatan di KUA menyesuaikan ketentuan)",
  },
  {
    slug: "surat-keterangan-kelahiran",
    nama: "Surat Keterangan Kelahiran",
    ringkasan: "Dasar pengurusan akta kelahiran di Dinas Dukcapil.",
    kategori: "Kependudukan",
    syarat: [
      "Surat keterangan lahir dari bidan / fasilitas kesehatan",
      "Fotokopi KTP kedua orang tua dan KK",
      "Fotokopi buku nikah orang tua",
    ],
    alur: [
      "Menyiapkan surat keterangan lahir",
      "Pengajuan di loket kalurahan",
      "Verifikasi data",
      "Pengesahan Pamong",
      "Penerbitan surat keterangan",
    ],
    waktu: "± 15 menit",
    biaya: "Gratis",
  },
  {
    slug: "legalisasi-proposal-lembaga",
    nama: "Rekomendasi & Legalisasi Proposal Lembaga",
    ringkasan:
      "Untuk kegiatan RT/RW, karang taruna, kelompok tani, dan lembaga kemasyarakatan.",
    kategori: "Usaha",
    syarat: [
      "Proposal kegiatan yang sudah ditandatangani pengurus",
      "Susunan panitia / kepengurusan",
      "Surat permohonan rekomendasi",
    ],
    alur: [
      "Pengajuan proposal ke kalurahan",
      "Telaah oleh seksi terkait",
      "Pengesahan Pamong / Lurah",
      "Penerbitan surat rekomendasi",
    ],
    waktu: "± 1–2 hari kerja",
    biaya: "Gratis",
  },
];

export function getLayanan(slug: string) {
  return layanan.find((l) => l.slug === slug);
}
