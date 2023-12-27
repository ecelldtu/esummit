/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "img.etimg.com",
            "assets.vogue.com",
            "m.media-amazon.com",
            "upload.wikimedia.org",
            "i.postimg.cc",
            "pbs.twimg.com",
            "images.unsplash.com"
        ],
    },
};

module.exports = nextConfig;