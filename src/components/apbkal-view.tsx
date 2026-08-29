"use client";

import { ArrowDownRight, ArrowUpRight, Scale } from "lucide-react";
import { useState } from "react";
import { AnggaranBarChart, AnggaranDonut } from "@/components/charts";
import { Card } from "@/components/ui/card";
import {
  apbkal,
  totalBelanja,
  totalPendapatan,
} from "@/data/apbdes";
import { formatRupiah, formatRupiahSingkat, cn } from "@/lib/utils";

const trenData = [...apbkal]
  .sort((a, b) => a.tahun - b.tahun)
  .map((t) => ({
    tahun: String(t.tahun),
    Pendapatan: totalPendapatan(t),
    Belanja: totalBelanja(t),
  }));

export function ApbkalView() {
  const tahunTersedia = apbkal.map((t) => t.tahun);
  const [tahun, setTahun] = useState(tahunTersedia[0]);
  const data = apbkal.find((t) => t.tahun === tahun) ?? apbkal[0];

  const pendapatan = totalPendapatan(data);
  const belanja = totalBelanja(data);
  const surplus = pendapatan - belanja;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-muted-foreground">
          Tahun anggaran:
        </span>
        {tahunTersedia.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTahun(t)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
              t === tahun
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="p-5">
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <ArrowUpRight className="size-5" />
          </span>
          <p className="mt-3 text-sm text-muted-foreground">Total Pendapatan</p>
          <p className="font-display text-2xl font-extrabold">
            {formatRupiahSingkat(pendapatan)}
          </p>
        </Card>
        <Card className="p-5">
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary/15 text-secondary-foreground dark:text-secondary">
            <ArrowDownRight className="size-5" />
          </span>
          <p className="mt-3 text-sm text-muted-foreground">Total Belanja</p>
          <p className="font-display text-2xl font-extrabold">
            {formatRupiahSingkat(belanja)}
          </p>
        </Card>
        <Card className="p-5">
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Scale className="size-5" />
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            {surplus >= 0 ? "Surplus / SiLPA" : "Defisit"}
          </p>
          <p className="font-display text-2xl font-extrabold">
            {formatRupiahSingkat(Math.abs(surplus))}
          </p>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-bold">Tren Pendapatan & Belanja</h3>
          <div className="mt-4">
            <AnggaranBarChart data={trenData} />
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-bold">Komposisi Belanja {tahun}</h3>
          <div className="mt-4">
            <AnggaranDonut data={data.belanja} />
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <RincianTabel judul={`Pendapatan ${tahun}`} rows={data.pendapatan} total={pendapatan} />
        <RincianTabel judul={`Belanja ${tahun}`} rows={data.belanja} total={belanja} />
      </div>
    </div>
  );
}

function RincianTabel({
  judul,
  rows,
  total,
}: {
  judul: string;
  rows: { nama: string; nilai: number }[];
  total: number;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="bg-muted px-4 py-3 text-sm font-bold">{judul}</div>
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.nama}>
              <td className="px-4 py-3">{r.nama}</td>
              <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">
                {formatRupiah(r.nilai)}
              </td>
              <td className="w-24 px-4 py-3 text-right text-xs text-muted-foreground">
                {((r.nilai / total) * 100).toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="border-t-2 border-border bg-muted/60 font-semibold">
          <tr>
            <td className="px-4 py-3">Total</td>
            <td className="px-4 py-3 text-right tabular-nums" colSpan={2}>
              {formatRupiah(total)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
