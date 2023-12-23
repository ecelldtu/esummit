"use client"
import { useLayoutEffect, useState, useEffect } from "react";
import Encryption from "../components/main/Encryption";
import Hero from "../components/main/Hero";
import Image from "next/image";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Feedback from "@/components/main/Feedback";
import About from "../components/main/About";
import Map from "../components/main/Map";
import Contact from "../components/main/Contact";
import Events from "../components/main/Events";
import Sponsors from "../components/main/Sponsors";
import Speakers from "../components/main/Speakers";
import Itenaries from "../components/main/Itenaries";
import Loaders from "./Preloader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loaders />

      ) : (
        <div className="h-full w-screen overflow-hidden">
          <div className="flex flex-col">
            <Navbar />
            <Hero />
            <Sponsors />
            <About />
            <Feedback />
            <Itenaries />
            <Events />
            <Speakers />
            <Contact />
            <Map />
            <Footer />
          </div>
        </div>
      )}
    </main>
  );
}
