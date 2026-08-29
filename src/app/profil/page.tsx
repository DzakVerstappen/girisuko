import type { Metadata } from "next";
import {
  Compass,
  Mountain,
  Sprout,
  Target,
  TreePine,
  Users,
} from "lucide-react";
import {
  KategoriPieChart,
  PendudukAreaChart,
  UmurBarChart,
} from "@/components/charts";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { padukuhan } from "@/data/padukuhan";
import {
  kelompokUmur,
  mataPencaharian,
  pendidikan,
  pendudukPerTahun,
  ringkasanStatistik as s,
} from "@/data/statistik";

export const metadata: Metadata = {
  title: "Profil Kalurahan",
  description:
    "Sejarah, visi misi, kondisi geografis, dan data demografi Kalurahan Girisuko, Panggang, Gunungkidul.",
};

const visi =
  "Terwujudnya Kalurahan Girisuko yang Guyub, Mandiri, dan Lestari Berbasis Pertanian, Budaya, dan Pariwisata.";

const misi = [
  "Meningkatkan kualitas pelayanan publik yang cepat, transparan, dan akuntabel.",
  "Menguatkan ketahanan pangan dan ekonomi warga melalui pertanian lahan kering dan UMKM.",
  "Melestarikan sumber daya air, lingkungan, dan kearifan budaya lokal.",
  "Mengembangkan pariwisata berbasis masyarakat yang berkelanjutan.",
  "Memperkuat gotong royong dan kapasitas kelembagaan masyarakat.",
];

const geografis = [
  { label: "Luas wilayah", value: `± ${s.luasWilayahKm2} km²`, icon: Mountain },
  { label: "Jumlah padukuhan", value: `${s.jumlahPadukuhan} padukuhan`, icon: Compass },
  { label: "Topografi", value: "Perbukitan karst & lahan kering", icon: TreePine },
  { label: "Ketinggian", value: "± 150–350 mdpl", icon: Sprout },
];

const batas = [
  { arah: "Utara", wilayah: "Kalurahan Giriharjo" },
  { arah: "Timur", wilayah: "Kalurahan Girikarto" },
  { arah: "Selatan", wilayah: "Samudra Hindia" },
  { arah: "Barat", wilayah: "Kalurahan Giripurwo" },
];

