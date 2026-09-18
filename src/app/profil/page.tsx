import type { Metadata } from "next";
import {
  Building2,
  CalendarDays,
  CloudRain,
  Compass,
  GraduationCap,
  MapPinned,
  Mountain,
  Sparkles,
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
import { site } from "@/data/site";
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
    "Sejarah, visi misi, kondisi geografis, data demografi, dan fasilitas Kalurahan Girisuko, Kapanewon Panggang, Gunungkidul.",
};

const visi =
  "Terwujudnya Kalurahan Girisuko yang Guyub, Mandiri, dan Lestari Berbasis Pertanian, Budaya, dan Pariwisata.";

const misi = [
  "Meningkatkan kualitas pelayanan publik yang cepat, transparan, dan akuntabel.",
  "Menguatkan ketahanan pangan dan ekonomi warga melalui pertanian jagung/palawija, peternakan, dan UMKM.",
  "Melestarikan sumber daya air, lingkungan karst, dan kearifan budaya lokal.",
  "Mengembangkan pariwisata berbasis masyarakat yang berkelanjutan sebagai Desa Wisata.",
  "Memperkuat gotong royong dan kelembagaan warga, antara lain melalui tradisi Tilik Dusun.",
];

const fakta = [
  { label: "Hari jadi", value: site.founded, icon: CalendarDays },
  { label: "Jumlah penduduk", value: "± 5.500 jiwa", icon: Users },
  {
    label: "Padukuhan",
    value: `${s.jumlahPadukuhan} padukuhan`,
    icon: Compass,
  },
  {
    label: "Status",
    value: "Desa Wisata (Jadesta Kemenparekraf)",
    icon: Sparkles,
  },
];

const geografis = [
  { label: "Luas wilayah", value: `± ${s.luasWilayahKm2} km²`, icon: Mountain },
  {
    label: "Jumlah padukuhan",
    value: `${s.jumlahPadukuhan} padukuhan`,
    icon: Compass,
  },
  {
    label: "Topografi",
    value: "Perbukitan karst selatan Gunungkidul",
    icon: TreePine,
  },
  {
    label: "Curah hujan rata-rata",
    value: `± ${s.curahHujanMmTahun.toLocaleString("id-ID")} mm/tahun`,
    icon: CloudRain,
  },
];

const fasilitas = [
  { nama: "Balai Kalurahan", jumlah: "1 unit" },
  { nama: "Balai Padukuhan", jumlah: `${s.jumlahPadukuhan} unit` },
  { nama: "Puskesmas / layanan kesehatan", jumlah: "Tersedia" },
  { nama: "Taman Kanak-kanak (TK)", jumlah: "7 unit" },
  { nama: "PAUD", jumlah: "6 unit" },
  { nama: "Sekolah Dasar (SD)", jumlah: "6 unit" },
  { nama: "Sekolah Menengah Pertama (SMP)", jumlah: "2 unit" },
];

