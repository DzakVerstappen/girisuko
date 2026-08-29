import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Gambar contoh diambil dari Unsplash. Ganti dengan aset lokal di /public
    // saat konten final tersedia.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
