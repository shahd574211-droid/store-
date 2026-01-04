import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // ملاحظة: Pexels تستخدم images. وليس www. للصور المباشرة
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com', // احتياطاً في حال كنت تستخدم الروابط الأساسية
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
