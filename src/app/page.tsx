"use client";
import Hero from "./Hero/Page";
import About from "./About/page";
import Stats from "./Stats/page";
import Why from "./Why/page";
import Speakers from "./Speakers";
import Redirect from "../components/Redirect";
import Comp from "./Event/page";
import Event from "./Event/Events";
import Sponsors from "./Sponsors/Sponsors";
import dynamic from "next/dynamic";
import LazyMount from "../components/perf/LazyMount";

const SponsorsGallery = dynamic(() => import("../components/gallery/SponsorsGallery"), {
  ssr: false,
  loading: () => <div className="h-40" />,
});

const YouTubeShortPip = dynamic(() => import("../components/media/YouTubeShortPip"), {
  ssr: false,
  loading: () => <div className="h-56" />,
});

const AnoAI = dynamic(() => import("../components/ui/animated-shader-background"), {
  ssr: false,
  // Avoid layout shift; render a cheap static background until WebGL mounts.
  loading: () => (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{ background: "radial-gradient(circle at 50% 30%, rgba(99,102,241,0.22), rgba(2,6,23,1) 55%)" }}
    />
  ),
});

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Shader background mounted fixed behind content */}
        <AnoAI />

        {/* Site content (keeps higher stacking context) */}
        <div className="relative z-10">
          <Hero />

          <LazyMount rootMargin="600px" placeholder={<div className="h-24" />}>
            <Sponsors />
          </LazyMount>

          {/* Keep the scroll/pinned gallery mounted so ScrollTrigger can measure correctly */}
          <SponsorsGallery />

          <LazyMount rootMargin="800px" placeholder={<div className="h-56" />}>
            <YouTubeShortPip videoId="mF89SCQQBy4" title="E-Summit 2026" />
          </LazyMount>

          <LazyMount rootMargin="700px" placeholder={<div className="h-40" />}>
            <About />
          </LazyMount>

          <LazyMount rootMargin="700px" placeholder={<div className="h-40" />}>
            <Stats />
          </LazyMount>

          <LazyMount rootMargin="700px" placeholder={<div className="h-40" />}>
            <Why />
          </LazyMount>

          <LazyMount rootMargin="700px" placeholder={<div className="h-40" />}>
            <Event />
          </LazyMount>

          <LazyMount rootMargin="700px" placeholder={<div className="h-40" />}>
            <Comp />
          </LazyMount>

          <LazyMount rootMargin="900px" placeholder={<div className="h-40" />}>
            <Speakers />
          </LazyMount>
        </div>
      </div>
    </>
  );
}
