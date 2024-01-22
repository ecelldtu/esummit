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
import Ex from "../components/main/Ex";
import Events from "../components/main/Events";
import Content from "../components/main/Content";
import Sponsors from "../components/main/Sponsors";
import Speakers from "../components/main/Speakers";
import Itenaries from "../components/main/Itenaries";
import New from "../components/main/New";
import Loaders from "./Preloader"
import Script from 'next/script'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loaders />

      ) : (
        <div className="h-full w-screen overflow-hidden">
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-F37Z0H3KL6" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-F37Z0H3KL6');
        `}
          </Script>
          <div className="flex flex-col">
            <Navbar />
            <Hero />
            <New />
            <Sponsors />
            <About />
            <Feedback />
            <Events />
            <Itenaries />
            <Speakers />
            <Content />
            <Ex />
            <Contact />
            <Map />
            <Footer />
          </div>
        </div>
      )}
    </main>
  );
}
