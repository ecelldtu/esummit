"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Zoom from "../components/ZoomParallax";
import About from "./About/page";
import Video from "./Stats/Video";
import Stats from "./Stats/page";
import Why from "./Why/page";
import Speakers from "./Speakers";
import Redirect from "../components/Redirect";
import Comp from "./Event/page";
import Event from "./Event/Events"
import Sponsors from "./Sponsors/Sponsors";
import VideoBackground from "../components/Video";
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-F37Z0H3KL6" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-F37Z0H3KL6');
        `}
      </Script>
      {/* <VideoBackground />   */}
      <Hero />
      <Sponsors />
      <Zoom />
      <About />
      {/* <Video /> */}
      <Stats />
      <Why />
      <Event />
      <Comp />
      <Speakers />
    </>
  );
}
