import type { MetadataRoute } from "next";
import { berita } from "@/data/berita";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/profil",
    "/pemerintahan",
    "/berita",
    "/potensi",
    "/kontak",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const artikel = berita.map((b) => ({
    url: `${site.url}/berita/${b.slug}`,
    lastModified: new Date(b.tanggal),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...routes, ...artikel];
}
