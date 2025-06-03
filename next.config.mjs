/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  output: "export",
  
  basePath: "/app-red-lab2",
  assetPrefix: "/app-red-lab2/", 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
