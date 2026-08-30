# Website Kalurahan Girisuko — Frontend

Website profil dan layanan **Kalurahan Girisuko**, Kapanewon Panggang, Kabupaten
Gunungkidul, D.I. Yogyakarta. Tahap ini **fokus frontend saja** — konten dikelola
lewat data di folder [`src/data`](src/data) dan belum terhubung ke backend/CMS.

> ℹ️ **Yang sudah faktual:** identitas kalurahan (hari jadi 15 Agustus 1944,
> ± 5.500 jiwa, 9 padukuhan: Sumber, Turunan, Sanglor 1 & 2, Pacar 1 & 2,
> Temuireng 1 & 2, Gebang), kondisi geografis karst & curah hujan ± 1.382
> mm/tahun, status Desa Wisata (Jadesta Kemenparekraf), destinasi (Watu Payung,
> Bukit Roso Wulan, Stone Park, Telogo Moto Indro, Kopi Panggang), UMKM (peyek &
> tas Temuireng, KWT "Suko Dadi"), pertanian jagung/palawija, tradisi Tilik Dusun,
> dan daftar fasilitas pendidikan.
>
> ⚠️ **Masih placeholder** (ganti sebelum publikasi): nama & foto pamong, foto
> semua halaman (stok Unsplash), nomor telepon/email, rincian angka per kelompok
> (umur, pendidikan, pekerjaan), seluruh angka APBKal, penempatan padukuhan tiap
> potensi, dan isi artikel berita.

## Teknologi

| Area        | Pustaka                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 16 (App Router) + React 19 + TypeScript     |
| Styling     | Tailwind CSS v4 (token warna via CSS variables)     |
| Komponen    | Primitif buatan sendiri + Radix (Dialog, Accordion) |
| Ikon        | lucide-react                                        |
| Animasi     | motion (framer-motion) — hormati `prefers-reduced-motion` |
| Grafik      | recharts                                            |
| Form        | react-hook-form + zod                               |
| Tema        | next-themes (mode terang/gelap)                     |

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
```

Perintah lain:

```bash
npm run build      # build produksi (semua halaman ter-prerender statis)
npm run start      # menjalankan hasil build
npm run lint       # ESLint
```

> Catatan: jika `node`/`npm` tidak dikenali di terminal, tambahkan folder
> instalasi Node.js (mis. `C:\Program Files\nodejs`) ke PATH.

## Struktur

```
src/
├─ app/                     # Rute (App Router)
│  ├─ layout.tsx            # Root layout, font, metadata, JSON-LD, header/footer
│  ├─ page.tsx              # Beranda (komposisi section di components/home)
│  ├─ profil/               # Sejarah, visi misi, geografis, demografi, padukuhan
│  ├─ pemerintahan/         # Struktur organisasi, pamong, BPK, lembaga
│  ├─ berita/               # Daftar berita + filter/pencarian
│  │  └─ [slug]/            # Detail artikel (generateStaticParams + metadata)
│  ├─ layanan/              # Layanan administrasi (accordion syarat & alur)
│  ├─ potensi/              # Wisata, UMKM, pertanian, budaya + filter
│  ├─ apbdes/               # Transparansi APBKal (grafik + tabel per tahun)
│  ├─ galeri/               # Galeri masonry + lightbox
│  ├─ kontak/               # Info kontak, jam layanan, peta, form
│  ├─ loading.tsx, not-found.tsx, sitemap.ts, robots.ts
│  └─ globals.css           # Token warna, font, keyframes, utilitas
├─ components/
│  ├─ ui/                   # Primitif: button, card, badge, accordion, field, ...
│  ├─ home/                 # Section khusus beranda
│  ├─ site-header.tsx, site-footer.tsx, brand.tsx
│  ├─ charts.tsx            # Wrapper recharts (client)
│  └─ ...                   # news-card, official-card, gallery, contact-form, dst.
├─ data/                    # SEMUA konten contoh (ganti di sini)
└─ types/                   # Tipe TypeScript bersama
```

## Mengganti konten

| Ingin mengubah…              | Edit berkas                          |
| ---------------------------- | ----------------------------------- |
| Nama, alamat, kontak, menu   | `src/data/site.ts`                  |
| Berita / pengumuman          | `src/data/berita.ts`               |
| Layanan (syarat, alur)       | `src/data/layanan.ts`              |
| Pamong & lembaga             | `src/data/pamong.ts`               |
| Potensi desa                 | `src/data/potensi.ts`             |
| APBKal                       | `src/data/apbdes.ts`               |
| Statistik & grafik           | `src/data/statistik.ts`           |
| Galeri                       | `src/data/galeri.ts`              |
| Padukuhan                    | `src/data/padukuhan.ts`           |
| Agenda kegiatan              | `src/data/agenda.ts`              |

## Warna & tema

Semua warna didefinisikan sebagai CSS variable di
[`src/app/globals.css`](src/app/globals.css) pada blok `:root` (mode terang) dan
`.dark` (mode gelap). Ubah nilai heksadesimalnya untuk mengganti identitas visual
— tidak perlu menyentuh komponen. Warna utama saat ini: hijau `#1f7a4d` dengan
aksen emas `#c1902e`.

## Gambar

Gambar contoh diambil dari Unsplash dan diizinkan lewat `images.remotePatterns`
di [`next.config.ts`](next.config.ts). Untuk konten final, simpan aset di
`public/images/` lalu ganti URL pada berkas `src/data/*` menjadi path lokal
(mis. `/images/berita/panen.jpg`).

## Yang belum dikerjakan (menunggu backend)

- Pengiriman form kontak (kini hanya validasi sisi klien + notifikasi demo).
- Tombol unduh formulir layanan dan tombol berbagi artikel.
- Pencarian & data dinamis dari CMS.
- Embed peta resmi (kini memakai OpenStreetMap perkiraan).
