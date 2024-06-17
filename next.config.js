/**
 * @type {import('next').NextConfig}
 */

const isProcess = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProcess ? "/deidal-nextjs" : "",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
