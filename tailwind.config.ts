import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  images: {
    domains: [
      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "s3.amazonaws.com",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        CyberSport: ["CyberSport", "sans-serif"],
        CyberGraph: ["CyberGraph", "sans-serif"],
        Queensides: ["Queensides", "sans-serif"],
        Para: ["Para", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
