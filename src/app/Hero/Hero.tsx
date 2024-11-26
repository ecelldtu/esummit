import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  return (
    <div className="relative h-[100vh] w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-[100vh] w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          src={"/heronew.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 scale-[122%] md:scale-100 w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <h1 className="special-font hero-heading tracking-widest uppercase font-black sm:right-10 text-4xl md:text-7xl lg:text-8xl absolute bottom-24 md:bottom-5 right-5 z-40 text-white font-Hero">
          JANUARY 2025
        </h1>

        <div className="absolute left-0 top-0 z-40 w-full h-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font font-Hero tracking-widest hero-heading-main text-white">
              E-SUMMIT
            </h1>
            <p className="mb-5 max-w-108 font-DarkerBold text-3xl text-white">
              North India's Biggest Entrepreneurship Summit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
