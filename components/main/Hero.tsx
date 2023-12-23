import React from "react";
import HeroContent from "../sub/HeroContent";
import "./style.css"

const Hero = () => {
  return (
    <div className="relative flex w-[100%] flex-col h-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute -top-[290px] xl:left-[136px] md:top-[-300px] xl:top-[-260px] h-full w-auto left-0 -z-[1] object-cover "
      >
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>
      <div className="hero-container h-screen">
        <div className="environment"></div>
        <h2 className="hero glitch layers my-auto font-bold scale-125 xl:scale-150 mt-20 font-CyberSport" data-text="E-SUMMIT 2024"><span>E-SUMMIT 2024</span></h2>
        <p className="text-white text-center md:text-3xl mt-8 md:mt-12 xl:mt-20 font-CyberGraph uppercase font-medium mx-4">North India’s Biggest Entrepreneurship Summit.</p>
        <p className="text-white text-center md:text-3xl font-bold mt-6 md:mt-12 font-Queensides uppercase">27 - 28 JANUARY, 2024</p>
      </div>
    </div>
  );
};

export default Hero;
