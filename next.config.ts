import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "https://wyznozy.github.io/Portfolio/", // your exact repo name on GitHub
  images: { unoptimized: true },
};

export default nextConfig;
