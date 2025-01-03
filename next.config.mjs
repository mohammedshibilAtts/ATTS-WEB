// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['flowbite.s3.amazonaws.com'],
    unoptimized: true
    // If you have other domains, add them to this array
  },
    reactStrictMode: true,
    experimental: {
      optimizeFonts: true, 
      appDir: true,
      fontLoaders: [
        { loader: "@next/font/google", options: { subsets: ["latin"] } },
      ],
    },
  };
  
  export default nextConfig;
  