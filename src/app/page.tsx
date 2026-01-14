"use client";
import Hero from "./Hero/Page";
import SponsorsGallery from "../components/gallery/SponsorsGallery";
import YouTubeShortPip from "../components/media/YouTubeShortPip";
import About from "./About/page";
import Stats from "./Stats/page";
import Why from "./Why/page";
import Speakers from "./Speakers";
import Redirect from "../components/Redirect";
import Comp from "./Event/page";
import Event from "./Event/Events";
import Sponsors from "./Sponsors/Sponsors";
import AnoAI from "../components/ui/animated-shader-background";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Shader background mounted fixed behind content */}
        <AnoAI />

        {/* Site content (keeps higher stacking context) */}
        <div className="relative z-10">
          <Hero />
          <Sponsors />
          <SponsorsGallery />
          <YouTubeShortPip videoId="mF89SCQQBy4" title="E-Summit 2026" />
          <About />
          <Stats />
          <Why />
          <Event />
          <Comp />
          <Speakers />
        </div>
      </div>
    </>
  );
}
