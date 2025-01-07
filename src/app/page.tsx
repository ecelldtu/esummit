"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero/Page";
import Zoom from "../components/ZoomParallax";
import About from "./About/page";
import Stats from "./Stats/page";
import Why from "./Why/page";
import Speakers from "./Speakers";
import Redirect from "../components/Redirect";
import Comp from "./Event/page";
import Event from "./Event/Events";
import Sponsors from "./Sponsors/Sponsors";
import VideoBackground from "../components/Video";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Video Background */}
        <VideoBackground />

        {/* Content */}
        <Hero />
        <Sponsors />
        <Zoom />
        <About />
        <Stats />
        <Why />
        <Event />
        <Comp />
        <Speakers />
      </div>
    </>
  );
}
