/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // Disable Next.js image optimization in dev/local to avoid zero-length optimizer responses
        // (When unoptimized is true, Next will use the original image URLs instead of /_next/image)
        unoptimized: true,
        domains: [
            "img.etimg.com",
            "assets.vogue.com",
            "m.media-amazon.com",
            "upload.wikimedia.org",
            "images.unsplash.com",
            "assets.aceternity.com",
            "unsplash.com"
        ],
    },
};

export default nextConfig;