export default function ProfilPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Profil Kalurahan Girisuko"
        description="Mengenal lebih dekat sejarah, wilayah, dan masyarakat Girisuko di Kapanewon Panggang, Kabupaten Gunungkidul, D.I. Yogyakarta."
        breadcrumbs={[{ label: "Profil" }]}
      >
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fakta.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-border bg-background/60 p-4"
            >
              <f.icon className="size-5 text-primary" />
              <dt className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                {f.label}
              </dt>
              <dd className="font-display font-bold leading-tight">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Container className="py-16 sm:py-20">
        {/* Sejarah */}
        <section id="sejarah" className="scroll-mt-24">
          <SectionHeading eyebrow="Sejarah" title="Asal-usul & Perkembangan" />
          <div className="mt-6 grid gap-6 text-muted-foreground lg:grid-cols-2">
            <p>
              Nama <strong className="text-foreground">Girisuko</strong> berasal
              dari kata <em>giri</em> yang berarti gunung atau bukit, dan{" "}
              <em>suko</em> (suka) yang bermakna kegembiraan — harapan akan
              kehidupan yang bahagia di tanah perbukitan. Kalurahan ini
              diperingati berdiri pada{" "}
              <strong className="text-foreground">{site.founded}</strong> dan
              berkembang dari padukuhan-padukuhan permukiman lama yang tersebar
              mengikuti sumber air dan lahan garapan di kawasan karst
              Gunungkidul selatan.
            </p>
            <p>
              Sejak berlakunya Undang-Undang Keistimewaan Daerah Istimewa
              Yogyakarta, sebutan desa menjadi{" "}
              <strong className="text-foreground">kalurahan</strong> dan kepala
              desa menjadi <strong className="text-foreground">lurah</strong>{" "}
              dengan perangkat yang disebut pamong kalurahan. Kini Girisuko juga
              tercatat sebagai{" "}
              <strong className="text-foreground">Desa Wisata</strong> pada
              Jadesta Kemenparekraf, dengan andalan bentang alam karst dan
              kekuatan gotong royong warga yang antara lain dirawat lewat
              tradisi tahunan <em>Tilik Dusun</em>.
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
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </Card>
          </div>
          <p className="mt-4 text-xs italic text-muted-foreground">
            Rumusan visi dan misi di atas bersifat ringkas untuk tampilan situs;
            rujukan resmi mengikuti dokumen RPJM Kalurahan.
          </p>
        </section>

        {/* Geografis */}
        <section id="geografis" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Kondisi Geografis"
            title="Wilayah & Lingkungan"
            description="Girisuko berada di kawasan perbukitan karst Gunungkidul selatan dengan kemiringan lahan yang bervariasi."
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
          <Card className="mt-4 flex items-start gap-3 p-5">
            <MapPinned className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Batas wilayah.</strong>{" "}
              Kalurahan Girisuko berbatasan dengan kalurahan lain di Kapanewon
              Panggang dan sekitarnya. Rincian batas administratif per arah mata
              angin menyesuaikan data resmi kalurahan.
            </p>
          </Card>
        </section>

        {/* Fasilitas */}
        <section id="fasilitas" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Sarana & Prasarana"
            title="Fasilitas Umum & Pendidikan"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitas.map((f) => (
              <Card key={f.nama} className="flex items-center gap-3 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  {f.nama.includes("Balai") ? (
                    <Building2 className="size-5" />
                  ) : (
                    <GraduationCap className="size-5" />
                  )}
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-tight">
                    {f.nama}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {f.jumlah}
                  </span>
                </span>
              </Card>
            ))}
          </div>
        </section>

        {/* Demografi */}
        <section id="demografi" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Data Demografi"
            title="Kependudukan Girisuko"
            description="Nama padukuhan sudah sesuai. Angka KK, jiwa, laki-laki, dan perempuan merupakan hasil data dari SID Girisuko 6.561 jiwa. "
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
            title={`${padukuhan.length} Padukuhan di Girisuko`}
            description="Nama padukuhan sudah sesuai. Angka KK, jiwa, laki-laki, dan perempuan merupakan hasil data dari SID Girisuko 6.561 jiwa. "
          />
          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Padukuhan</th>
                  <th className="px-4 py-3 font-semibold text-right">KK</th>
                  <th className="px-4 py-3 font-semibold text-right">
                    Laki-laki
                  </th>
                  <th className="px-4 py-3 font-semibold text-right">
                    Perempuan
                  </th>
                  <th className="px-4 py-3 font-semibold text-right">Jiwa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {padukuhan.map((p) => (
                  <tr key={p.nama} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium">{p.nama}</td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {p.kk.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {p.lakiLaki.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {p.perempuan.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {p.jiwa.toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-border bg-muted/60 font-semibold">
                <tr>
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {padukuhan
                      .reduce((a, b) => a + b.kk, 0)
                      .toLocaleString("id-ID")}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {padukuhan
                      .reduce((a, b) => a + b.lakiLaki, 0)
                      .toLocaleString("id-ID")}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {padukuhan
                      .reduce((a, b) => a + b.perempuan, 0)
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
