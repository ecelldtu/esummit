import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  // useEffect(() => {
  //   gsap.set("#video-frame", {
  //     clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
  //     borderRadius: "0% 0% 40% 10%",
  //   });

  //   gsap.from("#video-frame", {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     borderRadius: "0% 0% 0% 0%",
  //     ease: "power1.inOut",
  //     scrollTrigger: {
  //       trigger: "#video-frame",
  //       start: "center center",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <div className="relative h-[100vh] w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-[100vh] w-screen overflow-hidden bg-black">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-[100vh] w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          // ref={videoRef}
          src="/HeroNew.mp4" // Update with your desired video path
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 scale-[122%] md:scale-100 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <h1 className="special-font hero-heading tracking-widest uppercase font-black sm:right-10 text-4xl md:text-7xl lg:text-8xl absolute bottom-24 md:bottom-5 right-5 z-40 text-white font-Hero">
          JANUARY 2025
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font font-Hero tracking-wide hero-heading-main text-white">
              E-SUMMIT
            </h1>

            <p className="mb-5 max-w-108 font-DarkerBold text-3xl text-white">
              North India's Biggest Entrepreneurship Summit
            </p>

            {/* Uncomment this if Button is needed */}
            {/* <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            /> */}
          </div>
        </div>
      </div>

      {/* <h1 className="special-font hero-heading-main font-Hero absolute bottom-5 right-5 text-white">
        JANUARY 2025
      </h1> */}
    </div>
  );
};

export default Hero;
