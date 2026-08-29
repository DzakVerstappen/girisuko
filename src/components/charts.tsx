"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatRupiahSingkat } from "@/lib/utils";

const SERIES = [
  "var(--primary)",
  "var(--secondary)",
  "#4f9d76",
  "#d8a657",
  "#7bb59a",
  "#b58a3c",
];

const axisTick = { fill: "var(--muted-foreground)", fontSize: 12 };

function TooltipBox({
  active,
  payload,
  label,
  formatter,
}: {
  active?: boolean;
  payload?: { name?: string; value?: number; color?: string }[];
  label?: string | number;
  formatter?: (v: number) => string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-lg">
      {label !== undefined ? (
        <p className="mb-1 font-semibold text-foreground">{label}</p>
      ) : null}
      {payload.map((p, i) => (
        <p key={i} className="flex items-center gap-2 text-muted-foreground">
          <span
            className="inline-block size-2 rounded-full"
            style={{ background: p.color }}
          />
          {p.name}:{" "}
          <span className="font-semibold text-foreground">
            {formatter ? formatter(Number(p.value)) : p.value?.toLocaleString("id-ID")}
          </span>
        </p>
      ))}
    </div>
  );
}

export function PendudukAreaChart({
  data,
}: {
  data: { tahun: string; jiwa: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ left: -8, right: 8, top: 8 }}>
        <defs>
          <linearGradient id="fillJiwa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.35} />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="tahun" tick={axisTick} tickLine={false} axisLine={false} />
        <YAxis
          tick={axisTick}
          tickLine={false}
          axisLine={false}
          domain={["dataMin - 100", "dataMax + 60"]}
          width={54}
        />
        <Tooltip content={<TooltipBox />} />
        <Area
          type="monotone"
          dataKey="jiwa"
          name="Jumlah jiwa"
          stroke="var(--primary)"
          strokeWidth={2.5}
          fill="url(#fillJiwa)"
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function UmurBarChart({
  data,
}: {
  data: { kelompok: string; lakiLaki: number; perempuan: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ left: -8, right: 8, top: 8 }} barGap={2}>
        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="kelompok" tick={axisTick} tickLine={false} axisLine={false} />
        <YAxis tick={axisTick} tickLine={false} axisLine={false} width={44} />
        <Tooltip content={<TooltipBox />} cursor={{ fill: "var(--muted)" }} />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
        <Bar dataKey="lakiLaki" name="Laki-laki" fill="var(--primary)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="perempuan" name="Perempuan" fill="var(--secondary)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function KategoriPieChart({
  data,
  unit = "jiwa",
}: {
  data: { nama: string; jumlah: number }[];
  unit?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="jumlah"
          nameKey="nama"
          innerRadius={58}
          outerRadius={100}
          paddingAngle={2}
          stroke="var(--card)"
          strokeWidth={2}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={SERIES[i % SERIES.length]} />
          ))}
        </Pie>
        <Tooltip
          content={<TooltipBox formatter={(v) => `${v.toLocaleString("id-ID")} ${unit}`} />}
        />
        <Legend
          wrapperStyle={{ fontSize: 12 }}
          layout="vertical"
          align="right"
          verticalAlign="middle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function AnggaranBarChart({
  data,
}: {
  data: { tahun: string; Pendapatan: number; Belanja: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ left: 8, right: 8, top: 8 }} barGap={6}>
        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="tahun" tick={axisTick} tickLine={false} axisLine={false} />
        <YAxis
          tick={axisTick}
          tickLine={false}
          axisLine={false}
          width={72}
          tickFormatter={(v) => formatRupiahSingkat(Number(v)).replace("Rp ", "")}
        />
        <Tooltip
          content={<TooltipBox formatter={formatRupiahSingkat} />}
          cursor={{ fill: "var(--muted)" }}
        />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
        <Bar dataKey="Pendapatan" fill="var(--primary)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Belanja" fill="var(--secondary)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AnggaranDonut({
  data,
}: {
  data: { nama: string; nilai: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          dataKey="nilai"
          nameKey="nama"
          innerRadius={60}
          outerRadius={105}
          paddingAngle={2}
          stroke="var(--card)"
          strokeWidth={2}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={SERIES[i % SERIES.length]} />
          ))}
        </Pie>
        <Tooltip content={<TooltipBox formatter={formatRupiahSingkat} />} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
