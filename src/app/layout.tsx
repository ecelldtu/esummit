import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/header/Header"
import Footer from "../components/Footer"
import Contact from "./Contact/page"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Summit DTU 2025",
  description: "North India's Biggest Entrepreneurship Summit 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