export default function ProfilPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Profil Kalurahan Girisuko"
        description="Mengenal lebih dekat sejarah, wilayah, dan masyarakat Girisuko di Kapanewon Panggang, Kabupaten Gunungkidul."
        breadcrumbs={[{ label: "Profil" }]}
      />

      <Container className="py-16 sm:py-20">
        {/* Sejarah */}
        <section id="sejarah" className="scroll-mt-24">
          <SectionHeading eyebrow="Sejarah" title="Asal-usul & Perkembangan" />
          <div className="mt-6 grid gap-6 text-muted-foreground lg:grid-cols-2">
            <p>
              Nama <strong className="text-foreground">Girisuko</strong> berasal
              dari kata <em>giri</em> yang berarti gunung atau bukit, dan{" "}
              <em>suko</em> (suka) yang bermakna kegembiraan — harapan akan
              kehidupan yang bahagia di tanah perbukitan. Wilayah ini tumbuh dari
              beberapa padukuhan permukiman lama yang tersebar mengikuti sumber
              air dan lahan garapan.
            </p>
            <p>
              Sejak diberlakukannya Undang-Undang Keistimewaan Daerah Istimewa
              Yogyakarta, sebutan desa berubah menjadi{" "}
              <strong className="text-foreground">kalurahan</strong> dan kepala
              desa menjadi <strong className="text-foreground">lurah</strong>,
              dengan perangkat yang disebut pamong kalurahan. Struktur ini
              menegaskan kembali akar budaya pemerintahan tradisional Yogyakarta.
              <span className="mt-3 block text-sm italic">
                Catatan: uraian sejarah di atas adalah contoh untuk pengembangan
                situs dan perlu diverifikasi dengan dokumen resmi kalurahan.
              </span>
            </p>
          </div>
        </section>

        {/* Visi Misi */}
        <section id="visi-misi" className="mt-16 scroll-mt-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-primary p-8 text-primary-foreground">
              <Target className="size-9" />
              <h3 className="mt-4 text-xl font-bold">Visi</h3>
              <p className="mt-3 text-lg leading-relaxed text-primary-foreground/90">
                {visi}
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold">Misi</h3>
              <ol className="mt-4 flex flex-col gap-3">
                {misi.map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </section>

        {/* Geografis */}
        <section id="geografis" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Kondisi Geografis"
            title="Wilayah & Batas Administratif"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {geografis.map((g) => (
              <Card key={g.label} className="p-5">
                <g.icon className="size-6 text-primary" />
                <p className="mt-3 font-bold">{g.value}</p>
                <p className="text-sm text-muted-foreground">{g.label}</p>
              </Card>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {batas.map((b) => (
              <Card key={b.arah} className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Sebelah {b.arah}
                </p>
                <p className="mt-1 font-medium">{b.wilayah}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Demografi */}
        <section id="demografi" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Data Demografi"
            title="Kependudukan Girisuko"
            description="Seluruh angka pada bagian ini bersifat ilustratif untuk pengembangan frontend."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total penduduk", value: s.totalPenduduk },
              { label: "Laki-laki", value: s.lakiLaki },
              { label: "Perempuan", value: s.perempuan },
              { label: "Kepala keluarga", value: s.kepalaKeluarga },
            ].map((x) => (
              <Card key={x.label} className="p-5">
                <p className="font-display text-2xl font-extrabold">
                  {x.value.toLocaleString("id-ID")}
                </p>
                <p className="text-sm text-muted-foreground">{x.label}</p>
              </Card>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <Card className="p-6">
                <h3 className="flex items-center gap-2 font-bold">
                  <Users className="size-4 text-primary" />
                  Pertumbuhan penduduk
                </h3>
                <div className="mt-4">
                  <PendudukAreaChart data={pendudukPerTahun} />
                </div>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Card className="p-6">
                <h3 className="font-bold">Piramida kelompok umur</h3>
                <div className="mt-4">
                  <UmurBarChart data={kelompokUmur} />
                </div>
              </Card>
            </ScrollReveal>
            <ScrollReveal>
              <Card className="p-6">
                <h3 className="font-bold">Mata pencaharian</h3>
                <div className="mt-4">
                  <KategoriPieChart
                    data={mataPencaharian.map((m) => ({
                      nama: m.nama,
                      jumlah: m.jumlah,
                    }))}
                    unit="orang"
                  />
                </div>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Card className="p-6">
                <h3 className="font-bold">Tingkat pendidikan</h3>
                <div className="mt-4">
                  <KategoriPieChart
                    data={pendidikan.map((p) => ({
                      nama: p.jenjang,
                      jumlah: p.jumlah,
                    }))}
                    unit="orang"
                  />
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Padukuhan */}
        <section id="padukuhan" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Wilayah"
            title={`Daftar ${padukuhan.length} Padukuhan`}
            description="Nama padukuhan dan angka di bawah ini merupakan contoh dan perlu diverifikasi."
          />
          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Padukuhan</th>
                  <th className="px-4 py-3 font-semibold">Dukuh</th>
                  <th className="px-4 py-3 font-semibold text-right">KK</th>
                  <th className="px-4 py-3 font-semibold text-right">Jiwa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {padukuhan.map((p) => (
                  <tr key={p.nama} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium">{p.nama}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.dukuh}</td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {p.kk.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {p.jiwa.toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-border bg-muted/60 font-semibold">
                <tr>
                  <td className="px-4 py-3" colSpan={2}>
                    Total
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {padukuhan
                      .reduce((a, b) => a + b.kk, 0)
                      .toLocaleString("id-ID")}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {padukuhan
                      .reduce((a, b) => a + b.jiwa, 0)
                      .toLocaleString("id-ID")}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </Container>
    </>
  );
}
