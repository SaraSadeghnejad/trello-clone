/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.splash.com" },
      { protocol: "https", hostname: "img.clerk.com" }
    ]
  }
};

export default nextConfig;
